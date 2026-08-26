import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import { AuthorList } from "@/components/author-list";
import { Badge } from "@/components/ui/badge";
import { Thumbnail } from "@/components/thumbnail";
import { projects, publications } from "@/lib/data";

export function generateStaticParams() {
  return publications.map((pub) => ({ id: pub.id }));
}

export default async function PublicationDetailPage(
  props: PageProps<"/publications/[id]">,
) {
  const { id } = await props.params;
  const publication = publications.find((p) => p.id === id);

  if (!publication) notFound();

  const relatedProjects = projects.filter((project) =>
    publication.relatedProjects.includes(project.slug),
  );

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
      <Link
        href="/publications"
        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3" />
        All publications
      </Link>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        {publication.type && (
          <Badge variant="secondary">{publication.type}</Badge>
        )}
        <p className="font-mono text-xs text-muted-foreground">
          {publication.venue}
        </p>
      </div>
      <h1 className="mt-3 font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
        {publication.title}
      </h1>

      <AuthorList
        authors={publication.authors}
        className="mt-4 text-sm text-muted-foreground"
      />

      <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          {publication.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        {publication.url && (
          <a
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            View paper
            <ArrowUpRight className="size-3.5" />
          </a>
        )}
      </div>

      <Thumbnail
        src={publication.image}
        alt={publication.title}
        className="mt-6 aspect-video w-full"
      />

      {publication.abstract && (
        <div className="mt-10 max-w-4xl border-t border-border pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Abstract
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/90">
            {publication.abstract}
          </p>
        </div>
      )}

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
