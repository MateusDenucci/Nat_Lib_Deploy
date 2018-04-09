from django.conf.urls import url
from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('process_input/', views.process_input, name='process_input'),
    path('questions/', views.questions, name='questions'),
    path('result/', views.result, name='result'),
    path('process_questions/', views.process_questions, name='process_questions'),
    path('generate_doc/', views.generate_doc, name='generate_doc'),
    path('try_again/', views.try_again, name='try_again'),
    # path('questions/', views.questions, name='questions'),
    # url(r'^get_meanings/$', views.get_meanings, name='get_meanings'),

]