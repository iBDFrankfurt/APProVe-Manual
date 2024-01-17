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
In APProVe entspricht eine Person nicht direkt einem Benutzer in Keycloak. Um Zugriff auf APProVe zu erhalten, muss ein Benutzerkonto in Keycloak erstellt werden (siehe dazu: [Person mit Keycloak verknüpfen](#person-mit-keycloak-verknüpfen).
Personen in APProVe dienen ausschließlich als Referenz für Projektleiter oder -beteiligte.
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

<p>
Tragen Sie hierzu alle mit einem Asterisk (*) markierten Felder ein. Möchten Sie die Person in APProVe zusätzlich mit Keycloak verknüpfen, 
können Sie im Feld <code>Keycloak ID</code> die ID aus Keycloak eintragen. 

Sie können zusätzlich auf den Button <code>Nutzerinformationen von Keycloak übernehmen</code> klicken, um alle Personeninformationen automatisch aus Keycloak zu beziehen. 
Beachten Sie, dass dabei alle in APProVe schon vorhandenen Informationen durch die in Keycloak hinterlegten Informationen ersetzt werden. 

Im umgekehrten Fall können Sie die Daten auch von APProVe nach Keycloak senden. Dafür klicken Sie auf den Button <code>Nutzerinformationen nach Keycloak senden</code>.
Falls Sie eine Person bearbeiten möchten und die Daten gleichzeitig nach Keyclaok senden möchten, so muss ein Häkchen bei <code>Nutzerinformationen nach Keycloak senden</code>

Egal für welchen Fall Sie sich entscheiden sollten, es muss eine Keycloak ID eingetragen werden, damit das System die richtige Zuordnung machen kann.
</p>

::: tip
Bei der Auswahl der [Klinik](clinic.md), muss diese vorher schon erstellt werden. Wenn bisher keine Klinik angelegt worden ist, können sie aus der Auswahlliste ``Other`` wählen und in das Freitextfeld eine eigene Klinik eintragen.
:::

## Person mit Keycloak verknüpfen

Um sich in APProVe einzuloggen, muss eine Person mit einem Keycloak-Benutzerkonto verknüpft sein. 
Sie haben jederzeit die Möglichkeit, eine Person mit Keycloak zu verknüpfen. 
Um diese Verbindung herzustellen, sind folgende Schritte erforderlich:

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

Anschließend können Sie entweder die Daten von oder nach Keycloak transferieren. In diesem Fall sind in Keycloak weniger Informationen als in APProVe, also werden die Daten nach Keycloak gesendet.

<br/>
<br/>
<div class="row">
    <div class="col-lg-4">
    </div>
    <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
               <img :src="$withBase('/img/administration/send-person-to-keycloak.png')" alt="Personeninformation nach Keycloak senden.">
            </label>
            <figcaption>Personeninformation nach Keycloak senden.</figcaption>
          </div>
        </figure>
    </div>
</div>
<br/>
<br/>

Sie können sich in diesem Felder die Unterschiede anschauen, die es zwischen Keycloak und APProVe gibt. Klicken Sie hier erneute auf <code>Nutzerinformationen nach Keycloak senden</code>.
In Keycloak werden die geänderten Daten unter <code>Attributes</code> angezeigt.

<br/>
<br/>
<div class="row">
    <div class="col-lg-4">
    </div>
    <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
               <img :src="$withBase('/img/administration/person-info-in-keycloak.png')" alt="Personeninformation in Keycloak.">
            </label>
            <figcaption>Personeninformation in Keycloak.</figcaption>
          </div>
        </figure>
    </div>
</div>
<br/>
<br/>

Die Rollen der Person finden Sie unter <code>Role Mapping</code>.

<br/>
<br/>
<div class="row">
    <div class="col-lg-4">
    </div>
    <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
               <img :src="$withBase('/img/administration/keycloak-role-mapping.png')" alt="Rolleninformation in Keycloak.">
            </label>
            <figcaption>Rolleninformation in Keycloak.</figcaption>
          </div>
        </figure>
    </div>
</div>
<br/>
<br/>

Sollten Sie Daten in APProVe zukünftig ändern, die auch in Keycloak sein sollten, dann vergessen Sie nicht bei jedem Update auf die Checkbox <code>Nutzerinformationen nach Keycloak senden</code> zu klicken.

<br/>
<br/>
<div class="row">
    <div class="col-lg-4">
    </div>
    <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
               <img :src="$withBase('/img/administration/person-checkbox.png')" alt="Checkbox zum Datentransfer.">
            </label>
            <figcaption>Checkbox zum Datentransfer.</figcaption>
          </div>
        </figure>
    </div>
</div>
<br/>
<br/>