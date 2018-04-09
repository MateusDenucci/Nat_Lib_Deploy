from django.urls import include, path
from django.contrib import admin

urlpatterns = [
    path('core/', include('core.urls')),
    path('admin/', admin.site.urls),
]
