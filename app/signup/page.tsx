"use client";
import Link from "next/link"
import { Stethoscope } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useState } from "react";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
export default function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("patient"); // patient по умолчанию
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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
            <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
            <CardDescription>Enter your information to create a MedService account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Zhanel" value={firstName}
                       onChange={(e) => setFirstName(e.target.value)}/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="first-name" placeholder="Talgatuly" value={lastName}
                       onChange={(e) => setLastName(e.target.value)}/>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" value={email}
                     onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" type="tel" placeholder="+7 (555) 000-0000" value={phone}
                     onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <p className="text-xs text-gray-500">
                Password must be at least 8 characters long and include a number and a special character
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm password</Label>
              <Input id="confirm-password" type="password" value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>
            <div className="space-y-2">
              <Label>Выберите роль:</Label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                      type="radio"
                      name="role"
                      value="patient"
                      checked={role === "patient"}
                      onChange={() => setRole("patient")}
                  />
                  <span>Пациент</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                      type="radio"
                      name="role"
                      value="nurse"
                      checked={role === "nurse"}
                      onChange={() => setRole("nurse")}
                  />
                  <span>Медицинский работник</span>
                </label>
              </div>
            </div>
            <Button
                type="button"
                disabled={loading}
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                onClick={async () => {
                  setError("");
                  setSuccess("");
                  setLoading(true);

                  if (password !== confirmPassword) {
                    setError("❌ Пароли не совпадают");
                    setLoading(false);
                    return;
                  }

                  try {
                    const userCred = await createUserWithEmailAndPassword(auth, email, password);
                    await setDoc(doc(db, "users", userCred.user.uid), {
                      firstName,
                      lastName,
                      email,
                      phone,
                      role,
                      createdAt: new Date(),
                    });

                    setSuccess("✅ Аккаунт успешно создан!");
                    setTimeout(() => router.push("/login"), 1000);
                  } catch (error: any) {
                    if (error.code === "auth/email-already-in-use") {
                      setError("❌ Этот email уже используется");
                    } else {
                      setError("❌ Ошибка: " + error.message);
                    }
                  } finally {
                    setLoading(false);
                  }
                }}
            >
              {loading ? "Создание..." : "Create account"}
            </Button>


            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full"/>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center">
              Already have an account?{" "}
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

