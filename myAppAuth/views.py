from django.shortcuts import render
from rest_framework import viewsets
from .serializer import TareaSerializador
from . models import Tareas

class TareasVista(viewsets.ModelViewSet): # Creamos las vistas de las Tareas a crear
        
    serializer_class = TareaSerializador
    queryset = Tareas.objects.all()
