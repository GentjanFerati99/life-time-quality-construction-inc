import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Award,
  Users,
} from "lucide-react";
import ServiceCard from "@/components/service-card";
import TestimonialCard from "@/components/testimonial-card";
import HeroSection from "@/components/hero-section";

export default function Home() {
  const services = [
    {
      title: "Roofing",
      description:
        "Complete roofing solutions including installation, repair, and maintenance for all roof types.",
      backgroundImage: "/images/roofing/roofing-card.png",
      link: "/services/roofing",
    },
    {
      title: "Siding",
      description:
        "Enhance your home's appearance and protection with our quality siding installation services.",
      backgroundImage: "/images/siding/siding-card.jpg",
      link: "/services/siding",
    },
    {
      title: "Gutters",
      description:
        "Protect your home from water damage with our professional gutter installation and repair.",
      backgroundImage: "/images/gutters/gutters-card.png",
      link: "/services/gutters",
    },
    {
      title: "Skylight",
      description:
        "Bring natural light into your home with our skylight installation and replacement services.",
      backgroundImage: "/images/skylight/skylight-card.jpg",
      link: "/services/skylight",
    },
    {
      title: "Flat Roof",
      description:
        "Specialized solutions for commercial and residential flat roof installation and repair.",
      backgroundImage: "/images/flat-roof/flat-roof-card.jpg",
      link: "/services/flat-roof",
    },
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "Homeowner",
      content:
        "LIFETIME QUALITY CONSTRUCTION replaced our roof after a storm and did an amazing job. The crew was professional, cleaned up thoroughly, and finished ahead of schedule. Highly recommend!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      content:
        "We hired them for our commercial building's flat roof replacement. Their attention to detail and quality of work was outstanding. They worked around our business hours to minimize disruption.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Brown",
      role: "Homeowner",
      content:
        "The team installed new siding on our home and it looks fantastic! They were courteous, professional, and the price was very reasonable. The warranty they offer gives us great peace of mind.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
              <Shield className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fully licensed and insured for your complete protection and
                peace of mind.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
              <Users className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Family Owned & Operated
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                A family business with values centered on quality and customer
                satisfaction.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
              <Award className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Professional & Affordable
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Expert craftsmanship at competitive prices with warranty-backed
                work.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
              <Clock className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Emergency services available around the clock when you need us
                most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quality Construction Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We provide comprehensive construction services with a focus on
              quality, durability, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                backgroundImage={service.backgroundImage}
                link={service.link}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-red-700 hover:bg-red-800">
              <Link href="/contact">
                Get a Free Estimate <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-2">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building Trust Through Quality Craftsmanship
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                At LIFETIME QUALITY CONSTRUCTION INC., we believe in delivering
                exceptional quality on every project. Our commitment to
                excellence has made us a trusted name in the construction
                industry.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Expert Craftsmen</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our team consists of highly skilled professionals with
                      years of experience.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Quality Materials</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We use only the highest quality materials to ensure
                      durability and longevity.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Transparent Pricing</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      No hidden fees or surprises - just honest, upfront
                      pricing.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Comprehensive Warranty</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We stand behind our work with industry-leading warranties.
                    </p>
                  </div>
                </li>
              </ul>

              <Button asChild className="mt-8 bg-red-700 hover:bg-red-800">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/why-us.jpg"
                alt="Quality Construction Work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied
              customers have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-red-100">
            Contact us today for a free, no-obligation estimate. Our team is
            ready to help you with your construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white bg-red-700 hover:bg-white hover:text-red-700"
            >
              <Link href="/contact">Get a Free Estimate</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-red-700 hover:bg-red-100"
            >
              <a href="tel:5551234567">Call (555) 123-4567</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
