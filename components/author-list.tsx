const OWN_NAME = "SeungEon Cha";

export function AuthorList({
  authors,
  className,
}: {
  authors: string[];
  className?: string;
}) {
  return (
    <p className={className}>
      {authors.map((name, index) => (
        <span key={`${name}-${index}`}>
          {index > 0 && ", "}
          {name === OWN_NAME ? (
            <strong className="font-semibold text-foreground">{name}</strong>
          ) : (
            name
          )}
        </span>
      ))}
    </p>
  );
}
