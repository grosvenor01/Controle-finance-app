# Generated by Django 4.2.6 on 2023-10-06 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='card',
            name='card_number',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='card',
            name='secret_key',
            field=models.CharField(max_length=300),
        ),
    ]