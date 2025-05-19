from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):

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
        max_length=10, null=False, blank=False
    )

    def __str__(self):
        return self.username
