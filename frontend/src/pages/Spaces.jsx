import { useState } from "react"
import { MapPin, ChevronLeft, ChevronRight, Home, Sparkles } from "lucide-react"

// Datos de ejemplo para los espacios
const spaces = [
  {
    id: "espacio1",
    name: "Centro Principal",
    description:
      "Nuestro centro principal cuenta con amplias instalaciones diseñadas para crear un ambiente acogedor y tranquilo. Disponemos de varias salas de terapia individual, una sala para terapia grupal y espacios especialmente adaptados para niños.",
    location: "Calle Ejemplo 123, Ciudad, CP 12345",
    directions:
      "Ubicado en el centro de la ciudad, a 5 minutos caminando de la estación de metro Central. Hay parking público disponible en las inmediaciones.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: ["Salas de terapia individual", "Sala de terapia grupal", "Espacios para niños", "Parking disponible"],
  },
  {
    id: "espacio2",
    name: "Centro Infantil",
    description:
      "Espacio especializado en terapia infantil y logopedia. Todas las salas están adaptadas para niños de diferentes edades, con materiales y juegos terapéuticos. Contamos con una sala sensorial y un espacio exterior seguro para actividades al aire libre.",
    location: "Avenida Principal 456, Ciudad, CP 12345",
    directions:
      "Situado en una zona residencial tranquila, con fácil acceso en transporte público (líneas de autobús 10 y 15). Disponemos de parking propio para clientes.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: ["Sala sensorial", "Juegos terapéuticos", "Espacio exterior", "Parking propio"],
  },
]

export default function Spaces() {
  const [activeImageIndex, setActiveImageIndex] = useState({})

  const nextImage = (spaceId) => {
    const currentIndex = activeImageIndex[spaceId] || 0
    const space = spaces.find((s) => s.id === spaceId)
    if (space) {
      setActiveImageIndex({
        ...activeImageIndex,
        [spaceId]: (currentIndex + 1) % space.images.length,
      })
    }
  }

  const prevImage = (spaceId) => {
    const currentIndex = activeImageIndex[spaceId] || 0
    const space = spaces.find((s) => s.id === spaceId)
    if (space) {
      setActiveImageIndex({
        ...activeImageIndex,
        [spaceId]: (currentIndex - 1 + space.images.length) % space.images.length,
      })
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-milele-gradient py-20 text-black overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl font-serif text-black">
              <span className="script-font text-5xl md:text-6xl block mb-2 text-black">Nuestros Espacios</span>
            </h1>
            <p className="mb-8 text-lg md:text-xl text-black/90 max-w-3xl mx-auto">
              Contamos con instalaciones modernas y acogedoras, diseñadas para crear un ambiente confortable donde
              puedas sentirte seguro y relajado durante tus sesiones.
            </p>
          </div>
        </div>
      </section>

      {/* Spaces Section */}
      <section className="py-16 bg-milele-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {spaces.map((space) => (
              <div
                key={space.id}
                className="rounded-2xl bg-white p-8 md:p-12 shadow-xl milele-shadow border border-milele-green/10"
              >
                <div className="grid gap-8 lg:grid-cols-2 items-start">
                  <div className="space-y-6">
                    <div className="flex items-center mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-milele-green to-milele-cyan text-white mr-4">
                        <Home className="h-6 w-6" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 font-serif">{space.name}</h2>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg">{space.description}</p>

                    <div className="bg-gradient-to-br from-milele-cyan-light to-white p-6 rounded-xl border border-milele-cyan/20">
                      <h3 className="mb-3 flex items-center text-xl font-semibold font-serif text-gray-900">
                        <MapPin className="mr-2 h-5 w-5 text-milele-cyan-dark" /> Ubicación
                      </h3>
                      <p className="mb-3 text-gray-700 font-medium">{space.location}</p>
                      <h4 className="mb-2 font-medium text-gray-900">Cómo llegar:</h4>
                      <p className="text-gray-600">{space.directions}</p>
                    </div>

                    <div className="bg-gradient-to-br from-milele-pink-light to-white p-6 rounded-xl border border-milele-pink/20">
                      <h3 className="mb-3 flex items-center text-xl font-semibold font-serif text-gray-900">
                        <Sparkles className="mr-2 h-5 w-5 text-milele-pink-dark" /> Características
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {space.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-milele-pink-dark rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold font-serif text-gray-900">Galería de imágenes</h3>
                    <div className="relative">                      <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl shadow-lg">
                      <img
                        src={space.images[activeImageIndex[space.id] || 0]}
                        alt={`${space.name} - Imagen ${(activeImageIndex[space.id] || 0) + 1}`}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>

                      {space.images.length > 1 && (
                        <>
                          <button
                            onClick={() => prevImage(space.id)}
                            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg hover:bg-white transition-all milele-shadow"
                            aria-label="Imagen anterior"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => nextImage(space.id)}
                            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg hover:bg-white transition-all milele-shadow"
                            aria-label="Imagen siguiente"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>
                        </>
                      )}

                      <div className="mt-4 flex justify-center space-x-2">
                        {space.images.map((_, imageIndex) => (
                          <button
                            key={imageIndex}
                            className={`h-3 w-3 rounded-full transition-all ${(activeImageIndex[space.id] || 0) === imageIndex
                              ? "bg-milele-cyan-dark scale-110"
                              : "bg-gray-300 hover:bg-gray-400"
                              }`}
                            onClick={() => setActiveImageIndex({ ...activeImageIndex, [space.id]: imageIndex })}
                            aria-label={`Ir a imagen ${imageIndex + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-milele-gradient py-16 text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif text-black">
              ¿Te gustaría <span className="script-font text-4xl md:text-5xl text-black">visitarnos</span>?
            </h2>
            <p className="mb-8 text-lg text-black/90">
              Agenda una cita para conocer nuestras instalaciones y descubrir cómo podemos ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-medium text-gray-800 shadow-lg transition-all hover:shadow-xl hover:scale-105 milele-shadow"
              >
                Contactar ahora
              </a>
              <a
                href="tel:+34123456789"
                className="inline-flex items-center rounded-full bg-black/10 backdrop-blur-sm px-8 py-4 text-sm font-medium text-black border border-black/20 transition-all hover:bg-black/20"
              >
                Llamar directamente
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
