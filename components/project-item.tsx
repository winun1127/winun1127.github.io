import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Thumbnail } from "@/components/thumbnail";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export function ProjectItem({ project }: { project: Project }) {
  return (
    <li className="py-7">
      <Link
        href={`/projects/${project.slug}`}
        className="group flex flex-row-reverse gap-5"
      >
        <Thumbnail
          src={project.image}
          alt={project.title}
          className="aspect-video w-52 sm:w-80"
        />
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{project.type}</Badge>
            {project.with && (
              <p className="font-mono text-xs italic text-muted-foreground/80">
                w/ <span className="font-semibold">{project.with}</span>
              </p>
            )}
          </div>
          <h3 className="font-serif text-xl font-medium text-foreground group-hover:underline">
            {project.title}
          </h3>
          <div className="mt-1 flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
            <span>{project.period}</span>
            <span>({project.status})</span>
          </div>

          <div className="mt-2 max-w-2xl space-y-1 text-sm leading-relaxed text-muted-foreground">
            {(project.role || project.funding) && (
              <p>
                {project.role}
                {project.role && project.funding && <> &middot; </>}
                {project.funding}
              </p>
            )}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </li>
  );
}
