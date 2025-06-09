from rest_framework import serializers
from .models import User
from django.contrib.auth import get_user_model
from rest_framework.validators import UniqueValidator

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
    username = serializers.CharField(
        validators=[
            UniqueValidator(
                queryset=User.objects.all(),
                message="A user with that username already exists.",
            )
        ]
    )
    email = serializers.EmailField(
        validators=[
            UniqueValidator(
                queryset=User.objects.all(),
                message="User with this email already exists.",
            )
        ]
    )
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
