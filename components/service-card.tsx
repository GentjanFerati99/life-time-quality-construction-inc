import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  backgroundImage: string
  link: string
}

const ServiceCard = ({ title, description, backgroundImage, link }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group h-full">
      <CardContent className="p-0 h-full">
        <div
          className="relative h-full flex flex-col justify-end p-6 text-white"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors"></div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-200 mb-4">{description}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-0">
        <Link
          href={link}
          className="w-full py-3 px-6 bg-gray-100 dark:bg-gray-700 text-center flex items-center justify-center hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors group"
        >
          <span className="text-sm font-medium group-hover:text-red-700 dark:group-hover:text-red-500">Learn More</span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover:text-red-700 dark:group-hover:text-red-500" />
        </Link>
      </CardFooter>
    </Card>
  )
}

export default ServiceCard
