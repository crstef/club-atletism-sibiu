import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Calendar, 
  Trophy, 
  FileText, 
  TrendingUp,
  TrendingDown,
  Activity,
  Target,
  Award,
  Clock,
  MapPin,
  ArrowUpRight
} from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { 
      title: "Total Atleți", 
      value: "247", 
      change: "+12", 
      changePercent: "+5.1%",
      trend: "up",
      icon: <Users className="h-5 w-5" />,
      color: "blue"
    },
    { 
      title: "Evenimente Active", 
      value: "8", 
      change: "+2", 
      changePercent: "+33%",
      trend: "up",
      icon: <Calendar className="h-5 w-5" />,
      color: "emerald"
    },
    { 
      title: "Medalii 2024", 
      value: "89", 
      change: "+15", 
      changePercent: "+20%",
      trend: "up",
      icon: <Trophy className="h-5 w-5" />,
      color: "amber"
    },
    { 
      title: "Articole Luna", 
      value: "24", 
      change: "-3", 
      changePercent: "-11%",
      trend: "down",
      icon: <FileText className="h-5 w-5" />,
      color: "violet"
    }
  ];

  const quickStats = [
    { label: "Antrenamente Săptămâna", value: "18", icon: <Activity className="h-4 w-4" /> },
    { label: "Noi Înregistrări", value: "7", icon: <Target className="h-4 w-4" /> },
    { label: "Competiții Viitoare", value: "3", icon: <Award className="h-4 w-4" /> },
    { label: "Ore Antrenament", value: "156", icon: <Clock className="h-4 w-4" /> }
  ];

  const recentActivity = [
    { action: "Atlet nou înregistrat", details: "Andrei Popescu - Categoria Juniori", time: "2 ore", type: "user" },
    { action: "Eveniment actualizat", details: "Cupa de Primăvară - Locația modificată", time: "4 ore", type: "event" },
    { action: "Rezultat adăugat", details: "Campionatul Regional - 15 rezultate noi", time: "6 ore", type: "result" },
    { action: "Articol publicat", details: "Pregătiri pentru sezonul de vară", time: "1 zi", type: "content" },
    { action: "Galerie actualizată", details: "25 fotografii noi - Antrenamente", time: "2 zile", type: "media" }
  ];

  const upcomingEvents = [
    { name: "Cupa de Primăvară", date: "15 Mar", location: "Sibiu", participants: 120 },
    { name: "Campionatul Județean", date: "28 Apr", location: "Cluj", participants: 85 },
    { name: "Cros de Vară", date: "10 Jun", location: "Brașov", participants: 95 }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 text-blue-700 border-blue-200",
      emerald: "bg-emerald-50 text-emerald-700 border-emerald-200", 
      amber: "bg-amber-50 text-amber-700 border-amber-200",
      violet: "bg-violet-50 text-violet-700 border-violet-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600">Bine ai venit! Aici ai o privire de ansamblu asupra activității clubului.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="text-slate-600 border-slate-200 hover:bg-slate-50">
            Exportă Raport
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
            Acțiune Rapidă
          </Button>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    {stat.trend === 'up' ? (
                      <TrendingUp className="h-3 w-3 text-emerald-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                    )}
                    <span className={`text-xs font-medium ${stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
                      {stat.changePercent}
                    </span>
                    <span className="text-xs text-slate-500 ml-1">vs luna trecută</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg border ${getColorClasses(stat.color)}`}>
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats Row */}
      <Card className="border border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 rounded-lg">
                  <span className="text-slate-600">{item.icon}</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">{item.value}</p>
                  <p className="text-sm text-slate-600">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Chart Placeholder */}
        <div className="lg:col-span-2">
          <Card className="border border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900">Performanțe pe Luni</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg flex items-center justify-center border border-slate-200">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600 font-medium">Grafic Performanțe</p>
                  <p className="text-sm text-slate-500">Aici va fi afișat graficul cu evoluția performanțelor</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Cards */}
        <div className="space-y-6">
          
          {/* Upcoming Events */}
          <Card className="border border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900">Evenimente Viitoare</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-slate-900 text-sm">{event.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-slate-600">{event.date}</span>
                      <span className="text-xs text-slate-400">•</span>
                      <MapPin className="h-3 w-3 text-slate-400" />
                      <span className="text-xs text-slate-600">{event.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-900">{event.participants}</p>
                    <p className="text-xs text-slate-500">participanți</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full text-slate-600 border-slate-200 hover:bg-slate-50">
                Vezi toate evenimentele
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900">Activitate Recentă</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.slice(0, 4).map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'user' ? 'bg-blue-400' :
                      activity.type === 'event' ? 'bg-emerald-400' :
                      activity.type === 'result' ? 'bg-amber-400' :
                      activity.type === 'content' ? 'bg-violet-400' :
                      'bg-slate-400'
                    }`}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                      <p className="text-xs text-slate-600">{activity.details}</p>
                      <p className="text-xs text-slate-400 mt-1">acum {activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4 text-slate-600 border-slate-200 hover:bg-slate-50">
                Vezi toate activitățile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
