from django.shortcuts import render
from rest_framework import viewsets, generics, views
from .models import Product
from .serializers import ProductSerializer
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
