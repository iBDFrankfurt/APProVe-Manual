---
# This is the title of the article
title: Realm
# This control sidebar order
order: 4
# Set author
author: Timo Schneider
# Set writing time
date: 2023-02-06
# A page can have multiple categories
category:
- Administration
# A page can have multiple tags
tag:
- Realm
- Service
- Patient Data
- Sample Type
- Main Focus
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

Bisher wurde die Software an die Anforderungen 
der lokalen Biobank angepasst, sollen jedoch mehrere Sammlungen die Software benutzen, müsste jeweils eine eigene Instanz aufgesetzt werden.
Die Realms in APProve ermöglichen es nun einzelne Bereiche für die Sammlungen voneinander abzugrenzen.
Zu den bisher abgetrennten Bereichen zählen die
1. **Schwerpunkte**
2. **Probenarten**
3. **Patientendatensatzgruppen**
4. **Dienstleistungen**

<!-- more -->

In diesem Abschnitt wird die Einrichtung des Standardrealms ``UCT``, sowie die Erstellung weitere Realms erläutert.

::: tip Inhaltsangabe
[[toc]]
:::

# Standardrealm
Wie Eingangs bereits erwähnt wird bei der Erstinbetriebnahme der Software ein Standardrealm erzeugt. Dieser wird an die oben genannten Bereiche verknüpft.
Dadurch beinhaltet dieser Realm, die für uns am Standort verwendeten Schwerpunkten, Probenarten, Dienstleistungen und Patientendatensatzgruppen.

Sie können diesen Realm umbenennen und an Ihre Bedürfnisse anpassen.

# Realm erstellen/bearbeiten
Um einen Realm zu erstellen, navigieren Sie über ``Menü -> Administration -> Realm-Verwaltung`` in die entsprechende Verwaltung der Realms.
Sie sehen eine Übersicht über alle Realms in System.

<figure>
  <div class="container">
    <label>
      <img :src="$withBase('/img/administration/realm/realm-overview.png')" alt="Übersicht über die Realms im System">
    </label>
    <figcaption>Übersicht über die Realms im System</figcaption>
  </div>
</figure>

Der Button ``Realm hinzufügen`` öffnet ein neues Fenster, in dem Sie einen Realm hinzufügen können.

<figure>
  <div class="container">
    <label>
      <img :src="$withBase('/img/administration/realm/add-realm.png')" alt="Neuen Realm hinzufügen">
    </label>
    <figcaption>Neuen Realm hinzufügen</figcaption>
  </div>
</figure>

Möchten Sie einen bestehenden Realm bearbeiten, klicken Sie in der Tabelle unter ``Aktionen`` auf den orangen Stift Button.

<figure>
  <div class="container">
    <label>
      <img :src="$withBase('/img/administration/realm/edit-realm.png')" alt="Bestehenden Realm bearbeiten">
    </label>
    <figcaption>Bestehenden Realm bearbeiten</figcaption>
  </div>
</figure>


## Felder
Die folgenden Felder sind alles Pflichtfelder.

#### Name 
Um einen Realm zu editieren oder zu erstellen benötigen Sie einen Namen für den Realm. Dieser Name wird später auch bei der Auswahl eines Realms angezeigt.

#### Beschreibung
Vergeben Sie bitte eine aussagekräftige Beschreibung für Ihren Realm. Dieser wird bei der Einreichung eines Projekts dem Nutzer mit angezeigt.

#### Kürzel
Das Kürzel dient zur Erstellung der ``Realm-Projektnummer``. Diese wird, ähnlich wie der ``Projektnummer`` nach dem Einreichen eines Projekts automatisch vergeben und jedes Jahr neu 
hochgezählt.

#### Standardrealm
Es kann immer nur ein Standardrealm im System existieren. Dieser dient lediglich bei internen Verlinkungn dazu, einen Realm standardmäßig voreinzustellen.

