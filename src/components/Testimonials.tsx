import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "AI Ready School has transformed how our teachers and students interact with technology. The ecosystem approach makes it seamless.",
    name: "Dr. Priya Sharma",
    role: "Principal, Delhi Public School",
  },
  {
    quote:
      "We were looking for a responsible way to introduce AI in our classrooms. This platform gave us the confidence and tools to do it right.",
    name: "Rajesh Menon",
    role: "Academic Head, Greenfield Academy",
  },
  {
    quote:
      "From student learning to administrative efficiency — everything improved within the first semester of implementation.",
    name: "Anita Desai",
    role: "Director, Sunrise International School",
  },
];

const Testimonials = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container">
      <h2 className="text-center text-3xl font-bold md:text-4xl">
        Trusted by Schools Across India
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
        Hear from educators who are already building AI-ready institutions.
      </p>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-col rounded-xl border border-border bg-card p-6"
          >
            <Quote size={24} className="mb-4 text-primary/40" />
            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
              "{t.quote}"
            </p>
            <div className="mt-6 border-t border-border pt-4">
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
