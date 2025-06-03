from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, generics, views, status
from .models import Category, Product
from .serializers import CategoryListSerializer, ProductSerializer
from rest_framework.response import Response
from rest_framework.decorators import action

# Create your views here.


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=["get"])
    def search(self, request):
        query = request.query_params.get("q")

        if query:
            queryset = Product.objects.filter(
                name__icontains=query
            ) | Product.objects.filter(description__icontains=query)
        else:
            queryset = Product.objects.all()

        # Check if the queryset is empty
        if not queryset.exists() and query:
            return Response({"message": f'No products found matching "{query}".'})
        elif not queryset.exists() and not query:
            return Response({"message": "No products found."})

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=["get"])
    def by_category(self, request):
        category_name = request.query_params.get("name")
        if not category_name:
            return Response(
                {"error": "Category name parameter is required."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        try:
            # Using __iexact for case-insensitive matching of category name
            products = Product.objects.filter(category__name__iexact=category_name)
            if not products.exists():
                return Response(
                    {"message": f"No products found for category '{category_name}'."},
                    status=status.HTTP_404_NOT_FOUND,
                )
            serializer = self.get_serializer(products, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response(
                {"error": f"An error occurred: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.filter(
        parent__isnull=True
    )  # Only list top-level categories
    serializer_class = CategoryListSerializer


class SubcategoryListView(generics.ListAPIView):
    serializer_class = CategoryListSerializer

    def get_queryset(self):
        parent_id = self.kwargs["parent_id"]
        parent_category = get_object_or_404(Category, id=parent_id)
        # Return the children of the parent category
        return parent_category.children.all()
