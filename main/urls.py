from django.urls import path
from . import views


app_name = 'main'


urlpatterns = [
    path('', views.home, name='home'),
    path('projects/', views.projects, name='projects'),
    path('resume/', views.resume, name='resume'),
]


