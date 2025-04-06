import Link from "next/link"
import { CalendarDays, Clock, Home, MessageCircle, Pill, Stethoscope } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
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
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Medical Services</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose from our comprehensive range of healthcare services
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Home className="h-5 w-5 text-emerald-600" />
                    <CardTitle>Home Nurse Visits</CardTitle>
                  </div>
                  <CardDescription>Professional medical care in the comfort of your home</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>IV Drips and Infusions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Injections and Vaccinations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Blood Pressure Monitoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Blood Sugar Measurement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Wound Care and Dressing</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/services/home-nurse" className="w-full">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Book Now</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="h-5 w-5 text-emerald-600" />
                    <CardTitle>Online Consultations</CardTitle>
                  </div>
                  <CardDescription>Connect with specialists from anywhere</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>General Practitioner / Therapist</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Pediatrician</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Dermatologist</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Nutritionist</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Other Specialists (by schedule)</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/services/online-consultation" className="w-full">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Book Now</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Pill className="h-5 w-5 text-emerald-600" />
                    <CardTitle>Lab Tests</CardTitle>
                  </div>
                  <CardDescription>Home collection for laboratory tests</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Blood Tests</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Urine Analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>COVID-19 Testing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Hormone Panels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Other Laboratory Tests</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/services/lab-tests" className="w-full">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Book Now</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Stethoscope className="h-5 w-5 text-emerald-600" />
                    <CardTitle>Medical Examinations</CardTitle>
                  </div>
                  <CardDescription>Comprehensive health check-ups</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Annual Check-ups</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Pre-employment Examinations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Sports Medical Examinations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Specialized Health Assessments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Medical Certificates</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/services/medical-examinations" className="w-full">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Book Now</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarDays className="h-5 w-5 text-emerald-600" />
                    <CardTitle>Subscription Plans</CardTitle>
                  </div>
                  <CardDescription>Regular healthcare with subscription benefits</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Monthly Home Visits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Unlimited Online Consultations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Discounted Lab Tests</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Priority Scheduling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Personal Health Manager</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/services/subscription" className="w-full">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Plans</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-emerald-600" />
                    <CardTitle>Urgent Care</CardTitle>
                  </div>
                  <CardDescription>Quick medical assistance for non-emergency situations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Same-day Home Visits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Priority Online Consultations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Minor Illness Treatment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Prescription Services</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Medical Advice</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/services/urgent-care" className="w-full">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Book Now</Button>
                  </Link>
                </CardFooter>
              </Card>
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

