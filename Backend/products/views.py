from django.shortcuts import render
from rest_framework import viewsets, generics
from .models import Product
from .serializers import ProductSerializer
from rest_framework.response import Response

# Create your views here.


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ProductSearchView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        query = self.request.query_params.get("q")
        if query:
            # Filter products where name or description contains the query (case-insensitive)
            return Product.objects.filter(
                name__icontains=query
            ) | Product.objects.filter(description__icontains=query)
        return Product.objects.all()  # Return all products if no query is provided
