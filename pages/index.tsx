import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const Home: NextPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: 'https://placehold.co/1920x800/334155/ffffff?text=Crosstown+LRT',
      title: 'Crosstown LRT',
      subtitle: 'Mount Dennis Station and EMSF',
      link: '/projects'
    },
    {
      image: 'https://placehold.co/1920x800/475569/ffffff?text=Steel+Fabrication',
      title: 'Steel Fabrication',
      subtitle: 'Advanced Manufacturing Facility',
      link: '/projects'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <>
      <Head>
        <title>Hans Steel Canada — Structural Steel Fabrication</title>
        <meta name="description" content="Hans Steel Canada — engineering, production and construction of structural steel for industrial, commercial and institutional projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Hans Steel Canada" />
        <meta property="og:description" content="Engineering, production and construction of structural steel." />
      </Head>

      {/* Hero Slider Section */}
      <section className="relative h-[600px] bg-slate-900 overflow-hidden">
        <div className="relative h-full">
          {/* Slider Image */}
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

          {/* Slide Content */}
          <div className="absolute right-8 md:right-20 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm text-white p-10 max-w-lg rounded-lg shadow-2xl border border-white/10">
            <h2 className="text-4xl font-bold mb-3 tracking-tight">{slides[currentSlide].title}</h2>
            <p className="text-xl mb-8 text-slate-200">{slides[currentSlide].subtitle}</p>
            <Link 
              href={slides[currentSlide].link}
              className="inline-block bg-white text-slate-900 px-8 py-3 font-bold hover:bg-slate-100 transition-all duration-200 rounded shadow-lg hover:shadow-xl"
            >
              Read More
            </Link>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-200"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-200"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-64 md:h-80">
              <Image src="/images/project1.jpg" alt="ICI Building Structure" fill style={{ objectFit: 'cover' }} className="rounded" />
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-6">
                <h3 className="text-xl font-bold mb-2">ICI Building Structure</h3>
                <p className="text-sm text-gray-700">Industrial, Commercial &amp; Institutional</p>
              </div>
            </div>

            <div className="relative h-64 md:h-80">
              <Image src="/images/steel-tower.jpg" alt="Monopole Steel Tower" fill style={{ objectFit: 'cover' }} className="rounded" />
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-6">
                <h3 className="text-xl font-bold mb-2">Monopole Steel Tower</h3>
                <p className="text-sm text-gray-700">Utility Transmission, Distribution &amp; Tele-Communication Tower</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0b7ed4] text-white">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <div className="mb-8">
            <svg className="w-20 h-20 mx-auto text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
          </div>
          <p className="text-lg leading-relaxed">
            With over 35 years of international experience within the ICI, Utility, Telecom, Gas &amp; Oil industries,
            Hans Steel Canada has been recognized as one of the most competent economical and technical suppliers in the Engineering,
            Production and Construction of structural steel.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">98% ON-TIME DELIVERIES IN CANADA</h3>
              <p className="text-gray-600 text-sm">
                With standardized ERP programs in place Hans Steel Canada ensures planning, scheduling and tracking of
                orders and materials to help successfully delivered on time!
              </p>
            </div>

            <div>
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">BEST LEAD-TIMES IN THE INDUSTRY</h3>
              <p className="text-gray-600 text-sm">
                With over 150 years of combined material on hand, combined with highly experienced and capable, educated and
                skilled work-force in place, Hans Steel Canada is confident and proud to be able to offer their customers the best lead times in the industry.
              </p>
            </div>

            <div>
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">ALWAYS PREPARED WITH A CONTINGENCY PLAN</h3>
              <p className="text-gray-600 text-sm">
                At Hans Steel Canada, we strive to properly plan and prepare our staff on site across all of our production lines,
                as well as our galvanizers and logistics companies, in order to back-up and ensure we can keep delivering your project on-time!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Equipment</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Python 5 Bevel II', icon: '🔧' },
              { name: 'CNC 3 Dimensional High Speed Drilling Line', icon: '⚙️' },
              { name: 'CNC Plasma Tubular Profiling Machine', icon: '🔥' },
              { name: 'Gantry Plate-Drilling Machine', icon: '🛠️' },
              { name: 'Rotating Saw', icon: '⚡' },
              { name: 'Submerged Arc Welding Saw', icon: '⚒️' },
              { name: 'SandBlasting Machine', icon: '💨' },
              { name: 'Shear', icon: '✂️' },
              { name: 'Press Brake', icon: '📐' },
              { name: 'Plasma Cutting Machine', icon: '🔥' },
              { name: 'Steel Tower Pre-fit Jig Station', icon: '🏗️' },
              { name: 'Sub-Merged Arc Jigs for Tubular Structures', icon: '🔩' }
            ].map((equipment, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-3 bg-gray-200 rounded-full flex items-center justify-center text-3xl">
                  {equipment.icon}
                </div>
                <p className="text-sm font-medium">{equipment.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0b7ed4] text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-lg leading-relaxed mb-8">
            "Hans Steel Canada is committed to providing customers with satisfaction, guaranteed quality, competitive cost
            and accomplished delivery. How can we do that? Hans Steel Canada has constructed an 160,000 square foot, fully
            automated fabrication plant, located in Uxbridge, Ontario, which includes cutting, drilling, welding,
            sandblasting and painting all under one roof and managed by a state of the art ERP system."
          </p>
        </div>
      </section>

      <section id="contact" className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="space-y-2">
              <p className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a className="hover:text-[#0b7ed4]" href="tel:+19056401000">+1 (905) 640-1000</a>
                <span className="mx-2">|</span>
                <a className="hover:text-[#0b7ed4]" href="tel:+19056403000">+1 (905) 640-3000</a>
              </p>
              <p className="text-gray-400">6 Staverton Road, Uxbridge, ON, L9P 0C5</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
