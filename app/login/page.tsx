"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { Facebook, Github, Stethoscope } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

// import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    setError("");

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCred.user.uid;

      const docSnap = await getDoc(doc(db, "users", uid));
      const userData = docSnap.data();

      if (!userData) {
        setError("❌ Пользователь не найден в Firestore.");
        return;
      }

      if (userData.role === "nurse") {
        router.push("/profile/nurse");
      } else {
        router.push("/profile/patient");
      }
    } catch (err: any) {
      setError("❌ Ошибка входа: " + err.message);
    }
  };

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
              <CardTitle className="text-2xl font-bold">Login to your account</CardTitle>
              <CardDescription>Enter your email and password to access your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="text-sm text-emerald-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                    id="password"
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Remember me
                </Label>
              </div>
              <Button
                  type="button"
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                  onClick={handleLogin}
              >
                Login
              </Button>

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline">
                  <Facebook className="mr-2 h-4 w-4" />
                  Facebook
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-sm text-center">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-emerald-600 hover:underline">
                  Sign up
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
  );
}
