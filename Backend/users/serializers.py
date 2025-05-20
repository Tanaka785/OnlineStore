from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError as DjangoValidationError
from .models import User


class SignupSerializer(serializers.ModelSerializer):
    customer_type = serializers.ChoiceField(
        choices=User.CUSTOMER_TYPE_CHOICES,
        error_messages={
            "invalid_choice": "Invalid customer type. Must be one of: artist, customer.",
            "blank": "Customer type is required.",
            "required": "Customer type is required.",
        },
    )

    class Meta:
        model = User
        fields = ("username", "password", "email", "customer_type")
        extra_kwargs = {
            "password": {
                "write_only": True,
                "error_messages": {
                    "required": "Password is required.",
                    "blank": "Password cannot be blank.",
                },
            },
            "username": {
                "error_messages": {
                    "required": "Username is required.",
                    "blank": "Username cannot be blank.",
                    "unique": "A user with this username already exists.",
                }
            },
            "email": {
                "error_messages": {
                    "required": "Email is required.",
                    "blank": "Email cannot be blank.",
                    "unique": "A user with this email already exists.",
                }
            },
        }

    def validate_password(self, value):
        try:
            validate_password(value)
        except DjangoValidationError as e:
            raise serializers.ValidationError(e.messages)
        return value

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
            customer_type=validated_data["customer_type"],
        )
        return user
