import type { NextPage } from 'next'
import Head from 'next/head'

const heroImage = 'https://www.hanssteel.com/cph7/wp-content/uploads/2021/11/steel-tower_1200x382.jpg'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HANS STEEL CANADA — Demo Frontpage</title>
        <meta name="description" content="Approximate recreation of hanssteel.com homepage for demo." />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">HANS STEEL CANADA</div>
          <nav className="space-x-6 hidden md:block">
            <a className="text-gray-700 hover:text-gray-900" href="#services">Services</a>
            <a className="text-gray-700 hover:text-gray-900" href="#projects">Projects</a>
            <a className="text-gray-700 hover:text-gray-900" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section
          className="relative bg-cover bg-center h-96 flex items-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold">Engineering, Production and Construction of Structural Steel</h1>
            <p className="mt-4 max-w-2xl">Full-service structural steel fabrication and erection — tailored solutions for industrial and commercial projects across Canada.</p>
            <div className="mt-6">
              <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Get in Touch</a>
            </div>
          </div>
        </section>

        <section id="services" className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold">Our Services</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">We provide engineering, production, and on-site construction services for structural steel projects including towers, buildings, and custom fabrications.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold">Engineering</h3>
              <p className="mt-2 text-sm text-gray-600">Structural design, analysis, and project planning.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold">Production</h3>
              <p className="mt-2 text-sm text-gray-600">Precision fabrication in our ISO-certified facilities.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold">Construction</h3>
              <p className="mt-2 text-sm text-gray-600">Erection and site management for timely delivery.</p>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold">Selected Projects</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded overflow-hidden shadow-sm">
                <img src="https://www.hanssteel.com/cph7/wp-content/uploads/2021/11/steel-tower_1200x382.jpg" alt="project" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold">Steel Tower</h4>
                  <p className="text-sm text-gray-600">Fabrication and erection of a signaling tower.</p>
                </div>
              </div>
              <div className="rounded overflow-hidden shadow-sm">
                <img src="https://www.hanssteel.com/cph7/wp-content/uploads/2021/11/steel-tower_1200x382.jpg" alt="project" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold">Industrial Structure</h4>
                  <p className="text-sm text-gray-600">Large-span structural framing and cladding.</p>
                </div>
              </div>
              <div className="rounded overflow-hidden shadow-sm">
                <img src="https://www.hanssteel.com/cph7/wp-content/uploads/2021/11/steel-tower_1200x382.jpg" alt="project" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold">Custom Fabrication</h4>
                  <p className="text-sm text-gray-600">Precision assemblies and welded components.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-3 text-gray-600">For quotations and inquiries, reach out to us.</p>
          <div className="mt-6">
            <a href="https://www.hanssteel.com" className="text-blue-600 underline">Visit the original site</a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} HANS STEEL CANADA — Demo</p>
        </div>
      </footer>
    </>
  )
}

export default Home
