"use strict";(self.webpackChunkuct_manual_service_v2=self.webpackChunkuct_manual_service_v2||[]).push([[1560],{3272:(e,n,i)=>{i.r(n),i.d(n,{data:()=>r});const r=JSON.parse('{"key":"v-27b2dada","path":"/dev/architecture.html","title":"Architektur","lang":"de-DE","frontmatter":{"title":"Architektur","order":3,"author":"Timo Schneider","date":"2022-07-20T00:00:00.000Z","category":["Introduction"],"tag":["Architecture"],"sticky":false,"star":false,"footer":"Entwickelt von der interdisziplinären Biomaterial- und Datenbank Frankfurt (iBDF)","copyright":false,"toc":false},"headers":[{"level":2,"title":"Microservices","slug":"microservices","link":"#microservices","children":[]},{"level":2,"title":"Container","slug":"container","link":"#container","children":[]},{"level":2,"title":"DevOps","slug":"devops","link":"#devops","children":[]},{"level":2,"title":"Verwendete Technologien anhand DevOps","slug":"verwendete-technologien-anhand-devops","link":"#verwendete-technologien-anhand-devops","children":[]},{"level":2,"title":"Kommunikation der Services","slug":"kommunikation-der-services","link":"#kommunikation-der-services","children":[]}],"git":{"createdTime":1699968513000,"updatedTime":1699968513000,"contributors":[{"name":"jaqueline.patzek@kgu.de","email":"jaqueline.patzek@kgu.de","commits":1}]},"readingTime":{"minutes":3.67,"words":1100},"filePathRelative":"dev/architecture.md","localizedDate":"20. Juli 2022","excerpt":"<p>Erfahren Sie hier mehr über die APProVe Softwarearchitektur.</p>\\n"}')},4484:(e,n,i)=>{i.r(n),i.d(n,{default:()=>L});var r=i(6252);const t=(0,r._)("p",null,"Erfahren Sie hier mehr über die APProVe Softwarearchitektur.",-1),a=(0,r._)("h1",{id:"architektur-von-approve",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#architektur-von-approve","aria-hidden":"true"},"#"),(0,r.Uk)(" Architektur von APProVe")],-1),s=(0,r._)("p",null,"Die Software APProVe wurde als microservicebasierte Architektur umgesetzt, die nachfolgend genauer erläutert wird.",-1),d={class:"hint-container tip"},l=(0,r._)("p",{class:"hint-container-title"},"Inhaltsangabe",-1),o={class:"table-of-contents"},c=(0,r._)("h2",{id:"microservices",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#microservices","aria-hidden":"true"},"#"),(0,r.Uk)(" Microservices")],-1),u=(0,r._)("p",null,'Wie der Titel bereits verrät, handelt es sich bei der microservicebasierten Architektur um einen neuen Ansatz zur Modularisierung von Software, der diese in einzelne abgeschlossene Funktionalitäten aufteilt. Eberhard Wolff beschreibt in seinem Buch "Microservices: - GRundlagen flexible Softwarearchitekturen" (dpunkt.verlag GmbH, 2015) einige Ansätze zur Definition eines Microservices. So soll ein Microservice individuell bereitgestellt werden können und seine Funktionalität unabhängig anderer Microservices erhalten bleiben. Des Weiteren soll ein Microservice in sich abgeschlossen sein und seine eigene Datenbank oder ein eigenes Datenbankschema beinhalten. Abgeleitet vom Namen Microservice soll dieser dennoch möglichst klein sein. Da für jeden Microservice jedoch eine andere Programmiersprache oder Framework verwendet werden kann, ist hier der Ansatz die Größe auf die Lines of Codes festzulegen, nicht zielführend. Daher kann ein Microservice auch anhand der Größe eines Teams von Entwicklern definiert werden. Nach Eberhard Wolffs Buch wird hierbei die Organisation, die hinter der Entwicklung einer Software steht und die microservicebasierten Architektur gleich gesetzt. Die folgende Abbildung zeigt APProVe als Beispiel einer microservicebasierten Architektur mit den dazugehörigen Abhängigkeiten.',-1),h={class:"container"},g={for:"Container"},m=["src"],v=(0,r._)("figcaption",null,"APProVe Architektur",-1),f=(0,r._)("p",null,"Die dort aufgeführten Services sind je ein Microservice, so behandelt z.B. der Notification-Service die automatischen Benachrichtigungen der Nutzer bei Projektänderungen. Um die Kommunikation zwischen den Microservices zu gewährleisten, arbeitet APProVe mit einem Discovery Client. Bei diesem registrieren sich alle Microservices mit Host, Port, Namen und Status und senden in kurzen Abständen einen sogenannten Heartbeat, um zu signalisieren, dass ihre Funktionalität noch erreichbar ist. Dadurch wird ermöglicht, dass dar Frontend-Service mit allen Microservices kommunizieren kann, ohne dass sich die Microservices selbst untereinander kennen müssen.",-1),b=(0,r._)("p",null,"Bei dem Frontend-, Backend- und User-Service handelt es sich um Spring Boot Applikationen die, vor dem Starten des Services, einen zentralen Config-Service ansprechen, der verschiedene Konfigurationen und Startoptionen ermöglicht. Dabei wird bereits deutlich, dass zumindest jeder Microservice zum Start bekannt sein muss, um APProVe bereitzustellen. Hierfür müssen Möglichkeiten gefunden werden, um die Übersicht der microservicebasierten Architektur zu gewährleisten. Ein erster Schritt zur Lösung dieses Problems wird im folgenden erläutert, um nicht nur die verbesserte Übersicht zu gewährleisten, sondern auch um eine unabhängige Bereitstellung der Software zu ermöglichen.",-1),k=(0,r._)("h2",{id:"container",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#container","aria-hidden":"true"},"#"),(0,r.Uk)(" Container")],-1),w=(0,r._)("p",null,"Durch Microservices kann für jedes Problem auf eine Programmiersprache zurückgegriffen werden, die für die Aufgabe am besten geeignet ist. Denn durch einen monolithischen Ansatz einer Software, muss diese nur in eine JAR- oder DLL-Datei verpackt und auf den Server aufgespielt werden. Dabei muss jedoch beachtet werden, dass alle Abhängigkeiten und Packages, die für die Software benötigt werden, bereits verfügbar sind. Überführt man diesen Ansatz nun auf die Microservices, so müssten alle benötigten Abhängigkeiten auf dem Server vorhanden sein. Zur Lösung dieses Problems wurden Software-Container eingesetzt, die bereits in UNIX-Betriebssystemen ihren Einsatz fanden, um mehrere Linux-Betriebssysteme auf einem Kernel zugreifen zu lassen.",-1),p=(0,r._)("p",null,"Ein weiterer Ansatz zur Isolierung von Software sind virtuelle Maschinen, wodurch jede virtuelle Maschine eine oder mehrere Microservices ausführen kann. Eine Gegenüberstellung von Software-Containern zu virtuellen Maschinen kann der folgenden Abbildung entnommen werden. Dabei wird das Problem des Overheads einer virtuellen Maschine deutlich, da jede ihr eigenes Betriebssystem zum Starten der App benötigt. Im Gegensatz dazu stehen die Software-Container die eine Anwendung durch ihre isolierte Umgebung vollständig ausführen kann, ohne andere Anwendungen oder Software zu beeinträchtigen. Konflikte innerhalb von Bibliotheken oder Microservices treten während der Ausführung nicht auf und der Software-Container kann sich effizient zwischen den verschiedenen Host-Systemen bewegen.",-1),_=(0,r._)("p",null,"Um den Begriff eines Software-Container abschließend zu definieren, kann eine Metapher zum Seehandel genutzt werden. Dabei kann ein Schiff als Server betrachtet werden, der mit einzelnen Containern beladen wird. Jeder dieser Container ist dabei isoliert und unabhängig von anderen Containern. Folgt man diesem Gedanken in Richtung der Microservices, kann jeder einzelne dieser Services in einen Software-Container verpackt und verschifft werden. Das darunterliegende Betriebssystem oder etwaige Abhängigkeiten und Packages müssen nicht mehr auf dem Server berücksichtigt werden. Insofern greifen Software-Container die Probleme der microservicebasierten Architektur auf und vereinfachen das Bereitstellen von Software.",-1),z={class:"container"},A={for:"Container"},S=["src"],D=(0,r._)("figcaption",null,"Eine Gegenüberstellung von Containern und virtuellen Maschinen",-1),P=(0,r._)("h2",{id:"devops",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#devops","aria-hidden":"true"},"#"),(0,r.Uk)(" DevOps")],-1),M=(0,r._)("p",null,'Grundlegend setzt sich der Begriff DevOps aus zwei Wörtern zusammen, zum einen "Development" (Entwicklung) und zum andern "Operations" (Arbeitsabläufe). Damit bezeichnet der Begriff eine Kombination aus beiden Feldern, die dazu führt, dass der Entwickler sich mit dem Testen und Bereitstellen seiner Software ebenfalls auseinandersetzen muss. Allgemein beschreibt DevOps Praktiken, die es ermöglichen sollen, eine Software oder Anwendung schneller und einfacherer zu entwickeln und diese dann bereitzustellen. Eine dieser Techniken ist das sogenannte "Continous Deployment", bei dem der Code vom Entwickler in ein sogenanntes Register hochgeladen wird und automatisch eine Pipeline durchläuft, in der dieser Tests durchläuft. Nach erfolgreichem Abschluss der Tests wird das Package bereitgestellt und kann produktiv verwendet werden. DevOps profitiert somit von der containerbasierten Microservice Architektur, da die verpackte Software nach durchlaufen der Pipeline als schiffbarer Software-Container bereitsteht.',-1),B={class:"container"},C={for:"DevOps"},E=["src"],O=(0,r._)("figcaption",null,"Zeigt den DevOps Zyklus",-1),y=(0,r._)("p",null,'Den Zyklus den eine Software dabei durchläuft, wird in der Abbildung noch einmal verdeutlicht. Das Schlagwort ist dabei "Continous", da nach der Planung, Erstellung und Testen die Bereitstellung des Codes überprüft wird und der Zyklus anschließend erneut durchlaufen werden kann. Dadurch können die Felder "Development" und "Operations" als eigenständiger Begriff zusammengefasst.',-1),T=(0,r._)("h2",{id:"verwendete-technologien-anhand-devops",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#verwendete-technologien-anhand-devops","aria-hidden":"true"},"#"),(0,r.Uk)(" Verwendete Technologien anhand DevOps")],-1),V=(0,r._)("p",null,"APProVe wurde anhand folgender Technologien konzeptioniert und entwickelt.",-1),U={class:"container"},j={for:"Technologien"},F=["src"],G=(0,r._)("figcaption",null,"Verwendete Technologien von APProVe",-1),W=(0,r._)("h2",{id:"kommunikation-der-services",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#kommunikation-der-services","aria-hidden":"true"},"#"),(0,r.Uk)(" Kommunikation der Services")],-1),Z=(0,r._)("p",null,"Die nachfolgende Abbildung zeigt die Kommunikation der einzelnen Services zueinander.",-1),x={class:"container"},K={for:"Entity"},N=["src"],R=(0,r._)("figcaption",null,"Entity-Relationship Diagramm von APProVe",-1),I={},L=(0,i(3744).Z)(I,[["render",function(e,n){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[t,(0,r.kq)(" more "),a,s,(0,r._)("div",d,[l,(0,r._)("nav",o,[(0,r._)("ul",null,[(0,r._)("li",null,[(0,r.Wm)(i,{to:"#microservices"},{default:(0,r.w5)((()=>[(0,r.Uk)("Microservices")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(i,{to:"#container"},{default:(0,r.w5)((()=>[(0,r.Uk)("Container")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(i,{to:"#devops"},{default:(0,r.w5)((()=>[(0,r.Uk)("DevOps")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(i,{to:"#verwendete-technologien-anhand-devops"},{default:(0,r.w5)((()=>[(0,r.Uk)("Verwendete Technologien anhand DevOps")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(i,{to:"#kommunikation-der-services"},{default:(0,r.w5)((()=>[(0,r.Uk)("Kommunikation der Services")])),_:1})])])])]),c,u,(0,r._)("figure",null,[(0,r._)("div",h,[(0,r._)("label",g,[(0,r._)("img",{src:e.$withBase("/img/architecture/APProVe-Overview-Dependencies.png"),alt:"APProVe Architektur"},null,8,m)]),v])]),f,b,k,w,p,_,(0,r._)("figure",null,[(0,r._)("div",z,[(0,r._)("label",A,[(0,r._)("img",{src:e.$withBase("/img/architecture/container-vs-vm2.png"),alt:"Eine Gegenüberstellung von Containern und virtuellen Maschinen"},null,8,S)]),D])]),P,M,(0,r._)("figure",null,[(0,r._)("div",B,[(0,r._)("label",C,[(0,r._)("img",{src:e.$withBase("/img/architecture/devops_cycle.png"),alt:"Zeigt den DevOps Zyklus"},null,8,E)]),O])]),y,T,V,(0,r._)("figure",null,[(0,r._)("div",U,[(0,r._)("label",j,[(0,r._)("img",{src:e.$withBase("/img/architecture/DevOps-Technology.png"),alt:"Verwendete Technologien"},null,8,F)]),G])]),W,Z,(0,r._)("figure",null,[(0,r._)("div",x,[(0,r._)("label",K,[(0,r._)("img",{src:e.$withBase("/img/architecture/APProVe-Overview-Calls.png"),alt:"Entity-Relationship Diagramm von APProVe"},null,8,N)]),R])])])}]])},3744:(e,n)=>{n.Z=(e,n)=>{const i=e.__vccOpts||e;for(const[e,r]of n)i[e]=r;return i}}}]);