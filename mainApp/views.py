from http.client import HTTPResponse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics,permissions
from knox.views import LoginView as KnoxLoginView
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.models import AuthToken
from django.contrib.auth import login
from .serializers import *
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from cryptography.fernet import Fernet
from django.http import JsonResponse
from .models import *
import requests
# Create your views here.
class register(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data,context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        response = Response({
        "user": user_serializer(user, context=self.get_serializer_context()).data,
        })
        return response
class logine(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        response = super(logine, self).post(request, format=None)
        response.set_cookie("id",user.id,path="/",max_age=3600*24*365)
        response.set_cookie("username",user.username,path="/",max_age=3600*24*365)
        response.set_cookie("login_token",response.data["token"],path="/",max_age=3600*24*365)
        return response
key = Fernet.generate_key()
cipher_suite = Fernet(key)
class cards_managing(APIView):
    def post(self , request):
        token_key = request.COOKIES.get("login_token")
        token = AuthToken.objects.get(token_key=token_key[:8])
        user = token.user
        if user:
            card=request.data["card_number"].encode("utf-8")
            secret = request.data["secret_key"].encode("utf-8")
            card_type=request.data["card_type"]
            encrypted_card = cipher_suite.encrypt(card)
            encrypted_key = cipher_suite.encrypt(secret)
            card = Card(user=user,card_number=encrypted_card.decode("utf-8"),secret_key=encrypted_key.decode("utf-8"),card_type=card_type)
            card.save()
        return Response({"Success":"Operation Done"})
    def get(self , request):
        pass
class resources_managing(APIView):
    def get(self, request):
        courses = resource.objects.all()
        serializer = resource_serializer(courses, many=True)
        data = serializer.data 
        return JsonResponse(data, safe=False)
class Trad_managing(APIView):
    def get(self , request):
        url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo'
        r = requests.get(url)
        data = r.json()
        print(data)
        return Response({"dady":"trying"})