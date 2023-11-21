"use strict";(self.webpackChunkuct_manual_service_v2=self.webpackChunkuct_manual_service_v2||[]).push([[8140],{8393:(e,i,t)=>{t.r(i),t.d(i,{data:()=>a});const a=JSON.parse('{"key":"v-0faefc39","path":"/updates/2-5-1.html","title":"Update 2.5.1","lang":"de-DE","frontmatter":{"title":"Update 2.5.1","icon":"operate","order":1,"author":"Timo Schneider","date":"2022-07-20T00:00:00.000Z","category":["Update"],"tag":["2.5.1"],"sticky":true,"star":true,"footer":"Entwickelt von der interdisziplinären Biomaterial- und Datenbank Frankfurt (iBDF)","copyright":false},"headers":[{"level":2,"title":"Frontend-Service","slug":"frontend-service","link":"#frontend-service","children":[{"level":3,"title":"Added","slug":"added","link":"#added","children":[]},{"level":3,"title":"Fixes","slug":"fixes","link":"#fixes","children":[]}]},{"level":2,"title":"Project-Service","slug":"project-service","link":"#project-service","children":[{"level":3,"title":"Added","slug":"added-1","link":"#added-1","children":[]},{"level":3,"title":"Changed","slug":"changed","link":"#changed","children":[]},{"level":3,"title":"Fixed","slug":"fixed","link":"#fixed","children":[]}]},{"level":2,"title":"Vuejs-Frontend","slug":"vuejs-frontend","link":"#vuejs-frontend","children":[{"level":3,"title":"Added","slug":"added-2","link":"#added-2","children":[]},{"level":3,"title":"Fixed","slug":"fixed-1","link":"#fixed-1","children":[]},{"level":3,"title":"Changed","slug":"changed-1","link":"#changed-1","children":[]}]}],"git":{"createdTime":1658324861000,"updatedTime":1658324861000,"contributors":[{"name":"Timo Schneider","email":"timo.schneider@kgu.de","commits":1}]},"readingTime":{"minutes":1.38,"words":415},"filePathRelative":"updates/2-5-1.md","localizedDate":"20. Juli 2022","excerpt":"<p>Ein neues Update ist ab heute live <a href=\\"https://gitlab.proskive.de/uct/open-approve\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Gitlab</a>.</p>\\n"}')},2775:(e,i,t)=>{t.r(i),t.d(i,{default:()=>c});var a=t(6252);const d={href:"https://gitlab.proskive.de/uct/open-approve",target:"_blank",rel:"noopener noreferrer"},l={class:"hint-container tip"},n=(0,a._)("p",{class:"hint-container-title"},"Inhaltsangabe",-1),r={class:"table-of-contents"},o=(0,a.uE)('<h2 id="frontend-service" tabindex="-1"><a class="header-anchor" href="#frontend-service" aria-hidden="true">#</a> Frontend-Service</h2><h3 id="added" tabindex="-1"><a class="header-anchor" href="#added" aria-hidden="true">#</a> Added</h3><ul><li>new vuejs frontend file</li></ul><h3 id="fixes" tabindex="-1"><a class="header-anchor" href="#fixes" aria-hidden="true">#</a> Fixes</h3><ul><li>do not show hidden main focus in edit</li></ul><h2 id="project-service" tabindex="-1"><a class="header-anchor" href="#project-service" aria-hidden="true">#</a> Project-Service</h2><h3 id="added-1" tabindex="-1"><a class="header-anchor" href="#added-1" aria-hidden="true">#</a> Added</h3><ul><li>Added samplecontainer name code and description to export</li><li>PatientDataSetGroup to Group PatientDataSets</li><li>Database entries for PatientDataSetGroup</li><li>FieldType for PatientDataItems</li><li>Audit Table for Project Object</li><li>editable status in the View.ProjectPage.class to enable editing a project in a tile</li><li>kind of inquiry audit table</li><li>editable status for kind of inquiry to allow users to update a project in different status</li></ul><h3 id="changed" tabindex="-1"><a class="header-anchor" href="#changed" aria-hidden="true">#</a> Changed</h3><ul><li>Added Clinic name and description to export</li><li>Changed field names of emailDTO to support email-service variable names</li><li>search for projects (all projects, tiles, and user projects) reworked</li><li>removed deprecated an unused code in repository and service of project class</li><li>show future events on the home page that also take place on the current day</li></ul><h3 id="fixed" tabindex="-1"><a class="header-anchor" href="#fixed" aria-hidden="true">#</a> Fixed</h3><ul><li>Error when user tries to view his projects in a table format (pages were not correctly displayed)</li><li></li></ul><h2 id="vuejs-frontend" tabindex="-1"><a class="header-anchor" href="#vuejs-frontend" aria-hidden="true">#</a> Vuejs-Frontend</h2><h3 id="added-2" tabindex="-1"><a class="header-anchor" href="#added-2" aria-hidden="true">#</a> Added</h3><ul><li>possibility to change &quot;editable&quot; status, so a user can edit a project in another status but &quot;in Bearbeitung&quot;</li><li>loading button when updating or editing a status for a project</li><li>option to display, search and filter second and third prpjectleader in projectlists possibility to directly link to administration parts via ?currentStep={NUMBER} in the url. for example /admin/administration?currentStep=5</li></ul><h3 id="fixed-1" tabindex="-1"><a class="header-anchor" href="#fixed-1" aria-hidden="true">#</a> Fixed</h3><ul><li>Add button in administration had a different font</li><li>Translations for steps in project craetion or edit</li><li>minor layout and translation errors</li><li>missing loadSettings when creating a project</li><li>Fix adding multiple status on a project when clicking the add bar multiple times</li></ul><h3 id="changed-1" tabindex="-1"><a class="header-anchor" href="#changed-1" aria-hidden="true">#</a> Changed</h3><ul><li>no new tab will be opened, when clicking a button in a project</li><li>Font size in print view</li><li>in project lists the tags are now sortable and searchable</li><li>shows services in print view if a service has been added to a project, even if the settings are OFF for services</li></ul>',19),s={},c=(0,t(3744).Z)(s,[["render",function(e,i){const t=(0,a.up)("ExternalLinkIcon"),s=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("p",null,[(0,a.Uk)("Ein neues Update ist ab heute live "),(0,a._)("a",d,[(0,a.Uk)("Gitlab"),(0,a.Wm)(t)]),(0,a.Uk)(".")]),(0,a.kq)(" more "),(0,a._)("div",l,[n,(0,a._)("nav",r,[(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(s,{to:"#frontend-service"},{default:(0,a.w5)((()=>[(0,a.Uk)("Frontend-Service")])),_:1}),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(s,{to:"#added"},{default:(0,a.w5)((()=>[(0,a.Uk)("Added")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(s,{to:"#fixes"},{default:(0,a.w5)((()=>[(0,a.Uk)("Fixes")])),_:1})])])]),(0,a._)("li",null,[(0,a.Wm)(s,{to:"#project-service"},{default:(0,a.w5)((()=>[(0,a.Uk)("Project-Service")])),_:1}),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(s,{to:"#added-1"},{default:(0,a.w5)((()=>[(0,a.Uk)("Added")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(s,{to:"#changed"},{default:(0,a.w5)((()=>[(0,a.Uk)("Changed")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(s,{to:"#fixed"},{default:(0,a.w5)((()=>[(0,a.Uk)("Fixed")])),_:1})])])]),(0,a._)("li",null,[(0,a.Wm)(s,{to:"#vuejs-frontend"},{default:(0,a.w5)((()=>[(0,a.Uk)("Vuejs-Frontend")])),_:1}),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(s,{to:"#added-2"},{default:(0,a.w5)((()=>[(0,a.Uk)("Added")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(s,{to:"#fixed-1"},{default:(0,a.w5)((()=>[(0,a.Uk)("Fixed")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(s,{to:"#changed-1"},{default:(0,a.w5)((()=>[(0,a.Uk)("Changed")])),_:1})])])])])])]),o])}]])},3744:(e,i)=>{i.Z=(e,i)=>{const t=e.__vccOpts||e;for(const[e,a]of i)t[e]=a;return t}}}]);