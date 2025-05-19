from django.shortcuts import render
from rest_framework import generics
from .serializers import SignupSerializer
from .models import User

class SignupView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignupSerializer

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        response.data = {
            "message": "User registration successful",
            "status": "success"
        }
        return response
