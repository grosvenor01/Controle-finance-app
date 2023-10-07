from random import choice
from django.db import models
from django.contrib.auth import get_user_model
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.
User = get_user_model()
class profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    phone_number= PhoneNumberField()
    nationality = models.CharField(max_length=100)
    Account_type = models.CharField(max_length=30,choices=(('Perssonel',"Perssonel"),("business","business")))
    job_type = models.CharField(max_length=300)
    country = models.CharField(max_length=300)
class Card(models.Model):
    card_type = models.CharField(choices=(("stripe","stripe"),("paysera","paysera"),("payeer","payeer")),max_length=50,blank=True,null=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    card_number =models.CharField(max_length=300)
    secret_key = models.CharField(max_length=300)
class resource(models.Model):
    title = models.CharField(max_length=20)
    subtitle = models.CharField(max_length=100)
    lessons = models.IntegerField()
    applied = models.IntegerField(default=0)
    level = models.CharField(choices=(("beginner","beginner"),("intermediate","intermediate"),("advanced","advanced")),max_length=30)
    reviews = models.IntegerField()