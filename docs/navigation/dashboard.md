---
# This is the title of the article
title: Dashboard
# This control sidebar order
order: 3
# Set author
author: Timo Schneider
# Set writing time
date: 2022-07-20
# A page can have multiple categories
category:
- Navigation
# A page can have multiple tags
tag:
- Dashboard
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

Informationen zur Übersichtsseite (Dashboard) als Wissenschaftler, sowie als Projektmanager.

<!-- more -->

# Dashboard (Übersichtsseite)
Nach dem erfolgreichen einloggen auf APProVe gelangen Sie zu Ihrer Übersichtsseite. Als Wissenschaftler sehen Sie hier zwei Kacheln, über die Sie eigene Projekte einsehen und neue Projekte einreichen können.

::: tip Inhaltsangabe
[[toc]]
:::

## Ansicht für den Wissenschaftler
Als Wissenschaftler erhalten Sie eine detailliertere Übersicht, um schnell auf die wichtigsten Dinge zugreifen zu können.
<br/>
<br/>
<div class="row">
    <div class="col-lg-4">
         <ol>
            <li><code>meine Projekte</code></li>
            <li><code>neues Projekt erstellen</code></li>
         </ol>
<br/>
<br/>
    </div>
    <div class="col-lg-8">
        <figure>
           <div class="container">
             <label for="Entity">
                <img :src="$withBase('/img/navigation/overviewUser.png')" class="float-right" alt="ProSkive-Bio Übersichtsseite des Nutzers">
             </label>
               <figcaption>APProVe Übersichtsseite des Nutzers</figcaption>
           </div>
         </figure>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
</div>
<p>Über die Kachel <code>Meine Projekte</code> kommen Sie zu einer Übersichtstabelle in der alle Projekte die Sie <strong>leiten</strong>, an denen sie <strong>beteiligt</strong> sind, die Sie <strong>erstellt</strong> haben oder in denen Sie <strong>Ansprechpartner</strong> sind angezeigt werden. </p>
    <br/>
    <p>Wenn Sie ein neues Projekt einreichen wollen, klicken Sie auf <code>Neues Projekt erstellen</code>. Details zur Projekteingabe und -einreichung finden Sie <a href="create-project.html">hier</a>. </p>
   <br/>
   <p>Weitere Informationen zu den verschiedenen Kacheln in APProVe und deren Verwaltung finden Sie <a href="administration/tiles.html">hier</a>.</p>

## Ansicht für das Projektmanagement
Als Projektmanagement haben Sie einige Kacheln mehr. Darüber hinaus erhalten Sie eine kurze Übersicht über die Anzahl der Projekte und Personen aktuell im System, sowie das zuletzt eingereichte Projekt.
<br/>
<br/>
<div class="row">
    <div class="col-lg-4">
         <ol>
            <li><code>Alle Projekte</code></li>
            <li><code>Hilfe</code></li>
            <li><code>Externe Statistiken</code></li>
            <li><code>Verwaltung</code></li>
            <li><code>Einstellungen</code></li>
            <li><code>Neues Projekt erstellen</code></li>
            <li><code>Personenverwaltung</code></li>
            <li><code>Mir zugewiesene ToDos</code></li>
         </ol>
<br/>
<br/>
    </div>
    <div class="col-lg-8">
        <figure>
           <div class="container">
             <label for="Entity">
                <img :src="$withBase('/img/navigation/overviewAdmin.png')" class="float-right" alt="APProVe Übersichtsseite des PM">
             </label>
               <figcaption>APProVe Übersichtsseite des PM</figcaption>
           </div>
         </figure>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
</div>
     <p>Über die Kachel <code>Alle Projekte</code> kommen Sie zu einer Übersichtstabelle in der alle Projekte im System angezeigt werden. </p>
    <p>Wenn Sie ein neues Projekt einreichen wollen, klicken Sie auf <code>Neues Projekt erstellen</code>. Details zur Projekteingabe und -einreichung finden Sie <a href="create-project.html">hier</a>. </p>
    <p>Die Verwaltung-Kachel bringt Sie schnell in die administrative Ansicht für APProVe, dort können Sie grundlegende Änderungen am System vornehmen. </p>
   <p>Weitere Informationen zu den verschiedenen Kacheln in APProVe und deren Verwaltung finden Sie <a href="/administration/tiles.html">hier</a>.</p>
   <p>Über die Kachel <code>Mir zugewiesene ToDos</code> erhalten Sie eine Übersicht, über die Ihnen zugewiesenen ToDos. Näheres dazu finden Sie unter <a href="/features/todos.html">hier</a>.</p>


## Statistiken
APProVe bietet Ihnen ab Version 3.2.0 die Möglichkeit verschiedene Projektspezifische Statistiken direkt auf dem Dashboard anzuzeigen.

<figure>
  <div class="container">
    <label for="Container">
    <img :src="$withBase('/img/navigation/dashboard-statistics.png')" alt="Übersicht der Statistiken auf dem Administratoren Dashboard">
    </label>
      <figcaption>Übersicht der Statistiken auf dem Administratoren Dashboard</figcaption>
  </div>
</figure>

### Projekt Timeline
Hier haben Sie die Möglichkeit, die zuletzt erstellten oder bearbeiteten Projekte schnell einzusehen. Über die Optionen können Sie zudem festlegen, wie viele Projekte angezeigt werden sollen.

### Quick Info
In der Quick Info rechts daneben, haben sie zudem eine schnelle Übersicht über alle Projekte oder Personen im System.
Über die Kachel ``Projekte pro Jahr`` können Sie sich zudem anzeigen lassen, wie viele Projekte in welchem Jahr den ``initialen Status`` haben. Standardmäßig ist dies der Status ``Eingereicht``, was sie aber jederzeit ändern können (siehe [Status](../management/status.md)).

### Projektlaufzeiten
Sie haben zudem die Möglichkeit, sich Projektlaufzeiten anzeigen zu lassen. Klicken Sie dazu auf ``Projektlaufzeit`` im Dashboard.

<figure>
  <div class="container">
    <label for="Container">
    <img :src="$withBase('/img/navigation/dashboard-statistics2.png')" alt="Übersicht über die Laufzeiten">
    </label>
      <figcaption>Übersicht über die Laufzeiten</figcaption>
  </div>
</figure>