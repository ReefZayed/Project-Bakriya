from django.shortcuts import render
from rest_framework import generics 
from .models import News 
from .serializers import NewsSerializer
# Create your views here.

class NewsCreateView(generics.CreateAPIView): # creat API for add news 
    queryset = News.objects.all()  
    serializer_class = NewsSerializer 