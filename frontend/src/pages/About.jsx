import { Link } from "react-router"
import { ArrowRight, Heart, Brain, Users } from "lucide-react"

// Datos de ejemplo para las profesionales
const professionals = [
  {
    id: "silvia",
    name: "Silvia Rodríguez",
    role: "Psicóloga Clínica",
    description:
      "Especialista en terapia cognitivo-conductual con más de 10 años de experiencia en el tratamiento de ansiedad y depresión.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "patricia",
    name: "Patricia López",
    role: "Psicóloga Infantil",
    description: "Experta en desarrollo infantil y adolescente, con enfoque en problemas de aprendizaje y conducta.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "lucia",
    name: "Lucía Martínez",
    role: "Logopeda",
    description:
      "Especializada en trastornos del habla y lenguaje, con amplia experiencia en intervención temprana y rehabilitación.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-milele-gradient py-20 text-black overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl font-serif text-black">
              <span className="script-font text-5xl md:text-6xl block mb-2 text-black">Quienes Somos</span>
            </h1>
            <p className="mb-8 text-lg md:text-xl text-black/90 max-w-3xl mx-auto">
              Somos un equipo de profesionales dedicados a mejorar la salud mental y el bienestar de nuestros pacientes.
              Con años de experiencia y formación especializada, ofrecemos un servicio personalizado y de calidad en
              nuestro centro multidisciplinar.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-milele-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl font-serif">
              Nuestro <span className="gradient-text">Equipo</span> Multidisciplinar
            </h2>
            <p className="text-lg text-gray-600">
              Cada miembro de nuestro equipo aporta su experiencia única para brindarte la mejor atención integral.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {professionals.map((professional) => (
              <div
                key={professional.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg milele-shadow hover:shadow-xl transition-all duration-300 border border-milele-green/10"
              >                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={professional.image || "/placeholder.svg"}
                    alt={professional.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold font-serif text-gray-900">{professional.name}</h3>
                  <p className="mb-3 text-sm font-medium text-milele-cyan-dark">{professional.role}</p>
                  <p className="mb-4 text-gray-600 text-sm leading-relaxed">{professional.description}</p>                  <Link
                    to={`/about/${professional.id}`}
                    className="inline-flex items-center text-sm font-medium text-milele-pink-dark hover:text-milele-pink transition-colors"
                  >
                    Conocer más <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl font-serif">
              Nuestros <span className="gradient-text">Valores</span>
            </h2>
            <p className="text-lg text-gray-600">
              Los principios que guían nuestro trabajo diario y definen nuestra filosofía de atención.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-milele-green-light to-white shadow-md milele-shadow border border-milele-green/20">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-milele-green to-milele-cyan text-white mx-auto">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold font-serif text-gray-900">Empatía</h3>
              <p className="text-gray-600">
                Entendemos y compartimos las emociones de nuestros pacientes, creando un ambiente de confianza y
                comprensión.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-milele-cyan-light to-white shadow-md milele-shadow border border-milele-cyan/20">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-milele-cyan to-milele-pink text-white mx-auto">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold font-serif text-gray-900">Profesionalidad</h3>
              <p className="text-gray-600">
                Mantenemos los más altos estándares de calidad en nuestros servicios, con formación continua y
                actualizada.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-milele-pink-light to-white shadow-md milele-shadow border border-milele-pink/20">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-milele-pink to-milele-green text-white mx-auto">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold font-serif text-gray-900">Colaboración</h3>
              <p className="text-gray-600">
                Trabajamos en equipo, tanto internamente como con nuestros pacientes, para lograr los mejores
                resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-milele-gradient py-16 text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif text-black">
              ¿Te gustaría <span className="script-font text-4xl md:text-5xl text-black">conocernos</span> mejor?
            </h2>
            <p className="mb-8 text-lg text-black/90">
              Agenda una consulta inicial para conocer nuestro enfoque y cómo podemos ayudarte.
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
