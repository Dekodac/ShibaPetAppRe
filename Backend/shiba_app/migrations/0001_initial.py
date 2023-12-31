# Generated by Django 4.2.3 on 2023-08-26 01:25

from django.db import migrations, models
import shiba_app.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Shiba',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, validators=[shiba_app.models.Shiba.validate_alpha])),
                ('eyecolor', models.CharField(max_length=10, validators=[shiba_app.models.Shiba.validate_alpha])),
                ('furcolor', models.CharField(max_length=10, validators=[shiba_app.models.Shiba.validate_alpha])),
                ('personality', models.TextField(validators=[shiba_app.models.Shiba.validate_alpha])),
                ('experience_points', models.PositiveIntegerField(default=0)),
                ('top_hat', models.BooleanField(default=False)),
                ('bow_tie', models.BooleanField(default=False)),
                ('glasses', models.BooleanField(default=False)),
                ('muzzle', models.BooleanField(default=False)),
                ('hair_clip', models.BooleanField(default=False)),
                ('dramatic_mustache', models.BooleanField(default=False)),
                ('cane', models.BooleanField(default=False)),
            ],
        ),
    ]
