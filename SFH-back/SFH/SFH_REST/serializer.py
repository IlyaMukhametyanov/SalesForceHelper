# serializers.py
from rest_framework import serializers

from .models import *

class FirmsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Firms
        fields = (
            'name',
            'addInfo'
        )


class AccountsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Accounts
        fields = (
            'username',
            'firstname',
            'secondname',
            'email',
            'Firm_ID',
            'hash',
            'role',
            'isUsed'
        )

class ClientsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Clients
        fields = (
            'Firm_ID',
            'number',
            'firstname',
            'secondname'
        )

class SalesFunnelsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SalesFunnels
        fields = (
            'AccountsID',
            'Funnel'
        )

class SalesScriptsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SalesScripts
        fields = (
            'Firm_ID',
            'datetime',
            'script',
            'isUsed',
            'comments'
        )

class CallsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Calls
        fields = (
            'Firm_ID',
            'clientNumber',
            'callerNumber',
            'lastStep',
            'conversationThread',
            'callRecording',
            'datetime',
            'clientComments',
            'callerComments'
        )