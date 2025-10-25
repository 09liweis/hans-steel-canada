import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const BRAMPTON_CORNER_IMAGES = [
  {
    src: '/images/projects/Brampton-Corner/brampton_corner_cru.png',
    alt: 'Brampton Corner CRU'
  },
  {
    src: '/images/projects/Brampton-Corner/brampton_corner_pad1.png',
    alt: 'Brampton Corner PAD1'
  },
  {
    src: '/images/projects/Brampton-Corner/brampton_corner_pad2.png',
    alt: 'Brampton Corner PAD2'
  }
];

const CROSSTOWN_LRT_IMAGES = [
  {
    src: '/images/projects/Crosstown-LRT/lrt_0.png',
    alt: 'Crosstown LRT 0'
  },
  {
    src: '/images/projects/Crosstown-LRT/lrt_1.png',
    alt: 'Crosstown LRT 1'
  },
  {
    src: '/images/projects/Crosstown-LRT/lrt_2.png',
    alt: 'Crosstown LRT 2'
  },
  {
    src: '/images/projects/Crosstown-LRT/lrt_3.png',
    alt: 'Crosstown LRT 3'
  }
];  

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our Projects — Hans Steel Canada</title>
        <meta name="description" content="Explore Hans Steel Canada's portfolio of structural steel projects including ICI buildings, transportation infrastructure, and industrial facilities." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Projects</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl">
            Hans Steel Canada has the bonding and financial capacity for any size project
          </p>
        </div>
      </section>

      {/* Orillia City Hall - Featured Project */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Video/Image Section */}
            <div className="space-y-8">
              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video group">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/VpTIzdQbfa8"
                  title="Orillia Recreation Facility - October 2017 Update"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Logo and Link */}
              <div className="flex items-center gap-6 bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-inner">
                    <span className="text-white font-bold text-3xl">O</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">To learn more about this exciting project</p>
                  <p className="font-bold text-slate-900 text-lg">Visit Orillia Recreation Facility</p>
                  <p className="text-xs text-slate-500 mt-1">October 2017 Update</p>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 tracking-tight">Orillia City Hall</h2>
              <p className="text-2xl text-slate-600 mb-8 font-light">Recreation Facility</p>
              <div className="h-1 w-24 bg-gradient-to-r from-[#c41e3a] to-red-700 mb-8 rounded-full"></div>
              <p className="text-slate-700 leading-relaxed text-lg">
                The structural steel work for the facility is divided into four phases with Phase 1 in the pool change room area now complete. Phase 2, which is the multi-purpose rooms, gymnasium change rooms and fitness centre is on site and erection is currently underway. Portions of Phase 3 (pool) is currently in progress as well. Phase 4 (gymnasium) is anticipated to be erect in the spring.
              </p>
            </div>
          </div>

          {/* Image Gallery with Red Indicator */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#c41e3a] to-red-700 rounded-full"></div>
            <div className="pl-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="group relative aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <img
                    src={`https://placehold.co/400x300/e2e8f0/64748b?text=Orillia+${i + 1}`}
                    alt={`Orillia project ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hydro Post Project */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-slate-900 tracking-tight">Hydro Post</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="group relative aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <img
                  src={`https://placehold.co/400x300/cbd5e1/475569?text=Hydro+${i + 1}`}
                  alt={`Hydro Post project ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crosstown LRT */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Crosstown LRT: Mount Dennis Station and EMSF
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[#c41e3a] to-red-700 mx-auto mb-8 rounded-full"></div>
            <p className="text-slate-300 leading-relaxed text-lg">
              Mount Dennis is the furthest west stop on the Crosstown line. In addition to the stop, Mount Dennis will be the home of the EMSF, a facility to store and maintain the Crosstown vehicles. The stop will include a passenger pick up and drop off area, and a connection to GO Transit's Kitchener line. TTC bus routes will be adjusted to connect riders to the Crosstown. There will be secure indoor bike parking at this station.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {CROSSTOWN_LRT_IMAGES.map((image) => (
              <div key={image.alt} className="group relative aspect-video bg-slate-700 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feihe International */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">Feihe International</h2>
              <p className="text-2xl text-slate-600 mb-8 font-light">Kingston Ontario Project</p>
              <div className="inline-block rounded mb-2">
                <div className="text-base text-slate-600 tracking-wide">
                  <img
                    src="/images/projects/FIRMUS.png"
                    alt="FIRMUS飞鹤 Project"
                    className="w-[300px] h-[50px] object-cover"
                  />
                </div>
              </div>
              <p className="text-2xl font-semibold text-slate-700">coming soon to Canada</p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/images/projects/Feihe-Project.png"
                  alt="Feihe International Project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brampton Corner */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Brampton Corner</h2>
            <p className="text-xl text-slate-600 mt-3 font-light">currently under construction</p>
            <div className="h-1 w-24 bg-gradient-to-r from-[#c41e3a] to-red-700 mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRAMPTON_CORNER_IMAGES.map((image) => (
              <div key={image.alt} className="group relative aspect-video bg-slate-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kingston C.H */}
            <div className="group relative bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer h-80">
              <img
                src="/images/projects/kingston.png"
                alt="Kingston C.H"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500"
              />
              <div className="relative z-10 h-full flex flex-col justify-end p-10">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Kingston C.H</h3>
                <div className="h-1 w-16 bg-gradient-to-r from-[#c41e3a] to-red-700 mt-4 rounded-full"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            </div>

            {/* Dodge Hausville */}
            <div className="group relative bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 text-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer h-80">
              <img
                src="/images/projects/dodge.png"
                alt="Dodge Hausville"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500"
              />
              <div className="relative z-10 h-full flex flex-col justify-end p-10">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Dodge Hunsville</h3>
                <div className="h-1 w-16 bg-gradient-to-r from-[#c41e3a] to-red-700 mt-4 rounded-full"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects