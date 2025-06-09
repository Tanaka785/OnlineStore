from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import SignupView, UserListView

urlpatterns = [
    path("", UserListView.as_view(), name="users"),
    path("register/", SignupView.as_view(), name="register"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
