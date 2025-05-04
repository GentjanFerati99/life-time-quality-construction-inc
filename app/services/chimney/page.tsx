import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brush,
  Building2,
  CheckCircle,
  Droplet,
  Flame,
  Hammer,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import ServicePageHeader from "@/components/service-page-header";
import ImageGallery from "@/components/image-gallery";

export const metadata: Metadata = {
  title: "Chimney Services | LIFETIME QUALITY CONSTRUCTION INC.",
  description:
    "Professional chimney installation, repair, and maintenance services for residential and commercial properties.",
};

export default function ChimneyPage() {
  const galleryImages = [
    "/images/chimney/1.jpg",
    "/images/chimney/2.jpg",
    "/images/chimney/3.jpg",
    "/images/chimney/4.jpg",
    "/images/chimney/5.jpg",
    "/images/chimney/6.jpg",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <ServicePageHeader
        title="Chimney Services"
        description="Expert chimney repair, maintenance, and installation services for safety and efficiency"
        backgroundImage="/images/chimney/chimney-card.jpg"
      />

      {/* Service Overview */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-2">
                Chimney Solutions
              </Badge>
              <h2 className="text-3xl font-bold mb-6">
                Professional Chimney Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At LIFETIME QUALITY CONSTRUCTION INC., we provide comprehensive
                chimney services to ensure your chimney functions safely and
                efficiently. Our experienced team specializes in chimney
                installation, repair, cleaning, and maintenance for both
                residential and commercial properties.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                A properly maintained chimney is essential for the safety of
                your home and family. Our professional chimney services help
                prevent fire hazards, carbon monoxide leaks, and structural
                damage while ensuring optimal performance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Thorough chimney inspections
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Professional chimney cleaning
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Expert repair and restoration
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Chimney cap and crown installation
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Flashing repair and waterproofing
                  </span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/chimney/6.jpg"
                alt="Chimney Services"
                fill
                className="object-cover"
              />
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
            <h2 className="text-3xl font-bold mb-4">
              Chimney Services We Offer
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From inspection to repair, we provide comprehensive chimney
              services to ensure safety and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Chimney Inspection */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4">
                    <SearchCheck className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Chimney Inspection</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Comprehensive inspections to identify potential issues,
                    ensure safety, and maintain optimal performance of your
                    chimney system.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Chimney Cleaning */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4">
                    <Brush className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Chimney Cleaning</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Professional cleaning to remove creosote buildup, debris,
                    and blockages that can lead to chimney fires and poor
                    ventilation.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Chimney Repair */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4">
                    <Hammer className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Chimney Repair</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Expert repair services for damaged chimneys, including
                    masonry repair, crown repair, and flue liner replacement.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Chimney Cap Installation */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4">
                    <ShieldCheck className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Chimney Cap Installation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Installation of chimney caps to prevent water damage, animal
                    intrusion, and debris from entering your chimney.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Waterproofing */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4">
                    <Droplet className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Waterproofing</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Application of waterproofing sealants to protect your
                    chimney from water damage, which can lead to deterioration
                    and costly repairs.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Chimney Rebuilding */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4">
                    <Building2 className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Chimney Rebuilding</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Complete chimney rebuilding services for severely damaged
                    chimneys or when upgrading to a new fireplace system.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/chimney/8.jpg"
                alt="Professional Chimney Service"
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
                When you choose LIFETIME QUALITY CONSTRUCTION INC. for your
                chimney needs, you're selecting a team committed to excellence
                in every aspect of our service.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Certified Professionals</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our chimney technicians are certified and trained in the
                      latest techniques and safety standards.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Comprehensive Services</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We offer a full range of chimney services to address all
                      your needs under one roof.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Safety First Approach</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We prioritize the safety of your home and family in every
                      service we provide.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Transparent Pricing</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We provide detailed estimates with no hidden fees or
                      surprise charges.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Guaranteed Satisfaction</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We stand behind our work with industry-leading warranties
                      and guarantees.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Chimney Problems */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Common Issues
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Common Chimney Problems We Solve
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our experienced team can identify and address these common chimney
              issues to keep your home safe and your chimney functioning
              properly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Creosote Buildup</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Creosote is a highly flammable substance that builds up inside
                chimneys over time. Regular cleaning is essential to prevent
                chimney fires.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative">
                <Image
                  src="/images/chimney/Creosote Buildup.png"
                  alt="Creosote Buildup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Damaged Chimney Crown</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The chimney crown prevents water from entering the chimney.
                Cracks or deterioration can lead to water damage and structural
                issues.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative">
                <Image
                  src="/images/chimney/Damaged Chimney Crown.png"
                  alt="Damaged Chimney Crown"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Masonry Damage</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Deteriorating mortar joints, cracked bricks, or spalling can
                compromise the structural integrity of your chimney and lead to
                costly repairs if not addressed.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative">
                <Image
                  src="/images/chimney/Masonry Damage.png"
                  alt="Masonry Damage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Flue Liner Damage</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Damaged flue liners can allow heat, smoke, and carbon monoxide
                to escape into your home, creating a serious safety hazard.
              </p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative">
                <Image
                  src="/images/chimney/Flue Liner Damage.png"
                  alt="Flue Liner Damage"
                  fill
                  className="object-cover"
                />
              </div>
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
            <h2 className="text-3xl font-bold mb-4">Chimney Project Gallery</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Browse through some of our recent chimney projects to see the
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
            Ready to Ensure Your Chimney's Safety?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today for a free, no-obligation estimate on your chimney
            project. Our team is ready to help you with all your chimney needs.
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
