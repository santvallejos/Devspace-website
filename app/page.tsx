import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Rocket, Code, Zap, Users, Github, Twitter, Mail, Globe, FileText, Braces } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
              <Link className="transition-colors hover:text-primary" href="#contribute">
                Contribuir
              </Link>
              <Link className="transition-colors hover:text-primary" href="#contact">
                Contacto
              </Link>
            </nav>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="https://github.com/santvallejos/DevSpace-App" target="_blank">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden stars-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 z-[1]"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8 max-w-screen-xl">
          <div className="animate-float">
            <Image
              src="/Diseño_sin_título-removebg-preview.png"
              alt="Devspace Logo"
              width={120}
              height={120}
              className="rounded-2xl shadow-2xl mx-auto"
            />
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              Bienvenido a <span className="text-primary">Devspace</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-foreground/90 text-xl md:text-2xl text-pretty">
              Centraliza tus recursos, acelera tu flujo de trabajo y
              navega en unidad hacia el éxito.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="https://dev-space-app.vercel.app/" target="_blank">
                <Rocket className="mr-2 h-5 w-5" />
                Probar Demo
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-background/10 backdrop-blur border-white/20 text-white hover:bg-background/20"
              asChild
            >
              <Link href="/docs">
                Ver Documentación
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-twinkle opacity-80"></div>
        <div
          className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-twinkle opacity-70"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-primary rounded-full animate-twinkle opacity-60"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-twinkle opacity-90"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </section>

      {/* What is Devspace Section */}
      <section className="py-24 -mt-16 relative z-20">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                ¿Qué es <span className="text-primary">Devspace</span>?
              </h2>
              <p className="text-muted-foreground text-lg text-pretty">
                Devspace es una aplicación revolucionaria diseñada para desarrolladores que buscan optimizar su
                productividad. Centraliza todos tus recursos de desarrollo en un solo lugar, proporcionando un dashboard
                rápido e intuitivo que te permite navegar entre proyectos, herramientas y documentación sin perder el
                foco.
              </p>
              <p className="text-muted-foreground text-lg text-pretty">
                Con Devspace, tu espacio de trabajo se convierte en una nave espacial donde cada herramienta tiene su
                lugar y cada proyecto su órbita perfecta.
              </p>
            </div>
            <div className="relative flex justify-center">
              {/* Video demo de Devspace */}
              <div className="relative w-full max-w-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-4 backdrop-blur border border-primary/20 shadow-2xl">
                  <video
                    className="w-full h-auto rounded-xl shadow-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    style={{ pointerEvents: 'none' }}
                  >
                    <source src="/Diseño sin título.mp4" type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                  </video>
                  
                  {/* Overlay decorativo */}
                  <div className="absolute inset-0 rounded-xl pointer-events-none">
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="absolute top-4 right-4">
                    </div>
                  </div>
                </div>
                
                {/* Efectos de brillo alrededor del video */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="text-center space-y-4 mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
              Características Principales
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg text-pretty">
              Descubre las funcionalidades que hacen de Devspace la herramienta perfecta para tu flujo de desarrollo.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {/* Tipos de archivos que se pueden alamacenar en devspace */}
            <Card className="group h-full w-full max-w-sm border-primary/20 bg-gradient-to-br from-card/50 to-primary/5 backdrop-blur hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-balance">URLs y Enlaces</CardTitle>
                <CardDescription className="text-muted-foreground text-pretty">
                  Organiza y accede rápidamente a todos tus recursos web favoritos
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Documentación externa</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>APIs y servicios</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Herramientas online</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group h-full w-full max-w-sm border-primary/20 bg-gradient-to-br from-card/50 to-accent/5 backdrop-blur hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl text-balance">Documentación</CardTitle>
                <CardDescription className="text-muted-foreground text-pretty">
                  Centraliza toda tu documentación técnica en un solo lugar
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>README files</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Guías técnicas</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Notas de proyecto</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group h-full w-full max-w-sm border-primary/20 bg-gradient-to-br from-card/50 to-secondary/5 backdrop-blur hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Braces className="h-8 w-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-xl text-balance">Código</CardTitle>
                <CardDescription className="text-muted-foreground text-pretty">
                  Guarda y sincroniza snippets de código útiles
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Snippets reutilizables</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Funciones útiles</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Templates de código</span>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="demo" className="py-24 bg-muted/30">
        <div className="container mx-auto max-w-screen-xl px-4 text-center">
          <div className="space-y-4 mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">Cómo Empezar</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg text-pretty">
              Comienza tu viaje en Devspace en pocos pasos simples.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 mb-12 justify-items-center">
            <div className="space-y-4 max-w-sm">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold">Instala Devspace 💻</h3>
              <p className="text-muted-foreground">
                Descarga e instala Devspace en tu maquina desde nuestro repositorio de GitHub.
              </p>
            </div>
            <div className="space-y-4 max-w-sm">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold">Configura tu Espacio 🛠️</h3>
              <p className="text-muted-foreground">Conecta tu base de datos a la API de Devspace.</p>
            </div>
            <div className="space-y-4 max-w-sm">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold">¡Despega! 🚀</h3>
              <p className="text-muted-foreground">Comienza a desarrollar con mayor eficiencia y productividad.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/docs">
                <Rocket className="mr-2 h-5 w-5" />
                Ver Documentación Completa
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Status Section */}
      <section className="py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    🚀 En Desarrollo Activo
                  </Badge>
                </div>
                <CardTitle className="text-2xl md:text-3xl text-balance">Estado del Proyecto</CardTitle>
                <CardDescription className="text-lg max-w-2xl mx-auto text-pretty">
                  Devspace está actualmente en desarrollo activo. Estamos trabajando para traerte la mejor
                  experiencia de desarrollo posible. ¡Mantente al tanto de nuestras actualizaciones!
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/santvallejos/DevSpace-App" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Seguir en GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/docs#contribute">
                      Contribuir al Proyecto
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border bg-muted/30">
        <div className="container mx-auto max-w-screen-xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image src="/Diseño_sin_título-removebg-preview.png" alt="Devspace" width={24} height={24} className="rounded" />
                <span className="font-bold">Devspace</span>
              </div>
              <p className="text-sm text-muted-foreground text-pretty">
                La plataforma para desarrolladores que buscan optimizar su productividad.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Producto</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/docs" className="text-muted-foreground hover:text-primary transition-colors">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs#installation"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Instalación
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Comunidad</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/docs#contribute" className="text-muted-foreground hover:text-primary transition-colors">
                    Contribuir
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/santvallejos/DevSpace-App"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Reportar Bug
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Contacto</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/santvallejos"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:vallejossantiago1412@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Devspace. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
