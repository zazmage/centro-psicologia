import { useState } from "react"
import { Link } from "react-router"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-milele-green/20">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">        <Link to="/" className="flex items-center">
        <img
          src="/logo-milele.png"
          alt="Milele Centro Multidisciplinar"
          width={200}
          height={60}
          className="h-14 w-auto"
        />
      </Link>

        {/* Desktop Navigation */}        <nav className="hidden md:flex md:items-center md:space-x-8">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-milele-cyan-dark font-serif"
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-milele-cyan-dark font-serif"
          >
            Quienes Somos
          </Link>
          <Link
            to="/spaces"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-milele-cyan-dark font-serif"
          >
            Nuestros Espacios
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-milele-cyan-dark font-serif"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-milele-cyan-dark" />
          ) : (
            <Menu className="h-6 w-6 text-milele-cyan-dark" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container mx-auto px-4 md:hidden bg-white/95 backdrop-blur-sm border-t border-milele-green/20">          <nav className="flex flex-col space-y-4 pb-6 pt-4">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-milele-cyan-dark font-serif"
            onClick={toggleMenu}
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-milele-cyan-dark font-serif"
            onClick={toggleMenu}
          >
            Quienes Somos
          </Link>
          <Link
            to="/spaces"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-milele-cyan-dark font-serif"
            onClick={toggleMenu}
          >
            Nuestros Espacios
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-milele-cyan-dark font-serif"
            onClick={toggleMenu}
          >
            Contacto
          </Link>
        </nav>
        </div>
      )}
    </header>
  )
}
