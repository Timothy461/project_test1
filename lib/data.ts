import { FileText, Gavel, ShieldCheck, BadgeCheck, Users, BarChart3 } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  icon: LucideIcon;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export const services: ServiceItem[] = [
  {
    id: 'full-support',
    title: 'Комплексное сопровождение закупок',
    description: 'Поддержка заказчиков и поставщиков по 44-ФЗ и 223-ФЗ: от планирования до закрытия процедуры.',
    price: 'от 25 000 ₽ / месяц',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200&h=900',
    icon: FileText
  },
  {
    id: 'application',
    title: 'Подготовка заявок и документов',
    description: 'Проверка требований, оформление пакета документов, снижение риска отклонения заявки.',
    price: 'от 7 500 ₽ / процедура',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200&h=900',
    icon: ShieldCheck
  },
  {
    id: 'eis',
    title: 'Публикации в ЕИС и процедурная поддержка',
    description: 'Размещение сведений, сопровождение изменений, помощь с публикациями и рабочими регламентами.',
    price: 'от 12 000 ₽ / задача',
    image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=1200&h=900',
    icon: Gavel
  }
];

export const stats: StatItem[] = [
  { label: 'Фокус на 44-ФЗ и 223-ФЗ', value: '2 ключевых закона' },
  { label: 'Основные сценарии помощи', value: '6 направлений' },
  { label: 'Формат поддержки', value: 'Онлайн + Севастополь' }
];

export const trustPoints = [
  {
    title: 'Актуальные требования',
    description: 'Проверяем документы и рабочие шаблоны под текущие требования процедуры.',
    icon: BadgeCheck
  },
  {
    title: 'Снижение процедурных рисков',
    description: 'Помогаем сократить вероятность штрафов, жалоб и отклонений из-за ошибок в документах.',
    icon: Users
  },
  {
    title: 'Понятная экономика участия',
    description: 'Даём практичную оценку нагрузки, сроков и действий до подачи заявки или публикации.',
    icon: BarChart3
  }
] as const;

export const testimonials: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Ирина К.',
    role: 'Поставщик строительных материалов',
    quote: 'С помощью КОДИТОРГ быстро собрали пакет документов и подали заявку без лишних доработок.'
  },
  {
    id: 't2',
    name: 'Александр М.',
    role: 'Муниципальный заказчик',
    quote: 'Получили понятную поддержку по публикациям и документации, когда внутреннего ресурса не хватало.'
  },
  {
    id: 't3',
    name: 'Елена С.',
    role: 'Малый бизнес, услуги',
    quote: 'Стало проще ориентироваться в процедурах и оценивать, в какие закупки стоит заходить.'
  }
];
