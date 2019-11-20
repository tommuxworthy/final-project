from django.urls import path
from .views import FlightListView

urlpatterns = [
  path('flights', FlightListView.as_view())
]
