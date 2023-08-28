from django.urls import path
from .views import ShibaList

urlpatterns = [
    path('shibas/', ShibaList.as_view(), name='shibas'),
    
]
