import Link from "next/link"
import {
  Flame,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="h-6 w-6 text-red-600" />
            <span className="text-xl font-bold">NSDF</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-red-600 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-red-600 transition-colors">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-red-600 transition-colors">
              Services
            </Link>
            <Link href="#volunteer" className="text-sm font-medium hover:text-red-600 transition-colors">
              Volunteer
            </Link>
            <Link href="#news" className="text-sm font-medium hover:text-red-600 transition-colors">
              News
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-red-600 transition-colors">
              Contact
            </Link>
          </nav>
          {/* <Button
            variant="outline"
            className="hidden md:inline-flex border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
          >
            Emergency: 911
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button> */}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-4">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative h-[600px]">
            {/* <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Firefighters in action"
              fill
              className="object-cover"
              priority
            /> */}
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              North Shore District
              <br />
              Volunteer Firefighters
            </h1>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t bg-slate-900 text-white px-4">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flame className="h-6 w-6 text-red-500" />
                <span className="text-xl font-bold">NSDF</span>
              </div>
              <p className="text-slate-400">Serving the North Shore District with pride and dedication since 1952.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-slate-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-slate-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#volunteer" className="text-slate-400 hover:text-white transition-colors">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="#news" className="text-slate-400 hover:text-white transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-slate-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Fire Safety Tips
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Emergency Preparedness
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Community Programs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                    Donation Information
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div>
              <h3 className="text-lg font-medium mb-4">Newsletter</h3>
              <p className="text-slate-400 mb-4">Subscribe to our newsletter for updates on events and safety tips.</p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-md bg-slate-800 border border-slate-700 text-white"
                />
                <Button className="w-full bg-red-600 hover:bg-red-700">Subscribe</Button>
              </form>
            </div> */}
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>© {new Date().getFullYear()} North Shore District Volunteer Firefighters. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
