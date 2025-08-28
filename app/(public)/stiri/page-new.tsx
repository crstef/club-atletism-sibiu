import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, Clock } from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'

async function getStiri() {
  try {
    const supabase = await createClient()
    const { data: stiri, error } = await supabase
      .from('stiri')
      .select('*')
      .eq('status', 'published')
      .order('data_publicare', { ascending: false })

    if (error) {
      console.error('Error fetching stiri:', error)
      return []
    }

    return stiri || []
  } catch (error) {
    console.error('Error connecting to database:', error)
    return []
  }
}

export default async function Stiri() {
  const stiri = await getStiri()

  // Fallback data în caz că baza de date nu este disponibilă
  const fallbackArticole = [
    {
      id: 1,
      titlu: "Medalii de aur la Campionatul Regional",
      rezumat: "Atleții noștri au obținut rezultate excepționale la recent încheiatul Campionat Regional de Atletism desfășurat la Cluj-Napoca.",
      continut: "În perioada 8-10 martie, echipa Club Atletism Sibiu a participat cu 15 atleți la Campionatul Regional...",
      data_publicare: "2024-03-12T10:00:00",
      autor: "Maria Popescu",
      categoria: "Competiții",
      imagine_principala: "/placeholder-news.jpg",
      featured: true
    },
    {
      id: 2,
      titlu: "Începem pregătirile pentru sezonul de vară",
      rezumat: "Cu apropierea sezonului competițional, echipa noastră intensifică pregătirile pentru competițiile din perioada aprilie-septembrie.",
      continut: "Antrenorii clubului au stabilit un program intensificat de pregătire...",
      data_publicare: "2024-03-08T10:00:00",
      autor: "Alexandru Ionescu",
      categoria: "Antrenamente",
      imagine_principala: "/placeholder-news2.jpg",
      featured: false
    }
  ]

  // Use database data if available, otherwise use fallback
  const articoleData = stiri.length > 0 ? stiri : fallbackArticole

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
          {categorii.map((categoria) => (
            <Button key={categoria} variant="outline" size="sm">
              {categoria}
            </Button>
          ))}
        </div>

        {/* Featured Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Articole principale</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {articoleData.filter((article: any) => article.featured).map((article: any) => {
              const articleDate = new Date(article.data_publicare)
              const formattedDate = articleDate.toLocaleDateString('ro-RO')
              
              return (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted"></div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formattedDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {article.autor}
                    </div>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                      {article.categoria}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{article.titlu}</CardTitle>
                  <CardDescription>{article.rezumat}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild>
                    <Link href={`/stiri/${article.id}`}>Citește mai mult</Link>
                  </Button>
                </CardContent>
              </Card>
              )
            })}
          </div>
        </div>

        {/* All Articles */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Toate știrile</h2>
          <div className="grid gap-6">
            {articoleData.map((article: any) => {
              const articleDate = new Date(article.data_publicare)
              const formattedDate = articleDate.toLocaleDateString('ro-RO')
              
              return (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formattedDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {article.autor}
                      </div>
                    </div>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                      {article.categoria}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{article.titlu}</CardTitle>
                  <CardDescription>{article.rezumat}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild>
                    <Link href={`/stiri/${article.id}`}>Citește mai mult</Link>
                  </Button>
                </CardContent>
              </Card>
              )
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Abonează-te la newsletter-ul nostru pentru a primi cele mai importante știri 
            direct în inbox-ul tău.
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <input 
              type="email" 
              placeholder="Adresa ta de email"
              className="flex-1 px-3 py-2 border rounded-md"
            />
            <Button>Abonează-te</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
