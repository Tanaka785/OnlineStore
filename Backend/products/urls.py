from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, CategoryListView, SubcategoryListView

router = DefaultRouter()
router.register(r"", ProductViewSet, basename="product")

urlpatterns = [
    path("categories/", CategoryListView.as_view(), name="category-list"),
    path(
        "categories/<int:parent_id>/subcategories/",
        SubcategoryListView.as_view(),
        name="subcategory-list",
    ),
] + router.urls
