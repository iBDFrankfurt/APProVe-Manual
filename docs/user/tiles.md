---
# This is the title of the article
title: Projektkacheln
# This is the icon of the page
icon: operate
# This control sidebar order
order: 0
# Set author
author: Timo Schneider
# Set writing time
date: 2022-10-17
# A page can have multiple categories
category:
- Administration
# A page can have multiple tags
tag:
- Projektkachel
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

# Projektkacheln
In APProVe werden Projektkacheln dazu benutzt, Projekte einzuordnen und zu gruppieren, wodurch [Projektlisten](../navigation/lists.md) entstehen (Eine Projektkachel beinhaltet also genau eine Projektliste). Dabei gibt es voreingestellte Projektkacheln und frei definierbare Projektkacheln. Als Wissenschaftler ist für Sie die Projektkachel ````Meine Projekte```` voreingestellt.
Die Projektkacheln gibt es für Wissenschaftler, Nutzergruppen und das Projektmanagement. Wenn Sie eine Projektkachel für eine Nutzergruppe freigeben möchten, können Sie [hier](../management/tiles.md) weiterlesen.
<br/>
<br/>
Bitte beachten Sie außerdem, dass bei der Suche nach passenden Projekten immer genau die Kacheldefinition verwendet wird. Sollten Sie beim Erstellen einer Kachel keine Tags mit angeben, werden auch nur Projekte gesucht, die keine Tags beinhalten!

::: tip Inhaltsangabe
[[toc]]
:::


## Projektkacheln der Wissenschaftler
Wenn Sie sich als Wissenschaftler in APProVe angemeldet haben, finden Sie in Ihrer [Übersichtsseite](../navigation/dashboard.md) die Projektkachel ```Meine Projekte```. Wenn Sie darauf klicken werden Sie automatisch zu einer Übersicht über Ihre Projekte weitergeleitet. Sofern Sie bereits Projekte eingereicht haben, oder an einem Projekt beteiligt sind, werden die Projekte in einer [Projektliste](../navigation/lists.md) dargestellt.
<br/>
<br/>
<div class="row">
    <div class="col-lg-4">
    <p>
        In diesem Bild sehen Sie ein Beispiel, wie Ihre Ansicht aussehen könnte. 
    </p>
    <br/>
    </div>
    <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
               <img :src="$withBase('/img/navigation/myProjectsTile.png')" class="float-right" alt="APProVe Übersicht über meine Projekte">
            </label>
          </div>
        </figure>
    </div>
</div>


## Projektkacheln der Nutzergruppen
Eine Nutzergruppe ist eine Gruppe von Nutzern, die in einer bestimmten [Rolle](roles.md) sind. Für diese [Rollen](roles.md) können eigene Projektkacheln definiert werden, die dieser Nutzergruppe angezeigt werden.
<br/>
<br/>
<div class="row">
    <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
               <img :src="$withBase('/img/navigation/overviewUserWithTiles.png')" class="float-left" alt="APProVe Übersicht über meine Projekte">
            </label>
          </div>
        </figure>
    </div>
    <div class="col-lg-4">
        <p>
            Wenn Sie in einer dieser Nutzergruppen sind, wird ein neuer Abschnitt <code>Für Sie freigegebene Projektkacheln</code> in Ihrem <a href="../navigation/dashboard.html">Übersichtsseite</a> angezeigt. 
        </p>
        <br/>
    </div>
</div>

## Projektkacheln des Projektmanagements

<br/>
<br/>
<div class="row">
    <div class="col-lg-4">
    <p>
        Wenn Sie Teil des Projektmanagements sind, entfällt die Projektkachel <code>Meine Projekte</code> und stattdessen sehen Sie zunächst keine Projektkacheln. Der nächste Abschnitt <a href="tiles.html#projektkacheln-erstellen-und-bearbeiten">Projektkacheln erstellen und bearbeiten</a> erklärt Ihnen, wie Sie Projekte in <a href="tiles.html">Projektkacheln</a> gruppieren können.
    </p>
    <br/>
    </div>
    <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
               <img :src="$withBase('/img/navigation/overviewAdmin.png')" class="float-right" alt="APProVe Übersicht des Projektmanagers">
            </label>
          </div>
        </figure>
    </div>
</div>

<br/>
<br/>

::: warning 
Folgender Abschnitt ist nur für das Projektmanagement
<br/>
:::

## Projektkacheln erstellen und bearbeiten
Als Projektmanager haben Sie die Möglichkeit Projektkacheln frei zu definieren. Die Kachelverwaltung finden Sie unter: `Mein Name --> Adminbereich --> Verwaltung --> Projektkacheln`.
<br/>
<br/>
<div class="row">
    <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
               <img :src="$withBase('/img/navigation/tilesAdmin.png')" class="float-left" alt="APProVe administrative Übersicht zu Projektkacheln">
            </label>
          </div>
        </figure>
    </div>
    <div class="col-lg-4">
        <p>
            APProVe bietet Ihnen bereits vordefinierte Projektkacheln an, die Sie verwenden können. Sie können jedoch mit dem Klick auf <code>Kachel hinzufügen</code> eine neue Projektkachel nach Ihren wünschen definieren. Eine genaue Anleitung finden Sie im nächsten Abschnitt <a href="tiles.html#projektkachel-erstellen">Projektkacheln erstellen</a>.
        </p>
        <br/>
    </div>
