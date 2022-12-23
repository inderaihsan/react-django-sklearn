from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response 
import pandas as pd

# Create your views here.
import pickle 

model = pd.read_pickle('avmt_trial\penguin_model.sav')
@api_view(['GET'])
def feature_list(request) : 
    feature_names_in = model.feature_names_in_ 
    return Response(feature_names_in) 

@api_view(['POST'])
def predict(request) : 
    bill_length_mm = float(request.data['bill_length_mm'])
    bill_depth_mm = float(request.data['bill_depth_mm'])
    flipper_length_mm = float(request.data['flipper_length_mm'])
    body_mass_g = float(request.data['body_mass_g'])
    densed = [[bill_length_mm , bill_depth_mm, flipper_length_mm, body_mass_g]] 
    return Response(model.predict(densed))