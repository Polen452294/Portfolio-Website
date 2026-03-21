import {
  Bot,
  BrainCircuit,
  Database,
  Workflow,
  Search,
  MessageCircleMore,
  Inbox,
  Repeat,
} from "lucide-react";

export const services = [
  {
    title: "Перенос ботов из Telegram в Max или VK",
    text: "Адаптация существующих Telegram-ботов под Max / VK: перенос логики, сценариев, уведомлений, заявок и ключевых функций без необходимости создавать проект с нуля.",
    icon: Repeat,
  },
  {
    icon: Bot,
    title: "Telegram боты",
    text: "Боты для продаж, заявок, уведомлений, поддержки и автоматизации внутренних процессов.",
  },
  {
    icon: MessageCircleMore,
    title: "Max боты",
    text: "Боты в Max для общения с клиентами, приема обращений, уведомлений и автоматизации сценариев.",
  },
  {
    icon: Search,
    title: "Парсеры",
    text: "Парсеры для сайтов, платформ и внутренних источников данных с фильтрацией, обработкой и сохранением результатов.",
  },
  {
    icon: Inbox,
    title: "Системы привлечения клиентов",
    text: "Системы приема обращений, контактные сценарии, backend-логика, интеграции и дальнейшая автоматизация обработки.",
  },
  {
    icon: Workflow,
    title: "CRM и API Интеграции",
    text: "Интеграции с CRM, внешними сервисами, оплатами, вебхуками и очередями задач.",
  },
  {
    icon: BrainCircuit,
    title: "AI Автоматизация",
    text: "AI-функции, генерация контента, классификация, интеллектуальные сценарии и ассистенты.",
  },
  {
    icon: Database,
    title: "Backend Системы",
    text: "FastAPI, PostgreSQL, очереди, фоновые воркеры, админ-панели и production-архитектура.",
  },
];

export const portfolio = [
  {
    title: "BookMarket Project",
    stack: "Python, aiogram, PostgreSQL, SQLAlchemy, AsyncIO, Admin Tools",
    text: "Платформа для работы с каталогом книг, заявками и административным управлением: удобная структура, автоматизация обработки данных и инструменты для сопровождения пользователей.",
    githubUrl: "https://github.com/Polen452294/BookMarket_Bot_Project",
  },
  {
    title: "Consultation Bot",
    stack: "Python, aiogram, PostgreSQL, SQLAlchemy, AsyncIO, Payment Integration, Admin Tools",
    text: "Бот для приема и обработки заявок на консультации с удобной логикой взаимодействия, хранением данных, административным управлением и автоматизацией ключевых этапов работы с клиентом.",
    githubUrl: "https://github.com/Polen452294/Consultation_bot",
  },
  {
    title: "Парсер Profi.ru",
    stack: "Python, Telethon, AsyncIO, Excel, Data Processing, Automation",
    text: "Инструмент для автоматического поиска и обработки новых заказов с Profi.ru: сбор данных, фильтрация подходящих заявок и подготовка результатов для дальнейшей работы.",
    githubUrl: "https://github.com/Polen452294/Profi.ru_Parser_Bot",
  },
];

export const processSteps = [
  "Первичный контакт и вводные",
  "Обсуждение задач и требований",
  "Прототип и архитектура",
  "Разработка и тестирование",
  "Запуск и поддержка",
];

export const techStack = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "SQLAlchemy",
  "Docker",
  "Next.js",
  "Tailwind",
  "Framer Motion",
  "Telegram API",
  "Max API",
  "VK API",
  "CRM API",
  "OpenAI / Anthropic",
];

export const metrics = [
  { value: "10+", label: "типов автоматизации" },
  { value: "24/7", label: "сценарии без ручной рутины" },
  { value: "API", label: "интеграции и обмен данными" },
  { value: "AI", label: "умные сценарии" },
];