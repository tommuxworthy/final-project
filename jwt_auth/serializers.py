#pylint: disable = no-member, arguments-differ
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.apps import apps
# import django.contrib.auth.password_validation as validations
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
User = get_user_model()
Flight = apps.get_model('flights', 'Flight')

class FlightSerializer(serializers.ModelSerializer):

    class Meta:
        model = Flight
        fields = ('departure', 'arrival', 'carbon', 'distance')


class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)
    flights = FlightSerializer(many=True, required=False)

    def validate(self, data):

        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')

        if password != password_confirmation:
            raise ValidationError({'password_confirmation': 'does not match'})  
      

        data['password'] = make_password(password)
        return data

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'password_confirmation', 'flights')




        
  # try:
        #     validations.validate_password(password=password)
        # except ValidationError as err:
        #     raise serializers.ValidationError({'password': err.messages})