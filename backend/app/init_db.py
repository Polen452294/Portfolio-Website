from app.core.database import Base, engine
from app.models.request import Request


async def init_models() -> None:
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)