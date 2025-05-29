from django.db import models
import os
import uuid
from django.db.models.signals import post_save
from django.dispatch import receiver
import shutil


def product_image_upload_to(instance, filename):
    if instance.id:
        return f"product_images/{instance.id}/image{os.path.splitext(filename)[1]}"
    else:
        temp_id = uuid.uuid4()
        return f"product_images/temp_{temp_id}/image{os.path.splitext(filename)[1]}"


def variation_image_upload_to(instance, filename):
    # For ProductVariation model images
    product_id = instance.product.id if instance.product else "unknown"
    return f"product_images/{product_id}/variations/{filename}"


def category_image_upload_to(instance, filename):
    # For Category model images
    return f"category_images/{instance.id}/{filename}"


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to=category_image_upload_to, null=True, blank=True)
    parent = models.ForeignKey(
        "self",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="children",
    )

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(
        Category,
        related_name="products",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to=product_image_upload_to, null=True, blank=True)

    def __str__(self):
        return self.name


class ProductVariation(models.Model):
    product = models.ForeignKey(
        Product, related_name="variations", on_delete=models.CASCADE
    )
    size = models.CharField(max_length=50, blank=True, null=True)
    color = models.CharField(max_length=50, blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    stock = models.PositiveIntegerField(default=0)
    image = models.ImageField(
        upload_to=variation_image_upload_to, null=True, blank=True
    )

    def __str__(self):
        return f"{self.product.name} - {self.size or ''} {self.color or ''}".strip()


@receiver(post_save, sender=Product)
def move_product_image(sender, instance, created, **kwargs):
    if instance.image and "temp_" in instance.image.name:
        # Build the new path
        ext = os.path.splitext(instance.image.name)[1]
        new_path = f"product_images/{instance.id}/image{ext}"
        old_path = instance.image.path

        # Create the new directory if it doesn't exist
        new_dir = os.path.dirname(
            os.path.join(instance._meta.get_field("image").storage.location, new_path)
        )
        os.makedirs(new_dir, exist_ok=True)

        # Move the file
        shutil.move(
            old_path,
            os.path.join(instance._meta.get_field("image").storage.location, new_path),
        )

        # Update the model and save again (without triggering recursion)
        instance.image.name = new_path
        instance.save(update_fields=["image"])
