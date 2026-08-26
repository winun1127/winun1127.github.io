import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Thumbnail } from "@/components/thumbnail";
import { patents } from "@/lib/data";

type Patent = (typeof patents)[number];

export function PatentItem({ patent }: { patent: Patent }) {
  return (
    <li className="py-5">
      <Link
        href={`/patents/${patent.id}`}
        className="group flex flex-row-reverse gap-5"
      >
        <Thumbnail
          src={patent.image}
          alt={patent.title}
          className="aspect-video w-52 sm:w-80"
        />
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{patent.status}</Badge>
            {patent.with && (
              <p className="font-mono text-xs italic text-muted-foreground/80">
                w/ <span className="font-semibold">{patent.with}</span>
              </p>
            )}
          </div>
          <h3 className="font-serif text-lg font-medium leading-snug text-foreground group-hover:underline">
            {patent.title}
          </h3>
          <div className="mt-1.5 flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
            <span>{patent.period}</span>
            <span>({patent.applicationNo})</span>
          </div>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {patent.tags.map((tag) => (
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
