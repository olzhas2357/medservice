"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarIcon, ChevronLeft, Clock, MessageCircle } from "lucide-react"
import { format } from "date-fns"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OnlineConsultationPage() {
  const [date, setDate] = useState<Date>()
  const [step, setStep] = useState(1)
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null)

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const doctors = [
    {
      id: "dr-smith",
      name: "Dr. Sarah Smith",
      specialty: "General Practitioner",
      image: "/placeholder.svg?height=80&width=80",
      availability: "Today",
      rating: 4.9,
      reviews: 124,
    },
    {
      id: "dr-johnson",
      name: "Dr. Michael Johnson",
      specialty: "Pediatrician",
      image: "/placeholder.svg?height=80&width=80",
      availability: "Tomorrow",
      rating: 4.8,
      reviews: 98,
    },
    {
      id: "dr-patel",
      name: "Dr. Anita Patel",
      specialty: "Dermatologist",
      image: "/placeholder.svg?height=80&width=80",
      availability: "Today",
      rating: 4.7,
      reviews: 86,
    },
    {
      id: "dr-garcia",
      name: "Dr. Carlos Garcia",
      specialty: "Nutritionist",
      image: "/placeholder.svg?height=80&width=80",
      availability: "In 2 days",
      rating: 4.9,
      reviews: 112,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link href="/services" className="flex items-center gap-2 font-medium">
            <ChevronLeft className="h-4 w-4" />
            <span>Back to Services</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 container py-6 md:py-12 px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center gap-2 mb-8">
            <MessageCircle className="h-5 w-5 text-emerald-600" />
            <h1 className="text-2xl font-bold">Online Consultation</h1>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 1 ? "bg-emerald-600 text-white" : "bg-gray-200"}`}
                >
                  1
                </div>
                <span className="text-sm font-medium">Specialist</span>
              </div>
              <Separator className="w-12" />
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 2 ? "bg-emerald-600 text-white" : "bg-gray-200"}`}
                >
                  2
                </div>
                <span className="text-sm font-medium">Schedule</span>
              </div>
              <Separator className="w-12" />
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 3 ? "bg-emerald-600 text-white" : "bg-gray-200"}`}
                >
                  3
                </div>
                <span className="text-sm font-medium">Confirm</span>
              </div>
            </div>
          </div>

          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Select Specialist</CardTitle>
                <CardDescription>Choose the type of specialist you need to consult with</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="by-specialty">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="by-specialty">By Specialty</TabsTrigger>
                    <TabsTrigger value="by-doctor">By Doctor</TabsTrigger>
                  </TabsList>
                  <TabsContent value="by-specialty">
                    <RadioGroup>
                      <div className="flex items-center space-x-2 border rounded-md p-4 mb-3">
                        <RadioGroupItem value="general" id="general" />
                        <Label htmlFor="general" className="flex-1 cursor-pointer">
                          <div className="font-medium">General Practitioner</div>
                          <div className="text-sm text-gray-500">For general health concerns and consultations</div>
                        </Label>
                        <div className="text-sm font-medium">$40</div>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-4 mb-3">
                        <RadioGroupItem value="pediatrician" id="pediatrician" />
                        <Label htmlFor="pediatrician" className="flex-1 cursor-pointer">
                          <div className="font-medium">Pediatrician</div>
                          <div className="text-sm text-gray-500">For children's health issues</div>
                        </Label>
                        <div className="text-sm font-medium">$45</div>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-4 mb-3">
                        <RadioGroupItem value="dermatologist" id="dermatologist" />
                        <Label htmlFor="dermatologist" className="flex-1 cursor-pointer">
                          <div className="font-medium">Dermatologist</div>
                          <div className="text-sm text-gray-500">For skin-related concerns</div>
                        </Label>
                        <div className="text-sm font-medium">$50</div>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-4">
                        <RadioGroupItem value="nutritionist" id="nutritionist" />
                        <Label htmlFor="nutritionist" className="flex-1 cursor-pointer">
                          <div className="font-medium">Nutritionist</div>
                          <div className="text-sm text-gray-500">For diet and nutrition advice</div>
                        </Label>
                        <div className="text-sm font-medium">$45</div>
                      </div>
                    </RadioGroup>
                  </TabsContent>
                  <TabsContent value="by-doctor">
                    <div className="space-y-4">
                      {doctors.map((doctor) => (
                        <div
                          key={doctor.id}
                          className={`flex items-center space-x-4 border rounded-md p-4 cursor-pointer ${selectedDoctor === doctor.id ? "ring-2 ring-emerald-600" : ""}`}
                          onClick={() => setSelectedDoctor(doctor.id)}
                        >
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={doctor.image} alt={doctor.name} />
                            <AvatarFallback>
                              {doctor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="font-medium">{doctor.name}</div>
                            <div className="text-sm text-gray-500">{doctor.specialty}</div>
                            <div className="flex items-center mt-1">
                              <div className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                                Available {doctor.availability}
                              </div>
                              <div className="text-xs text-gray-500 ml-2">
                                ★ {doctor.rating} ({doctor.reviews} reviews)
                              </div>
                            </div>
                          </div>
                          <div className="text-sm font-medium">$45</div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button onClick={handleNext} className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Continue
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Schedule Your Consultation</CardTitle>
                <CardDescription>Select a date and time for your online appointment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="13:00">01:00 PM</SelectItem>
                        <SelectItem value="14:00">02:00 PM</SelectItem>
                        <SelectItem value="15:00">03:00 PM</SelectItem>
                        <SelectItem value="16:00">04:00 PM</SelectItem>
                        <SelectItem value="17:00">05:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason for Consultation</Label>
                    <textarea
                      id="reason"
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Briefly describe your symptoms or reason for the consultation"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button onClick={handleNext} className="bg-emerald-600 hover:bg-emerald-700">
                  Continue
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Confirm Your Booking</CardTitle>
                <CardDescription>Review your appointment details and payment method</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-500">Specialist</h3>
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Dr. Sarah Smith" />
                        <AvatarFallback>SS</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Dr. Sarah Smith</div>
                        <div className="text-sm text-gray-500">General Practitioner</div>
                      </div>
                      <div className="ml-auto">$40.00</div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-500">Date & Time</h3>
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-gray-500" />
                      <div>{date ? format(date, "PPP") : "Not selected"}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <div>10:00 AM</div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Payment Method</h3>
                    <Tabs defaultValue="card">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="card">Card</TabsTrigger>
                        <TabsTrigger value="subscription">Subscription</TabsTrigger>
                      </TabsList>
                      <TabsContent value="card" className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <input
                            id="card-number"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <input
                              id="expiry"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <input
                              id="cvc"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="123"
                            />
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="subscription" className="pt-4">
                        <div className="rounded-md bg-gray-50 p-4 text-sm">
                          This service will be covered by your active subscription plan. No additional payment required.
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>

                  <div className="rounded-md bg-emerald-50 p-4 text-sm">
                    <p className="font-medium text-emerald-800">How to join the consultation:</p>
                    <p className="mt-1 text-emerald-700">
                      You will receive a confirmation email with a link to join the video consultation. Make sure your
                      device has a working camera and microphone.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700">Confirm Booking</Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container py-6 px-4 md:px-6">
          <p className="text-xs text-center text-gray-500">© 2025 MedService. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

