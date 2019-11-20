# pylint: disable=no-member,arguments-differ
from rest_framework import serializers
from .models import Flight

class FlightSerializer(serializers.ModelSerializer):

    class Meta:
        model = Flight
        fields = ('departure', 'arrival', 'distance', 'carbon', 'owner')




        # def create(self, data): # data is the incoming json converted to a python dict
        # departure_data = data.pop('departure') # stored and removing from the data object
        # arrival_data = data.pop('arrival')
        # distance_data = data.pop('distance') # stored and removing from the data object
        # carbon_data = data.pop('carbon')

        # flight = Flight(**data) 
        # # create the station from the data left over
        # flight.departure = Departure.objects.get(**departure_data) 
        # # add the zones back in after finding the correct one from the DB
        # flight.arrival = Arrival.objects.get(**arrival_data)
        # flight.distance = Distance.objects.get(**distance_data)
        # flight.carbon = Carbon.objects.get(**carbon_data)

        # # lines = [Line.objects.get(**line_data) for line_data in lines_data] # finding all the lines that needed to be added
        
        # flight.save() 
        
        # # we need to save to ensure a primary key has been created before attempting to set a many to many relationship on the model
        # # flight.lines.set(lines) # now we can set those lines
        
        # return flight # return the newly created station to be sent in the response to the client