::: warning Bitte beachten
Der Standardrealm kann nicht gelöscht werden! Sie können jedoch zuvor einen anderen Realm als Standard festlegen, und ihn dann entfernen.
:::

## Realm löschen
Sie können einen Realm nur dann löschen, wenn er 
1. Nicht der Standardrealm ist und
2. Projekt mit diesem Realm verknüpft sind.


# Realm-Verknüpfungen
Bisher wurde lediglich aufgeführt, wie ein Realm bearbeitet, erstellt oder gelöscht werden kann. Sie müssen jedoch einen Realm
weiter konfigurieren, damit die Nutzer Projekte in diesem Realm einreichen können. Wie Sie nachfolgend sehen wurde ein Realm namens ``Test`` 
erstellt. in der Liste wird er daraufhin jedoch als ``nicht konfiguriert`` angezeigt. Das bedeutet, dass die folgenden Verknüpfungen existieren müssen
bevor ein Projekt in diesem Realm eingereicht werden kann.

::: warning Pflicht-Verknüpfungen
1. Schwerpunkte
2. Probenarten
3. Patientendatensatzgruppen
:::

<figure>
  <div class="container">
    <label>
      <img :src="$withBase('/img/administration/realm/new-realm.png')" alt="Neuer Realm nicht konfiguriert">
    </label>
    <figcaption>Neuer Realm nicht konfiguriert</figcaption>
  </div>
</figure>

## Realm-Schwerpunkte
Zunächst müssen Sie zu den ``Schwerpunkten`` in der ``Realm-Verwaltung`` navigieren (Auf der linken Seite).
Sie sehen in der Übersicht die Verknüpfungen des Standardrealms ``UCT``.

<figure>
  <div class="container">
    <label>
      <img :src="$withBase('/img/administration/realm/focus-overview.png')" alt="Übersicht über die Realm-Schwerpunkte">
    </label>
    <figcaption>Übersicht über die Realm-Schwerpunkte</figcaption>
  </div>
</figure>

### Realm-Schwerpunkt hinzufügen
Klicken Sie auf den ``Realm-Schwerpunkt hinzufügen`` Button, um einen neuen Realm-Schwerpunkt zu erstellen.

<figure>
  <div class="container">
    <label>
      <img :src="$withBase('/img/administration/realm/add-focus.png')" alt="Neuen Realm-Schwerpunkte hinzufügen">
    </label>
    <figcaption>Neuen Realm-Schwerpunkte hinzufügen</figcaption>
  </div>
</figure>

::: danger Bitte beachten
Bevor Sie einen Realm-Schwerpunkt erstellen können, muss der zu verknüpfende Schwerpunkt bereits erstellt worden sein!
Klicken Sie [hier](../management/mainFocus.md), um entsprechende weitergelitet zu werden.
:::

### Felder
Alle Felder sind Pflichtfelder.

#### Name des Schwerpunkts
Auswahlliste über alle Schwerpunkte im System. Ein Schwerpunkt kann mehrfach an verschiedene Realms geknüpft werden.

#### Name des Realms
Auswahlliste über alle Realms. Es werden nur Realms angezeigt, die noch keine Schwerpunkte verknüpft haben. **Das heißt, ein Realm kann nicht mehrfach mit verschiedene 
Schwerpunkten verknüpft werden.** 

### Realm-Schwerpunkt bearbeiten
Beim Bearbeiten eines Realms haben Sie die Möglichkeit, weitere Schwerpunkte hinzuzufügen oder zu entfernen.



## Realm-Dienstleistungen
Analog, wie bei den Schwerpunkten.
Zunächst müssen Sie zu den ``Dienstleistungen`` in der ``Realm-Verwaltung`` navigieren (Auf der linken Seite).
Standardmäßig gibt es **keine** Verknüpfung, da es keine Dienstleistungen gibt.

### Realm-Dienstleistungen hinzufügen
Analog, wie bei den Schwerpunkten.
Klicken Sie auf den ``Realm-Dienstleistungen hinzufügen`` Button, um eine neue Realm-Dienstleistung zu erstellen.


