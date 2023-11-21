"use strict";(self.webpackChunkuct_manual_service_v2=self.webpackChunkuct_manual_service_v2||[]).push([[5058],{31:(e,n,r)=>{r.r(n),r.d(n,{data:()=>i});const i=JSON.parse('{"key":"v-55d4b41e","path":"/user/advanced-search.html","title":"Erweiterte Suche zu Projekten","lang":"de-DE","frontmatter":{"title":"Erweiterte Suche zu Projekten","icon":"operate","order":0,"author":"Timo Schneider","date":"2023-10-26T00:00:00.000Z","category":["Suche"],"tag":["Suche","Search"],"sticky":false,"star":false,"footer":"Entwickelt von der interdisziplinären Biomaterial- und Datenbank Frankfurt (iBDF)","copyright":false},"headers":[{"level":2,"title":"Suchparameter für Projekte","slug":"suchparameter-fur-projekte","link":"#suchparameter-fur-projekte","children":[]},{"level":2,"title":"Beispielabfragen für Projekte","slug":"beispielabfragen-fur-projekte","link":"#beispielabfragen-fur-projekte","children":[]},{"level":2,"title":"Suchparameter für Personen","slug":"suchparameter-fur-personen","link":"#suchparameter-fur-personen","children":[]},{"level":2,"title":"Beispielabfragen für Personen","slug":"beispielabfragen-fur-personen","link":"#beispielabfragen-fur-personen","children":[]}],"git":{"createdTime":1699631332000,"updatedTime":1699631332000,"contributors":[{"name":"jaqueline.patzek@kgu.de","email":"jaqueline.patzek@kgu.de","commits":1}]},"readingTime":{"minutes":1.77,"words":531},"filePathRelative":"user/advanced-search.md","localizedDate":"26. Oktober 2023","excerpt":""}')},8683:(e,n,r)=>{r.r(n),r.d(n,{default:()=>k});var i=r(6252);const t=(0,i._)("h1",{id:"erweiterte-suche-zu-projekten",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#erweiterte-suche-zu-projekten","aria-hidden":"true"},"#"),(0,i.Uk)(" Erweiterte Suche zu Projekten")],-1),a=(0,i._)("p",null,"Die erweiterte Suche funktioniert sowohl für Projekte als auch für Personen.",-1),l={class:"hint-container tip"},s=(0,i._)("p",{class:"hint-container-title"},"Inhaltsangabe",-1),o={class:"table-of-contents"},d=(0,i._)("h2",{id:"suchparameter-fur-projekte",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#suchparameter-fur-projekte","aria-hidden":"true"},"#"),(0,i.Uk)(" Suchparameter für Projekte")],-1),c=(0,i.uE)('<ul><li>uctForm: Benutzt das Projekt die Patientenaufklärung des UCT</li><li>ownForm: Benutzt das Projekt eine eigene Aufklärung</li><li>comprehensive: Ist das Projekt Schwerpunkt übergreifend</li><li>multipleFacility: Werden im Projekt mehrere Einrichtungen innerhalb eines Schwerpunkts genutzt</li><li>externalPartner: Gibt es externe Partner</li><li>needsMaterial: Werden Proben angefragt</li><li>needsClinicalData: Werden klinische Daten angefragt</li><li>providesOwnData: Werden eigene Daten bereitgestellt</li><li>needsBasicData: Wurden Basisdaten angefragt</li><li>needsExternalData: Werden externe Daten benötigt</li><li>hasPublication: Hat das Projekt Publikationen</li></ul><h2 id="beispielabfragen-fur-projekte" tabindex="-1"><a class="header-anchor" href="#beispielabfragen-fur-projekte" aria-hidden="true">#</a> Beispielabfragen für Projekte</h2><p>Sie können Abfragen mit einem <code>AND</code> miteinander verknüpfen. Ein <code>OR</code> ist derzeit noch nicht möglich. allerdings können sie die Abfrage auch negieren. Nachfolgend einige Beispiele:</p><ul><li><code>SHN*22 AND !needsMaterial</code>: Sucht alle SHN Projekte nach Projektnummer mit 2022 die kein Material beantragt haben</li><li><code>comprehensive</code>: Sucht alle Projekte die Schwerpunkt übergreifend sind</li><li><code>*.*.2022</code>: Sucht alle Projekte die im Jahr 2022 erstellt wurden</li><li><code>*.*.2022 AND Nachname Projektleiter</code>: Sucht alle Projekte, die im Jahr 2022 von <code>Nachname Projektleiter</code> erstellt wurden.</li><li><code>*.11.*22 AND comprehensive AND !needsMaterial AND providesOwnData</code>: Sucht alle Projekte, die Schwerpunkt übergreifend sind, kein Material benötigen aber eigene Daten bereitstellen. Zusätzlich soll das Projekt im November 2022 erstellt worden sein.</li><li><code>comprehensive AND eingereicht</code>: Sucht alle Projekte, die Schwerpunkt übergreifend sind, und den aktuellen Status <code>eingereicht</code> haben.</li><li><code>*2021 AND Rückmeldung aus Zwischenbericht</code>: Sucht alle Projekte, die 2021 erstellt wurden und den Status <code>Rückmeldung aus Zwischenbericht</code> haben.</li></ul><p>Zusätzlich funktionieren die Abfragen auch wie gewohnt ohne <code>AND</code>.</p><ul><li><code>Rückmeldung aus Zwischenbericht</code>: Liefert alle Projekte mit dem Status <code>Rückmeldung aus Zwischenbericht</code></li><li><code>SNO-2-*</code>: Alle Projekte die eine Projektnummer haben wie SNO-2-XXXX</li><li><code>*admin*</code>: Alle Projekte die von XadminX eingereicht wurden</li><li><code>hasPublication</code>: Alle Projekte die mindestens eine Publikation haben</li></ul><h2 id="suchparameter-fur-personen" tabindex="-1"><a class="header-anchor" href="#suchparameter-fur-personen" aria-hidden="true">#</a> Suchparameter für Personen</h2>',7),u=(0,i.uE)('<ul><li>isParticipant: Ist an einem Projekt beteiligt</li><li>isContactDoc: Ist als ärztlicher Kontakt angegeben</li><li>isContactLab: Ist als Laborkontakt angegeben</li><li>isLeader: Ist als Leiter angegeben</li><li>isSecondLeader: Ist als zweiter Leiter angegeben</li><li>isThirdLeader: Ist als dritter Leiter angegeben</li><li>isCreator: Ist Ersteller eines Projekts</li><li>isUpdater: Hat ein Projekt bearbeitet</li><li>hasAnyProject: Ist in einer der oben genannten Formen angegeben</li></ul><h2 id="beispielabfragen-fur-personen" tabindex="-1"><a class="header-anchor" href="#beispielabfragen-fur-personen" aria-hidden="true">#</a> Beispielabfragen für Personen</h2><p>Sie können Abfragen mit einem <code>AND</code> miteinander verknüpfen.</p><ul><li><code>isLeader AND !isParticipant</code> : Alle Personen, die ein Projekt leiten und nicht an irgendeinem Projekt beteiligt sind</li></ul>',4),h={},k=(0,r(3744).Z)(h,[["render",function(e,n){const r=(0,i.up)("RouterLink"),h=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" more "),t,(0,i._)("p",null,[(0,i.Uk)("APProVe bietet Ihnen die Möglichkeit ab Version "),(0,i.Wm)(r,{to:"/updates/3-5-0.html"},{default:(0,i.w5)((()=>[(0,i.Uk)("3.5.0")])),_:1}),(0,i.Uk)(" noch feiner nach Projekten zu suchen in den jeweiligen Projektlisten und "),(0,i.Wm)(r,{to:"/user/tiles.html"},{default:(0,i.w5)((()=>[(0,i.Uk)("Kacheln")])),_:1}),(0,i.Uk)(". Hier finden Sie eine Übersicht, wonach Sie suchen können.")]),a,(0,i._)("div",l,[s,(0,i._)("nav",o,[(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Wm)(h,{to:"#suchparameter-fur-projekte"},{default:(0,i.w5)((()=>[(0,i.Uk)("Suchparameter für Projekte")])),_:1})]),(0,i._)("li",null,[(0,i.Wm)(h,{to:"#beispielabfragen-fur-projekte"},{default:(0,i.w5)((()=>[(0,i.Uk)("Beispielabfragen für Projekte")])),_:1})]),(0,i._)("li",null,[(0,i.Wm)(h,{to:"#suchparameter-fur-personen"},{default:(0,i.w5)((()=>[(0,i.Uk)("Suchparameter für Personen")])),_:1})]),(0,i._)("li",null,[(0,i.Wm)(h,{to:"#beispielabfragen-fur-personen"},{default:(0,i.w5)((()=>[(0,i.Uk)("Beispielabfragen für Personen")])),_:1})])])])]),d,(0,i._)("p",null,[(0,i.Uk)("Ein Projekt besteht aus verschiedenen Attributen, nach einigen können ab Version "),(0,i.Wm)(r,{to:"/updates/3-5-0.html"},{default:(0,i.w5)((()=>[(0,i.Uk)("3.5.0")])),_:1}),(0,i.Uk)(" gesucht werden.")]),c,(0,i._)("p",null,[(0,i.Uk)("Eine Person besteht aus verschiedenen Attributen, nach einigen können ab Version "),(0,i.Wm)(r,{to:"/updates/3-5-0.html"},{default:(0,i.w5)((()=>[(0,i.Uk)("3.5.0")])),_:1}),(0,i.Uk)(" gesucht werden.")]),u])}]])},3744:(e,n)=>{n.Z=(e,n)=>{const r=e.__vccOpts||e;for(const[e,i]of n)r[e]=i;return r}}}]);