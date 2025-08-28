import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Trophy, Users, TrendingUp, ArrowRight, Play, Star } from 'lucide-react'

export default function Home() {
  const evenimente = [
    {
      id: 1,
      nume: "Cupa de Primăvară",
      data: "15 Martie 2024",
      locatie: "Stadion Sibiu",
      participanti: 120,
      status: "Înregistrări deschise",
      featured: true
    },
    {
      id: 2,
      nume: "Campionatul Județean",
      data: "28 Aprilie 2024", 
      locatie: "Arena Olimpică",
      participanti: 85,
      status: "Aproape",
      featured: false
    }
  ]

  const stiri = [
    {
      id: 1,
      titlu: "Record nou la Campionatul Regional",
      preview: "Maria Popescu a stabilit un nou record la săritura în lungime cu o performanță de 6.45m.",
      data: "25 Aug 2024",
      autor: "Echipa redacției",
      imagine: "/news-1.jpg",
      categorie: "Rezultate"
    },
    {
      id: 2, 
      titlu: "Noul sezon competițional 2024-2025",
      preview: "Pregătirile pentru noul sezon au început cu antrenamente intensive și planuri ambițioase.",
      data: "20 Aug 2024",
      autor: "Antrenor Șef",
      imagine: "/news-2.jpg",
      categorie: "Anunțuri"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Modern Premium */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-slate-600/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-white/90 text-sm font-medium mb-6">
              <Star className="h-4 w-4 text-yellow-400" />
              Clubul #1 în atletism din Sibiu
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              Club Atletism
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block">
                Sibiu
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
              Descoperă pasiunea pentru atletism într-un mediu profesional. 
              <span className="text-blue-300 font-semibold"> Peste 200 de atleți</span> își 
              ating potențialul maxim alături de antrenorii noștri experimentați.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:scale-105">
              <Link href="/contact" className="flex items-center">
                Înscrie-te acum
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg">
              <Link href="/evenimente" className="flex items-center">
                <Play className="mr-2 h-5 w-5" />
                Vezi evenimente
              </Link>
            </Button>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Atleți activi", value: "200+", icon: <Users className="h-6 w-6" /> },
              { label: "Medalii câștigate", value: "150+", icon: <Trophy className="h-6 w-6" /> },
              { label: "Ani de experiență", value: "25+", icon: <TrendingUp className="h-6 w-6" /> },
              { label: "Antrenori", value: "12", icon: <Star className="h-6 w-6" /> }
            ].map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-blue-300 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Evenimente Section - Clean & Modern */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Calendar className="h-4 w-4" />
              Evenimente viitoare
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Competiții și Evenimente
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Participă la competițiile noastre și măsoară-ți progresul alături de alți atleți pasionați
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {evenimente.map((event) => (
              <Card key={event.id} className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 ${event.featured ? 'bg-gradient-to-br from-blue-50 to-cyan-50 ring-2 ring-blue-200' : 'bg-gray-50'}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{event.nume}</CardTitle>
                      <CardDescription className="text-lg text-gray-600">{event.data} • {event.locatie}</CardDescription>
                    </div>
                    {event.featured && (
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Recomandat
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{event.participanti} participanți</span>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.status === 'Înregistrări deschise' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {event.status}
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white group-hover:shadow-lg transition-all duration-300" asChild>
                    <Link href={`/evenimente/${event.id}`} className="flex items-center justify-center">
                      Vezi detalii
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50" asChild>
              <Link href="/evenimente">
                Vezi toate evenimentele
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Știri Section - Premium Design */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 rounded-full px-4 py-2 text-sm font-medium mb-6">
              📰 Ultimele noutăți
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Știri și Rezultate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fii la curent cu ultimele rezultate, evenimente și noutăți din lumea atletismului
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {stiri.map((article) => (
              <Card key={article.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {article.categorie}
                    </span>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.titlu}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {article.preview}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-500">
                      <span>{article.data}</span> • <span>{article.autor}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 group-hover:border-blue-300 group-hover:text-blue-600 transition-all" asChild>
                    <Link href={`/stiri/${article.id}`} className="flex items-center justify-center">
                      Citește mai mult
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50" asChild>
              <Link href="/stiri">
                Vezi toate știrile
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Gradient */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Începe-ți parcursul în atletism
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Alătură-te comunității noastre și descoperă cât de departe te pot duce pasiunea și dedicarea în sport
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-2xl">
              <Link href="/contact">
                Contactează-ne
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg">
              <Link href="/echipe">
                Vezi echipele
                <Users className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
