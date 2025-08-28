import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trophy, Medal, Award, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

async function getAtlet(id: string) {
  try {
    const supabase = await createClient()
    const { data: atlet, error } = await supabase
      .from('atleti')
      .select(`
        *,
        realizari (
          descriere,
          data_realizare
        )
      `)
      .eq('id', id)
      .single()

    if (error || !atlet) {
      return null
    }

    return atlet
  } catch (error) {
    console.error('Error fetching atlet:', error)
    return null
  }
}

export default async function AtletProfile({ params }: { params: { id: string } }) {
  const atlet = await getAtlet(params.id)

  if (!atlet) {
    notFound()
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link href="/atleti">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Înapoi la atleți
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
            <User className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-2">{atlet.nume} {atlet.prenume}</h1>
          <p className="text-xl text-muted-foreground">{atlet.specializare} • {atlet.categorie}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Informații generale */}
          <Card>
            <CardHeader>
              <CardTitle>Informații generale</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Vârsta:</span>
                <span className="font-medium">{atlet.varsta} ani</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Categoria:</span>
                <span className="font-medium">{atlet.categorie}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Specializare:</span>
                <span className="font-medium">{atlet.specializare}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Antrenor:</span>
                <span className="font-medium">{atlet.antrenor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Experiență:</span>
                <span className="font-medium">{atlet.ani_experienta} ani</span>
              </div>
            </CardContent>
          </Card>

          {/* Performanțe */}
          <Card>
            <CardHeader>
              <CardTitle>Performanțe</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Trophy className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-medium">{atlet.medalii} medalii</div>
                  <div className="text-sm text-muted-foreground">Obținute în competiții</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-secondary" />
                <div>
                  <div className="font-medium">Record personal</div>
                  <div className="text-sm text-muted-foreground">{atlet.record_personal}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Realizări */}
        {atlet.realizari && atlet.realizari.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Realizări notabile</CardTitle>
              <CardDescription>Cele mai importante succese și performanțe</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {atlet.realizari.map((realizare: { descriere: string; data_realizare?: string }, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Medal className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">{realizare.descriere}</div>
                      {realizare.data_realizare && (
                        <div className="text-sm text-muted-foreground">
                          {new Date(realizare.data_realizare).toLocaleDateString('ro-RO')}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Vrei să te alături echipei?</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Inspiră-te din performanțele acestor atleți și începe propriul tău parcurs în atletism!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contactează-ne</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/atleti">Vezi toți atleții</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
