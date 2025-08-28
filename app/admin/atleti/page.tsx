import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  Filter, 
  Download,
  Eye,
  ArrowLeft,
  Trophy,
  Calendar
} from 'lucide-react';

export default function GestionareAtleti() {
  const atleti = [
    {
      id: 1,
      nume: "Ana Maria Popescu",
      varsta: 17,
      specializare: "Sprint",
      performanta: "11.85s (100m)",
      antrenor: "Ion Vasile",
      status: "Activ",
      medalii: 12
    },
    {
      id: 2,
      nume: "Mihai Alexandru",
      varsta: 19,
      specializare: "Sărituri",
      performanta: "7.2m (lungime)",
      antrenor: "Maria Stanciu",
      status: "Activ",
      medalii: 8
    },
    {
      id: 3,
      nume: "Elena Georgescu",
      varsta: 16,
      specializare: "Fond",
      performanta: "4:35 (1500m)",
      antrenor: "Ion Vasile",
      status: "Activ",
      medalii: 5
    },
    {
      id: 4,
      nume: "Radu Munteanu",
      varsta: 18,
      specializare: "Aruncări",
      performanta: "55.2m (disc)",
      antrenor: "Dan Popescu",
      status: "Inactiv",
      medalii: 15
    }
  ];

  const categorii = ["Toți", "Activi", "Inactivi", "Juniori", "Seniori"];
  const specializari = ["Toate", "Sprint", "Fond", "Sărituri", "Aruncări"];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button variant="outline" asChild>
                <Link href="/admin/dashboard">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Gestionare Atleți</h1>
                <p className="text-gray-600">Administrează profilurile și performanțele atleților</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Excel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Adaugă Atlet
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Atleți</p>
                    <p className="text-3xl font-bold text-gray-900">247</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Activi</p>
                    <p className="text-3xl font-bold text-green-600">234</p>
                  </div>
                  <Users className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Medalii 2024</p>
                    <p className="text-3xl font-bold text-yellow-600">89</p>
                  </div>
                  <Trophy className="h-8 w-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Noi Luna Aceasta</p>
                    <p className="text-3xl font-bold text-purple-600">12</p>
                  </div>
                  <Plus className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="border-0 shadow-md mb-6">
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Caută atleți..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  {categorii.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  {specializari.map(spec => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
                
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrare avansată
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Table */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">Lista Atleților</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Atlet</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Vârsta</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Specializare</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Performanță</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Antrenor</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Medalii</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Acțiuni</th>
                  </tr>
                </thead>
                <tbody>
                  {atleti.map((atlet) => (
                    <tr key={atlet.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="font-semibold text-blue-600">
                              {atlet.nume.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{atlet.nume}</p>
                            <p className="text-sm text-gray-500">ID: #{atlet.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-900">{atlet.varsta} ani</td>
                      <td className="py-4 px-4">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                          {atlet.specializare}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-mono text-sm text-gray-900">{atlet.performanta}</td>
                      <td className="py-4 px-4 text-gray-900">{atlet.antrenor}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <Trophy className="h-4 w-4 text-yellow-500" />
                          <span className="font-semibold text-gray-900">{atlet.medalii}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          atlet.status === 'Activ' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {atlet.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-600">
                Afișând 4 din 247 atleți
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>Anterior</Button>
                <Button variant="outline" size="sm" className="bg-blue-600 text-white">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Următorul</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
