# Generated by Django 4.2.6 on 2023-10-06 20:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainApp', '0003_card_card_type'),
    ]

    operations = [
        migrations.CreateModel(
            name='resource',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=20)),
                ('subtitle', models.CharField(max_length=100)),
                ('lessons', models.IntegerField()),
                ('applied', models.IntegerField(default=0)),
                ('level', models.CharField(choices=[('beginner', 'beginner'), ('intermediate', 'intermediate'), ('advanced', 'advanced')], max_length=30)),
                ('reviews', models.IntegerField()),
            ],
        ),
    ]
