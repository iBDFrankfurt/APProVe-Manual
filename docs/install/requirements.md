---
# This is the title of the article
title: Systemvorraussetzungen
# This is the icon of the page
icon: enum
# This control sidebar order
order: 0
# Set author
author: Timo Schneider
# Set writing time
date: 2023-02-14
# A page can have multiple categories
category:
- Install
# A page can have multiple tags
tag:
- system-requirements
- install
# this page is sticky in article list
sticky: false
# this page will appear in starred articles
star: false
# You can customize footer content
footer: Entwickelt von der interdisziplinären Biomaterial- und Datenbank Frankfurt (iBDF)
# You can customize copyright content
copyright: false
toc: false
---
Das Zielsystem muss folgende Anforderungen erfüllen, um einen reibungslosen Betrieb zu gewährleisten:

- RAM 6GB
- Multi-core processor (e.g. Intel i5)
- 500 MB hard disk space (depends on how many projects should be stored and if those have many documents to upload)
- NGINX
- SSL Certificate or Certbot
- 1 Domain
- 3 Subdomains for Frontend, Backend, Keycloak (it can basically run on one, but it will require knowhow how to run Keycloak on a subdomain)
- sudo or root rights on server
- git
- docker and docker-compose
