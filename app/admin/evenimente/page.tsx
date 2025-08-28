import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function GestioneazaEvenimente() {
  const evenimente = [
    {
      id: 1,
      nume: "Cupa de Primăvară",
      data: "2024-03-15",
      locatie: "Stadion Sibiu",
      status: "Planificat"
    },
    {
      id: 2,
      nume: "Campionatul Județean",
      data: "2024-04-20",
      locatie: "Arena Sibiu",
      status: "Înregistrări deschise"
    },
    {
      id: 3,
      nume: "Cros de Vară",
      data: "2024-06-10",
      locatie: "Parcul Central",
      status: "În pregătire"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Gestionează Evenimente</h1>
        <div className="space-x-4">
          <Button>Adaugă Eveniment</Button>
          <Link href="/admin/dashboard">
            <Button variant="outline">Înapoi la Dashboard</Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6">
        {evenimente.map((eveniment) => (
          <Card key={eveniment.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{eveniment.nume}</CardTitle>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  eveniment.status === 'Planificat' ? 'bg-blue-100 text-blue-800' :
                  eveniment.status === 'Înregistrări deschise' ? 'bg-green-100 text-green-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {eveniment.status}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Data</p>
                  <p className="font-medium">{eveniment.data}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Locația</p>
                  <p className="font-medium">{eveniment.locatie}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">ID</p>
                  <p className="font-medium">#{eveniment.id}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Link href={`/admin/evenimente/${eveniment.id}`}>
                  <Button variant="outline" size="sm">Vizualizează</Button>
                </Link>
                <Button variant="outline" size="sm">Editează</Button>
                <Button variant="destructive" size="sm">Șterge</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
