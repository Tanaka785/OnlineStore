from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics  
from rest_framework import viewsets 

from .models import Cart, CartItem
from products.models import Product
from .serializers import CartSerializer, CartItemSerializer


class AddToCartView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        product_id = request.data.get("product_id")
        quantity = request.data.get("quantity", 1)  # Default quantity is 1

        if not product_id:
            return Response(
                {"error": "Product ID is required"}, status=status.HTTP_400_BAD_REQUEST
            )

        try:
            product = get_object_or_404(Product, id=product_id)
        except:
            return Response(
                {"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND
            )

        # Get or create cart for the authenticated user
        cart, created = Cart.objects.get_or_create(user=request.user)

        # Check if item already exists in cart
        cart_item, created = CartItem.objects.get_or_create(
            cart=cart, product=product, defaults={"quantity": quantity}
        )

        if not created:
            # If item exists, update quantity
            cart_item.quantity += quantity
            cart_item.save()

        serializer = CartItemSerializer(cart_item)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class CartDetailView(generics.RetrieveAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # Get the cart for the current authenticated user
        # This creates a cart if the user doesn't have one yet
        cart, created = Cart.objects.get_or_create(user=self.request.user)
        return cart


class CartItemViewSet(viewsets.ModelViewSet):
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Only return cart items belonging to the authenticated user's cart
        user_cart, created = Cart.objects.get_or_create(user=self.request.user)
        return user_cart.items.all()

    def perform_create(self, serializer):
        # Ensure the cart item is associated with the authenticated user's cart
        user_cart, created = Cart.objects.get_or_create(user=self.request.user)
        serializer.save(cart=user_cart)

    # Note: update and destroy methods from ModelViewSet will work on the filtered queryset
    # We might want to add custom validation or logic here if needed,
    # e.g., preventing quantity from going below 1 on update.
