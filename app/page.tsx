import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Trophy, Users, Camera } from 'lucide-react'

export default function Home() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Campionatul Județean de Primăvară",
      date: "15 Aprilie 2024",
      location: "Sibiu - Stadion Municipal",
      category: "Toate categoriile"
    },
    {
      id: 2,
      title: "Cros de Paste",
      date: "20 Aprilie 2024", 
      location: "Pădurea Dumbrava",
      category: "Open"
    },
    {
      id: 3,
      title: "Concurs de Sărituri",
      date: "28 Aprilie 2024",
      location: "Sibiu - Stadion Municipal", 
      category: "U16, U18"
    }
  ]

  const recentNews = [
    {
      id: 1,
      title: "Medalii de aur la Campionatul Regional",
      excerpt: "Atleții noștri au obținut rezultate excepționale la recent încheiatul Campionat Regional de Atletism...",
      date: "12 Martie 2024",
      image: "/placeholder-news.jpg"
    },
    {
      id: 2,
      title: "Începem pregătirile pentru sezonul de vară",
      excerpt: "Cu apropierea sezonului competițional, echipa noastră intensifică pregătirile...",
      date: "8 Martie 2024",
      image: "/placeholder-news2.jpg"
    },
    {
      id: 3,
      title: "Noi membri în echipa de antrenori",
      excerpt: "Suntem bucuroși să anunțăm că echipa noastră de antrenori s-a mărit cu doi specialiști...",
      date: "5 Martie 2024",
      image: "/placeholder-news3.jpg"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Club Atletism Sibiu
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Performanță, pasiune și dedicație în atletismul sibiu. 
            Alătură-te comunității noastre și descoperă-ți potențialul!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Înscrie-te acum</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/evenimente">Vezi evenimente</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Atleți activi</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Medalii anul acesta</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-muted-foreground">Antrenori specializați</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">Ani de experiență</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Evenimente viitoare</h2>
            <Button variant="outline" asChild>
              <Link href="/evenimente">Vezi toate</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{event.category}</span>
                    <Button size="sm" asChild>
                      <Link href={`/evenimente/${event.id}`}>Detalii</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Știri recente</h2>
            <Button variant="outline" asChild>
              <Link href="/stiri">Vezi toate</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recentNews.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary to-secondary rounded-t-lg"></div>
                <CardHeader>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {article.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{article.excerpt}</p>
                  <Button size="sm" asChild>
                    <Link href={`/stiri/${article.id}`}>Citește mai mult</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">De ce să alegi Club Atletism Sibiu?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performanțe de excepție</h3>
              <p className="text-muted-foreground">
                Rezultate remarcabile la competițiile naționale și internaționale,
                cu atleți care ne reprezintă cu mândrie.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Echipă profesională</h3>
              <p className="text-muted-foreground">
                Antrenori calificați și experimentați, dedicați dezvoltării 
                fiecărui atlet în parte.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Facilități moderne</h3>
              <p className="text-muted-foreground">
                Infrastructură de calitate și echipamente moderne pentru 
                antrenamente eficiente și sigure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Gata să începi aventura?</h2>
          <p className="text-xl mb-8 opacity-90">
            Alătură-te familiei Club Atletism Sibiu și descoperă-ți pasiunea pentru atletism!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contactează-ne</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/echipe">Vezi echipele</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
