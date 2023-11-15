---
# This is the title of the article
title: Einführung
# This is the icon of the page
icon: any
# This control sidebar order
order: 1
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
article: false
---


## APProVe - Eine Software zur Verwaltung von Projektanträgen in der Biobank
Bei APProVe handelt es sich um eine microservicebasierte Softwarelösung, die für die interdisziplinäre Biomaterial- und Datenbank Frankfurt (iBDF) am Universitätsklinikum Frankfurt (UKF) entwickelt wurde. Die iBDF sammelt, lagert und verwaltet Bioproben (z.B. Gewebeproben, Blut, Urin oder andere Flüssigkeiten und deren Derivate) die im Rahmen der Behandlung der Patienten am UKF als Restmaterialien übrig bleiben und anderenfalls vernichtet werden würden. Diese Proben werden interessierten Wissenschaftlern für klar definierte und bewilligte Forschungsvorhaben zur Verfügung gestellt. APProVe (Antragsstellung, Projekt- und ProzessVerwaltung der iBDF) unterstützt dabei den Beantragungsprozess von Bioproben und assoziierten klinschen Daten für Forschungszwecke und stellt diesen für das Projektmanagement der Biobank und den Forschenden transparent dar. Die zentrale Funktion von APProVe im Beantragungsprozess der iBDF ist in der folgenden Abbildung dargestellt.

<figure>
  <div class="container">
    <label for="Container">
    <img :src="$withBase('/img/architecture/Project_management_APProVe_en.png')" alt="APProVe Prozess">
    </label>
      <figcaption>APProVe Prozess</figcaption>
  </div>
</figure>

Interessierte Wissenschaftler reichen Projektanträge online über APProVe ein und definieren hier ihre Forschungsfrage sowie die benötigten Bioproben und klinischen Daten. Nach Prüfung des Antrags durch das Projektmanagement der Biobank, erfolgt die Weiterleitung an das Scientific Board. Dieses Gremium aus Vertretern des Forschungsschwerpunkts sowie der Daten und Proben liefernden Abteilungen berät über die eingereichten Anträge und gibt diese bei Bewilligung zur Weitergabe an die lokale Ethikkommission frei. Liegt ein projektspezifisches positives Votum der Ethikommission vor, kann das Projekt beginnen und das gewünschte Bioproben und klinschen Daten werden von der Biobank bereitgestellt. Alle im Rahmen der Projektbewilligung durchlaufenen Prozessschritte werden in APProVe transparent visualisiert. Daher bietet die Software nicht nur eine vereinfachte Einreichung von Projektanträgen, sondern auch eine Übersicht über den Status aller Projektanträge in Echtzeit. Dies ermöglicht eine transparente und benutzerfreundliche Antragsverwaltung für alle Beteiligten und ersetzt in der iBDF die unübersichtliche in arbeitsintensive papierbasierte Beantragung und Bewilligung von Projektanträgen.


## Introduction


- [Einführung](introduction.md)

- [Architektur](architecture.md)

- [Inbetriebnahme](quick-guide.md)