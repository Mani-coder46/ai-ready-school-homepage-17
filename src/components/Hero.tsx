import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-surface to-background py-20 md:py-28">
    <div className="container grid items-center gap-12 md:grid-cols-2">
      <div className="max-w-lg animate-fade-in-up">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Make Your School{" "}
          <span className="text-primary">AI-Ready</span>
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          A complete AI ecosystem for students, teachers, and institutions to
          adopt AI safely and effectively.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg">Book a Demo</Button>
          <Button size="lg" variant="outline">
            Explore Products
          </Button>
        </div>
      </div>

      <div className="flex justify-center animate-fade-in-up [animation-delay:200ms]">
        <img
          src={heroIllustration}
          alt="AI ecosystem illustration for schools"
          className="w-full max-w-md"
          loading="eager"
        />
      </div>
    </div>
  </section>
);

export default Hero;
