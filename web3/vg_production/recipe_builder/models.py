from django.db import models

class User(models.Model):
    id = models.AutoField(primary_key=True)
    login = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    vip = models.CharField(max_length=100)


class Article(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    title = models.TextField(blank=True)
    desc = models.TextField(blank=True)


class Dish(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    title = models.TextField(blank=True)
    desc = models.TextField(blank=True)
