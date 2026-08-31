"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { patents, projects, publications } from "@/lib/data";

const labels: Record<string, string> = {
  "/": "Home",
  "/projects": "Projects",
  "/publications": "Publications",
  "/patents": "Patents",
  "/resume": "Resume",
};

type Crumb = { label: string; href?: string };

const TITLE_MAX_LENGTH = 50;

function shortenTitle(title: string): string {
  if (title.length <= TITLE_MAX_LENGTH) return title;
  const [head] = title.split(":");
  return head.trim();
}

function getBreadcrumb(pathname: string): Crumb[] {
  if (pathname.startsWith("/projects/")) {
    const slug = pathname.slice("/projects/".length);
    const project = projects.find((p) => p.slug === slug);
    return [
      { label: "Projects", href: "/projects" },
      { label: project ? shortenTitle(project.title) : slug },
    ];
  }
  if (pathname.startsWith("/publications/")) {
    const id = pathname.slice("/publications/".length);
    const publication = publications.find((p) => p.id === id);
    return [
      { label: "Publications", href: "/publications" },
      { label: publication ? shortenTitle(publication.title) : id },
    ];
  }
  if (pathname.startsWith("/patents/")) {
    const id = pathname.slice("/patents/".length);
    const patent = patents.find((p) => p.id === id);
    return [
      { label: "Patents", href: "/patents" },
      { label: patent ? shortenTitle(patent.title) : id },
    ];
  }
  return [{ label: labels[pathname] ?? "Home" }];
}

export function SiteHeader() {
  const pathname = usePathname();
  const crumbs = getBreadcrumb(pathname);

  return (
    <header className="flex h-12 shrink-0 items-center gap-2 border-b border-border px-4">
      <SidebarTrigger />
      <Breadcrumb className="min-w-0 truncate font-mono text-[11px]">
        <BreadcrumbList className="flex-nowrap gap-1 text-[11px]">
          <BreadcrumbItem>
            <BreadcrumbLink
              render={<Link href="/" />}
              className="shrink-0 text-muted-foreground"
            >
              Portfolio
            </BreadcrumbLink>
          </BreadcrumbItem>
          {crumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="min-w-0">
                {crumb.href ? (
                  <BreadcrumbLink
                    render={<Link href={crumb.href} />}
                    className="min-w-0 truncate text-muted-foreground"
                  >
                    {crumb.label}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="min-w-0 truncate">
                    {crumb.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <ThemeToggle className="ml-auto" />
    </header>
  );
}
