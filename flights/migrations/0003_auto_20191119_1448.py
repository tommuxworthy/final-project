# Generated by Django 2.2.7 on 2019-11-19 14:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flights', '0002_flight_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='flight',
            name='arrival',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='flight',
            name='departure',
            field=models.CharField(max_length=50),
        ),
    ]
