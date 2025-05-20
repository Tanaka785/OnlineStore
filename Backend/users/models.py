from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):

    CUSTOMER_TYPE_CHOICES = [
        ("artist", "Artist"),
        ("customer", "Customer"),
    ]
    userNameOrShopname = models.CharField(
        max_length=150, unique=True, null=False, blank=False
    )
    username = None
    USERNAME_FIELD = "userNameOrShopname"
    # TODO in the admin interface, or why am i being able to save a user without customer_type in admin interface.
    # TODO Plus i need all the fields for a user to show when i try saving a user in the admin interface.
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    gender = models.CharField(
        max_length=10,
        choices=[("M", "Male"), ("F", "Female")],
        blank=True,
        null=True,
    )
    customer_type = models.CharField(
        max_length=10, choices=CUSTOMER_TYPE_CHOICES, null=False, blank=False
    )

    def __str__(self):
        return self.userNameOrShopname
