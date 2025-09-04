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
              <Image src="/devspace-logo.png" alt="Devspace" width={32} height={32} className="rounded" />
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
            <div className="hidden md:block">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar en la documentación..." className="pl-8 w-[300px] lg:w-[400px]" />
              </div>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com/devspace" target="_blank">
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
                    href="#installation"
                    className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Instalación
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Guías</h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  <Link
                    href="#guide"
                    className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-accent hover:text-accent-foreground"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Guía de Uso
                  </Link>
                  <Link
                    href="#configuration"
                    className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Configuración
                  </Link>
                </div>
              </div>
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
                          <li>• Dashboard personalizable</li>
                          <li>• Integración con Git</li>
                          <li>• Gestión de proyectos</li>
                          <li>• Acceso rápido a herramientas</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Beneficios:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Mayor productividad</li>
                          <li>• Flujo de trabajo optimizado</li>
                          <li>• Menos cambios de contexto</li>
                          <li>• Organización centralizada</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Installation */}
              <section id="installation" className="space-y-6">
                <div className="space-y-2">
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Instalación</h2>
                  <p className="text-muted-foreground text-pretty">
                    Instala Devspace en tu sistema operativo preferido siguiendo estos pasos.
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
                </div>

                <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30">
                  <CardHeader>
                    <CardTitle className="text-amber-800 dark:text-amber-200">🚧 Estado de Desarrollo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-700 dark:text-amber-300 text-pretty">
                      Devspace está actualmente en desarrollo. Las descargas estarán disponibles cuando lancemos la
                      primera versión beta. ¡Mantente al tanto en nuestro GitHub!
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Usage Guide */}
              <section id="guide" className="space-y-6">
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
              </section>

              {/* Configuration */}
              <section id="configuration" className="space-y-6">
                <div className="space-y-2">
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Configuración</h2>
                  <p className="text-muted-foreground text-pretty">
                    Personaliza Devspace según tus necesidades y preferencias de desarrollo.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Configuración General</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold">Tema y Apariencia</h4>
                        <p className="text-sm text-muted-foreground">
                          Personaliza el tema, colores y fuentes de la interfaz.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Atajos de Teclado</h4>
                        <p className="text-sm text-muted-foreground">
                          Configura atajos personalizados para acciones frecuentes.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Notificaciones</h4>
                        <p className="text-sm text-muted-foreground">
                          Controla qué notificaciones quieres recibir y cuándo.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Integraciones</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <h4 className="font-semibold">Control de Versiones</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• GitHub</li>
                            <li>• GitLab</li>
                            <li>• Bitbucket</li>
                            <li>• Git local</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold">Herramientas</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• VS Code</li>
                            <li>• Terminal</li>
                            <li>• Docker</li>
                            <li>• Navegadores</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

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
                        <li>• Dona para el desarrollo</li>
                        <li>• Únete a la comunidad</li>
                      </ul>
                      <Button variant="outline" className="w-full bg-transparent" disabled>
                        Donar
                        <Heart className="ml-2 h-4 w-4" />
                      </Button>
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
                        <Link href="https://github.com/devspace/issues" target="_blank">
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
                        <Link href="mailto:contact@devspace.dev">
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
                      href="#installation"
                      className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                    >
                      Instalación
                    </Link>
                  </li>
                  <li className="mt-0 pt-2">
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
                  </li>
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
