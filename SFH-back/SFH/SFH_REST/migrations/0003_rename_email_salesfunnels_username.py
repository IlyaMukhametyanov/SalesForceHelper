# Generated by Django 3.2.3 on 2021-05-28 10:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('SFH_REST', '0002_auto_20210528_1348'),
    ]

    operations = [
        migrations.RenameField(
            model_name='salesfunnels',
            old_name='email',
            new_name='username',
        ),
    ]
