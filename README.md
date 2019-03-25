# Email notification

To add an e-mail notification to the application, create the app.properties file with the content:

```
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=<your e-mail adress>
spring.mail.password=<your e-mail password>
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
```

Then add this file in the application configuration. 

## VM configuration

Go to Edit Configurations...
Add this line to VM options:

```
-Dspring.config.location="<path to your app.properties file>"
```