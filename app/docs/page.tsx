import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Search,
  Book,
  Download,
  Settings,
  Mail,
  Github,
  ChevronRight,
  Home,
  FileText,
  Wrench,
  Heart,
  Globe,
  Database
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DocsPage() {
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
              <Link className="transition-colors text-primary" href="/docs">
                Documentación
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com/santvallejos/DevSpace-App" target="_blank">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-screen-2xl flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 px-4">
        {/* Sidebar */}
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full py-6 pr-6 lg:py-8">
            <div className="space-y-4">
              <div>
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Comenzar</h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  <Link
                    href="#introduction"
                    className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Book className="mr-2 h-4 w-4" />
                    Introducción
                  </Link>
                  <Link
                    href="/docs/urlconnection"
                    className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Database className="mr-2 h-4 w-4" />
                    Configurar MongoDB Atlas
                  </Link>
                  <Link
                    href="#installation"
                    className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Instalación y Configuración
                  </Link>
                  <Link
                    href="#api-installation"
                    className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Instalación Solo API
                  </Link>
                </div>
              </div>
{/*               <div>
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Guías</h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  <Link
                    href="#configuration"
                    className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Configuración
                  </Link>
                  <Link
                    href="#guide"
                    className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-accent hover:text-accent-foreground"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Guía de Uso
                  </Link>
                </div>
              </div> */}
              <div>
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Comunidad</h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  <Link
                    href="#contribute"
                    className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Contribuir
                  </Link>
                  <Link
                    href="#contact"
                    className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contacto y Soporte
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0 max-w-4xl">
            {/* Breadcrumb */}
            <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                <Home className="h-4 w-4" />
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Documentación</span>
            </div>

            <div className="space-y-12">
              {/* Hero */}
              <div className="space-y-4 text-center md:text-left">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-balance">
                  Documentación de Devspace
                </h1>
                <p className="text-xl text-muted-foreground text-pretty max-w-3xl">
                  Todo lo que necesitas saber para comenzar con Devspace y optimizar tu flujo de desarrollo.
                </p>
              </div>

              {/* Introduction */}
              <section id="introduction" className="space-y-6">
                <div className="space-y-2">
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Introducción
                  </h2>
                  <p className="text-muted-foreground text-pretty">
                    Bienvenido a Devspace, la plataforma que revoluciona la forma en que los desarrolladores organizan y
                    acceden a sus herramientas de trabajo.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Wrench className="mr-2 h-5 w-5 text-primary" />
                      ¿Qué es Devspace?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-pretty">
                      Devspace es una aplicación de escritorio que centraliza todos tus recursos de desarrollo en un
                      dashboard unificado. Desde proyectos y repositorios hasta documentación y herramientas, todo está
                      al alcance de un clic.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <h4 className="font-semibold">Características principales:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Dashboard </li>
                          <li>• Navegación dentro de tu unidad</li>
                          <li>• Acceso rápido a tus recursos</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Beneficios:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Mayor productividad</li>
                          <li>• Flujo de trabajo optimizado</li>
                          <li>• Organización centralizada</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Prerequisites */}
              <section id="prerequisites" className="space-y-6">
                <div className="space-y-2">
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                    Prerrequisitos
                  </h2>
                  <p className="text-muted-foreground text-pretty">
                    Antes de instalar Devspace, asegúrate de tener estos elementos configurados.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Settings className="mr-2 h-5 w-5 text-primary" />
                        MongoDB Atlas
                      </CardTitle>
                      <CardDescription>Base de datos en la nube (Requerido)</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground text-pretty">
                        Devspace necesita una base de datos MongoDB Atlas para funcionar. 
                        Sigue nuestra guía detallada para crear tu cluster y obtener la URL de conexión.
                      </p>
                      <Button asChild className="w-full">
                        <Link href="/docs/urlconnection">
                          <Globe className="mr-2 h-4 w-4" />
                          Configurar MongoDB Atlas
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Download className="mr-2 h-5 w-5 text-primary" />
                        .NET 9.0
                      </CardTitle>
                      <CardDescription>Runtime de aplicación (Requerido)</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground text-pretty">
                        Devspace está construido con .NET 9.0. Asegúrate de tener instalada esta versión o superior.
                      </p>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="https://dotnet.microsoft.com/download/dotnet/9.0" target="_blank">
                          Descargar .NET 9.0
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30">
                  <CardHeader>
                    <CardTitle className="text-amber-800 dark:text-amber-200">📋 Lista de verificación</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                      <li>• ✅ Cuenta de MongoDB Atlas creada</li>
                      <li>• ✅ Cluster "Devspace" configurado</li>
                      <li>• ✅ Base de datos "Unity" creada</li>
                      <li>• ✅ URL de conexión obtenida</li>
                      <li>• ✅ .NET 9.0 instalado</li>
                    </ul>
                    <p className="text-xs text-amber-600 dark:text-amber-400 mt-3">
                      Una vez completados estos pasos, estarás listo para instalar Devspace.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Installation */}
              <section id="installation" className="space-y-6">
                <div>
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Instalación y Configuración</h2>
                  <p>Ahora que tienes los prerrequisitos listos, puedes proceder con la instalación de Devspace:</p>

                  <Card className="bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800 mt-4">
                    <CardContent className="pt-4">
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        ℹ️ Si aún no has configurado MongoDB Atlas, visita nuestra <Link href="/docs/urlconnection" className="font-semibold underline">guía de configuración</Link> antes de continuar.
                      </p>
                    </CardContent>
                  </Card>
                </div>


                {/*                 <div className="space-y-2">
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Instalación</h2>
                  <p className="text-muted-foreground text-pretty">
                    Instala Devspace en tu sistema operativo
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3 justify-items-center">
                  <Card className="w-full max-w-sm">
                    <CardHeader className="text-center">
                      <CardTitle className="text-lg">Windows</CardTitle>
                      <CardDescription>Windows 10/11 (64-bit)</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button className="w-full" disabled>
                        <Download className="mr-2 h-4 w-4" />
                        Descargar .exe
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2">Próximamente</p>
                    </CardContent>
                  </Card>
                  <Card className="w-full max-w-sm">
                    <CardHeader className="text-center">
                      <CardTitle className="text-lg">macOS</CardTitle>
                      <CardDescription>macOS 10.15+ (Intel/Apple Silicon)</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button className="w-full" disabled>
                        <Download className="mr-2 h-4 w-4" />
                        Descargar .dmg
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2">Próximamente</p>
                    </CardContent>
                  </Card>
                  <Card className="w-full max-w-sm">
                    <CardHeader className="text-center">
                      <CardTitle className="text-lg">Linux</CardTitle>
                      <CardDescription>Ubuntu, Debian, Fedora, Arch</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button className="w-full" disabled>
                        <Download className="mr-2 h-4 w-4" />
                        Descargar .AppImage
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2">Próximamente</p>
                    </CardContent>
                  </Card>
                </div> */}

                {/* Instalacion de Devspace */}
                <div className="space-y-6">
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Instalación y Configuración</h2>
                  
                  <div className="space-y-8">
                    {/* Paso 1: Clonar repositorio */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            1
                          </div>
                          Clonar el repositorio
                        </CardTitle>
                        <CardDescription>Descarga el código fuente de Devspace</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Clona el repositorio oficial de Devspace desde GitHub:
                        </p>
                        <Card className="bg-secondary/50 border-secondary/50">
                          <CardContent className="pt-4">
                            <pre className="text-xs sm:text-sm overflow-x-auto whitespace-nowrap">
                              <code>git clone https://github.com/santvallejos/DevSpace-App.git</code>
                            </pre>
                          </CardContent>
                        </Card>
                        <Button variant="outline" asChild>
                          <Link href="https://github.com/santvallejos/DevSpace-App" target="_blank">
                            Ver en GitHub
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Paso 2: Abrir proyecto */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            2
                          </div>
                          Abrir el proyecto en tu IDE
                        </CardTitle>
                        <CardDescription>Abre el proyecto en tu editor de código favorito</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Abre la carpeta del proyecto clonado en tu IDE preferido (Visual Studio Code, Visual Studio, etc.).
                        </p>
                      </CardContent>
                    </Card>

                    {/* Paso 3: Instalar dependencias root (opcional) */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            3
                          </div>
                          Instalar dependencias del root (Opcional)
                        </CardTitle>
                        <CardDescription>Instala las dependencias principales del proyecto</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          En la carpeta raíz del proyecto, instala las dependencias:
                        </p>
                        <Card className="bg-secondary/50 border-secondary/50">
                          <CardContent className="pt-4">
                            <code className="text-xs sm:text-sm break-all">npm install</code>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>

                    {/* Paso 4: Instalar dependencias del cliente */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            4
                          </div>
                          Instalar dependencias del cliente
                        </CardTitle>
                        <CardDescription>Configura la aplicación cliente de Devspace</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Navega al directorio del cliente e instala sus dependencias:
                        </p>
                        <Card className="bg-secondary/50 border-secondary/50">
                          <CardContent className="pt-4 space-y-2">
                            <div><code className="text-xs sm:text-sm break-all">cd client</code></div>
                            <div><code className="text-xs sm:text-sm break-all">npm install</code></div>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>

                    {/* Paso 5: Configurar API */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            5
                          </div>
                          Configurar la API
                        </CardTitle>
                        <CardDescription>Navega a la carpeta de la API y configura los archivos de conexión</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Navega al directorio de la API:
                        </p>
                        <Card className="bg-secondary/50 border-secondary/50">
                          <CardContent className="pt-4 space-y-2">
                            <div><code className="text-xs sm:text-sm break-all">cd ../</code></div>
                            <div><code className="text-xs sm:text-sm break-all">cd api</code></div>
                          </CardContent>
                        </Card>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Crear archivo: 📁 appsettings.json</h4>
                            <Card className="bg-secondary/50 border-secondary/50">
                              <CardContent className="pt-4">
                                <pre className="text-xs overflow-x-auto">
{`{
    "Logging": {
        "LogLevel": {
            "Default": "Information",
            "Microsoft.AspNetCore": "Warning"
        }
    },
    "AllowedHosts": "*",
    "MongoDB": {
        "ConnectionString": "mongodb+srv://<username>:<db_password>@devspace.yu6f9pg.mongodb.net/?retryWrites=true&w=majority&appName=Devspace",
        "DatabaseName": "Unity"
    },
    "ConnectionStrings": {
        "DefaultConnection": "mongodb://localhost:27017/DevSpace",
        "Database": "Unity"
    }
}`}
                                </pre>
                              </CardContent>
                            </Card>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Crear archivo: 📁 appsettings.Development.json</h4>
                            <Card className="bg-secondary/50 border-secondary/50">
                              <CardContent className="pt-4">
                                <pre className="text-xs overflow-x-auto">
{`{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
    "MongoDB": {
        "ConnectionString": "mongodb+srv://<username>:<db_password>@devspace.yu6f9pg.mongodb.net/?retryWrites=true&w=majority&appName=Devspace",
        "DatabaseName": "Unity"
    } 
}`}
                                </pre>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        <Card className="bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800">
                          <CardContent className="pt-4">
                            <p className="text-xs text-amber-700 dark:text-amber-300">
                              🔧 Reemplaza &lt;username&gt; y &lt;db_password&gt; con tus credenciales de MongoDB Atlas. Si no tienes estos datos, consulta nuestra <Link href="/docs/urlconnection" className="font-semibold underline">guía de configuración de MongoDB Atlas</Link>.
                            </p>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>

                    {/* Paso 6: Restaurar dependencias .NET */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            6
                          </div>
                          Restaurar dependencias .NET
                        </CardTitle>
                        <CardDescription>Descarga las dependencias necesarias de .NET</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Restaura las dependencias de .NET en el directorio de la API:
                        </p>
                        <Card className="bg-secondary/50 border-secondary/50">
                          <CardContent className="pt-4">
                            <code className="text-xs sm:text-sm break-all">dotnet restore</code>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>

                    {/* Paso 7: Ejecutar la API */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            7
                          </div>
                          Ejecutar la API
                        </CardTitle>
                        <CardDescription>Inicia el servidor de la API de Devspace</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Ejecuta la API para iniciar el servidor:
                        </p>
                        <Card className="bg-secondary/50 border-secondary/50">
                          <CardContent className="pt-4">
                            <code className="text-xs sm:text-sm break-all">dotnet run</code>
                          </CardContent>
                        </Card>
                        <p className="text-sm text-muted-foreground">
                          La API se iniciará y estará disponible en el puerto configurado (generalmente http://localhost:5250).
                        </p>
                      </CardContent>
                    </Card>

                    {/* Estado final */}
                    <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30">
                      <CardHeader>
                        <CardTitle className="flex items-center text-green-700 dark:text-green-300">
                          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            ✓
                          </div>
                          ¡Instalación Completada! 🎉
                        </CardTitle>
                        <CardDescription className="text-green-600 dark:text-green-400">
                          Devspace está listo para usar
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-green-700 dark:text-green-300">
                          ¡Excelente! Has completado exitosamente la instalación de Devspace. Ahora puedes proceder con la configuración y comenzar a usar la aplicación.
                        </p>
                        
                        <div className="border-t border-green-200 dark:border-green-800 pt-4">
                          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">🌐 Opciones para usar Devspace</h4>
                          
                          <div className="space-y-3">
                            {/* Opción 1: Demo Online */}
                            <div>
                              <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                                <strong>Opción 1:</strong> Usa nuestra demo online del frontend
                              </p>
                              <Button asChild className="w-full bg-green-600 hover:bg-green-700 mb-2">
                                <Link href="https://dev-space-app.vercel.app/" target="_blank">
                                  <Globe className="mr-2 h-4 w-4" />
                                  Abrir Demo de Devspace
                                </Link>
                              </Button>
                            </div>
                            
                            {/* Opción 2: Frontend Local */}
                            <div className="border-t border-green-200 dark:border-green-800 pt-3">
                              <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                                <strong>Opción 2:</strong> Ejecuta el frontend localmente
                              </p>
                              <div className="space-y-2">
                                <div>
                                  <p className="text-xs text-green-600 dark:text-green-400 mb-1">Desde la raíz del proyecto:</p>
                                  <Card className="bg-green-100 dark:bg-green-900/50 border-green-300 dark:border-green-700">
                                    <CardContent className="pt-2 pb-2">
                                      <code className="text-xs break-all">npm run dev:client</code>
                                    </CardContent>
                                  </Card>
                                </div>
                                <div>
                                  <p className="text-xs text-green-600 dark:text-green-400 mb-1">O desde la carpeta client:</p>
                                  <Card className="bg-green-100 dark:bg-green-900/50 border-green-300 dark:border-green-700">
                                    <CardContent className="pt-2 pb-2">
                                      <code className="text-xs break-all">cd client && npm run dev</code>
                                    </CardContent>
                                  </Card>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-xs text-green-600 dark:text-green-400 mt-3">
                            💡 Ambas opciones se conectarán a tu API local en el puerto 5250.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/*                 <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30">
                  <CardHeader>
                    <CardTitle className="text-amber-800 dark:text-amber-200">🚧 Estado de Desarrollo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-700 dark:text-amber-300 text-pretty">
                      Devspace está actualmente en desarrollo. Las descargas estarán disponibles cuando lancemos la
                      primera versión beta. ¡Mantente al tanto en nuestro GitHub!
                    </p>
                  </CardContent>
                </Card> */}
              </section>

              {/* Instalación Solo API */}
              <section id="api-installation" className="space-y-6">
                <div className="space-y-2">
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                    Instalación Solo API
                  </h2>
                  <p className="text-muted-foreground text-pretty">
                    Si solo necesitas ejecutar la API de Devspace, sigue estos pasos simplificados.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Paso 1: Clonar repositorio */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          1
                        </div>
                        Clonar el repositorio
                      </CardTitle>
                      <CardDescription>Descarga el código fuente de Devspace</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Clona el repositorio oficial de Devspace desde GitHub:
                      </p>
                      <Card className="bg-secondary/50 border-secondary/50">
                        <CardContent className="pt-4">
                          <pre className="text-xs sm:text-sm overflow-x-auto whitespace-nowrap">
                            <code>git clone https://github.com/santvallejos/DevSpace-App.git</code>
                          </pre>
                        </CardContent>
                      </Card>
                      <Button variant="outline" asChild>
                        <Link href="https://github.com/santvallejos/DevSpace-App" target="_blank">
                          Ver en GitHub
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Paso 2: Navegar a la carpeta API */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          2
                        </div>
                        Navegar a la carpeta de la API
                      </CardTitle>
                      <CardDescription>Accede directamente al directorio de la API</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Navega al directorio de la API dentro del proyecto clonado:
                      </p>
                      <Card className="bg-secondary/50 border-secondary/50">
                        <CardContent className="pt-4 space-y-2">
                          <div><code className="text-xs sm:text-sm break-all">cd DevSpace-App</code></div>
                          <div><code className="text-xs sm:text-sm break-all">cd api</code></div>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>

                  {/* Paso 3: Crear archivos de configuración */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          3
                        </div>
                        Crear archivos de configuración
                      </CardTitle>
                      <CardDescription>Configura la conexión a MongoDB Atlas</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Crea los archivos de configuración necesarios para la API:
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Crear archivo: 📁 appsettings.json</h4>
                          <Card className="bg-secondary/50 border-secondary/50">
                            <CardContent className="pt-4">
                              <pre className="text-xs overflow-x-auto">
{`{
    "Logging": {
        "LogLevel": {
            "Default": "Information",
            "Microsoft.AspNetCore": "Warning"
        }
    },
    "AllowedHosts": "*",
    "MongoDB": {
        "ConnectionString": "mongodb+srv://<username>:<db_password>@devspace.yu6f9pg.mongodb.net/?retryWrites=true&w=majority&appName=Devspace",
        "DatabaseName": "Unity"
    },
    "ConnectionStrings": {
        "DefaultConnection": "mongodb://localhost:27017/DevSpace",
        "Database": "Unity"
    }
}`}
                              </pre>
                            </CardContent>
                          </Card>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Crear archivo: 📁 appsettings.Development.json</h4>
                          <Card className="bg-secondary/50 border-secondary/50">
                            <CardContent className="pt-4">
                              <pre className="text-xs overflow-x-auto">
{`{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
    "MongoDB": {
        "ConnectionString": "mongodb+srv://<username>:<db_password>@devspace.yu6f9pg.mongodb.net/?retryWrites=true&w=majority&appName=Devspace",
        "DatabaseName": "Unity"
    } 
}`}
                              </pre>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <Card className="bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800">
                        <CardContent className="pt-4">
                          <p className="text-xs text-amber-700 dark:text-amber-300">
                            🔧 Asegúrate de reemplazar &lt;username&gt; y &lt;db_password&gt; con tus credenciales reales de MongoDB Atlas. Si necesitas ayuda, consulta nuestra <Link href="/docs/urlconnection" className="font-semibold underline">guía de configuración</Link>.
                          </p>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>

                  {/* Paso 4: Restaurar dependencias .NET */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          4
                        </div>
                        Restaurar dependencias .NET
                      </CardTitle>
                      <CardDescription>Descarga las dependencias necesarias de .NET</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Restaura las dependencias de .NET para la API:
                      </p>
                      <Card className="bg-secondary/50 border-secondary/50">
                        <CardContent className="pt-4">
                          <code className="text-xs sm:text-sm break-all">dotnet restore</code>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>

                  {/* Paso 5: Ejecutar la API */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          5
                        </div>
                        Ejecutar la API
                      </CardTitle>
                      <CardDescription>Inicia el servidor de la API de Devspace</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Ejecuta la API para iniciar el servidor:
                      </p>
                      <Card className="bg-secondary/50 border-secondary/50">
                        <CardContent className="pt-4">
                          <code className="text-xs sm:text-sm break-all">dotnet run</code>
                        </CardContent>
                      </Card>
                      <p className="text-sm text-muted-foreground">
                        La API se iniciará y estará disponible en el puerto configurado (generalmente http://localhost:5250).
                      </p>
                    </CardContent>
                  </Card>

                  {/* Estado final */}
                  <Card className="border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/30">
                    <CardHeader>
                      <CardTitle className="flex items-center text-purple-700 dark:text-purple-300">
                        <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          ✓
                        </div>
                        ¡API Lista! 🚀
                      </CardTitle>
                      <CardDescription className="text-purple-600 dark:text-purple-400">
                        La API de Devspace está ejecutándose
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        ¡Perfecto! La API de Devspace está ejecutándose correctamente. Ya puedes hacer peticiones a la API o conectar una aplicación cliente.
                      </p>
                      
                      <div className="border-t border-purple-200 dark:border-purple-800 pt-4">
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🌐 Accede a la Demo del Frontend</h4>
                        <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                          Con tu API ejecutándose en <code className="bg-purple-100 dark:bg-purple-900 px-1 rounded">http://localhost:5250/</code>, 
                          puedes usar nuestra demo online del frontend de Devspace:
                        </p>
                        <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                          <Link href="https://dev-space-app.vercel.app/" target="_blank">
                            <Globe className="mr-2 h-4 w-4" />
                            Abrir Demo de Devspace
                          </Link>
                        </Button>
                        <p className="text-xs text-purple-600 dark:text-purple-400 mt-2">
                          💡 La demo se conectará automáticamente a tu API local una vez que esté funcionando en el puerto 5250.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Usage Guide */}
              {/* <section id="guide" className="space-y-6">
                <div className="space-y-2">
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Guía de Uso</h2>
                  <p className="text-muted-foreground text-pretty">
                    Aprende a usar Devspace para maximizar tu productividad como desarrollador.
                  </p>
                </div>

                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Primer Inicio</CardTitle>
                      <CardDescription>Configuración inicial de tu espacio de trabajo</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                            1
                          </div>
                          <div>
                            <h4 className="font-semibold">Bienvenida</h4>
                            <p className="text-sm text-muted-foreground">
                              Al abrir Devspace por primera vez, verás el asistente de configuración.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                            2
                          </div>
                          <div>
                            <h4 className="font-semibold">Conectar Repositorios</h4>
                            <p className="text-sm text-muted-foreground">
                              Conecta tus cuentas de GitHub, GitLab o Bitbucket para importar proyectos.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                            3
                          </div>
                          <div>
                            <h4 className="font-semibold">Personalizar Dashboard</h4>
                            <p className="text-sm text-muted-foreground">
                              Organiza tu dashboard con los widgets y herramientas que más uses.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Navegación Principal</CardTitle>
                      <CardDescription>Conoce la interfaz de Devspace</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <h4 className="font-semibold">Panel Lateral</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Dashboard principal</li>
                            <li>• Lista de proyectos</li>
                            <li>• Herramientas favoritas</li>
                            <li>• Configuración</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold">Área Principal</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Vista de proyecto activo</li>
                            <li>• Terminal integrada</li>
                            <li>• Navegador de archivos</li>
                            <li>• Widgets personalizables</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section> */}

              {/* Contribute */}
              <section id="contribute" className="space-y-6">
                <div className="space-y-2">
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Contribuir</h2>
                  <p className="text-muted-foreground text-pretty">
                    Ayuda a hacer de Devspace una herramienta aún mejor para la comunidad de desarrolladores.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 justify-items-center max-w-4xl mx-auto">
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Github className="mr-2 h-5 w-5" />
                        Desarrollo
                      </CardTitle>
                      <CardDescription>Contribuye con código y mejoras</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2 text-sm">
                        <li>• Reporta bugs y problemas</li>
                        <li>• Sugiere nuevas características</li>
                        <li>• Envía pull requests</li>
                        <li>• Mejora la documentación</li>
                      </ul>
                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <Link href="https://github.com/devspace" target="_blank">
                          Ver en GitHub
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Heart className="mr-2 h-5 w-5 text-red-500" />
                        Apoyo
                      </CardTitle>
                      <CardDescription>Apoya el proyecto de otras formas</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2 text-sm">
                        <li>• Comparte el proyecto</li>
                        <li>• Escribe reseñas</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Contact */}
              <section id="contact" className="space-y-6">
                <div className="space-y-2">
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
                    Contacto y Soporte
                  </h2>
                  <p className="text-muted-foreground text-pretty">
                    ¿Necesitas ayuda o tienes preguntas? Estamos aquí para ayudarte.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 justify-items-center max-w-4xl mx-auto">
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle>Soporte Técnico</CardTitle>
                      <CardDescription>Para problemas técnicos y bugs</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Si encuentras un problema o necesitas ayuda técnica, la mejor forma es crear un issue en nuestro
                        repositorio de GitHub.
                      </p>
                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <Link href="https://github.com/santvallejos/DevSpace-App/issues" target="_blank">
                          <Github className="mr-2 h-4 w-4" />
                          Crear Issue
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle>Contacto General</CardTitle>
                      <CardDescription>Para consultas generales y colaboraciones</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Para consultas generales, propuestas de colaboración o cualquier otra pregunta, puedes
                        contactarnos por email.
                      </p>
                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <Link href="mailto:vallejossantiago1412@gmail.com">
                          <Mail className="mr-2 h-4 w-4" />
                          Enviar Email
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="hidden text-sm xl:block">
            <div className="sticky top-16 -mt-10 pt-4">
              <div className="space-y-2">
                <p className="font-medium">En esta página</p>
                <ul className="m-0 list-none space-y-2">
                  <li className="mt-0 pt-2">
                    <Link
                      href="#introduction"
                      className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                    >
                      Introducción
                    </Link>
                  </li>
                  <li className="mt-0 pt-2">
                    <Link
                      href="#prerequisites"
                      className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                    >
                      Prerrequisitos
                    </Link>
                  </li>
                  <li className="mt-0 pt-2">
                    <Link
                      href="#installation"
                      className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                    >
                      Instalación y Configuración
                    </Link>
                  </li>
                  <li className="mt-0 pt-2">
                    <Link
                      href="#api-installation"
                      className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                    >
                      Instalación Solo API
                    </Link>
                  </li>
{/*                   <li className="mt-0 pt-2">
                    <Link
                      href="#guide"
                      className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                    >
                      Guía de Uso
                    </Link>
                  </li>
                  <li className="mt-0 pt-2">
                    <Link
                      href="#configuration"
                      className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                    >
                      Configuración
                    </Link>
                  </li> */}
                  <li className="mt-0 pt-2">
                    <Link
                      href="#contribute"
                      className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                    >
                      Contribuir
                    </Link>
                  </li>
                  <li className="mt-0 pt-2">
                    <Link
                      href="#contact"
                      className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                    >
                      Contacto y Soporte
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
