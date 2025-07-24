import { Menu } from 'lucide-react'
import { SidebarTrigger } from './ui/sidebar'
import { ThemeToggle } from './theme-toggle'

export function AppHeader() {
  return (
    <header className="w-full flex items-center justify-between px-2 py-2 bg-background">
      <SidebarTrigger />  
      <div className="flex items-center gap-3">
        <Menu className="h-6 w-6 text-gray-700 sm:hidden" />
        <span className="text-xl font-bold tracking-tigh">Demo</span>
      </div>
      <div className="flex-grow"></div>
      <nav className="hidden sm:flex gap-6">
        <a href="/" className="font-medium">Home</a>
        <a href="/settings" className="font-medium">Settings</a>
      </nav>
      <ThemeToggle />
    </header>
  )
}
