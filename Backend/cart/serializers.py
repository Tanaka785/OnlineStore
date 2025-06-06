from rest_framework import serializers
from .models import Cart, CartItem
from products.serializers import (
    ProductSerializer,
)  


class CartItemSerializer(serializers.ModelSerializer):
    # We might want to display product details within the cart item
    product = ProductSerializer(read_only=True)
    # Use product_id for adding/updating items by product ID
    product_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = CartItem
        fields = ["id", "product", "product_id", "quantity"]


class CartSerializer(serializers.ModelSerializer):
    # Use the CartItemSerializer for the items field to show cart items
    items = CartItemSerializer(many=True, read_only=True)
    # Display username if user is authenticated, or handle anonymous later
    user = serializers.ReadOnlyField(source="user.username")

    class Meta:
        model = Cart
        fields = ["id", "user", "items", "created_at", "updated_at"]
