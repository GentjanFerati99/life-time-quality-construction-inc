import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import ServicePageHeader from "@/components/service-page-header"
import ImageGallery from "@/components/image-gallery"
import { HomeIcon, Wrench, ClipboardCheck, AlertTriangle, Search, Droplet } from "lucide-react"

export const metadata: Metadata = {
  title: "Roofing Services | LIFETIME QUALITY CONSTRUCTION INC.",
  description: "Professional roofing services including installation, repair, and maintenance for all roof types.",
}

export default function RoofingPage() {
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
        title="Roofing Services"
        description="Professional roofing solutions for residential and commercial properties"
        backgroundImage="/placeholder.svg?height=600&width=1200"
      />

      {/* Service Overview */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-2">
                Roofing Solutions
              </Badge>
              <h2 className="text-3xl font-bold mb-6">Complete Roofing Services</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At LIFETIME QUALITY CONSTRUCTION INC., we provide comprehensive roofing services for both residential
                and commercial properties. Our experienced team specializes in all aspects of roofing, from new
                installations to repairs and maintenance.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We work with a variety of roofing materials including asphalt shingles, metal roofing, tile, slate, and
                flat roofing systems. Our commitment to quality craftsmanship and customer satisfaction has made us a
                trusted name in the roofing industry.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Free roof inspections and estimates</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Licensed and insured professionals</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Quality materials and workmanship</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Comprehensive warranties</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">24/7 emergency roof repair services</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=400&width=600" alt="Roofing Services" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Our Services
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Roofing Services We Offer</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We provide a wide range of roofing services to meet all your needs, from minor repairs to complete roof
              replacements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4">
                    <HomeIcon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Roof Installation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Complete roof installation services for new construction or full replacements, using quality
                    materials and expert craftsmanship.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4">
                    <Wrench className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Roof Repair</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Professional repair services for damaged roofs, including leak repairs, shingle replacement, and
                    storm damage restoration.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4">
                    <ClipboardCheck className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Roof Maintenance</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Regular maintenance programs to extend the life of your roof, including inspections, cleaning, and
                    preventative repairs.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Emergency Services</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    24/7 emergency roof repair services for storm damage, leaks, and other urgent roofing issues.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Roof Inspection</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Comprehensive roof inspections to identify potential issues before they become major problems.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4">
                    <Droplet className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Gutter Services</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Installation and repair of gutters and downspouts to protect your roof and foundation from water
                    damage.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roofing Materials */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Materials
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Roofing Materials We Work With</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer a variety of high-quality roofing materials to suit your specific needs, preferences, and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Asphalt Shingles</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Affordable, durable, and available in various colors and styles. Perfect for most residential roofing
                projects.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Asphalt Shingles"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Metal Roofing</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Long-lasting, energy-efficient, and environmentally friendly. Available in various styles and colors.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative">
                <Image src="/placeholder.svg?height=200&width=300" alt="Metal Roofing" fill className="object-cover" />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Tile Roofing</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Elegant and durable, perfect for Mediterranean, Spanish, or mission-style homes. Available in clay or
                concrete.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative">
                <Image src="/placeholder.svg?height=200&width=300" alt="Tile Roofing" fill className="object-cover" />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Slate Roofing</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Premium, natural stone roofing that offers unmatched beauty and longevity. Perfect for luxury homes.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative">
                <Image src="/placeholder.svg?height=200&width=300" alt="Slate Roofing" fill className="object-cover" />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Flat Roofing</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Specialized systems for flat or low-slope roofs, including EPDM, TPO, and modified bitumen.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative">
                <Image src="/placeholder.svg?height=200&width=300" alt="Flat Roofing" fill className="object-cover" />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Cedar Shakes</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Natural wood shingles that provide a rustic, distinctive look with excellent insulation properties.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative">
                <Image src="/placeholder.svg?height=200&width=300" alt="Cedar Shakes" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Our Work
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Roofing Project Gallery</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Browse through some of our recent roofing projects to see the quality of our workmanship. Click on any
              image to view in detail.
            </p>
          </div>

          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Roofing Project?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today for a free, no-obligation estimate. Our team is ready to help you with all your roofing
            needs.
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
