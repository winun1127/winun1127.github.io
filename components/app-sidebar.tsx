"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  Folder,
  GraduationCap,
  Home,
  Lightbulb,
  Mail,
  ScrollText,
  BookOpen,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: Folder },
  { href: "/publications", label: "Publications", icon: BookOpen },
  { href: "/patents", label: "Patents", icon: Lightbulb },
  { href: "/resume", label: "Resume", icon: ScrollText },
];

function GithubMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.17.69-3.84-1.35-3.84-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.34-5.21 5.62.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.03 11.03 0 0 0 23 11.52C23 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2 py-1.5 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
          <div className="flex min-w-0 flex-col group-data-[collapsible=icon]:hidden">
            <span className="truncate font-serif text-base font-semibold leading-tight text-foreground">
              SeungEon Cha
            </span>
            <span className="truncate text-xs text-muted-foreground">
              M.S. Student
            </span>
          </div>
        </div>

        <div className="flex items-start gap-1.5 px-2 text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">
          <Building2 className="mt-0.5 size-3.5 shrink-0" />
          <span className="leading-snug">
            <Link href="https://hai.seoultech.ac.kr/index.do">
              SeoulTech HAI Lab
            </Link>
          </span>
        </div>

        <SidebarSeparator className="my-1" />

        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="sm"
              tooltip="secha@seoultech.ac.kr"
              render={<a href="mailto:secha@seoultech.ac.kr" />}
            >
              <Mail />
              <span>secha@seoultech.ac.kr</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="sm"
              tooltip="GitHub"
              render={
                <a
                  href="https://github.com/winun1127"
                  target="_blank"
                  rel="noreferrer"
                />
              }
            >
              <GithubMark className="size-4" />
              <span>GitHub</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="sm"
              tooltip="LinkedIn"
              render={
                <a
                  href="https://www.linkedin.com/in/seungeon-cha-9b7359335/"
                  target="_blank"
                  rel="noreferrer"
                />
              }
            >
              <LinkedinMark className="size-4" />
              <span>LinkedIn</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="sm"
              tooltip="Google Scholar"
              render={
                <a
                  href="https://scholar.google.com/citations?user=aYES_mAAAAAJ"
                  target="_blank"
                  rel="noreferrer"
                />
              }
            >
              <GraduationCap />
              <span>Google Scholar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      isActive={isActive}
                      tooltip={item.label}
                      render={<Link href={item.href} />}
                    >
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <p className="px-2 py-1 font-mono text-[10px] tracking-wide text-muted-foreground/70 group-data-[collapsible=icon]:hidden">
          &copy; 2026 SeungEon Cha
        </p>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
