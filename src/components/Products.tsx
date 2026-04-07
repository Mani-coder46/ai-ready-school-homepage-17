import { GraduationCap, BookOpen, Zap, Lightbulb, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Product {
  name: string;
  description: string;
  icon: LucideIcon;
}

const products: Product[] = [
  { name: "Cypher", description: "AI learning companion for students", icon: GraduationCap },
  { name: "Morpheus", description: "AI teaching assistant for teachers", icon: BookOpen },
  { name: "Zion", description: "AI tools for productivity", icon: Zap },
  { name: "NEO", description: "AI innovation lab for schools", icon: Lightbulb },
  { name: "Matrix", description: "AI infrastructure for institutions", icon: Server },
];

const Products = () => (
  <section id="products" className="bg-section-alt py-20 md:py-28">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          One Platform. Five Powerful AI Systems.
        </h2>
        <p className="mt-3 text-muted-foreground">
          Everything your school needs — integrated under one ecosystem.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {products.map((p) => (
          <div
            key={p.name}
            className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <p.icon size={22} />
            </div>
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
