import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import profileImage from "@/public/profile.png";

import { PatentItem } from "@/components/patent-item";
import { ProjectItem } from "@/components/project-item";
import { PublicationItem } from "@/components/publication-item";
import { Badge } from "@/components/ui/badge";
import { cv, interests, patents, projects, publications } from "@/lib/data";

function byFeaturedOrder<T extends { featured?: number }>(items: T[]): T[] {
  return items
    .filter((item) => item.featured != null)
    .sort((a, b) => a.featured! - b.featured!);
}

const highlights = [
  {
    label: "R&D Projects",
    value: `${projects.filter((p) => p.type === "연구개발과제").length}`,
    sub: `${projects.filter((p) => p.role === "실무책임자").length} as Lead`,
  },
  {
    label: "Publications",
    value: `${publications.filter((p) => p.authors[0] === "SeungEon Cha").length}`,
    sub: "65 citations",
  },
  {
    label: "AI Agents Deployed",
    value: `${projects.filter((p) => p.tags.includes("AI Agent") && p.status === "Completed").length}`,
    sub: "3 Years",
  },
];

export default function Home() {
  const selectedProjects = byFeaturedOrder(projects);
  const selectedPublications = byFeaturedOrder(publications);
  const selectedPatents = byFeaturedOrder(patents);

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
      {/* Hero */}
      <section className="flex flex-wrap items-stretch justify-between gap-4">
        <div className="flex flex-col">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            AI Agent Engineer
          </p>
          <h1 className="mt-4 text-balance font-serif text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl">
            SeungEon Cha
          </h1>

          <div className="mt-6 flex flex-wrap gap-2">
            {interests.map((interest) => (
              <Badge key={interest} variant="secondary">
                {interest}
              </Badge>
            ))}
          </div>

          <div className="mt-6 grid flex-1 grid-cols-3 gap-4">
            {highlights.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border px-4 py-3"
              >
                <p className="font-serif text-2xl font-medium text-foreground">
                  {stat.value}
                </p>
                <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  {stat.label}
                </p>
                {stat.sub && (
                  <p className="mt-1 font-mono text-[10px] text-muted-foreground/70">
                    {stat.sub}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <Image
          src={profileImage}
          alt="SeungEon Cha"
          priority
          className="h-64 w-auto aspect-2/3 rounded-lg object-cover"
        />
      </section>

      {/* About */}
      <section className="mt-12 border-y border-border py-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          About
        </p>
        <p className="mt-3 font-serif text-lg italic leading-relaxed text-foreground/90">
          I build{" "}
          <strong className="font-semibold not-italic">AI Agents for AX</strong>{" "}
          — turning inefficient and repetitive work into AI-assisted workflows
          that improve productivity for organizations and individuals. My work
          centers on designing and developing tools, workflows, skills, and
          memory for LLM-based agents.
        </p>
        <p className="mt-3 font-serif text-lg italic leading-relaxed text-foreground/90">
          I've collaborated with Hyundai Motor Group, i-SENS, and SNC Lab on R&D
          projects, building and deploying these agents inside their
          organizations — from generating UI that follows a company's design
          system, to analyzing manufacturing QC data, to auditing web
          accessibility and writing reports.
        </p>
      </section>

      {/* Skills */}
      <section className="mt-14 mb-4">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Skills
        </h2>
        <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-6">
          {cv.skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Selected projects */}
      <section className="mt-14">
        <div className="flex items-baseline justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Selected Projects
          </h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
          >
            View all
            <ArrowUpRight className="size-3" />
          </Link>
        </div>

        <ul className="mt-4 divide-y divide-border border-t border-border">
          {selectedProjects.map((project) => (
            <ProjectItem key={project.slug} project={project} />
          ))}
        </ul>
      </section>

      {/* Selected publications */}
      <section className="mt-14">
        <div className="flex items-baseline justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Selected Publications
          </h2>
          <Link
            href="/publications"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
          >
            View all
            <ArrowUpRight className="size-3" />
          </Link>
        </div>

        <ul className="mt-4 divide-y divide-border border-t border-border">
          {selectedPublications.map((pub) => (
            <PublicationItem key={pub.id} publication={pub} />
          ))}
        </ul>
      </section>

      {/* Selected patents */}
      <section className="mt-14">
        <div className="flex items-baseline justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Selected Patents
          </h2>
          <Link
            href="/patents"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
          >
            View all
            <ArrowUpRight className="size-3" />
          </Link>
        </div>

        <ul className="mt-4 divide-y divide-border border-t border-border">
          {selectedPatents.map((patent) => (
            <PatentItem key={patent.id} patent={patent} />
          ))}
        </ul>
      </section>
    </div>
  );
}
