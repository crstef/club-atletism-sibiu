import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Users, Award } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// This would typically come from a database
const events = [
  {
    id: 1,
    title: "Campionatul Județean de Primăvară",
    date: "15 Aprilie 2024",
    time: "09:00",
    location: "Sibiu - Stadion Municipal",
    category: "Toate categoriile",
    description: "Competiție oficială pentru toate grupele de vârstă organizată de Asociația Județeană de Atletism Sibiu în parteneriat cu Club Atletism Sibiu.",
    participants: "120+ atleți înscriși",
    program: [
      { time: "09:00", event: "Verificarea licențelor și acreditarea" },
      { time: "09:30", event: "Sprint 60m - Copii și Juniori" },
      { time: "10:15", event: "Săritura în lungime - toate categoriile" },
      { time: "11:00", event: "Aruncarea mingii - Copii" },
      { time: "11:45", event: "Sprint 100m - Juniori și Seniori" },
      { time: "13:00", event: "Pauză de masă" },
      { time: "14:00", event: "Săritura în înălțime - Juniori" },
      { time: "15:00", event: "Sprint 200m - toate categoriile" },
      { time: "16:00", event: "Ștafeta 4x100m" },
      { time: "16:30", event: "Premiere și închiderea competiției" }
    ],
    prizes: [
      "Medalii pentru primii 3 clasați la fiecare probă",
      "Cupe pentru câștigătorii pe categorii",
      "Diplome de participare pentru toți sportivii"
    ],
    contact: "Pentru înscrieri: antrenor@clubatletismsibiu.ro",
    image: "/placeholder-event.jpg"
  }
]

export default function EvenimentDetalii({ params }: { params: { id: string } }) {
  const event = events.find(e => e.id === parseInt(params.id))
  
  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link href="/evenimente" className="text-primary hover:underline mb-4 inline-block">
            ← Înapoi la evenimente
          </Link>
          <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{event.date} • {event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>{event.participants}</span>
            </div>
          </div>
        </div>

        {/* Event Image */}
        <div className="h-64 bg-gradient-to-br from-primary to-secondary rounded-lg mb-8 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-2xl font-bold mb-2">{event.category}</h2>
            <p className="opacity-90">Stadion Municipal Sibiu</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="flex-1" size="lg">
              <Link href="/contact" className="flex items-center">
                📝 Înscrie-te la eveniment
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/evenimente" className="flex items-center">
                📅 Vezi alte evenimente
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href={`/galerie/eveniment-${event.id}`} className="flex items-center">
                📸 Galerie foto
              </Link>
            </Button>
          </div>
        </div>

        {/* Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Despre eveniment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{event.description}</p>
          </CardContent>
        </Card>

        {/* Program */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Program competiție</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {event.program.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                  <div className="font-mono text-primary font-medium min-w-[60px]">
                    {item.time}
                  </div>
                  <div>{item.event}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Prizes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Premiere și premii
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {event.prizes.map((prize, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>{prize}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Informații și înscrieri</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{event.contact}</p>
            <p className="text-sm text-muted-foreground">
              Înscrierea se face cu minim 48 de ore înainte de competiție. 
              Toți participanții trebuie să aibă licență de atletism valabilă și certificat medical.
            </p>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Înscrie-te acum</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/evenimente">Vezi alte evenimente</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}