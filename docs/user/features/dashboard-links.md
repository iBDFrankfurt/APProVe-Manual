---
# This is the title of the article
title: Dashboard-Links
# This is the icon of the page
icon: operate
# This control sidebar order
order: 0
# Set author
author: Timo Schneider
# Set writing time
date: 2022-10-19
# A page can have multiple categories
category:
- Einstellungen
# A page can have multiple tags
tag:
- Links
- Kachel
# this page is sticky in article list
sticky: false
# this page will appear in starred articles
star: false
# You can customize footer content
footer: Entwickelt von der interdisziplinären Biomaterial- und Datenbank Frankfurt (iBDF)
# You can customize copyright content
copyright: false
---


<!-- more -->

# Dashboard Links
APProVe bietet Ihnen die Möglichkeit Links auf dem [Dashboard](../navigation/dashboard.md) anzeigen zu lassen. Diese werden dann als Kachel angezeigt und können auch einfachen Nutzern angezeigt werden.

::: tip Inhaltsangabe
[[toc]]
:::


## Dashboard Links erstellen
Wenn Sie sich als Admin in APProVe angemeldet haben, finden Sie unter ```Menü --> Einstellungen --> Dashboard-Links``` die Dashboard-Links.

<figure>
  <div class="container">
    <label for="Container">
    <img :src="$withBase('/img/features/dashboard-links-menu.png')" class="float-right" alt="APProVe Übersicht über alle Dashboard-Links">
    </label>
      <figcaption>APProVe Übersicht über alle Dashboard-Links</figcaption>
  </div>
</figure>


Um einen neuen Link zu erstellen, klicken sie auf ```+ Kachel hinzufügen```. 

<figure>
  <div class="container">
    <label for="Container">
    <img :src="$withBase('/img/features/dashboard-links-add.png')" class="float-right" alt="Dashboard-Link hinzufügen">
    </label>
      <figcaption>Dashboard-Link hinzufügen</figcaption>
  </div>
</figure>

Vergeben Sie einen Namen, dieser wird als Überschrift ihrer Kachel angezeigt und kann auch unter diesem Namen in der Dashboard-Link-Übersicht gesucht werden.
Die Beschreibung dient als Unterschrift in der Kachel.
Sie haben auch die Möglichkeit ein Icon zu vergeben, dass in der Kachel angezeigt wird.
Sie können jeden beliebigen Link auswählen, dieser muss jedoch entweder mit ````http```` oder ```https``` beginnen. Zum Beispiel ```https://www.google.de```.

Wenn Sie auf ````Hinzufügen```` klicken wird der neue Link im Dashboard angezeigt.

<figure>
  <div class="container">
    <label for="Container">
    <img :src="$withBase('/img/features/added-dashboard-link.png')" class="float-right" alt="Erstellter Dashboard-Link">
    </label>
      <figcaption>Erstellter Dashboard-Link</figcaption>
  </div>
</figure>

::: tip
Sie haben auch die Möglichkeit auf Verwaltungs- oder Einstellungselemente zu springen. In der zuvor gezeigten Grafik wird ein Link aufgerufen nach ````https://approved.ibdf-frankfurt.de/admin/administration?currentStep=5````. Mittels des Parameters ```?currentStep=``` können Sie direkt auf einen Schritt in der Verwaltung springen.
:::