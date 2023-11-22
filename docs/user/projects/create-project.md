---
# This is the title of the article
title: Ein neues Projekt anlegen
# This control sidebar order
order: 3
# Set author
author: Timo Schneider
# Set writing time
date: 2022-07-20
# A page can have multiple categories
category:
- Introduction
# A page can have multiple tags
tag:
- Introduction
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

Am komfortabelsten können Projekt über den Button `+ Neues Projekt` in der Navigationsleiste angelegt werden.

[TODO Screen]

## 1 Realm auswählen
Im ersten Schritt erscheint die Aufforderung, einen Realm auszuwählen. Der Realm bestimmt darüber welche Nutzergruppen 
das neue Projekt betrachten und ggf. editieren können. Informationen zur Funktionsweise von Realms und Sichtbarkeiten können 
im Kapitel [Realms und Rollen](../realms-roles/) nachgelesen werden. 

## 2 Der Projektwizard
Nach der Auswahl des Realms erscheint der Projektwizard. Dieser führt Sie durch die verschiedenen Sektionen Projekterstellung und weist Sie auf mögliche Pflichtangaben hin.
::: warning Hinweis
Im Folgenden werden alle Projektbestandteile, die bei der Projekteinreichung angegeben werden können, vorgestellt. Je nach Konfiguration der APProVe-Installation weichen einzelne Sektionen von den hier beschriebenen ab oder fallen eventuell ganz weg.
:::

###  Allgemeine Informationen
In dieser Sektion werden grundlegende Daten zum Projekt abgefragt. 


### Kooperation

### Abstract
Hier können Informationen zum Forschungsvorhaben gemacht werden. Dazu gehören:
- der Forschungshintergrund 
- die Zielsetzung
- eventuelle eigene Vorarbeiten
- die geplanten Methoden 

Alle Angaben erfolgen als Freitext.

### Patientendaten & Bioproben & Dienstleistungen
In diesem Abschnitt werden die für das Projekt gewünschten Bioproben und dazugehörigen Patientendaten definiert werden.
Auch angebotene Dienstleistungen, die 
#### Patientendaten
Die Biobank kann vordefinierte Datensätze zu den Proben bereitstellen. 
[TODO SCREENSHOT]
Sollten weitere Informationen zu den Proben benötigt werden, so können diese im Freitextfeld angegeben werden. 
Es sollte sich möglichst im vorhinein darüber vergewissert werden, dass die Projektleitung diese Daten liefern kann.
[TODO SCREENSHOT]

#### Bioproben
An dieser Stelle können die gewünschten Proben spezifiziert werden. Es können mehrere verschiedene Probenarten im Antrag bestellt werden.
[TODO SCREENSHOTs: Tabelle + Modal]
In der Eingabemaske können folgende Angaben gemacht werden:
| Eingabefeld | Beschreibung |
| --------------------- | -------------------------- |
| Gewünschte Entität | XX |
| Kategorie | Proben können in Gruppen kategorisiert werden (z. B. Flüssigproben und Gewebeproben). Abhängig von dieser Eingabe verändern sich die darauffolgenden Auswahlmöglichkeiten (Probenart und Container). |
| Probenart | Hier kann die konkrete Art der Probe (z. B. Knochenmarksblut, Serum, Kyrogewebe) angegeben werden.|
| Probencontainer | Angaben zum Container, in dem die Probe geliefert werden soll, können hier gemacht werden (z. B. mit Heparin versetzt). |
| Anzahl der Fälle | ??? |
| Menge | In welcher Menge wird diese Probenart benötigt? |
| Kommentar | An dieser Stelle können unter anderem weitere Wünsche oder Hinweise notiert werden. |

#### Dienstleistungen
Es können seitens der Biobank weitere Dienstleistungen (z. B. Pseudonymisierung von Daten) angeboten werden, die der Wissenschaftler in Anspruch nehmen kann. 
Werden solche Dienstleistungen angeboten, so werden diese direkt unter den Bioproben zur Auswahl bereitgestellt.


### Nutzungsbedingungen & Einreichung
Im letzten Schritt muss den Nutzungsbedingungen zugestimmt werden. Ist dies erfolgt, so kann das Projekt nochmal in einer abschließenden Zusammenfassung betrachtet und eingereicht werden. 
Es besteht auch die Möglichkeit, vor der Einreichung nochmal zurück zu den bisher ausgefüllten Sektionen zu gehen und Änderungen vorzunehmen.

::: warning Achtung
Je nach Konfiguration ist das Projekt unmittelbar nach der Einreichung nicht mehr editierbar! Dies muss durch einen Projektleiter wieder freigeschalten werden.
Prüfen Sie daher Ihre Daten vor dem Einreichen.
:::

### Nach der Projekteinreichung
Nach der Einreichung befindet sich das Projekt im Prozess der Projekteinreichung. Im Rahmen dieses Prozesses wird das Projekt durch verschiedene Gremien gereicht und eventuell zwischenzeitig für Nachkorrekturen freigegeben.
Der Prozessfortschritt kann jederzeit betrachtet werden. Der [Prozess der Projekteinreichung](project-workflow.md) und das [Suchen & Betrachten von Projekten](search-projeckt.md) werden in den nachfolgenden Kapiteln geschildert.