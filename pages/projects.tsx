import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { projectsData } from '../constants/projectsData'
import { CONTACT_PHONE } from '../constants/text'

const formatTitle = (title: string): string => {
  return title
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

interface Project {
  id: string
  title: string
  features: string[]
  mainImage: string
  images: string[]
}

const ProjectGallery: React.FC<{ project: Project; isEven: boolean }> = ({ project, isEven }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const allImages = [project.mainImage, ...project.images]

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-16 border-b border-slate-200 last:border-b-0 ${
      !isEven ? 'lg:flex lg:flex-row-reverse' : ''
    }`}>
      <div className={`flex flex-col w-full`}>
        <div className="mb-2 inline-flex items-center gap-2">
          <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-amber-600"></div>
          <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">Project</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
          {formatTitle(project.title)}
        </h2>

        {project.features.length > 0 && (
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-600 mb-6">Project Details</h3>
            <ul className="space-y-4">
              {project.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700 text-base font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className='w-full'>
        <div className="space-y-4">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group cursor-pointer" onClick={() => setSelectedImage(project.mainImage)}>
            <Image
              src={project.mainImage}
              alt={formatTitle(project.title)}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              className="group-hover:scale-110 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
            </div>
          </div>

          {project.images.length > 0 && (
            <div className="grid grid-cols-3 gap-3">
              {project.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="relative h-24 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-amber-500"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt={`${formatTitle(project.title)} ${imgIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 33vw, 25vw"
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-125 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative w-full max-w-4xl h-96 md:h-screen rounded-xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Project detail"
              fill
              sizes="100vw"
              style={{ objectFit: 'contain' }}
              className="rounded-xl"
              priority
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our Projects — Hans Steel Canada</title>
        <meta name="description" content="Explore Hans Steel Canada's portfolio of structural steel projects including ICI buildings, transportation infrastructure, and industrial facilities." />
      </Head>

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(45deg, #f59e0b 1px, transparent 1px), linear-gradient(-45deg, #f59e0b 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 0'
          }}></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-500"></div>
              <span className="text-sm font-semibold uppercase tracking-widest text-amber-400">Our Portfolio</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Featured Projects
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Hans Steel Canada brings decades of expertise to every project. From towering transmission structures to complex ICI buildings, we deliver precision and excellence on every scale.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {projectsData.map((project, index) => (
            <ProjectGallery
              key={`${project.id}-${index}`}
              project={project}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Ready for Your Next Project?</h2>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed">
              Let's work together to bring your structural steel vision to life with precision, innovation, and expertise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 rounded-lg inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {CONTACT_PHONE.replace('+1', '+1 (').replace(/(\d{3})(\d{3})(\d{4})/, '$1) $2-$3')}
              </a>
              <a
                href="/services"
                className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 font-semibold transition-colors duration-300 rounded-lg"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
