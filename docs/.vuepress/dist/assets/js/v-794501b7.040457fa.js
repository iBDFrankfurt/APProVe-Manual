"use strict";(self.webpackChunkuct_manual_service_v2=self.webpackChunkuct_manual_service_v2||[]).push([[6718],{5071:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-794501b7","path":"/updates/2-6-2.html","title":"Update 2.6.2","lang":"de-DE","frontmatter":{"title":"Update 2.6.2","icon":"operate","order":0,"author":"Timo Schneider","date":"2022-08-27T00:00:00.000Z","category":["Update"],"tag":["2.6.2","To-do"],"sticky":true,"star":true,"footer":"Entwickelt von der interdisziplinären Biomaterial- und Datenbank Frankfurt (iBDF)","copyright":false},"headers":[{"level":3,"title":"Features","slug":"features","link":"#features","children":[]},{"level":3,"title":"Updated","slug":"updated","link":"#updated","children":[]},{"level":3,"title":"Changed","slug":"changed","link":"#changed","children":[]},{"level":3,"title":"Added","slug":"added","link":"#added","children":[]},{"level":3,"title":"Fixes","slug":"fixes","link":"#fixes","children":[]}],"git":{"createdTime":1663338771000,"updatedTime":1666014750000,"contributors":[{"name":"Timo Schneider","email":"timo.schneider@kgu.de","commits":8}]},"readingTime":{"minutes":2.33,"words":699},"filePathRelative":"updates/2-6-2.md","localizedDate":"27. August 2022","excerpt":"<p>Das nächste Update ist in Arbeit.</p>\\n"}')},3129:(e,t,i)=>{i.r(t),i.d(t,{default:()=>w});var n=i(6252);const a=(0,n._)("p",null,"Das nächste Update ist in Arbeit.",-1),o={class:"hint-container tip"},l=(0,n._)("p",{class:"hint-container-title"},"Inhaltsangabe",-1),s={class:"table-of-contents"},r=(0,n.uE)('<h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h3><ul><li>view todos assigned to you as admin via the dashboard</li><li>show number of unfinished todos in the dashboard</li></ul><h3 id="updated" tabindex="-1"><a class="header-anchor" href="#updated" aria-hidden="true">#</a> Updated</h3><ul><li>new Spring Boot Dependency 2.7.2 -&gt; 2.7.3</li></ul><h3 id="changed" tabindex="-1"><a class="header-anchor" href="#changed" aria-hidden="true">#</a> Changed</h3><ul><li>changed the way the amount of objects is handled in the background</li><li>the following objects have a counter which tracks the amount of connected projects <ul><li>ActualChangeStatus, KindOfMaterial, Sample, SampleType, ChangeStatus, KindOfInquiry, MainFocus, Request, Service, Tags, PatientDataItem, PatientDataSet, PatientDataSetGroup</li></ul></li><li>fine-grained the json response of connected objects, this should result in faster loading of administration page</li><li>in project edit, the info tab can now be scrolled if the screen is a bit smaller</li><li>in the same info tab the lists for roles and tiles have a badge now</li><li>scrollbar support for administration steps, edit project steps and create project steps to correctly show the steps on smaller screens</li><li>changed the same of the placeholder in some multi-selects</li><li>new transparent UCT logo in homepage</li><li>readjusted logos to fit in smaller screens, image break at specific pixels</li><li>assignment for todos, previously you could tag someone if you wanted to assign a todo to someone. now you can add them in a select list.</li></ul><h3 id="added" tabindex="-1"><a class="header-anchor" href="#added" aria-hidden="true">#</a> Added</h3><ul><li>all administration components now have the same core component. this makes it easier to change and more consistent</li><li>every administration element now has multiple tabs in their modal showing all connected objects to it. i.e. when looking up main focuses you can see every projekt which has this specific main focus</li><li>every administration element now has a statistic page</li><li>you can now sort main focus per year in the statistics for main focus</li><li>new statistic for patient data items showing which project chose which item</li><li>new search functions in all modals (i.e. search connected projects or persons)</li><li>new API endpoints to track projects of objects (i.e. KindOfInquiry)</li><li>new API endpoints to track samples of objects (i.e. sample types, sample containers, etc)</li><li>new API endpoints to track tiles of objects (i.e. kind-of-inquiry, main-focus, tags, etc)</li><li>New AMount tracker for projects in patient data item,set and set group</li><li>the endpoint fo connected projects now returns the createdAt field of a project</li><li>new endpoint to load a project with less json data payload, should result in faster loading times of a project</li><li>check if person is admin when opening the print view. depending on the admin role, the user will see different buttons on top of the summary</li><li>check if user is admin when opening the print-view. this allows for better button handling</li><li>added button group above publication view</li><li>added button group above votum view</li></ul><h3 id="fixes" tabindex="-1"><a class="header-anchor" href="#fixes" aria-hidden="true">#</a> Fixes</h3>',9),d=(0,n._)("li",null,"navbar in mobile can now be scrolled in the frontend",-1),c=(0,n._)("li",null,"wrong counter for main focus, kind of inquiry and requests",-1),u=(0,n._)("li",null,'fixed recursive call when checking tags in administration (this could lead to "Out of Memory" errors depending on your system)',-1),h=(0,n._)("li",null,"wrong counters, projects are now being counted with distinct. this should result in the correct amount <-- needs further testing",-1),p=(0,n._)("li",null,'the project view checked for an "addedVotum" to show if a votum is present for this project, this was deleted in the previous update. it now checks for the correct "votum" object',-1),f=(0,n._)("li",null,"leading zeros in sample modals are now removed, when adding a number",-1),m=(0,n._)("li",null,"check for empty and smaller than zero inputs in sample modal",-1),g={},w=(0,i(3744).Z)(g,[["render",function(e,t){const i=(0,n.up)("router-link"),g=(0,n.up)("Badge");return(0,n.wg)(),(0,n.iD)("div",null,[a,(0,n.kq)(" more "),(0,n._)("div",o,[l,(0,n._)("nav",s,[(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Wm)(i,{to:"#features"},{default:(0,n.w5)((()=>[(0,n.Uk)("Features")])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(i,{to:"#updated"},{default:(0,n.w5)((()=>[(0,n.Uk)("Updated")])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(i,{to:"#changed"},{default:(0,n.w5)((()=>[(0,n.Uk)("Changed")])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(i,{to:"#added"},{default:(0,n.w5)((()=>[(0,n.Uk)("Added")])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(i,{to:"#fixes"},{default:(0,n.w5)((()=>[(0,n.Uk)("Fixes")])),_:1})])])])]),r,(0,n._)("ul",null,[d,c,u,h,p,f,m,(0,n._)("li",null,[(0,n.Uk)("a logged-in user could see uploaded votes of other projects, if he had the link to it "),(0,n.Wm)(g,{type:"error",text:"CRITICAL",vertical:"top"})]),(0,n._)("li",null,[(0,n.Uk)('empty entries for "enabled" in persons. could lead to wrong sorting of person table by enabled status. '),(0,n.Wm)(g,{type:"info",text:"TRY TO FIX",vertical:"top"})])])])}]])},3744:(e,t)=>{t.Z=(e,t)=>{const i=e.__vccOpts||e;for(const[e,n]of t)i[e]=n;return i}}}]);