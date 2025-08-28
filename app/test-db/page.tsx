'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function TestDB() {
  const [status, setStatus] = useState('Testează conexiunea...')
  const [envVars, setEnvVars] = useState({
    url: '',
    key: ''
  })

  useEffect(() => {
    // Verifică variabilele de mediu
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    setEnvVars({
      url: url ? `${url.substring(0, 20)}...` : 'MISSING',
      key: key ? `${key.substring(0, 20)}...` : 'MISSING'
    })

    // Testează conexiunea
    const testConnection = async () => {
      try {
        if (!url || !key || !supabase) {
          setStatus('❌ Variabile de mediu lipsă sau Supabase nu este configurat!')
          return
        }

        const { data, error } = await supabase
          .from('atleti')
          .select('nume, prenume')
          .limit(1)

        if (error) {
          setStatus(`❌ Eroare Supabase: ${error.message}`)
        } else {
          setStatus(`✅ Conexiune OK! Găsit ${data?.length || 0} înregistrări`)
        }
      } catch (err) {
        setStatus(`❌ Eroare: ${err}`)
      }
    }

    testConnection()
  }, [])

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Test Conexiune Database</h1>
        
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Status Conexiune:</h2>
            <p className="text-lg">{status}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Variabile de mediu:</h2>
            <p><strong>SUPABASE_URL:</strong> {envVars.url}</p>
            <p><strong>SUPABASE_KEY:</strong> {envVars.key}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Instrucțiuni:</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Verifică că variabilele nu sunt &quot;MISSING&quot;</li>
              <li>Verifică că conexiunea este &quot;OK&quot;</li>
              <li>Dacă nu, setează variabilele în Vercel Settings</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
