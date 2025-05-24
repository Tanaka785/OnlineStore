from rest_framework import serializers
from .models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    extra_kwargs = {
        "password": {
            "write_only": True,
        }
    }

    class Meta:
        model = User
        fields = ("username", "email", "customer_type")

class SignupSerializer(serializers.ModelSerializer):
    customer_type = serializers.ChoiceField(
        choices=User.CUSTOMER_TYPE_CHOICES,
        error_messages={
            "invalid_choice": "Invalid customer type. Must be one of: artist, customer.",
        },
    )

    class Meta:
        model = User
        fields = ("username", "password", "email", "customer_type")
        extra_kwargs = {
            "password": {
                "write_only": True,
            },
        }

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
            customer_type=validated_data["customer_type"],
        )
        return user


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        username_or_email = attrs.get("username")
        password = attrs.get("password")

        # Try to get user by username or email
        user = User.objects.filter(username=username_or_email).first()
        if not user:
            user = User.objects.filter(email=username_or_email).first()
        if not user:
            raise serializers.ValidationError(
                "No active account found with the given credentials"
            )

        attrs["username"] = user.username  # Set username for JWT
        return super().validate(attrs)
