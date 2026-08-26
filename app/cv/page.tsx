import { cv, patents, projects, publications } from "@/lib/data";

function TimelineSection({
  title,
  items,
}: {
  title: string;
  items: { period: string; title: string; place?: string; detail?: string }[];
}) {
  return (
    <section>
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </h2>
      <ul className="mt-4 space-y-6 border-t border-border pt-6">
        {items.map((item, index) => (
          <li
            key={index}
            className="grid grid-cols-[7rem_1fr] gap-4 sm:grid-cols-[9rem_1fr]"
          >
            <span className="font-mono text-xs text-muted-foreground">
              {item.period}
            </span>
            <div>
              <h3 className="font-serif text-base font-medium leading-snug text-foreground">
                {item.title}
              </h3>
              {item.place && (
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {item.place}
                </p>
              )}
              {item.detail && (
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground/90">
                  {item.detail}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

const publicationItems = [...publications]
  .sort((a, b) => b.year - a.year)
  .map((pub) => ({
    period: String(pub.year),
    title: pub.title,
    place: pub.venue,
    detail: pub.authors.join(", "),
  }));

const patentItems = [...patents]
  .sort((a, b) => b.period.localeCompare(a.period))
  .map((patent) => ({
    period: patent.period,
    title: patent.title,
    place: patent.with,
    detail: patent.applicationNo,
  }));

const projectItems = [...projects]
  .sort((a, b) => b.period.localeCompare(a.period))
  .map((project) => ({
    period: project.period,
    title: project.title,
    place: [project.with, project.role].filter(Boolean).join(" · "),
    detail: project.summary,
  }));

export default function CVPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
      <div>
        <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-foreground">
          CV
        </h1>
      </div>

      <div className="mt-10 space-y-12">
        <TimelineSection title="Education" items={cv.education} />
        <TimelineSection title="Experience" items={cv.experience} />
        <TimelineSection title="Projects" items={projectItems} />
        <TimelineSection title="Publications" items={publicationItems} />
        <TimelineSection title="Patents" items={patentItems} />
        <TimelineSection title="Awards & Honors" items={cv.awards} />
      </div>
    </div>
  );
}
