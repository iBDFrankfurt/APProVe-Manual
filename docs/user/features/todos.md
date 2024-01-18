---
# This is the title of the article
title: To-do
# This is the icon of the page
icon: operate
# This control sidebar order
order: 0
# Set author
author: Timo Schneider
# Set writing time
date: 2022-08-27
# A page can have multiple categories
category:
- Features
# A page can have multiple tags
tag:
- To-do
# this page is sticky in article list
sticky: false
# this page will appear in starred articles
star: false
# You can customize footer content
footer: Entwickelt von der interdisziplinären Biomaterial- und Datenbank Frankfurt (iBDF)
# You can customize copyright content
copyright: false
---

Lernen Sie hier, wie Sie To-dos erstellen, diese projektabhängig machen, oder To-dos Personen übergeben können.

<!-- more -->
::: tip Inhaltsangabe
[[toc]]
:::

## Übersicht über die To-dos (bisher habe nur Admins Zugriff auf dieses Feature!)
To-dos treten in APProVe an drei verschiedenen Stellen auf. Zum einen werden an Sie zugewiesene To-dos auf Ihrem [Dashboard](../navigation/dashboard.md) angezeigt. 

<div class="col-lg-8">
    <figure>
       <div class="container">
         <label for="Entity">
            <img :src="$withBase('/img/navigation/overviewAdmin.png')" class="float-right" alt="APProVe Übersichtsseite des PM">
         </label>
           <figcaption>APProVe Übersichtsseite des PM</figcaption>
       </div>
     </figure>
</div>

Wenn Sie ein Projekt anschauen, finden Sie die To-Dos ebenfalls. Hier handelt es sich jedoch um To-dos speziell für ein Projekt.

<div class="col-lg-8">
    <figure>
       <div class="container">
         <label for="Entity">
            <img :src="$withBase('/img/features/projectTodo.png')" class="float-right" alt="To-dos am Projekt">
         </label>
           <figcaption>To-dos am Projekt</figcaption>
       </div>
     </figure>
</div>

Des Weiteren haben Sie als Projektmanager die Möglichkeit alle To-dos des Systems anzeigen zu lassen. Dafür navigieren Sie zu `Menü -> Verwaltung -> Todos`.

<div class="col-lg-8">
    <figure>
       <div class="container">
         <label for="Entity">
            <img :src="$withBase('/img/features/allTodos.png')" class="float-right" alt="Alle To-dos im System">
         </label>
           <figcaption>Alle To-dos im System</figcaption>
       </div>
     </figure>
</div>

### To-do erstellen
An allen oben genannten Stellen können Sie ein neues To-do erstellen.
Klicken Sie hierfür auf den Button `To-do hinzufügen` und geben Sie einen Text und gegebenenfalls eine oder mehrere Personen an, denen Sie dieses To-do zuweisen möchten.
Das Zuweisen von Personen erfolgt dabei über eine Suche. Geben Sie hierfür mindestens die ersten 3 Buchstaben des Nachnamens beziehungsweise des Vornamens ein, und wählen Sie eine Person aus der Auswahlliste.

<figure>
  <div class="container">
    <label for="Container">
    <img :src="$withBase('/img/features/newTodo.png')" alt="Neues To-do erstellen">
    </label>
      <figcaption>Neues To-do erstellen</figcaption>
  </div>
</figure>


::: tip
Bitte beachten Sie dabei, dass die Zuweisung eines To-dos an ein Projekt, nur über die Projektübersicht funktioniert.
:::
