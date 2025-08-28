'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  Calendar, 
  Trophy, 
  FileText, 
  Settings, 
  Image,
  BarChart3,
  Database,
  ChevronDown,
  ChevronRight,
  Home,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  User
} from 'lucide-react'

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['dashboard', 'content'])
  const pathname = usePathname()

  const menuGroups = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <Home className="h-5 w-5" />,
      items: [
        { href: '/admin/dashboard', label: 'Statistici Generale', icon: <BarChart3 className="h-4 w-4" /> },
        { href: '/admin/dashboard/analytics', label: 'Analize Avansate', icon: <BarChart3 className="h-4 w-4" /> },
        { href: '/admin/dashboard/reports', label: 'Rapoarte', icon: <FileText className="h-4 w-4" /> }
      ]
    },
    {
      id: 'content',
      label: 'Conținut',
      icon: <FileText className="h-5 w-5" />,
      items: [
        { href: '/admin/atleti', label: 'Atleți', icon: <Users className="h-4 w-4" /> },
        { href: '/admin/evenimente', label: 'Evenimente', icon: <Calendar className="h-4 w-4" /> },
        { href: '/admin/continut/nou', label: 'Știri & Articole', icon: <FileText className="h-4 w-4" /> },
        { href: '/admin/galerie', label: 'Galerie Media', icon: <Image className="h-4 w-4" /> }
      ]
    },
    {
      id: 'results',
      label: 'Rezultate',
      icon: <Trophy className="h-5 w-5" />,
      items: [
        { href: '/admin/rezultate', label: 'Toate Rezultatele', icon: <Trophy className="h-4 w-4" /> },
        { href: '/admin/rezultate/clasamente', label: 'Clasamente', icon: <Trophy className="h-4 w-4" /> },
        { href: '/admin/rezultate/statistici', label: 'Statistici Performanță', icon: <BarChart3 className="h-4 w-4" /> }
      ]
    },
    {
      id: 'export',
      label: 'Export & Backup',
      icon: <Database className="h-5 w-5" />,
      items: [
        { href: '/admin/export/rezultate', label: 'Export Rezultate', icon: <Database className="h-4 w-4" /> },
        { href: '/admin/backup', label: 'Backup Date', icon: <Database className="h-4 w-4" /> },
        { href: '/admin/import', label: 'Import Date', icon: <Database className="h-4 w-4" /> }
      ]
    },
    {
      id: 'settings',
      label: 'Setări',
      icon: <Settings className="h-5 w-5" />,
      items: [
        { href: '/admin/setari/design', label: 'Personalizare Site', icon: <Settings className="h-4 w-4" /> },
        { href: '/admin/setari/utilizatori', label: 'Utilizatori', icon: <User className="h-4 w-4" /> },
        { href: '/admin/setari/securitate', label: 'Securitate', icon: <Settings className="h-4 w-4" /> }
      ]
    }
  ]

  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev => 
      prev.includes(groupId) 
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    )
  }

  const isActive = (href: string) => pathname === href

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-slate-600 hover:bg-slate-100"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-semibold text-slate-900">Admin Panel</h1>
          </div>
          <Button variant="ghost" size="sm" className="text-slate-600 hover:bg-slate-100">
            <Bell className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-white border-r border-slate-200 min-h-screen ${sidebarOpen ? '' : 'lg:block hidden'}`}>
          {/* Sidebar Header */}
          <div className="p-4 border-b border-slate-200">
            <div className="flex items-center justify-between">
              {sidebarOpen && (
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Admin Panel</h2>
                  <p className="text-sm text-slate-500">Club Atletism Sibiu</p>
                </div>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-slate-600 hover:bg-slate-100 hidden lg:flex"
              >
                {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-2">
            {menuGroups.map((group) => (
              <div key={group.id} className="mb-2">
                <button
                  onClick={() => toggleGroup(group.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                    sidebarOpen 
                      ? 'text-slate-700 hover:bg-slate-100 hover:text-slate-900' 
                      : 'text-slate-600 hover:bg-slate-100 justify-center'
                  }`}
                >
                  <span className="text-slate-500">{group.icon}</span>
                  {sidebarOpen && (
                    <>
                      <span className="flex-1 font-medium">{group.label}</span>
                      {expandedGroups.includes(group.id) ? (
                        <ChevronDown className="h-4 w-4 text-slate-400" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-slate-400" />
                      )}
                    </>
                  )}
                </button>

                {/* Submenu */}
                {sidebarOpen && expandedGroups.includes(group.id) && (
                  <div className="ml-6 mt-1 space-y-1">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          isActive(item.href)
                            ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-500'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        <span className={isActive(item.href) ? 'text-blue-500' : 'text-slate-400'}>
                          {item.icon}
                        </span>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="absolute bottom-4 left-2 right-2">
            <div className="border-t border-slate-200 pt-4">
              <Button
                variant="ghost"
                className={`w-full ${sidebarOpen ? 'justify-start' : 'justify-center'} text-slate-600 hover:bg-slate-100`}
                asChild
              >
                <Link href="/">
                  <LogOut className="h-4 w-4" />
                  {sidebarOpen && <span className="ml-2">Înapoi la Site</span>}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-h-screen">
          {/* Top Header */}
          <header className="bg-white border-b border-slate-200 px-6 py-4 hidden lg:block">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Caută în admin..."
                    className="w-80 pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" className="text-slate-600 hover:bg-slate-100">
                  <Bell className="h-4 w-4" />
                </Button>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-slate-900">Admin</p>
                    <p className="text-slate-500">Administrator</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
