'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Overview' },
  { href: '/scatter', label: 'Scatter Plot' },
  { href: '/line', label: 'Line Plot' },
  { href: '/bar', label: 'Bar Chart' },
  { href: '/pie', label: 'Pie Chart' },
  { href: '/doughnut', label: 'Doughnut Chart' },
  { href: '/radar', label: 'Radar Chart' },
  { href: '/polar', label: 'Polar Chart' },
  { href: '/bubble', label: 'Bubble Chart' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-gray-900 text-white p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold">Three-Plot</h1>
        <p className="text-gray-400 text-sm">3D Charting Demo</p>
      </div>
      
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  pathname === item.href
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
} 