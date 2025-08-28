import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Plus, 
  Search, 
  Filter, 
  Download,
  Edit,
  Eye,
  Mail,
  Phone,
  MapPin,
  Calendar
} from 'lucide-react';

export default function AtletiPage() {
  const athletes = [
    {
      id: 1,
      nume: "Andrei Popescu",
      varsta: 19,
      categorie: "Juniori",
      specialitate: "Sprint",
      email: "andrei.popescu@email.com",
      telefon: "+40 123 456 789",
      oras: "Sibiu",
      dataInscriere: "2024-01-15",
      status: "Activ"
    },
    {
      id: 2,
      nume: "Maria Ionescu",
      varsta: 17,
      categorie: "Cadeți",
      specialitate: "Sărituri",
      email: "maria.ionescu@email.com",
      telefon: "+40 987 654 321",
      oras: "Cluj",
      dataInscriere: "2024-02-20",
      status: "Activ"
    },
    {
      id: 3,
      nume: "Alexandru Dumitrescu",
      varsta: 22,
      categorie: "Seniori",
      specialitate: "Fond",
      email: "alex.dumitrescu@email.com",
      telefon: "+40 555 123 456",
      oras: "Brașov",
      dataInscriere: "2023-09-10",
      status: "Activ"
    },
    {
      id: 4,
      nume: "Elena Stoica",
      varsta: 16,
      categorie: "Cadeți",
      specialitate: "Aruncări",
      email: "elena.stoica@email.com",
      telefon: "+40 777 888 999",
      oras: "Sibiu",
      dataInscriere: "2024-03-05",
      status: "Activ"
    }
  ];

  const categories = ["Toți", "Copii", "Cadeți", "Juniori", "Seniori"];
  const specialities = ["Toate", "Sprint", "Fond", "Sărituri", "Aruncări"];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Gestionare Atleți</h1>
          <p className="text-slate-600">Administrează baza de date cu atleții clubului</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="text-slate-600 border-slate-200 hover:bg-slate-50">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Atlet Nou
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border border-slate-200 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">247</p>
                <p className="text-sm text-slate-600">Total Atleți</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border border-slate-200 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <Users className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">189</p>
                <p className="text-sm text-slate-600">Activi</p>
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
                <p className="text-2xl font-bold text-slate-900">12</p>
                <p className="text-sm text-slate-600">Noi Luna Aceasta</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border border-slate-200 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-50 rounded-lg">
                <Users className="h-5 w-5 text-violet-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">4.2</p>
                <p className="text-sm text-slate-600">Medie Vârstă</p>
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
                  placeholder="Caută după nume, email sau telefon..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <select className="px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <select className="px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              {specialities.map(spec => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
            <Button variant="outline" size="sm" className="text-slate-600 border-slate-200 hover:bg-slate-50">
              <Filter className="h-4 w-4 mr-2" />
              Mai multe filtre
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Athletes Table */}
      <Card className="border border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">Lista Atleților</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Atlet</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Categorie</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Specialitate</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Contact</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Acțiuni</th>
                </tr>
              </thead>
              <tbody>
                {athletes.map((athlete) => (
                  <tr key={athlete.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-slate-900">{athlete.nume}</p>
                        <p className="text-sm text-slate-600">{athlete.varsta} ani • {athlete.oras}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full">
                        {athlete.categorie}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-slate-600">{athlete.specialitate}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1">
                          <Mail className="h-3 w-3 text-slate-400" />
                          <span className="text-sm text-slate-600">{athlete.email}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="h-3 w-3 text-slate-400" />
                          <span className="text-sm text-slate-600">{athlete.telefon}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full">
                        {athlete.status}
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
              Afișând 1-4 din 247 atleți
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
