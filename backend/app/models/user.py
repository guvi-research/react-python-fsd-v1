from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime

class User(BaseModel):
    id: int = Field(..., gt=0, description="User ID must be positive")
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    age: Optional[int] = None
    is_active: bool = True
    created_at: Optional[datetime] = None