from rest_framework import serializers
from .models import Category, Product, ProductVariation
from PIL import Image


class ProductVariationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductVariation
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    variations = ProductVariationSerializer(many=True, read_only=True)
    category = serializers.StringRelatedField()

    class Meta:
        model = Product
        fields = "__all__"

    def validate_image(self, value):
        # File size limit: 2MB
        max_size = 2 * 1024 * 1024 
        if value.size > max_size:
            raise serializers.ValidationError("Image size should not exceed 2MB.")

        # Check image dimensions
        image = Image.open(value)
        max_width = 2000
        max_height = 2000
        if image.width > max_width or image.height > max_height:
            raise serializers.ValidationError(
                f"Image dimensions should not exceed {max_width}x{max_height}px."
            )
        return value

class CategoryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("name", "description", "parent")
