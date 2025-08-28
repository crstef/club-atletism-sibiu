import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trophy, Medal, Award, User } from 'lucide-react'
import Link from 'next/link'

export default function Atleti() {
  const atleti = [
    {
      id: 1,
      nume: "Andrei Popescu",
      varsta: 19,
      categorie: "Juniori I",
      specializare: "Sărituri",
      antrenor: "Daniel Radu",
      recordPersonal: "7.85m (săritura în lungime)",
      realizari: ["Record național U20", "Campion regional 2024", "Calificare Europene U20"],
      medalii: 12,
      aniExperienta: 6,
      imagine: "/placeholder-athlete1.jpg",
      featured: true
    },
    {
      id: 2,
      nume: "Maria Ionescu",
      varsta: 17,
      categorie: "Junioare II",
      specializare: "Mijlociu fond",
      antrenor: "Ioana Mărcuț",
      recordPersonal: "2:12.45 (800m)",
      realizari: ["Vicecampioană națională", "Record județean", "3x podium regional"],
      medalii: 8,
      aniExperienta: 4,
      imagine: "/placeholder-athlete2.jpg",
      featured: true
    },
    {
      id: 3,
      nume: "Alexandru Radu",
      varsta: 12,
      categorie: "Copii",
      specializare: "Aruncări",
      antrenor: "Alexandru Ionescu",
      recordPersonal: "47.30m (aruncarea mingii)",
      realizari: ["Campion județean", "Record de categorie", "Talent identificat COSR"],
      medalii: 5,
      aniExperienta: 2,
      imagine: "/placeholder-athlete3.jpg",
      featured: false
    },
    {
      id: 4,
      nume: "Elena Marinescu",
      varsta: 15,
      categorie: "Junioare III",
      specializare: "Sărituri",
      antrenor: "Marius Teodorescu",
      recordPersonal: "1.70m (săritura în înălțime)",
      realizari: ["Campioană regională", "Locul 3 național", "Record personal 2024"],
      medalii: 6,
      aniExperienta: 3,
      imagine: "/placeholder-athlete4.jpg",
      featured: false
    },
    {
      id: 5,
      nume: "Cristian Popescu",
      varsta: 22,
      categorie: "Seniori",
      specializare: "Sprint",
      antrenor: "Gheorghe Marinescu",
      recordPersonal: "10.58s (100m)",
      realizari: ["Participare Balcaniada", "Record național 4x100m", "Multiplu campion"],
      medalii: 15,
      aniExperienta: 8,
      imagine: "/placeholder-athlete5.jpg",
      featured: true
    },
    {
      id: 6,
      nume: "Ana Dumitrescu",
      varsta: 14,
      categorie: "Junioare III",
      specializare: "Lungul fond",
      antrenor: "Maria Popescu",
      recordPersonal: "4:45.20 (1500m)",
      realizari: ["Campioană județeană", "Locul 2 regional", "Progres constant"],
      medalii: 4,
      aniExperienta: 2,
      imagine: "/placeholder-athlete6.jpg",
      featured: false
    }
  ]

  const categorii = ['Toți', 'Copii', 'Juniori III', 'Juniori II', 'Juniori I', 'Seniori']
  const specializari = ['Toate', 'Sprint', 'Mijlociu fond', 'Lungul fond', 'Sărituri', 'Aruncări']

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Atleții Noștri</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cunoaște sportivii talentați ai Club Atletism Sibiu care ne reprezintă cu mândrie 
            la competițiile naționale și internaționale.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Filtrează după categorie:</h3>
            <div className="flex flex-wrap gap-2">
              {categorii.map((categorie) => (
                <Button
                  key={categorie}
                  variant={categorie === 'Toți' ? 'default' : 'outline'}
                  size="sm"
                >
                  {categorie}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Filtrează după specializare:</h3>
            <div className="flex flex-wrap gap-2">
              {specializari.map((specializare) => (
                <Button
                  key={specializare}
                  variant={specializare === 'Toate' ? 'default' : 'outline'}
                  size="sm"
                >
                  {specializare}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Athletes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Atleți de top</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {atleti.filter(atlet => atlet.featured).map((atlet) => (
              <Card key={atlet.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                  <div className="text-center">
                    <User className="h-16 w-16 mx-auto mb-2" />
                    <h3 className="font-bold text-lg">{atlet.nume}</h3>
                    <p className="opacity-90">{atlet.specializare}</p>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {atlet.categorie}
                    </span>
                    <div className="flex items-center gap-1 text-secondary">
                      <Trophy className="h-4 w-4" />
                      <span className="text-sm font-medium">{atlet.medalii} medalii</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{atlet.nume}</CardTitle>
                  <CardDescription>
                    {atlet.varsta} ani • {atlet.aniExperienta} ani experiență
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Record personal</div>
                    <div className="font-medium">{atlet.recordPersonal}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Antrenor</div>
                    <div className="font-medium">{atlet.antrenor}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Realizări notabile</div>
                    <ul className="text-sm space-y-1">
                      {atlet.realizari.slice(0, 2).map((realizare, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Award className="h-3 w-3 text-secondary mt-1 flex-shrink-0" />
                          <span>{realizare}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href={`/atleti/${atlet.id}`}>Vezi profilul complet</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Athletes */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Toți atleții</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {atleti.map((atlet) => (
              <Card key={atlet.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{atlet.nume}</CardTitle>
                  <CardDescription className="text-sm">
                    {atlet.categorie} • {atlet.specializare}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Medalii:</span>
                    <div className="flex items-center gap-1">
                      <Medal className="h-3 w-3 text-secondary" />
                      <span className="font-medium">{atlet.medalii}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Experiență:</span>
                    <span className="font-medium">{atlet.aniExperienta} ani</span>
                  </div>
                  <Button size="sm" variant="outline" className="w-full" asChild>
                    <Link href={`/atleti/${atlet.id}`}>Vezi profil</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Statistici club</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {atleti.length}
              </div>
              <div className="text-muted-foreground">Atleți activi</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {atleti.reduce((acc, atlet) => acc + atlet.medalii, 0)}
              </div>
              <div className="text-muted-foreground">Total medalii</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {categorii.length - 1}
              </div>
              <div className="text-muted-foreground">Categorii de vârstă</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {specializari.length - 1}
              </div>
              <div className="text-muted-foreground">Specializări</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Alătură-te echipei!</h2>
          <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            Vrei să faci parte din povestea acestor atleți de succes? 
            Contactează-ne pentru a începe propriul tău parcurs în atletism!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Link href="/contact">Înscrie-te acum</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/echipe">Vezi echipele</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}