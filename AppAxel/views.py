from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import authenticate, login, logout
from AppAxel.models import Employees

# Create your views here.
def index(request):
    if request.user.is_authenticated:
        return render(request, "accesorios.html")
    else:    
        return render(request, "index.html")


def ropa(request):
    return render(request, "ropa.html")

def github(request):
    return render(request, "github.html")

def accesorios(request):
    return render(request, "accesorios.html")

def crud(request):
    emp = Employees.objects.all()

    context = {
        'emp':emp,
    }
    return render(request, "crud.html", context)

def ADD(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        address = request.POST.get('address')
        phone = request.POST.get('phone')

        emp = Employees(
            name = name,
            email = email,
            address = address,
            phone = phone
        )
        emp.save()
        return redirect('crud')

    return render(request, "crud.html")

def Edit(request):
    emp = Employees.objects.all()

    context = {
        'emp':emp,
    }
    return render(request, "crud.html",context)

def Update(request,id):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        address = request.POST.get('address')
        phone = request.POST.get('phone')

        emp = Employees(
            id = id,
            name = name,
            email = email,
            address = address,
            phone = phone,
        )
        emp.save()
        return redirect('crud')

    return render(request, "crud.html")

def Delete(request, id):
    emp = Employees.objects.filter(id = id)
    emp.delete()
    
    context = {
        'emp':emp,
    }
    return redirect('crud')

def logout_view(request):
    logout(request)
    return redirect('root')

    
def login_view(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('root')
        else:
            return render(request, "auth/login.html", {'form': form})
    else:
        form = AuthenticationForm()
        return render(request, "auth/login.html", {'form': form})

def registrar(request):
    if request.method == "POST":
        #CREAR USUARIO
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            #Entra usuario
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')

            user = authenticate(username=username,password=password)
            login(request,user)
            #messages.success(request, "Te registraste exitosamente.")
            return redirect('root')
        else:
            return render(request,"auth/registro.html", {'form':form})

    else:
        form = UserCreationForm()
        return render(request,"auth/registro.html", {'form':form})
    

