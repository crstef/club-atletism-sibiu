import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Users } from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'

async function getEvenimente() {
  try {
    const supabase = await createClient()
    const { data: evenimente, error } = await supabase
      .from('evenimente')
      .select('*')
      .order('data_eveniment', { ascending: true })

    if (error) {
      console.error('Error fetching evenimente:', error)
      return []
    }

    return evenimente || []
  } catch (error) {
    console.error('Error connecting to database:', error)
    return []
  }
}

export default async function Evenimente() {
  const evenimente = await getEvenimente()

  // Fallback data în caz că baza de date nu este disponibilă
  const fallbackEvents = [
    {
      id: 1,
      titlu: "Campionatul Județean de Primăvară",
      data_eveniment: "2024-04-15T09:00:00",
      locatie: "Sibiu - Stadion Municipal",
      tip_eveniment: "competitie",
      descriere: "Competiție oficială pentru toate grupele de vârstă. Probe: sprint, sărituri, aruncări.",
      inscrisi: 120,
      capacitate_maxima: 200
    },
    {
      id: 2,
      titlu: "Cros de Paste",
      data_eveniment: "2024-04-20T10:00:00",
      locatie: "Pădurea Dumbrava",
      tip_eveniment: "competitie",
      descriere: "Cros tradițional de Paște pe traseu mixt în natură. Distanțe variate pe vârstă.",
      inscrisi: 80,
      capacitate_maxima: 150
    },
    {
      id: 3,
      titlu: "Concurs de Sărituri",
      data_eveniment: "2024-04-28T14:00:00",
      locatie: "Sibiu - Stadion Municipal",
      tip_eveniment: "competitie",
      descriere: "Concurs dedicat săriturilor în lungime și înălțime pentru juniori.",
      inscrisi: 45,
      capacitate_maxima: 80
    },
    {
      id: 4,
      titlu: "Memorial \"Ion Popescu\"",
      data_eveniment: "2024-05-05T09:00:00",
      locatie: "Pista de atletism CNSS",
      tip_eveniment: "competitie",
      descriere: "Concurs memorial pentru toate categoriile cu program complet de probe.",
      inscrisi: 0,
      capacitate_maxima: 300
    }
  ]

  // Use database data if available, otherwise use fallback
  const evenimenteData = evenimente.length > 0 ? evenimente : fallbackEvents

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Evenimente și Competiții</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Participă la competițiile noastre și urmărește calendarul evenimentelor sportive organizate de Club Atletism Sibiu.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {evenimenteData.map((event) => {
            const eventDate = new Date(event.data_eveniment)
            const formattedDate = eventDate.toLocaleDateString('ro-RO')
            const formattedTime = eventDate.toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' })
            
            return (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="h-5 w-5" />
                    <span className="font-medium">{formattedDate} • {formattedTime}</span>
                  </div>
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {event.tip_eveniment}
                  </span>
                </div>
                <CardTitle className="text-xl">{event.titlu}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {event.locatie}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">{event.descriere}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">
                      {event.inscrisi > 0 ? `${event.inscrisi}+ atleți înscriși` : 'Înscrieri în curs'}
                    </span>
                  </div>
                  <Button asChild>
                    <Link href={`/evenimente/${event.id}`}>Vezi detalii</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Vrei să participi?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Înscrie-te la evenimentele noastre și fă parte din comunitatea atletismului sibian. 
            Contactează-ne pentru mai multe informații despre înscrieri și participare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contactează-ne</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/echipe">Vezi echipele</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}