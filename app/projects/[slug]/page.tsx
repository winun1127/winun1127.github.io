import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Fragment } from "react";

import { Badge } from "@/components/ui/badge";
import { Thumbnail } from "@/components/thumbnail";
import { patents, projects, publications } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function renderInlineText(text: string) {
  return text.split(/(\*\*.+?\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function renderFormattedBlock(text: string) {
  return text.split("\n\n").map((paragraph, pIdx) => {
    const lines = paragraph.split("\n");
    const isList = lines.every(
      (line, i) => i === 0 || line.trimStart().startsWith("-"),
    );

    if (isList && lines.length > 1) {
      const [intro, ...items] = lines;
      return (
        <div key={pIdx}>
          {intro && <p>{renderInlineText(intro)}</p>}
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            {items.map((item, i) => (
              <li key={i}>{renderInlineText(item.replace(/^-\s*/, ""))}</li>
            ))}
          </ul>
        </div>
      );
    }

    return (
      <p key={pIdx}>
        {lines.map((line, i) => (
          <Fragment key={i}>
            {i > 0 && <br />}
            {renderInlineText(line)}
          </Fragment>
        ))}
      </p>
    );
  });
}

export default async function ProjectDetailPage(
  props: PageProps<"/projects/[slug]">,
) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3" />
        All projects
      </Link>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        <Badge variant="secondary">{project.type}</Badge>
        {project.with && (
          <p className="font-mono text-xs italic text-muted-foreground/80">
            w/ {project.with}
          </p>
        )}
      </div>
      <h1 className="mt-3 font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
        {project.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
        <span>{project.period}</span>
        <span>({project.status})</span>
      </div>

      <div className="mt-3 space-y-1 text-sm leading-relaxed text-muted-foreground">
        {(project.role || project.funding) && (
          <p>
            {project.role}
            {project.role && project.funding && <> &middot; </>}
            {project.funding}
          </p>
        )}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      <Thumbnail
        src={project.image}
        alt={project.title}
        className="mt-6 aspect-video w-full"
      />

      {project.summary && (
        <div className="mt-8 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            TL;DR
          </p>
          <p className="mt-2 font-serif text-lg italic leading-relaxed text-foreground/90">
            {renderInlineText(project.summary)}
          </p>
        </div>
      )}

      {project.description && (
        <div className="mt-10 max-w-4xl space-y-4 border-t border-border pt-8 text-sm leading-relaxed text-foreground/90">
          {renderFormattedBlock(project.description)}
        </div>
      )}

      {project.contribution.length > 0 && (
        <div className="mt-10 max-w-4xl border-t border-border pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Contribution
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/90">
            {project.contribution.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {project.skills.length > 0 && (
        <div className="mt-10 max-w-4xl border-t border-border pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Skills
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <Badge key={skill} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {(project.relatedPublications.length > 0 ||
        project.relatedPatents.length > 0) && (
        <div className="mt-10 max-w-4xl border-t border-border pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Related Achievements
          </p>
          <ul className="mt-3 divide-y divide-border">
            {publications
              .filter((pub) => project.relatedPublications.includes(pub.id))
              .map((pub) => (
                <li key={pub.id} className="py-3">
                  <Badge variant="secondary" className="shrink-0">
                    Publication
                  </Badge>
                  <div className="mt-1.5">
                    <Link
                      href={
                        pub.type === "Report" && pub.url
                          ? pub.url
                          : `/publications/${pub.id}`
                      }
                      target={
                        pub.type === "Report" && pub.url ? "_blank" : undefined
                      }
                      rel={
                        pub.type === "Report" && pub.url
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="font-serif text-base font-medium text-foreground hover:underline"
                    >
                      {pub.title}
                    </Link>
                  </div>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {pub.venue}
                  </p>
                </li>
              ))}
            {patents
              .filter((patent) => project.relatedPatents.includes(patent.id))
              .map((patent) => (
                <li key={patent.id} className="py-3">
                  <Badge variant="outline" className="shrink-0">
                    Patent
                  </Badge>
                  <div className="mt-1.5">
                    <Link
                      href={`/patents/${patent.id}`}
                      className="font-serif text-base font-medium text-foreground hover:underline"
                    >
                      {patent.title}
                    </Link>
                  </div>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {patent.applicationNo}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
