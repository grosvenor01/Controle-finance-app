from rest_framework.views import APIView
from rest_framework import generics , permissions
from knox.views import LoginView as KnoxLoginView
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.models import AuthToken
from rest_framework.response import Response
from cryptography.fernet import Fernet
import stripe
from django.contrib.auth import login
from .serializers import *
from django.http import JsonResponse
from .models import *
import requests
import json
import openai 
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
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
class goals_managing(APIView):
    def get(self, request):
        token_key = request.COOKIES.get("login_token")
        token = AuthToken.objects.get(token_key=token_key[:8])
        user = token.user
        if user : 
            goals = goal.objects.filter(user=user)
            serializer = goal_serializer(goals,many=True)
            return JsonResponse(serializer.data,safe=False)
        return Response({"error":"Login & try again","status":400})
    def post(self , request):
        token_key = request.COOKIES.get("login_token")
        token = AuthToken.objects.get(token_key=token_key[:8])
        user = token.user
        if user : 
            serializer=goal_serializer(data = request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({"Success":"Goal added succefully","status":201})
            return Response({"error":"Data is not valide","status":400})
        return Response({"error":"Login & try again","status":400})
class balance_managing(APIView):
    def get(self , request):
        token_key = request.COOKIES.get("login_token")
        token = AuthToken.objects.get(token_key=token_key[:8])
        user = token.user
        if user : 
            access_key  = Card.objects.filter(user=user).first().access_key
            stripe.api_key = access_key
            transactions = stripe.Charge.list(limit=5) 
            balance = stripe.Balance.retrieve()
            available_balance = balance.available[0].amount / 100
            pending_balance = balance.pending[0].amount / 100 
            stripe_data = {
                "available_balance": available_balance,
                "pending_balance": pending_balance,
                "transactions": [],
            }
            for transaction in transactions:
                transaction_data = {
                    "transaction_id": transaction.id,
                    "amount": transaction.amount / 100,
                    "description": transaction.description,
                    "created": transaction.created,
                }
                stripe_data["transactions"].append(transaction_data)
            stripe_data["transactions"].append(transaction_data)
            return JsonResponse(stripe_data)
        return Response({"Error":"Login and try again"})
openai.api_key = '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'
def get_completion(prompt): 
    
    query = openai.Completion.create( 
        engine="text-davinci-003", 
        prompt=prompt, 
        max_tokens=1024, 
        n=1, 
        stop=None, 
        temperature=0.5, 
    ) 
    response = query.choices[0].text 
    return response

@api_view(('GET',))
def advice(request):
    token_key = request.COOKIES.get("login_token")
    token = AuthToken.objects.get(token_key=token_key[:8])
    user = token.user
    if user:
        access_key = Card.objects.filter(user=user).first().access_key
        stripe.api_key = access_key
        transactions = stripe.Charge.list(limit=10)
        transaction_data = [] 

        for transaction in transactions:
            transaction_info = {
                "amount": transaction.amount / 100,
                "description": transaction.description,
            }
            transaction_data.append(transaction_info)
        transaction_data_json = json.dumps(transaction_data)
        prompt1 = "generate a JSON file which contains the name of categories and their percentages (these categories should indicate where my expenses went). I will give you this history of expenses and do what I said: " + str(transaction_data_json)
        response = get_completion(prompt1)
        prompt2 = "provide financial advice for me where my spending money categories are" +response +"and provide a report about what I sent"
        response2 = get_completion(prompt2)
        return Response({"advice": response2,
                         "categories": response})
    return Response({"error": "Login & try again", "status": 400})