'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

// Zod schemas for form validation
const contactSchema = z.object({
  nume: z.string().min(2, 'Numele trebuie să aibă minim 2 caractere'),
  email: z.string().email('Adresa de email nu este validă'),
  telefon: z.string().min(10, 'Numărul de telefon trebuie să aibă minim 10 cifre'),
  subiect: z.string().min(2, 'Subiectul trebuie să aibă minim 2 caractere'),
  mesaj: z.string().min(10, 'Mesajul trebuie să aibă minim 10 caractere'),
})

const inscriereaSchema = z.object({
  numeAtlet: z.string().min(2, 'Numele atletului trebuie să aibă minim 2 caractere'),
  varstaAtlet: z.number().min(6).max(50),
  numeParinte: z.string().min(2, 'Numele părintelui trebuie să aibă minim 2 caractere'),
  emailParinte: z.string().email('Adresa de email nu este validă'),
  telefonParinte: z.string().min(10, 'Numărul de telefon trebuie să aibă minim 10 cifre'),
  categoria: z.string().min(1, 'Selectează o categorie'),
  experienta: z.string(),
  observatii: z.string().optional(),
})

type ContactForm = z.infer<typeof contactSchema>
type InscriereaForm = z.infer<typeof inscriereaSchema>

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'contact' | 'inscriere'>('contact')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactForm = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nume: '',
      email: '',
      telefon: '',
      subiect: '',
      mesaj: '',
    },
  })

  const inscriereaForm = useForm<InscriereaForm>({
    resolver: zodResolver(inscriereaSchema),
    defaultValues: {
      numeAtlet: '',
      varstaAtlet: 6,
      numeParinte: '',
      emailParinte: '',
      telefonParinte: '',
      categoria: '',
      experienta: '',
      observatii: '',
    },
  })

  const onContactSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      if (!supabase) {
        console.log('Contact form data (Supabase not configured):', data)
        setSubmitStatus('success')
        contactForm.reset()
        return
      }

      const { error } = await supabase
        .from('mesaje_contact')
        .insert([
          {
            nume: data.nume,
            email: data.email,
            telefon: data.telefon,
            subiect: data.subiect,
            mesaj: data.mesaj,
          }
        ])

      if (error) {
        throw error
      }

      setSubmitStatus('success')
      contactForm.reset()
    } catch (error) {
      console.error('Error submitting contact form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const onInscriereaSubmit = async (data: InscriereaForm) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const mesajInscriere = `
Cerere de înscriere:
- Nume atlet: ${data.numeAtlet}
- Vârsta: ${data.varstaAtlet} ani
- Nume părinte/tutore: ${data.numeParinte}
- Email părinte: ${data.emailParinte}
- Telefon părinte: ${data.telefonParinte}
- Categoria dorită: ${data.categoria}
- Experiență anterioară: ${data.experienta}
${data.observatii ? `- Observații: ${data.observatii}` : ''}
      `.trim()

      if (!supabase) {
        console.log('Registration form data (Supabase not configured):', { data, mesajInscriere })
        setSubmitStatus('success')
        inscriereaForm.reset()
        return
      }

      const { error } = await supabase
        .from('mesaje_contact')
        .insert([
          {
            nume: data.numeParinte,
            email: data.emailParinte,
            telefon: data.telefonParinte,
            subiect: `Cerere înscriere - ${data.numeAtlet}`,
            mesaj: mesajInscriere,
          }
        ])

      if (error) {
        throw error
      }

      setSubmitStatus('success')
      inscriereaForm.reset()
    } catch (error) {
      console.error('Error submitting registration form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: "+40 369 123 456",
      description: "Luni - Vineri, 09:00 - 18:00"
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@clubatletismsibiu.ro",
      description: "Răspundem în maxim 24 ore"
    },
    {
      icon: MapPin,
      title: "Adresă",
      value: "Stadion Municipal Sibiu",
      description: "Str. Stadionului nr. 1, Sibiu"
    },
    {
      icon: Clock,
      title: "Program antrenamente",
      value: "Luni - Vineri: 16:00 - 20:00",
      description: "Sâmbăta: 09:00 - 12:00"
    }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact și Înscrieri</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Suntem aici să răspundem întrebărilor tale și să te ajutăm să începi aventura în atletism. 
            Contactează-ne sau înscrie-te direct pentru o ședință de probă.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Informații de contact</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="font-medium">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8">
              <h3 className="font-semibold mb-4">Locația noastră</h3>
              <div className="h-48 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white">
                <div className="text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-medium">Stadion Municipal Sibiu</p>
                  <p className="text-sm opacity-90">Str. Stadionului nr. 1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Forms */}
          <div className="lg:col-span-2">
            {/* Tab Buttons */}
            <div className="flex bg-muted rounded-lg p-1 mb-6">
              <button
                onClick={() => setActiveTab('contact')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${'contact' === activeTab ? 'bg-white shadow-sm' : 'hover:bg-white/50'}`}
              >
                Trimite mesaj
              </button>
              <button
                onClick={() => setActiveTab('inscriere')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${'inscriere' === activeTab ? 'bg-white shadow-sm' : 'hover:bg-white/50'}`}
              >
                Înscrie-te acum
              </button>
            </div>

            {/* Contact Form */}
            {activeTab === 'contact' && (
              <Card>
                <CardHeader>
                  <CardTitle>Trimite-ne un mesaj</CardTitle>
                  <CardDescription>
                    Completează formularul de mai jos și îți vom răspunde în cel mai scurt timp.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-4">
                    <div>
                      <label htmlFor="nume" className="block text-sm font-medium mb-2">
                        Nume complet *
                      </label>
                      <input
                        id="nume"
                        type="text"
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        {...contactForm.register('nume')}
                      />
                      {contactForm.formState.errors.nume && (
                        <p className="text-destructive text-sm mt-1">
                          {contactForm.formState.errors.nume.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Adresa de email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        {...contactForm.register('email')}
                      />
                      {contactForm.formState.errors.email && (
                        <p className="text-destructive text-sm mt-1">
                          {contactForm.formState.errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="telefon" className="block text-sm font-medium mb-2">
                        Număr de telefon *
                      </label>
                      <input
                        id="telefon"
                        type="tel"
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        {...contactForm.register('telefon')}
                      />
                      {contactForm.formState.errors.telefon && (
                        <p className="text-destructive text-sm mt-1">
                          {contactForm.formState.errors.telefon.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="subiect" className="block text-sm font-medium mb-2">
                        Subiect *
                      </label>
                      <input
                        id="subiect"
                        type="text"
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        {...contactForm.register('subiect')}
                      />
                      {contactForm.formState.errors.subiect && (
                        <p className="text-destructive text-sm mt-1">
                          {contactForm.formState.errors.subiect.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="mesaj" className="block text-sm font-medium mb-2">
                        Mesajul tău *
                      </label>
                      <textarea
                        id="mesaj"
                        rows={5}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        {...contactForm.register('mesaj')}
                      />
                      {contactForm.formState.errors.mesaj && (
                        <p className="text-destructive text-sm mt-1">
                          {contactForm.formState.errors.mesaj.message}
                        </p>
                      )}
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Se trimite...' : 'Trimite mesajul'}
                    </Button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
                        ✅ Mesajul a fost trimis cu succes! Vă vom contacta în curând.
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
                        ❌ A apărut o eroare. Vă rugăm să încercați din nou sau să ne contactați telefonic.
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Registration Form */}
            {activeTab === 'inscriere' && (
              <Card>
                <CardHeader>
                  <CardTitle>Formular de înscriere</CardTitle>
                  <CardDescription>
                    Completează formularul pentru a înscrie un atlet la Club Atletism Sibiu.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={inscriereaForm.handleSubmit(onInscriereaSubmit)} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="numeAtlet" className="block text-sm font-medium mb-2">
                          Numele atletului *
                        </label>
                        <input
                          id="numeAtlet"
                          type="text"
                          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                          {...inscriereaForm.register('numeAtlet')}
                        />
                        {inscriereaForm.formState.errors.numeAtlet && (
                          <p className="text-destructive text-sm mt-1">
                            {inscriereaForm.formState.errors.numeAtlet.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="varstaAtlet" className="block text-sm font-medium mb-2">
                          Vârsta atletului *
                        </label>
                        <input
                          id="varstaAtlet"
                          type="number"
                          min="6"
                          max="50"
                          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                          {...inscriereaForm.register('varstaAtlet', { valueAsNumber: true })}
                        />
                        {inscriereaForm.formState.errors.varstaAtlet && (
                          <p className="text-destructive text-sm mt-1">
                            {inscriereaForm.formState.errors.varstaAtlet.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="numeParinte" className="block text-sm font-medium mb-2">
                        Numele părintelui/tutorelui *
                      </label>
                      <input
                        id="numeParinte"
                        type="text"
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        {...inscriereaForm.register('numeParinte')}
                      />
                      {inscriereaForm.formState.errors.numeParinte && (
                        <p className="text-destructive text-sm mt-1">
                          {inscriereaForm.formState.errors.numeParinte.message}
                        </p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="emailParinte" className="block text-sm font-medium mb-2">
                          Email părinte *
                        </label>
                        <input
                          id="emailParinte"
                          type="email"
                          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                          {...inscriereaForm.register('emailParinte')}
                        />
                        {inscriereaForm.formState.errors.emailParinte && (
                          <p className="text-destructive text-sm mt-1">
                            {inscriereaForm.formState.errors.emailParinte.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="telefonParinte" className="block text-sm font-medium mb-2">
                          Telefon părinte *
                        </label>
                        <input
                          id="telefonParinte"
                          type="tel"
                          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                          {...inscriereaForm.register('telefonParinte')}
                        />
                        {inscriereaForm.formState.errors.telefonParinte && (
                          <p className="text-destructive text-sm mt-1">
                            {inscriereaForm.formState.errors.telefonParinte.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="categoria" className="block text-sm font-medium mb-2">
                        Categoria dorită *
                      </label>
                      <select
                        id="categoria"
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        {...inscriereaForm.register('categoria')}
                      >
                        <option value="">Selectează categoria</option>
                        <option value="copii-mici">Copii Mici (6-9 ani)</option>
                        <option value="copii">Copii (10-12 ani)</option>
                        <option value="juniori-3">Juniori III (13-15 ani)</option>
                        <option value="juniori-2">Juniori II (16-17 ani)</option>
                        <option value="juniori-1">Juniori I (18-19 ani)</option>
                        <option value="seniori">Seniori (20+ ani)</option>
                      </select>
                      {inscriereaForm.formState.errors.categoria && (
                        <p className="text-destructive text-sm mt-1">
                          {inscriereaForm.formState.errors.categoria.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="experienta" className="block text-sm font-medium mb-2">
                        Experiența în atletism *
                      </label>
                      <select
                        id="experienta"
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        {...inscriereaForm.register('experienta')}
                      >
                        <option value="">Selectează nivelul</option>
                        <option value="incepator">Începător (fără experiență)</option>
                        <option value="recreational">Recreativ (activitate ocazională)</option>
                        <option value="experimentat">Experimentat (antrenament regulat)</option>
                        <option value="competitional">Competițional (participare la concursuri)</option>
                      </select>
                      {inscriereaForm.formState.errors.experienta && (
                        <p className="text-destructive text-sm mt-1">
                          {inscriereaForm.formState.errors.experienta.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="observatii" className="block text-sm font-medium mb-2">
                        Observații (opțional)
                      </label>
                      <textarea
                        id="observatii"
                        rows={3}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Menționează orice informații suplimentare relevante..."
                        {...inscriereaForm.register('observatii')}
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Se trimite...' : 'Trimite cererea de înscriere'}
                    </Button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
                        ✅ Cererea de înscriere a fost trimisă cu succes! Vă vom contacta pentru a programa o ședință de probă.
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
                        ❌ A apărut o eroare. Vă rugăm să încercați din nou sau să ne contactați telefonic.
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}