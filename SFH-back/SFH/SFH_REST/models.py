from django.db import models

class Firms(models.Model):
    name = models.CharField(max_length = 128)
    addInfo = models.TextField()

    def __str__(self):
        return self.name

class Accounts(models.Model):
    username = models.CharField(max_length = 64)
    firstname = models.CharField(max_length = 64)
    secondname =  models.CharField(max_length = 64)
    email = models.EmailField(unique = True)
    Firm_ID = models.ForeignKey(
        Firms,
        on_delete = models.CASCADE,
    )
    hash = models.TextField()
    roles = (
        ('0', 'ADMIN'),
        ('1', 'OWNER'),
        ('2', 'CHIEF_SALES_MANAGER'),
        ('3', 'SALES_MANAGER')
    )
    role = models.CharField(
        max_length = 1,
        choices = roles,
    )
    isUsed = models.BooleanField(default = True)

    def __str__(self):
        return self.username

class Clients(models.Model):
    Firm_ID = models.ManyToManyField(Firms)
    number = models.CharField(max_length = 15)
    firstname = models.CharField(max_length = 64)
    secondname = models.CharField(max_length = 64)

    def __str__(self):
        return self.number

class SalesFunnels(models.Model):
    AccountsID = models.ForeignKey(
        Accounts,
        on_delete = models.CASCADE,
    )
    Funnel = models.TextField()
    
    def __str__(self):
        return str(self.AccountsID)

class SalesScripts(models.Model):
    Firm_ID = models.ForeignKey(
        Firms,
        on_delete = models.CASCADE,
    )
    datetime = models.DateTimeField()
    script = models.TextField()
    isUsed = models.BooleanField(default = True)
    comments = models.TextField()

    def __str__(self):
        return str(str(self.Firm_ID) + str(self.datetime))

class Calls(models.Model):
    Firm_ID = models.ManyToManyField(Firms)
    clientNumber = models.ManyToManyField(Clients)
    callerNumber = models.CharField(max_length = 15)
    lastStep = models.IntegerField()
    conversationThread = models.TextField()
    callRecording = models.BinaryField()
    datetime = models.DateTimeField()
    clientComments = models.TextField()
    callerComments = models.TextField()

    def __str__(self):
        return str(self.callerNumber) + str(self.datetime)