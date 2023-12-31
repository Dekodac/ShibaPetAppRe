# Generated by Django 4.2.3 on 2023-08-26 01:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('inventory_app', '0001_initial'),
        ('shiba_app', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='userinventory',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='ownedshiba',
            name='name',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shiba_app.shiba'),
        ),
        migrations.AddField(
            model_name='ownedshiba',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
