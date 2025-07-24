import { Menu } from "lucide-react"
import { SidebarTrigger } from "./ui/sidebar"

export function AppHeader() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-2 bg-white shadow">
      <SidebarTrigger />  
      <div className="flex items-center gap-3">
        <Menu className="h-6 w-6 text-gray-700 sm:hidden" />
        <span className="text-xl font-bold tracking-tight text-gray-900">My App</span>
      </div>
      <div className="flex-grow"></div>
      <nav className="hidden sm:flex gap-6">
        <a href="/" className="text-gray-700 hover:text-black font-medium">Home</a>
        <a href="/settings" className="text-gray-700 hover:text-black font-medium">Settings</a>
      </nav>
    </header>
  )
}
