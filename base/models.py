from django.db import models

# Create your models here.

class room(models.Model):
    room_id = models.CharField(max_length=200)
    p1_ip = models.CharField(max_length=200)
    p1_choice = models.CharField(max_length=200)
    p2_ip = models.CharField(max_length=200)
    p2_choice = models.CharField(max_length=200)