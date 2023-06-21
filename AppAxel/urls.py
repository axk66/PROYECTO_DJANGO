from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="root"),
    path('auth/registro', views.registrar, name="registro"),
    path("auth/login", views.login_view, name ="login"),
    path('ropa', views.ropa, name ="ropa"),
    path('github.html', views.github, name ="github"),
    path('accesorios.html', views.accesorios, name ="accesorios"),
    path('auth/logout', views.logout_view, name ="logout"),
    path('crud.html', views.crud, name ="crud"),
    path('add',views.ADD, name='add'),
    path('edit', views.Edit, name='edit'),
    path('update/<str:id>', views.Update, name="update"),
    path('delete/<str:id>', views.Delete, name='delete'),
]