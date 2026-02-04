import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      issue: "Anxiety & Stress",
      rating: 5,
      quote: "The holistic approach completely changed my life. The combination of therapy, meditation, and yoga helped me address both my mental and physical symptoms of anxiety.",
      avatar: "SM"
    },
    {
      name: "Michael R.",
      issue: "Depression",
      rating: 5,
      quote: "I was skeptical about online therapy, but the personalized care and integrated wellness tools made such a difference. I finally feel like myself again.",
      avatar: "MR"
    },
    {
      name: "Jennifer L.",
      issue: "Work-Life Balance",
      rating: 5,
      quote: "The flexible scheduling and comprehensive support helped me manage my stress while juggling a demanding career. The therapists truly understand whole-person wellness.",
      avatar: "JL"
    },
    {
      name: "David K.",
      issue: "Relationship Issues",
      rating: 5,
      quote: "The mind-body connection focus helped me understand how my emotional patterns were affecting my relationships. Life-changing experience.",
      avatar: "DK"
    },
    {
      name: "Amanda T.",
      issue: "Trauma & PTSD",
      rating: 5,
      quote: "Finding a platform that offered both traditional therapy and holistic practices like meditation was exactly what I needed for my healing journey.",
      avatar: "AT"
    },
    {
      name: "Robert P.",
      issue: "Chronic Pain & Mental Health",
      rating: 5,
      quote: "The integrated approach to treating both my chronic pain and depression was revolutionary. Finally, a platform that treats the whole person.",
      avatar: "RP"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from people who've found healing through holistic therapy
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                
                {/* Name & Issue */}
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.issue}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Join <span className="font-semibold text-green-600">10,000+ people</span> who've transformed their lives with holistic therapy
          </p>
        </div>
      </div>
    </section>
  )
}
