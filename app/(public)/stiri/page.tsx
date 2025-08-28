import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Stiri() {
  const articole = [
    {
      id: 1,
      titlu: "Medalii de aur la Campionatul Regional",
      excerpt: "Atleții noștri au obținut rezultate excepționale la recent încheiatul Campionat Regional de Atletism desfășurat la Cluj-Napoca.",
      continut: "În perioada 8-10 martie, echipa Club Atletism Sibiu a participat cu 15 atleți la Campionatul Regional...",
      data: "12 Martie 2024",
      autor: "Maria Popescu",
      categorie: "Competiții",
      timpCitire: "3 min",
      imagine: "/placeholder-news.jpg",
      featured: true
    },
    {
      id: 2,
      titlu: "Începem pregătirile pentru sezonul de vară",
      excerpt: "Cu apropierea sezonului competițional, echipa noastră intensifică pregătirile pentru competițiile din perioada aprilie-septembrie.",
      continut: "Antrenorii clubului au stabilit un program intensificat de pregătire...",
      data: "8 Martie 2024",
      autor: "Alexandru Ionescu",
      categorie: "Antrenamente",
      timpCitire: "2 min",
      imagine: "/placeholder-news2.jpg",
      featured: false
    },
    {
      id: 3,
      titlu: "Noi membri în echipa de antrenori",
      excerpt: "Suntem bucuroși să anunțăm că echipa noastră de antrenori s-a mărit cu doi specialiști cu experiență internațională.",
      continut: "Marius Teodorescu și Ioana Mărcuț se alătură echipei noastre...",
      data: "5 Martie 2024",
      autor: "Gheorghe Marinescu",
      categorie: "Echipă",
      timpCitire: "2 min",
      imagine: "/placeholder-news3.jpg",
      featured: false
    },
    {
      id: 4,
      titlu: "Record național stabilit de Andrei Popescu",
      excerpt: "Atletul nostru Andrei Popescu a stabilit un nou record național la săritura în lungime în categoria juniori.",
      continut: "În cadrul concursului de la București, Andrei a reușit o săritură de 7.85m...",
      data: "1 Martie 2024",
      autor: "Daniel Radu",
      categorie: "Performanțe",
      timpCitire: "4 min",
      imagine: "/placeholder-news4.jpg",
      featured: true
    },
    {
      id: 5,
      titlu: "Program de vară pentru copii",
      excerpt: "Lansăm programul special de vară destinat copiilor de 6-12 ani, cu activități recreative și educative.",
      continut: "Programul se va desfășura în perioada iunie-august...",
      data: "25 Februarie 2024",
      autor: "Maria Popescu",
      categorie: "Programe",
      timpCitire: "3 min",
      imagine: "/placeholder-news5.jpg",
      featured: false
    },
    {
      id: 6,
      titlu: "Modernizarea facilităților sportive",
      excerpt: "Stadionul nostru beneficiază de lucrări de modernizare care vor îmbunătăți condițiile de antrenament.",
      continut: "Lucrările includ renovarea pistei de atletism și a zonelor de sărituri...",
      data: "20 Februarie 2024",
      autor: "Administrație",
      categorie: "Infrastructură",
      timpCitire: "2 min",
      imagine: "/placeholder-news6.jpg",
      featured: false
    }
  ]

  const categorii = ['Toate', 'Competiții', 'Antrenamente', 'Echipă', 'Performanțe', 'Programe', 'Infrastructură']

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Știri și Anunțuri</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rămâi la curent cu ultimele noutăți din lumea Club Atletism Sibiu - competiții, 
            rezultate, evenimente și anunțuri importante.
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

        {/* Featured Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Articole principale</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {articole.filter(article => article.featured).map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary to-secondary"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {article.categorie}
                    </span>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{article.timpCitire}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    <Link href={`/stiri/${article.id}`}>
                      {article.titlu}
                    </Link>
                  </CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{article.autor}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.data}</span>
                      </div>
                    </div>
                    <Button size="sm" asChild>
                      <Link href={`/stiri/${article.id}`}>Citește</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Toate știrile</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {articole.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                      {article.categorie}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Clock className="h-3 w-3" />
                      <span>{article.timpCitire}</span>
                    </div>
                  </div>
                  <CardTitle className="text-base hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/stiri/${article.id}`}>
                      {article.titlu}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      {article.data}
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/stiri/${article.id}`}>Citește</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Rămâi la curent</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Abonează-te la newsletter-ul nostru pentru a primi ultimele noutăți și anunțuri importante 
            direct în inbox-ul tău.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Adresa ta de email"
              className="flex-1 px-4 py-2 rounded-md text-gray-900"
            />
            <Button variant="secondary">
              Abonează-te
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}