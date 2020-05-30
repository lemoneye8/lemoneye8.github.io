
from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from django.views.generic import TemplateView 

from vg_production.recipe_builder import views


urlpatterns = [
    url('admin/', admin.site.urls),
    url(r'^api/title/$', views.get_post , name ='get_post'),
    url(r'^api/user/$', views.get_user, name = 'get_user'),
]
