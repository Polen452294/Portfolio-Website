from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.request import Request, RequestStatus


class RequestRepository:
    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    async def create(self, data: dict) -> Request:
        entity = Request(**data)
        self.session.add(entity)
        await self.session.commit()
        await self.session.refresh(entity)
        return entity

    async def get_all(self) -> list[Request]:
        result = await self.session.execute(
            select(Request).order_by(Request.created_at.desc())
        )
        return list(result.scalars().all())

    async def get_by_id(self, request_id: int) -> Request | None:
        result = await self.session.execute(
            select(Request).where(Request.id == request_id)
        )
        return result.scalar_one_or_none()

    async def update_status(
        self,
        request: Request,
        status: RequestStatus,
    ) -> Request:
        request.status = status
        await self.session.commit()
        await self.session.refresh(request)
        return request