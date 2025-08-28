import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Camera, 
  Plus, 
  Search, 
  Filter, 
  Download,
  Edit,
  Eye,
  Trash2,
  Upload,
  Play,
  Image as ImageIcon,
  Calendar,
  Users,
  Star
} from 'lucide-react';
import Image from 'next/image';

export default function AdminGaleriePage() {
  const galleries = [
    {
      id: 1,
      nume: "Campionatul Regional 2024",
      descriere: "Imagini spectaculoase de la competiția din Cluj-Napoca",
      data: "2024-03-08",
      status: "Publicată",
      numarPoze: 45,
      numarVideouri: 8,
      vizualizari: 1250,
      likes: 89,
      categorie: "Competiții",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      featured: true
    },
    {
      id: 2,
      nume: "Antrenamente Primăvară",
      descriere: "Pregătirile intensive pentru sezonul competițional",
      data: "2024-03-15",
      status: "Publicată",
      numarPoze: 32,
      numarVideouri: 5,
      vizualizari: 890,
      likes: 67,
      categorie: "Antrenamente",
      thumbnail: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      featured: true
    },
    {
      id: 3,
      nume: "Crosul de Iarnă",
      descriere: "Competiția tradițională de cros din Pădurea Dumbrava",
      data: "2023-12-15",
      status: "Arhivă",
      numarPoze: 28,
      numarVideouri: 3,
      vizualizari: 1450,
      likes: 112,
      categorie: "Competiții",
      thumbnail: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      featured: false
    },
    {
      id: 4,
      nume: "Stagiu Predeal",
      descriere: "Stagiul de pregătire din ianuarie pentru atleții de performanță",
      data: "2024-01-10",
      status: "Draft",
      numarPoze: 67,
      numarVideouri: 12,
      vizualizari: 0,
      likes: 0,
      categorie: "Stagii",
      thumbnail: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      featured: false
    }
  ];

  const categories = ["Toate", "Competiții", "Antrenamente", "Stagii", "Evenimente"];
  const statusTypes = ["Toate", "Publicată", "Draft", "Arhivă"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Publicată':
        return 'bg-emerald-50 text-emerald-700';
      case 'Draft':
        return 'bg-amber-50 text-amber-700';
      case 'Arhivă':
        return 'bg-slate-50 text-slate-700';
      default:
        return 'bg-slate-50 text-slate-700';
    }
  };

  const getCategoryColor = (categorie: string) => {
    switch (categorie) {
      case 'Competiții':
        return 'bg-violet-50 text-violet-700';
      case 'Antrenamente':
        return 'bg-blue-50 text-blue-700';
      case 'Stagii':
        return 'bg-emerald-50 text-emerald-700';
      case 'Evenimente':
        return 'bg-amber-50 text-amber-700';
      default:
        return 'bg-slate-50 text-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Gestionare Galerie</h1>
          <p className="text-slate-600">Administrează galeriile foto și video ale clubului</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="text-slate-600 border-slate-200 hover:bg-slate-50">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="text-slate-600 border-slate-200 hover:bg-slate-50">
            <Upload className="h-4 w-4 mr-2" />
            Upload Media
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Galerie Nouă
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border border-slate-200 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Camera className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  {galleries.reduce((acc, gallery) => acc + gallery.numarPoze, 0)}
                </p>
                <p className="text-sm text-slate-600">Total Fotografii</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border border-slate-200 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-50 rounded-lg">
                <Play className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  {galleries.reduce((acc, gallery) => acc + gallery.numarVideouri, 0)}
                </p>
                <p className="text-sm text-slate-600">Total Videouri</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border border-slate-200 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <Eye className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  {galleries.reduce((acc, gallery) => acc + gallery.vizualizari, 0)}
                </p>
                <p className="text-sm text-slate-600">Total Vizualizări</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border border-slate-200 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-50 rounded-lg">
                <Star className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  {galleries.reduce((acc, gallery) => acc + gallery.likes, 0)}
                </p>
                <p className="text-sm text-slate-600">Total Aprecieri</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="border border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Caută galerii, descrieri sau categorii..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <select className="px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <select className="px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              {statusTypes.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <Button variant="outline" size="sm" className="text-slate-600 border-slate-200 hover:bg-slate-50">
              <Filter className="h-4 w-4 mr-2" />
              Mai multe filtre
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Galleries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleries.map((gallery) => (
          <Card key={gallery.id} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative">
              <div className="h-48 relative overflow-hidden rounded-t-lg">
                <Image
                  src={gallery.thumbnail}
                  alt={gallery.nume}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Status and Featured Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(gallery.status)}`}>
                    {gallery.status}
                  </span>
                  {gallery.featured && (
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(gallery.categorie)}`}>
                    {gallery.categorie}
                  </span>
                </div>

                {/* Gallery Info Overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-semibold text-white text-lg mb-1">{gallery.nume}</h3>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Calendar className="h-3 w-3" />
                    {new Date(gallery.data).toLocaleDateString('ro-RO')}
                  </div>
                </div>
              </div>
            </div>

            <CardContent className="p-4">
              <p className="text-sm text-slate-600 mb-4 line-clamp-2">{gallery.descriere}</p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center gap-1">
                  <ImageIcon className="h-4 w-4 text-blue-500" />
                  <span className="font-medium">{gallery.numarPoze}</span>
                  <span className="text-slate-600">poze</span>
                </div>
                <div className="flex items-center gap-1">
                  <Play className="h-4 w-4 text-red-500" />
                  <span className="font-medium">{gallery.numarVideouri}</span>
                  <span className="text-slate-600">video</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4 text-emerald-500" />
                  <span className="font-medium">{gallery.vizualizari}</span>
                  <span className="text-slate-600">views</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span className="font-medium">{gallery.likes}</span>
                  <span className="text-slate-600">likes</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex-1 text-slate-600 border-slate-200 hover:bg-slate-50">
                  <Eye className="h-4 w-4 mr-1" />
                  Vezi
                </Button>
                <Button variant="outline" size="sm" className="flex-1 text-slate-600 border-slate-200 hover:bg-slate-50">
                  <Edit className="h-4 w-4 mr-1" />
                  Editează
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-red-600 border-red-200 hover:bg-red-50">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="border border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">Acțiuni Rapide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="p-4 h-auto flex-col gap-2 border-slate-200 hover:bg-slate-50">
              <Upload className="h-8 w-8 text-blue-600" />
              <span className="font-medium">Upload în masă</span>
              <span className="text-xs text-slate-600">Încarcă multiple fișiere odată</span>
            </Button>
            
            <Button variant="outline" className="p-4 h-auto flex-col gap-2 border-slate-200 hover:bg-slate-50">
              <ImageIcon className="h-8 w-8 text-emerald-600" />
              <span className="font-medium">Optimizare imagini</span>
              <span className="text-xs text-slate-600">Compresie automată pentru web</span>
            </Button>
            
            <Button variant="outline" className="p-4 h-auto flex-col gap-2 border-slate-200 hover:bg-slate-50">
              <Download className="h-8 w-8 text-amber-600" />
              <span className="font-medium">Backup galerii</span>
              <span className="text-xs text-slate-600">Export complet pentru arhivare</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
