---
# This is the title of the article
title: Verwaltung
# This is the icon of the page
icon: any
# This control sidebar order
order: 1
# Set author
author: Timo Schneider
# Set writing time
date: 2022-07-25
# A page can have multiple categories
category:
- Administration
# A page can have multiple tags
tag:
- Management
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
# You can customize footer content
footer: Entwickelt von der interdisziplinären Biomaterial- und Datenbank Frankfurt (iBDF)
# You can customize copyright content
copyright: false
toc: false
article: true
---

Eine Schnellübersicht über alles, was Sie als Projektmanager über die Verwaltung von APProVe wissen sollten.

<!-- more -->

# Projektverwaltung
In diesem Bereich wird der administrative Umgang mit Projekten näher erläutert.

::: tip Inhaltsangabe
[[toc]]
:::

## Aufbau eines Projekts
Ein Projekt in APProVe ist in 5 vordefinierte Kategorien unterteilt.
- Allgemeine Informationen
- Kooperation
- Daten und Biomaterial
- Ethikangaben und Finanzierung

Im Folgenden werden diese Kategorien mit ihrem Inhalt genauer erläutert.

### Allgemeine Informationen
In dieser Kategorie werden alle Informationen aufgefasst die mit der Grundstruktur eines Projektes zusammenhängen. Sie haben die Möglichkeit den Titel, die Laufzeit, die Projektleitung, den Schwerpunkt, die Kostenstelle, die Antragsart und den Status eines Projekts zu ändern. Alle Felder sind hierbei Pflichtfelder.

#### Titel und Laufzeit
Jedes Projekt benötigt einen aussagekräftigen Titel und eine Laufzeit in Monaten. Neu eingereichte Projekte werden für maximal 36 Monate bewilligt.

#### Projektleitung
Bitte tragen Sie hier ein, wer für das Projekt verantwortlich ist. Diese Person wird der Ethikkommission als Projektleitung gemeldet. Sie können eine Person anhand des Vor- oder Nachnamens suchen oder, falls sie noch nicht im System hinterlegt ist, selbst hinzufügen.

Sie können nach einer Person, die das Projekt leiten soll, suchen. Bei der Suche ist zu beachten, dass mindestens 3 Buchstaben eingegeben werden müssen. Die hier aufgelisteten Personen wurden durch die Personenverwaltung hinzugefügt.

<figure>
  <div class="container">
    <label for="Container">
    <img :src="$withBase('/img/projectmanagement/search-projectleader.png')" alt="Änderung der Projektleitung">
    </label>
      <figcaption>Änderung der Projektleitung</figcaption>
  </div>
</figure>


Falls die Person, nach der Sie suchen, nicht existiert, können Sie die Person auch hinzufügen über den zweiten Reiter.

![Änderung der Projektleitung](/img/projectmanagement/add-projectleader.png)

In den Einstellungen haben Sie zudem die Möglichkeit, die Anzahl der Projektleiter im System pro Projekt zu definieren. Mehr dazu erfahren Sie hier: todo

#### Schwerpunkt
Sie können grundsätzlich alle Schwerpunktkombinationen auswählen. Beachten Sie jedoch, dass, wenn Sie ein Projekt bearbeiten, der Schwerpunkt hier unabhängig(!) der Projektnummer ist. Wenn sie auf den Button `Projektnummer bearbeiten` klicken am rechten Bildschirmrand können Sie eine neue Projektnummer vergeben.

![Änderung der Projektnummer](/img/projectmanagement/projectnumber-edit.png)

Die Projektnummer setzt sich aus der Abkürzung des Schwerpunktes zusammen, eine Laufnummer die angibt, um welche Nummer es sich bei diesem Projekt in diesem Schwerpunkt handelt und das Jahr in dem das Projekt eingereicht wurden (In der Abbildung: UCT als Gemeinschaftlicher Schwerpunkt, 7 als das 7. Projekt in diesem Schwerpunkt und 2018 war das Jahr, in dem das Projekt eingereicht wurde).

Falls die Projektnummer bereits vergeben ist, erscheint der entsprechende Warnhinweis, da die Nummern alle eindeutig sind.

