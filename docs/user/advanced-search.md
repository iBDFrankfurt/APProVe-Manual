---
# This is the title of the article
title: Erweiterte Suche zu Projekten
# This is the icon of the page
icon: operate
# This control sidebar order
order: 0
# Set author
author: Timo Schneider
# Set writing time
date: 2023-10-26
# A page can have multiple categories
category:
- Suche
# A page can have multiple tags
tag:
- Suche
- Search
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

# Erweiterte Suche zu Projekten
APProVe bietet Ihnen die Möglichkeit ab Version [3.5.0](../updates/3-5-0.md) noch feiner nach Projekten zu suchen in den jeweiligen Projektlisten und [Kacheln](tiles.md).
Hier finden Sie eine Übersicht, wonach Sie suchen können.

Die erweiterte Suche funktioniert sowohl für Projekte als auch für Personen.
::: tip Inhaltsangabe
[[toc]]
:::


## Suchparameter für Projekte
Ein Projekt besteht aus verschiedenen Attributen, nach einigen können ab Version [3.5.0](../updates/3-5-0.md) gesucht werden. 

- uctForm: Benutzt das Projekt die Patientenaufklärung des UCT
- ownForm: Benutzt das Projekt eine eigene Aufklärung
- comprehensive: Ist das Projekt Schwerpunkt übergreifend
- multipleFacility: Werden im Projekt mehrere Einrichtungen innerhalb eines Schwerpunkts genutzt
- externalPartner: Gibt es externe Partner
- needsMaterial: Werden Proben angefragt
- needsClinicalData: Werden klinische Daten angefragt
- providesOwnData: Werden eigene Daten bereitgestellt
- needsBasicData: Wurden Basisdaten angefragt
- needsExternalData: Werden externe Daten benötigt
- hasPublication: Hat das Projekt Publikationen
- hasService: Hat das Projekt Dienstleistungen


## Beispielabfragen für Projekte
Sie können Abfragen mit einem ``AND`` miteinander verknüpfen. Ein ``OR`` ist derzeit noch nicht möglich. allerdings können sie die Abfrage auch negieren.
Nachfolgend einige Beispiele:
- ``SHN*22 AND !needsMaterial``: Sucht alle SHN Projekte nach Projektnummer mit 2022 die kein Material beantragt haben
- ``comprehensive``: Sucht alle Projekte die Schwerpunkt übergreifend sind
- ``*.*.2022``: Sucht alle Projekte die im Jahr 2022 erstellt wurden
- ``*.*.2022 AND Nachname Projektleiter``: Sucht alle Projekte, die im Jahr 2022 von ``Nachname Projektleiter`` erstellt wurden.
- ``*.11.*22 AND comprehensive AND !needsMaterial AND providesOwnData``: Sucht alle Projekte, die Schwerpunkt übergreifend sind, kein Material benötigen aber eigene Daten bereitstellen. Zusätzlich soll das Projekt im November 2022 erstellt worden sein.
- ``comprehensive AND eingereicht``: Sucht alle Projekte, die Schwerpunkt übergreifend sind, und den aktuellen Status ``eingereicht`` haben.
- ``*2021 AND Rückmeldung aus Zwischenbericht``: Sucht alle Projekte, die 2021 erstellt wurden und den Status ``Rückmeldung aus Zwischenbericht`` haben.

Zusätzlich funktionieren die Abfragen auch wie gewohnt ohne ``AND``.
- ``Rückmeldung aus Zwischenbericht``: Liefert alle Projekte mit dem Status ``Rückmeldung aus Zwischenbericht``
- ``SNO-2-*``: Alle Projekte die eine Projektnummer haben wie SNO-2-XXXX
- ``*admin*``: Alle Projekte die von XadminX eingereicht wurden
- ``hasPublication``: Alle Projekte die mindestens eine Publikation haben

## Suchparameter für Personen
Eine Person besteht aus verschiedenen Attributen, nach einigen können ab Version [3.5.0](../updates/3-5-0.md) gesucht werden.

- isParticipant: Ist an einem Projekt beteiligt
- isContactDoc: Ist als ärztlicher Kontakt angegeben
- isContactLab: Ist als Laborkontakt angegeben
- isLeader: Ist als Leiter angegeben
- isSecondLeader: Ist als zweiter Leiter angegeben
- isThirdLeader: Ist als dritter Leiter angegeben
- isCreator: Ist Ersteller eines Projekts
- isUpdater: Hat ein Projekt bearbeitet
- hasAnyProject: Ist in einer der oben genannten Formen angegeben

## Beispielabfragen für Personen
Sie können Abfragen mit einem ``AND`` miteinander verknüpfen.

- ``isLeader AND !isParticipant`` : Alle Personen, die ein Projekt leiten und nicht an irgendeinem Projekt beteiligt sind