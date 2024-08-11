'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

function ImageLazyLoading() {
  const canvas = useRef<HTMLCanvasElement>(null)
  const image = useRef<HTMLImageElement>(null)
  const [pixelSize, setPixelSize] = useState(128)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPixelSize((prevSize) => {
        const newSize = prevSize / 2
        if (newSize < 1) {
          clearInterval(intervalId)
          return 1
        }
        return newSize
      })
    }, 100)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (canvas.current && image.current) {
      const ctx = canvas.current.getContext('2d')
      const img = image.current

      if (ctx) {
        const width = canvas.current.width
        const height = canvas.current.height

        ctx.drawImage(img, 0, 0, width, height)

        const imageData = ctx.getImageData(0, 0, width, height)
        const data = imageData.data

        for (let y = 0; y < height; y += pixelSize) {
          for (let x = 0; x < width; x += pixelSize) {
            const i = (y * width + x) * 4

            ctx.fillStyle = `rgb(${data[i]}, ${data[i + 1]}, ${data[i + 2]})`
            ctx.fillRect(x, y, pixelSize, pixelSize)
          }
        }
      }
    }
  }, [pixelSize])

  return (
    <div className="flex">
      <div className="relative">
        <Image
          src="/image.jpg"
          alt="image"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACQAQCdASoIAAUADMDOJaQAAlw+c6AA/N1PdIpY7181Qu2DaIAAAA=="
          width={640}
          height={360}
          ref={image}
        />
        <canvas ref={canvas} className="absolute top-0 left-0 h-full w-full" />
      </div>
    </div>
  )
}

export { ImageLazyLoading }
