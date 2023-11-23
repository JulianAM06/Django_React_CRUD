from rest_framework import serializers # Modulo Serialziar de DRF
from .models import Tareas

class TareaSerializador(serializers.ModelSerializer):
    class Meta:
        model = Tareas
        fields = ('id', 'title', 'descripction', 'done') # Campos de los modelos a convertir a JSON