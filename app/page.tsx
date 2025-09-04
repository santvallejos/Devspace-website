import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Rocket, Code, Zap, Users, Github, Twitter, Mail } from "lucide-react"
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
            <Link href="https://github.com/devspace" target="_blank">
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
              <Link href="#demo">
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
              {/* Video preview de Devspace */}
              <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 w-full max-w-md">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Sistema en línea</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-3/4 animate-pulse"></div>
                    </div>
                    <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full w-1/2 animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                    <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full w-5/6 animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Card>
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
            <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Centralización de Recursos</CardTitle>
                <CardDescription>
                  Todos tus proyectos, herramientas y documentación en un solo lugar accesible.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Dashboard Rápido</CardTitle>
                <CardDescription>
                  Interfaz optimizada para acceso instantáneo a tus herramientas más utilizadas.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Navegación en Unidad</CardTitle>
                <CardDescription>
                  Flujo de trabajo cohesivo que mantiene tu concentración y productividad.
                </CardDescription>
              </CardHeader>
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
              <h3 className="text-xl font-semibold">Instala Devspace</h3>
              <p className="text-muted-foreground">
                Descarga e instala la aplicación en tu sistema operativo preferido.
              </p>
            </div>
            <div className="space-y-4 max-w-sm">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold">Configura tu Espacio</h3>
              <p className="text-muted-foreground">Personaliza tu dashboard y conecta tus herramientas favoritas.</p>
            </div>
            <div className="space-y-4 max-w-sm">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold">¡Despega!</h3>
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
                  Devspace está actualmente en desarrollo activo. Estamos trabajando arduamente para traerte la mejor
                  experiencia de desarrollo posible. ¡Mantente al tanto de nuestras actualizaciones!
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/devspace" target="_blank">
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
                <Image src="/devspace-logo.png" alt="Devspace" width={24} height={24} className="rounded" />
                <span className="font-bold">Devspace</span>
              </div>
              <p className="text-sm text-muted-foreground text-pretty">
                La plataforma definitiva para desarrolladores que buscan optimizar su productividad.
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
                <li>
                  <Link href="/docs#guide" className="text-muted-foreground hover:text-primary transition-colors">
                    Guía de Uso
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Comunidad</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#contribute" className="text-muted-foreground hover:text-primary transition-colors">
                    Contribuir
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/devspace"
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
                  href="https://github.com/devspace"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://twitter.com/devspace"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:contact@devspace.dev"
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