Als Projektmanager haben Sie zudem die Möglichkeit, die Schwerpunkte selbst zu definieren und einen gemeinschaftlichen Schwerpunkt selbst festzulegen.

#### Kostenstelle
Für die Abrechnung von möglicherweise anfallenden Bearbeitungsgebühren geben sie für interne Projekte (soweit möglich) eine interne Kostenstelle an. Sollte diese nicht vorhanden sein, oder es sich um ein externes Projekt handeln, geben Sie bitte eine gültige Rechnungsadresse ein

![Kostenstelle](/img/projectmanagement/add-costcenter.png)

#### Antragsart
Bitte definieren Sie zunächst die Art Ihres Projektantrags. Im Anschluss können Sie die Antragsart näher beschreiben.

![Eintragung der Antragsart](/img/projectmanagement/edit-inquiry.png)

Handelt es sich um einen Neuantrag muss keine weitere Spezifizierung angegeben werden. Handelt es sich dabei jedoch um ein `Antrag zu Rahmenprojekt` so muss hierbei auch ein Projekt als Referenz angegeben werden.

#### Status
Hierbei handelt es sich um die Zuordnung eines Projektes zu einem gewissen Status. Dabei kann ein Projekt nur ein Status haben in dem es sich gerade befindet. ProSkive bildet hierbei einen Verlauf ab, in dem ein Projekt die verschiedenen Status durchläuft und dem Nutzer anzeigt in welchem Status sich sein Projekt gerade befindet. Die Aktualisierung des Status erfolgt dabei in Echtzeit.

Im Bereich des Status finden Sie auch eine Übersicht über alle Status die das Projekt bereits hatte mit Datum, Status und Kommentar.

Um einen Status hinzuzufügen, klicken Sie hierbei auf den gleichnamigen Button `Hinzufügen`.
![Eintragung eines Status](/img/projectmanagement/add-status-button.png)

Nach Klicken des Buttons erscheint ein neues kleines Fenster.

![Eintragung eines Status](/img/projectmanagement/add-status.png)

Hierbei sind alle Felder Pflichtfelder. Wichtig ist hierbei, dass ProSkive einen zeitlichen Verlauf abbildet mit den Status eines Projekts. Das heißt, wird ein Status eingefügt, der vor dem aktuellen Status liegt, erscheint dieser in der `Timeline` (Siehe Projektansicht) auch vor dem aktuellen Status. Es gilt also, wird ein Projektstatus aktualisiert, sollte das Datum des neuen Status auch nach dem aktuellen Datum liegen.

Wird ein Projekt neu angelegt, ist der erste Status eines Projektes immer `eingereicht` mit dem Datum, an dem das Projekt eingereicht wurde. Falls das Projekt jedoch bereits angelegt wurde und lediglich durch ProSkive digitalisiert wird, müssen sie hierbei den Status entsprechend selbst bearbeiten.

Wenn für ein Projekt kein Status existiert, also alle Status gelöscht wurden, ist ein editieren nicht möglich, ein entsprechender Warnhinweis erscheint dabei. Das heißt es muss immer mindestens ein Status existieren.

Mehr dazu finden Sie im Bereich Status in diesem Handbuch.

### Kooperation
In dieser Kategorie werden alle Informationen aufgefasst, die mit der Kooperation eines Projekts zusammenhängen. Hierbei handelt es sich nicht um Pflichtfelder.

#### Kooperationsprojekt
Es kann angegeben werden, ob das Projekt mehrere Einrichtungen innerhalb eines Projektes umfasst, das Projekt über mehrere Schwerpunkte abdeckt wird, oder ob externe Partner beteiligt sind.

#### Beteiligte
Ähnlich wie bei der Projektleitung, kann hier nach einer Person gesucht und hinzugefügt werden, die als Beteiligter in diesem Projekt geführt wird. Das heißt, der Beteiligte hat auch Zugriff auf das Projekt. So kann ein Projekt für einen Nutzer freigeschaltet werden.

### Abstrakt
In diesem Bereich kann das Abstrakt angepasst werden und Literatur hinzugefügt, verändert oder auch gelöscht werden. Klicken Sie dafür auf die entsprechenden Button.

