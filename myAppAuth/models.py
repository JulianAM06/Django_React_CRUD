from django.db import models

class Tareas (models.Model): # ORM de DRF para crear Tabla en Postgresql
    title = models.CharField(max_length=100)
    descripction = models.TextField(blank=True)
    done = models.BooleanField(default=False)
    
    class Meta:  # Esta clase se usa para que salgan los nombres en singular y/o plural
        
        verbose_name = 'Tarea'
        verbose_name_plural = 'Tareas'
        
    
    def __str__(self):
        return self.title # Mostar el titulo de la tarea creada en el panel Admin

