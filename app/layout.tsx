import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://koditorg.example'),
  title: 'КОДИТОРГ — сопровождение предпринимателей по 44-ФЗ и 223-ФЗ',
  description:
    'Сопровождение заказчиков и поставщиков по 44-ФЗ и 223-ФЗ: документация, публикации в ЕИС, подготовка заявок и консультации по госзакупкам.',
  openGraph: {
    title: 'КОДИТОРГ — сопровождение по 44-ФЗ и 223-ФЗ',
    description:
      'Поддержка предпринимателей, заказчиков и поставщиков в сфере госзакупок: 44-ФЗ, 223-ФЗ, ЕИС, заявки, документация.',
    type: 'website',
    locale: 'ru_RU'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
