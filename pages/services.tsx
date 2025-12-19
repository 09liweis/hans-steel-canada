import type { NextPage } from 'next'
import Head from 'next/head'
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

  return (
    <>
      <Head>
        <title>Services — Hans Steel Canada</title>
        <meta name="description" content="Hans Steel Canada offers comprehensive structural steel services including engineering, fabrication, installation, and project management." />
      </Head>

      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/services/banner.png"
            alt="Hans Steel Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-center">
          <div className="text-white bg-black/70 p-10 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Services</h1>
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed">
              HANS STEEL CANADA CORP.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Brochure */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md transform transition-all duration-300">
                  <div className="aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden shadow-inner">
                    <img 
                      src="/images/brochure/hans-steel-brochure-p01.png"
                      alt="Hans Steel Brochure"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <div className="bg-[#c41e3a] text-white px-6 py-3 font-bold text-sm inline-block mb-4 rounded-lg shadow-md">
                      <div>HANS STEEL</div>
                      <div>CANADA</div>
                    </div>
                    <p className="text-sm text-slate-600 mb-3 font-medium">Blueprints For Utility & Industrial Building Structures</p>
                    <div className="flex justify-center gap-4 text-xs">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg">
                        <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-slate-700 font-medium">AISC</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg">
                        <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-slate-700 font-medium">CSA</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg">
                        <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-slate-700 font-medium">ISO</span>
                      </div>
                    </div>
                    <div className="flex justify-center gap-2 mt-4 text-xs">
                      <div className="px-3 py-1.5 bg-slate-100 rounded-lg">
                        <span className="text-slate-700 font-medium">CWB</span>
                      </div>
                      <div className="px-3 py-1.5 bg-slate-100 rounded-lg">
                        <span className="text-slate-700 font-medium">Tekla</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <a
                      href="/pdf/brochure.pdf"
                      download
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md text-center"
                    >
                      Download PDF version
                    </a>
                    <a
                      href="/brochure"
                      className="block w-full bg-white hover:bg-slate-50 text-blue-600 font-semibold py-3 px-6 rounded-lg border-2 border-blue-600 transition-colors duration-200 text-center"
                    >
                      or View it Online
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Services List */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">Our Services</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-6 transition-all duration-300 cursor-pointer border border-white/20 hover:border-white/40 hover:shadow-xl"
                  >
                    <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      {service.description}
                    </p>
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
              <form className="space-y-5">
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
                    <option value="engineering">Engineering & Detailing Designing</option>
                    <option value="fabrication">Fabrication</option>
                    <option value="installation">Installation</option>
                    <option value="general">General Contract</option>
                    <option value="concrete">Concrete & Foundation</option>
                    <option value="estimate">Estimate</option>
                    <option value="project">Project Management</option>
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

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Send
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
