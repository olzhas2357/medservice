"use client";

import Link from "next/link"
import { MapPin, Phone, Stethoscope, SmileIcon as Tooth } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MedicalCentersPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Medical Centers</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find a MedService center near you for quality healthcare services
                </p>
              </div>
              <div className="w-full max-w-sm">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input type="text" placeholder="Enter your location" className="pl-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="medical">Medical</TabsTrigger>
                  <TabsTrigger value="dental">Dental</TabsTrigger>
                  <TabsTrigger value="specialty">Specialty</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Downtown Medical Center</CardTitle>
                      <CardDescription>Full-service medical facility</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="Downtown Medical Center"
                          className="object-cover w-full h-full"
                          width={400}
                          height={200}
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Primary Care
                        </Badge>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Specialists
                        </Badge>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Lab Services
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                          <span>123 Main Street, New York, NY 10001</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-500 mr-2" />
                          <span>+1 (555) 123-4567</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/centers/downtown" className="w-full">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Center</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Uptown Medical Center</CardTitle>
                      <CardDescription>Comprehensive healthcare services</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="Uptown Medical Center"
                          className="object-cover w-full h-full"
                          width={400}
                          height={200}
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Primary Care
                        </Badge>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Pediatrics
                        </Badge>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Imaging
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                          <span>456 Park Avenue, New York, NY 10022</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-500 mr-2" />
                          <span>+1 (555) 234-5678</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/centers/uptown" className="w-full">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Center</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Brooklyn Medical Center</CardTitle>
                      <CardDescription>Family-focused healthcare</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="Brooklyn Medical Center"
                          className="object-cover w-full h-full"
                          width={400}
                          height={200}
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Family Medicine
                        </Badge>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Urgent Care
                        </Badge>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Pharmacy
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                          <span>789 Atlantic Avenue, Brooklyn, NY 11217</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-500 mr-2" />
                          <span>+1 (555) 345-6789</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/centers/brooklyn" className="w-full">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Center</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Tooth className="h-5 w-5 text-emerald-600" />
                        <CardTitle>Brooklyn Dental Center</CardTitle>
                      </div>
                      <CardDescription>Comprehensive dental care</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="Brooklyn Dental Center"
                          className="object-cover w-full h-full"
                          width={400}
                          height={200}
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                          General Dentistry
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                          Cosmetic
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                          Orthodontics
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                          <span>567 Fulton Street, Brooklyn, NY 11217</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-500 mr-2" />
                          <span>+1 (555) 456-7890</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/centers/brooklyn-dental" className="w-full">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Center</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Tooth className="h-5 w-5 text-emerald-600" />
                        <CardTitle>Manhattan Dental Specialists</CardTitle>
                      </div>
                      <CardDescription>Advanced dental treatments</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="Manhattan Dental Specialists"
                          className="object-cover w-full h-full"
                          width={400}
                          height={200}
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                          Cosmetic Dentistry
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                          Implants
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                          Oral Surgery
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                          <span>890 Fifth Avenue, New York, NY 10021</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-500 mr-2" />
                          <span>+1 (555) 567-8901</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/centers/manhattan-dental" className="w-full">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Center</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Queens Medical Specialists</CardTitle>
                      <CardDescription>Multi-specialty medical center</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="Queens Medical Specialists"
                          className="object-cover w-full h-full"
                          width={400}
                          height={200}
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Cardiology
                        </Badge>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Neurology
                        </Badge>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Orthopedics
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                          <span>234 Queens Blvd, Queens, NY 11435</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-500 mr-2" />
                          <span>+1 (555) 678-9012</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/centers/queens" className="w-full">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Center</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="medical" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Downtown Medical Center</CardTitle>
                      <CardDescription>Full-service medical facility</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="Downtown Medical Center"
                          className="object-cover w-full h-full"
                          width={400}
                          height={200}
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Primary Care
                        </Badge>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Specialists
                        </Badge>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Lab Services
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                          <span>123 Main Street, New York, NY 10001</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-500 mr-2" />
                          <span>+1 (555) 123-4567</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/centers/downtown" className="w-full">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Center</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Uptown Medical Center</CardTitle>
                      <CardDescription>Comprehensive healthcare services</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="Uptown Medical Center"
                          className="object-cover w-full h-full"
                          width={400}
                          height={200}
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Primary Care
                        </Badge>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Pediatrics
                        </Badge>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Imaging
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                          <span>456 Park Avenue, New York, NY 10022</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-500 mr-2" />
                          <span>+1 (555) 234-5678</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/centers/uptown" className="w-full">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Center</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Brooklyn Medical Center</CardTitle>
                      <CardDescription>Family-focused healthcare</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="Brooklyn Medical Center"
                          className="object-cover w-full h-full"
                          width={400}
                          height={200}
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Family Medicine
                        </Badge>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Urgent Care
                        </Badge>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Pharmacy
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                          <span>789 Atlantic Avenue, Brooklyn, NY 11217</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-500 mr-2" />
                          <span>+1 (555) 345-6789</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/centers/brooklyn" className="w-full">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Center</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="dental" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Tooth className="h-5 w-5 text-emerald-600" />
                        <CardTitle>Brooklyn Dental Center</CardTitle>
                      </div>
                      <CardDescription>Comprehensive dental care</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="Brooklyn Dental Center"
                          className="object-cover w-full h-full"
                          width={400}
                          height={200}
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                          General Dentistry
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                          Cosmetic
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                          Orthodontics
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                          <span>567 Fulton Street, Brooklyn, NY 11217</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-500 mr-2" />
                          <span>+1 (555) 456-7890</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/centers/brooklyn-dental" className="w-full">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Center</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Tooth className="h-5 w-5 text-emerald-600" />
                        <CardTitle>Manhattan Dental Specialists</CardTitle>
                      </div>
                      <CardDescription>Advanced dental treatments</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="Manhattan Dental Specialists"
                          className="object-cover w-full h-full"
                          width={400}
                          height={200}
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                          Cosmetic Dentistry
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                          Implants
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                          Oral Surgery
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                          <span>890 Fifth Avenue, New York, NY 10021</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-500 mr-2" />
                          <span>+1 (555) 567-8901</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/centers/manhattan-dental" className="w-full">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Center</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Tooth className="h-5 w-5 text-emerald-600" />
                        <CardTitle>Queens Dental Care</CardTitle>
                      </div>
                      <CardDescription>Family dental practice</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="Queens Dental Care"
                          className="object-cover w-full h-full"
                          width={400}
                          height={200}
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                          Family Dentistry
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                          Pediatric
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                          Preventive Care
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                          <span>345 Queens Blvd, Queens, NY 11435</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-500 mr-2" />
                          <span>+1 (555) 789-0123</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/centers/queens-dental" className="w-full">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Center</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="specialty" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Queens Medical Specialists</CardTitle>
                      <CardDescription>Multi-specialty medical center</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="Queens Medical Specialists"
                          className="object-cover w-full h-full"
                          width={400}
                          height={200}
                        />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Cardiology
                        </Badge>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Neurology
                        </Badge>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                          Orthopedics
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                          <span>234 Queens Blvd, Queens, NY 11435</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-500 mr-2" />
                          <span>+1 (555) 678-9012</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/centers/queens" className="w-full">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Center</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Find a Center Near You</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our medical centers are conveniently located throughout the city
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

