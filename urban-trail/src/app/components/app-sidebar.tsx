// src/components/sidebar/app-sidebar.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Inbox, Settings, Menu } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "./ui/tooltip"
import { Button } from "./ui/button"
import clsx from "clsx"

const items = [
  { title: "Vehicles Deployed", url: "/vehicles", icon: Home },
  { title: "Worker Attendance", url: "/attendance", icon: Inbox },
  { title: "Settings", url: "/settings", icon: Settings },
]

export function AppSidebar() {
  const [expanded, setExpanded] = useState(true)
  const pathname = usePathname()

  return (
    <TooltipProvider>
      <div className={clsx(
        "h-screen bg-blue-100 text-blue-800 border-r border-blue-300 transition-all duration-300",
        expanded ? "w-64" : "w-16"
      )}>
        {/* Toggle Button */}
        <div className="flex items-center justify-between p-2">
          <span className={clsx("text-lg font-bold", !expanded && "hidden")}>Urban Trail</span>
          <Button variant="ghost" size="icon" onClick={() => setExpanded(!expanded)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-2 mt-4 px-2">
          {items.map(({ title, url, icon: Icon }) => {
            const isActive = pathname === url

            const link = (
              <Link
                href={url}
                className={clsx(
                  "flex items-center gap-3 px-4 py-2 rounded text-sm font-medium transition-colors",
                  isActive ? "bg-blue-700 text-white" : "hover:bg-blue-300 text-blue-800"
                )}
              >
                <Icon className="w-5 h-5" />
                {expanded && <span>{title}</span>}
              </Link>
            )

            return !expanded ? (
              <Tooltip key={title}>
                <TooltipTrigger asChild>{link}</TooltipTrigger>
                <TooltipContent side="right">{title}</TooltipContent>
              </Tooltip>
            ) : (
              <div key={title}>{link}</div>
            )
          })}
        </nav>
      </div>
    </TooltipProvider>
  )
}
