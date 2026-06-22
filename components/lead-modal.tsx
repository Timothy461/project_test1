'use client';

import { useEffect, useMemo, useState } from 'react';
import { X } from 'lucide-react';

interface LeadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormState {
  name: string;
  contact: string;
}

const initialState: FormState = { name: '', contact: '' };

export function LeadModal({ open, onOpenChange }: LeadModalProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({ name: false, contact: false });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) {
      setForm(initialState);
      setTouched({ name: false, contact: false });
      setSubmitted(false);
      setSubmitting(false);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onOpenChange(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onOpenChange]);

  const errors = useMemo(
    () => ({
      name: form.name.trim().length < 2 ? 'Укажите имя' : '',
      contact: /^([\d\s()+-]{10,}|[^\s@]+@[^\s@]+\.[^\s@]+)$/.test(form.contact.trim())
        ? ''
        : 'Введите телефон или email'
    }),
    [form]
  );

  const isValid = !errors.name && !errors.contact;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ name: true, contact: true });
    if (!isValid || submitting) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
      <div className="absolute inset-0" onClick={() => onOpenChange(false)} aria-hidden="true" />
      <div className="backdrop-blur-panel relative z-10 w-full max-w-xl rounded-4xl border border-white/10 bg-panel/95 p-6 shadow-soft md:p-8">
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-200 transition hover:border-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-panel"
          aria-label="Закрыть форму"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 pr-12">
          <p className="mb-3 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-accent">
            Заявка на консультацию
          </p>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Обсудим задачу по 44-ФЗ или 223-ФЗ</h2>
          <p className="mt-3 max-w-lg text-sm leading-7 text-slate-300 md:text-base">
            Оставьте имя и телефон или email. Мы свяжемся с вами, уточним ситуацию и предложим подходящий формат сопровождения.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-3xl border border-sky-400/20 bg-sky-400/10 p-6 text-slate-100">
            Спасибо. Заявка принята. Связаться можно и напрямую: +7 978 122 7706.
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-slate-200">Имя</label>
              <input
                id="name"
                type="text"
                placeholder="Как к вам обращаться"
                value={form.name}
                onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-primary focus-visible:ring-2 focus-visible:ring-accent/60"
              />
              {touched.name && errors.name ? <p className="text-sm text-rose-300">{errors.name}</p> : null}
            </div>

            <div className="space-y-2">
              <label htmlFor="contact" className="text-sm text-slate-200">Телефон или email</label>
              <input
                id="contact"
                type="text"
                placeholder="+7 (...) или example@mail.ru"
                value={form.contact}
                onBlur={() => setTouched((prev) => ({ ...prev, contact: true }))}
                onChange={(event) => setForm((prev) => ({ ...prev, contact: event.target.value }))}
                className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-primary focus-visible:ring-2 focus-visible:ring-accent/60"
              />
              {touched.contact && errors.contact ? <p className="text-sm text-rose-300">{errors.contact}</p> : null}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex h-14 w-full items-center justify-center rounded-2xl bg-primary px-6 text-sm font-bold text-slate-950 transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-panel disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-primary"
            >
              {submitting ? 'Отправляем…' : 'Оставить заявку'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
