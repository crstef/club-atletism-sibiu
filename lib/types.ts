// Types for the database entities

export interface Atlet {
  id: string
  nume: string
  prenume: string
  varsta: number
  categorie: string
  specializare: string
  antrenor: string
  record_personal: string
  medalii: number
  ani_experienta: number
  imagine_url?: string
  featured: boolean
  created_at?: string
  updated_at?: string
  realizari?: Realizare[]
}

export interface Realizare {
  id: string
  atlet_id: string
  descriere: string
  data_realizare?: string
  created_at?: string
}

export interface Eveniment {
  id: string
  titlu: string
  descriere?: string
  data_eveniment: string
  locatie?: string
  tip_eveniment?: string
  pret?: number
  capacitate_maxima?: number
  inscrisi: number
  status?: string
  imagine_url?: string
  detalii_inscrierre?: string
  created_at?: string
  updated_at?: string
}

export interface Stire {
  id: string
  titlu: string
  continut: string
  rezumat?: string
  autor?: string
  data_publicare?: string
  imagine_principala?: string
  status?: string
  vizualizari?: number
  featured: boolean
  categoria?: string
  tags?: string[]
  created_at?: string
  updated_at?: string
}

export interface MesajContact {
  id: string
  nume: string
  email: string
  telefon?: string
  subiect?: string
  mesaj: string
  status?: string
  created_at?: string
}
