"use client";

import { Suspense } from "react";
import ResetPasswordForm from "./ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
      <Suspense>
        <ResetPasswordForm />
      </Suspense>
  );
}
