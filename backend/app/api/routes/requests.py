from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.dependencies import get_db, require_admin
from app.schemas.request import RequestCreate, RequestRead, RequestStatusUpdate
from app.services.request_service import RequestService

router = APIRouter(prefix="/requests", tags=["requests"])


@router.post(
    "",
    response_model=RequestRead,
    status_code=status.HTTP_201_CREATED,
)
async def create_request_endpoint(
    data: RequestCreate,
    session: AsyncSession = Depends(get_db),
) -> RequestRead:
    service = RequestService(session)
    request = await service.create_request(data)
    return RequestRead.model_validate(request)


@router.get(
    "",
    response_model=list[RequestRead],
    status_code=status.HTTP_200_OK,
    dependencies=[Depends(require_admin)],
)
async def list_requests_endpoint(
    session: AsyncSession = Depends(get_db),
) -> list[RequestRead]:
    service = RequestService(session)
    requests = await service.list_requests()
    return [RequestRead.model_validate(item) for item in requests]


@router.patch(
    "/{request_id}/status",
    response_model=RequestRead,
    status_code=status.HTTP_200_OK,
    dependencies=[Depends(require_admin)],
)
async def update_request_status_endpoint(
    request_id: int,
    data: RequestStatusUpdate,
    session: AsyncSession = Depends(get_db),
) -> RequestRead:
    service = RequestService(session)
    request = await service.update_status(request_id, data.status)

    if request is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Request not found",
        )

    return RequestRead.model_validate(request)

@router.delete("/{request_id}", status_code=204)
async def delete_request(
    request_id: int,
    session: AsyncSession = Depends(get_db),
    _: None = Depends(require_admin),
):
    service = RequestService(session)
    request = await service.delete_request(request_id)

    if not request:
        raise HTTPException(status_code=404, detail="Not found")