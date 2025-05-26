from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to="product_images/", null=True, blank=True)

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
        upload_to="product_images/variations/", null=True, blank=True
    )

    def __str__(self):
        return f"{self.product.name} - {self.size or ''} {self.color or ''}".strip()
