import {
  Bot,
  BrainCircuit,
  Database,
  Workflow,
  Search,
  MessageCircleMore,
  Inbox,
} from "lucide-react";

export const services = [
  {
    icon: Bot,
    title: "Telegram Bots",
    text: "Боты для продаж, заявок, уведомлений, поддержки и автоматизации внутренних процессов.",
  },
  {
    icon: MessageCircleMore,
    title: "Max Bots",
    text: "Боты в Max для общения с клиентами, приема обращений, уведомлений и автоматизации сценариев.",
  },
  {
    icon: Search,
    title: "Parsers",
    text: "Парсеры для сайтов, платформ и внутренних источников данных с фильтрацией, обработкой и сохранением результатов.",
  },
  {
    icon: Inbox,
    title: "Lead Capture Systems",
    text: "Системы приема заявок с формами, backend-логикой, хранением в базе данных и дальнейшей обработкой.",
  },
  {
    icon: Workflow,
    title: "CRM & API Integration",
    text: "Интеграции с CRM, внешними сервисами, оплатами, вебхуками и очередями задач.",
  },
  {
    icon: BrainCircuit,
    title: "AI Automation",
    text: "AI-функции, генерация контента, классификация, интеллектуальные сценарии и ассистенты.",
  },
  {
    icon: Database,
    title: "Backend Systems",
    text: "FastAPI, PostgreSQL, очереди, фоновые воркеры, админ-панели и production-архитектура.",
  },
];

export const portfolio = [
  {
    title: "USDT Exchange Bot",
    stack: "Python, aiogram, PostgreSQL, SQLAlchemy, CRM",
    text: "Многошаговый бот с заявками, статусами, CRM-интеграцией и автоматическими дожимами.",
  },
  {
    title: "Content Factory",
    stack: "FastAPI, Postgres, Workers, AI",
    text: "Платформа для автоматизированной генерации, проверки и публикации контента.",
  },
  {
    title: "Parser & Automation Suite",
    stack: "Python, Telethon, AsyncIO, Excel",
    text: "Система парсинга, пакетной обработки и автоматизации бизнес-операций через Telegram.",
  },
];

export const processSteps = [
  "Заявка и первичная оценка",
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
  "VK API",
  "CRM API",
  "OpenAI / Anthropic",
];

export const metrics = [
  { value: "10+", label: "типов автоматизации" },
  { value: "24/7", label: "сценарии без ручной рутины" },
  { value: "API", label: "интеграции и обмен данными" },
  { value: "AI", label: "умные сценарии" }
];