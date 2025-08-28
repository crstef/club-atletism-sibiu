import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  Calendar, 
  Trophy, 
  FileText, 
  TrendingUp,
  Plus,
  Eye,
  Edit
} from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  const statistici = [
    {
      titlu: "Atleți activi",
      valoare: "152",
      schimbare: "+12",
      tendinta: "up",
      icon: Users
    },
    {
      titlu: "Evenimente luna aceasta",
      valoare: "8",
      schimbare: "+3",
      tendinta: "up",
      icon: Calendar
    },
    {
      titlu: "Medalii anul acesta",
      valoare: "34",
      schimbare: "+8",
      tendinta: "up",
      icon: Trophy
    },
    {
      titlu: "Articole publicate",
      valoare: "23",
      schimbare: "+5",
      tendinta: "up",
      icon: FileText
    }
  ]

  const activitateRecenta = [
    {
      tip: "inscriere",
      descriere: "Nou atlet înscris: Maria Popescu (Copii)",
      timp: "Acum 2 ore",
      icon: Users
    },
    {
      tip: "eveniment",
      descriere: "Eveniment creat: Concurs de sărituri - 28 Aprilie",
      timp: "Acum 3 ore",
      icon: Calendar
    },
    {
      tip: "articol",
      descriere: "Articol publicat: Medalii de aur la Regional",
      timp: "Ieri",
      icon: FileText
    },
    {
      tip: "rezultat",
      descriere: "Rezultate actualizate pentru Campionatul Regional",
      timp: "Acum 2 zile",
      icon: Trophy
    }
  ]

  const actiuniRapide = [
    {
      titlu: "Adaugă atlet nou",
      descriere: "Înregistrează un nou membru al clubului",
      href: "/admin/atleti/nou",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      titlu: "Creează eveniment",
      descriere: "Organizează o nouă competiție sau antrenament",
      href: "/admin/evenimente/nou",
      icon: Calendar,
      color: "bg-green-500"
    },
    {
      titlu: "Scrie articol",
      descriere: "Publică o nouă știre sau anunț",
      href: "/admin/continut/nou",
      icon: FileText,
      color: "bg-purple-500"
    },
    {
      titlu: "Vezi rapoarte",
      descriere: "Analizează performanțele și statisticile",
      href: "/admin/rapoarte",
      icon: TrendingUp,
      color: "bg-orange-500"
    }
  ]

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Admin Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Dashboard Admin</h1>
              <p className="text-muted-foreground">Bun venit în panoul de administrare Club Atletism Sibiu</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" asChild>
                <Link href="/">
                  <Eye className="h-4 w-4 mr-2" />
                  Vezi site-ul
                </Link>
              </Button>
              <Button asChild>
                <Link href="/admin/continut/nou">
                  <Plus className="h-4 w-4 mr-2" />
                  Conținut nou
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statistici.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.titlu}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.valoare}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-500">{stat.schimbare}</span>
                  <span className="ml-1">față de luna trecută</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Acțiuni rapide</CardTitle>
                <CardDescription>
                  Acțiuni frecvente pentru administrarea clubului
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {actiuniRapide.map((actiune, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`w-10 h-10 ${actiune.color} rounded-lg flex items-center justify-center`}>
                            <actiune.icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{actiune.titlu}</h3>
                            <p className="text-sm text-muted-foreground mb-3">{actiune.descriere}</p>
                            <Button size="sm" variant="outline" asChild>
                              <Link href={actiune.href}>
                                Începe
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Overview */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Performanțe recente</CardTitle>
                <CardDescription>
                  Rezultatele obținute de atleți în ultimele competiții
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                        <Trophy className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Andrei Popescu</h4>
                        <p className="text-sm text-muted-foreground">Locul 1 - Săritura în lungime</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">7.85m</div>
                      <div className="text-xs text-muted-foreground">Record personal</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <Trophy className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Maria Ionescu</h4>
                        <p className="text-sm text-muted-foreground">Locul 2 - 800m</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">2:15.34</div>
                      <div className="text-xs text-muted-foreground">Campionatul Regional</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                        <Trophy className="h-4 w-4 text-amber-800" />
                      </div>
                      <div>
                        <h4 className="font-medium">Ștafeta 4x100m</h4>
                        <p className="text-sm text-muted-foreground">Locul 3 - Juniori</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">42.18s</div>
                      <div className="text-xs text-muted-foreground">Sezon 2024</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    <Link href="/admin/rezultate">Vezi toate rezultatele</Link>
                  </Button>
                  <Button variant="outline" size="sm" className="ml-2">
                    <Link href="/admin/export/rezultate">📊 Export Excel</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Activitate recentă</CardTitle>
                <CardDescription>
                  Ultimele modificări și actualizări
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activitateRecenta.map((activitate, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                        <activitate.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">{activitate.descriere}</p>
                        <p className="text-xs text-muted-foreground">{activitate.timp}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    Vezi istoric complet
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Evenimente viitoare</CardTitle>
                <CardDescription>
                  Competiții și antrenamente programate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium text-sm">Campionatul Județean</h4>
                      <p className="text-xs text-muted-foreground">15 Aprilie 2024</p>
                    </div>
                    <Button size="sm" variant="ghost" asChild>
                      <Link href="/admin/evenimente/1">
                        <Edit className="h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium text-sm">Cros de Paste</h4>
                      <p className="text-xs text-muted-foreground">20 Aprilie 2024</p>
                    </div>
                    <Button size="sm" variant="ghost" asChild>
                      <Link href="/admin/evenimente/2">
                        <Edit className="h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium text-sm">Concurs Sărituri</h4>
                      <p className="text-xs text-muted-foreground">28 Aprilie 2024</p>
                    </div>
                    <Button size="sm" variant="ghost" asChild>
                      <Link href="/admin/evenimente/3">
                        <Edit className="h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/admin/evenimente">Gestionează evenimente</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}