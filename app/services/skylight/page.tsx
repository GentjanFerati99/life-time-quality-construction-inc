import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import ServicePageHeader from "@/components/service-page-header"
import ImageGallery from "@/components/image-gallery"

export const metadata: Metadata = {
  title: "Skylight Services | LIFETIME QUALITY CONSTRUCTION INC.",
  description:
    "Professional skylight installation, replacement, and repair services for residential and commercial properties.",
}

export default function SkylightPage() {
  const galleryImages = [
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <ServicePageHeader
        title="Skylight Services"
        description="Bring natural light into your home with our professional skylight solutions"
        backgroundImage="/placeholder.svg?height=600&width=1200"
      />

      {/* Service Overview */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-2">
                Skylight Solutions
              </Badge>
              <h2 className="text-3xl font-bold mb-6">Professional Skylight Services</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At LIFETIME QUALITY CONSTRUCTION INC., we specialize in skylight installation, replacement, and repair
                services that bring natural light into your home while ensuring proper insulation and weatherproofing.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Skylights not only enhance the aesthetic appeal of your home but also provide numerous benefits
                including increased natural light, improved ventilation, and potential energy savings. Our experienced
                team ensures proper installation to prevent leaks and maximize energy efficiency.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Free consultations and estimates</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Expert installation by certified professionals
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Quality materials from trusted manufacturers</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Proper flashing and weatherproofing</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Comprehensive warranties on materials and labor
                  </span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Skylight Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Benefits
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Benefits of Installing Skylights</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Skylights offer numerous advantages beyond just adding natural light to your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4 mx-auto">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Natural Light" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Increased Natural Light</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Skylights can bring up to 30% more natural light into your home compared to traditional windows,
                  brightening dark spaces and reducing the need for artificial lighting.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4 mx-auto">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Energy Efficiency" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Energy Efficiency</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Modern skylights with energy-efficient glass can help reduce heating costs in winter and cooling costs
                  in summer when properly positioned.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4 mx-auto">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Ventilation" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Improved Ventilation</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Vented skylights can improve air circulation, helping to remove excess moisture, odors, and indoor
                  pollutants from your home.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4 mx-auto">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Home Value" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Increased Home Value</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Skylights are considered a premium feature that can increase your property's value and appeal to
                  potential buyers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4 mx-auto">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Health Benefits" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Health Benefits</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Natural light has been shown to improve mood, increase vitamin D production, and help regulate sleep
                  patterns for better overall health.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4 mx-auto">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Aesthetic Appeal" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Aesthetic Appeal</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Skylights create a unique architectural feature that adds character and visual interest to your home's
                  interior and exterior.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Our Services
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Skylight Services We Offer</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From installation to repair, we provide comprehensive skylight services to meet all your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Skylight Installation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Professional installation of new skylights in existing roofs or during new construction. We handle
                everything from cutting the opening to proper flashing and finishing.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Site assessment and optimal placement recommendations
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Precise roof opening and framing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Professional flashing and weatherproofing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Interior finishing and trim work</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Final inspection and quality assurance</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Skylight Replacement</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Upgrade your existing skylights to more energy-efficient models or replace damaged units with minimal
                disruption to your home.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Assessment of existing skylight condition</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Removal of old skylight</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Repair of any damaged framing or roofing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Installation of new, energy-efficient skylight
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Updated flashing and weatherproofing</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Skylight Repair</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Address leaks, condensation issues, or damaged components to restore your skylight's functionality and
                prevent water damage.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Thorough inspection to identify issues</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Leak detection and repair</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Seal replacement and weatherproofing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Glass repair or replacement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Hardware and mechanism repair</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Skylight Maintenance</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Regular maintenance to keep your skylights in optimal condition, including cleaning, seal inspection,
                and minor repairs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Professional cleaning of glass and frames</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Inspection of seals and flashing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Lubrication of moving parts for vented skylights
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Minor repairs and adjustments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Preventative maintenance recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skylight Types */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Options
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Skylight Types and Options</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer a variety of skylight types and options to suit your specific needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Fixed Skylights"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Fixed Skylights</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Non-opening skylights that provide natural light while maintaining energy efficiency. Ideal for areas
                  where ventilation isn't a priority.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Vented Skylights"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Vented Skylights</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Opening skylights that provide both natural light and ventilation. Available with manual or electric
                  operation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Tubular Skylights"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Tubular Skylights</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Compact skylights that channel sunlight through a reflective tube, ideal for smaller spaces or areas
                  where traditional skylights aren't practical.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Custom Skylights"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Skylights</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Specially designed skylights in various shapes and sizes to meet specific architectural requirements
                  or aesthetic preferences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Smart Skylights"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Skylights</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Advanced skylights with rain sensors, remote control operation, and integration with home automation
                  systems for maximum convenience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Energy-Efficient Skylights"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Energy-Efficient Skylights</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Skylights with advanced glazing, low-E coatings, and insulation features to maximize energy
                  performance in all seasons.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Our Work
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Skylight Project Gallery</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Browse through some of our recent skylight projects to see the quality of our workmanship. Click on any
              image to view in detail.
            </p>
          </div>

          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Brighten Your Home?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today for a free, no-obligation estimate on your skylight project. Our team is ready to help you
            bring natural light into your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-700"
            >
              <Link href="/contact">Get a Free Estimate</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-red-700 hover:bg-red-100">
              <a href="tel:5551234567">Call (555) 123-4567</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
