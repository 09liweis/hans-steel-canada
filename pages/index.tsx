import Image from 'next/image'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hans Steel Canada — Structural Steel Fabrication</title>
        <meta name="description" content="Hans Steel Canada — engineering, production and construction of structural steel for industrial, commercial and institutional projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Hans Steel Canada" />
        <meta property="og:description" content="Engineering, production and construction of structural steel." />
  <meta property="og:image" content="/images/steel-tower.jpg" />
      </Head>

      <section className="relative h-[56vh] md:h-[64vh] lg:h-[72vh]">
        <Image src="/images/steel-tower.jpg" alt="Hans Steel hero" fill style={{ objectFit: 'cover' }} priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto px-6 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">Engineering, Production and Construction of Structural Steel</h1>
            <p className="mt-4 max-w-2xl text-sm md:text-base">Full-service structural steel fabrication and erection — tailored solutions for industrial and commercial projects across Canada.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#contact" className="inline-block bg-[#0b6fb6] hover:bg-[#095a95] text-white px-4 py-2 rounded shadow">Get in Touch</a>
              <a href="/projects" className="inline-flex items-center gap-2 text-white/90 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0b6fb6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">ICI Building Structure</h3>
                  <p className="mt-2 text-sm text-gray-600">Industrial, Commercial &amp; Institutional steel fabrication and erection.</p>
                </div>
              </div>
            </div>
            <div className="p-6 border rounded shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0b6fb6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c2.21 0 4-1.79 4-4S14.21 0 12 0 8 1.79 8 4s1.79 4 4 4zM4 22v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Monopole Steel Tower</h3>
                  <p className="mt-2 text-sm text-gray-600">Utility Transmission, Distribution &amp; Tele-communication Towers.</p>
                </div>
              </div>
            </div>
            <div className="p-6 border rounded shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0b6fb6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Professional Equipment</h3>
                  <p className="mt-2 text-sm text-gray-600">CNC plasma, press brakes, plate drilling, welding and more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-3 text-gray-600">For quotations and inquiries, reach out to us at <a className="text-blue-600 underline" href="tel:+19056401000">+1 905-640-1000</a>.</p>
        </div>
      </section>
    </>
  )
}

export default Home
