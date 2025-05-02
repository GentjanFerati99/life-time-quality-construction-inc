import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | LIFETIME QUALITY CONSTRUCTION INC.",
  description: "Contact LIFETIME QUALITY CONSTRUCTION INC. for all your roofing and construction needs.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-100 dark:bg-gray-800 pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions or ready to start your project? Reach out to our team for a free consultation and estimate.
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
                      <p className="text-gray-600 dark:text-gray-300">(555) 123-4567</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">info@lifetimequality.com</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Office Location</h3>
                      <p className="text-gray-600 dark:text-gray-300">123 Construction Ave</p>
                      <p className="text-gray-600 dark:text-gray-300">Building City, ST 12345</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Mon-Fri: 8am-5pm, Sat: 9am-2pm</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Hours of Operation</h3>
                      <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-600 dark:text-gray-300">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-gray-600 dark:text-gray-300">Sunday: Closed</p>
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
                  We proudly serve the following areas and surrounding communities:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
                  <li>• City Name</li>
                  <li>• City Name</li>
                  <li>• City Name</li>
                  <li>• City Name</li>
                  <li>• City Name</li>
                  <li>• City Name</li>
                </ul>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  Not sure if we service your area? Contact us to find out!
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
            <p className="text-gray-600 dark:text-gray-300">Visit our office or job sites in progress</p>
          </div>
          <div className="h-[400px] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
            {/* Map placeholder - would be replaced with actual map component */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
