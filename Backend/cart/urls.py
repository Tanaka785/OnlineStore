from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AddToCartView, CartDetailView, CartItemViewSet

# Create a router for the CartItemViewSet
router = DefaultRouter()
router.register(r"items", CartItemViewSet, basename="cartitem")

urlpatterns = [
    # URL for adding items to the cart
    path("add/", AddToCartView.as_view(), name="add_to_cart"),
    # URL for retrieving the authenticated user's cart
    path("", CartDetailView.as_view(), name="cart_detail"),
    # URLs for the CartItemViewSet (list, retrieve, update, delete items)
    path("", include(router.urls)),
]
