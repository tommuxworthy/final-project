# Generated by Django 2.2.7 on 2019-11-19 10:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('flights', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='flight',
            name='owner',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='flights', to=settings.AUTH_USER_MODEL),
        ),
    ]
