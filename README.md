# YastaBot
## Install
Install the required npm packages by using ```npm install``` 
## Run
Run the website using ```npm start```
## Production Build
Build the production build using ```npm run-script build``` and test it locally using ```serve build```
## Server Deployment 
Copy the build folder to the server under var/www/yastabot-website directory by using ```scp -r ~/local_dir buba@solutionbanks.com:/var/www/yastabot-website``` command
 
Create a “.htaccess” file in yastabot-website directory and add this snippet :
```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```
Open 000-default.conf file under etc/apache2/sites-available directory and add this snippet :
```
<VirtualHost *:80>
        ServerName www.yastabot.com
        DocumentRoot /var/www/yastabot-website
        ServerAlias yastabot.com
</VirtualHost>
```

## SSL Certificate Renewal 
 - [Video Tutorial](https://www.youtube.com/watch?v=O97YVt8Ceu0)
 - [Website Tutorial](https://onepagezen.com/letsencrypt-auto-renew-certbot-apache/)