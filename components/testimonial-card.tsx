import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  image: string
}

const TestimonialCard = ({ name, role, content, rating, image }: TestimonialCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
              <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
            </div>
          </div>

          <div className="flex mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} />
            ))}
          </div>

          <p className="text-gray-600 dark:text-gray-300 italic">"{content}"</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default TestimonialCard
