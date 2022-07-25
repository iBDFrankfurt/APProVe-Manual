---
# This is the title of the article
title: Architektur
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
- Architecture
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

Erfahren Sie hier mehr über die APProVe Softwarearchitektur.

<!-- more -->

# Architektur von APProVe
Die Software APProVe wurde als microservicebasierte Architektur umgesetzt, die nachfolgend genauer erläutert wird.

::: tip Inhaltsangabe
[[toc]]
:::

## Microservices
Wie der Titel bereits verrät, handelt es sich bei der microservicebasierten Architektur um einen neuen Ansatz zur Modularisierung von Software, der diese in einzelne abgeschlossene Funktionalitäten aufteilt. Eberhard Wolff beschreibt in seinem Buch "Microservices: - GRundlagen flexible Softwarearchitekturen" (dpunkt.verlag GmbH, 2015) einige Ansätze zur Definition eines Microservices. So soll ein Microservice individuell bereitgestellt werden können und seine Funktionalität unabhängig anderer Microservices erhalten bleiben. Des Weiteren soll ein Microservice in sich abgeschlossen sein und seine eigene Datenbank oder ein eigenes Datenbankschema beinhalten. Abgeleitet vom Namen Microservice soll dieser dennoch möglichst klein sein. Da für jeden Microservice jedoch eine andere Programmiersprache oder Framework verwendet werden kann, ist hier der Ansatz die Größe auf die Lines of Codes festzulegen, nicht zielführend. Daher kann ein Microservice auch anhand der Größe eines Teams von Entwicklern definiert werden. Nach Eberhard Wolffs Buch wird hierbei die Organisation, die hinter der Entwicklung einer Software steht und die microservicebasierten Architektur gleich gesetzt.
Die folgende Abbildung zeigt APProVe als Beispiel einer microservicebasierten Architektur.

<figure>
  <div class="container">
    <label for="Container">
    <img src="/img/architecture/APProVe-Micro-Architektur.png" alt="APProVe Architektur">
    </label>
      <figcaption>APProVe Architektur</figcaption>
  </div>
</figure>

Die dort aufgeführten Services sind je ein Microservice, so behandelt z.B. der Notification-Service die automatischen Benachrichtigungen der Nutzer bei Projektänderungen. Um die Kommunikation zwischen den Microservices zu gewährleisten, arbeitet APProVe mit einem Discovery Client. Bei diesem registrieren sich alle Microservices mit Host, Port, Namen und Status und senden in kurzen Abständen einen sogenannten Heartbeat, um zu signalisieren, dass ihre Funktionalität noch erreichbar ist. Dadurch wird ermöglicht, dass dar Frontend-Service mit allen Microservices kommunizieren kann, ohne dass sich die Microservices selbst untereinander kennen müssen.

Bei dem Frontend-, Backend- und User-Service handelt es sich um Spring Boot Applikationen die, vor dem Starten des Services, einen zentralen Config-Service ansprechen, der verschiedene Konfigurationen und Startoptionen ermöglicht. Dabei wird bereits deutlich, dass zumindest jeder Microservice zum Start bekannt sein muss, um APProVe bereitzustellen. Hierfür müssen Möglichkeiten gefunden werden, um die Übersicht der microservicebasierten Architektur zu gewährleisten. Ein erster Schritt zur Lösung dieses Problems wird im folgenden erläutert, um nicht nur die verbesserte Übersicht zu gewährleisten, sondern auch um eine unabhängige Bereitstellung der Software zu ermöglichen.


## Container

Durch Microservices kann für jedes Problem auf eine Programmiersprache zurückgegriffen werden, die für die Aufgabe am besten geeignet ist. Denn durch einen monolithischen Ansatz einer Software, muss diese nur in eine JAR- oder DLL-Datei verpackt und auf den Server aufgespielt werden. Dabei muss jedoch beachtet werden, dass alle Abhängigkeiten und Packages, die für die Software benötigt werden, bereits verfügbar sind. Überführt man diesen Ansatz nun auf die Microservices, so müssten alle benötigten Abhängigkeiten auf dem Server vorhanden sein. Zur Lösung dieses Problems wurden Software-Container eingesetzt, die bereits in UNIX-Betriebssystemen ihren Einsatz fanden, um mehrere Linux-Betriebssysteme auf einem Kernel zugreifen zu lassen.

