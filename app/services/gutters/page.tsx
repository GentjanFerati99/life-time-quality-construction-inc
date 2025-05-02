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
  title: "Gutter Services | LIFETIME QUALITY CONSTRUCTION INC.",
  description:
    "Professional gutter installation, repair, and maintenance services for residential and commercial properties.",
}

export default function GuttersPage() {
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
        title="Gutter Services"
        description="Protect your property from water damage with our professional gutter solutions"
        backgroundImage="/placeholder.svg?height=600&width=1200"
      />

      {/* Service Overview */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-2">
                Gutter Solutions
              </Badge>
              <h2 className="text-3xl font-bold mb-6">Professional Gutter Services</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At LIFETIME QUALITY CONSTRUCTION INC., we provide comprehensive gutter services to protect your property
                from water damage. Properly functioning gutters are essential for directing rainwater away from your
                foundation, preventing erosion, basement flooding, and damage to your landscaping.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our experienced team specializes in gutter installation, repair, cleaning, and maintenance for both
                residential and commercial properties. We work with various gutter materials and styles to ensure your
                property has the best protection possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Free inspections and estimates</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Professional installation by trained technicians
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Quality materials and workmanship</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Seamless gutter options</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Gutter guard installation</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=400&width=600" alt="Gutter Services" fill className="object-cover" />
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
            <h2 className="text-3xl font-bold mb-4">Gutter Services We Offer</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From installation to maintenance, we provide comprehensive gutter services to keep your property
              protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4 mx-auto">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Gutter Installation" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Gutter Installation</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Professional installation of new gutter systems, including seamless gutters, downspouts, and
                  accessories.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4 mx-auto">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Gutter Repair" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Gutter Repair</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Expert repair of damaged, leaking, or sagging gutters to restore proper functionality.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4 mx-auto">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Gutter Cleaning" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Gutter Cleaning</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Regular cleaning to remove leaves, debris, and blockages that can cause water overflow and damage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4 mx-auto">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Gutter Guards" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Gutter Guards</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Installation of gutter protection systems to prevent debris buildup while allowing water to flow
                  freely.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4 mx-auto">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Downspout Installation"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Downspout Services</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Installation and repair of downspouts, including extensions and drainage solutions to direct water
                  away from your foundation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4 mx-auto">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Maintenance" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Maintenance Programs</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Scheduled maintenance plans to keep your gutters functioning properly year-round, preventing costly
                  water damage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gutter Types */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Materials
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Gutter Types and Materials</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer a variety of gutter types and materials to suit your property's needs and aesthetic preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Seamless Gutters</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Custom-made on-site to fit your home perfectly, seamless gutters have fewer joints and are less prone to
                leaking. They offer a cleaner appearance and require less maintenance.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Seamless Gutters"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Sectional Gutters</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pre-cut sections that are assembled on-site. While more economical, they have more seams that may
                require additional maintenance over time.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Sectional Gutters"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Aluminum Gutters</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Lightweight, rust-resistant, and available in many colors. Aluminum is the most popular gutter material
                due to its durability and cost-effectiveness.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Aluminum Gutters"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Copper Gutters</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Premium option with exceptional durability and a distinctive appearance that develops a beautiful patina
                over time. Ideal for high-end homes and historic properties.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative">
                <Image src="/placeholder.svg?height=200&width=300" alt="Copper Gutters" fill className="object-cover" />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Steel Gutters</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Strong and durable, steel gutters can withstand harsh weather conditions. Available in galvanized or
                stainless steel options for different levels of rust resistance.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative">
                <Image src="/placeholder.svg?height=200&width=300" alt="Steel Gutters" fill className="object-cover" />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Vinyl Gutters</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Economical and easy to install, vinyl gutters are lightweight and resistant to rust and corrosion. Best
                suited for milder climates as they can become brittle in extreme cold.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative">
                <Image src="/placeholder.svg?height=200&width=300" alt="Vinyl Gutters" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Professional Gutter Installation"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Badge variant="outline" className="mb-2">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl font-bold mb-6">The LIFETIME QUALITY Difference</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                When you choose LIFETIME QUALITY CONSTRUCTION INC. for your gutter needs, you're selecting a team
                committed to excellence in every aspect of our service.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Experienced Professionals</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our technicians are highly trained and experienced in all aspects of gutter installation and
                      repair.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Quality Materials</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We use only high-quality materials that are built to last and withstand the elements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Customized Solutions</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We assess your property's specific needs to provide the most effective gutter system.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Comprehensive Warranty</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our work is backed by industry-leading warranties for your peace of mind.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Attention to Detail</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We ensure proper installation with attention to pitch, alignment, and secure fastening.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
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
            <h2 className="text-3xl font-bold mb-4">Gutter Project Gallery</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Browse through some of our recent gutter projects to see the quality of our workmanship. Click on any
              image to view in detail.
            </p>
          </div>

          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Protect Your Property with Quality Gutters</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today for a free, no-obligation estimate on your gutter project. Our team is ready to help you
            protect your property from water damage.
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
