import { Link, useParams, Navigate } from "react-router"
import { ArrowLeft, Award, Heart, BookOpen, Smile } from "lucide-react"

// Datos de ejemplo para las profesionales
const professionals = {
  silvia: {
    name: "Silvia Rodríguez",
    role: "Psicóloga Clínica",
    license: "P-12345",
    image: "/placeholder.svg?height=600&width=600",
    specialties: ["Terapia Cognitivo-Conductual", "Ansiedad", "Depresión", "Estrés"],
    approach:
      "Mi enfoque se basa en la terapia cognitivo-conductual, ayudando a las personas a identificar y cambiar patrones de pensamiento negativos que afectan su bienestar emocional.",
    why: "Decidí ser psicóloga porque siempre me ha fascinado entender cómo funciona la mente humana y cómo podemos ayudar a las personas a superar sus dificultades emocionales.",
    passion:
      "Lo que más me apasiona de mi trabajo es ver cómo las personas logran superar sus problemas y recuperan su bienestar emocional, mejorando significativamente su calidad de vida.",
    hobbies:
      "Fuera del trabajo, disfruto de la lectura, el senderismo y pasar tiempo con mi familia y amigos. También practico yoga y meditación regularmente.",
  },
  patricia: {
    name: "Patricia López",
    role: "Psicóloga Infantil",
    license: "P-23456",
    image: "/placeholder.svg?height=600&width=600",
    specialties: ["Psicología Infantil", "Problemas de Aprendizaje", "TDAH", "Conducta"],
    approach:
      "Mi enfoque combina técnicas de juego terapéutico con intervenciones basadas en evidencia, adaptadas a las necesidades específicas de cada niño y su familia.",
    why: "Elegí especializarme en psicología infantil porque creo firmemente que intervenir temprano puede marcar una gran diferencia en el desarrollo y bienestar futuro de los niños.",
    passion:
      "Me apasiona ver cómo los niños desarrollan nuevas habilidades y superan sus dificultades, y cómo esto impacta positivamente en toda la familia.",
    hobbies:
      "En mi tiempo libre disfruto de la pintura, los viajes y el voluntariado con organizaciones que apoyan a niños en situación de vulnerabilidad.",
  },
  lucia: {
    name: "Lucía Martínez",
    role: "Logopeda",
    license: "L-34567",
    image: "/placeholder.svg?height=600&width=600",
    specialties: ["Trastornos del Habla", "Dislexia", "Afasia", "Intervención Temprana"],
    approach:
      "Mi enfoque es integral y personalizado, combinando técnicas tradicionales con métodos innovadores para abordar cada trastorno del habla y lenguaje de manera efectiva.",
    why: "Decidí ser logopeda porque me fascina el poder de la comunicación y cómo esta habilidad fundamental afecta a todos los aspectos de la vida de una persona.",
    passion:
      "Lo que más me apasiona es ver cómo mis pacientes logran comunicarse mejor y cómo esto mejora su confianza, sus relaciones y su calidad de vida en general.",
    hobbies:
      "Fuera del trabajo, disfruto de la música, toco el piano y participo en un coro local. También me gusta la jardinería y la cocina.",
  },
}

export default function Professional() {
  const { id } = useParams()
  const professional = professionals[id]

  if (!professional) {
    return <Navigate to="/about" replace />
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-milele-gradient py-16 text-black overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="container mx-auto px-4 relative">          <Link
          to="/about"
          className="mb-8 inline-flex items-center text-sm font-medium text-black hover:text-black/80 transition-colors"
        >
          <ArrowLeft className="mr-1 h-4 w-4" /> Volver a Quienes Somos
        </Link>
          <div className="text-center">
            <h1 className="text-4xl font-bold md:text-5xl font-serif text-black">
              <span className="script-font text-5xl md:text-6xl block mb-2 text-black">{professional.name}</span>
            </h1>
            <p className="text-lg font-medium text-black/90">{professional.role}</p>
          </div>
        </div>
      </section>

      {/* Professional Details */}
      <section className="py-16 bg-milele-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-start">            <div className="relative h-96 lg:h-auto overflow-hidden rounded-2xl shadow-2xl milele-shadow">
            <img
              src={professional.image || "/placeholder.svg"}
              alt={professional.name}
              className="object-cover w-full h-full"
            />
          </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg milele-shadow border border-milele-green/10">
                <p className="text-gray-600 mb-4">
                  <strong>Número de colegiado:</strong> {professional.license}
                </p>

                <div className="mb-6">
                  <h2 className="mb-3 flex items-center text-xl font-semibold font-serif text-gray-900">
                    <Award className="mr-2 h-5 w-5 text-milele-cyan-dark" /> Especialidades
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {professional.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-milele-green-light to-milele-cyan-light text-gray-700 rounded-full text-sm border border-milele-green/20"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg milele-shadow border border-milele-cyan/10">
                <h2 className="mb-3 flex items-center text-xl font-semibold font-serif text-gray-900">
                  <BookOpen className="mr-2 h-5 w-5 text-milele-cyan-dark" /> Mi Enfoque
                </h2>
                <p className="text-gray-600 leading-relaxed">{professional.approach}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gradient-to-br from-milele-green-light to-white p-8 rounded-2xl shadow-lg milele-shadow border border-milele-green/20">
              <h2 className="mb-4 flex items-center text-2xl font-semibold font-serif text-gray-900">
                <Heart className="mr-3 h-6 w-6 text-milele-green-dark" /> Por qué decidí ser{" "}
                {professional.role.toLowerCase()}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">{professional.why}</p>
            </div>

            <div className="bg-gradient-to-br from-milele-cyan-light to-white p-8 rounded-2xl shadow-lg milele-shadow border border-milele-cyan/20">
              <h2 className="mb-4 flex items-center text-2xl font-semibold font-serif text-gray-900">
                <Smile className="mr-3 h-6 w-6 text-milele-cyan-dark" /> Lo que me apasiona de mi trabajo
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">{professional.passion}</p>
            </div>

            <div className="bg-gradient-to-br from-milele-pink-light to-white p-8 rounded-2xl shadow-lg milele-shadow border border-milele-pink/20">
              <h2 className="mb-4 flex items-center text-2xl font-semibold font-serif text-gray-900">
                <Smile className="mr-3 h-6 w-6 text-milele-pink-dark" /> Lo que me apasiona fuera de mi trabajo
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">{professional.hobbies}</p>
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
              ¿Te gustaría <span className="script-font text-4xl md:text-5xl text-black">trabajar</span> conmigo?
            </h2>
            <p className="mb-8 text-lg text-black/90">
              Agenda una consulta para conocer mi enfoque y cómo puedo ayudarte en tu proceso.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-medium text-gray-800 shadow-lg transition-all hover:shadow-xl hover:scale-105 milele-shadow"
            >
              Contactar ahora <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
