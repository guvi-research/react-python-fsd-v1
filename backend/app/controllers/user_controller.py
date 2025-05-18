from typing import List, Optional
from ..models.user import User

# Mock database
users_db = []

class UserController:
    @staticmethod
    def get_users() -> List[User]:
        return users_db
    
    @staticmethod
    def get_user(user_id: int) -> Optional[User]:
        return next((user for user in users_db if user.id == user_id), None)
    
    @staticmethod
    def create_user(user: User) -> User:
        # Simple validation: check if user with same id exists
        if any(u.id == user.id for u in users_db):
            raise ValueError("User with this ID already exists.")
        users_db.append(user)
        return user

    @staticmethod
    def update_user(user_id: int, updated_user: User) -> Optional[User]:
        for idx, user in enumerate(users_db):
            if user.id == user_id:
                users_db[idx] = updated_user
                return updated_user
        return None

    @staticmethod
    def delete_user(user_id: int) -> bool:
        global users_db
        original_len = len(users_db)
        users_db = [user for user in users_db if user.id != user_id]
        return len(users_db) < original_len