::: danger Bitte beachten
Bevor Sie eine Realm-Dienstleistung erstellen können, muss die zu verknüpfende Dienstleistung bereits erstellt worden sein!
Klicken Sie [hier](../management/services.md), um entsprechende weitergeleitet zu werden.
:::

### Felder
Alle Felder sind Pflichtfelder.

#### Name der Dienstleistung
Auswahlliste über alle Dienstleistungen im System. Eine Dienstleistung kann mehrfach an verschiedene Realms geknüpft werden.

#### Name des Realms
Auswahlliste über alle Realms. Es werden nur Realms angezeigt, die noch keine Dienstleistungen verknüpft haben. **Das heißt, ein Realm kann nicht mehrfach mit verschiedene
Dienstleistung verknüpft werden.**

### Realm-Dienstleistungen bearbeiten
Beim Bearbeiten eines Realms haben Sie die Möglichkeit, weitere Dienstleistungen hinzuzufügen oder zu entfernen.


## Realm-Probenarten
Analog, wie bei den Schwerpunkten.
Zunächst müssen Sie zu den ``Probenarten`` in der ``Realm-Verwaltung`` navigieren (Auf der linken Seite).


### Realm-Probenarten hinzufügen
Analog, wie bei den Schwerpunkten.
Klicken Sie auf den ``Realm-Probenarten hinzufügen`` Button, um eine neue Realm-Probenart zu erstellen.


::: danger Bitte beachten
Bevor Sie eine Realm-Probenart erstellen können, muss die zu verknüpfende Probenart bereits erstellt worden sein!
Klicken Sie [hier](../management/sampletype.md), um entsprechende weitergeleitet zu werden.
:::

### Felder
Alle Felder sind Pflichtfelder.

#### Name der Probenarten
Auswahlliste über alle Probenarten im System. Eine Dienstleistung kann mehrfach an verschiedene Realms geknüpft werden.

#### Name des Realms
Auswahlliste über alle Realms. Es werden nur Realms angezeigt, die noch keine Schwerpunkte verknüpft haben. **Das heißt, ein Realm kann nicht mehrfach mit verschiedene
Dienstleistung verknüpft werden.**

### Realm-Probenarten bearbeiten
Beim Bearbeiten eines Realms haben Sie die Möglichkeit, weitere Probenarten hinzuzufügen oder zu entfernen.

## Realm-Patientendatensatzgruppen
Analog, wie bei den Schwerpunkten.
Zunächst müssen Sie zu den ``Patientendatensatzgruppe`` in der ``Realm-Verwaltung`` navigieren (Auf der linken Seite).


### Realm-Patientendatensatzgruppen hinzufügen
Analog, wie bei den Schwerpunkten.
Klicken Sie auf den ``Realm-Patientendatensatzgruppen hinzufügen`` Button, um eine neue Realm-Patientendatensatzgruppe zu erstellen.


::: danger Bitte beachten
Bevor Sie eine Realm-Patientendatensatzgrupp erstellen können, muss die zu verknüpfende Patientendatensatzgruppe bereits erstellt worden sein!
Klicken Sie [hier](../management/patientData.md), um entsprechende weitergeleitet zu werden.
:::

### Felder
Alle Felder sind Pflichtfelder.

#### Name der Patientendatensatzgruppen
Auswahlliste über alle Patientendatensatzgruppen im System. Eine Patientendatensatzgruppe kann mehrfach an verschiedene Realms geknüpft werden.

#### Name des Realms
Auswahlliste über alle Realms. Es werden nur Realms angezeigt, die noch keine Patientendatensatzgruppen verknüpft haben. **Das heißt, ein Realm kann nicht mehrfach mit verschiedene
Patientendatensatzgruppe verknüpft werden.**

### Realm-Patientendatensatzgruppe bearbeiten
Beim Bearbeiten eines Realms haben Sie die Möglichkeit, weitere Patientendatensatzgruppen hinzuzufügen oder zu entfernen.