from django.shortcuts import render
from classifier_model import  ModelInterface
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
# Create your views here.

interface = ModelInterface()

class NewsClassifier (APIView) :

    def get (self, *args, **kwargs) :
        return Response(
            data = {
                "message" : 'get text of news and i will send it\'s category in response',
                "status" : status.HTTP_200_OK
            },
            status=status.HTTP_200_OK
        )

    def post (self, *args ,**kwargs) :
        print(self.request.data)
        return Response(
            data= {
                'category' : interface.predict(self.request.data['text']),
                'status' : status.HTTP_200_OK
            }, 
            status= status.HTTP_200_OK 
        )