---
# This is the title of the article
title: Personen
# This is the icon of the page

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
- Person
# this page is sticky in article list
sticky: false
# this page will appear in starred articles
star: false
# You can customize footer content
footer: Entwickelt von der interdisziplinären Biomaterial- und Datenbank Frankfurt (iBDF)
# You can customize copyright content
copyright: false
---

APProVe bietet die Funktionen Personen unabhängig eines der Keycloak-Benutzerkontos in der APProVe-Datenbank zu speichern und zu verwalten. Das bietet den Vorteil, dass eine Person als Projektleiter oder -beteiligter eingetragen werden kann ohne selbst ein Keycloak-Benutzerkonto zu besitzen.
Jedoch kann eine Verknüpfung zu einem, möglicherweise später angelegten, Benutzerkonto hergestellt werden.

<!-- more -->
::: tip Inhaltsangabe
[[toc]]
:::

::: warning ACHTUNG
Eine Person in APProVe ist nicht äquivalent zu einem Benutzer in Keycloak. Soll jemand Zugriff auf APProVe erhalten, so muss ein Benutzerkonto in Keycloak angelegt werden (s. dazu: [Keycloak](../permission/keycloak.md)).
Personen dienen ausschließlich zu Referenzzwecken als Projektleiter oder -beteiligter.
:::


## Übersicht über die Personen in APProVe
Um die Personenübersicht aufzurufen, navigieren Sie unter ``Menü -> Verwaltung -> Personen & Kliniken`` zur gewünschten Stelle.

<figure>
  <div class="container">
    <label for="Container">
    <img :src="$withBase('/img/administration/view-persons.png')" alt="Übersicht über die Personen">
    </label>
      <figcaption>Übersicht über die Personen</figcaption>
  </div>
</figure>

## Person hinzufügen
Möchten Sie eine Person hinzufügen, müssen Sie auf den Button ``+ Person hinzufügen`` klicken.
Anschließend öffnet sich ein neues Fenster, in dem Sie die Personendaten eingeben können.

<figure>
  <div class="container">
    <label for="Container">
    <img :src="$withBase('/img/administration/add-person-1.png')" alt="Eine neue Person anlegen">
    </label>
  </div>
</figure>



<figure>
  <div class="container">
    <label for="Container">
    <img :src="$withBase('/img/administration/add-person-2.png')" alt="Eine neue Person anlegen">
    </label>
      <figcaption>Eine neue Person anlegen</figcaption>
  </div>
</figure>
<p>
Tragen Sie hierzu alle mit einem Asterisk (*) markierten Felder ein. Möchten Sie die Person in APProVe zusätzlich mit Keycloak verknüpfen, können Sie im Feld <code>Keycloak ID</code> die ID aus Keycloak eintragen. Sie können zusätzlich auf den Button <code>Informationen aus Keycloak eintragen</code> klicken, um alle Personeninformationen automatisch aus Keycloak zu beziehen. Beachten Sie, dass dabei alle in APProVe schon vorhandenen Informationen durch die in Keycloak hinterlegten Informationen ersetzt werden. 
</p>

::: tip
Bei der Auswahl der [Klinik](clinic.md), muss diese vorher schon erstellt werden. Wenn bisher keine Klinik angelegt worden ist, können sie aus der Auswahlliste ``Other`` wählen und in das Freitextfeld eine eigene Klinik eintragen.
:::

## Person nachträglich mit Benutzerkonto verknüpfen

Benutzer haben nur dann Zugriff auf und Einsicht in ihre Projektskizzen, wenn ihr Benutzerkonto mit einer Person in APProVe verknüpft worden ist.  
Folgende Schritte sind notwendig um eine Verknüpfung der Person in APProVe mit dem Benutzerkonto in Keycloak herzustellen:

1. Prüfen Sie, ob die Person bereits verknüpft worden ist.

Dazu wählen Sie in der Liste unter ```Aktionen``` das Auge-Symbol zur jeweiligen Person aus.

<br/>
<br/>
<div class="row">
    <div class="col-lg-4">
    <p>
        In der Detail-Ansicht zeigt sich dann, ob die Person bereits mit einem Benutzerkonto verknüpft ist. In dem Fall sollte ein Buchstaben-Zahlen-Code im Feld <code>Keycloak ID</code> hinterlegt sein. Falls dies nicht der Fall ist, wird dies durch ein rotes "X" (:x:) gekennzeichnet.
    </p>
    </div>
    <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
               <img :src="$withBase('/img/administration/detail-person.png')" alt="Details zur Person">
            </label>
            <figcaption>Details zur Person</figcaption>
          </div>
        </figure>
    </div>
</div>
<br/>
<br/>

<br/>
<br/>
<div class="row">
    <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
                <img :src="$withBase('/img/administration/people-keycloak-id.png')" alt="Keycloak ID zur Person in Keycloak">
            </label>
            <figcaption>Keycloak ID zur Person in Keycloak</figcaption>
          </div>
        </figure>
    </div>
    <div class="col-lg-4">
    <p>
        2. Die benötigte ID entspricht der systeminternen ID der Person in Keycloak. Um diese ID einzusehen, navigieren Sie in Keycloak zu dem entsprechenden Nutzer.
    </p>
    </div>
</div>
<br/>
<br/>

<br/>
<br/>
<div class="row">
    <div class="col-lg-4">
    <p>
        3. Die ID aus Keycloak kopieren und im Bearbeitungsmodus der Person an der Stelle "Keycloak ID" wieder einfügen.
    </p>
    </div>
    <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
               <img :src="$withBase('/img/administration/edit-keycloak-id.png')" alt="Keycloak ID in APProVe anpassen">
            </label>
            <figcaption>Keycloak ID in APProVe anpassen</figcaption>
          </div>
        </figure>
    </div>
</div>
<br/>
<br/>

Wenn Sie erneut die Detail-Ansicht aufrufen sollte die erfolgreiche Verknüpfung durch ein grünes Häckchen (:heavy_check_mark:) angezeigt werden.
