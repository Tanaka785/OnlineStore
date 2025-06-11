from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignupSerializer, UserSerializer
from .models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.conf import settings

class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer  

class SignupView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignupSerializer

    def create(self, request, *args, **kwargs):
        data = request.data
        required_fields = ["username", "email", "password", "customer_type"]
        missing_fields = [field for field in required_fields if not data.get(field)]
        if missing_fields:
            return Response(
                {
                    "message": f"Missing required fields: {', '.join(missing_fields)}.",
                    "status": "error",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )
        serializer = self.get_serializer(data=data)
        if not serializer.is_valid():
            return Response(
                {
                    "message": "Validation failed.",
                    "errors": serializer.errors,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            {"message": "User registration successful", "status": "success"},
            status=status.HTTP_201_CREATED,
            headers=headers,
        )


class CurrentUserView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user


class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(request, username=username, password=password)

        if user is not None:
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)

            response = Response({
                "access": access_token,
                "user": UserSerializer(user).data  # Or whatever user data you want to return
            }, status=status.HTTP_200_OK)

            # Set refresh token as HttpOnly cookie
            response.set_cookie(
                key=settings.SIMPLE_JWT["REFRESH_TOKEN_COOKIE"],
                value=str(refresh),
                httponly=settings.SIMPLE_JWT["REFRESH_TOKEN_COOKIE_HTTP_ONLY"],
                secure=settings.SIMPLE_JWT["REFRESH_TOKEN_COOKIE_SECURE"],
                samesite=settings.SIMPLE_JWT["REFRESH_TOKEN_COOKIE_SAMESITE"],
                path=settings.SIMPLE_JWT["REFRESH_TOKEN_COOKIE_PATH"],
                expires=settings.SIMPLE_JWT["REFRESH_TOKEN_LIFETIME"]
            )
            return response
        else:
            return Response(
                {"detail": "Invalid credentials"},
                status=status.HTTP_401_UNAUTHORIZED
            )
