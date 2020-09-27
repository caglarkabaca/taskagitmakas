from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('game/<code>', views.game, name='game'),
    path('upd/<codes>', views.upd, name='upd'),
    path('dele/<code>', views.dele, name='dele'),
    path('read', views.read, name='read'),
]