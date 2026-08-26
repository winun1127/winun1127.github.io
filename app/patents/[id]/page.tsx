import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Thumbnail } from "@/components/thumbnail";
import { patents, projects } from "@/lib/data";

export function generateStaticParams() {
  return patents.map((patent) => ({ id: patent.id }));
}

export default async function PatentDetailPage(
  props: PageProps<"/patents/[id]">,
) {
  const { id } = await props.params;
  const patent = patents.find((p) => p.id === id);

  if (!patent) notFound();

  const relatedProjects = projects.filter((project) =>
    project.relatedPatents.includes(patent.id),
  );

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
      <Link
        href="/patents"
        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3" />
        All patents
      </Link>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        <Badge variant="secondary">{patent.status}</Badge>
        {patent.with && (
          <p className="font-mono text-xs italic text-muted-foreground/80">
            w/ {patent.with}
          </p>
        )}
      </div>
      <h1 className="mt-3 font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
        {patent.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
        <span>{patent.period}</span>
        <span>({patent.applicationNo})</span>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {patent.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <Thumbnail
        src={patent.image}
        alt={patent.title}
        className="mt-6 aspect-video w-full"
      />

      {relatedProjects.length > 0 && (
        <div className="mt-10 max-w-4xl border-t border-border pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Related Projects
          </p>
          <ul className="mt-3 divide-y divide-border">
            {relatedProjects.map((project) => (
              <li key={project.slug} className="py-3">
                <Link
                  href={`/projects/${project.slug}`}
                  className="font-serif text-base font-medium text-foreground hover:underline"
                >
                  {project.title}
                </Link>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {project.period}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
