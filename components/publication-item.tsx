import Link from "next/link";

import { AuthorList } from "@/components/author-list";
import { Badge } from "@/components/ui/badge";
import { Thumbnail } from "@/components/thumbnail";
import { publications } from "@/lib/data";

type Publication = (typeof publications)[number];

export function PublicationItem({ publication }: { publication: Publication }) {
  const isExternalReport = publication.type === "Report" && publication.url;

  return (
    <li className="py-5">
      <Link
        href={isExternalReport ? publication.url! : `/publications/${publication.id}`}
        target={isExternalReport ? "_blank" : undefined}
        rel={isExternalReport ? "noopener noreferrer" : undefined}
        className="group flex flex-row-reverse gap-5"
      >
        <Thumbnail
          src={publication.image}
          alt={publication.title}
          className="aspect-video w-52 sm:w-80"
        />
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{publication.type}</Badge>
            <p className="font-mono text-xs italic text-muted-foreground/80">
              {publication.venue}{" "}
              {publication.status !== "Completed"
                ? `(${publication.status})`
                : ""}
            </p>
          </div>
          <h3 className="font-serif text-lg font-medium leading-snug text-foreground group-hover:underline">
            {publication.title}
          </h3>
          <AuthorList
            authors={publication.authors}
            className="mt-1.5 text-sm text-muted-foreground"
          />
          <div className="mt-2.5 flex flex-wrap gap-2">
            {publication.tags.map((tag) => (
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
