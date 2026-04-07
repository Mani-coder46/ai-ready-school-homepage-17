import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="bg-primary py-20 md:py-28">
    <div className="container text-center">
      <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
        Start Your School's AI Journey Today
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
        Join forward-thinking institutions adopting AI responsibly.
      </p>
      <Button
        size="lg"
        variant="secondary"
        className="mt-8"
      >
        Book a Demo
      </Button>
    </div>
  </section>
);

export default CTASection;
