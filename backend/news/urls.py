from django.urls import path 
from .views import NewsCreateView  

urlpatterns = [
    path('news/', NewsCreateView.as_view(), name='create_news'),  
]