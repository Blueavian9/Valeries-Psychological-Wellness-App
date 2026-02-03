import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { heroSlides } from "@/data/heroSlides"
import { cn } from "@/lib/utils"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const autoSlideRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return

    autoSlideRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current)
      }
    }
  }, [isPaused])

  // Navigate to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index)
    // Reset auto-slide timer
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current)
    }
  }

  // Navigate to next/previous slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current)
    }
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current)
    }
  }

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX
  }

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX
    handleSwipe()
  }

  const handleSwipe = () => {
    const swipeThreshold = 50
    if (touchEndX.current < touchStartX.current - swipeThreshold) {
      // Swipe left - next slide
      nextSlide()
    }
    if (touchEndX.current > touchStartX.current + swipeThreshold) {
      // Swipe right - previous slide
      prevSlide()
    }
  }

  // Smooth scroll handler for CTA buttons
  const handleCTAClick = (hash) => {
    const element = document.querySelector(hash)
    if (element) {
      const headerHeight = 70
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="home"
      className="relative text-white text-center min-h-[600px] flex items-center overflow-hidden pt-24 pb-24 px-5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1500",
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/85 via-indigo-500/85 to-purple-600/85 dark:from-slate-900/85 dark:to-slate-800/85 z-20" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-40 w-auto px-5 py-5 text-white font-bold text-2xl transition-all duration-300 rounded-r-lg bg-black/30 backdrop-blur-sm hover:bg-black/60 hover:scale-110 select-none"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-40 w-auto px-5 py-5 text-white font-bold text-2xl transition-all duration-300 rounded-l-lg bg-black/30 backdrop-blur-sm hover:bg-black/60 hover:scale-110 select-none"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2.5">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full border-2 border-white/80 transition-all duration-300",
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-30 w-full container mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Holistic Therapy: Healing Mind, Body & Spirit Together
        </h1>
        <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
          Experience integrative, whole-person mental health care that treats you as a complete
          being. Combining traditional psychotherapy with yoga, meditation, nutrition, and complementary techniques to
          achieve true balance and wellness.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            variant="default"
            size="lg"
            className="text-lg px-8 py-6"
            onClick={() => handleCTAClick("#holistic-therapy")}
          >
            Learn About Holistic Therapy
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 bg-white/20 border-2 border-white backdrop-blur-sm hover:bg-white/30 text-white"
            onClick={() => handleCTAClick("#platforms")}
          >
            Compare Platforms
          </Button>
        </div>
      </div>
    </section>
  )
}
