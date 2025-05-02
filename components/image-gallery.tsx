"use client"

import { useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import ImageModal from "@/components/image-modal"

interface ImageGalleryProps {
  images: string[]
  title?: string
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
    setModalOpen(true)
  }

  return (
    <div>
      {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md cursor-pointer group relative"
            onClick={() => openModal(index)}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={image || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="bg-white rounded-full p-2">
                  <Search className="h-5 w-5 text-gray-800" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        images={images}
        initialIndex={selectedImageIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  )
}

export default ImageGallery
