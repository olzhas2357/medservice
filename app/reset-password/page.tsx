import Link from "next/link"
import { Stethoscope } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-white border-b">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Stethoscope className="h-6 w-6 text-emerald-600" />
            <span className="text-xl">MedService</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <Card className="mx-auto max-w-md w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Create new password</CardTitle>
            <CardDescription>Enter a new password for your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">New password</Label>
              <Input id="password" type="password" />
              <p className="text-xs text-gray-500">
                Password must be at least 8 characters long and include a number and a special character
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm new password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
              Reset password
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center">
              Remember your password?{" "}
              <Link href="/login" className="text-emerald-600 hover:underline">
                Login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container py-6 px-4 md:px-6">
          <p className="text-xs text-center text-gray-500">© 2025 MedService. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

