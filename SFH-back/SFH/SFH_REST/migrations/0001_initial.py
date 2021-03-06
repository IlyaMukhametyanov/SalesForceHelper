# Generated by Django 3.2.3 on 2021-05-25 10:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Accounts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('hash', models.TextField()),
                ('role', models.CharField(choices=[('0', 'ADMIN'), ('1', 'OWNER'), ('2', 'CHIEF_SALES_MANAGER'), ('3', 'SALES_MANAGER')], max_length=1)),
                ('isUsed', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Firms',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('addInfo', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='SalesScripts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datetime', models.DateTimeField()),
                ('script', models.TextField()),
                ('isUsed', models.BooleanField(default=True)),
                ('comments', models.TextField()),
                ('Firm_ID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='SFH_REST.firms')),
            ],
        ),
        migrations.CreateModel(
            name='SalesFunnels',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Funnel', models.TextField()),
                ('email', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='SFH_REST.accounts')),
            ],
        ),
        migrations.CreateModel(
            name='Clients',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.CharField(max_length=15)),
                ('Firm_ID', models.ManyToManyField(to='SFH_REST.Firms')),
            ],
        ),
        migrations.CreateModel(
            name='Calls',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('callerNumber', models.CharField(max_length=15)),
                ('lastStep', models.IntegerField()),
                ('conversationThread', models.TextField()),
                ('callRecording', models.BinaryField()),
                ('datetime', models.DateTimeField()),
                ('clientComments', models.TextField()),
                ('callerComments', models.TextField()),
                ('Firm_ID', models.ManyToManyField(to='SFH_REST.Firms')),
                ('clientNumber', models.ManyToManyField(to='SFH_REST.Clients')),
            ],
        ),
        migrations.AddField(
            model_name='accounts',
            name='Firm_ID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='SFH_REST.firms'),
        ),
    ]
