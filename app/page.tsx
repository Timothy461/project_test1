'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, BadgeCheck, Building2, ChevronRight, Mail, Menu, Phone, Quote, Send, X } from 'lucide-react';
import { services, stats, testimonials, trustPoints } from '@/lib/data';
import { LeadModal } from '@/components/lead-modal';
import { ErrorBoundary } from '@/components/error-boundary';

// --- MAIN PAGE ---

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Услуги' },
    { href: '#trust', label: 'Доверие' },
    { href: '#contacts', label: 'Контакты' }
  ];

  return (
    <div className="bg-background text-slate-200 selection:bg-primary/30">
      <LeadModal open={open} onOpenChange={setOpen} />

      {/* Header: Адаптивная высота и компактность */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-header/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl md:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-header"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:h-11 md:w-11">
              <Building2 className="h-4 w-4 text-accent md:h-5 md:w-5" />
            </span>
            <div className="flex flex-col leading-none">
              <span className="text-xs font-bold uppercase tracking-widest text-white md:text-sm">КОДИТОРГ</span>
              <span className="mt-1 hidden text-[10px] text-slate-500 md:block">44-ФЗ · 223-ФЗ</span>
            </div>
          </Link>

          <nav className="hidden gap-6 text-sm font-medium text-slate-400 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-header hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 text-xs font-bold text-slate-950 transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-header md:h-11 md:px-6 md:text-sm"
            >
              Консультация
            </button>

            <button
              onClick={() => setMobileNavOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-header lg:hidden"
              aria-label={mobileNavOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={mobileNavOpen}
            >
              {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileNavOpen ? (
          <nav className="border-t border-white/5 bg-header/95 px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </header>

      <main>
        <ErrorBoundary>
        {/* Hero Section: Оптимизирован для мобильных (текст 32px, кнопки w-full) */}
        <section className="relative flex min-h-screen items-center pt-24 pb-12 md:pt-32 md:pb-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
            {/* Картинка на фоне, затемненная */}
            <div className="absolute inset-0 opacity-20 grayscale">
               <Image src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=1600" alt="background" fill className="object-cover" />
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
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
                    className="flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold text-slate-950 transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:w-auto"
                  >
                    Оставить заявку
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href="tel:+79781227706"
                    className="flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    +7 978 122 7706
                  </a>
                </div>
              </div>

              {/* Правая панель: На мобильном уходит вниз */}
              <aside className="rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8">
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
          <div className="mx-auto max-w-7xl px-4 md:px-6">
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
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-white md:text-5xl">Услуги и поддержка</h2>
              <p className="mt-4 text-base text-slate-400 md:text-lg">Где ошибки стоят дороже всего — там мы обеспечим точность.</p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <article key={service.id} className="group relative flex flex-col overflow-hidden rounded-4xl border border-white/10 bg-surface">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image src={service.image} alt={service.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <h3 className="text-xl font-bold text-white md:text-2xl">{service.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400 md:text-base">{service.description}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-6">
                      <span className="text-lg font-bold text-white">{service.price}</span>
                      <button onClick={() => setOpen(true)} className="flex items-center gap-1 rounded text-sm font-bold text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
                        Обсудить <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Trust: причины доверять компании */}
        <section id="trust" className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-white md:text-5xl">Доверие</h2>
              <p className="mt-4 text-base text-slate-400 md:text-lg">Почему клиенты обращаются к нам повторно.</p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {trustPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="rounded-4xl border border-white/10 bg-white/5 p-6 md:p-8">
                    <Icon className="h-8 w-8 text-accent" />
                    <h3 className="mt-4 text-lg font-bold text-white md:text-xl">{point.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">{point.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.id} className="rounded-4xl border border-white/5 bg-surface p-6 md:p-8">
                  <Quote className="h-6 w-6 text-accent" />
                  <blockquote className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-white/5 pt-4">
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Contacts: Удобные плитки для тапа */}
        <section id="contacts" className="bg-surface-alt py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-white md:text-5xl">Свяжитесь с нами</h2>
                <p className="mt-6 text-slate-400">Работаем по всей России. Офис в Севастополе. Отвечаем быстро в Telegram и по телефону.</p>
                
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <a href="tel:+79781227706" className="flex flex-col items-start rounded-2xl border border-white/5 bg-white/5 p-6 transition hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-alt">
                    <Phone className="h-6 w-6 text-accent" />
                    <span className="mt-4 font-bold text-white">+7 978 122 7706</span>
                  </a>
                  <a href="mailto:devnukov@gmail.com" className="flex flex-col items-start rounded-2xl border border-white/5 bg-white/5 p-6 transition hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-alt">
                    <Mail className="h-6 w-6 text-accent" />
                    <span className="mt-4 font-bold text-white">devnukov@gmail.com</span>
                  </a>
                </div>
              </div>

              <div className="rounded-4xl bg-primary p-8 text-slate-950 md:p-12">
                <h3 className="text-2xl font-bold md:text-3xl">Готовы начать?</h3>
                <p className="mt-4 font-medium opacity-80">Оставьте короткую заявку, и мы предложим решение под ваш бюджет и сроки.</p>
                <button onClick={() => setOpen(true)} className="mt-8 h-14 w-full rounded-full bg-slate-950 text-sm font-bold text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary">
                  Записаться на консультацию
                </button>
              </div>
            </div>
          </div>
        </section>
        </ErrorBoundary>
      </main>

      <footer className="border-t border-white/5 py-12 text-center text-sm text-slate-500">
        <div className="mx-auto max-w-7xl px-4">
          <p>© {new Date().getFullYear()} КОДИТОРГ. Все права защищены.</p>
          <p className="mt-2 text-[10px] uppercase tracking-widest">Сопровождение 44-ФЗ и 223-ФЗ</p>
        </div>
      </footer>

      {/* Floating Action Button для мобильных */}
      <a
        href="https://t.me/"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-xl transition-transform active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-16 md:w-16"
      >
        <Send className="h-6 w-6 md:h-7 md:w-7" />
      </a>
    </div>
  );
}
