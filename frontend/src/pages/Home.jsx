import { Link } from "react-router"
import { ArrowRight, Heart, Brain, Users, Star, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Banner */}
      <section className="relative bg-milele-gradient py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">            <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl font-serif">
              <span className="script-font text-5xl md:text-6xl block mb-2">Milele</span>
              Cuidamos de tu bienestar integral
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Nuestro equipo multidisciplinar está aquí para acompañarte en tu camino hacia el bienestar emocional,
              físico y mental.
            </p>              <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-medium text-gray-800 shadow-lg transition-all hover:shadow-xl hover:scale-105 milele-shadow"
            >
              Pide tu cita <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
            <div className="relative h-64 md:h-96">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Milele Centro Multidisciplinar"
                className="rounded-2xl object-cover shadow-2xl w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metodología de trabajo */}
      <section className="py-16 bg-milele-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl font-serif">
              Nuestra <span className="gradient-text">Metodología</span> de Trabajo
            </h2>
            <p className="mb-12 text-lg text-gray-600">
              Trabajamos con un enfoque personalizado y multidisciplinar, adaptando nuestras técnicas a las necesidades
              específicas de cada persona para lograr resultados efectivos y duraderos.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-lg milele-shadow hover:shadow-xl transition-all duration-300 border border-milele-green/10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-milele-green to-milele-cyan text-white">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold font-serif">Evaluación Integral</h3>
              <p className="text-gray-600">
                Realizamos una evaluación completa multidisciplinar para entender tus necesidades y establecer objetivos
                claros.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg milele-shadow hover:shadow-xl transition-all duration-300 border border-milele-cyan/10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-milele-cyan to-milele-pink text-white">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold font-serif">Tratamiento Personalizado</h3>
              <p className="text-gray-600">
                Diseñamos un plan de tratamiento adaptado a tus necesidades específicas con nuestro equipo
                multidisciplinar.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg milele-shadow hover:shadow-xl transition-all duration-300 border border-milele-pink/10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-milele-pink to-milele-green text-white">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold font-serif">Seguimiento Continuo</h3>
              <p className="text-gray-600">
                Realizamos un seguimiento regular para evaluar tu progreso y ajustar el tratamiento según sea necesario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué ofrecemos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl font-serif">
            Qué <span className="gradient-text">Ofrecemos</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl bg-gradient-to-br from-milele-green-light to-white p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-milele-green/20">
              <div className="mb-4 flex items-center">
                <Sparkles className="h-6 w-6 text-milele-green-dark mr-2" />
                <h3 className="text-xl font-semibold font-serif">Terapia Individual</h3>
              </div>
              <p className="text-gray-600">
                Sesiones personalizadas para abordar problemas específicos como ansiedad, depresión, estrés y más.
              </p>
            </div>

            <div className="group rounded-2xl bg-gradient-to-br from-milele-cyan-light to-white p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-milele-cyan/20">
              <div className="mb-4 flex items-center">
                <Heart className="h-6 w-6 text-milele-cyan-dark mr-2" />
                <h3 className="text-xl font-semibold font-serif">Terapia de Pareja</h3>
              </div>
              <p className="text-gray-600">
                Ayudamos a mejorar la comunicación y resolver conflictos para fortalecer la relación.
              </p>
            </div>

            <div className="group rounded-2xl bg-gradient-to-br from-milele-pink-light to-white p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-milele-pink/20">
              <div className="mb-4 flex items-center">
                <Users className="h-6 w-6 text-milele-pink-dark mr-2" />
                <h3 className="text-xl font-semibold font-serif">Terapia Familiar</h3>
              </div>
              <p className="text-gray-600">
                Trabajamos con toda la familia para mejorar la dinámica y resolver conflictos.
              </p>
            </div>

            <div className="group rounded-2xl bg-gradient-to-br from-milele-green-light to-white p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-milele-green/20">
              <div className="mb-4 flex items-center">
                <Brain className="h-6 w-6 text-milele-green-dark mr-2" />
                <h3 className="text-xl font-semibold font-serif">Logopedia</h3>
              </div>
              <p className="text-gray-600">Tratamiento de trastornos del habla y del lenguaje en niños y adultos.</p>
            </div>

            <div className="group rounded-2xl bg-gradient-to-br from-milele-cyan-light to-white p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-milele-cyan/20">
              <div className="mb-4 flex items-center">
                <Sparkles className="h-6 w-6 text-milele-cyan-dark mr-2" />
                <h3 className="text-xl font-semibold font-serif">Evaluación Psicológica</h3>
              </div>
              <p className="text-gray-600">
                Evaluaciones completas para diagnosticar trastornos y planificar tratamientos efectivos.
              </p>
            </div>

            <div className="group rounded-2xl bg-gradient-to-br from-milele-pink-light to-white p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-milele-pink/20">
              <div className="mb-4 flex items-center">
                <Users className="h-6 w-6 text-milele-pink-dark mr-2" />
                <h3 className="text-xl font-semibold font-serif">Talleres y Grupos</h3>
              </div>
              <p className="text-gray-600">
                Sesiones grupales para desarrollar habilidades específicas y compartir experiencias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 bg-milele-gradient-soft">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl font-serif">
            Por Qué <span className="gradient-text">Elegirnos</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex items-start p-6 rounded-2xl bg-white shadow-md milele-shadow">
              <div className="mr-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-milele-green to-milele-cyan text-white">
                <Star className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold font-serif">Equipo Multidisciplinar</h3>
                <p className="text-gray-600">
                  Nuestro equipo está formado por profesionales de diferentes disciplinas con amplia experiencia y
                  formación especializada.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 rounded-2xl bg-white shadow-md milele-shadow">
              <div className="mr-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-milele-cyan to-milele-pink text-white">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold font-serif">Enfoque Personalizado</h3>
                <p className="text-gray-600">
                  Adaptamos nuestras técnicas a las necesidades específicas de cada persona con un abordaje integral.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 rounded-2xl bg-white shadow-md milele-shadow">
              <div className="mr-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-milele-pink to-milele-green text-white">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold font-serif">Instalaciones Confortables</h3>
                <p className="text-gray-600">
                  Espacios diseñados para crear un ambiente acogedor y confidencial que favorezca el bienestar.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 rounded-2xl bg-white shadow-md milele-shadow">
              <div className="mr-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-milele-green to-milele-cyan text-white">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold font-serif">Horarios Flexibles</h3>
                <p className="text-gray-600">
                  Ofrecemos horarios adaptados a tus necesidades, incluyendo tardes y fines de semana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contáctenos */}
      <section className="bg-milele-gradient py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">
              ¿Listo para dar el <span className="script-font text-4xl md:text-5xl">primer paso</span>?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Contáctanos hoy mismo para programar tu primera consulta o resolver cualquier duda que tengas.
            </p>            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-medium text-gray-800 shadow-lg transition-all hover:shadow-xl hover:scale-105 milele-shadow"
            >
              Contactar ahora <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
