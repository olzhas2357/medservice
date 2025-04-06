import Link from "next/link"
import { Clock, Mail, MapPin, Phone, Stethoscope } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or need assistance? We're here to help you with all your healthcare needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <p className="text-gray-500 mt-2">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Send Message</Button>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="text-gray-500 mt-2">You can also reach us using the information below.</p>
              </div>
              <div className="grid gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-emerald-600" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-sm text-gray-500 mt-1">Call our customer support</p>
                        <p className="text-sm font-medium mt-2">+1 (555) 000-0000</p>
                        <p className="text-sm text-gray-500 mt-1">Available 24/7 for emergencies</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-emerald-600" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-gray-500 mt-1">Send us an email</p>
                        <p className="text-sm font-medium mt-2">support@medservice.com</p>
                        <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-emerald-600" />
                      <div>
                        <h3 className="font-medium">Main Office</h3>
                        <p className="text-sm text-gray-500 mt-1">Visit our headquarters</p>
                        <p className="text-sm font-medium mt-2">
                          123 Healthcare Avenue
                          <br />
                          Medical District
                          <br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-emerald-600" />
                      <div>
                        <h3 className="font-medium">Working Hours</h3>
                        <p className="text-sm text-gray-500 mt-1">Our office hours</p>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm mt-2">
                          <p>Monday - Friday:</p>
                          <p>8:00 AM - 8:00 PM</p>
                          <p>Saturday:</p>
                          <p>9:00 AM - 5:00 PM</p>
                          <p>Sunday:</p>
                          <p>Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Our Locations</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find MedService centers near you
                </p>
              </div>
            </div>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=1200"
                alt="Map of MedService locations"
                className="object-cover w-full h-full"
                width={1200}
                height={600}
              />
            </div>
            <div className="grid gap-6 mt-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Downtown Medical Center</CardTitle>
                  <CardDescription>123 Main Street, New York, NY 10001</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    <span className="font-medium">Phone:</span> +1 (555) 123-4567
                  </p>
                  <p className="text-sm mt-1">
                    <span className="font-medium">Hours:</span> 8:00 AM - 8:00 PM
                  </p>
                  <div className="mt-4">
                    <Link href="/centers/downtown">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Uptown Medical Center</CardTitle>
                  <CardDescription>456 Park Avenue, New York, NY 10022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    <span className="font-medium">Phone:</span> +1 (555) 234-5678
                  </p>
                  <p className="text-sm mt-1">
                    <span className="font-medium">Hours:</span> 8:00 AM - 8:00 PM
                  </p>
                  <div className="mt-4">
                    <Link href="/centers/uptown">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Brooklyn Medical Center</CardTitle>
                  <CardDescription>789 Atlantic Avenue, Brooklyn, NY 11217</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    <span className="font-medium">Phone:</span> +1 (555) 345-6789
                  </p>
                  <p className="text-sm mt-1">
                    <span className="font-medium">Hours:</span> 9:00 AM - 7:00 PM
                  </p>
                  <div className="mt-4">
                    <Link href="/centers/brooklyn">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/centers">
                <Button variant="outline">View All Medical Centers</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our services
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>How do I book a home nurse visit?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    You can book a home nurse visit by navigating to our Services page, selecting "Home Nurse Visit,"
                    and following the booking process. You'll need to select the specific service, choose a date and
                    time, and provide your address.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>What types of online consultations do you offer?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We offer online consultations with various specialists including general practitioners,
                    pediatricians, dermatologists, nutritionists, and more. You can select the type of specialist based
                    on your healthcare needs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How do I pay for services?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We accept multiple payment methods including credit/debit cards and cash (for home visits). We also
                    offer subscription plans that cover multiple services at a discounted rate.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>What if I need to cancel or reschedule an appointment?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    You can cancel or reschedule appointments through your account dashboard. We request that you
                    provide at least 24 hours notice for cancellations to avoid any cancellation fees.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Are your healthcare professionals licensed?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Yes, all our healthcare professionals are fully licensed, certified, and experienced in their
                    respective fields. We conduct thorough background checks and verify all credentials before
                    onboarding any healthcare provider.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/faq">
                <Button variant="outline">View All FAQs</Button>
              </Link>
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

