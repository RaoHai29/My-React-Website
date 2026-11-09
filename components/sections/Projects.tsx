import { featuredProject, projects } from "@/lib/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedProjectCard } from "@/components/ui/FeaturedProjectCard";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        id="projects-title"
        eyebrow="Recent work"
        title="Featured projects"
        description="Client platforms, e-commerce stores and web applications — designed, built and shipped end to end."
      />

      <FeaturedProjectCard project={featuredProject} />

      <h3 className="sr-only">More projects</h3>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </ul>
    </section>
  );
}
