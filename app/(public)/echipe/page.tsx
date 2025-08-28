import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Clock, Trophy, User } from 'lucide-react'
import Link from 'next/link'

export default function Echipe() {
  const teams = [
    {
      categoria: "copii-mici",
      nume: "Copii Mici",
      varsta: "6-9 ani",
      antrenor: "Maria Popescu",
      numarAtleti: 25,
      program: "Luni, Miercuri, Vineri - 16:00-17:00",
      focus: "Jocuri atletice, dezvoltare motricitate, socializare",
      realizari: ["Participare la festivaluri județene", "Medalii la concursuri locale"],
      descriere: "Grupa destinată celor mai mici atleți, unde învățăm bazele atletismului prin joc și distracție."
    },
    {
      categoria: "copii",
      nume: "Copii",
      varsta: "10-12 ani",
      antrenor: "Alexandru Ionescu",
      numarAtleti: 32,
      program: "Luni, Miercuri, Vineri - 17:00-18:30",
      focus: "Tehnica de bază, rezistență, coordonare",
      realizari: ["Podium la Campionatul Județean", "5 recorduri personale"],
      descriere: "Antrenamente structurate pentru dezvoltarea tehnicii de bază și a spiritului competitiv."
    },
    {
      categoria: "juniori-3",
      nume: "Juniori III",
      varsta: "13-15 ani",
      antrenor: "Ioana Mărcuț",
      numarAtleti: 28,
      program: "Luni, Miercuri, Vineri - 18:30-20:00",
      focus: "Specializare pe probe, forță, viteză",
      realizari: ["Calificare la Campionatul Național", "3 medalii regionale"],
      descriere: "Pregătire intensivă pentru competițiile oficiale cu focus pe specializarea pe probe."
    },
    {
      categoria: "juniori-2",
      nume: "Juniori II",
      varsta: "16-17 ani",
      antrenor: "Marius Teodorescu",
      numarAtleti: 20,
      program: "Luni-Vineri - 18:00-20:00",
      focus: "Performanță, tactică competițională",
      realizari: ["Medalii la Campionatul Național", "Recorduri județene"],
      descriere: "Antrenamente de performanță pentru atleții cu potențial competitiv ridicat."
    },
    {
      categoria: "juniori-1",
      nume: "Juniori I",
      varsta: "18-19 ani",
      antrenor: "Daniel Radu",
      numarAtleti: 15,
      program: "Program personalizat",
      focus: "Performanță maximă, pregătire pentru seniori",
      realizari: ["Participare internațională", "Multiple recorduri naționale"],
      descriere: "Echipa de elită cu antrenamente personalizate și obiective de performanță internațională."
    },
    {
      categoria: "seniori",
      nume: "Seniori",
      varsta: "20+ ani",
      antrenor: "Coordonator: Gheorghe Marinescu",
      numarAtleti: 18,
      program: "Program flexibil",
      focus: "Menținere formă, competiții master",
      realizari: ["Campioni balcanici", "Recorduri naționale"],
      descriere: "Atleți experimentați care continuă să concureze la nivel înalt sau își mențin forma fizică."
    }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Echipele Noastre</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Club Atletism Sibiu organizează echipe pe grupe de vârstă, fiecare cu antrenori specializați 
            și programe adaptate nivelului de dezvoltare și obiectivelor sportive.
          </p>
        </div>

        {/* Teams Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {teams.map((echipa) => (
            <Card key={echipa.categoria} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{echipa.nume}</CardTitle>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                    {echipa.varsta}
                  </span>
                </div>
                <CardDescription>{echipa.descriere}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Antrenor */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Antrenor</div>
                    <div className="font-medium">{echipa.antrenor}</div>
                  </div>
                </div>

                {/* Program */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Clock className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Program</div>
                    <div className="font-medium">{echipa.program}</div>
                  </div>
                </div>

                {/* Număr atleți */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Atleți activi</div>
                    <div className="font-medium">{echipa.numarAtleti} sportivi</div>
                  </div>
                </div>

                {/* Focus */}
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Focus antrenament</div>
                  <div className="text-sm">{echipa.focus}</div>
                </div>

                {/* Realizări */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-medium">Realizări recente</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {echipa.realizari.map((realizare, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2"></div>
                        <span>{realizare}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="pt-2">
                  <Button className="w-full" asChild>
                    <Link href={`/echipe/${echipa.categoria}`}>
                      Vezi detalii echipă
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Alătură-te echipei noastre!</h2>
          <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            Indiferent de vârstă sau nivel, avem o echipă potrivită pentru tine. 
            Vino la o ședință de probă și descoperă pasiunea pentru atletism!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Link href="/contact">Înscrie-te acum</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/evenimente">Vezi calendarul</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}