![Hinzufügen einer Literatur](/img/projectmanagement/add-reference.png)

Beziehungsweise zum Entfernen oder Ändern einer Referenz auf den entsprechenden Button vor der gewünschten Referenz.

### Daten und Biomaterial
In diesem Abschnitt können die angeforderten Daten, sowie das entsprechende Biomaterial beantragt werden.

#### Patientendaten
Falls keine Daten bisher angefordert wurden, können Sie auf die entsprechende Schaltfläche klicken.

![Patientendaten anfordern](/img/projectmanagement/add-data.png)

Das klicken der Schaltfläche erscheint eine Liste mit den Daten die angefordert werden können.

![Patientendaten eintragen](/img/projectmanagement/request-data.png)

Beachten Sie hierbei, dass mindestens eine weitere Schaltfläche aktiviert werden muss, um die Patientendaten eintragen zu können.

#### Biomaterial
Über den entsprechenden Button lassen sich Biomaterialien hinzufügen.

![Materialien eintragen](/img/projectmanagement/add-samples.png)

Danach öffnet sich ein neues Fenster.

![Materialien eintragen](/img/projectmanagement/modal-samples.png)

Dadurch können Sie ein Biomaterial hinzufügen, das angefordert werden soll. Falls zusätzliche Angaben gemacht werden sollen, kann hierfür das Kommentarfeld verwendet werden.
Nach Hinzufügen des Biomaterials schließt sich das Fenster und das Biomaterial erscheint in der Liste. Dazu ein Beispiel.

![Materialien in der Liste](/img/projectmanagement/example-samples.png)

### Probenarten

Diese Option erweitert die Handlungsmöglichkeiten des Projektmanagements und bietet die Möglichkeit neue Probenarten im System zu hinterlegen. Diese können später beim hinzufügen einer neuen Probe direkt ausgewählt werden.
Zu diesem Menü gelangen Sie wie gewohnt als Admin über den Adminbereich.

![Navigation zu Probenarten](/img/projectmanagement/sampletypes.png)

Anschließend gelangen Sie zu einer Übersicht, über die aktuell vorhandenen Probenarten.

![Übersicht der Probenarten](/img/projectmanagement/sampletype-overview.png)
### Ethikangaben und Finanzierung
Im letzten Abschnitt lassen sich die Ethikangaben und die FInanzierung des Projektes einsehen und ändern.

#### Ethische/datenschutzrechtliche Aspekte
Hierbei kann angegeben werden, ob die UCT Patientenaufklärung verwendet wird oder eine eigene Patientenaufklärung benutzt wird.

#### Projektfinanzierung
Falls eine Projektfinanzierung angegeben werden soll, klicken Sie auf die entsprechende Schaltfläche.

![Finanzierung](/img/projectmanagement/add-financing.png)

Anschließend erscheinen weitere Felder, um genauere Angaben zur Finanzierung des Projektes einzutragen.

![Neue Finanzierung](/img/projectmanagement/new-financing.png)

## Bearbeitung eines Projektes freigeben

Um ein Projekt für die Projektbeteiligten editierbar zu machen, muss sich das Projekt in einem Status befinden, der es dem Nutzer erlaubt, dieses wieder anzupassen.
Wie Sie einen Status als editierbar definieren finden Sie hier: todo


## CentraXX-Export
ProSkive bietet Ihnen die Möglichkeit Daten nach CentraXX zu exportieren. Dabei kann ein einzelnes Projekt, oder die Kooperationspartner exportiert werden.
Um ein Projekt zu exportieren klicken Sie hierfür auf die Ansicht des gewünschten Projekts über eine der Listen.

![Projektansicht öffnen](/img/projectmanagement/view-button.png)

Sie gelangen daraufhin in die Projektansicht. Auf der rechten oberen Seite sehen Sie nun drei verschiedene Button. Um ein Projekt zu exportieren, klicken Sie hierfür den `Exportieren` Button.

![Exportieren](/img/projectmanagement/button-export.png)

