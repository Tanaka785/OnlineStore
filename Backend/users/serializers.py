from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from django.core.validators import RegexValidator
from .models import User


class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        min_length=8,
        validators=[
            RegexValidator(
                regex=r"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$",
                message="Password must be at least 8 characters and contain at least one letter, one number, and one special character.",
            ),
            validate_password,
        ],
    )
    email = serializers.EmailField(required=True)
    username = serializers.CharField(
        required=True,
        min_length=3,
        max_length=20,
        validators=[
            RegexValidator(
                regex=r"^[A-Za-z0-9_-]*$",
                message="Only letters, numbers, underscores and hyphens allowed.",
            )
        ],
    )
    customer_type = serializers.ChoiceField(choices=User.CUSTOMER_TYPE_CHOICES)

    class Meta:
        model = User
        fields = ("username", "password", "email", "customer_type")

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("A user with this email already exists.")
        return value

    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError(
                "A user with this username already exists."
            )
        return value

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
            customer_type=validated_data["customer_type"],
        )
        return user
