from django.shortcuts import render
from rest_framework import generics
from .serializers import SignupSerializer
from .models import User

class SignupView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignupSerializer
