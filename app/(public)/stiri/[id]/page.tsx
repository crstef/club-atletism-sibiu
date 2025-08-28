import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, Clock, Share2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// This would typically come from a database
const articole = [
  {
    id: 1,
    titlu: "Medalii de aur la Campionatul Regional",
    excerpt: "Atleții noștri au obținut rezultate excepționale la recent încheiatul Campionat Regional de Atletism desfășurat la Cluj-Napoca.",
    continut: `
      <p>În perioada 8-10 martie, echipa Club Atletism Sibiu a participat cu 15 atleți la Campionatul Regional de Atletism desfășurat pe Stadionul "Dr. Constantin Rădulescu" din Cluj-Napoca. Rezultatele obținute de sportivii noștri au depășit toate așteptările, demonstrând încă o dată calitatea pregătirii și dedicarea echipei noastre.</p>

      <h3>Rezultate remarcabile</h3>
      <p>Printre performanțele notabile ale weekendului, menționăm:</p>
      <ul>
        <li><strong>Andrei Popescu (Juniori I)</strong> - locul I la săritura în lungime cu 7.82m, nou record personal</li>
        <li><strong>Maria Ionescu (Junioare II)</strong> - locul I la 800m cu timpul de 2:15.34</li>
        <li><strong>Ștafeta 4x100m juniori</strong> - locul II cu timpul de 42.18s</li>
        <li><strong>Alexandru Radu (Copii)</strong> - locul I la aruncarea mingii cu 45.20m</li>
        <li><strong>Elena Marinescu (Junioare III)</strong> - locul III la săritura în înălțime cu 1.65m</li>
      </ul>

      <h3>Declarații antrenori</h3>
      <p>"Sunt extrem de mândru de rezultatele obținute de atleții noștri. Acestea sunt rodul unei munci susținute și a dedicării fiecărui sportiv în parte", a declarat Gheorghe Marinescu, antrenorul principal al clubului.</p>

      <p>Maria Popescu, antrenoarea categoriei copii, a adăugat: "Performanțele acestui weekend ne motivează să continuăm pregătirea intensivă pentru competițiile următoare. Potențialul acestor copii este extraordinar."</p>

      <h3>Obiective pentru perioada următoare</h3>
      <p>Având în vedere aceste rezultate excelente, clubul și-a stabilit obiective ambițioase pentru perioada următoare:</p>
      <ul>
        <li>Calificarea la Campionatul Național pentru cel puțin 8 atleți</li>
        <li>Stabilirea a cel puțin 3 recorduri personale în competițiile următoare</li>
        <li>Participarea la stagii de pregătire pentru atleții cu rezultate deosebite</li>
      </ul>

      <p>Felicităm din nou toți atleții pentru rezultatele excepționale și îi încurajăm să continue pregătirea cu același devotament și pasiune!</p>
    `,
    data: "12 Martie 2024",
    autor: "Maria Popescu",
    categorie: "Competiții",
    timpCitire: "3 min",
    imagine: "/placeholder-news.jpg",
    tags: ["competiții", "medalii", "record", "regional"]
  }
]

export default function ArticolDetalii({ params }: { params: { id: string } }) {
  const articol = articole.find(a => a.id === parseInt(params.id))
  
  if (!articol) {
    notFound()
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/stiri" className="inline-flex items-center gap-2 text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4" />
            Înapoi la știri
          </Link>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              {articol.categorie}
            </span>
            {articol.tags.map((tag) => (
              <span key={tag} className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">
                #{tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            {articol.titlu}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            {articol.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>{articol.autor}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{articol.data}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{articol.timpCitire} citire</span>
            </div>
          </div>
        </div>

        {/* Article Image */}
        <div className="mb-8">
          <div className="h-64 md:h-96 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Campionatul Regional</h2>
              <p className="opacity-90">Cluj-Napoca, 8-10 Martie 2024</p>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: articol.continut }}
            />
          </CardContent>
        </Card>

        {/* Share Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="h-5 w-5" />
              Distribuie articolul
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="sm">
                Facebook
              </Button>
              <Button variant="outline" size="sm">
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                WhatsApp
              </Button>
              <Button variant="outline" size="sm">
                Copiază link
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <Card>
          <CardHeader>
            <CardTitle>Articole similare</CardTitle>
            <CardDescription>
              Alte știri care te-ar putea interesa
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <h4 className="font-semibold mb-2">Record național stabilit de Andrei Popescu</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Atletul nostru Andrei Popescu a stabilit un nou record național la săritura în lungime...
                </p>
                <Button size="sm" variant="ghost" asChild>
                  <Link href="/stiri/4">Citește articolul</Link>
                </Button>
              </div>
              <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <h4 className="font-semibold mb-2">Începem pregătirile pentru sezonul de vară</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Cu apropierea sezonului competițional, echipa noastră intensifică pregătirile...
                </p>
                <Button size="sm" variant="ghost" asChild>
                  <Link href="/stiri/2">Citește articolul</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button size="lg" asChild>
            <Link href="/evenimente">Vezi evenimente viitoare</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Contactează-ne</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}