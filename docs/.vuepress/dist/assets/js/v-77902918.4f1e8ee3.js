"use strict";(self.webpackChunkuct_manual_service_v2=self.webpackChunkuct_manual_service_v2||[]).push([[385],{6779:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-77902918","path":"/updates/2-6-1.html","title":"Update 2.6.1","lang":"de-DE","frontmatter":{"title":"Update 2.6.1","icon":"operate","order":4,"author":"Timo Schneider","date":"2022-08-14T00:00:00.000Z","category":["Update"],"tag":["2.6.1"],"sticky":true,"star":true,"footer":"Entwickelt von der interdisziplinären Biomaterial- und Datenbank Frankfurt (iBDF)","copyright":false},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[{"level":3,"title":"Changed","slug":"changed","link":"#changed","children":[]},{"level":3,"title":"Removed","slug":"removed","link":"#removed","children":[]},{"level":3,"title":"Added","slug":"added","link":"#added","children":[]},{"level":3,"title":"Fixes","slug":"fixes","link":"#fixes","children":[]}]}],"git":{"createdTime":1663338771000,"updatedTime":1666014750000,"contributors":[{"name":"Timo Schneider","email":"timo.schneider@kgu.de","commits":2}]},"readingTime":{"minutes":0.73,"words":220},"filePathRelative":"updates/2-6-1.md","localizedDate":"14. August 2022","excerpt":"<p>Das nächste Update ist in Arbeit.</p>\\n"}')},5554:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var i=a(6252);const l=(0,i._)("p",null,"Das nächste Update ist in Arbeit.",-1),d={class:"hint-container tip"},n=(0,i._)("p",{class:"hint-container-title"},"Inhaltsangabe",-1),r={class:"table-of-contents"},o=(0,i.uE)('<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><h3 id="changed" tabindex="-1"><a class="header-anchor" href="#changed" aria-hidden="true">#</a> Changed</h3><ul><li>when updating a main focus, the counter will now be called correctly</li><li>better json view of some objects in project editing</li></ul><h3 id="removed" tabindex="-1"><a class="header-anchor" href="#removed" aria-hidden="true">#</a> Removed</h3><ul><li>call rest mail/new in frontend removed when creating a project, this was deprecated as it is now handled by the backend</li></ul><h3 id="added" tabindex="-1"><a class="header-anchor" href="#added" aria-hidden="true">#</a> Added</h3><ul><li>updateCounter function to update specific object AFTER a project is edited or created</li><li>method to update all counters</li><li>new Endpoint to change a report date of a given project</li></ul><h3 id="fixes" tabindex="-1"><a class="header-anchor" href="#fixes" aria-hidden="true">#</a> Fixes</h3><ul><li>todo circular dependency</li><li>missing kindOfInquiry in projectChangeStatus -&gt; should fix the issue not displaying the timeline correctly</li><li>if a report date is null of a project, a new one will be correctly generated, if you open the &quot;edit&quot;-page of the project</li></ul>',9),s={},u=(0,a(3744).Z)(s,[["render",function(e,t){const a=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[l,(0,i.kq)(" more "),(0,i._)("div",d,[n,(0,i._)("nav",r,[(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Wm)(a,{to:"#features"},{default:(0,i.w5)((()=>[(0,i.Uk)("Features")])),_:1}),(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Wm)(a,{to:"#changed"},{default:(0,i.w5)((()=>[(0,i.Uk)("Changed")])),_:1})]),(0,i._)("li",null,[(0,i.Wm)(a,{to:"#removed"},{default:(0,i.w5)((()=>[(0,i.Uk)("Removed")])),_:1})]),(0,i._)("li",null,[(0,i.Wm)(a,{to:"#added"},{default:(0,i.w5)((()=>[(0,i.Uk)("Added")])),_:1})]),(0,i._)("li",null,[(0,i.Wm)(a,{to:"#fixes"},{default:(0,i.w5)((()=>[(0,i.Uk)("Fixes")])),_:1})])])])])])]),o])}]])},3744:(e,t)=>{t.Z=(e,t)=>{const a=e.__vccOpts||e;for(const[e,i]of t)a[e]=i;return a}}}]);