"use client";
import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

// export default function PatientProfile() {
//     const [userData, setUserData] = useState<any>(null);
//     const [loading, setLoading] = useState(true);
//     const router = useRouter();
//
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
//             if (!firebaseUser) {
//                 router.push("/login");
//                 return;
//             }
//
//             const userRef = doc(db, "users", firebaseUser.uid);
//             const userSnap = await getDoc(userRef);
//             if (userSnap.exists()) {
//                 setUserData(userSnap.data());
//             }
//
//             setLoading(false);
//         });
//
//         return () => unsubscribe();
//     }, [router]);
//
//     if (loading) return <div className="text-center p-10">Загрузка...</div>;
//     if (!userData) return <div className="text-center text-red-500 p-10">Пользователь не найден</div>;
//
//     return (
//         <div className="p-6 max-w-md mx-auto space-y-4">
//             <h1 className="text-2xl font-bold">👤 Профиль пациента</h1>
//             <p><strong>Имя:</strong> {userData.firstName} {userData.lastName}</p>
//             <p><strong>Email:</strong> {userData.email}</p>
//             <p><strong>Телефон:</strong> {userData.phone}</p>
//             <p><strong>Роль:</strong> Пациент</p>
//         </div>
//     );
// }
export default function PatientProfile() {
    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold">👤 Профиль пациента</h1>
            <p>Здесь будет: заявки, история вызовов, кнопка "создать заявку"</p>
        </div>
    );
}
