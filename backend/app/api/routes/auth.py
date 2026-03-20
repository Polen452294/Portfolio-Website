from fastapi import APIRouter, HTTPException, status

from app.core.security import create_access_token, verify_admin_password
from app.schemas.auth import AdminLoginRequest, TokenResponse

router = APIRouter(prefix="/admin", tags=["auth"])


@router.post(
    "/login",
    response_model=TokenResponse,
    status_code=status.HTTP_200_OK,
)
async def admin_login(data: AdminLoginRequest) -> TokenResponse:
    if not verify_admin_password(data.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid password",
        )

    token = create_access_token("admin")
    return TokenResponse(access_token=token)