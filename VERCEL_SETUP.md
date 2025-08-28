# Configurarea Bazei de Date pe Vercel pentru Club Atletism Sibiu

## Problema identificată
Site-ul nu funcționează pe Vercel deoarece lipsesc variabilele de mediu pentru conectarea la baza de date Supabase.

## Pașii de configurare

### 1. Creează un proiect Supabase

1. **Mergi pe [https://supabase.com](https://supabase.com)**
2. **Creează un cont gratuit** (dacă nu ai deja)
3. **Creează un nou proiect:**
   - Nume proiect: `club-atletism-sibiu`
   - Parola pentru baza de date: alege o parolă sigură
   - Regiune: Europe (Frankfurt) - cea mai apropiată de România

### 2. Configurează schema bazei de date

1. **În dashboard-ul Supabase, mergi la "SQL Editor"**
2. **Copiază și rulează conținutul din fișierul `supabase-schema.sql`** din proiect
3. **Verifică că tabelele au fost create** în secțiunea "Table Editor"

### 3. Obține variabilele de mediu din Supabase

1. **În Supabase, mergi la Settings → API**
2. **Copiază următoarele valori:**
   - **Project URL** (ex: `https://xxxxxxxxxxx.supabase.co`)
   - **anon public** key (cheie lungă care începe cu `eyJ...`)

### 4. Configurează variabilele în Vercel

1. **Mergi pe [https://vercel.com/dashboard](https://vercel.com/dashboard)**
2. **Selectează proiectul `club-atletism-sibiu`**
3. **Mergi la Settings → Environment Variables**
4. **Adaugă următoarele variabile:**

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

**Important:** Înlocuiește valorile cu cele reale din Supabase!

### 5. Redeploy aplicația

1. **În Vercel, mergi la tab-ul "Deployments"**
2. **Click pe ultimul deployment**
3. **Click pe "Redeploy"** (iconița cu 3 puncte → Redeploy)

## Ce s-a schimbat în cod

Am actualizat următoarele:

1. **Creată schema completă de bază de date** (`supabase-schema.sql`)
2. **Actualizată pagina atletilor** să folosească datele din Supabase
3. **Actualizată pagina evenimentelor** să folosească datele din Supabase
4. **Adăugat client Supabase pentru server-side** (`lib/supabase-server.ts`)

## Funcționalități disponibile după configurare

- ✅ **Pagina atletilor** va afișa date din baza de date
- ✅ **Pagina evenimentelor** va afișa date din baza de date
- ✅ **Formularele de contact** vor salva mesajele
- ✅ **Zona de admin** va fi funcțională
- ✅ **Galeria foto** va funcționa

## Date de test incluse

Schema include date de test pentru:
- 6 atleți cu realizări
- 5 antrenori
- 3 evenimente
- 2 articole de știri
- 3 echipe/grupe
- Setări generale ale clubului

## Troubleshooting

### Dacă site-ul încă nu funcționează:

1. **Verifică că variabilele sunt corect setate în Vercel**
2. **Verifică că ai făcut redeploy după adăugarea variabilelor**
3. **Verifică logs-urile în Vercel → Functions** pentru erori

### Pentru a vedea logs-urile:
1. Mergi în Vercel Dashboard
2. Selectează proiectul
3. Click pe "Functions" 
4. Verifică erorile din funcțiile serverless

## Pasul următor: Administrare

După ce totul funcționează, poți:
1. **Accesa zona de admin** pe `/admin/dashboard`
2. **Adăuga atleți noi** prin interfața de admin
3. **Crea evenimente noi** 
4. **Publica știri și articole**
5. **Gestiona galeria foto**

## Securitate

- ✅ **Row Level Security (RLS)** activat pe toate tabelele
- ✅ **Politici de securitate** configurate pentru acces public la citire
- ✅ **Accesul de scriere** va fi restricționat pentru admin (va fi configurat ulterior)

## Costuri

- **Supabase:** Gratuit până la 500MB storage și 2GB transfer/lună
- **Vercel:** Gratuit pentru proiecte personale
- **Total:** 0 RON/lună pentru început

---

**Dacă ai nevoie de ajutor la orice pas, lasă-mi mesaj!** 🚀
