"use client";

import Link from "next/link";
import {
  CalendarDays,
  Home,
  MessageCircle,
  Pill,
  Stethoscope,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
      <div className="flex flex-col min-h-screen">
        <header className="bg-white border-b sticky top-0 z-10">
          <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Stethoscope className="h-6 w-6 text-emerald-600" />
              <span className="text-xl">MedService</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4">
                Услуги
              </Link>
              <Link href="/doctors" className="text-sm font-medium hover:underline underline-offset-4">
                Врачи
              </Link>
              <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
                О нас
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
                Контакты
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="outline" size="sm" className="hidden md:flex">
                  Войти
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="hidden md:flex">
                  Регистрация
                </Button>
              </Link>
              <Button variant="ghost" size="icon" className="md:hidden">
                <User className="h-5 w-5" />
                <span className="sr-only">Меню пользователя</span>
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  MedService — инновационный подход к домашнему здравоохранению
                </h1>
                <p className="text-gray-600 text-sm md:text-base">
                  Наша миссия — сделать медицинскую помощь доступной, быстрой и надёжной. С нами вы можете вызвать
                  медсестру домой, получить онлайн-консультацию врача или записаться в партнёрскую клинику. Мы
                  объединяем технологии и заботу о здоровье, чтобы вы чувствовали себя уверенно каждый день.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row justify-center">
                  <Link href="/services">
                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                      Ознакомиться с услугами
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline">
                      Подробнее о нас
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Наши услуги</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Мы предоставляем разнообразные медицинские услуги для вашего удобства и здоровья.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <Home className="h-12 w-12 text-emerald-600"/>
                  <h3 className="text-xl font-bold">Выезд медсестры</h3>
                  <p className="text-center text-gray-500">
                    Уколы, капельницы и осмотры у вас дома
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <MessageCircle className="h-12 w-12 text-emerald-600"/>
                  <h3 className="text-xl font-bold">Онлайн-консультации</h3>
                  <p className="text-center text-gray-500">
                    Общение с врачами и специалистами дистанционно
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <Stethoscope className="h-12 w-12 text-emerald-600"/>
                  <h3 className="text-xl font-bold">Медицинские осмотры</h3>
                  <p className="text-center text-gray-500">
                    Общие осмотры и диагностика состояния здоровья
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <Pill className="h-12 w-12 text-emerald-600"/>
                  <h3 className="text-xl font-bold">Анализы на дому</h3>
                  <p className="text-center text-gray-500">
                    Сбор биоматериалов и доставка в лабораторию
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <CalendarDays className="h-12 w-12 text-emerald-600"/>
                  <h3 className="text-xl font-bold">Регулярные визиты</h3>
                  <p className="text-center text-gray-500">
                    Посещения по расписанию для длительного ухода
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <User className="h-12 w-12 text-emerald-600"/>
                  <h3 className="text-xl font-bold">Персональный уход</h3>
                  <p className="text-center text-gray-500">
                    Индивидуальные планы медицинского сопровождения
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Как это работает</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Всего 3 шага, чтобы получить помощь
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-8">
                <div className="flex flex-col items-center space-y-2 p-4">
                  <div
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-900">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold">Выберите услугу</h3>
                  <p className="text-center text-gray-500">
                    Укол, капельница или консультация
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 p-4">
                  <div
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-900">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold">Назначьте дату</h3>
                  <p className="text-center text-gray-500">
                    Укажите адрес и удобное время
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 p-4">
                  <div
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-900">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold">Получите помощь</h3>
                  <p className="text-center text-gray-500">
                    Медицинский работник приедет к вам в назначенное время
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t bg-gray-50">
          <div
              className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12 px-4 md:px-6">
            <div className="flex flex-col gap-2">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Stethoscope className="h-6 w-6 text-emerald-600"/>
                <span className="text-xl">MedService</span>
              </Link>
              <p className="text-sm text-gray-500">Надёжная медицинская помощь рядом</p>
            </div>
            <nav className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Link href="/terms" className="text-sm hover:underline underline-offset-4">
                Условия использования
              </Link>
              <Link href="/privacy" className="text-sm hover:underline underline-offset-4">
                Политика конфиденциальности
              </Link>
              <Link href="/contact" className="text-sm hover:underline underline-offset-4">
                Связаться с нами
              </Link>
            </nav>
          </div>
          <div className="border-t py-6">
            <div
                className="container flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4 px-4 md:px-6">
              <p className="text-xs text-gray-500">© 2025 MedService</p>
            </div>
          </div>
        </footer>
      </div>
  );
}
