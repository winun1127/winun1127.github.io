"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"))
  }, [])

  function toggleTheme() {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("relative", className)}
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      <Sun className="scale-100 dark:scale-0" />
      <Moon className="absolute scale-0 dark:scale-100" />
    </Button>
  )
}
