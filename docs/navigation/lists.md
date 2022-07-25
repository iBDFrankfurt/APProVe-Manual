---
# This is the title of the article
title: Projektlisten
# This control sidebar order
order: 7
# Set author
author: Timo Schneider
# Set writing time
date: 2022-07-25
# A page can have multiple categories
category:
- Project
# A page can have multiple tags
tag:
- List
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

Alles, was Sie über die Projektlisten wissen sollten.

<!-- more -->

# Listen

APProVe stellt, die in der Datenbank gespeicherten Informationen, als Listen dar.

::: tip Inhaltsangabe
[[toc]]
:::

## Projektlisten
In den sogenannten [Projektkacheln](administration/tiles.md) befinden sich gruppierte Projekte, die als eine Liste dargestellt werden. So zeigt beispielsweise die Projektkachel ```Meine Projekte``` alle Projekte an, die der/die Forschende selbst erstellt hat, leitet, an denen er/sie beteiligt 
oder als Kontaktperson genannt ist. Für weitere Informationen zu den Projektkacheln lesen Sie [hier](administration/tiles.md) weiter.
<br/>
<br/>
<div class="row">
    <div class="col-lg-4">
        <p>
            Wenn Sie eine Projektkachel angeklickt haben, öffnet sich ein neues Fenster, in dem Ihre Projektliste angezeigt wird, wie das nebenstehende Bild veranschaulicht.
        </p>
        <br/>
        <p>
            Jedes Projekt und die zugehörigen Informationen wird dabei in einer Zeile angezeigt. Je nach Umfang der Liste beinhaltet diese nicht direkt immer alle Projekte. Standardmäßig werden die ersten 25 Projekte in einer Projektliste angezeigt. Sie können die Länge der Liste natürlich selbst verändern, indem Sie auf den <code>Einstellungen</code> Button klicken. Mehr dazu im nächsten Abschnitt.
        </p>
        <p>
            Jede Projektliste ist zudem filterbar. Das bedeutet Sie können die Projekte beispielsweise nach Projektnummer oder Projektleiter durchsuchen. Dazu geben Sie in der Suche Ihren Suchbegriff ein und klicken anschließend auf <code>Los</code>.
        </p>
         <br/>
        <p>
            Möchten Sie ein Projekt aufrufen, klicken Sie dafür auf den Button mit dem Auge in der Spalte <code>Aktionen</code>. Dies öffnet ein neues Fenster mit einer detaillierten <a href="view-project.html">Projektansicht</a>. Die Projektliste selbst dient lediglich zur Übersicht über vorhandene Projekte.
        </p>
    </div>
    <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
               <img src="/img/navigation/myProjectsTile.png" class="float-right" alt="ProSkive-Bio Übersicht über meine Projekte">
            </label>
          </div>
        </figure>
    </div>
</div>

## Einstellungsmöglichkeiten der Projektlisten
Sie haben die Möglichkeit, die Ansicht der Projektlisten anzupassen. Sie können so angeben, wie viele Projekte pro Seite oder welche Spalten in der Projektliste angezeigt werden sollen. Das Projektmanagement hat zudem die Möglichkeit die Listen auf verschiedene Arten zu exportieren. Mehr dazu erfahren sie unter [Projekte exportieren](project-export.md).
<br/>
<br/>
<div class="row">
    <div class="col-lg-4">
        <p>
            Nachdem Sie auf Einstellungen geklickt haben, öffnet sich ein ein kleineres Fenster, wie das nebenstehende Bild verdeutlicht. Dort können Sie gewünschte Spalten hinzufügen oder nicht gewünschte Spalten aus der Tabellenübersicht entfernen. 
        </p>
        <p>
            Eine Projektliste zeigt standardmäßig pro Seite bis zu 25 Projekte an. Dies minimiert die Ladezeiten zur Anzeige der Projekte. Möchten Sie weitere Projekte einsehen, klicken Sie am Ende der Liste auf die entsprechende Seitenzahl. In den Einstellungen haben Sie zudem die Möglichkeit, die maximale Anzahl an angezeigten Projekten selbst zu definieren. Bitte beachten Sie, dass Ihre persönliche Einstellung zurzeit <strong>nicht</strong> gespeichert werden und beim Verlassen der Seite verloren gehen. Dies gilt auch für die Anzeige der Spalten, die in der Liste auftauchen sollen!
        </p>
    </div>
        <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
               <img src="/img/navigation/projectListSettings.png" class="float-right" alt="APProVe Einstellungen der Projektliste">
            </label>
          </div>
        </figure>
    </div>
</div>
<br/>
<br/>

::: warning Folgender Abschnitt ist nur für das Projektmanagement relevant
<br/>
:::

Wenn Sie Teil des Projektmanagements der Biobank sind haben Sie zudem die Möglichkeit, über die Einstellungen der jeweiligen Projektliste, die aktuell in der Tabelle angezeigten Daten zu [exportieren](project-export.md).
<br/>
<br/>
<div class="row">
     <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
               <img src="/img/navigation/projectListSettingsAdmin.png" class="float-left" alt="APProVe Einstellungen der Projektliste">
            </label>
          </div>
        </figure>
    </div>
    <div class="col-lg-4">
        <p>
            Dazu stehen Ihnen drei Exportmöglichkeiten zur Auswahl.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">CSV-Export</th>
              <td>Mithilfe eines CSV-Exports können Sie die aktuell angezeigte und gefilterte Liste als CSV-Datei exportieren. Diese lässt sich anschließend in Excel oder LibreCalc öffnen und weiter auswerten.</td>
            </tr>
            <tr>
              <th scope="row">CentraXX-Export</th>
              <td>APProVe bietet zudem die Möglichkeit Projektlisten und/oder Projektleiter in einem für das Biobankmanagementsystem CentraXX kompatiblen Format zu exportieren. Diese Dateien lassen sich im Anschluss in CentraXX XML-Import Stammdaten importieren.</td>
            </tr>
            <tr>
              <th scope="row">APProVe-Export</th>
              <td>Wenn Sie mehrere Instanzen von APProVe verwalten, können Sie durch diesen Export ein Projekt oder eine Projektliste in einer anderen Instanz importieren.</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <br/>
    </div>
</div>

<p>
    Weitere Informationen zum Import und Export von Projekten finden Sie unter <a href="project-export.html">Projektexport</a>, sowie unter <a href="project-import.md.html">Projektimport</a>.
</p>
<br/>
<br/>
