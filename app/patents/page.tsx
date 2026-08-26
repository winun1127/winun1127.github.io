import { PatentItem } from "@/components/patent-item";
import { patents } from "@/lib/data";

function groupByYear(items: typeof patents) {
  const yearOf = (period: string) => Number(period.slice(0, 4));
  const years = Array.from(
    new Set(items.map((item) => yearOf(item.period))),
  ).sort((a, b) => b - a);
  return years.map((year) => ({
    year,
    items: items.filter((item) => yearOf(item.period) === year),
  }));
}

export default function PatentsPage() {
  const groups = groupByYear(patents);

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
      <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-foreground">
        Patents
      </h1>

      <div className="mt-10 space-y-10">
        {groups.map((group) => (
          <section key={group.year}>
            <h2 className="font-serif text-2xl font-medium text-foreground/60">
              {group.year}
            </h2>
            <ul className="mt-3 divide-y divide-border border-t border-border">
              {group.items.map((patent) => (
                <PatentItem key={patent.id} patent={patent} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
