---
# This is the title of the article
title: Projekte umhängen
# This is the icon of the page
icon: operate
# This control sidebar order
order: 0
# Set author
author: Timo Schneider
# Set writing time
date: 2022-08-05
# A page can have multiple categories
category:
- Features
# A page can have multiple tags
tag:
- Reassign Project
# this page is sticky in article list
sticky: false
# this page will appear in starred articles
star: false
# You can customize footer content
footer: Entwickelt von der interdisziplinären Biomaterial- und Datenbank Frankfurt (iBDF)
# You can customize copyright content
copyright: false
---

Lernen Sie hier, wie Sie Projekte von einer Person an eine andere übergeben können.

<!-- more -->
::: tip Inhaltsangabe
[[toc]]
:::

## Projekte umhängen
APProVe bietet Ihnen die Möglichkeit eine größere Anzahl an Projekten von einer Person zu einer anderen Person zu übertragen.
So können Sie beispielsweise alle Projekte, die eine Person A erstellt hat einer Person B übertragen.

Im Folgenden wird Ihnen ausführlich erklärt, wo Sie diese Funktion finden und wie Sie sie bedienen.

### Navigation
Damit Sie ein Projekt umhängen können, benötigen Sie Zugriff auf die Personenverwaltung unter `Menü -> Verwaltung -> Personen & Kliniken`.
Anschließend klicken sie auf den `Editieren-Button`, so als würden Sie die Person bearbeiten wollen. Im nachfolgenden Beispiel werden wir
die Projekte von `demo admin` an ``demo admin2`` hängen.


<figure>
  <div class="container">
    <label for="Container">
    <img :src="$withBase('/img/features/navigationReassign.png')" alt="Navigation zum Umhängen von Projekten">
    </label>
      <figcaption>Navigation zum Umhängen von Projekten</figcaption>
  </div>
</figure>


Dazu editieren Sie die Person, deren Projekte umgehängt werden sollen.

### Umhängen
Nach dem Klicken auf den `Editieren-Button` öffnet sich ein Modal, dass Ihnenn die Personeninformationen von ``demo admin`` anzeigt.


<figure>
  <div class="container">
    <label for="Container">
    <img :src="$withBase('/img/features/menuReassign.png')" alt="Menü zum Umhängen von Projekten">
    </label>
      <figcaption>Menü zum Umhängen von Projekten</figcaption>
  </div>
</figure>

In diesem Beispiel wollen wir die leitenden Projekte an eine andere Person hängen. Wir sehen, dass ``demo admin`` 3 Projekte leitet.
Um die Projekte umzuhängen, müssen wir daher in den Reiter ``Leitende Projekte`` navigieren.

<figure>
  <div class="container">
    <label for="Container">
    <img :src="$withBase('/img/features/menu2Reassign.png')" alt="Menü zum Umhängen von Projekten">
    </label>
      <figcaption>Menü zum Umhängen von Projekten</figcaption>
  </div>
</figure>

Sie sehen die Checkboxen zu ``Change Ownership``. Diese erscheinen nur, wenn Sie eine Person bearbeiten!

Wählen Sie nun aus, welche Projekte Sie umhängen möchten. Dazu klicken Sie auf den entsprechenden Button.


<figure>
  <div class="container">
    <label for="Container">
    <img :src="$withBase('/img/features/menu3Reassign.png')" alt="Menü zum Umhängen von Projekten">
    </label>
      <figcaption>Menü zum Umhängen von Projekten</figcaption>
  </div>
</figure>

Hier möchten wir demnach das Projekt UCT-5-2022 umhängen. Nachdem wir die entsprechende Schaltfläche ausgewählt haben,
erscheint ein neuer Button ``Projekte an andere Person hängen``. Um die Person auszuwählen, der Sie die Projekte übergeben möchten, 
klicken Sie auf diesen Button.


<figure>
  <div class="container">
    <label for="Container">
    <img :src="$withBase('/img/features/menu4Reassign.png')" alt="Auswahl der Person">
    </label>
      <figcaption>Auswahl der Person</figcaption>
  </div>
</figure>

Tragen Sie nun den Namen der Person ein, die die Projekte übertragen bekommen soll. In diesem Beispiel ist das ``demo admin2``.

Es erscheint eine Zusammenfassung der Projekte und Person, die zuvor ausgewählt wurden. Wenn Sie mit allem einverstanden sind,
klicken Sie auf den Button ``Projekte umhängen``.

<figure>
  <div class="container">
    <label for="Container">
    <img :src="$withBase('/img/features/menu5Reassign.png')" alt="Übersicht">
    </label>
      <figcaption>Übersicht</figcaption>
  </div>
</figure>

um zu überprüfen, ob das Projekt erfolgreich umgehängt wurde, können Sie die beiden Personen noch einmal vergleichen.
Im nachfolgenden Bild sehen Sie, dass ``demo admin2`` das übertragene Projekt nun selbst leitet.

<figure>
  <div class="container">
    <label for="Container">
    <img :src="$withBase('/img/features/menu6Reassign.png')" alt="Übersicht">
    </label>
      <figcaption>Übersicht</figcaption>
  </div>
</figure>