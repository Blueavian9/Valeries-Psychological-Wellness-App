import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      category: "About Holistic Therapy",
      questions: [
        {
          question: "What is holistic therapy?",
          answer: "Holistic therapy is an integrative approach that treats the whole person—mind, body, and spirit. It combines traditional psychotherapy with complementary practices like meditation, yoga, nutrition guidance, and mindfulness to address the root causes of mental health challenges."
        },
        {
          question: "How does holistic therapy differ from traditional therapy?",
          answer: "While traditional therapy focuses primarily on mental health through talk therapy, holistic therapy takes a comprehensive approach. It recognizes the interconnection between mental, physical, emotional, and spiritual well-being, incorporating various healing modalities to support overall wellness."
        },
        {
          question: "What modalities are included in holistic therapy?",
          answer: "Holistic therapy platforms typically offer cognitive behavioral therapy (CBT), mindfulness-based therapy, meditation guidance, yoga therapy, breathwork, nutrition counseling, stress management techniques, and spiritual counseling—all tailored to your individual needs."
        }
      ]
    },
    {
      category: "Platform Usage",
      questions: [
        {
          question: "How does online therapy work?",
          answer: "Online therapy connects you with licensed therapists through secure video calls, phone sessions, or messaging. You can schedule live sessions or send messages to your therapist, who responds within 24 hours. All platforms use HIPAA-compliant technology to ensure your privacy."
        },
        {
          question: "What technology do I need?",
          answer: "You'll need a smartphone, tablet, or computer with internet access, a camera (for video sessions), and a microphone. Most platforms have user-friendly apps for iOS and Android, as well as web-based access."
        },
        {
          question: "Is my information secure and private?",
          answer: "Yes. All reputable online therapy platforms use bank-level encryption and are HIPAA-compliant. Your sessions and messages are completely confidential, just like in-person therapy. Therapists are bound by the same ethical and legal privacy standards."
        }
      ]
    },
    {
      category: "Pricing & Insurance",
      questions: [
        {
          question: "How much does holistic therapy cost?",
          answer: "Costs vary by platform and plan. Text-based therapy starts around $35-40/week, while plans with live video sessions range from $65-120/week. Many platforms offer financial aid and sliding scale fees based on income."
        },
        {
          question: "Do these platforms accept insurance?",
          answer: "Some platforms like Talkspace and Grow Therapy accept certain insurance plans. Coverage varies by provider and plan. Many platforms can provide you with documentation (superbills) to submit to your insurance for potential reimbursement."
        },
        {
          question: "Are there affordable options available?",
          answer: "Yes! Platforms like Calmerry offer text-based therapy starting at $35/week. Many platforms also provide financial aid programs, sliding scale fees, and payment plans to make therapy accessible regardless of budget."
        }
      ]
    },
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I choose the right platform?",
          answer: "Consider your budget, insurance coverage, preferred session type (video, phone, text), specific needs (holistic vs. traditional focus), and therapist specialties. Our comparison table above helps you evaluate options based on these criteria."
        },
        {
          question: "How does the matching process work?",
          answer: "Most platforms use a questionnaire to understand your needs, preferences, and goals. Based on your answers, they match you with therapists who specialize in your concerns and fit your communication style. You can usually request a different therapist if the first match isn't quite right."
        },
        {
          question: "Can I switch therapists if needed?",
          answer: "Absolutely. Most platforms make it easy to switch therapists at no additional cost. Finding the right therapeutic relationship is crucial for success, and platforms understand this. You can usually request a new match through your account dashboard."
        }
      ]
    }
  ]

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about holistic online therapy
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const index = `${categoryIndex}-${questionIndex}`
                  const isOpen = openIndex === index

                  return (
                    <div 
                      key={questionIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      {/* Question */}
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition flex justify-between items-center"
                      >
                        <span className="font-semibold text-gray-900 pr-8">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="text-green-600 flex-shrink-0" size={20} />
                        ) : (
                          <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                        )}
                      </button>

                      {/* Answer */}
                      {isOpen && (
                        <div className="px-6 py-4 bg-white">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
