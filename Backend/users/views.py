from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignupSerializer, UserSerializer
from .models import User

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
