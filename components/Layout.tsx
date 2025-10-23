import React, { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/images/steel-tower.jpg" alt="Hans Steel" width={140} height={40} style={{ objectFit: 'contain' }} />
          <div className="text-sm text-gray-600">6 Sangster Road, Uxbridge, ON</div>
        </div>
        <nav className="space-x-6 hidden md:block">
          <Link className="text-gray-700 hover:text-gray-900" href="/">Home</Link>
          <Link className="text-gray-700 hover:text-gray-900" href="/projects">Projects</Link>
          <Link className="text-gray-700 hover:text-gray-900" href="/services">Services</Link>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h6 className="font-semibold">Contact Us</h6>
          <p className="mt-2 text-sm">+1 905-640-1000</p>
          <p className="text-sm">6 Sangster Road, Uxbridge, ON, L9P 0G5</p>
        </div>
        <div>
          <h6 className="font-semibold">Site Map</h6>
          <ul className="mt-2 text-sm space-y-1">
            <li>Services</li>
            <li>Projects</li>
            <li>Equipment</li>
          </ul>
        </div>
        <div className="text-right">
          <Image src="/images/steel-tower.jpg" alt="Hans Steel" width={120} height={36} style={{ objectFit: 'contain' }} />
        </div>
      </div>
    </footer>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
