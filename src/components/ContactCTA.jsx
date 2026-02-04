import { useState } from 'react'
import { Mail, Phone, Send, CheckCircle } from 'lucide-react'

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    contactMethod: 'email'
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Here you would typically send the form data to a backend
      console.log('Form submitted:', formData)
      setSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          contactMethod: 'email'
        })
      }, 3000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - CTA */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Take the first step towards holistic wellness. Our team is here to help you find the perfect therapy platform for your unique needs.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-green-200" size={24} />
                <div>
                  <div className="font-semibold">Email Us</div>
                  <a href="mailto:info@holistictherapy.com" className="text-green-100 hover:text-white">
                    info@holistictherapy.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-green-200" size={24} />
                <div>
                  <div className="font-semibold">Call Us</div>
                  <a href="tel:+15551234567" className="text-green-100 hover:text-white">
                    (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-green-500">
              <p className="text-green-100 mb-4">Trusted by thousands</p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold">10,000+</div>
                  <div className="text-green-200 text-sm">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-green-200 text-sm">Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-green-200 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {submitted ? (
              // Success Message
              <div className="text-center py-12">
                <CheckCircle className="text-green-600 mx-auto mb-4" size={64} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  We've received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              // Contact Form
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone (Optional) */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="How can we help you?"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="email"
                          checked={formData.contactMethod === 'email'}
                          onChange={handleChange}
                          className="mr-2 text-green-600 focus:ring-green-600"
                        />
                        <span className="text-gray-700">Email</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="phone"
                          checked={formData.contactMethod === 'phone'}
                          onChange={handleChange}
                          className="mr-2 text-green-600 focus:ring-green-600"
                        />
                        <span className="text-gray-700">Phone</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={20} />
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    We typically respond within 24 hours
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
