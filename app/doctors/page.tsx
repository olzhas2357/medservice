"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, MapPin, Search, Star, Stethoscope, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  // Sample data for doctors and nurses
  const medicalProfessionals = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      type: "doctor",
      specialty: "General Practitioner",
      image: "/placeholder.svg?height=150&width=150",
      rating: 4.9,
      reviews: 124,
      experience: "10 years",
      location: "Downtown Medical Center",
      availability: "Available today",
      about:
        "Dr. Johnson is a board-certified general practitioner with over 10 years of experience in family medicine. She specializes in preventive care and chronic disease management.",
      education: "MD from Johns Hopkins University",
      languages: ["English", "Spanish"],
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      type: "doctor",
      specialty: "Pediatrician",
      image: "/placeholder.svg?height=150&width=150",
      rating: 4.8,
      reviews: 98,
      experience: "8 years",
      location: "Uptown Medical Center",
      availability: "Available tomorrow",
      about:
        "Dr. Chen is a compassionate pediatrician dedicated to providing comprehensive care for children from infancy through adolescence. He has a special interest in childhood development and nutrition.",
      education: "MD from Stanford University",
      languages: ["English", "Mandarin"],
    },
    {
      id: 3,
      name: "Dr. Amelia Patel",
      type: "doctor",
      specialty: "Dermatologist",
      image: "/placeholder.svg?height=150&width=150",
      rating: 4.7,
      reviews: 86,
      experience: "12 years",
      location: "Downtown Medical Center",
      availability: "Available today",
      about:
        "Dr. Patel is a board-certified dermatologist specializing in medical, surgical, and cosmetic dermatology. She has expertise in treating various skin conditions including acne, eczema, and psoriasis.",
      education: "MD from University of Pennsylvania",
      languages: ["English", "Hindi", "Gujarati"],
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      type: "doctor",
      specialty: "Dentist",
      image: "/placeholder.svg?height=150&width=150",
      rating: 4.9,
      reviews: 112,
      experience: "15 years",
      location: "Brooklyn Dental Center",
      availability: "Available in 2 days",
      about:
        "Dr. Wilson is a highly skilled dentist with expertise in general, cosmetic, and restorative dentistry. He is committed to providing gentle, patient-centered dental care.",
      education: "DDS from NYU College of Dentistry",
      languages: ["English"],
    },
    {
      id: 5,
      name: "Emma Rodriguez, RN",
      type: "nurse",
      specialty: "Registered Nurse",
      image: "/placeholder.svg?height=150&width=150",
      rating: 4.9,
      reviews: 75,
      experience: "7 years",
      location: "Home Care Services",
      availability: "Available today",
      about:
        "Emma is a registered nurse with extensive experience in home healthcare. She specializes in IV therapy, wound care, and post-surgical care.",
      education: "BSN from Columbia University School of Nursing",
      languages: ["English", "Spanish"],
    },
    {
      id: 6,
      name: "David Kim, LPN",
      type: "nurse",
      specialty: "Licensed Practical Nurse",
      image: "/placeholder.svg?height=150&width=150",
      rating: 4.8,
      reviews: 63,
      experience: "5 years",
      location: "Home Care Services",
      availability: "Available tomorrow",
      about:
        "David is a licensed practical nurse with expertise in geriatric care, medication management, and vital signs monitoring. He is known for his compassionate approach to patient care.",
      education: "Nursing Diploma from New York City College of Technology",
      languages: ["English", "Korean"],
    },
    {
      id: 7,
      name: "Dr. Olivia Martinez",
      type: "doctor",
      specialty: "Dentist",
      image: "/placeholder.svg?height=150&width=150",
      rating: 4.7,
      reviews: 92,
      experience: "9 years",
      location: "Manhattan Dental Specialists",
      availability: "Available in 3 days",
      about:
        "Dr. Martinez specializes in cosmetic dentistry and smile makeovers. She is passionate about helping patients achieve their dream smiles through personalized treatment plans.",
      education: "DDS from Columbia University College of Dental Medicine",
      languages: ["English", "Spanish"],
    },
    {
      id: 8,
      name: "Sophia Lee, RN",
      type: "nurse",
      specialty: "Pediatric Nurse",
      image: "/placeholder.svg?height=150&width=150",
      rating: 4.9,
      reviews: 58,
      experience: "6 years",
      location: "Home Care Services",
      availability: "Available today",
      about:
        "Sophia is a pediatric nurse with specialized training in caring for children. She is skilled in administering medications, monitoring vital signs, and providing education to parents.",
      education: "BSN from NYU Rory Meyers College of Nursing",
      languages: ["English", "Mandarin"],
    },
  ]

  // Filter professionals based on search term and filters
  const filteredProfessionals = medicalProfessionals.filter((professional) => {
    const matchesSearch =
      professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      professional.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = selectedSpecialty === "all" || professional.specialty === selectedSpecialty
    const matchesType = selectedType === "all" || professional.type === selectedType

    return matchesSearch && matchesSpecialty && matchesType
  })

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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Find Your Healthcare Professional
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect with qualified doctors and nurses for your healthcare needs
                </p>
              </div>
              <div className="w-full max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search by name, specialty, or keyword..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold">Filters</h2>
                  <p className="text-sm text-gray-500 mt-1">Refine your search</p>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Professional Type</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="type-all"
                        checked={selectedType === "all"}
                        onCheckedChange={() => setSelectedType("all")}
                      />
                      <Label htmlFor="type-all" className="text-sm font-normal cursor-pointer">
                        All
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="type-doctor"
                        checked={selectedType === "doctor"}
                        onCheckedChange={() => setSelectedType("doctor")}
                      />
                      <Label htmlFor="type-doctor" className="text-sm font-normal cursor-pointer">
                        Doctors
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="type-nurse"
                        checked={selectedType === "nurse"}
                        onCheckedChange={() => setSelectedType("nurse")}
                      />
                      <Label htmlFor="type-nurse" className="text-sm font-normal cursor-pointer">
                        Nurses
                      </Label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-3">Specialty</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="specialty-all"
                        checked={selectedSpecialty === "all"}
                        onCheckedChange={() => setSelectedSpecialty("all")}
                      />
                      <Label htmlFor="specialty-all" className="text-sm font-normal cursor-pointer">
                        All Specialties
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="specialty-gp"
                        checked={selectedSpecialty === "General Practitioner"}
                        checked={selectedSpecialty === "General Practitioner"}
                        onCheckedChange={() => setSelectedSpecialty("General Practitioner")}
                      />
                      <Label htmlFor="specialty-gp" className="text-sm font-normal cursor-pointer">
                        General Practitioner
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="specialty-pediatrician"
                        checked={selectedSpecialty === "Pediatrician"}
                        onCheckedChange={() => setSelectedSpecialty("Pediatrician")}
                      />
                      <Label htmlFor="specialty-pediatrician" className="text-sm font-normal cursor-pointer">
                        Pediatrician
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="specialty-dermatologist"
                        checked={selectedSpecialty === "Dermatologist"}
                        onCheckedChange={() => setSelectedSpecialty("Dermatologist")}
                      />
                      <Label htmlFor="specialty-dermatologist" className="text-sm font-normal cursor-pointer">
                        Dermatologist
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="specialty-dentist"
                        checked={selectedSpecialty === "Dentist"}
                        onCheckedChange={() => setSelectedSpecialty("Dentist")}
                      />
                      <Label htmlFor="specialty-dentist" className="text-sm font-normal cursor-pointer">
                        Dentist
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="specialty-nurse"
                        checked={selectedSpecialty === "Registered Nurse"}
                        onCheckedChange={() => setSelectedSpecialty("Registered Nurse")}
                      />
                      <Label htmlFor="specialty-nurse" className="text-sm font-normal cursor-pointer">
                        Registered Nurse
                      </Label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-3">Availability</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="availability-today" />
                      <Label htmlFor="availability-today" className="text-sm font-normal cursor-pointer">
                        Available Today
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="availability-tomorrow" />
                      <Label htmlFor="availability-tomorrow" className="text-sm font-normal cursor-pointer">
                        Available Tomorrow
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="availability-week" />
                      <Label htmlFor="availability-week" className="text-sm font-normal cursor-pointer">
                        Available This Week
                      </Label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-3">Location</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="downtown">Downtown Medical Center</SelectItem>
                      <SelectItem value="uptown">Uptown Medical Center</SelectItem>
                      <SelectItem value="brooklyn">Brooklyn Medical Center</SelectItem>
                      <SelectItem value="dental">Brooklyn Dental Center</SelectItem>
                      <SelectItem value="manhattan">Manhattan Dental Specialists</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4">
                  <Button variant="outline" className="w-full">
                    Reset Filters
                  </Button>
                </div>
              </div>

              <div className="md:col-span-3">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">{filteredProfessionals.length} Healthcare Professionals</h2>
                  <Select defaultValue="rating">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">Sort by Rating</SelectItem>
                      <SelectItem value="experience">Sort by Experience</SelectItem>
                      <SelectItem value="availability">Sort by Availability</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-6">
                  {filteredProfessionals.map((professional) => (
                    <Card key={professional.id} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-6 flex flex-col items-center justify-center bg-gray-50">
                          <Avatar className="h-24 w-24 mb-3">
                            <AvatarImage src={professional.image} alt={professional.name} />
                            <AvatarFallback>
                              {professional.name.split(" ")[0][0]}
                              {professional.name.split(" ")[1][0]}
                            </AvatarFallback>
                          </Avatar>
                          <h3 className="font-bold text-center">{professional.name}</h3>
                          <p className="text-sm text-gray-500 text-center">{professional.specialty}</p>
                          <div className="flex items-center mt-2">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm ml-1">
                              {professional.rating} ({professional.reviews} reviews)
                            </span>
                          </div>
                        </div>
                        <div className="md:w-3/4 p-6">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                              {professional.experience} experience
                            </Badge>
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                              {professional.availability}
                            </Badge>
                            {professional.type === "doctor" && (
                              <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-50">
                                Doctor
                              </Badge>
                            )}
                            {professional.type === "nurse" && (
                              <Badge variant="outline" className="bg-pink-50 text-pink-700 hover:bg-pink-50">
                                Nurse
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm mb-4">{professional.about}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm mb-4">
                            <div className="flex items-center">
                              <User className="h-4 w-4 text-gray-500 mr-2" />
                              <span>{professional.education}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                              <span>{professional.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                              <span>Languages: {professional.languages.join(", ")}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            <Button className="bg-emerald-600 hover:bg-emerald-700">Book Appointment</Button>
                            <Button variant="outline">View Profile</Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {filteredProfessionals.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-lg font-medium">No healthcare professionals found matching your criteria.</p>
                    <p className="text-gray-500 mt-2">Try adjusting your filters or search term.</p>
                  </div>
                )}

                {filteredProfessionals.length > 0 && (
                  <div className="flex justify-center mt-8">
                    <Button variant="outline" className="mx-1">
                      Previous
                    </Button>
                    <Button variant="outline" className="mx-1 bg-emerald-50">
                      1
                    </Button>
                    <Button variant="outline" className="mx-1">
                      2
                    </Button>
                    <Button variant="outline" className="mx-1">
                      3
                    </Button>
                    <Button variant="outline" className="mx-1">
                      Next
                    </Button>
                  </div>
                )}
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

