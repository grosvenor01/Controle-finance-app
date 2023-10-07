"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from mainApp.views import *
urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/',register.as_view(),name="register"),
    path("login/", logine.as_view(),name="login"),
    path("cards/", cards_managing.as_view(),name="card_managing"),
    path("resources/", resources_managing.as_view(),name="resources_managing"),
    path("trade/", Trad_managing.as_view(),name="Trade_managing"),
]
