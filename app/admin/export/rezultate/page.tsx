'use client'

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Table, BarChart3, Users, Calendar, Trophy } from 'lucide-react';

export default function ExportRezultate() {
  const exportTypes = [
    {
      icon: <Table className="h-8 w-8" />,
      title: "Export Excel - Rezultate Complete",
      description: "Toate rezultatele competițiilor cu detalii complete",
      format: "Excel (.xlsx)",
      size: "~2.3 MB",
      action: "export-rezultate-excel"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Raport PDF - Statistici",
      description: "Raport cu grafice și analize statistice",
      format: "PDF",
      size: "~890 KB",
      action: "export-statistici-pdf"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Lista Atleți CSV",
      description: "Date de contact și performanțe ale atleților",
      format: "CSV",
      size: "~156 KB",
      action: "export-atleti-csv"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Calendar Evenimente",
      description: "Export calendar pentru Google Calendar/Outlook",
      format: "iCal (.ics)",
      size: "~45 KB",
      action: "export-calendar-ics"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Clasamente Complete",
      description: "Clasamente pe categorii și probe",
      format: "Excel (.xlsx)",
      size: "~1.8 MB",
      action: "export-clasamente-excel"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analiză Performanțe",
      description: "Grafice de evoluție și analize comparative",
      format: "PDF",
      size: "~1.2 MB",
      action: "export-analiza-pdf"
    }
  ];

  const handleExport = (action: string) => {
    // Simulez exportul - în realitate ar face request la API
    console.log(`Exporting: ${action}`);
    
    // Creez un link de download fictiv
    const fileName = `${action}-${new Date().toISOString().split('T')[0]}.xlsx`;
    const blob = new Blob(['Date export sample'], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    alert(`Descărcarea a început: ${fileName}`);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Export Rezultate și Rapoarte</h1>
          <p className="text-muted-foreground">Descarcă date și rapoarte în diferite formate</p>
        </div>
        <Link href="/admin/dashboard">
          <Button variant="outline">Înapoi la Dashboard</Button>
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {exportTypes.map((exportType, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  {exportType.icon}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{exportType.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{exportType.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm">
                  <span className="font-medium">Format: </span>
                  <span className="text-muted-foreground">{exportType.format}</span>
                </div>
                <div className="text-sm">
                  <span className="font-medium">Mărime: </span>
                  <span className="text-muted-foreground">{exportType.size}</span>
                </div>
              </div>
              <Button 
                className="w-full" 
                onClick={() => handleExport(exportType.action)}
              >
                <Download className="h-4 w-4 mr-2" />
                Descarcă {exportType.format}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Export History */}
      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Istoric Exporturi Recente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { file: "rezultate-complete-2024-08-28.xlsx", date: "Azi, 14:32", size: "2.3 MB" },
                { file: "statistici-lunare-2024-08.pdf", date: "Ieri, 16:45", size: "890 KB" },
                { file: "atleti-activi-2024-08-26.csv", date: "26 Aug, 09:15", size: "156 KB" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Download className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium text-sm">{item.file}</p>
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{item.size}</span>
                    <Button size="sm" variant="outline">Re-descarcă</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Acțiuni Rapide</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Button variant="secondary" className="w-full">
            📊 Programează raport automat
          </Button>
          <Button variant="secondary" className="w-full">
            📧 Trimite raport pe email
          </Button>
          <Button variant="secondary" className="w-full">
            ⚙️ Configurează exporturi
          </Button>
        </div>
      </div>
    </div>
  );
}
