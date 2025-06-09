from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import SignupView, UserListView, CurrentUserView

urlpatterns = [
    path("", UserListView.as_view(), name="users"),
    path("register/", SignupView.as_view(), name="register"),
    path("me/", CurrentUserView.as_view(), name="current_user"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
