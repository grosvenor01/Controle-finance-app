# Generated by Django 4.2.6 on 2023-10-07 06:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainApp', '0005_goal'),
    ]

    operations = [
        migrations.AddField(
            model_name='card',
            name='access_key',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
