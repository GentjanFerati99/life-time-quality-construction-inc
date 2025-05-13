import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | LIFETIME QUALITY CONSTRUCTION INC.",
  description:
    "Contact LIFETIME QUALITY CONSTRUCTION INC. for all your roofing and construction needs.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-100 dark:bg-gray-800 pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions or ready to start your project? Reach out to our team
            for a free consultation and estimate.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        (631) 660-7449
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Available 24/7 for emergencies
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        lifetimequalityconstruction@gmail.com
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Office Location</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        25 Carmen View Dr Shirley, NY 11967
                      </p>

                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Mon-Sun: 8am-5pm
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Hours of Operation</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Monday - Sunday: 8:00 AM - 5:00 PM
                      </p>
                      <p className="text-sm text-red-600 dark:text-red-400 font-medium mt-1">
                        24/7 Emergency Service Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Our Service Area</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We proudly serve Suffolk and Nassau Counties on Long Island,
                  including:
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <div>
                    <h3 className="font-semibold text-red-700 dark:text-red-500 mb-2">
                      Suffolk County
                    </h3>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                      <li>• Town of Babylon</li>
                      <li>• Town of Brookhaven</li>
                      <li>• Town of East Hampton</li>
                      <li>• Town of Huntington</li>
                      <li>• Town of Islip</li>
                      <li>• Town of Riverhead</li>
                      <li>• Town of Shelter Island</li>
                      <li>• Town of Smithtown</li>
                      <li>• Town of Southampton</li>
                      <li>• Town of Southold</li>
                      <li>• Fire Island</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-700 dark:text-red-500 mb-2">
                      Nassau County
                    </h3>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                      <li>• Town of Hempstead</li>
                      <li>• Town of North Hempstead</li>
                      <li>• Town of Oyster Bay</li>
                      <li>• Long Beach</li>
                      <li>• Glen Cove</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  For a complete list of all locations we serve, please visit
                  our{" "}
                  <Link
                    href="/#service-areas"
                    className="text-red-600 dark:text-red-400 hover:underline"
                  >
                    service areas section
                  </Link>{" "}
                  on our homepage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Find Us</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Visit our office or job sites in progress
            </p>
          </div>
          <div className="h-[400px] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
            {/* Map placeholder - would be replaced with actual map component */}
            <div className="w-full h-full flex items-center justify-center">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=25+Carmen+View+Dr+Shirley,+NY+11967&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
