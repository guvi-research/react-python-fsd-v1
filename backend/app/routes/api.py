from fastapi import APIRouter, HTTPException
from ..controllers.user_controller import UserController
from ..models.user import User

router = APIRouter()

@router.get("/users", response_model=list[User])
def get_users():
    return UserController.get_users()

@router.get("/users/{user_id}", response_model=User)
def get_user(user_id: int):
    user = UserController.get_user(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.post("/users", response_model=User, status_code=201)
def create_user(user: User):
    try:
        return UserController.create_user(user)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.put("/users/{user_id}", response_model=User)
def update_user(user_id: int, updated_user: User):
    user = UserController.update_user(user_id, updated_user)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.delete("/users/{user_id}", status_code=204)
def delete_user(user_id: int):
    deleted = UserController.delete_user(user_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="User not found")
    return None