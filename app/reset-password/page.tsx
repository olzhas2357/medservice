"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Stethoscope } from "lucide-react";

import {
  verifyPasswordResetCode,
  confirmPasswordReset,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();

  const oobCode = searchParams.get("oobCode");

  useEffect(() => {
    if (!oobCode) {
      setError("❌ Недействительная ссылка");
      return;
    }

    verifyPasswordResetCode(auth, oobCode)
        .then((email) => setEmail(email))
        .catch(() => setError("❌ Код недействителен или устарел"));
  }, [oobCode]);

  const handleReset = async () => {
    setError("");
    setMessage("");

    if (password.length < 8 || !/\d/.test(password) || !/[!@#$%^&*()_+]/.test(password)) {
      setError("❌ Пароль должен быть не менее 8 символов и содержать число и спецсимвол");
      return;
    }

    if (password !== confirmPassword) {
      setError("❌ Пароли не совпадают");
      return;
    }

    try {
      await confirmPasswordReset(auth, oobCode as string, password);
      setMessage("✅ Пароль успешно сброшен. Перенаправление на вход...");
      setTimeout(() => router.push("/login"), 2000);
    } catch (err: any) {
      setError("❌ Не удалось сбросить пароль: " + err.message);
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
              <CardTitle className="text-2xl font-bold">Create new password</CardTitle>
              <CardDescription>Enter a new password for {email}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">New password</Label>
                <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-xs text-gray-500">
                  Password must be at least 8 characters long and include a number and a special character
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm new password</Label>
                <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <Button
                  type="button"
                  className="w-full bg-emerald-600 hover:bg-emerald-900"
                  onClick={handleReset}
              >
                Reset password
              </Button>
              {message && <p className="text-green-600 text-sm text-center">{message}</p>}
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
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
  );
}
