from django.db import models

# Create your models here.

class News(models.Model):
    title = models.CharField(max_length=255)
    date = models.DateField()
    location = models.CharField(max_length=255)
    description = models.TextField()
    content = models.TextField(blank=True,null=True)
    image = models.ImageField(upload_to="images/",default="images/news_default.png") 



    def __str__(self):
        return self.title


