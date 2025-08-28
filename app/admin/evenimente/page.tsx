import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Plus, 
  Search, 
  Filter, 
  Download,
  Edit,
  Eye,
  MapPin,
  Clock,
  Users,
  Trophy
} from 'lucide-react';

export default function EvenimentePage() {
  const events = [
    {
      id: 1,
      nume: "Cupa de Primăvară",
      data: "2024-03-15",
      ora: "09:00",
      locatie: "Stadion Municipal Sibiu",
      oras: "Sibiu",
      tip: "Competiție",
      participanti: 120,
      status: "Programat",
      organizator: "Club Atletism Sibiu"
    },
    {
      id: 2,
      nume: "Campionatul Județean",
      data: "2024-04-28",
      ora: "10:00",
      locatie: "Arena Sporturilor Cluj",
      oras: "Cluj",
      tip: "Campionat",
      participanti: 85,
      status: "Înregistrări deschise",
      organizator: "Federația Română de Atletism"
    },
    {
      id: 3,
      nume: "Antrenament Echipă",
      data: "2024-03-20",
      ora: "18:00",
      locatie: "Stadion Municipal Sibiu",
      oras: "Sibiu",
      tip: "Antrenament",
      participanti: 45,
      status: "Programat",
      organizator: "Club Atletism Sibiu"
    },
    {
      id: 4,
      nume: "Cros de Vară",
      data: "2024-06-10",
      ora: "08:00",
      locatie: "Parcul Central",
      oras: "Brașov",
      tip: "Cros",
      participanti: 95,
      status: "Draft",
      organizator: "Club Atletism Brașov"
    }
  ];

  const eventTypes = ["Toate", "Competiție", "Campionat", "Antrenament", "Cros"];
  const statusTypes = ["Toate", "Programat", "Înregistrări deschise", "Draft", "Finalizat"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Programat':
        return 'bg-blue-50 text-blue-700';
      case 'Înregistrări deschise':
        return 'bg-emerald-50 text-emerald-700';
      case 'Draft':
        return 'bg-amber-50 text-amber-700';
      case 'Finalizat':
        return 'bg-slate-50 text-slate-700';
      default:
        return 'bg-slate-50 text-slate-700';
    }
  };

  const getTypeColor = (tip: string) => {
    switch (tip) {
      case 'Competiție':
        return 'bg-violet-50 text-violet-700';
      case 'Campionat':
        return 'bg-amber-50 text-amber-700';
      case 'Antrenament':
        return 'bg-blue-50 text-blue-700';
      case 'Cros':
        return 'bg-emerald-50 text-emerald-700';
      default:
        return 'bg-slate-50 text-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Gestionare Evenimente</h1>
          <p className="text-slate-600">Programează și administrează competițiile și antrenamentele</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="text-slate-600 border-slate-200 hover:bg-slate-50">
            <Download className="h-4 w-4 mr-2" />
            Export Calendar
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Eveniment Nou
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border border-slate-200 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">24</p>
                <p className="text-sm text-slate-600">Total Evenimente</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border border-slate-200 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <Trophy className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">8</p>
                <p className="text-sm text-slate-600">Active Luna Aceasta</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border border-slate-200 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-50 rounded-lg">
                <Users className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">347</p>
                <p className="text-sm text-slate-600">Total Participanți</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border border-slate-200 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-50 rounded-lg">
                <Calendar className="h-5 w-5 text-violet-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">3</p>
                <p className="text-sm text-slate-600">Următoarele 7 zile</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="border border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Caută evenimente, locații sau organizatori..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <select className="px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              {eventTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <select className="px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              {statusTypes.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <Button variant="outline" size="sm" className="text-slate-600 border-slate-200 hover:bg-slate-50">
              <Filter className="h-4 w-4 mr-2" />
              Mai multe filtre
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Events Table */}
      <Card className="border border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">Lista Evenimentelor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Eveniment</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Data & Ora</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Locație</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Tip</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Participanți</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Acțiuni</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-slate-900">{event.nume}</p>
                        <p className="text-sm text-slate-600">{event.organizator}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-slate-400" />
                          <span className="text-sm text-slate-600">{event.data}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-slate-400" />
                          <span className="text-sm text-slate-600">{event.ora}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-slate-900">{event.locatie}</p>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-slate-400" />
                          <span className="text-sm text-slate-600">{event.oras}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(event.tip)}`}>
                        {event.tip}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3 text-slate-400" />
                        <span className="text-sm font-medium text-slate-900">{event.participanti}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(event.status)}`}>
                        {event.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Eye className="h-4 w-4 text-slate-600" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Edit className="h-4 w-4 text-slate-600" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-slate-600">
              Afișând 1-4 din 24 evenimente
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled className="text-slate-400 border-slate-200">
                Anterior
              </Button>
              <Button variant="outline" size="sm" className="bg-blue-50 text-blue-600 border-blue-200">
                1
              </Button>
              <Button variant="outline" size="sm" className="text-slate-600 border-slate-200 hover:bg-slate-50">
                2
              </Button>
              <Button variant="outline" size="sm" className="text-slate-600 border-slate-200 hover:bg-slate-50">
                3
              </Button>
              <Button variant="outline" size="sm" className="text-slate-600 border-slate-200 hover:bg-slate-50">
                Următor
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
