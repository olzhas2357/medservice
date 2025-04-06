"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarIcon, ChevronLeft, Clock, Home, MapPin } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HomeNursePage() {
  const [date, setDate] = useState<Date>()
  const [step, setStep] = useState(1)

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
            <Home className="h-5 w-5 text-emerald-600" />
            <h1 className="text-2xl font-bold">Home Nurse Visit</h1>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 1 ? "bg-emerald-600 text-white" : "bg-gray-200"}`}
                >
                  1
                </div>
                <span className="text-sm font-medium">Service</span>
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
                <CardTitle>Select Service</CardTitle>
                <CardDescription>Choose the type of home nurse service you need</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="iv-drip">
                  <div className="flex items-center space-x-2 border rounded-md p-4 mb-3">
                    <RadioGroupItem value="iv-drip" id="iv-drip" />
                    <Label htmlFor="iv-drip" className="flex-1 cursor-pointer">
                      <div className="font-medium">IV Drip / Infusion</div>
                      <div className="text-sm text-gray-500">Intravenous fluid administration</div>
                    </Label>
                    <div className="text-sm font-medium">From $50</div>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-4 mb-3">
                    <RadioGroupItem value="injection" id="injection" />
                    <Label htmlFor="injection" className="flex-1 cursor-pointer">
                      <div className="font-medium">Injection</div>
                      <div className="text-sm text-gray-500">Intramuscular or subcutaneous injection</div>
                    </Label>
                    <div className="text-sm font-medium">From $30</div>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-4 mb-3">
                    <RadioGroupItem value="blood-pressure" id="blood-pressure" />
                    <Label htmlFor="blood-pressure" className="flex-1 cursor-pointer">
                      <div className="font-medium">Blood Pressure Monitoring</div>
                      <div className="text-sm text-gray-500">Measurement and recording of blood pressure</div>
                    </Label>
                    <div className="text-sm font-medium">From $25</div>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-4 mb-3">
                    <RadioGroupItem value="blood-sugar" id="blood-sugar" />
                    <Label htmlFor="blood-sugar" className="flex-1 cursor-pointer">
                      <div className="font-medium">Blood Sugar Measurement</div>
                      <div className="text-sm text-gray-500">Glucose level testing</div>
                    </Label>
                    <div className="text-sm font-medium">From $25</div>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-4">
                    <RadioGroupItem value="wound-care" id="wound-care" />
                    <Label htmlFor="wound-care" className="flex-1 cursor-pointer">
                      <div className="font-medium">Wound Care</div>
                      <div className="text-sm text-gray-500">Cleaning and dressing of wounds</div>
                    </Label>
                    <div className="text-sm font-medium">From $40</div>
                  </div>
                </RadioGroup>
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
                <CardTitle>Schedule Your Visit</CardTitle>
                <CardDescription>Select a date, time and provide your address</CardDescription>
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
                    <Label htmlFor="address">Address</Label>
                    <div className="space-y-2">
                      <Input id="street" placeholder="Street address" />
                      <div className="grid grid-cols-2 gap-2">
                        <Input id="city" placeholder="City" />
                        <Input id="zip" placeholder="ZIP / Postal code" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes (optional)</Label>
                    <textarea
                      id="notes"
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Any special instructions or information for the nurse"
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
                    <h3 className="text-sm font-medium text-gray-500">Service</h3>
                    <div className="flex items-center justify-between">
                      <div className="font-medium">IV Drip / Infusion</div>
                      <div>$50.00</div>
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
                      <div>09:00 AM</div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-500">Location</h3>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                      <div>
                        123 Main Street, Apt 4B
                        <br />
                        New York, NY 10001
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Payment Method</h3>
                    <Tabs defaultValue="card">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="card">Card</TabsTrigger>
                        <TabsTrigger value="cash">Cash</TabsTrigger>
                        <TabsTrigger value="subscription">Subscription</TabsTrigger>
                      </TabsList>
                      <TabsContent value="card" className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input id="card-number" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" />
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="cash" className="pt-4">
                        <div className="rounded-md bg-gray-50 p-4 text-sm">
                          You will pay the nurse directly at the time of service. Please have the exact amount ready.
                        </div>
                      </TabsContent>
                      <TabsContent value="subscription" className="pt-4">
                        <div className="rounded-md bg-gray-50 p-4 text-sm">
                          This service will be covered by your active subscription plan. No additional payment required.
                        </div>
                      </TabsContent>
                    </Tabs>
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

