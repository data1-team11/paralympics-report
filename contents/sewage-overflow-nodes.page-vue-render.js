
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/paralympics-report/index.html","title":"Home"}},[_v("Your Logo")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/paralympics-report/contents/water-quality.html"}},[_v("Water Quality")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/paralympics-report/contents/canal-traffic.html"}},[_v("Canal Traffic")])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("Topic 3")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/paralympics-report/contents/topic3a.html"}},[_v("Sustainability")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/paralympics-report/contents/topic3b.html"}},[_v("Safety")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("Datasets")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/paralympics-report/contents/sewage-overflow-nodes.html"}},[_v("Sewage Overflow Nodes")])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"fw-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("Contents")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/paralympics-report/index.html"}},[_v("Home 🏠")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/paralympics-report/contents/water-quality.html"}},[_v("Water Quality")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/paralympics-report/contents/canal-traffic.html"}},[_v("Canal Traffic")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("Topic 3 \n\n"),_c('div',{staticClass:"site-nav-dropdown-btn-container"},[_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/paralympics-report/contents/sustainability.html"}},[_v("Sustainability")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/paralympics-report/contents/safety.html"}},[_v("Safety")])])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/paralympics-report/contents/datasets.html"}},[_v("Datasets")]),_v(" "),_c('div',{staticClass:"site-nav-dropdown-btn-container"},[_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/paralympics-report/contents/sewage-overflow-nodes.html"}},[_v("Sewage Overflow Nodes")])])])])])]),_v(" "),_c('pre',[_c('code',{pre:true},[_v("  </site-nav>\n</div>\n")])]),_v(" "),_c('div',{attrs:{"id":"content-wrapper"}},[_c('breadcrumb'),_v(" "),_c('h1',{attrs:{"id":"sewage-overflow-nodes"}},[_v("Sewage Overflow Nodes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#sewage-overflow-nodes","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The Waternet sewerage network data is retrieved from "),_c('a',{attrs:{"href":"https://data.overheid.nl/dataset/xnhveaeyheww2w"}},[_v("https://data.overheid.nl/dataset/xnhveaeyheww2w")]),_v(".\nAs we were unable to download the WFS data (link returned 404 error), we used a Python "),_c('a',{attrs:{"href":"/code/parse_sewer_data.py"}},[_v("script")]),_v(" to retrieve the data via the provided API and save it as a "),_c('a',{attrs:{"href":"/data/sewage_nodes.geojson"}},[_v("GeoJSON file")]),_v(".\nThe Coordinate Reference System used is EPSG:28992.")]),_v(" "),_c('p',[_v("The sewage nodes can be viewed using QGIS, using the files in "),_c('a',{attrs:{"href":"/data/qgis-sewage-nodes"}},[_v("qgis-sewage-nodes")]),_v(". We used QGIS to filter the nodes into overflow and non-overflow nodes, and saved the data to csv files.")])],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})]),_v(" "),_c('scroll-top-button'),_v(" "),_c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.1.0")]),_v("]")])])])],1)],1)])],1)])}
};
    var pageVueStaticRenderFns = [];
  