from django.urls import path 
from .views import NewsClassifier

urlpatterns = [
    path('predict/', NewsClassifier.as_view(), name = 'news_classifier')
]