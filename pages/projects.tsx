import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our Projects — Hans Steel Canada</title>
        <meta name="description" content="Explore Hans Steel Canada's portfolio of structural steel projects including ICI buildings, transportation infrastructure, and industrial facilities." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl md:text-2xl">
            Hans Steel Canada has the bonding and financial capacity for any size project!
          </p>
        </div>
      </section>

      {/* Orillia City Hall - Featured Project */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Video/Image Section */}
            <div className="space-y-6">
              <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 bg-[#c41e3a] rounded-full flex items-center justify-center hover:bg-[#a01830] transition-colors cursor-pointer">
                      <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm">Watch on YouTube</p>
                  </div>
                </div>
              </div>

              {/* Logo and Link */}
              <div className="flex items-center gap-4 bg-gray-100 p-6 rounded-lg">
                <div className="w-16 h-16 bg-white rounded flex items-center justify-center flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">O</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600">To learn more about this exciting project</p>
                  <p className="font-semibold text-gray-900">Visit Orillia recreation facility</p>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Orillia City Hall</h2>
              <p className="text-xl text-gray-600 mb-6">- Recreation Facility</p>
              <p className="text-gray-700 leading-relaxed text-lg">
                The structural steel work for the facility is divided into four phases with Phase 1 in the pool change room area now complete. Phase 2, which is the multi-purpose rooms, gymnasium change rooms and fitness centre is on site and erection is currently underway. Portions of Phase 3 (pool) is currently in progress as well. Phase 4 (gymnasium) is anticipated to be erect in the spring.
              </p>
            </div>
          </div>

          {/* Image Gallery with Red Indicator */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#c41e3a]"></div>
            <div className="pl-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="relative aspect-[4/3] bg-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
                    <span className="text-xs">Image {i + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hydro Post Project */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Hydro Post</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="relative aspect-[4/3] bg-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
                  <span className="text-xs">Hydro {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crosstown LRT */}
      <section className="py-16 bg-[#2d3748] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Crosstown LRT: Mount Dennis Station and EMSF
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Mount Dennis is the furthest west stop on the Crosstown line. In addition to the stop, Mount Dennis will be the home of the EMSF, a facility to store and maintain the Crosstown vehicles. The stop will include a passenger pick up and drop off area, and a connection to GO Transit's Kitchener line. TTC bus routes will be adjusted to connect riders to the Crosstown. There will be secure indoor bike parking at this station.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="relative aspect-video bg-gray-700 rounded overflow-hidden hover:shadow-lg transition-shadow">
                <div className="absolute inset-0 bg-gray-600 flex items-center justify-center text-gray-400">
                  <span className="text-xs">LRT {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feihe International */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Feihe International</h2>
            <p className="text-xl text-gray-600 mb-6">Kingston Ontario Project</p>
            <div className="mb-6 py-8">
              <div className="inline-block bg-gray-100 px-12 py-8 rounded-lg">
                <div className="text-4xl font-bold text-[#c41e3a]">FIRMUS</div>
                <div className="text-sm text-gray-600 mt-2">长寿之乡</div>
              </div>
            </div>
            <p className="text-2xl font-semibold text-gray-700">- coming soon for Canada</p>
          </div>
        </div>
      </section>

      {/* Brampton Corner */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Brampton Corner</h2>
            <p className="text-lg text-gray-600 mt-2">- currently under construction</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="relative aspect-video bg-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
                  <span className="text-xs">Brampton {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Projects Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Kingston C.H */}
            <div className="relative bg-gray-700 text-white p-12 rounded-lg overflow-hidden hover:bg-gray-600 transition-colors">
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold">Kingston C.H</h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 opacity-50"></div>
            </div>

            {/* Dodge Hausville */}
            <div className="relative bg-gray-600 text-white p-12 rounded-lg overflow-hidden hover:bg-gray-500 transition-colors">
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold">Dodge Hausville</h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700 opacity-50"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects