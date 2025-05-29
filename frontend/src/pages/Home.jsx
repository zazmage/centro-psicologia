import { Link } from "react-router"
import { ArrowRight, Heart, Brain, Users, Star, Sparkles, ClipboardList, UserCheck, Target, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Banner */}
      <section className="relative bg-milele-gradient py-20 text-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">            <div className="space-y-6">            <h1 className="text-4xl font-bold leading-tight md:text-5xl font-serif">
            <span className="moontime-light text-5xl md:text-8xl block mb-2">Milele</span>
            Para siempre
          </h1>
            <p className="text-lg md:text-xl opacity-90">
              En Milele, cada persona es única, y por eso nos esforzamos en ofrecer soluciones terapéuticas que se ajusten a sus necesidades.
            </p>
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
      </section>      {/* Metodología de trabajo */}
      <section className="py-16 bg-milele-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl font-serif">
              Nuestra <span className="gradient-text">Metodología</span> de Trabajo
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              En Centro Milele, ofrecemos un enfoque integral y personalizado para el tratamiento de nuestros pacientes, basado en la colaboración entre profesionales de diversas disciplinas: logopedia, pedagogía y psicología. Nuestro objetivo es abordar de manera conjunta las necesidades de cada individuo, promoviendo su desarrollo y bienestar desde una perspectiva global.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Línea vertical central */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-milele-green via-milele-cyan to-milele-pink opacity-30"></div>

              {/* Paso 1 */}
              <div className="relative flex items-center mb-16">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white rounded-2xl p-8 shadow-lg milele-shadow border border-milele-green/20">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Evaluación Integral y Personalizada</h3>
                    <p className="text-gray-600 mb-6">
                      El primer paso en nuestra metodología es realizar una evaluación completa que permita conocer en profundidad las necesidades del paciente. Este proceso involucra:
                    </p>
                    <ul className="text-gray-600 space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-milele-green-dark mr-3 mt-0.5 flex-shrink-0" />
                        <span>Entrevistas iniciales con los familiares o cuidadores, para obtener información sobre el historial del paciente, sus preocupaciones y objetivos.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-milele-green-dark mr-3 mt-0.5 flex-shrink-0" />
                        <span>Valoración específica de cada área, utilizando herramientas y pruebas especializadas que permiten identificar cualquier dificultad o área que necesite atención.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Círculo numerado */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-milele-green to-milele-cyan rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg z-10">
                  <ClipboardList className="h-8 w-8" />
                </div>

                <div className="w-1/2 pl-8">
                  <div className="bg-gradient-to-br from-milele-green/10 to-milele-cyan/10 rounded-2xl p-8 border border-milele-green/20">
                    <div className="text-6xl font-bold text-milele-green-dark opacity-20 mb-4 font-serif">01</div>
                    <h4 className="text-xl font-semibold text-milele-green-dark mb-2">Primer Paso</h4>
                    <p className="text-gray-600">Conocimiento profundo del paciente y sus necesidades específicas</p>
                  </div>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="relative flex items-center mb-16">
                <div className="w-1/2 pr-8">
                  <div className="bg-gradient-to-br from-milele-cyan/10 to-milele-pink/10 rounded-2xl p-8 border border-milele-cyan/20">
                    <div className="text-6xl font-bold text-milele-cyan-dark opacity-20 mb-4 font-serif">02</div>
                    <h4 className="text-xl font-semibold text-milele-cyan-dark mb-2">Colaboración</h4>
                    <p className="text-gray-600">Trabajo coordinado entre profesionales especializados</p>
                  </div>
                </div>

                {/* Círculo numerado */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-milele-cyan to-milele-pink rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg z-10">
                  <UserCheck className="h-8 w-8" />
                </div>

                <div className="w-1/2 pl-8 text-left">
                  <div className="bg-white rounded-2xl p-8 shadow-lg milele-shadow border border-milele-cyan/20">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Trabajo Multidisciplinar</h3>
                    <p className="text-gray-600">
                      Contamos con un equipo profesional altamente cualificado que trabajan de forma coordinada para ofrecer un tratamiento personalizado y efectivo. Nos reunimos periódicamente para compartir avances y ajustar las intervenciones, garantizando que cada paciente reciba el mejor tratamiento en todas las áreas involucradas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white rounded-2xl p-8 shadow-lg milele-shadow border border-milele-pink/20">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Plan de Intervención Personalizado</h3>
                    <p className="text-gray-600 mb-6">
                      Una vez realizada la evaluación, diseñamos un plan de intervención individualizado que incluye:
                    </p>
                    <ul className="text-gray-600 space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-milele-pink-dark mr-3 mt-0.5 flex-shrink-0" />
                        <span>Objetivos específicos para cada disciplina.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-milele-pink-dark mr-3 mt-0.5 flex-shrink-0" />
                        <span>Técnicas y herramientas adaptadas a cada área, utilizando métodos basados en la evidencia científica y ajustados a la edad y situación del paciente.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-milele-pink-dark mr-3 mt-0.5 flex-shrink-0" />
                        <span>Planificación de sesiones de intervención, donde cada profesional lleva a cabo su trabajo de forma complementaria maximizando resultados.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Círculo numerado */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-milele-pink to-milele-green rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg z-10">
                  <Target className="h-8 w-8" />
                </div>

                <div className="w-1/2 pl-8">
                  <div className="bg-gradient-to-br from-milele-pink/10 to-milele-green/10 rounded-2xl p-8 border border-milele-pink/20">
                    <div className="text-6xl font-bold text-milele-pink-dark opacity-20 mb-4 font-serif">03</div>
                    <h4 className="text-xl font-semibold text-milele-pink-dark mb-2">Implementación</h4>
                    <p className="text-gray-600">Plan personalizado con objetivos específicos y seguimiento continuo</p>
                  </div>
                </div>
              </div>
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
