import html

import httpx

from app.core.config import settings
from app.models.request import Request, RequestStatus


class TelegramNotifier:
    def __init__(self) -> None:
        self.bot_token = settings.telegram_bot_token
        self.chat_id = settings.telegram_chat_id

    @property
    def is_enabled(self) -> bool:
        return bool(self.bot_token and self.chat_id)

    def _human_status(self, status: RequestStatus) -> str:
        mapping = {
            RequestStatus.NEW: "Новая",
            RequestStatus.IN_PROGRESS: "В работе",
            RequestStatus.DONE: "Завершена",
        }
        return mapping.get(status, status.value)

    def build_message(self, request: Request) -> str:
        budget = request.budget or "Не указан"

        return (
            "<b>Новая заявка с сайта</b>\n\n"
            f"<b>ID:</b> {request.id}\n"
            f"<b>Статус:</b> {self._human_status(request.status)}\n"
            f"<b>Имя:</b> {html.escape(request.name)}\n"
            f"<b>Контакт:</b> {html.escape(request.contact)}\n"
            f"<b>Тип проекта:</b> {html.escape(request.project_type)}\n"
            f"<b>Бюджет:</b> {html.escape(budget)}\n\n"
            f"<b>Описание:</b>\n{html.escape(request.description)}"
        )

    def build_status_changed_message(self, request: Request) -> str:
        return (
            "<b>Статус заявки обновлён</b>\n\n"
            f"<b>ID:</b> {request.id}\n"
            f"<b>Новый статус:</b> {self._human_status(request.status)}\n"
            f"<b>Имя:</b> {html.escape(request.name)}\n"
            f"<b>Контакт:</b> {html.escape(request.contact)}"
        )

    async def _send_message(self, text: str) -> None:
        if not self.is_enabled:
            return

        url = f"https://api.telegram.org/bot{self.bot_token}/sendMessage"
        payload = {
            "chat_id": self.chat_id,
            "text": text,
            "parse_mode": "HTML",
        }

        async with httpx.AsyncClient(timeout=10.0) as client:
            response = await client.post(url, json=payload)
            response.raise_for_status()

    async def send_new_request_notification(self, request: Request) -> None:
        await self._send_message(self.build_message(request))

    async def send_status_changed_notification(self, request: Request) -> None:
        await self._send_message(self.build_status_changed_message(request))