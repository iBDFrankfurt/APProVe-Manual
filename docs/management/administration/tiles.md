---
# This is the title of the article
title: Bioproben
# This control sidebar order
order: 4
# Set author
author: Timo Schneider
# Set writing time
date: 2022-08-09
# A page can have multiple categories
category:
- Administration
# A page can have multiple tags
tag:
- Bio Samples
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

# Kachelverwaltung
APProVe bietet Ihnen die Möglichkeit Projekte in Projektkacheln zu gruppieren. Wie Sie eine Projektkachel erstellen und bearbeiten finden sie [hier](../../features/tiles.md).

Dieser Abschnitt befasst sich damit, wie Sie eine Projektkachel einem anderen Nutzer zur Verfügung stellen können, damit sich dieser die Projekte darin anschauen kann.
Anhand eines Beispiels wird diese Herangehensweise genauer erläutert.

::: tip Inhaltsangabe
[[toc]]
:::

## Anforderungen
In unserem Beispiel möchten wir einen Nutzer erstellen, der sich alle Projekte in einem bestimmten Status anschauen kann. Dazu benötigen wir:

1. einen Nutzer, dem Sie die Projektkachel freigeben möchten. Wie Sie einen Nutzer erstellen finden Sie [hier](persons.md). In diesem Beispiel erstellen wir den Nutzer ````Scientific Board````.
2. eine Rolle für den Nutzer. In diesem Fall ````SB_ROLE````.
3. einen Status  ````In Scientific Board````.
4. ein Projekt mit der Rolle ````SB_ROLE````.
5. eine Projektkachel, die den Status ````In Scientific Board```` und die Rolle ````SB_ROLE```` abfragt.

## Nutzer erstellen
Das Beispiel geht davon aus, dass Sie bereits wissen, wie ein Nutzer erstellt wird. Wenn Sie Hilfe bei der Erstellung benötigen klicken Sie bitte [hier](../keycloak.md).
<br/>
<br/>
<div class="row">
    <div class="col-lg-4">
        <p>
            Wir haben in diesem Fall den Nutzer <code>sbuser</code> erstellt.
        </p>
    <br/>
    </div>
    <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
               <img :src="$withBase('/img/permissions/sb-user-create.png')" class="float-right" alt="Beispiel Nutzer sbuser erstellt">
            </label>
          </div>
        </figure>
    </div>
</div>
<br/>
<br/>


## Rolle erstellen
Sie benötigen für den Nutzer noch die passende Rolle. Wir erstellen die Rolle ````SB_ROLE```` im Folgenden. Eine genauere Anleitung finden Sie [hier](roles.md).

<br/>
<br/>
<div class="row">
    <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
               <img :src="$withBase('/img/permissions/sb-user-create.png')" class="float-left" alt="Beispiel Rolle SB_ROLE erstellt">
            </label>
          </div>
        </figure>
    </div>
    <div class="col-lg-4">
        <p>
            Nach dem Erstellen der Rolle, müssen Sie den Nutzer noch dieser Rolle zuweisen!
        </p>
    <br/>
    </div>
</div>
<br/>
<br/>

## Status erstellen
Der Status sollte standardmäßig bereits in APProVe vorhanden sein. Sie können jedoch auch einen neuen Status erstellen. Eine genaue Anleitung dazu finden Sie unter [Status](../administration/status.md).

<br/>
<br/>
<div class="row">
    <div class="col-lg-4">
        <p>
            Sie können in APProVe ihren Status überprüfen, ob dieser vorhanden ist.
        </p>
    <br/>
    </div>
    <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
               <img :src="$withBase('/img/permissions/create-sb-status.png')" class="float-right" alt="Beispiel Status erstellt">
            </label>
          </div>
        </figure>
    </div>
</div>
<br/>
<br/>

## Projekt Rolle hinzufügen (manuell)
Die Kachel überprüft auch, ob die Projekte die gewünschten Rollen haben. Damit kann später überprüft werden, ob der Nutzer die gleiche Rolle hat, wie das Projekt. Dadurch wird verhindert, dass sich Nutzer Projekte anschauen können, für die Sie nicht berechtigt sind!

APProVe bietet Ihnen die Möglichkeit die Rollen an Projekte automatisch oder manuell zu hängen. Dieser Abschnitt erläutert die manuelle Vorgehensweise.
Weitere Informationen und Anleitung zur manuellen Einrichtung der Projektrollen finden Sie [hier](../administration/project-roles.md).

<br/>
<br/>
<div class="row">
    <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
               <img :src="$withBase('/img/permissions/add-role-project.png')" class="float-left" alt="Beispiel Rolle SB_ROLE dem Projekt hinzufügen">
            </label>
          </div>
        </figure>
    </div>
    <div class="col-lg-4">
        <p>
            Wählen Sie die Rolle <code>SB_ROLE</code> aus.
        </p>
    <br/>
    </div>
</div>
<br/>
<br/>

Sie haben nun einen Nutzer erstellt, der in der Rolle ````SB_ROLE```` ist und dem Projekt die gleiche Rolle gegeben.

::: warning Achtung
Der Nutzer könnte über einen direkten Link zum Projekt bereits darauf zugreifen! Die Kachel dient lediglich dazu, die Projekte einfacher zu finden.
:::


## Projektkachel erstellen
Das Erstellen einer Projektkachel wird in diesem [Abschnitt](tiles.md) genauer erläutert. In diesem Fall wird explizit eine Kachel erstellt, die einer Nutzergruppe und einem Status zugefügt wird.

<br/>
<br/>
<div class="row">
    <div class="col-lg-4">
        <p>
            Wie Sie sehen, wurde als Status Code der Status <code>in Scientific Board</code> verwendet und als Rolle <code>SB_ROLE</code>. Da uns der Schwerpunkt in diesem Fall egal ist, werden alle ausgewählt.
            Bitte beachten Sie jedoch, das keine Tags in diesem Beispiel verwendet wurden. Dadurch werden nur Projekte <strong>OHNE</strong> Tags gesucht.
        </p>
    <br/>
    </div>
    <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
               <img :src="$withBase('/img/permissions/create-sb-tile.png')" class="float-right" alt="Beispiel Kachel SB_ROLE erstellt">
            </label>
          </div>
        </figure>
    </div>

</div>
<br/>
<br/>

Nachdem Sie die Projektkachel erstellt haben, wird diese dem Nutzer auf der Startseite angezeigt.

::: warning Achtung
Die Kachel wird jedem Nutzer mit der Rolle ````SB_ROLE```` angezeigt!
:::

## Ansicht als Nutzer mit Rolle SB_ROLE
Nachdem Sie Ihre Projektkachel erstellt haben, wird Sie dem Nutzer auf seiner Startseite angezeigt.

<br/>
<br/>
<div class="row">
    <div class="col-lg-8">
        <figure>
          <div class="container">
            <label for="Entity">
               <img :src="$withBase('/img/permissions/user-can-see-tile.png')" class="float-left" alt="Nutzer sieht seine Kachel">
            </label>
          </div>
        </figure>
    </div>
    <div class="col-lg-4">
        <p>
            Wenn der Nutzer auf die Startseite navigiert, wird ihm die neue Kachel angezeigt.
        </p>
    <br/>
    </div>
</div>
<br/>
<br/>


::: danger Achtung
Die Rollen ````uma_authorization```` oder ````offline_access```` sind Standardrollen von [Keycloak](../keycloak.md). Diese werden automatisch **jedem** Nutzer hinzugefügt. Sie sollten es daher vermeiden einm Projekt oder Kachel diese Rolle zu geben. Da ansonsten jeder darauf zugreifen kann!
:::
