from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

class Flight(models.Model):
    departure = models.CharField(max_length=50)
    arrival = models.CharField(max_length=50)
    distance = models.FloatField()
    carbon = models.FloatField()
    owner = models.ForeignKey(
      User,
      related_name='flights',
      on_delete=models.CASCADE,
      blank=True,
      null=True
    )

def __str__(self):
    return self.name
