from django.contrib import admin
from .models import Tareas # Importamos los modelos creados

admin.site.register(Tareas) # Visualizacion de los modelos en el panel Admin
