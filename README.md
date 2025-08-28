# Club Atletism Sibiu - Platformă Web Modernă

Platforma web completă și modernă pentru asociația de atletism Club Atletism Sibiu, dezvoltată cu Next.js 14, TypeScript și Tailwind CSS.

## 🏃‍♂️ Despre Proiect

Această aplicație web oferă o soluție completă pentru gestionarea unui club de atletism, incluzând:

- **Website public** cu informații despre club, evenimente, echipe și atleți
- **Dashboard admin** pentru administrarea conținutului și membrilor
- **Sistema de management** pentru evenimente, înscrieri și rezultate
- **Galerie foto/video** pentru documentarea activităților
- **Blog integrat** pentru știri și anunțuri

## 🚀 Tehnologii Utilizate

### Frontend
- **Next.js 14** cu App Router și Server Components
- **TypeScript** pentru siguranța tipurilor
- **Tailwind CSS** pentru styling modern și responsiv
- **shadcn/ui** pentru componente UI consistente
- **Lucide React** pentru iconuri

### Formulare și Validare
- **React Hook Form** pentru gestionarea formularelor
- **Zod** pentru validarea datelor
- **@hookform/resolvers** pentru integrarea cu Zod

### State Management și Data Fetching
- **TanStack Query** pentru server state management
- **Supabase** pentru backend-as-a-service
- **@supabase/ssr** pentru autentificare și baze de date

### Utilități
- **clsx** și **tailwind-merge** pentru gestionarea claselor CSS
- **class-variance-authority** pentru variante de componente

## 📁 Structura Proiectului

```
app/
├── (public)/                 # Pagini publice
│   ├── page.tsx              # Homepage cu hero, evenimente, știri
│   ├── evenimente/           # Evenimente și competiții
│   │   ├── page.tsx          # Lista evenimente
│   │   └── [id]/page.tsx     # Detalii eveniment
│   ├── echipe/              # Echipe și grupe de vârstă
│   │   ├── page.tsx          # Toate echipele
│   │   └── [categoria]/page.tsx # Echipa specifică
│   ├── galerie/             # Galerie foto/video
│   │   ├── page.tsx          # Galerie principală
│   │   └── [eveniment]/page.tsx # Galerie eveniment
│   ├── stiri/               # Știri și anunțuri
│   │   ├── page.tsx          # Lista știri
│   │   └── [id]/page.tsx     # Articol complet
│   ├── atleti/              # Profile atleți
│   │   ├── page.tsx          # Toți atleții
│   │   └── [id]/page.tsx     # Profil individual
│   └── contact/             # Contact și înscrieri
│       └── page.tsx
├── (admin)/                 # Dashboard admin
│   ├── dashboard/           # Privire generală admin
│   ├── evenimente/          # Management evenimente
│   ├── atleti/              # Management atleți
│   └── continut/            # Management conținut
├── api/                     # API routes pentru Supabase
├── globals.css              # Stiluri globale și theme
└── layout.tsx               # Layout principal cu navigare

components/
├── ui/                      # Componente UI reutilizabile
│   ├── button.tsx
│   ├── card.tsx
│   └── ...
├── navigation.tsx           # Componenta de navigare
└── ...

lib/
├── utils.ts                 # Utilități generale
└── supabase.ts             # Configurație Supabase
```

## 🛠️ Instalare și Configurare

### Prerequisite
- Node.js 18+ 
- npm sau yarn
- Cont Supabase (opțional pentru funcționalități complete)

### Pași de instalare

1. **Clonează repository-ul**
```bash
git clone https://github.com/crstef/club-atletism-sibiu.git
cd club-atletism-sibiu
```

2. **Instalează dependențele**
```bash
npm install
```

3. **Configurează variabilele de mediu**
```bash
cp .env.example .env.local
```

Editează `.env.local` cu configurațiile tale:
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# Application URLs
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Pornește serverul de dezvoltare**
```bash
npm run dev
```

