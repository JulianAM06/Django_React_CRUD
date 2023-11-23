from django.urls import path, include
from rest_framework import routers
from .views import TareasVista
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'tareas', TareasVista, 'tareas')

urlpatterns = [
    path("api/v1/", include(router.urls)), # Atraves de Router creamos las vistas
    path("docs/", include_docs_urls(title='Tareas API'))
]