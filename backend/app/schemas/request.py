from datetime import datetime

from pydantic import BaseModel, Field

from app.models.request import RequestStatus


class RequestCreate(BaseModel):
    name: str = Field(min_length=2, max_length=255)
    contact: str = Field(min_length=2, max_length=255)
    project_type: str = Field(min_length=2, max_length=100)
    description: str = Field(min_length=10, max_length=5000)
    budget: str | None = Field(default=None, max_length=100)


class RequestStatusUpdate(BaseModel):
    status: RequestStatus


class RequestRead(BaseModel):
    id: int
    name: str
    contact: str
    project_type: str
    description: str
    budget: str | None
    status: RequestStatus
    created_at: datetime

    model_config = {"from_attributes": True}