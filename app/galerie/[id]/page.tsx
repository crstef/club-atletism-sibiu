'use client'

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Play, Calendar, ArrowLeft, Download, Share2, Heart } from 'lucide-react';

interface Props {
  params: { id: string };
}

interface Fotografie {
  id: number;
  src: string;
  alt: string;
  descriere: string;
}

interface Video {
  id: number;
  src: string;
  thumbnail: string;
  titlu: string;
  durata: string;
}

interface GalerieData {
  nume: string;
  descriere: string;
  data: string;
  locatie: string;
  categorie: string;
  fotografii: Fotografie[];
  videoclipuri: Video[];
}

export default function GalerieIndividuala({ params }: Props) {
  const id = params.id;
  
  // Datele galeriei - în realitate ar veni din baza de date
  const galeriiData: Record<string, GalerieData> = {
    "campionatul-regional-2024": {
      nume: "Campionatul Regional 2024",
      descriere: "Imagini de la competiția din Cluj-Napoca unde atleții noștri au obținut rezultate excepționale",
      data: "8-10 Martie 2024",
      locatie: "Cluj-Napoca, Arena Olimpică",
      categorie: "Competiții",
      fotografii: [
        { id: 1, src: "/placeholder-photo1.jpg", alt: "Start cursă 100m", descriere: "Momentul startului pentru cursa de 100m bărbați" },
        { id: 2, src: "/placeholder-photo2.jpg", alt: "Săritură în lungime", descriere: "Andrei Popescu la săritura în lungime" },
        { id: 3, src: "/placeholder-photo3.jpg", alt: "Premiere", descriere: "Ceremonia de premiere - locul 1 la ștafetă" },
        { id: 4, src: "/placeholder-photo4.jpg", alt: "Echipa", descriere: "Echipa completă la finalul competiției" },
        { id: 5, src: "/placeholder-photo5.jpg", alt: "Antrenor", descriere: "Antrenorul cu atleții după cursă" },
        { id: 6, src: "/placeholder-photo6.jpg", alt: "Spectatori", descriere: "Suporterii clubului în tribune" },
        { id: 7, src: "/placeholder-photo7.jpg", alt: "Încălzire", descriere: "Încălzirea înainte de start" },
        { id: 8, src: "/placeholder-photo8.jpg", alt: "Cursa obstacole", descriere: "110m garduri - semifinală" },
      ],
      videoclipuri: [
        { id: 1, src: "/placeholder-video1.mp4", thumbnail: "/placeholder-video1-thumb.jpg", titlu: "Cursa de 100m - Finală", durata: "2:45" },
        { id: 2, src: "/placeholder-video2.mp4", thumbnail: "/placeholder-video2-thumb.jpg", titlu: "Săritura în lungime - Record personal", durata: "1:30" },
        { id: 3, src: "/placeholder-video3.mp4", thumbnail: "/placeholder-video3-thumb.jpg", titlu: "Ceremonia de premiere", durata: "3:20" },
      ]
    },
    "antrenamente-primavara": {
      nume: "Antrenamente de primăvară",
      descriere: "Pregătirile intensive pentru sezonul competițional 2024",
      data: "Martie 2024",
      locatie: "Stadion Municipal Sibiu",
      categorie: "Antrenamente",
      fotografii: [
        { id: 1, src: "/placeholder-training1.jpg", alt: "Alergare", descriere: "Antrenament de rezistență pe stadion" },
        { id: 2, src: "/placeholder-training2.jpg", alt: "Exerciții", descriere: "Exerciții de forță și coordonare" },
        { id: 3, src: "/placeholder-training3.jpg", alt: "Tehnică", descriere: "Perfecționarea tehnicii de săritură" },
        { id: 4, src: "/placeholder-training4.jpg", alt: "Grup", descriere: "Antrenamentul de grup al juniorilor" },
      ],
      videoclipuri: [
        { id: 1, src: "/placeholder-training-video1.mp4", thumbnail: "/placeholder-training-video1-thumb.jpg", titlu: "Tehnici de sprint", durata: "4:15" },
        { id: 2, src: "/placeholder-training-video2.mp4", thumbnail: "/placeholder-training-video2-thumb.jpg", titlu: "Exerciții de coordonare", durata: "2:50" },
      ]
    }
  };

  const galerie = galeriiData[id] || {
    nume: "Galerie inexistentă",
    descriere: "Această galerie nu a fost găsită.",
    data: "",
    locatie: "",
    categorie: "Necunoscut",
    fotografii: [],
    videoclipuri: []
  };

  if (!galeriiData[id]) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Galerie inexistentă</h1>
          <p className="text-muted-foreground mb-8">Galeria pe care o căutați nu a fost găsită.</p>
          <Link href="/galerie">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Înapoi la galerii
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link href="/galerie">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Înapoi la galerii
            </Button>
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">{galerie.nume}</h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{galerie.data}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>📍</span>
                  <span>{galerie.locatie}</span>
                </div>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                  {galerie.categorie}
                </span>
              </div>
              <p className="text-lg text-muted-foreground mt-2 max-w-3xl">
                {galerie.descriere}
              </p>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Partajează
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Descarcă tot
              </Button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent className="p-4 text-center">
              <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{galerie.fotografii.length}</div>
              <div className="text-sm text-muted-foreground">Fotografii</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Play className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold">{galerie.videoclipuri.length}</div>
              <div className="text-sm text-muted-foreground">Videoclipuri</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">247</div>
              <div className="text-sm text-muted-foreground">Aprecieri</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Download className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">89</div>
              <div className="text-sm text-muted-foreground">Descărcări</div>
            </CardContent>
          </Card>
        </div>

        {/* Videoclipuri */}
        {galerie.videoclipuri.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Play className="h-6 w-6 text-secondary" />
              Videoclipuri
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
              {galerie.videoclipuri.map((video: Video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="relative aspect-video bg-gradient-to-br from-secondary/20 to-primary/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button 
                        className="w-16 h-16 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                        onClick={() => {
                          // Simulez redarea video
                          alert(`Se redă: ${video.titlu}\nDurata: ${video.durata}\n\nFuncționalitatea video va fi implementată cu un player real.`);
                        }}
                      >
                        <Play className="h-8 w-8 text-white ml-1" />
                      </Button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.durata}
                    </div>
                    <div className="absolute top-2 left-2">
                      <Button size="sm" variant="secondary" onClick={(e) => {
                        e.stopPropagation();
                        alert(`Descărcarea videoclipului "${video.titlu}" a început!`);
                      }}>
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{video.titlu}</CardTitle>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Share2 className="h-4 w-4 mr-1" />
                        Partajează
                      </Button>
                      <Button size="sm" variant="outline">
                        <Heart className="h-4 w-4 mr-1" />
                        Like
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Fotografii */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Camera className="h-6 w-6 text-primary" />
            Fotografii
          </h2>
          {galerie.fotografii.length > 0 ? (
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
              {galerie.fotografii.map((foto: Fotografie) => (
                <Card key={foto.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                  <div 
                    className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden"
                    onClick={() => {
                      // Simulez deschiderea în modal/lightbox
                      alert(`Deschidere foto în mărime mare:\n"${foto.alt}"\n\n${foto.descriere}\n\nÎn implementarea finală va fi un lightbox real.`);
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="h-12 w-12 text-primary/30" />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    
                    {/* Action buttons overlay */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex gap-1">
                        <Button 
                          size="sm" 
                          variant="secondary"
                          onClick={(e) => {
                            e.stopPropagation();
                            alert(`Descărcarea fotografiei "${foto.alt}" a început!`);
                          }}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="secondary"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigator.clipboard.writeText(`${window.location.origin}/galerie/${id}/foto/${foto.id}`);
                            alert('Link-ul fotografiei a fost copiat!');
                          }}
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <h4 className="font-medium text-sm mb-1">{foto.alt}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{foto.descriere}</p>
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline" className="text-xs flex-1">
                        👁️ {Math.floor(Math.random() * 50) + 10} vizualizări
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs">
                        ❤️ {Math.floor(Math.random() * 20) + 1}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <Camera className="h-16 w-16 mx-auto mb-4 opacity-30" />
              <p>Nu există fotografii în această galerie.</p>
            </div>
          )}
        </div>

        {/* Galerii similare */}
        <div className="mt-16 pt-16 border-t">
          <h2 className="text-2xl font-bold mb-6">Alte galerii din categoria &ldquo;{galerie.categorie}&rdquo;</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {Object.entries(galeriiData)
              .filter(([key, data]) => key !== id && data.categorie === galerie.categorie)
              .slice(0, 3)
              .map(([key, data]) => (
                <Card key={key} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-32 bg-gradient-to-br from-primary/20 to-secondary/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{data.nume}</CardTitle>
                    <p className="text-sm text-muted-foreground">{data.data}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Camera className="h-4 w-4" />
                        <span>{data.fotografii.length}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Play className="h-4 w-4" />
                        <span>{data.videoclipuri.length}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/galerie/${key}`}>Vizualizează</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
