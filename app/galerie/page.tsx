import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Camera, Play, Calendar, Eye, Filter, Search, Download } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Galerie() {
  const galerii = [
    {
      id: "campionatul-regional-2024",
      nume: "Campionatul Regional 2024",
      descriere: "Imagini spectaculoase de la competiția din Cluj-Napoca unde atleții noștri au obținut medalii de aur și argint",
      data: "8-10 Martie 2024",
      numarPoze: 45,
      numarVideouri: 8,
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      categorie: "Competiții",
      status: "recent"
    },
    {
      id: "antrenamente-primavara",
      nume: "Antrenamente de primăvară",
      descriere: "Pregătirile intensive pentru sezonul competițional - tehnici de sprint și sărituri",
      data: "Martie 2024",
      numarPoze: 32,
      numarVideouri: 5,
      thumbnail: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      categorie: "Antrenamente",
      status: "popular"
    },
    {
      id: "crosul-de-iarna",
      nume: "Crosul de iarnă",
      descriere: "Competiția tradițională de cros desfășurată în Pădurea Dumbrava cu participarea a 150 de atleți",
      data: "15 Decembrie 2023",
      numarPoze: 28,
      numarVideouri: 3,
      thumbnail: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      categorie: "Competiții",
      status: "archive"
    },
    {
      id: "stagiul-de-pregatire",
      nume: "Stagiul de pregătire Predeal",
      descriere: "Stagiul de pregătire din ianuarie pentru atleții de performanță - altitudine și rezistență",
      data: "10-20 Ianuarie 2024",
      numarPoze: 67,
      numarVideouri: 12,
      thumbnail: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      categorie: "Stagii",
      status: "popular"
    },
    {
      id: "festivalu-atletismului",
      nume: "Festivalul Atletismului pentru Copii",
      descriere: "Eveniment dedicat promovării atletismului în rândul copiilor - competiții și demonstrații",
      data: "25 Mai 2023",
      numarPoze: 89,
      numarVideouri: 15,
      thumbnail: "https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      categorie: "Evenimente",
      status: "popular"
    },
    {
      id: "premiere-2023",
      nume: "Gala de premiere 2023",
      descriere: "Ceremonia de premiere pentru performanțele anului 2023 - medalii și trofee",
      data: "20 Decembrie 2023",
      numarPoze: 41,
      numarVideouri: 6,
      thumbnail: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      categorie: "Evenimente",
      status: "archive"
    }
  ]

  const sampleMedia = [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Start sprint 100m",
      gallery: "Campionatul Regional 2024"
    },
    {
      type: "video",
      url: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Tehnici de săritură",
      gallery: "Antrenamente primăvară",
      duration: "2:45"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Cros prin pădure",
      gallery: "Crosul de iarnă"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Copii la start",
      gallery: "Festival Atletism"
    }
  ]

  const categorii = ['Toate', 'Competiții', 'Antrenamente', 'Stagii', 'Evenimente']

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'recent':
        return 'bg-emerald-500 text-white';
      case 'popular':
        return 'bg-amber-500 text-white';
      case 'archive':
        return 'bg-slate-400 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-blue-600 mb-4">
            <Camera className="h-4 w-4" />
            Galerie foto și video premium
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Momentele noastre speciale
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Descoperă atmosfera unică din competițiile, antrenamentele și evenimentele Club Atletism Sibiu 
            prin fotografiile și videoclipurile noastre profesionale.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 mb-12 shadow-lg border border-white/20">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Caută în galerii..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categorii.map((categorie) => (
                <Button
                  key={categorie}
                  variant={categorie === 'Toate' ? 'default' : 'outline'}
                  size="sm"
                  className={categorie === 'Toate' ? 'bg-blue-600 hover:bg-blue-700' : 'border-slate-200 hover:bg-slate-50'}
                >
                  {categorie}
                </Button>
              ))}
            </div>
            <Button variant="outline" size="sm" className="border-slate-200 hover:bg-slate-50">
              <Filter className="h-4 w-4 mr-2" />
              Filtre avansate
            </Button>
          </div>
        </div>

        {/* Featured Media Preview */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Media recentă</h2>
            <Button variant="outline" className="border-slate-200 hover:bg-slate-50">
              <Download className="h-4 w-4 mr-2" />
              Download All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleMedia.map((media, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={media.url}
                    alt={media.title}
                    width={400}
                    height={256}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  <div className="absolute top-3 left-3">
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      media.type === 'video' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                    }`}>
                      {media.type === 'video' ? <Play className="h-3 w-3" /> : <Camera className="h-3 w-3" />}
                      {media.type === 'video' ? 'Video' : 'Foto'}
                    </div>
                  </div>

                  {'duration' in media && media.duration && (
                    <div className="absolute bottom-3 right-3">
                      <div className="bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                        {media.duration}
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="bg-white/90 text-slate-900 hover:bg-white">
                        <Eye className="h-4 w-4 mr-2" />
                        Vezi {media.type === 'video' ? 'video' : 'imagine'}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 mb-1">{media.title}</h3>
                  <p className="text-sm text-slate-600">{media.gallery}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Galleries */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Galerii principale</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {galerii.filter(galerie => galerie.featured).map((galerie) => (
              <Card key={galerie.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={galerie.thumbnail}
                    alt={galerie.nume}
                    width={400}
                    height={224}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(galerie.status)}`}>
                      {galerie.status === 'recent' ? 'Nou' : galerie.status === 'popular' ? 'Popular' : 'Arhivă'}
                    </span>
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {galerie.categorie}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-bold text-white text-lg mb-1">{galerie.nume}</h3>
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <Calendar className="h-4 w-4" />
                      {galerie.data}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-slate-600 mb-4 leading-relaxed">{galerie.descriere}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-sm text-slate-600">
                        <Camera className="h-4 w-4 text-blue-500" />
                        <span className="font-medium">{galerie.numarPoze}</span>
                        <span>poze</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-600">
                        <Play className="h-4 w-4 text-red-500" />
                        <span className="font-medium">{galerie.numarVideouri}</span>
                        <span>video</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href={`/galerie/${galerie.id}`}>
                      <Eye className="h-4 w-4 mr-2" />
                      Explorează galeria
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">Statistici galerie</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">
                  {galerii.reduce((acc, galerie) => acc + galerie.numarPoze, 0)}
                </div>
                <div className="text-blue-100">Total fotografii</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">
                  {galerii.reduce((acc, galerie) => acc + galerie.numarVideouri, 0)}
                </div>
                <div className="text-blue-100">Total videoclipuri</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">
                  {galerii.length}
                </div>
                <div className="text-blue-100">Galerii create</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">
                  {categorii.length - 1}
                </div>
                <div className="text-blue-100">Categorii</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-16">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 text-center shadow-xl border border-white/20">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Ai poze sau videouri?</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Dacă ai fotografii sau videoclipuri de la evenimentele noastre și vrei să le împărtășești cu comunitatea, 
                te rugăm să ne contactezi. Îți mulțumim pentru contribuție!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">
                    <Camera className="h-5 w-5 mr-2" />
                    Trimite materialele
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-slate-200 hover:bg-slate-50" asChild>
                  <Link href="/evenimente">
                    <Calendar className="h-5 w-5 mr-2" />
                    Vezi evenimente viitoare
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Activitate recentă</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-white/20">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Camera className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900">45 de poze noi adăugate</h4>
                <p className="text-slate-600">Galeria Campionatul Regional 2024 a fost actualizată cu fotografii spectaculoase</p>
              </div>
              <div className="text-sm text-slate-500 font-medium">
                Azi
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-white/20">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Play className="h-6 w-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900">8 videoclipuri noi</h4>
                <p className="text-slate-600">Momentele speciale de la competiția de weekend, inclusiv finalele</p>
              </div>
              <div className="text-sm text-slate-500 font-medium">
                Ieri
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-white/20">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <Eye className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900">Galerie nouă creată</h4>
                <p className="text-slate-600">Antrenamente de primăvară - pregătirile pentru sezonul 2024</p>
              </div>
              <div className="text-sm text-slate-500 font-medium">
                3 zile
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
