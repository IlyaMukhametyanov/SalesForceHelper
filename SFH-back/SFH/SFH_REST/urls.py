# myapi/urls.py
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'firms', views.FirmsViewSet)
router.register(r'accounts', views.AccountsViewSet)
router.register(r'account', views.AccountViewSet)
router.register(r'clients', views.ClientsViewSet)
router.register(r'salesfunnels', views.SalesFunnelsViewSet)
router.register(r'salesscripts', views.SalesScriptsViewSet)
router.register(r'calls', views.CallsViewSet)
#router.register(r'api-token-auth/', views.CustomAuthToken.as_view(), basename='Token')

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = router.urls
urlpatterns += [
    path('api-token-auth/', views.CustomAuthToken.as_view()),
]