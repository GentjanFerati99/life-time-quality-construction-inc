import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import ServicePageHeader from "@/components/service-page-header";
import ImageGallery from "@/components/image-gallery";

export const metadata: Metadata = {
  title: "Flat Roof Services | LIFETIME QUALITY CONSTRUCTION INC.",
  description:
    "Professional flat roof installation, repair, and maintenance services for residential and commercial properties.",
};

export default function FlatRoofPage() {
  const galleryImages = [
    "/images/flat-roof/1.jpg",
    "/images/flat-roof/2.jpg",
    "/images/flat-roof/3.jpg",
    "/images/flat-roof/4.jpg",
    "/images/flat-roof/5.jpg",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <ServicePageHeader
        title="Flat Roof Services"
        description="Specialized solutions for commercial and residential flat roof installation and repair"
        backgroundImage="/images/flat-roof/flat-roof-card.jpg"
      />

      {/* Service Overview */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-2">
                Flat Roof Solutions
              </Badge>
              <h2 className="text-3xl font-bold mb-6">
                Professional Flat Roof Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At LIFETIME QUALITY CONSTRUCTION INC., we specialize in flat
                roof systems for both commercial and residential properties. Our
                experienced team provides expert installation, repair, and
                maintenance services to ensure your flat roof performs reliably
                for years to come.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Flat roofs require specialized knowledge and techniques
                different from traditional sloped roofing. Our team is trained
                in the latest flat roofing technologies and materials to provide
                solutions that are durable, energy-efficient, and
                cost-effective.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Free inspections and detailed estimates
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Expert installation by certified professionals
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Quality materials with manufacturer warranties
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Proper drainage solutions
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Energy-efficient roofing options
                  </span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/flat-roof/2.jpg"
                alt="Flat Roof Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flat Roof Types */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Materials
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Flat Roof Systems We Offer
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We work with a variety of flat roofing systems to meet your
              specific needs, budget, and climate considerations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative mb-4">
                  <Image
                    src="/images/flat-roof/EPDM Roofing.png"
                    alt="EPDM Roofing"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">EPDM Roofing</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Ethylene Propylene Diene Monomer (EPDM) is a durable synthetic
                  rubber roofing membrane known for its exceptional weather
                  resistance and longevity, typically lasting 20-30 years.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative mb-4">
                  <Image
                    src="/images/flat-roof/TPO Roofing.png"
                    alt="TPO Roofing"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">TPO Roofing</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Thermoplastic Polyolefin (TPO) is an energy-efficient
                  single-ply roofing membrane that reflects UV rays, reducing
                  cooling costs. It's resistant to dirt, algae, and punctures.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative mb-4">
                  <Image
                    src="/images/flat-roof/PVC Roofing.png"
                    alt="PVC Roofing"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">PVC Roofing</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Polyvinyl Chloride (PVC) roofing is highly durable and
                  resistant to chemicals, fire, and wind. Its heat-welded seams
                  create a watertight barrier that can last 20+ years.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative mb-4">
                  <Image
                    src="/images/flat-roof/Modified Bitumen.png"
                    alt="Modified Bitumen"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Modified Bitumen</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A reinforced asphalt product with added modifiers for
                  increased flexibility and strength. It's applied in multiple
                  layers for excellent waterproofing and durability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative mb-4">
                  <Image
                    src="/images/flat-roof/Built-Up Roofing (BUR).png"
                    alt="Built-Up Roofing"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Built-Up Roofing (BUR)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Traditional tar and gravel roofing consisting of multiple
                  layers of bitumen and reinforcing fabrics. Known for its
                  exceptional durability and resistance to foot traffic.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative mb-4">
                  <Image
                    src="/images/flat-roof/Spray Polyurethane Foam.png"
                    alt="Spray Polyurethane Foam"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Spray Polyurethane Foam
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A seamless roofing system that provides excellent insulation
                  and can be applied over existing roofs. It conforms to
                  irregular shapes and creates a monolithic barrier.
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
              Flat Roof Services We Offer
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From installation to maintenance, we provide comprehensive flat
              roof services to meet all your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Flat Roof Installation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Professional installation of new flat roof systems for
                commercial and residential properties. We handle everything from
                tear-off to completion with minimal disruption.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Comprehensive site assessment and planning
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Removal of existing roofing (if applicable)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Proper insulation installation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Expert application of roofing system
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Installation of proper drainage solutions
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Flat Roof Repair</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Expert repair services for damaged flat roofs, including leak
                detection and repair, membrane patching, and addressing drainage
                issues.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Thorough inspection and leak detection
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Repair of damaged membranes or substrates
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Addressing ponding water and drainage issues
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Flashing repairs and replacements
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Emergency repair services
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Flat Roof Maintenance</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Regular maintenance programs to extend the life of your flat
                roof, including inspections, cleaning, and preventative repairs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Scheduled inspections and assessments
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Debris removal and cleaning
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Drain and gutter cleaning
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Minor repairs and preventative maintenance
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Detailed condition reports
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Roof Coatings</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Application of protective coatings to extend the life of your
                flat roof, improve energy efficiency, and address minor issues
                without a full replacement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Roof assessment and preparation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Application of reflective or protective coatings
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Silicone, acrylic, or aluminum coating options
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Waterproofing and UV protection
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Energy-efficient cool roof solutions
                  </span>
                </li>
              </ul>
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
                src="/images/flat-roof/5.jpg"
                alt="Professional Flat Roof Installation"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Badge variant="outline" className="mb-2">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl font-bold mb-6">
                The LIFETIME QUALITY Difference
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                When you choose LIFETIME QUALITY CONSTRUCTION INC. for your flat
                roof needs, you're selecting a team committed to excellence in
                every aspect of our service.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Specialized Expertise</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our team has specific training and experience in flat roof
                      systems and technologies.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Quality Materials</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We use only high-quality materials from trusted
                      manufacturers with proven track records.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Proper Drainage Solutions</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We ensure your flat roof has proper drainage to prevent
                      ponding water and extend roof life.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Energy-Efficient Options</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We offer cool roof solutions that can significantly reduce
                      your energy costs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Comprehensive Warranties</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our work is backed by industry-leading warranties for your
                      peace of mind.
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
            <h2 className="text-3xl font-bold mb-4">
              Flat Roof Project Gallery
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Browse through some of our recent flat roof projects to see the
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
            Ready to Start Your Flat Roof Project?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today for a free, no-obligation estimate on your flat
            roof project. Our team is ready to help you with all your flat
            roofing needs.
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
