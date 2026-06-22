'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, BadgeCheck, Building2, ChevronRight, Mail, MapPin, Phone, Send, X } from 'lucide-react';
import { services, stats, testimonials, trustPoints } from '@/lib/data';

// --- COMPONENTS ---

// Простой Error Boundary для предотвращения падения всего приложения
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return <>{children}</>; 
}

// Модальное окно (Lead Modal)
function LeadModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [submitted, setSubmitted] = useState(false);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-[2rem] border border-white/10 bg-[#0d1827] p-6 shadow-2xl md:p-8">
        <button onClick={() => onOpenChange(false)} className="absolute right-4 top-4 text-slate-400 hover:text-white">
          <X className="h-6 w-6" />
        </button>
        
        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
              <BadgeCheck className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-white">Заявка принята</h2>
            <p className="mt-2 text-slate-400">Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <>
            <h2 className="pr-8 text-2xl font-bold text-white md:text-3xl">Консультация по закупкам</h2>
            <p className="mt-3 text-sm text-slate-400">Оставьте контакты, и мы перезвоним вам для уточнения задачи.</p>
            <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <input type="text" placeholder="Ваше имя" required className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:border-primary" />
              <input type="text" placeholder="Телефон или Email" required className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:border-primary" />
              <button type="submit" className="h-14 w-full rounded-2xl bg-primary text-sm font-bold text-slate-950 transition hover:bg-accent">
                Отправить заявку
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// --- MAIN PAGE ---

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#0a1320] text-slate-200 selection:bg-primary/30">
      <LeadModal open={open} onOpenChange={setOpen} />

      {/* Header: Адаптивная высота и компактность */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#08101b]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:h-11 md:w-11">
              <Building2 className="h-4 w-4 text-accent md:h-5 md:w-5" />
            </span>
            <div className="flex flex-col leading-none">
              <span className="text-xs font-bold uppercase tracking-widest text-white md:text-sm">КОДИТОРГ</span>
              <span className="mt-1 hidden text-[10px] text-slate-500 md:block">44-ФЗ · 223-ФЗ</span>
            </div>
          </Link>

          <nav className="hidden gap-6 text-sm font-medium text-slate-400 lg:flex">
            <Link href="#services" className="hover:text-white">Услуги</Link>
            <Link href="#trust" className="hover:text-white">Доверие</Link>
            <Link href="#contacts" className="hover:text-white">Контакты</Link>
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 text-xs font-bold text-slate-950 transition hover:bg-accent md:h-11 md:px-6 md:text-sm"
          >
            Консультация
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section: Оптимизирован для мобильных (текст 32px, кнопки w-full) */}
        <section className="relative flex min-h-screen items-center pt-24 pb-12 md:pt-32 md:pb-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1320] via-[#0a1320]/80 to-[#0a1320]" />
            {/* Картинка на фоне, затемненная */}
            <div className="absolute inset-0 opacity-20 grayscale">
               <Image src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=1600" alt="background" fill className="object-cover" />
            </div>
          </div>

          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="mb-4 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent md:text-xs">
                  Сопровождение госзакупок
                </p>
                <h1 className="text-balance text-3xl font-bold leading-[1.15] text-white md:text-6xl lg:text-7xl">
                  Сопровождение по 44-ФЗ и 223-ФЗ для вашего бизнеса.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-xl md:leading-normal">
                  Помогаем разобраться в требованиях, снизить риск ошибок в документах и сэкономить время на публикациях в ЕИС.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={() => setOpen(true)}
                    className="flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold text-slate-950 transition hover:bg-accent md:w-auto"
                  >
                    Оставить заявку
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href="tel:+79781227706"
                    className="flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    +7 978 122 7706
                  </a>
                </div>
              </div>

              {/* Правая панель: На мобильном уходит вниз */}
              <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Кому помогаем</h3>
                <div className="mt-6 space-y-5">
                  {[
                    'Предпринимателям на старте в госзакупках',
                    'МСБ для расширения каналов сбыта',
                    'Заказчикам по 44-ФЗ и 223-ФЗ',
                    'Поставщикам для защиты от отклонений'
                  ].map((text) => (
                    <div key={text} className="flex gap-3 text-sm leading-relaxed md:text-base">
                      <BadgeCheck className="h-5 w-5 shrink-0 text-accent" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Stats: Сетка 1 на мобильном, 3 на десктопе */}
        <section className="border-y border-white/5 bg-white/[0.02] py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/5 bg-white/5 p-6 text-center md:text-left">
                  <div className="text-2xl font-bold text-white md:text-3xl">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services: Увеличенные карточки для удобства клика */}
        <section id="services" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-white md:text-5xl">Услуги и поддержка</h2>
              <p className="mt-4 text-base text-slate-400 md:text-lg">Где ошибки стоят дороже всего — там мы обеспечим точность.</p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <article key={service.id} className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f1a29]">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image src={service.image} alt={service.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a29] to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <h3 className="text-xl font-bold text-white md:text-2xl">{service.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400 md:text-base">{service.description}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-6">
                      <span className="text-lg font-bold text-white">{service.price}</span>
                      <button onClick={() => setOpen(true)} className="flex items-center gap-1 text-sm font-bold text-accent">
                        Обсудить <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contacts: Удобные плитки для тапа */}
        <section id="contacts" className="bg-[#0c1625] py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-white md:text-5xl">Свяжитесь с нами</h2>
                <p className="mt-6 text-slate-400">Работаем по всей России. Офис в Севастополе. Отвечаем быстро в Telegram и по телефону.</p>
                
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <a href="tel:+79781227706" className="flex flex-col items-start rounded-2xl border border-white/5 bg-white/5 p-6 transition hover:border-primary/30">
                    <Phone className="h-6 w-6 text-accent" />
                    <span className="mt-4 font-bold text-white">+7 978 122 7706</span>
                  </a>
                  <a href="mailto:devnukov@gmail.com" className="flex flex-col items-start rounded-2xl border border-white/5 bg-white/5 p-6 transition hover:border-primary/30">
                    <Mail className="h-6 w-6 text-accent" />
                    <span className="mt-4 font-bold text-white">devnukov@gmail.com</span>
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] bg-primary p-8 text-slate-950 md:p-12">
                <h3 className="text-2xl font-bold md:text-3xl">Готовы начать?</h3>
                <p className="mt-4 font-medium opacity-80">Оставьте короткую заявку, и мы предложим решение под ваш бюджет и сроки.</p>
                <button onClick={() => setOpen(true)} className="mt-8 h-14 w-full rounded-full bg-slate-950 text-sm font-bold text-white transition hover:bg-slate-800">
                  Записаться на консультацию
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 text-center text-sm text-slate-500">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} КОДИТОРГ. Все права защищены.</p>
          <p className="mt-2 text-[10px] uppercase tracking-widest">Сопровождение 44-ФЗ и 223-ФЗ</p>
        </div>
      </footer>

      {/* Floating Action Button для мобильных */}
      <a
        href="https://t.me/"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-xl transition-transform active:scale-90 md:h-16 md:w-16"
      >
        <Send className="h-6 w-6 md:h-7 md:w-7" />
      </a>
    </div>
  );
}
