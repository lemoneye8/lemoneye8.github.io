from rest_framework import serializers


from vg_production.recipe_builder.models import Dish
from vg_production.recipe_builder.models import User

class DishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = 'id','name','title','desc'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = 'id','login','password','vip'