"use client";

import Image from "next/image";
import { useState } from "react";

export function Thumbnail({
  src,
  alt,
  className,
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return null;

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-md border border-border bg-muted ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        loading="eager"
        className="object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
