import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    alert("Gracias por contactarnos. Te responderemos lo antes posible.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-milele-gradient py-20 text-black overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl font-serif text-black">
              <span className="script-font text-5xl md:text-6xl block mb-2 text-black">Contacto</span>
            </h1>
            <p className="mb-8 text-lg md:text-xl text-black/90 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros para programar una cita o resolver cualquier
              duda que tengas sobre nuestros servicios.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-milele-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-8 text-3xl font-semibold font-serif text-gray-900">
                  Información de <span className="gradient-text">Contacto</span>
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg milele-shadow border border-milele-green/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-milele-green to-milele-cyan text-white mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 font-serif mb-1">Dirección</h3>
                      <p className="text-gray-600">Calle Ejemplo 123, Ciudad, CP 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg milele-shadow border border-milele-cyan/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-milele-cyan to-milele-pink text-white mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 font-serif mb-1">Teléfono</h3>
                      <p className="text-gray-600">+34 123 456 789</p>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg milele-shadow border border-milele-pink/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-milele-pink to-milele-green text-white mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 font-serif mb-1">Email</h3>
                      <p className="text-gray-600">info@milelecentro.com</p>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg milele-shadow border border-milele-green/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-milele-green to-milele-cyan text-white mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 font-serif mb-1">Horario</h3>
                      <div className="text-gray-600">
                        <p>Lunes a Viernes: 9:00 - 20:00</p>
                        <p>Sábados: 10:00 - 14:00</p>
                        <p>Domingos: Cerrado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-6 rounded-2xl shadow-lg milele-shadow border border-milele-cyan/10">
                <h3 className="mb-4 text-xl font-semibold font-serif text-gray-900">Ubicación</h3>
                <div className="h-64 w-full overflow-hidden rounded-xl bg-gradient-to-br from-milele-green-light to-milele-cyan-light border border-milele-green/20">
                  {/* Aquí iría el mapa, por ahora un placeholder */}
                  <div className="flex h-full items-center justify-center">
                    <span className="text-gray-600 font-serif">Mapa de ubicación</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl milele-shadow border border-milele-pink/10">
              <div className="flex items-center mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-milele-pink to-milele-green text-white mr-4">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold font-serif text-gray-900">Envíanos un Mensaje</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700 font-serif">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-milele-cyan-dark focus:outline-none focus:ring-2 focus:ring-milele-cyan-dark/20 transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700 font-serif">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-milele-cyan-dark focus:outline-none focus:ring-2 focus:ring-milele-cyan-dark/20 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700 font-serif">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-milele-cyan-dark focus:outline-none focus:ring-2 focus:ring-milele-cyan-dark/20 transition-colors"
                    placeholder="+34 123 456 789"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700 font-serif">
                    Asunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-milele-cyan-dark focus:outline-none focus:ring-2 focus:ring-milele-cyan-dark/20 transition-colors"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="cita">Solicitar cita</option>
                    <option value="informacion">Solicitar información</option>
                    <option value="consulta">Consulta general</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700 font-serif">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-milele-cyan-dark focus:outline-none focus:ring-2 focus:ring-milele-cyan-dark/20 transition-colors resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded-xl bg-milele-gradient px-8 py-4 text-sm font-medium text-black shadow-lg transition-all hover:shadow-xl hover:scale-105 milele-shadow"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-milele-green-light to-milele-cyan-light p-8 rounded-2xl shadow-lg milele-shadow border border-milele-green/20">
              <h2 className="mb-4 text-2xl font-bold text-center font-serif text-gray-900">
                ¿Necesitas <span className="gradient-text">atención urgente</span>?
              </h2>
              <p className="text-center text-gray-700 mb-6">
                Si tienes una emergencia o necesitas atención inmediata, no dudes en contactarnos directamente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+34123456789"
                  className="inline-flex items-center justify-center rounded-full bg-milele-gradient px-8 py-4 text-sm font-medium text-black shadow-lg transition-all hover:shadow-xl hover:scale-105 milele-shadow"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Llamar ahora
                </a>
                <a
                  href="mailto:urgencias@milelecentro.com"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-gray-800 shadow-lg transition-all hover:shadow-xl hover:scale-105 milele-shadow border border-milele-green/20"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email urgente
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