5. **Deschide aplicația**
Navighează la [http://localhost:3000](http://localhost:3000)

## 🎨 Caracteristici Principale

### Website Public

#### 🏠 Homepage
- Hero section cu call-to-action
- Statistici club (atleți, medalii, antrenori)
- Evenimente viitoare cu preview
- Știri recente
- Secțiune de prezentare a avantajelor

#### 📅 Evenimente
- Lista completă a evenimentelor
- Filtrare și căutare
- Pagini detaliate cu program, premii, înscrieri
- Calendar interactiv

#### 👥 Echipe
- Organizare pe grupe de vârstă
- Informații antrenori și programe
- Realizări și statistici pe echipă
- Formulare de înscriere

#### 🏆 Atleți
- Profile complete cu performanțe
- Filtrare după categorie și specializare
- Recorduri personale și realizări
- Galerii foto individuale

#### 📰 Știri
- Blog integrat cu categorii
- Sistem de tags și filtrare
- Partajare pe social media
- Newsletter signup

#### 📸 Galerie
- Organizare pe evenimente
- Support foto și video
- Categorii și filtrare
- Upload community

#### 📞 Contact
- Formulare de contact cu validare
- Formulare de înscriere complete
- Informații de contact și program
- Hartă interactivă

### Dashboard Admin

#### 📊 Dashboard Principal
- Statistici generale și KPI-uri
- Activitate recentă
- Acțiuni rapide
- Evenimente viitoare

#### 👨‍💼 Management
- CRUD complet pentru toate entitățile
- Gestionare utilizatori și roluri
- Upload și organizare media
- Rapoarte și analize

## 🌍 Deployment

### Vercel (Recomandat)

1. **Conectează repository-ul la Vercel**
```bash
npx vercel
```

2. **Configurează variabilele de mediu în Vercel Dashboard**

3. **Deploy automat la fiecare push pe main**

### Alte platforme
Aplicația poate fi deployată pe orice platformă care suportă Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Dezvoltare

### Comenzi disponibile

```bash
# Dezvoltare
npm run dev          # Pornește dev server cu Turbopack
npm run build        # Build pentru producție
npm run start        # Pornește aplicația built
npm run lint         # Rulează ESLint

# Utilități
npm run type-check   # Verifică tipurile TypeScript
```

### Structura de dezvoltare

- **Componente**: Toate componentele sunt în directorul `components/`
- **Pagini**: Folosim App Router cu grupuri de rute `(public)` și `(admin)`
- **Stiluri**: Tailwind CSS cu configurație personalizată
- **Tipuri**: TypeScript strict cu validare Zod

## 🎨 Design System

### Culori Tematice
- **Primary**: #2563eb (Albastru atletism)
- **Secondary**: #f97316 (Portocaliu energie)
- **Accent**: #f3f4f6 (Gri deschis)
- **Muted**: #6b7280 (Gri text secundar)

### Tipografie
- **Font familie**: System fonts pentru performanță optimă
- **Scale**: Tailwind typography scale

### Componente
- Design sistem consistent cu shadcn/ui
- Componente responsive mobile-first
- Animații subtile și performante

## 📚 Funcționalități Avansate

### SEO Optimization
- Metadata dinamică pentru fiecare pagină
- Structured data pentru evenimente
- Sitemap automatic generat
- Open Graph și Twitter Cards

### Performance
- Server Components pentru încărcări rapide
- Lazy loading pentru imagini
- Optimizare bundle cu Turbopack
- Caching intelligent cu Next.js

### Accessibility
- Semantic HTML pentru screen readers
- Contrast ridicat pentru culori
- Keyboard navigation support
- ARIA labels și descrieri

## 🔒 Securitate

- Validare server-side cu Zod
- Sanitizare input-uri utilizator
- Rate limiting pentru formulare
- Autentificare securizată cu Supabase

## 🤝 Contribuții

1. Fork repository-ul
2. Creează o branch pentru feature (`git checkout -b feature/nume-feature`)
3. Commit modificările (`git commit -m 'Adaugă nume feature'`)
4. Push pe branch (`git push origin feature/nume-feature`)
5. Deschide un Pull Request

## 📄 Licență

Acest proiect este licențiat sub MIT License - vezi fișierul [LICENSE](LICENSE) pentru detalii.

## 📞 Contact

**Club Atletism Sibiu**
- Website: [club-atletism-sibiu.vercel.app](https://club-atletism-sibiu.vercel.app)
- Email: contact@clubatletismsibiu.ro
- Telefon: +40 369 123 456

**Dezvoltator**
- GitHub: [@crstef](https://github.com/crstef)

---

Dezvoltat cu ❤️ pentru comunitatea atletismului sibian.
