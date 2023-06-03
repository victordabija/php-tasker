FROM php:7.4-apache

# make sure apt is up to date
RUN apt-get update --fix-missing
RUN apt-get install -y curl

# mysql
RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable pdo_mysql

# apache
RUN a2enmod rewrite
RUN a2enmod headers
RUN service apache2 restart
