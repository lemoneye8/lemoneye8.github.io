from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import api_view

from vg_production.recipe_builder.serializers import DishSerializer
from vg_production.recipe_builder.models import Dish
from vg_production.recipe_builder.serializers import UserSerializer
from vg_production.recipe_builder.models import User


@api_view(['GET', 'POST'])
def get_post(request):
    if request.method == 'GET':
        Aricles = Dish.objects.all()
        serializer = DishSerializer(Aricles, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        data = {
            'id': request.data.get('id'),
            'name': request.data.get('name'),
            'title': request.data.get('title'),
            'desc': request.data.get('desc'),
        }
        serializer = DishSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def get_user(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many = True)
        return Response(serializer.data)

    if request.method == 'POST':
        data = {
            'id': request.data.get('id'),
            'login': request.data.get('login'),
            'password': request.data.get('password'),
            'vip': request.data.get('vip'),
        }
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)