from django.urls import path
from .views import SignUp,Log_in,Log_out,UserProfileView,ChangeUsername

urlpatterns = [
    path('signup/', SignUp.as_view(), name='signup'),
    path('login/', Log_in.as_view(), name='login'),
    path('account/', Log_out.as_view(), name='logout'),
    path('account/details/', UserProfileView.as_view(), name='userprofileview'),
    path('account/profileUpdate/', ChangeUsername.as_view(), name='ChangeUsername' ), 
]