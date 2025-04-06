import Link from "next/link"
import { CalendarDays, Home, MessageCircle, Pill, Stethoscope, User } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Stethoscope className="h-6 w-6 text-emerald-600" />
            <span className="text-xl">MedService</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="/doctors" className="text-sm font-medium hover:underline underline-offset-4">
              Doctors
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm" className="hidden md:flex">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="hidden md:flex">
                Sign Up
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <User className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Professional Medical Care at Your Doorstep
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get access to qualified healthcare professionals for home visits and online consultations. Book
                  appointments, receive care, and manage your health with ease.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/services">
                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                      Book a Service
                    </Button>
                  </Link>
                  <Link href="/doctors">
                    <Button size="lg" variant="outline">
                      Find a Doctor
                    </Button>
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg?height=550&width=550"
                alt="Medical professionals"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                width={550}
                height={550}
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a wide range of medical services to meet your healthcare needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Home className="h-12 w-12 text-emerald-600" />
                <h3 className="text-xl font-bold">Home Nurse Visits</h3>
                <p className="text-center text-gray-500">
                  Professional nurses visit your home for IV drips, injections, and health measurements
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <MessageCircle className="h-12 w-12 text-emerald-600" />
                <h3 className="text-xl font-bold">Online Consultations</h3>
                <p className="text-center text-gray-500">
                  Connect with therapists, pediatricians, dermatologists and other specialists online
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Stethoscope className="h-12 w-12 text-emerald-600" />
                <h3 className="text-xl font-bold">Medical Examinations</h3>
                <p className="text-center text-gray-500">
                  Comprehensive health check-ups and specialized medical examinations
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Pill className="h-12 w-12 text-emerald-600" />
                <h3 className="text-xl font-bold">Lab Tests</h3>
                <p className="text-center text-gray-500">
                  Home collection of samples for laboratory tests in partnership with leading labs
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <CalendarDays className="h-12 w-12 text-emerald-600" />
                <h3 className="text-xl font-bold">Scheduled Care</h3>
                <p className="text-center text-gray-500">
                  Regular scheduled visits for ongoing treatments and monitoring
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <User className="h-12 w-12 text-emerald-600" />
                <h3 className="text-xl font-bold">Personalized Care</h3>
                <p className="text-center text-gray-500">Customized healthcare plans tailored to your specific needs</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Book a medical service in just a few simple steps
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-8">
              <div className="flex flex-col items-center space-y-2 p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-900">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Choose a Service</h3>
                <p className="text-center text-gray-500">
                  Select from our range of home visits, online consultations, or medical examinations
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-900">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Schedule & Location</h3>
                <p className="text-center text-gray-500">
                  Pick a convenient date and time, and provide your address for home services
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-900">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Receive Care</h3>
                <p className="text-center text-gray-500">
                  Our qualified medical professional will provide the service at the scheduled time
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12 px-4 md:px-6">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Stethoscope className="h-6 w-6 text-emerald-600" />
              <span className="text-xl">MedService</span>
            </Link>
            <p className="text-sm text-gray-500">Professional healthcare at your convenience</p>
          </div>
          <nav className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Link href="/terms" className="text-sm hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-sm hover:underline underline-offset-4">
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4 px-4 md:px-6">
            <p className="text-xs text-gray-500">© 2025 MedService. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

