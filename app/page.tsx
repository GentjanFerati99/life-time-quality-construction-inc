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
    {
      title: "Chimney",
      description:
        "Expert chimney repair, maintenance, and installation services for safety and efficiency.",
      backgroundImage: "/images/chimney/chimney-card.jpg",
      link: "/services/chimney",
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

  // Service area data
  const serviceAreas = [
    {
      county: "Suffolk County NY",
      towns: [
        {
          name: "Town of Babylon",
          locations: [
            "Amityville NY",
            "Babylon NY",
            "Copiague NY",
            "Deer Park NY",
            "Lindenhurst NY",
            "North Amityville NY",
            "North Babylon NY",
            "West Babylon NY",
            "Wyandanch NY",
          ],
        },
        {
          name: "Town of Brookhaven",
          locations: [
            "Bellport NY",
            "Blue Point NY",
            "Brookhaven NY",
            "Calverton NY",
            "Centereach NY",
            "Center Moriches NY",
            "Coram NY",
            "East Moriches NY",
            "East Patchogue NY",
            "Eastport NY",
            "East Setauket NY",
            "Farmingville NY",
            "Holbrook NY",
            "Holtsville NY",
            "Lake Grove NY",
            "Manorville NY",
            "Mastic NY",
            "Mastic Beach NY",
            "Medford NY",
            "Middle Island NY",
            "Miller Place NY",
            "Moriches NY",
            "Mount Sinai NY",
            "North Patchogue NY",
            "Patchogue NY",
            "Port Jefferson NY",
            "Port Jefferson Station NY",
            "Ridge NY",
            "Rocky Point NY",
            "Ronkonkoma NY",
            "Selden NY",
            "Shirley NY",
            "East Shoreham NY",
            "Shoreham NY",
            "Sound Beach NY",
            "Stony Brook NY",
            "Upton NY",
            "Wading River NY",
            "Yaphank NY",
          ],
        },
        {
          name: "Town of East Hampton",
          locations: [
            "Amagansett NY",
            "East Hampton NY",
            "East Hampton North NY",
            "Montauk NY",
            "Napeague NY",
            "Northwest Harbor NY",
            "Sag Harbor NY",
            "Springs NY",
            "Wainscott NY",
          ],
        },
        {
          name: "Town of Huntington",
          locations: [
            "Centerport NY",
            "Cold Spring Harbor NY",
            "Commack NY",
            "East Northport NY",
            "Greenlawn NY",
            "Huntington NY",
            "Huntington Station NY",
            "Lloyd Harbor NY",
            "Melville NY",
            "Northport NY",
          ],
        },
        {
          name: "Town of Islip",
          locations: [
            "Bayport NY",
            "Bay Shore NY",
            "Bohemia NY",
            "Brentwood NY",
            "Brightwaters NY",
            "Central Islip NY",
            "East Islip NY",
            "Great River NY",
            "Hauppauge NY",
            "Islandia NY",
            "Islip NY",
            "Islip Terrace NY",
            "Oakdale NY",
            "Ocean Beach NY",
            "Ronkonkoma NY",
            "Sayville NY",
            "West Islip NY",
            "West Sayville NY",
          ],
        },
        {
          name: "Town of Riverhead",
          locations: [
            "Aquebogue NY",
            "Calverton NY",
            "Jamesport NY",
            "Laurel NY",
            "Manorville NY",
            "Riverhead NY",
            "South Jamesport NY",
            "Wading River NY",
          ],
        },
        {
          name: "Town of Shelter Island",
          locations: ["Shelter Island NY", "Shelter Island Heights NY"],
        },
        {
          name: "Town of Smithtown",
          locations: [
            "Commack NY",
            "Hauppauge NY",
            "Kings Park NY",
            "Nesconset NY",
            "Saint James NY",
            "Smithtown NY",
          ],
        },
        {
          name: "Town of Southampton",
          locations: [
            "Bridgehampton NY",
            "Eastport NY",
            "East Quogue NY",
            "Flanders NY",
            "Hampton Bays NY",
            "Northampton NY",
            "North Haven NY",
            "North Sea NY",
            "Noyack NY",
            "Quogue NY",
            "Remsenburg NY",
            "Riverside NY",
            "Sagaponack NY",
            "Sag Harbor NY",
            "Shinnecock Hills NY",
            "Speonk NY",
            "Water Mill NY",
            "Southampton NY",
            "Westhampton NY",
            "Westhampton Beach NY",
          ],
        },
        {
          name: "Town of Southold",
          locations: [
            "Cutchogue NY",
            "East Marion NY",
            "Fishers Island NY",
            "Greenport NY",
            "Laurel NY",
            "Mattituck NY",
            "New Suffolk NY",
            "Orient NY",
            "Peconic NY",
            "Southold NY",
          ],
        },
        {
          name: "Fire Island NY",
          locations: ["Fire Island NY"],
        },
      ],
    },
    {
      county: "Nassau County NY",
      towns: [
        {
          name: "Town of Hempstead",
          locations: [
            "Atlantic Beach NY",
            "Baldwin NY",
            "Bellerose Terrace NY",
            "Bellmore NY",
            "Bethpage NY",
            "Cedarhurst NY",
            "East Meadow NY",
            "East Rockaway NY",
            "Elmont NY",
            "Floral Park NY",
            "Franklin Square NY",
            "Freeport NY",
            "Garden City NY",
            "Hempstead NY",
            "Hewlett NY",
            "Inwood NY",
            "Island Park NY",
            "Lawrence NY",
            "Levittown NY",
            "Lynbrook NY",
            "Malverne NY",
            "Merrick NY",
            "Mineola NY",
            "New Hyde Park NY",
            "North Lynbrook NY",
            "North Valley Stream NY",
            "North Woodmere NY",
            "Oceanside NY",
            "Point Lookout NY",
            "Rockville Centre NY",
            "Roosevelt NY",
            "Seaford NY",
            "South Hempstead NY",
            "Uniondale NY",
            "Valley Stream NY",
            "Wantagh NY",
            "West Hempstead NY",
            "Woodmere NY",
          ],
        },
        {
          name: "Town of North Hempstead",
          locations: [
            "Albertson NY",
            "Carle Place NY",
            "Floral Park NY",
            "Glenwood Landing NY",
            "Great Neck NY",
            "Greenvale NY",
            "Kings Point NY",
            "Manhasset NY",
            "Mineola NY",
            "New Hyde Park NY",
            "North New Hyde Park NY",
            "Old Westbury NY",
            "Port Washington NY",
            "Roslyn NY",
            "Roslyn Heights NY",
            "Westbury NY",
            "Williston Park NY",
          ],
        },
        {
          name: "Town of Oyster Bay",
          locations: [
            "Bayville NY",
            "Bethpage NY",
            "East Norwich NY",
            "Farmingdale NY",
            "Glen Head NY",
            "Glenwood Landing NY",
            "Greenvale NY",
            "Hicksville NY",
            "Jericho NY",
            "Locust Valley NY",
            "Massapequa NY",
            "Massapequa Park NY",
            "Mill Neck NY",
            "Old Bethpage NY",
            "Old Westbury NY",
            "Oyster Bay NY",
            "Plainview NY",
            "Sea Cliff NY",
            "Syosset NY",
            "Woodbury NY",
          ],
        },
        {
          name: "Other",
          locations: ["Long Beach NY", "Glen Cove NY"],
        },
      ],
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
      <section id="our-services" className="py-16 bg-white dark:bg-gray-800">
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

      {/* Service Area Section */}
      <section id="service-areas" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Service Areas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Areas We Serve
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We proudly provide our quality construction services throughout
              Long Island, including the following areas:
            </p>
          </div>

          <div className="space-y-8">
            {serviceAreas.map((county, countyIndex) => (
              <div
                key={countyIndex}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6"
              >
                <h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-500">
                  {county.county}
                </h3>
                <div className="space-y-6">
                  {county.towns.map((town, townIndex) => (
                    <div key={townIndex}>
                      <h4 className="text-xl font-semibold mb-3">
                        {town.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {town.locations.map((location, locationIndex) => (
                          <span
                            key={locationIndex}
                            className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-gray-700"
                          >
                            {location}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Not sure if we service your area? Contact us to find out!
            </p>
            <Button asChild className="bg-red-700 hover:bg-red-800">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-100 dark:bg-gray-900">
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
              <a href="tel:6316607449">Call (631) 660-7449</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
