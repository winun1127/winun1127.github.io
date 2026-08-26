import { PublicationItem } from "@/components/publication-item";
import { publications } from "@/lib/data";

function groupByYear(items: typeof publications) {
  const years = Array.from(new Set(items.map((item) => item.year))).sort(
    (a, b) => b - a,
  );
  return years.map((year) => ({
    year,
    items: items.filter((item) => item.year === year),
  }));
}

export default function PublicationsPage() {
  const groups = groupByYear(publications);

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
      <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-foreground">
        Publications
      </h1>

      <div className="mt-10 space-y-10">
        {groups.map((group) => (
          <section key={group.year}>
            <h2 className="font-serif text-2xl font-medium text-foreground/60">
              {group.year}
            </h2>
            <ul className="mt-3 divide-y divide-border border-t border-border">
              {group.items.map((pub) => (
                <PublicationItem key={pub.id} publication={pub} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
