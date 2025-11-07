import React, { ReactNode, useState } from 'react'
import Link from 'next/link'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const headerMenu = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Equipment', href: '/equipment' },
    { label: 'About Us', href: '/about' },
  ];

  return (
    <header className="bg-white">
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between text-xs py-2">
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+19056401000" className="flex items-center gap-1 text-gray-700 hover:text-red-700 transition-colors">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (905) 640-1000
              </a>
              <a href="tel:+19056403000" className="flex items-center gap-1 text-gray-700 hover:text-red-700 transition-colors">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (905) 640-3000
              </a>
            </div>
            <div className="hidden md:flex items-center gap-1 text-gray-600">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              6 Sangster Road, Uxbridge, ON, L9P 0G5
            </div>
            <div className="md:hidden text-gray-600 text-xs">
              <a href="tel:+19056401000" className="hover:text-red-700">+1 (905) 640-1000</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <Link href="/" className="flex-shrink-0">
              <div className="bg-[#c41e3a] text-white px-4 py-2.5 font-bold leading-tight">
                <div className="text-lg">HANS STEEL</div>
                <div className="text-sm">CANADA</div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              {headerMenu.map((item) => (
                <Link key={item.href} className="text-gray-700 hover:text-[#c41e3a] transition-colors" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#c41e3a] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-gray-200">
              {headerMenu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 text-gray-700 hover:text-[#c41e3a] hover:bg-gray-50 transition-colors px-4 -mx-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

export function Footer() {
  const footerMenu = [
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Equipment', href: '/equipment' },
    { label: 'About Us', href: '/about' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Privacy Settings', href: '/settings' },
  ];
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-base mb-4">Brochure</h3>
            <div className="inline-block">
              <div className="bg-white/10 p-4 rounded">
                <div className="bg-[#c41e3a] text-white px-3 py-2 text-xs font-bold leading-tight mb-3">
                  <div>HANS STEEL</div>
                  <div>CANADA</div>
                </div>
                <div className="space-y-1.5 text-xs">
                  <Link href="/brochure" className="block text-white hover:text-[#c41e3a] transition-colors">View Online</Link>
                  <a href="/pdf/brochure.pdf" className="block text-white hover:text-[#c41e3a] transition-colors">PDF Download</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4">Site Map</h3>


            <ul className="space-y-2 text-sm">
              {footerMenu.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[#c41e3a] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+19056401000" className="hover:text-[#c41e3a] transition-colors">+1 905 640 1000</a>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+19056403000" className="hover:text-[#c41e3a] transition-colors">+1 (905) 640 3000</a>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  6 Sangster Road<br />
                  Uxbridge, ON, L9P 0G5
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#c41e3a] text-white px-5 py-4 font-bold leading-tight inline-block mb-6">
              <div className="text-xl">HANS STEEL</div>
              <div className="text-base">CANADA</div>
            </div>
            <div className="text-sm">
              <p className="text-gray-400">© {new Date().getFullYear()} All Rights Reserved</p>
              <p className="font-semibold mt-2">HANS STEEL CANADA</p>
            </div>
          </div>
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
