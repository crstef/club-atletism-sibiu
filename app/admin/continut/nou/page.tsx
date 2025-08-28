import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AdaugaContinutNou() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Adaugă Conținut Nou</h1>
        <Link href="/admin/dashboard">
          <Button variant="outline">Înapoi la Dashboard</Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Adaugă Știre</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Creează o știre nouă pentru site</p>
            <Button className="w-full">Creează Știre</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Adaugă Eveniment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Programează un eveniment nou</p>
            <Button className="w-full">Creează Eveniment</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Adaugă Atlet</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Înregistrează un atlet nou</p>
            <Button className="w-full">Adaugă Atlet</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Adaugă Echipă</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Creează o echipă nouă</p>
            <Button className="w-full">Creează Echipă</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upload Fotografii</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Adaugă poze în galerie</p>
            <Button className="w-full">Upload Poze</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Configurări</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Setări generale ale site-ului</p>
            <Button className="w-full">Deschide Configurări</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
