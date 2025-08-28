import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Camera, Play, Calendar, Eye } from 'lucide-react'
import Link from 'next/link'

export default function Galerie() {
  const galerii = [
    {
      id: "campionatul-regional-2024",
      nume: "Campionatul Regional 2024",
      descriere: "Imagini de la competiția din Cluj-Napoca unde atleții noștri au obținut rezultate excepționale",
      data: "8-10 Martie 2024",
      numarPoze: 45,
      numarVideouri: 8,
      thumbnail: "/placeholder-gallery1.jpg",
      featured: true,
      categorie: "Competiții"
    },
    {
      id: "antrenamente-primavara",
      nume: "Antrenamente de primăvară",
      descriere: "Pregătirile intensive pentru sezonul competițional 2024",
      data: "Martie 2024",
      numarPoze: 32,
      numarVideouri: 5,
      thumbnail: "/placeholder-gallery2.jpg",
      featured: true,
      categorie: "Antrenamente"
    },
    {
      id: "crosul-de-iarna",
      nume: "Crosul de iarnă",
      descriere: "Competiția tradițională de cros desfășurată în Pădurea Dumbrava",
      data: "15 Decembrie 2023",
      numarPoze: 28,
      numarVideouri: 3,
      thumbnail: "/placeholder-gallery3.jpg",
      featured: false,
      categorie: "Competiții"
    },
    {
      id: "stagiul-de-pregatire",
      nume: "Stagiul de pregătire Predeal",
      descriere: "Stagiul de pregătire din ianuarie pentru atleții de performanță",
      data: "10-20 Ianuarie 2024",
      numarPoze: 67,
      numarVideouri: 12,
      thumbnail: "/placeholder-gallery4.jpg",
      featured: false,
      categorie: "Stagii"
    },
    {
      id: "festivalu-atletismului",
      nume: "Festivalul Atletismului pentru Copii",
      descriere: "Eveniment dedicat promovării atletismului în rândul copiilor",
      data: "25 Mai 2023",
      numarPoze: 89,
      numarVideouri: 15,
      thumbnail: "/placeholder-gallery5.jpg",
      featured: true,
      categorie: "Evenimente"
    },
    {
      id: "premiere-2023",
      nume: "Gala de premiere 2023",
      descriere: "Ceremonia de premiere pentru performanțele anului 2023",
      data: "20 Decembrie 2023",
      numarPoze: 41,
      numarVideouri: 6,
      thumbnail: "/placeholder-gallery6.jpg",
      featured: false,
      categorie: "Evenimente"
    }
  ]

  const categorii = ['Toate', 'Competiții', 'Antrenamente', 'Stagii', 'Evenimente']

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Galeria Foto și Video</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descoperă momentele speciale din viața Club Atletism Sibiu prin fotografiile și videoclipurile 
            din competiții, antrenamente și evenimente.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categorii.map((categorie) => (
            <Button
              key={categorie}
              variant={categorie === 'Toate' ? 'default' : 'outline'}
              size="sm"
            >
              {categorie}
            </Button>
          ))}
        </div>

        {/* Featured Galleries */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Galerii principale</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {galerii.filter(galerie => galerie.featured).map((galerie) => (
              <Card key={galerie.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48 bg-gradient-to-br from-primary to-secondary overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Camera className="h-12 w-12 mx-auto mb-2" />
                      <h3 className="font-bold text-lg">{galerie.nume}</h3>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                      {galerie.categorie}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{galerie.nume}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {galerie.data}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{galerie.descriere}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Camera className="h-4 w-4 text-primary" />
                        <span>{galerie.numarPoze} poze</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Play className="h-4 w-4 text-secondary" />
                        <span>{galerie.numarVideouri} video</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full" asChild>
                    <Link href={`/galerie/${galerie.id}`}>
                      <Eye className="h-4 w-4 mr-2" />
                      Vizualizează galeria
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Galleries */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Toate galeriile</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {galerii.map((galerie) => (
              <Card key={galerie.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-40 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-white/80 text-xs px-2 py-1 rounded-full">
                      {galerie.categorie}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{galerie.nume}</CardTitle>
                  <CardDescription className="text-xs">{galerie.data}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Camera className="h-3 w-3" />
                      <span>{galerie.numarPoze}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Play className="h-3 w-3" />
                      <span>{galerie.numarVideouri}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full text-xs" asChild>
                    <Link href={`/galerie/${galerie.id}`}>Vizualizează</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Statistici galerie</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {galerii.reduce((acc, galerie) => acc + galerie.numarPoze, 0)}
              </div>
              <div className="text-muted-foreground">Total fotografii</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {galerii.reduce((acc, galerie) => acc + galerie.numarVideouri, 0)}
              </div>
              <div className="text-muted-foreground">Total videoclipuri</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {galerii.length}
              </div>
              <div className="text-muted-foreground">Galerii create</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {categorii.length - 1}
              </div>
              <div className="text-muted-foreground">Categorii</div>
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="mt-16 bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ai poze sau videouri?</h2>
          <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            Dacă ai fotografii sau videoclipuri de la evenimentele noastre și vrei să le împărtășești, 
            te rugăm să ne contactezi!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Link href="/contact">Trimite materialele</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/evenimente">Vezi evenimente viitoare</Link>
            </Button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Activitate recentă</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">45 de poze noi adăugate</h4>
                <p className="text-sm text-muted-foreground">Galeria &ldquo;Campionatul Regional 2024&rdquo; a fost actualizată</p>
              </div>
              <div className="text-sm text-muted-foreground">
                Azi
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                <Play className="h-6 w-6 text-secondary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">8 videoclipuri noi</h4>
                <p className="text-sm text-muted-foreground">Momentele speciale de la competiția de weekend</p>
              </div>
              <div className="text-sm text-muted-foreground">
                Ieri
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}