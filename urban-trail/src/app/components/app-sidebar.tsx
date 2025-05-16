"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Inbox, Settings, Menu } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "./ui/tooltip"
import { Button } from "./ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "./ui/sidebar"
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
      <Sidebar className={clsx(
        "bg-blue-100 text-blue-800 border-blue-300 transition-all duration-300",
        expanded ? "w-64" : "w-16"
      )}>
        <SidebarContent>
          <div className="flex items-center justify-between p-2">
            {expanded && <span className="text-lg font-bold">Urban Trail</span>}
            <Button variant="ghost" size="icon" onClick={() => setExpanded(!expanded)} aria-label="Toggle Sidebar">
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map(({ title, url, icon: Icon }) => {
                  const isActive = pathname === url

                  const menuItem = (
                    <SidebarMenuItem key={title}>
                      <SidebarMenuButton asChild className={clsx(isActive && "bg-blue-700 text-white")}> 
                        <Link
                          href={url}
                          className={clsx(
                            "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium",
                            isActive ? "bg-blue-700 text-white" : "hover:bg-blue-300 text-blue-800"
                          )}
                        >
                          <Icon className="w-5 h-5" />
                          {expanded && <span>{title}</span>}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )

                  return expanded ? (
                    menuItem
                  ) : (
                    <Tooltip key={title}>
                      <TooltipTrigger asChild>{menuItem}</TooltipTrigger>
                      <TooltipContent side="right">{title}</TooltipContent>
                    </Tooltip>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </TooltipProvider>
  )
}
