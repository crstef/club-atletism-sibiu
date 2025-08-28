import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function RezultateAdmin() {
  const rezultate = [
    {
      id: 1,
      eveniment: "Cupa de Primăvară",
      data: "2024-03-15",
      locatie: "Stadion Sibiu",
      participanti: 45,
      status: "Finalizat"
    },
    {
      id: 2,
      eveniment: "Cros de Iarnă",
      data: "2024-01-20",
      locatie: "Parcul Central",
      participanti: 32,
      status: "Finalizat"
    },
    {
      id: 3,
      eveniment: "Maraton Sibiu",
      data: "2023-11-15",
      locatie: "Centrul Istoric",
      participanti: 120,
      status: "Finalizat"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Toate Rezultatele</h1>
        <div className="space-x-4">
          <Button>Export Excel</Button>
          <Link href="/admin/dashboard">
            <Button variant="outline">Înapoi la Dashboard</Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6">
        {rezultate.map((rezultat) => (
          <Card key={rezultat.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{rezultat.eveniment}</CardTitle>
                <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                  {rezultat.status}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Data</p>
                  <p className="font-medium">{rezultat.data}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Locația</p>
                  <p className="font-medium">{rezultat.locatie}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Participanți</p>
                  <p className="font-medium">{rezultat.participanti}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">ID</p>
                  <p className="font-medium">#{rezultat.id}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Vezi Rezultate</Button>
                <Button variant="outline" size="sm">Export PDF</Button>
                <Button variant="outline" size="sm">Statistici</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
