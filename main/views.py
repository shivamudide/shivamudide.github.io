from django.shortcuts import render


def home(request):
    return render(request, 'main/home.html')


def projects(request):
    return render(request, 'main/projects.html')


def resume(request):
    return render(request, 'main/resume.html')


