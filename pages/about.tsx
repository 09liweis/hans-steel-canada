import React, { ReactNode } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

type FeatureCardProps = {
  title: string
  description: string
  bgColor: string
  children: ReactNode
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, bgColor, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className={`${bgColor} text-white w-12 h-12 rounded flex items-center justify-center`}>{children}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-gray-600">{description}</p>
    </div>
  )
}

type FeatureItem = {
  title: string
  description: string
  bgColor: string
  icon: ReactNode
}

const features: FeatureItem[] = [
  {
    title: 'People',
    description:
      'By fostering teamwork, nurturing talent, and enhancing leadership capabilities, our teams act with pride and passion to serve our customers and each other with integrity.',
    bgColor: 'bg-[#c41e3a]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.636 6.879 1.762M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Quality Control',
    description:
      'We are committed to producing the highest quality product in the industry. Each employee takes responsibility for their role in the overall productivity and reputation of the company.',
    bgColor: 'bg-[#0ea5a4]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 7h10v10H7z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description:
      'Innovation is anything but business as usual — we promote innovation by developing leading edge solutions in technology, processes and products.',
    bgColor: 'bg-[#f59e0b]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Conduct',
    description:
      'By demonstrating high ethical standards, Hans Steel Canada is committed to providing a safe workplace while respecting and caring for the environment and our communities.',
    bgColor: 'bg-[#374151]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2v4h6v-4c0-1.105-1.343-2-3-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      </svg>
    ),
  },
]

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us — Hans Steel Canada</title>
      </Head>

      <div className="container mx-auto px-4 py-12">
        {/* Hero / Banner (with gradient overlay) */}
        <section className="relative rounded overflow-hidden shadow-lg">
          <div
            className="h-96 bg-cover bg-center w-full"
            style={{
              backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.28), rgba(0,0,0,0.45)), url('/images/steel-tower.jpg')",
            }}
            aria-hidden
          />

          <div className="absolute inset-0 flex items-center justify-end pr-6 lg:pr-24">
            <div className="bg-white/10 backdrop-blur-sm text-white p-6 lg:p-10 rounded max-w-md shadow-lg">
              <h1 className="text-3xl lg:text-4xl font-serif font-semibold tracking-wide">HANS STEEL CANADA</h1>
              <p className="mt-3 text-sm opacity-90">About Us</p>
            </div>
          </div>

          {/* (intro moved below hero) */}
        </section>

        {/* Introduction (separate from hero) */}
        <section className="mt-12 max-w-4xl mx-auto text-gray-700 leading-relaxed">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
            <p className="leading-relaxed">
              Hans Steel Canada is proud to be the North American Division of Qingdao Wuxiao Group.
              With a brand new, highly advanced fabrication facility located in Stouffville, Ontario,
              Hans Steel Canada is committed to providing fast, reliable and cost effective service and
              quality products to the structural steel industry, particularly within the Power Transmission
              and Distribution sectors.
            </p>

            <p className="mt-4">
              Leveraged by the parent company in China, which boasts an impressive 300,000 ton annual
              capacity combined with 25 years of remarkable experience internationally, Hans Steel Canada
              is excited and eager to bring these qualities to Canada. We strive to provide our customers
              with outstanding experience, customer service, quality and cost.
            </p>
          </div>
        </section>

        {/* Four key description cards */}
        <section className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* FeatureCard component */}
            {/* FeatureCard component instances below (uses top-level FeatureCard) */}

            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} description={f.description} bgColor={f.bgColor}>
                {f.icon}
              </FeatureCard>
            ))}
          </div>
        </section>

        {/* Map and contact card */}
        <section className="mt-12">
          <div className="rounded-lg overflow-hidden shadow-lg h-72 sm:h-96">
            <iframe
              title="Hans Steel Canada - Map"
              src="https://www.google.com/maps?q=6+Sangster+Road+Uxbridge+ON+L9P+0G5&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default About
