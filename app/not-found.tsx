'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <h1 className="text-2xl font-bold mb-2">Pagina nu a fost găsită</h1>
          <p className="text-muted-foreground">
            Ne pare rău, dar pagina pe care o căutați nu există sau a fost mutată.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Înapoi acasă
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Pagina anterioară
          </Button>
        </div>
        
        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Linkuri utile:</h3>
          <div className="space-y-1 text-sm">
            <Link href="/evenimente" className="block text-primary hover:underline">
              Evenimente și competiții
            </Link>
            <Link href="/echipe" className="block text-primary hover:underline">
              Echipele noastre
            </Link>
            <Link href="/contact" className="block text-primary hover:underline">
              Contact și înscrieri
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}