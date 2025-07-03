"use client";

import { useSearchParams } from "next/navigation";
// остальной импорт...

export default function ResetPasswordForm() {
    const searchParams = useSearchParams();
    const oobCode = searchParams.get("oobCode");

    // твоя логика reset-пароля здесь...
}
