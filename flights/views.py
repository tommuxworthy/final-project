# pylint: disable=no-member
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_422_UNPROCESSABLE_ENTITY
from rest_framework.permissions import IsAuthenticated
from .serializers import FlightSerializer


class FlightListView(APIView):

    permission_classes = (IsAuthenticated, )

    def post(self, request):
        request.data['owner'] = request.user.id
        flight = FlightSerializer(data=request.data)
        if flight.is_valid():
            flight.save()
            return Response(flight.data)
        return Response(flight.errors, HTTP_422_UNPROCESSABLE_ENTITY)
