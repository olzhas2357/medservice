"use client";
import { useState } from "react";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
                alert("Вход выполнен ✅");
            } else {
                const userCred = await createUserWithEmailAndPassword(auth, email, password);
                // Сохраняем профиль в Firestore
                await setDoc(doc(db, "users", userCred.user.uid), {
                    email: email,
                    role: "patient", // можно изменить на "nurse"
                    createdAt: new Date(),
                });
                alert("Регистрация прошла успешно ✅");
            }
        } catch (err: any) {
            alert("Ошибка: " + err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 space-y-4">
            <h1 className="text-xl font-bold">{isLogin ? "Вход" : "Регистрация"}</h1>
            <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Пароль"
                className="w-full p-2 border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                {isLogin ? "Войти" : "Зарегистрироваться"}
            </button>
            <p
                className="text-sm text-blue-600 cursor-pointer text-center"
                onClick={() => setIsLogin(!isLogin)}
            >
                {isLogin ? "Нет аккаунта? Зарегистрироваться" : "Уже есть аккаунт? Войти"}
            </p>
        </form>
    );
}
