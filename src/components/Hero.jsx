import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Your Path to
            <span className="text-green-600"> Holistic Wellness</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience transformative therapy that treats the whole person—mind, body, and spirit. 
            Find the perfect online platform for your holistic healing journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2">
              Start Your Journey
              <ArrowRight size={20} />
            </button>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition">
              Compare Platforms
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
