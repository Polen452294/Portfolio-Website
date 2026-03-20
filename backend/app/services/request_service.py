from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.request import Request, RequestStatus
from app.schemas.request import RequestCreate
from app.services.telegram_notifier import TelegramNotifier


class RequestService:
    def __init__(self, session: AsyncSession):
        self.session = session
        self.notifier = TelegramNotifier()

    async def create_request(self, data: RequestCreate) -> Request:
        request = Request(
            name=data.name,
            contact=data.contact,
            project_type=data.project_type,
            description=data.description,
            budget=data.budget,
        )

        self.session.add(request)
        await self.session.commit()
        await self.session.refresh(request)

        # 🔥 уведомление
        await self.notifier.send_new_request_notification(request)

        return request

    async def list_requests(self) -> list[Request]:
        result = await self.session.execute(
            select(Request).order_by(Request.created_at.desc())
        )
        return result.scalars().all()

    async def update_status(self, request_id: int, status: RequestStatus) -> Request | None:
        request = await self.session.get(Request, request_id)

        if not request:
            return None

        request.status = status
        await self.session.commit()
        await self.session.refresh(request)

        # 🔥 уведомление
        await self.notifier.send_status_changed_notification(request)

        return request
    
    async def delete_request(self, request_id: int) -> Request | None:
        request = await self.session.get(Request, request_id)

        if not request:
            return None

        await self.session.delete(request)
        await self.session.commit()

        return request