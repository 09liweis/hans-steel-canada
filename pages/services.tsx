import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import { formatPhoneSimple, CONTACT_PHONE } from '../constants/text'

const Services: NextPage = () => {
  const services = [
    {
      title: "Engineering & Detailing Designing",
      description: "Comprehensive structural engineering and detailed shop drawings for steel fabrication projects"
    },
    {
      title: "Fabrication",
      description: "State-of-the-art steel fabrication services using advanced technology and skilled craftsmanship"
    },
    {
      title: "Installation",
      description: "Professional on-site steel erection and installation by experienced crews"
    },
    {
      title: "General Contract",
      description: "Full-service general contracting for complete project management and execution"
    },
    {
      title: "Concrete & Foundation",
      description: "Expert concrete work and foundation services to support structural steel projects"
    },
    {
      title: "Estimate",
      description: "Accurate cost estimation and project planning for budgeting and proposals"
    },
    {
      title: "Project Management",
      description: "Comprehensive project oversight ensuring on-time and on-budget delivery"
    }
  ]

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMsg('')
    setStatus('sending')

    const form = new FormData(e.currentTarget as HTMLFormElement)
    const payload = {
      name: String(form.get('name') || '').trim(),
      email: String(form.get('email') || '').trim(),
      phone: String(form.get('phone') || '').trim(),
      company: String(form.get('company') || '').trim(),
      service: String(form.get('service') || '').trim(),
      message: String(form.get('message') || '').trim(),
    }

    if (!payload.name || !payload.email || !payload.message) {
      setErrorMsg('Please fill name, email and message.')
      setStatus('error')
      return
    }

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to send')
      }

      setStatus('success');
    } catch (err: any) {
      console.error(err)
      setErrorMsg(err?.message || 'Server error')
      setStatus('error')
    }
  }

  return (
    <>
      <Head>
        <title>Services — Hans Steel Canada</title>
        <meta name="description" content="Hans Steel Canada offers comprehensive structural steel services including engineering, fabrication, installation, and project management." />
      </Head>

      {/* Hero Section with Background Image */}
      <section className="relative h-72 sm:h-[420px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/services/banner.png"
            alt="Hans Steel Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 leading-tight">Services</h1>
            <p className="text-lg sm:text-xl text-slate-200 mb-6">Comprehensive structural steel services: engineering, fabrication, installation, and project management.</p>
            <a href="/contact" className="inline-block bg-[#c41e3a] hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow">Contact Sales</a>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Brochure */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md transform transition-all duration-300 border border-gray-100">
                  <div className="aspect-[3/4] bg-slate-100 rounded-lg overflow-hidden">
                    <img
                      src="/images/brochure/hans-steel-brochure-p01.png"
                      alt="Hans Steel Brochure"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <div className="bg-[#c41e3a] text-white px-6 py-3 font-bold text-sm inline-block mb-4 rounded-lg shadow-sm">
                      <div>HANS STEEL</div>
                      <div>CANADA</div>
                    </div>
                    <p className="text-sm text-slate-600 mb-3 font-medium">Blueprints For Utility & Industrial Building Structures</p>
                    <div className="flex justify-center gap-3 text-xs">
                      <span className="px-3 py-1.5 bg-white rounded-lg border border-gray-200 text-slate-700 font-medium">AISC</span>
                      <span className="px-3 py-1.5 bg-white rounded-lg border border-gray-200 text-slate-700 font-medium">CSA</span>
                      <span className="px-3 py-1.5 bg-white rounded-lg border border-gray-200 text-slate-700 font-medium">ISO</span>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <a
                      href="/pdf/brochure.pdf"
                      download
                      className="block w-full bg-[#0ea5a4] hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow text-center"
                    >
                      Download PDF
                    </a>
                    <a
                      href="/brochure"
                      className="block w-full bg-white hover:bg-slate-50 text-slate-800 font-semibold py-3 px-6 rounded-lg border border-slate-200 transition-colors duration-200 text-center"
                    >
                      View Online
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Services List */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 tracking-tight">Our Services</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white rounded-xl p-6 transition-shadow duration-200 border border-gray-100 hover:shadow-md"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">{index + 1}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side - Contact Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight">Reach Out To Us</h2>
              <div className="prose prose-lg text-slate-700 mb-8">
                <p className="text-lg leading-relaxed">
                  Please contact our Sales Department for inquiries of any type. We welcome the feedback and look forward to assisting you.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  The best way to get in touch is to call <a href={`tel:${CONTACT_PHONE}`} className="font-bold text-[#c41e3a] hover:underline">{formatPhoneSimple()}</a>.
                </p>
                <p className="text-lg leading-relaxed">
                  Or submit this form. We check our email inboxes regularly.
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
              <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-xl border border-slate-200">
              <form className="space-y-5" onSubmit={handleSubmit as any}>
                {/* form state handled below */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                    Type of Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Choose...</option>
                    {services.map((s, i) => (
                      <option key={i} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {status === 'success' && (
                  <div className="p-3 bg-green-50 border border-green-200 text-green-800 rounded">Thanks — your message was sent.</div>
                )}
                {status === 'error' && errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded">{errorMsg}</div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full ${status === 'sending' ? 'opacity-60 cursor-not-allowed' : ''} bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl`}
                >
                  {status === 'sending' ? 'Sending...' : 'Send'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
