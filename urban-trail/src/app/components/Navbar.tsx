"use client"

import { Menu, ChevronLeft } from "lucide-react"
import { Button } from "./ui/button"

interface NavbarProps {
  expanded: boolean
  toggleSidebar: () => void
  onMobileToggle: () => void
}

export function Navbar({ expanded, toggleSidebar, onMobileToggle }: NavbarProps) {
  return (
    <header className="w-full flex items-center justify-between bg-blue-700 px-4 py-3 text-white shadow-md">
      {/* Desktop Toggle */}
      <div className="hidden md:block">
        <Button variant="ghost" onClick={toggleSidebar} className="text-white p-0">
          {expanded ? <ChevronLeft className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <Button variant="ghost" onClick={onMobileToggle} className="text-white p-0">
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      <h1 className="text-lg font-semibold select-none mx-auto md:ml-4">Urban Trail</h1>

      <div className="w-6 h-6" /> {/* Spacer */}
    </header>
  )
}
