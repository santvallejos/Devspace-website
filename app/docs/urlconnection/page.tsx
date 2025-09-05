import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChevronRight,
  Home,
  Globe,
  ArrowRight,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function URLConnectionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
          <div className="flex items-center">
            <Link className="flex items-center space-x-2 mr-8" href="/">
              <Image src="/Diseño_sin_título-removebg-preview.png" alt="Devspace" width={32} height={32} className="rounded" />
              <span className="font-bold text-xl">Devspace</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link className="transition-colors hover:text-primary" href="/">
                Inicio
              </Link>
              <Link className="transition-colors hover:text-primary" href="/docs">
                Documentación
              </Link>
              <Link className="transition-colors text-primary" href="/docs/urlconnection">
                URL de Conexión
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com/santvallejos/DevSpace-App" target="_blank">
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-screen-2xl flex-1 items-start px-4">
        {/* Main Content */}
        <main className="relative py-6 lg:py-8">
          <div className="mx-auto w-full min-w-0 max-w-4xl">
            {/* Breadcrumb */}
            <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                <Home className="h-4 w-4" />
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/docs" className="hover:text-foreground">
                Documentación
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">URL de Conexión MongoDB</span>
            </div>

            {/* Navigation Buttons */}
            <div className="mb-6 flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/docs">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver a Documentación
                </Link>
              </Button>
              <Button asChild>
                <Link href="/docs#installation">
                  Continuar con Instalación
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="space-y-12">
              {/* Hero */}
              <div className="space-y-4 text-center md:text-left">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-balance">
                  Configurar MongoDB Atlas
                </h1>
                <p className="text-xl text-muted-foreground text-pretty max-w-3xl">
                  Guía completa paso a paso para crear tu cluster MongoDB Atlas y obtener la URL de conexión necesaria para Devspace.
                </p>
              </div>

              {/* Introduction */}
              <section className="space-y-6">
                <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30">
                  <CardHeader>
                    <CardTitle className="text-blue-800 dark:text-blue-200">¿Por qué necesitas MongoDB Atlas?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-700 dark:text-blue-300 text-pretty">
                      Devspace utiliza MongoDB como base de datos para almacenar tu información de proyectos, configuraciones y preferencias. 
                      MongoDB Atlas es la versión en la nube gratuita de MongoDB que te permite tener tu base de datos accesible desde cualquier lugar.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* MongoDB Atlas Setup */}
              <section className="space-y-8">
                {/* Paso 1: Crear cuenta */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        1
                      </div>
                      Crear cuenta o iniciar sesión
                    </CardTitle>
                    <CardDescription>Accede a MongoDB Atlas</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Visita el sitio web oficial de MongoDB Atlas:
                    </p>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="https://www.mongodb.com/es/products/platform/atlas-database" target="_blank">
                        <Globe className="mr-2 h-4 w-4" />
                        Ir a MongoDB Atlas
                      </Link>
                    </Button>
                    <div className="grid gap-3 md:grid-cols-2">
                      <Card className="bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800">
                        <CardContent className="pt-4">
                          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Si no tienes cuenta:</h4>
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            Haz clic en "Try Free" y completa el registro con tu email.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800">
                        <CardContent className="pt-4">
                          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Si ya tienes cuenta:</h4>
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            Haz clic en "Sign In" e ingresa tus credenciales.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>

                {/* Paso 2: Crear cluster */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        2
                      </div>
                      Crear el cluster "Devspace"
                    </CardTitle>
                    <CardDescription>Configura tu cluster gratuito</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          ▶
                        </div>
                        <div>
                          <p className="text-sm">En el dashboard, haz clic en el botón <strong className="text-green-600">"Create"</strong> (verde)</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          ▶
                        </div>
                        <div>
                          <p className="text-sm">Selecciona el plan <strong>"FREE"</strong> (512 MB)</p>
                        </div>
                      </div>
                    </div>

                    <Card className="bg-secondary/50 border-secondary/50">
                      <CardHeader>
                        <CardTitle className="text-base">Configuración recomendada:</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="grid gap-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Nombre del cluster:</span>
                            <code className="bg-primary/10 px-2 py-1 rounded">Devspace</code>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Proveedor:</span>
                            <code className="bg-primary/10 px-2 py-1 rounded">AWS (recomendado)</code>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Región:</span>
                            <code className="bg-primary/10 px-2 py-1 rounded">La más cercana a tu ubicación</code>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800">
                      <CardContent className="pt-4">
                        <div className="space-y-2">
                          <p className="text-sm text-amber-700 dark:text-amber-300 font-semibold">
                            ✅ Asegúrate de marcar estas opciones:
                          </p>
                          <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                            <li>• ✅ Automate security setup</li>
                            <li>• ✅ Preload sample dataset</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">
                        Haz clic en <strong>"Create Deployment"</strong> y espera 1-3 minutos
                      </p>
                      <div className="animate-pulse bg-gradient-to-r from-green-500/20 to-blue-500/20 h-2 rounded-full"></div>
                    </div>
                  </CardContent>
                </Card>

                {/* Paso 3: Crear base de datos */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        3
                      </div>
                      Crear la base de datos "Unity"
                    </CardTitle>
                    <CardDescription>Configura la base de datos para Devspace</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          1
                        </div>
                        <div>
                          <p className="text-sm">Ve a <strong>"Database"</strong> → <strong>"Clusters"</strong></p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          2
                        </div>
                        <div>
                          <p className="text-sm">En tu cluster "Devspace", haz clic en <strong>"Browse Collections"</strong></p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          3
                        </div>
                        <div>
                          <p className="text-sm">Haz clic en <strong>"Create Database"</strong></p>
                        </div>
                      </div>
                    </div>

                    <Card className="bg-secondary/50 border-secondary/50">
                      <CardHeader>
                        <CardTitle className="text-base">Configuración de la base de datos:</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="grid gap-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Database name:</span>
                            <code className="bg-primary/10 px-2 py-1 rounded font-bold">Unity</code>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Collection name:</span>
                            <code className="bg-primary/10 px-2 py-1 rounded">Folders</code>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          (Puedes usar cualquier nombre para la colección inicial)
                        </p>
                      </CardContent>
                    </Card>

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Haz clic en <strong>"Create"</strong> para finalizar
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Paso 4: Obtener URL */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        4
                      </div>
                      Obtener URL de conexión
                    </CardTitle>
                    <CardDescription>Genera la cadena de conexión para Devspace</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          1
                        </div>
                        <div>
                          <p className="text-sm">Vuelve a <strong>"Database"</strong> → <strong>"Clusters"</strong></p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          2
                        </div>
                        <div>
                          <p className="text-sm">En tu cluster "Devspace", haz clic en <strong>"Connect"</strong></p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          3
                        </div>
                        <div>
                          <p className="text-sm">Selecciona <strong>"Connect your application"</strong></p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          4
                        </div>
                        <div>
                          <p className="text-sm">Copia la cadena de conexión que aparece</p>
                        </div>
                      </div>
                    </div>

                    <Card className="bg-red-50 border-red-200 dark:bg-red-950/30 dark:border-red-800">
                      <CardHeader>
                        <CardTitle className="text-base text-red-800 dark:text-red-200">⚠️ Personaliza tu URL:</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                          <li>• Reemplaza <code className="bg-red-100 dark:bg-red-900 px-1 rounded">&lt;username&gt;</code> con tu usuario (ej: <code>unity_user</code>)</li>
                          <li>• Reemplaza <code className="bg-red-100 dark:bg-red-900 px-1 rounded">&lt;password&gt;</code> con tu contraseña</li>
                          <li>• Cambia el nombre de la base de datos a <code className="bg-red-100 dark:bg-red-900 px-1 rounded">Unity</code> antes del <code>?</code></li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-secondary/50 border-secondary/50">
                      <CardHeader>
                        <CardTitle className="text-base">Ejemplo de URL final:</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="text-xs overflow-x-auto bg-background/50 p-3 rounded border">
{`mongodb+srv://<username>:<db_password>@devspace.yu6f9pg.mongodb.net/?retryWrites=true&w=majority&appName=Devspace`}
                        </pre>
                      </CardContent>
                    </Card>

                    {/* Estado final */}
                    <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30">
                      <CardHeader>
                        <CardTitle className="flex items-center text-green-700 dark:text-green-300">
                          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            ✓
                          </div>
                          ¡MongoDB Atlas Configurado! 🎉
                        </CardTitle>
                        <CardDescription className="text-green-600 dark:text-green-400">
                          Tu cluster "Devspace" con la base de datos "Unity" está listo
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          ¡Excelente! Tu cluster "Devspace" con la base de datos "Unity" está creado y tienes la URL de conexión. 
                          Ahora puedes proceder con la instalación de Devspace.
                        </p>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </section>

              {/* Troubleshooting */}
              <section className="space-y-6">
                <div className="space-y-2">
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                    Solución de Problemas
                  </h2>
                  <p className="text-muted-foreground text-pretty">
                    Problemas comunes y sus soluciones al configurar MongoDB Atlas.
                  </p>
                </div>

                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">❌ Error de autenticación</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Problema:</strong> La aplicación no puede conectarse a la base de datos.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Solución:</strong> Verifica que hayas reemplazado correctamente &lt;username&gt; y &lt;password&gt; en la URL de conexión con tus credenciales reales.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">🔒 Error de IP no autorizada</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Problema:</strong> MongoDB Atlas bloquea la conexión desde tu IP.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Solución:</strong> En MongoDB Atlas, ve a "Network Access" y agrega tu IP actual o permite acceso desde cualquier IP (0.0.0.0/0) para desarrollo.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">🗄️ Base de datos no encontrada</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Problema:</strong> La aplicación no encuentra la base de datos "Unity".
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Solución:</strong> Asegúrate de haber creado la base de datos "Unity" en MongoDB Atlas y que el nombre coincida exactamente en la URL de conexión.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Next Steps */}
              <section className="space-y-6">
                <div className="space-y-2">
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                    Próximos Pasos
                  </h2>
                  <p className="text-muted-foreground text-pretty">
                    Ahora que tienes tu URL de conexión lista, puedes continuar con la instalación.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">📋 Guarda tu URL</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Copia y guarda tu URL de conexión en un lugar seguro. La necesitarás durante la instalación de Devspace.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">🚀 Continúa con la instalación</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Con tu URL lista, ya puedes proceder a instalar y configurar Devspace en tu sistema.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>

            {/* Navigation Footer */}
            <div className="mt-12 pt-6 border-t border-border flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/docs">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver a Documentación
                </Link>
              </Button>
              <Button asChild>
                <Link href="/docs#installation">
                  Continuar con Instalación
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