Nach Klicken einer der beiden Schaltflächen öffnet sich ein neues Fenster. Hier wird eine XML-Darstellung gezeigt, die eine Vorschau des Exports liefert. Möchten Sie diese herunterladen, klicken sie auf den `Herunterladen` Button.

![Exportieren download](/img/projectmanagement/export-project.png)

Analog für die Kooperationspartner.

Möchten Sie jedoch alle Projekte, oder alle Kooperationspartner exportieren, so müssen Sie dafür eine der verschiedenen Projektlisten öffnen und auf die Schaltfläche `Einstellungen` klicken.

![Einstellungen Liste](/img/projectmanagement/settings-list.png)

Es öffnet sich ein neues Fenster. Hier können Sie diverse Einstellungen zur Tabellenansicht machen. Sie finden hier ebenso den `Exportieren` Button. Dieser bietet Ihnen hier die Möglichkeit alles zu exportieren.

![Alles Exportieren Liste](/img/projectmanagement/export-all.png)

Nach dem Klicken der gewünschten Funktion öffnet sich auch hierbei wieder ein neues Fenster, indem das XML zum Exportieren angezeigt wird.


## PDF Upload <Badge text="beta" type="warn"/> <Badge text="0.10.0"/>
Das Ethikvotum kann nun als PDF an ein bestehendes Projekt eingefügt werden. Dazu navigieren Sie zur Editierungsfunktion des Projekts.

![Editierfunktion öffnen](/img/projectmanagement/edit-button.png)

Anschlißend erkennen Sie in der oberen Menüleiste einen neuen Eintrag namens `Ethikvotum hochladen`.

![Votum hochladen](/img/projectmanagement/ethic-upload.png)

Sie können nun eine PDF Datei auf das blaue Feld ziehen oder darauf klicken. Falls bereits eine PDF Datei vorhanden ist wird diese darunter angezeigt.

![Votum anzeigen](/img/projectmanagement/ethic-upload2.png)

Zum speichern der PDF Datei klicken sie anschließend auf den `Projekt aktualisieren` Button.

::: warning
Bitte beachten Sie, es kann immer nur eine PDF Datei an ein Projekt angehängt werden, laden Sie eine neue PDF Datei hoch, wird die alte überschrieben.
:::

## Votum für den Nutzer freischalten <Badge text="beta" type="warn"/> <Badge text="0.10.0"/>
Damit ein Projektbeteiligter oder Ersteller ein bestehendes Votum auch einsehen kann, muss dieser dafür berechtigt werden. Dazu laden Sie das das Votum hoch wie in ["PDF Upload"](/management.html#pdf-upload "PDF Upload") beschrieben ist. Anschließend müssen Sie dem Projekt noch eine Nummer des Ethikvotums vergeben. Dazu navigieren Sie in die Editierfunktion und öffnen den Tab `Ethikangaben und Finanzierung`.

![Nummer eines Ethikvotums hinzufügen](/img/projectmanagement/add-votum-number.png)

Sobald Sie hier eine Nummer eintragen und das Projekt aktualisieren, sehen Sie in der Projekteintrag einen neuen Link zum hinzugefügten Votum.

![Nummer eines Ethikvotums hinzufügen](/img/projectmanagement/view-votum.png)

Anschließend öffnet sich ein neues Fenster und der Nutzer kann sich das Votum anschauen und herunterladen.

## Kommentarfunktion <Badge text="beta" type="warn"/> <Badge text="0.10.0"/>
Sie haben nun die Möglichkeit in Echtzeit mit dem Projektersteller und den Projektbeteiligten zu schreiben. Diese Funktion befindet sich in der Projektansicht.

![Projekt anschauen Button](/img/projectmanagement/view-button.png)

Am Ende der Projektansicht sehen Sie die Kommentarfunktion.

![Kommentarfunktion](/img/projectmanagement/comments.png)

Hier haben Sie die Möglichkeit Kommentare zu erstellen, zu löschen oder zu bearbeiten.

::: warning
Beachten Sie hierbei, ein Nutzer kann nur dann die Kommentar einsehen, falls er sich in der Keycloak Gruppe `Proskive User` oder `Proskive Admin` befindet.
:::

## ToDo's