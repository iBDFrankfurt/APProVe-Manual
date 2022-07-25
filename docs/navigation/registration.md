---
# This is the title of the article
title: Registrierung
# This control sidebar order
order: 2
# Set author
author: Timo Schneider
# Set writing time
date: 2022-07-20
# A page can have multiple categories
category:
- Navigation
# A page can have multiple tags
tag:
- Registration
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

Erfahren Sie hier, wie Sie einen Account bei APProVe beantragen können.

<!-- more -->

# Registrierung

::: tip Inhaltsangabe
[[toc]]
:::

## Registrierung mit Beispiel

Um APProVe nutzen zu können, muss für jeden Nutzer ein eigener Account angelegt und freigeschaltet werden. Die Freischaltung des Nutzungskontos erfolgt über eine verantwortliche Person der Biobank und kann per E-Mail beantragt werden. Die Kontaktdaten entnehmen Sie bitte der jeweiligen Startseite von APProVe an Ihrem Standort. 
Für Frankfurt wäre das beispielsweise [APProVe Frankfurt](https://approve.ibdf-frankfurt.de).
<br/>

Dort finden Sie den Button ```Zugang beantragen```, worüber Sie direkt eine E-Mail an die Biobank des UCT senden können.
<br/>
<br/>
<figure>
  <div class="container">
    <label for="Entity">
       <img src="/img/navigation/startPage.png" class="center-image" alt="APProVe Startseite">
    </label>
    <figcaption>APProVe Startseite</figcaption>
  </div>
</figure>



::: warning Folgender Abschnitt ist nur für das Projektmanagement
<br/>
:::


## Nutzer freischalten
Um einen Nutzer freizuschalten muss dieser zunächst in Keycloak erstellt und ein initiales Passwort vergeben werden. Danach kann sich der Nutzer in APProVe einloggen. Um jedoch schon bestehende die Projekte korrekt an diesen Nutzer zu koppeln, muss dieser noch in APProVe eingetragen und mit dem in Keycloak angelegten Nutzer verknüpft werden.
Eine detaillierte Anleitung, wie Sie einen Nutzer in Keycloak anlegen können, finden Sie hier: [Keycloak](keycloak.md)

Wie Sie eine Person in APProVe anlegen und diese anschließend mit Keycloak verknüpfen, finden Sie hier: [Personen](administration/people.md)
