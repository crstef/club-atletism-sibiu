import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Calendar, 
  Trophy, 
  FileText, 
  Settings, 
  Database, 
  Image,
  BarChart3,
  Plus,
  Edit,
  Download,
  Eye,
  Filter,
  Search,
  Bell,
  Palette,
  Globe,
  Shield,
  ArrowUpRight
} from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { 
      title: "Total Atleți", 
      value: "247", 
      change: "+12%", 
      icon: <Users className="h-8 w-8" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    { 
      title: "Evenimente Active", 
      value: "8", 
      change: "+2", 
      icon: <Calendar className="h-8 w-8" />,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    { 
      title: "Medalii Anul Acesta", 
      value: "89", 
      change: "+23%", 
      icon: <Trophy className="h-8 w-8" />,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    { 
      title: "Articole Publicate", 
      value: "156", 
      change: "+8", 
      icon: <FileText className="h-8 w-8" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const quickActions = [
    {
      title: "Gestionare Atleți",
      description: "Adaugă, editează sau vezi profilurile atleților",
      icon: <Users className="h-6 w-6" />,
      href: "/admin/atleti",
      color: "bg-blue-600 hover:bg-blue-700",
      actions: [
        { label: "Adaugă Atlet", href: "/admin/atleti/nou" },
        { label: "Lista Completă", href: "/admin/atleti" },
        { label: "Export Date", href: "/admin/atleti/export" }
      ]
    },
    {
      title: "Evenimente",
      description: "Programează și gestionează competițiile",
      icon: <Calendar className="h-6 w-6" />,
      href: "/admin/evenimente",
      color: "bg-green-600 hover:bg-green-700",
      actions: [
        { label: "Eveniment Nou", href: "/admin/evenimente/nou" },
        { label: "Calendarul", href: "/admin/evenimente" },
        { label: "Arhiva", href: "/admin/evenimente/arhiva" }
      ]
    },
    {
      title: "Știri & Conținut",
      description: "Publică și gestionează articolele",
      icon: <FileText className="h-6 w-6" />,
      href: "/admin/continut",
      color: "bg-purple-600 hover:bg-purple-700",
      actions: [
        { label: "Articol Nou", href: "/admin/continut/nou" },
        { label: "Draft-uri", href: "/admin/continut/drafts" },
        { label: "Publicat", href: "/admin/continut/published" }
      ]
    },
    {
      title: "Galerie Media",
      description: "Upload și organizare poze/videouri",
      icon: <Image className="h-6 w-6" />,
      href: "/admin/galerie",
      color: "bg-orange-600 hover:bg-orange-700",
      actions: [
        { label: "Upload Poze", href: "/admin/galerie/upload" },
        { label: "Organizare", href: "/admin/galerie" },
        { label: "Backup", href: "/admin/galerie/backup" }
      ]
    },
    {
      title: "Rezultate & Clasamente",
      description: "Înregistrează performanțele și rezultatele",
      icon: <Trophy className="h-6 w-6" />,
      href: "/admin/rezultate",
      color: "bg-yellow-600 hover:bg-yellow-700",
      actions: [
        { label: "Adaugă Rezultat", href: "/admin/rezultate/nou" },
        { label: "Clasamente", href: "/admin/rezultate" },
        { label: "Statistici", href: "/admin/rezultate/stats" }
      ]
    },
    {
      title: "Setări Site",
      description: "Customizează aspectul și funcționalitățile",
      icon: <Settings className="h-6 w-6" />,
      href: "/admin/setari",
      color: "bg-gray-600 hover:bg-gray-700",
      actions: [
        { label: "Personalizare", href: "/admin/setari/design" },
        { label: "SEO", href: "/admin/setari/seo" },
        { label: "Backup", href: "/admin/setari/backup" }
      ]
    }
  ];

  const recentActivity = [
    { action: "Nou atlet înregistrat", details: "Andrei Popescu - Categoria Juniori", time: "2 ore", type: "user" },
    { action: "Eveniment actualizat", details: "Cupa de Primăvară - Locația modificată", time: "4 ore", type: "event" },
    { action: "Articol publicat", details: "Rezultate Campionatul Regional", time: "6 ore", type: "content" },
    { action: "Poze încărcate", details: "25 fotografii - Galeria Antrenamente", time: "1 zi", type: "media" },
    { action: "Rezultate adăugate", details: "Competiția de sărituri - 12 rezultate", time: "2 zile", type: "results" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard Admin</h1>
              <p className="text-gray-600 text-lg">Bine ai venit! Aici poți gestiona întregul site al clubului.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notificări (3)
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Acțiune rapidă
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-green-600 font-medium">{stat.change} luna aceasta</p>
                    </div>
                    <div className={`${stat.bgColor} ${stat.color} p-3 rounded-xl`}>
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Quick Actions - Span 2 columns */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Settings className="h-6 w-6 mr-3 text-blue-600" />
                  Gestionare Conținut
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {quickActions.map((action, index) => (
                    <Card key={index} className="border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`${action.color} text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                            {action.icon}
                          </div>
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={action.href}>
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                        
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{action.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{action.description}</p>
                        
                        <div className="space-y-2">
                          {action.actions.map((subAction, subIndex) => (
                            <Button
                              key={subIndex}
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start text-left h-8 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                              asChild
                            >
                              <Link href={subAction.href}>
                                <Plus className="h-3 w-3 mr-2" />
                                {subAction.label}
                              </Link>
                            </Button>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Links */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900">Acces Rapid</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/admin/setari/design">
                    <Palette className="h-4 w-4 mr-2" />
                    Personalizare Design
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/admin/export/rezultate">
                    <Download className="h-4 w-4 mr-2" />
                    Export Rapoarte
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/" target="_blank">
                    <Globe className="h-4 w-4 mr-2" />
                    Vezi Site Public
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/admin/backup">
                    <Database className="h-4 w-4 mr-2" />
                    Backup Date
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900">Activitate Recentă</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === 'user' ? 'bg-blue-500' :
                        activity.type === 'event' ? 'bg-green-500' :
                        activity.type === 'content' ? 'bg-purple-500' :
                        activity.type === 'media' ? 'bg-orange-500' :
                        'bg-yellow-500'
                      }`}></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-600">{activity.details}</p>
                        <p className="text-xs text-gray-400 mt-1">acum {activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-4">
                  Vezi toate activitățile
                </Button>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900">Status Sistem</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Site Status</span>
                    <span className="text-sm font-medium text-green-600">● Online</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Database</span>
                    <span className="text-sm font-medium text-green-600">● Conectat</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Backup</span>
                    <span className="text-sm font-medium text-green-600">● Actualizat</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Securitate</span>
                    <span className="text-sm font-medium text-green-600">● Securizat</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
