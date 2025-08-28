import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Props {
  params: { id: string };
}

export default async function DetaliiEvenimentAdmin({ params }: Props) {
  const id = params.id;
  
  // Simulez datele pentru demonstrație
  const eveniment = {
    id: id,
    nume: id === '1' ? 'Cupa de Primăvară' : 
          id === '2' ? 'Campionatul Județean' : 
          'Cros de Vară',
    data: id === '1' ? '2024-03-15' : 
          id === '2' ? '2024-04-20' : 
          '2024-06-10',
    locatie: id === '1' ? 'Stadion Sibiu' : 
             id === '2' ? 'Arena Sibiu' : 
             'Parcul Central',
    descriere: 'Descriere detaliată a evenimentului.',
    participanti: Math.floor(Math.random() * 50) + 20,
    status: id === '1' ? 'Planificat' : 
            id === '2' ? 'Înregistrări deschise' : 
            'În pregătire'
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">{eveniment.nume}</h1>
        <div className="space-x-4">
          <Button>Editează</Button>
          <Link href="/admin/evenimente">
            <Button variant="outline">Înapoi la Evenimente</Button>
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Detalii Eveniment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-600">Data</label>
                  <p className="text-lg">{eveniment.data}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Locația</label>
                  <p className="text-lg">{eveniment.locatie}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Status</label>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    eveniment.status === 'Planificat' ? 'bg-blue-100 text-blue-800' :
                    eveniment.status === 'Înregistrări deschise' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {eveniment.status}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Participanți</label>
                  <p className="text-lg">{eveniment.participanti}</p>
                </div>
              </div>
              <div className="mt-6">
                <label className="text-sm font-medium text-gray-600">Descriere</label>
                <p className="text-gray-800 mt-2">{eveniment.descriere}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Participanți Înregistrați</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Lista participanților va fi afișată aici.</p>
              <Button className="mt-4">Gestionează Participanți</Button>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Acțiuni Rapide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full">Editează Eveniment</Button>
              <Button variant="outline" className="w-full">Export Participanți</Button>
              <Button variant="outline" className="w-full">Trimite Notificare</Button>
              <Button variant="destructive" className="w-full">Șterge Eveniment</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
