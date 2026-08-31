const RESUME_PDF_PATH = "/resume.pdf";

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
      <div>
        <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-foreground">
          Resume
        </h1>
        <a
          href={RESUME_PDF_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Open PDF
          <span aria-hidden>↗</span>
        </a>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-sm">
        <iframe
          src={`${RESUME_PDF_PATH}#view=FitH`}
          title="Resume"
          className="h-[85vh] w-full bg-muted"
        />
      </div>
    </div>
  );
}
