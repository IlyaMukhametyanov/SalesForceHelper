from django.shortcuts import get_object_or_404, render
from rest_framework import viewsets
from rest_framework.permissions import *
from rest_framework.response import Response
from .serializer import *
from .models import *

BLOCK_BROWSER_API = True

# Create your views here.

#def index(request, path=''):
#    """
#    Главная страница. Контейнер для одностраничного плижения
#    """
#    return render(request, 'index.html')

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'username': user.username,
            'email': user.email,
        })

class FirmsViewSet(viewsets.ModelViewSet):
    queryset = Firms.objects.all()
    serializer_class = FirmsSerializer

    def perform_create(self, serializer):
        serializer.save()

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        
        if BLOCK_BROWSER_API:
            Account = Accounts.objects.filter(username = request.user.username)
            if len(Account) == 0:
                queryset = queryset.filter(id = -1)
            else:
                queryset = queryset.filter(id = ((Account[0]).Firm_ID_id))

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
    def retrieve(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def update(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def partial_update(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def destroy(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

class AccountsViewSet(viewsets.ModelViewSet):
    queryset = Accounts.objects.all()
    serializer_class = AccountsSerializer

    def perform_create(self, serializer):
        #serializer.save(user = self.request.user)
        serializer.save()

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        
        if BLOCK_BROWSER_API:
            Account = Accounts.objects.filter(username = request.user.username)
            if len(Account) == 0:
                queryset = queryset.filter(id = -1)
            else:
                queryset = queryset.filter(Firm_ID = ((Account[0]).Firm_ID))

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
    def retrieve(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def update(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def partial_update(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def destroy(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

class AccountViewSet(viewsets.ModelViewSet):
    queryset = Accounts.objects.all()
    serializer_class = AccountsSerializer

    def perform_create(self, serializer):
        #serializer.save(user = self.request.user)
        serializer.save()

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        if BLOCK_BROWSER_API:
            Account = Accounts.objects.filter(username = request.user.username)
            if len(Account) == 0:
                queryset = queryset.filter(id = -1)
            else:
                queryset = queryset.filter(username = ((Account[0]).username))

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def update(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def partial_update(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def destroy(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

class ClientsViewSet(viewsets.ModelViewSet):
    queryset = Clients.objects.all()
    serializer_class = ClientsSerializer

    def perform_create(self, serializer):
        #serializer.save(user = self.request.user)
        serializer.save()

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        if BLOCK_BROWSER_API:
            Account = Accounts.objects.filter(username = request.user.username)
            if len(Account) == 0:
                queryset = queryset.filter(id = -1)
            else:
                queryset = queryset.filter(Firm_ID = ((Account[0]).Firm_ID))

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
    def retrieve(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def update(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def partial_update(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def destroy(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

class SalesFunnelsViewSet(viewsets.ModelViewSet):
    queryset = SalesFunnels.objects.all()
    serializer_class = SalesFunnelsSerializer

    def perform_create(self, serializer):
        #serializer.save(user = self.request.user)
        serializer.save()

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        
        if BLOCK_BROWSER_API:
            Account = Accounts.objects.filter(username = request.user.username)
            if len(Account) == 0:
                queryset = queryset.filter(id = -1)
            else:
                queryset = queryset.filter(AccountsID = ((Account[0]).id))

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
    def retrieve(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def update(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def partial_update(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def destroy(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

class SalesScriptsViewSet(viewsets.ModelViewSet):
    queryset = SalesScripts.objects.all()
    serializer_class = SalesScriptsSerializer

    def perform_create(self, serializer):
        #serializer.save(user = self.request.user)
        serializer.save()

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        if BLOCK_BROWSER_API:
            Account = Accounts.objects.filter(username = request.user.username)
            if len(Account) == 0:
                queryset = queryset.filter(id = -1)
            else:
                queryset = queryset.filter(Firm_ID = ((Account[0]).Firm_ID))

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
    def retrieve(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def update(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def partial_update(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def destroy(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

class CallsViewSet(viewsets.ModelViewSet):
    queryset = Calls.objects.all()
    serializer_class = CallsSerializer

    def perform_create(self, serializer):
        #serializer.save(user = self.request.user)
        serializer.save()

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        if BLOCK_BROWSER_API:
            Account = Accounts.objects.filter(username = request.user.username)
            if len(Account) == 0:
                queryset = queryset.filter(id = -1)
            else:
                queryset = queryset.filter(Firm_ID = ((Account[0]).Firm_ID))

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
    def retrieve(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def update(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def partial_update(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')

    def destroy(self, request, pk=None):
        return HttpResponseNotFound('<hThere is no such function in the API</h1>')