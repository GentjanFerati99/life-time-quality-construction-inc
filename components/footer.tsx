import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">LIFETIME QUALITY CONSTRUCTION INC.</h3>
            <p className="mb-4 text-gray-300">
              Professional roofing and construction services with quality that lasts a lifetime.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/roofing" className="text-gray-300 hover:text-red-500 transition-colors">
                  Roofing
                </Link>
              </li>
              <li>
                <Link href="/services/siding" className="text-gray-300 hover:text-red-500 transition-colors">
                  Siding
                </Link>
              </li>
              <li>
                <Link href="/services/gutters" className="text-gray-300 hover:text-red-500 transition-colors">
                  Gutters
                </Link>
              </li>
              <li>
                <Link href="/services/skylight" className="text-gray-300 hover:text-red-500 transition-colors">
                  Skylight
                </Link>
              </li>
              <li>
                <Link href="/services/flat-roof" className="text-gray-300 hover:text-red-500 transition-colors">
                  Flat Roof
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-red-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-red-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-red-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-red-500 transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">info@lifetimequality.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Construction Ave, Building City, ST 12345</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">24/7 Service Available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                &copy; {currentYear} LIFETIME QUALITY CONSTRUCTION INC. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="text-sm text-gray-400 flex items-center">
                <span className="bg-red-500 h-2 w-2 rounded-full mr-2"></span>
                Licensed & Insured
              </span>
              <span className="text-sm text-gray-400 flex items-center">
                <span className="bg-red-500 h-2 w-2 rounded-full mr-2"></span>
                Family Owned & Operated
              </span>
              <span className="text-sm text-gray-400 flex items-center">
                <span className="bg-red-500 h-2 w-2 rounded-full mr-2"></span>
                Professional & Affordable
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
