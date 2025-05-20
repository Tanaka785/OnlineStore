from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    ordering = ("userNameOrShopname",)
    list_display = (
        "userNameOrShopname",
        "email",
        "customer_type",
        "is_staff",
        "is_active",
    )
    search_fields = ("userNameOrShopname", "email")
    fieldsets = (
        (None, {"fields": ("userNameOrShopname", "password")}),
        (
            "Personal info",
            {
                "fields": (
                    "email",
                    "phone_number",
                    "address",
                    "date_of_birth",
                    "gender",
                    "customer_type",
                )
            },
        ),
        (
            "Permissions",
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                )
            },
        ),
        ("Important dates", {"fields": ("last_login", "date_joined")}),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "userNameOrShopname",
                    "email",
                    "password1",
                    "password2",
                    "customer_type",
                    "is_staff",
                    "is_active",
                ),
            },
        ),
    )
