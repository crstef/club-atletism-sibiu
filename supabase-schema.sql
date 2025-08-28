-- Schema pentru baza de date Club Atletism Sibiu

-- Tabel pentru atleți
CREATE TABLE atleti (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nume VARCHAR(255) NOT NULL,
  prenume VARCHAR(255) NOT NULL,
  varsta INTEGER,
  categorie VARCHAR(100),
  specializare VARCHAR(100),
  antrenor VARCHAR(255),
  record_personal VARCHAR(255),
  medalii INTEGER DEFAULT 0,
  ani_experienta INTEGER DEFAULT 0,
  imagine_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabel pentru realizări ale atletilor
CREATE TABLE realizari (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  atlet_id UUID REFERENCES atleti(id) ON DELETE CASCADE,
  descriere TEXT NOT NULL,
  data_realizare DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabel pentru antrenori
CREATE TABLE antrenori (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nume VARCHAR(255) NOT NULL,
  prenume VARCHAR(255) NOT NULL,
  specializare VARCHAR(100),
  experienta INTEGER,
  telefon VARCHAR(20),
  email VARCHAR(255),
  biografia TEXT,
  imagine_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabel pentru evenimente
CREATE TABLE evenimente (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titlu VARCHAR(255) NOT NULL,
  descriere TEXT,
  data_eveniment TIMESTAMP WITH TIME ZONE,
  locatie VARCHAR(255),
  tip_eveniment VARCHAR(100), -- competitie, antrenament, camp, etc.
  pret DECIMAL(10,2),
  capacitate_maxima INTEGER,
  inscrisi INTEGER DEFAULT 0,
  status VARCHAR(50) DEFAULT 'programat', -- programat, in_desfasurare, finalizat, anulat
  imagine_url TEXT,
  detalii_inscrihere TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabel pentru știri/articole
CREATE TABLE stiri (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titlu VARCHAR(255) NOT NULL,
  continut TEXT NOT NULL,
  rezumat TEXT,
  autor VARCHAR(255),
  data_publicare TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  imagine_principala TEXT,
  status VARCHAR(50) DEFAULT 'draft', -- draft, published, archived
  vizualizari INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT false,
  categoria VARCHAR(100),
  tags TEXT[], -- array de tag-uri
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabel pentru galerie (poze)
CREATE TABLE galerie (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titlu VARCHAR(255),
  descriere TEXT,
  imagine_url TEXT NOT NULL,
  thumbnail_url TEXT,
  eveniment_id UUID REFERENCES evenimente(id) ON DELETE SET NULL,
  atlet_id UUID REFERENCES atleti(id) ON DELETE SET NULL,
  data_fotografie DATE,
  tags TEXT[],
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabel pentru echipe/grupe
CREATE TABLE echipe (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nume VARCHAR(255) NOT NULL,
  categorie VARCHAR(100), -- copii, juniori, seniori, etc.
  antrenor_principal UUID REFERENCES antrenori(id),
  antrenor_secund UUID REFERENCES antrenori(id),
  descriere TEXT,
  program_antrenament TEXT,
  zile_antrenament TEXT[], -- luni, marti, etc.
  ora_antrenament TIME,
  locatie_antrenament VARCHAR(255),
  taxa_lunara DECIMAL(10,2),
  varsta_minima INTEGER,
  varsta_maxima INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabel pentru membrii echipei
CREATE TABLE membri_echipa (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  echipa_id UUID REFERENCES echipe(id) ON DELETE CASCADE,
  atlet_id UUID REFERENCES atleti(id) ON DELETE CASCADE,
  data_inscriere DATE DEFAULT CURRENT_DATE,
  status VARCHAR(50) DEFAULT 'activ', -- activ, inactiv, suspendat
  UNIQUE(echipa_id, atlet_id)
);

-- Tabel pentru contact/mesaje
CREATE TABLE mesaje_contact (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nume VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefon VARCHAR(20),
  subiect VARCHAR(255),
  mesaj TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'nou', -- nou, citit, raspuns, arhivat
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabel pentru setări generale
CREATE TABLE setari (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  cheie VARCHAR(255) UNIQUE NOT NULL,
  valoare TEXT,
  descriere TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Inserare date de test pentru atletii existenți
INSERT INTO atleti (nume, prenume, varsta, categorie, specializare, antrenor, record_personal, medalii, ani_experienta, featured) VALUES
('Popescu', 'Andrei', 19, 'Juniori I', 'Sărituri', 'Daniel Radu', '7.85m (săritura în lungime)', 12, 6, true),
('Ionescu', 'Maria', 17, 'Junioare II', 'Mijlociu fond', 'Ioana Mărcuț', '2:12.45 (800m)', 8, 4, true),
('Radu', 'Alexandru', 12, 'Copii', 'Aruncări', 'Alexandru Ionescu', '47.30m (aruncarea mingii)', 5, 2, false),
('Constantinescu', 'Elena', 15, 'Junioare III', 'Sprint', 'Mihai Dumitrescu', '12.85s (100m)', 6, 3, false),
('Georgescu', 'Mihai', 21, 'Seniori', 'Fond lung', 'Carmen Nicolaescu', '31:45.23 (10000m)', 15, 8, true),
('Teodorescu', 'Ana', 16, 'Junioare II', 'Sărituri', 'Daniel Radu', '1.68m (săritura în înălțime)', 4, 2, false);

-- Inserare realizări pentru atleți
INSERT INTO realizari (atlet_id, descriere, data_realizare) 
SELECT id, 'Record național U20', '2024-06-15' FROM atleti WHERE nume = 'Popescu' AND prenume = 'Andrei';

INSERT INTO realizari (atlet_id, descriere, data_realizare) 
SELECT id, 'Campion regional 2024', '2024-07-20' FROM atleti WHERE nume = 'Popescu' AND prenume = 'Andrei';

INSERT INTO realizari (atlet_id, descriere, data_realizare) 
SELECT id, 'Calificare Europene U20', '2024-08-10' FROM atleti WHERE nume = 'Popescu' AND prenume = 'Andrei';

-- Inserare antrenori
INSERT INTO antrenori (nume, prenume, specializare, experienta, email) VALUES
('Radu', 'Daniel', 'Sărituri', 15, 'daniel.radu@clubatletism.ro'),
('Mărcuț', 'Ioana', 'Mijlociu fond', 12, 'ioana.marcut@clubatletism.ro'),
('Ionescu', 'Alexandru', 'Aruncări', 18, 'alex.ionescu@clubatletism.ro'),
('Dumitrescu', 'Mihai', 'Sprint', 10, 'mihai.dumitrescu@clubatletism.ro'),
('Nicolaescu', 'Carmen', 'Fond lung', 20, 'carmen.nicolaescu@clubatletism.ro');

-- Inserare evenimente
INSERT INTO evenimente (titlu, descriere, data_eveniment, locatie, tip_eveniment, pret, capacitate_maxima) VALUES
('Cupa de Iarnă Sibiu 2025', 'Competiție de atletism indoor pentru toate categoriile', '2025-02-15 10:00:00+02', 'Sala de atletism Sibiu', 'competitie', 25.00, 200),
('Tabăra de pregătire vară', 'Tabăra de pregătire pentru juniorii performanți', '2025-07-01 09:00:00+03', 'Centrul olimpic Brașov', 'tabara', 450.00, 50),
('Maraton Sibiu', 'Maraton și semimaraton în centrul Sibiului', '2025-05-18 08:00:00+03', 'Centrul Vechi Sibiu', 'competitie', 35.00, 1000);

-- Inserare știri
INSERT INTO stiri (titlu, continut, rezumat, autor, status, featured, categoria) VALUES
('Rezultate excepționale la Campionatul Național', 'Atletii noștri au obținut rezultate remarcabile la Campionatul Național...', 'Performanțe de excepție ale atletilor clubului', 'Admin Club', 'published', true, 'Competiții'),
('Noi programe de antrenament pentru 2025', 'Începând cu ianuarie 2025, introducem noi programe specializate...', 'Programe noi și modernizate pentru toate categoriile', 'Admin Club', 'published', false, 'Anunțuri');

-- Inserare echipe
INSERT INTO echipe (nume, categorie, descriere, zile_antrenament, ora_antrenament, taxa_lunara, varsta_minima, varsta_maxima) VALUES
('Copii Performanță', 'Copii', 'Grup pentru copii cu potențial competițional', ARRAY['luni', 'miercuri', 'vineri'], '16:00', 80.00, 8, 12),
('Juniori Sprint', 'Juniori', 'Specializare în probele de sprint și sărituri', ARRAY['marti', 'joi', 'sambata'], '17:00', 120.00, 13, 18),
('Seniori Fond', 'Seniori', 'Antrenamente pentru probele de fond și semifond', ARRAY['luni', 'miercuri', 'vineri', 'duminica'], '18:00', 150.00, 18, 35);

-- Inserare setări
INSERT INTO setari (cheie, valoare, descriere) VALUES
('club_nume', 'Club Atletism Sibiu', 'Numele oficial al clubului'),
('club_adresa', 'Str. Atletismului nr. 1, Sibiu', 'Adresa sediului clubului'),
('club_telefon', '0269-123-456', 'Telefon de contact principal'),
('club_email', 'contact@clubatletismsibiu.ro', 'Email de contact principal'),
('taxa_inscriere', '50', 'Taxa de înscriere în club (RON)'),
('program_secretariat', 'Luni-Vineri: 16:00-20:00', 'Programul secretariatului');

-- Activare Row Level Security (RLS) pentru securitate
ALTER TABLE atleti ENABLE ROW LEVEL SECURITY;
ALTER TABLE antrenori ENABLE ROW LEVEL SECURITY;
ALTER TABLE evenimente ENABLE ROW LEVEL SECURITY;
ALTER TABLE stiri ENABLE ROW LEVEL SECURITY;
ALTER TABLE galerie ENABLE ROW LEVEL SECURITY;
ALTER TABLE echipe ENABLE ROW LEVEL SECURITY;
ALTER TABLE mesaje_contact ENABLE ROW LEVEL SECURITY;

-- Politici de securitate - permite citirea publică pentru majoritatea tabelelor
CREATE POLICY "Public read access" ON atleti FOR SELECT USING (true);
CREATE POLICY "Public read access" ON antrenori FOR SELECT USING (true);
CREATE POLICY "Public read access" ON evenimente FOR SELECT USING (true);
CREATE POLICY "Public read access" ON stiri FOR SELECT USING (status = 'published');
CREATE POLICY "Public read access" ON galerie FOR SELECT USING (true);
CREATE POLICY "Public read access" ON echipe FOR SELECT USING (true);

-- Pentru mesajele de contact, doar inserarea este permisă public
CREATE POLICY "Public insert access" ON mesaje_contact FOR INSERT WITH CHECK (true);
