import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Users } from 'lucide-react'
import Link from 'next/link'

export default function Evenimente() {
  const events = [
    {
      id: 1,
      title: "Campionatul Județean de Primăvară",
      date: "15 Aprilie 2024",
      time: "09:00",
      location: "Sibiu - Stadion Municipal",
      category: "Toate categoriile",
      description: "Competiție oficială pentru toate grupele de vârstă. Probe: sprint, sărituri, aruncări.",
      participants: "120+ atleți înscriși"
    },
    {
      id: 2,
      title: "Cros de Paste",
      date: "20 Aprilie 2024",
      time: "10:00",
      location: "Pădurea Dumbrava",
      category: "Open",
      description: "Cros tradițional de Paște pe traseu mixt în natură. Distanțe variate pe vârstă.",
      participants: "80+ atleți înscriși"
    },
    {
      id: 3,
      title: "Concurs de Sărituri",
      date: "28 Aprilie 2024",
      time: "14:00",
      location: "Sibiu - Stadion Municipal",
      category: "U16, U18",
      description: "Concurs dedicat săriturilor în lungime și înălțime pentru juniori.",
      participants: "45+ atleți înscriși"
    },
    {
      id: 4,
      title: "Memorial \"Ion Popescu\"",
      date: "5 Mai 2024",
      time: "09:00",
      location: "Pista de atletism CNSS",
      category: "Toate categoriile",
      description: "Concurs memorial pentru toate categoriile cu program complet de probe.",
      participants: "Înscrieri în curs"
    }
  ]

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
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="h-5 w-5" />
                    <span className="font-medium">{event.date} • {event.time}</span>
                  </div>
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {event.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">{event.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{event.participants}</span>
                  </div>
                  <Button asChild>
                    <Link href={`/evenimente/${event.id}`}>Vezi detalii</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
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