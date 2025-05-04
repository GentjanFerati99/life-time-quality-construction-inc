import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import ServicePageHeader from "@/components/service-page-header";
import ImageGallery from "@/components/image-gallery";
import { PaintBucket, Wrench, ClipboardCheck, Thermometer } from "lucide-react";

export const metadata: Metadata = {
  title: "Siding Services | LIFETIME QUALITY CONSTRUCTION INC.",
  description:
    "Professional siding installation and repair services for residential and commercial properties.",
};

export default function SidingPage() {
  const galleryImages = [
    "/images/siding/1.jpg",
    "/images/siding/2.jpg",
    "/images/siding/3.jpg",
    "/images/siding/4.jpg",
    "/images/siding/5.jpg",
    "/images/siding/6.jpg",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <ServicePageHeader
        title="Siding Services"
        description="Enhance your property's appearance and protection with quality siding solutions"
        backgroundImage="/images/siding/siding-card.jpg"
      />

      {/* Service Overview */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-2">
                Siding Solutions
              </Badge>
              <h2 className="text-3xl font-bold mb-6">
                Professional Siding Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At LIFETIME QUALITY CONSTRUCTION INC., we provide expert siding
                installation and repair services for both residential and
                commercial properties. Our experienced team works with a variety
                of siding materials to enhance your property's appearance while
                providing essential protection from the elements.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Quality siding not only improves your property's curb appeal but
                also increases energy efficiency and property value. Our
                professional installation ensures your siding will last for
                years to come.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Free consultations and estimates
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Expert installation by trained professionals
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Wide selection of materials and styles
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Manufacturer warranties on materials
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Workmanship guarantee on all installations
                  </span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/siding/4.jpg"
                alt="Siding Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Siding Types */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Materials
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Siding Materials We Offer
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We work with a variety of high-quality siding materials to suit
              your specific needs, preferences, and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative mb-4">
                  <Image
                    src="/images/siding/vinyl-siding.png"
                    alt="Vinyl Siding"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Vinyl Siding</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Affordable, low-maintenance, and available in a wide range of
                  colors and styles. Vinyl siding is durable and resistant to
                  rot, insects, and harsh weather.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative mb-4">
                  <Image
                    src="/images/siding/Fiber Cement Siding.png"
                    alt="Fiber Cement Siding"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Fiber Cement Siding</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Extremely durable and resistant to fire, rot, and pests. Fiber
                  cement siding offers the look of wood with much less
                  maintenance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative mb-4">
                  <Image
                    src="/images/siding/Wood Siding.png"
                    alt="Wood Siding"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Wood Siding</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Classic, natural beauty with excellent insulation properties.
                  Available in various styles including clapboard, shingles, and
                  board-and-batten.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative mb-4">
                  <Image
                    src="/images/siding/Metal Siding.png"
                    alt="Metal Siding"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Metal Siding</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Durable, fire-resistant, and low-maintenance. Metal siding is
                  available in aluminum or steel and comes in various styles and
                  colors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative mb-4">
                  <Image
                    src="/images/siding/Engineered Wood Siding.png"
                    alt="Engineered Wood Siding"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Engineered Wood Siding
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Combines the beauty of real wood with enhanced durability and
                  resistance to moisture, rot, and insects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative mb-4">
                  <Image
                    src="/images/siding/Stone Veneer Siding.png"
                    alt="Stone Veneer Siding"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Stone Veneer Siding</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Provides the elegant look of natural stone at a fraction of
                  the weight and cost. Ideal for accent walls and architectural
                  details.
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
            <h2 className="text-3xl font-bold mb-4">
              Siding Services We Offer
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From new installations to repairs and maintenance, we provide
              comprehensive siding services to meet all your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mr-4">
                  <PaintBucket className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">New Siding Installation</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Complete siding installation for new construction or full
                replacements. Our expert team ensures proper installation for
                maximum durability and performance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Professional measurement and estimation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Removal of existing siding (if applicable)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Preparation of surface and installation of house wrap
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Expert installation with proper insulation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Finishing touches and thorough cleanup
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mr-4">
                  <Wrench className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Siding Repair</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Professional repair services for damaged siding, including
                replacement of damaged sections, fixing loose panels, and
                addressing moisture issues.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Thorough inspection to identify all damage
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Repair or replacement of damaged sections
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Addressing underlying issues like moisture or insect damage
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Color matching for seamless repairs
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Sealing and weatherproofing
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mr-4">
                  <ClipboardCheck className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Siding Maintenance</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Regular maintenance services to keep your siding looking great
                and functioning properly, including cleaning, inspection, and
                preventative repairs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Professional cleaning to remove dirt, mold, and mildew
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Inspection for damage, loose panels, or moisture issues
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Caulking and sealing to prevent water infiltration
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Minor repairs to prevent larger issues
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Recommendations for extending siding life
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mr-4">
                  <Thermometer className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Insulation Services</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Improve your home's energy efficiency with proper insulation
                during siding installation or replacement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Energy assessment to identify insulation needs
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Installation of house wrap and moisture barriers
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Addition of rigid foam insulation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Sealing of gaps and penetrations
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Energy-efficient siding options
                  </span>
                </li>
              </ul>
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
            <h2 className="text-3xl font-bold mb-4">Siding Project Gallery</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Browse through some of our recent siding projects to see the
              quality of our workmanship. Click on any image to view in detail.
            </p>
          </div>

          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Property?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today for a free, no-obligation estimate on your siding
            project. Our team is ready to help you enhance your property's
            appearance and protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-red-700 text-white hover:bg-white hover:text-red-700"
            >
              <Link href="/contact">Get a Free Estimate</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-red-700 hover:bg-red-100"
            >
              <a href="tel:6316607449">Call (631) 660-7449</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