Ein weiterer Ansatz zur Isolierung von Software sind virtuelle Maschinen, wodurch jede virtuelle Maschine eine oder mehrere Microservices ausführen kann. Eine Gegenüberstellung von Software-Containern zu virtuellen Maschinen kann der folgenden Abbildung entnommen werden. Dabei wird das Problem des Overheads einer virtuellen Maschine deutlich, da jede ihr eigenes Betriebssystem zum Starten der App benötigt. Im Gegensatz dazu stehen die Software-Container die eine Anwendung durch ihre isolierte Umgebung vollständig ausführen kann, ohne andere Anwendungen oder Software zu beeinträchtigen. Konflikte innerhalb von Bibliotheken oder Microservices treten während der Ausführung nicht auf und der Software-Container kann sich effizient zwischen den verschiedenen Host-Systemen bewegen.

Um den Begriff eines Software-Container abschließend zu definieren, kann eine Metapher zum Seehandel genutzt werden. Dabei kann ein Schiff als Server betrachtet werden, der mit einzelnen Containern beladen wird. Jeder dieser Container ist dabei isoliert und unabhängig von anderen Containern. Folgt man diesem Gedanken in Richtung der Microservices, kann jeder einzelne dieser Services in einen Software-Container verpackt und verschifft werden. Das darunterliegende Betriebssystem oder etwaige Abhängigkeiten und Packages müssen nicht mehr auf dem Server berücksichtigt werden. Insofern greifen Software-Container die Probleme der microservicebasierten Architektur auf und vereinfachen das Bereitstellen von Software.

<figure>
  <div class="container">
    <label for="Container">
    <img src="/img/architecture/container-vs-vm2.png" alt="Eine Gegenüberstellung von Containern und virtuellen Maschinen">
    </label>
      <figcaption>Eine Gegenüberstellung von Containern und virtuellen Maschinen</figcaption>
  </div>
</figure>

## DevOps

Grundlegend setzt sich der Begriff DevOps aus zwei Wörtern zusammen, zum einen "Development" (Entwicklung) und zum andern "Operations" (Arbeitsabläufe). Damit bezeichnet der Begriff eine Kombination aus beiden Feldern, die dazu führt, dass der Entwickler sich mit dem Testen und Bereitstellen seiner Software ebenfalls auseinandersetzen muss. Allgemein beschreibt DevOps Praktiken, die es ermöglichen sollen, eine Software oder Anwendung schneller und einfacherer zu entwickeln und diese dann bereitzustellen.
Eine dieser Techniken ist das sogenannte "Continous Deployment", bei dem der Code vom Entwickler in ein sogenanntes Register hochgeladen wird und automatisch eine Pipeline durchläuft, in der dieser Tests durchläuft. Nach erfolgreichem Abschluss der Tests wird das Package bereitgestellt und kann produktiv verwendet werden. DevOps profitiert somit von der containerbasierten Microservice Architektur, da die verpackte Software nach durchlaufen der Pipeline als schiffbarer Software-Container bereitsteht.

<figure>
  <div class="container">
    <label for="DevOps">
      <img src="/img/architecture/devops_cycle.png" alt="Zeigt den DevOps Zyklus">
    </label>
    <figcaption>Zeigt den DevOps Zyklus</figcaption>
  </div>
</figure>

Den Zyklus den eine Software dabei durchläuft, wird in der Abbildung noch einmal verdeutlicht. Das Schlagwort ist dabei "Continous", da nach der Planung, Erstellung und Testen die Bereitstellung des Codes überprüft wird und der Zyklus anschließend erneut durchlaufen werden kann. Dadurch können die Felder "Development" und "Operations" als eigenständiger Begriff zusammengefasst.

## Verwendete Technologien anhand DevOps
APProVe wurde anhand folgender Technologien konzeptioniert und entwickelt.

<figure>
  <div class="container">
    <label for="Technologien">
      <img src="/img/architecture/DevOps-Technology.png" alt="Verwendete Technologien">
    </label>
    <figcaption>Verwendete Technologien von APProVe</figcaption>
  </div>
</figure>


## Entity-Relationship-Diagramm

<figure>
  <div class="container">
    <label for="Entity">
       <img src="/img/architecture/Datenbank-Entity-Relation.jpg" alt="Entity-Relationship Diagramm von APProVe">
    </label>
      <figcaption>Entity-Relationship Diagramm von APProVe</figcaption>
  </div>
</figure>
