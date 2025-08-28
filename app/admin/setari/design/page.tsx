'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Palette, 
  Type, 
  Layout, 
  Image, 
  Globe, 
  Search, 
  Shield,
  Save,
  ArrowLeft,
  Monitor,
  Smartphone,
  Upload,
  Eye,
  Settings,
  Download
} from 'lucide-react'

export default function SetariDesign() {
  const [activeTab, setActiveTab] = useState('design')
  const [settings, setSettings] = useState({
    theme: 'modern',
    primaryColor: '#2563eb',
    secondaryColor: '#0ea5e9',
    fontFamily: 'Inter',
    logoUrl: '/logo.png',
    siteName: 'Club Atletism Sibiu',
    siteDescription: 'Clubul de atletism din Sibiu cu peste 25 ani de experiență',
    heroTitle: 'Club Atletism Sibiu',
    heroSubtitle: 'Descoperă pasiunea pentru atletism într-un mediu profesional',
    showStats: true,
    enableAnimations: true,
    darkMode: false
  })

  const tabs = [
    { id: 'design', label: 'Design & Culori', icon: <Palette className="h-5 w-5" /> },
    { id: 'layout', label: 'Layout & Structură', icon: <Layout className="h-5 w-5" /> },
    { id: 'content', label: 'Conținut', icon: <Type className="h-5 w-5" /> },
    { id: 'media', label: 'Logo & Media', icon: <Image className="h-5 w-5" /> },
    { id: 'seo', label: 'SEO & Meta', icon: <Search className="h-5 w-5" /> },
    { id: 'advanced', label: 'Avansat', icon: <Settings className="h-5 w-5" /> }
  ]

  const themes = [
    { id: 'modern', name: 'Modern', preview: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
    { id: 'classic', name: 'Clasic', preview: 'bg-gradient-to-br from-gray-700 to-gray-900' },
    { id: 'sport', name: 'Sport', preview: 'bg-gradient-to-br from-green-500 to-blue-500' },
    { id: 'elegant', name: 'Elegant', preview: 'bg-gradient-to-br from-purple-500 to-pink-500' }
  ]

  const fonts = [
    { id: 'Inter', name: 'Inter (Recomandat)', style: 'font-sans' },
    { id: 'Poppins', name: 'Poppins', style: 'font-sans' },
    { id: 'Roboto', name: 'Roboto', style: 'font-sans' },
    { id: 'Montserrat', name: 'Montserrat', style: 'font-sans' }
  ]

  const handleSave = () => {
    // Simulez salvarea setărilor
    console.log('Setări salvate:', settings)
    alert('Setările au fost salvate cu succes! Site-ul va fi actualizat în câteva secunde.')
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'design':
        return (
          <div className="space-y-8">
            {/* Theme Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Temă Generală</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {themes.map((theme) => (
                  <div
                    key={theme.id}
                    className={`relative cursor-pointer rounded-lg border-2 transition-all ${
                      settings.theme === theme.id ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSettings({...settings, theme: theme.id})}
                  >
                    <div className={`h-20 rounded-t-lg ${theme.preview}`}></div>
                    <div className="p-3 text-center">
                      <p className="font-medium text-sm">{theme.name}</p>
                    </div>
                    {settings.theme === theme.id && (
                      <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                        ✓
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Color Customization */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Culori Personalizate</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Culoare Primară</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={settings.primaryColor}
                      onChange={(e) => setSettings({...settings, primaryColor: e.target.value})}
                      className="w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={settings.primaryColor}
                      onChange={(e) => setSettings({...settings, primaryColor: e.target.value})}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Culoare Secundară</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={settings.secondaryColor}
                      onChange={(e) => setSettings({...settings, secondaryColor: e.target.value})}
                      className="w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={settings.secondaryColor}
                      onChange={(e) => setSettings({...settings, secondaryColor: e.target.value})}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Tipografie</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {fonts.map((font) => (
                  <div
                    key={font.id}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      settings.fontFamily === font.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSettings({...settings, fontFamily: font.id})}
                  >
                    <h4 className={`font-semibold mb-2 ${font.style}`}>{font.name}</h4>
                    <p className={`text-gray-600 ${font.style}`}>Exemplu de text cu această tipografie</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'content':
        return (
          <div className="space-y-8">
            {/* Site Identity */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Identitatea Site-ului</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Numele Site-ului</label>
                  <input
                    type="text"
                    value={settings.siteName}
                    onChange={(e) => setSettings({...settings, siteName: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Descrierea Site-ului</label>
                  <textarea
                    value={settings.siteDescription}
                    onChange={(e) => setSettings({...settings, siteDescription: e.target.value})}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Hero Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Secțiunea Hero</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Titlul Principal</label>
                  <input
                    type="text"
                    value={settings.heroTitle}
                    onChange={(e) => setSettings({...settings, heroTitle: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subtitlul</label>
                  <textarea
                    value={settings.heroSubtitle}
                    onChange={(e) => setSettings({...settings, heroSubtitle: e.target.value})}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case 'layout':
        return (
          <div className="space-y-8">
            {/* Layout Options */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Opțiuni Layout</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium">Afișează Statistici</h4>
                    <p className="text-sm text-gray-600">Arată statisticile pe pagina principală</p>
                  </div>
                  <button
                    onClick={() => setSettings({...settings, showStats: !settings.showStats})}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.showStats ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.showStats ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium">Animații</h4>
                    <p className="text-sm text-gray-600">Activează animațiile și tranzițiile</p>
                  </div>
                  <button
                    onClick={() => setSettings({...settings, enableAnimations: !settings.enableAnimations})}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.enableAnimations ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.enableAnimations ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )

      case 'media':
        return (
          <div className="space-y-8">
            {/* Logo Upload */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Logo & Imagini</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Logo Site</label>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                      <Upload className="h-8 w-8 text-gray-400" />
                    </div>
                    <div>
                      <Button variant="outline" className="mb-2">
                        <Upload className="h-4 w-4 mr-2" />
                        Încarcă Logo
                      </Button>
                      <p className="text-sm text-gray-600">PNG, JPG până la 2MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return <div>Selectează o categorie pentru a edita setările.</div>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" asChild>
              <Link href="/admin/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Înapoi la Dashboard
              </Link>
            </Button>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900">Setări Design Site</h1>
              <p className="text-gray-600">Personalizează aspectul și funcționalitățile site-ului</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                Previzualizare
              </Button>
              <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                <Save className="h-4 w-4 mr-2" />
                Salvează Schimbările
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Categorii Setări</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all ${
                        activeTab === tab.id
                          ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {tab.icon}
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">
                  {tabs.find(tab => tab.id === activeTab)?.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {renderTabContent()}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