</div>
<br/>
<br/>

### Projektkachel erstellen
<br/>
<br/>
APProVe bietet Ihnen die Möglichkeit eigene Projektkacheln zu definieren. Wenn Sie auf den Button <code>Kachel hinzufügen</code> klicken öffnet sich ein neues Fenster, indem Sie eine neue Projektkachel definieren können.
<br/>
<br/>
<div class="row">
    <div class="col-lg-4">
        <p>
            Wenn Sie eine neue Projektkachel erstellen möchten, klicken Sie auf diesen Button.
        </p>
        <br/>
    </div>
    <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
               <img :src="$withBase('/img/navigation/addTile.png')" class="float-right" alt="APProVe Button zum Erstellen einer Projektkachel">
            </label>
          </div>
        </figure>
    </div>
</div>

<br/>
<br/>

<div class="row">
    <p>
        Anschließend öffnet sich ein Modal, in dem Sie Ihre Projektkachel erstellen können.
    </p>
    <br/>
    <br/>
    <div class="col-lg-12">
        <figure>
          <div class="container">
            <label for="Entity">
               <img :src="$withBase('/img/navigation/addTileModal.png')" class="center-image" alt="APProVe Modal zum Erstellen einer Projektkachel">
            </label>
          </div>
        </figure>
    </div>
     <div class="col-lg-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Projektkachelname</th>
              <td>Ihre neue Projektkachel sollte einen Namen bekommen, dieser wird den Wissenschaftlern, Nutzergruppen oder Projektmanagern auf Ihrer jeweiligen Startseite angezeigt und sollte kurz und aussagekräftig sein.</td>
            </tr>
            <tr>
              <th scope="row">Projektkachelbeschreibung</th>
              <td>Mittels der Beschreibung der Projektkachel können Sie Ihre Angaben zusätzlich erweitern.</td>
            </tr>
            <tr>
              <th scope="row">Status</th>
              <td>Welche verschiedenen Status eines Projekts in dieser Kachel gruppiert werden sollen. Hierbei ist eine Mehrfachauswahl möglich.</td>
            </tr>
            <tr>
              <th scope="row">Rollen</th>
              <td>Beschreibt die Rollen, die zur Anzeige der Projekte genutzt werden sollen. Detaillierte Informationen finden Sie unter <a href="roles.html">Rollen</a>. </td>
            </tr>
            <tr>
              <th scope="row">Schwerpunkte</th>
              <td>Durch die Schwerpunkte können Sie entscheiden welche Projekte gruppiert werden sollen. Sie können mehrere Schwerpunkte auswählen. Sollten Projekte mehrere Schwerpunkte haben, können diese in mehreren Projektkacheln auftauchen. Außerdem erfolgt eine Gruppierung in einen gemeinsamen Schwerpunkt nur dann, wenn das Projekt diesen explizit ausgewählt hat. Mehr Informationen finden Sie unter <a href="focus.html">Schwerpunkte</a>.</td>
            </tr>
            <tr>
              <th scope="row">Schlagwörter</th>
              <td>Zur Eingruppierung von Projekten zu Projektkacheln können Sie ebenfalls Schlagwörter (Tags) benutzen. Falls Schlagwörter ausgewählt wurden, werden nur Projekte eingruppiert, die diese Schlagwörter auch beinhalten. Mehr Informationen finden Sie unter <a href="tags.html">Schlagwörter</a>.</td>
            </tr>
          </tbody>
        </table>
    </div>
</div>

<br/>
<br/>

Wenn Sie Projekte einem Nutzer zur Ansicht zur Verfügung stellen wollen, können Sie im Abschnitt [Kachelverwaltung](../management/tiles.md) weiterlesen.

### Projektkachel bearbeiten

Möchten Sie hingegen eine vorhandene Projektkachel editieren, klicken Sie bei der entsprechenden Projektkachel auf ```Editieren```, wie im nachfolgenden Bild zusehen ist.

<figure>
  <div class="container">
    <label for="Entity">
       <img :src="$withBase('/img/navigation/editTile.png')" class="" alt="APProVe bearbeiten einer Projektkachel">
    </label>
  </div>
</figure>


Anschließend öffnet sich die gleiche Ansicht, wie beim Erstellen eines Modals. Sie können demnach genau so vorgehen, wie zuvor beschrieben in Projektkachel [erstellen](tiles.md#projektkacheln-erstellen-und-bearbeiten).
