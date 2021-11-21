(function(){if(typeof window.locator=="object"){return;}var n,w,L,k,d,A={},F="LocatorMessages";gloader.load(["glow","1","glow.dom","glow.events","glow.net","glow.i18n"],{onLoad:function(P){n=P;w=n.events;L=n.net;k=n.lang;d=n.i18n;n.ready(function(){A.cookie=v();});d.addLocaleModule(F,"en",{help:{title:"My Location Help",body:"The My Location feature takes a location of your choice and uses it to display relevant information on the BBC News and Weather websites. You only need to set it in one place and the information is automatically shared."}});}});var y="MYLOC",h=".bbc.co.uk",u="365",O=4,e="@",q="|",g="~";var b=false;var K=4;var p=true,M="cachebuster=cb{random}",t="locator";var N={A:"WCW",B:"WID",C:"LOCATOR"};var J="http://news.bbc.co.uk",H="/weather/util/search/WeatherSuggestJSON",m="/weather/util/search/WeatherSearch",o="/weather/forecast/{loc}/Location";var B=J+H+".{format}?region={region}&search={search}&jsoncallback={callback}",s=J+m+".{format}?region={region}&search={search}&jsoncallback={callback}",f=J+m+".{format}?region={region}&lat={lat}&lon={lon}&radius={radius}&jsoncallback={callback}",D=J+o+".{format}?jsoncallback={callback}",c={format:"json",region:"world",search:""};var j={};var z=function(P,V,T){if(!V){return;}var T=T||{};if(j[P]){j[P].abort();j[P]=null;}if(t=="locator"){var R="c"+locator._callbackManagement.nextId++;P=k.interpolate(P,{callback:"locator._callbackManagement."+R});locator._callbackManagement[R]=function(W){j[P].destroy();j[P]=null;V(W);};}if(typeof T.useCache!=null&&!T.useCache){var Q=[new Date().getTime(),parseInt(Math.random()*100000)].join(""),U=(P.indexOf("?")>0?"&":"?");P+=U+k.interpolate(M,{random:Q});}var S=L.loadScript(P,{onLoad:function(W){j[P]=null;V(W);},onError:function(){j[P]=null;},useCache:true});if(t=="locator"){}j[P]=S;};var r=function(P){return N[P];};var G=function(Q){for(var P in N){if(N[P]==Q){return P;}}return null;};var I=function(Q,R){for(var S=0,P=Q.length;S<P;S++){if(Q[S]&&Q[S].name==R){return S;}}return null;};var i=function(P,Q){var R=I(P,Q);if(R!=null){return P[R];}else{return null;}};var E=function(P,R){var Q=i(P,R);if(!Q&&l(R)){Q={name:R,value:""};P.push(Q);}return Q;};var l=function(P){return !!G(P);};var a=function(P,Q){var R=I(P,Q);if(R!=null){delete P[R];}};var C=function(R,P){var P=P||{},Y=[],V="",Q;if(!A.shouldWriteToCookie()){return;}for(var S=0,T=R.dataStores.length;S<T;S++){var X=R.dataStores[S];if(X!=null&&X.name!=null&&X.value!=null){var W=G(X.name),Z=encodeURI(X.value),U=W+Z;Y.push(U);}}V=Y.join(q);Q=[(R.version?R.version:O),V].join(e);A.util.Cookie.create(y,Q,u,h);};var v=function(){var P=A.util.Cookie.read(y),Q={dataStores:[]},ac,Y,R,V,U;if(typeof P==="string"){P=unescape(P);ac=P.split(e);try{Y=parseInt(ac[0])?parseInt(ac[0]):null;V=ac[1];if(Y){Q.version=Y;}else{x();}if(V){U=V.split(q);for(var W=0,X=U.length;W<X;W++){var ab=U[W],aa=ab.charAt(0),Z=r(aa),S=decodeURI(ab.slice(1));Q.dataStores.push({name:Z,value:S});}}else{x();}}catch(T){x();}}return Q;};var x=function(){A.util.Cookie.destroy(y,h);};A={locales:{msg:F},EVENTS:{locationChanged:"locationChanged",autoSuggestSelected:"autoSuggestSelected",userShownLocationChange:"userShownLocationChange",userConfirmedLocationChange:"userConfirmedLocationChange",userCancelledLocationChange:"userCancelledLocationChange",userShownClearLocation:"userShownClearLocation",userConfirmedClearLocation:"userConfirmedClearLocation",userCancelledClearLocation:"userCancelledClearLocation"},cookie:{version:null,dataStores:[]},migrate:function(Q){var P=this;this.cookie=v();if(locator.getSharedLocationId()&&(P.cookie.version<O)){if(locator.debug){console.log("migrate()");}locator.fetchFromDataSet(locator.getSharedLocationId,function(R){if(locator.debug){console.log("migrate info: ",R,R.id,R.name,R.isNearest);}if(R&&R.id&&R.name){locator.getInfoFor(R.id,R.name,R.isNearest,function(T){P.cookie.version=O;var S=[];if(T.where_i_live){S.push(T.where_i_live);}if(T.where_i_live_alt){S.push(T.where_i_live_alt);}locator._setDataSet("WID",S.join("~"));if(locator.debug){console.log("migrate: success (migrated)");}if(typeof Q==="function"){Q();}});}else{if(locator.debug){console.log("migrate: no location data for migration in cookie (error)");}if(typeof Q==="function"){Q();}}},"wcw");}else{if(locator.debug){console.log("migrate: no shared location or cookie at latest version ");}if(typeof Q==="function"){Q();}}},on:function(P,Q){return w.addListener(this,P,Q);},getSharedLocationId:function(){this.cookie=v();var P=i(this.cookie.dataStores,"WCW");if(!this.COOKIE_EXTENDED&&P){C(this.cookie);this.COOKIE_EXTENDED=true;}if(P){return P.value;}return null;},getCookieVersion:function(){return this.cookie.version;},isIdValid:function(R){var Q=true;if(Q&&R=="undefined"){Q=false;}if(Q&&(R==undefined||R==null)){Q=false;}if(Q&&R.split){var P=R.split(g);Q=(P.length==K)?true:false;}return Q;},setSharedLocationId:function(S,Q){var Q=Q||{};if(S instanceof locator.Location){S=S.toString();}if(!this.isIdValid(S)||!this.shouldWriteToCookie()){return;}var R=E(this.cookie.dataStores,"WCW");R.value=S;var P=i(this.cookie.dataStores,"WID");if(P){a(this.cookie.dataStores,"WID");}this.cookie.version=O;C(this.cookie);if(Q._beforeEvent){Q._beforeEvent();}w.fire(this,this.EVENTS.locationChanged,{locationId:S});},clearSharedLocation:function(){if(!this.shouldWriteToCookie()){return;}A.util.Cookie.destroy(y,h);w.fire(this,this.EVENTS.locationChanged,{locationId:null});},hasSharedLocationIdChanged:function(P){return !!getSavedLocation()==P;},shouldWriteToCookie:function(){var Q=(this.cookie.version?this.cookie.version:O),P=O;return !!(Q<=P);},getMessageForId:function(P){var Q=d.getLocaleModule(locator.locales.msg);return Q[P]?Q[P]:null;},searchByPlaceName:function(S,X,P){var P=P||{},V=P.searchType||"full",W=P.startIndex||null,U=P.type||null,R=k.apply(c,P),Q,T;R.search=S;if(V=="suggest"){Q=k.interpolate(B,R);}else{Q=k.interpolate(s,R);}if(W){Q+="&startIndex="+W;}if(U){Q+="&type="+U;}z(Q,X,{useCache:p});},searchByCoordinatesWithRadius:function(U,T,P,V,S){var R=n.lang.apply(c,{lon:U,lat:T,radius:P}),Q=k.interpolate(f,R);if(!V){return;}z(Q,V,{useCache:p});},searchByPostcode:function(Q,T,S){var R=n.lang.apply(c,{search:encodeURIComponent(Q)}),P=k.interpolate(s,R);if(!T){return;}z(P,function(V){var U=null;if(V.results&&V.results[0]){U=V.results[0];}T(U);},{useCache:p});},getInfoFor:function(S,R,U,T){var Q=n.lang.apply(c,{loc:S,area:encodeURIComponent(R)}),P=k.interpolate(D,Q);if(U==true){P+="&area="+Q.area;}if(!T){return;}z(P,function(W){var V=null;if(W.location){T(W.location);}},{useCache:p});},fetchFromDataSet:function(U,W,S){if(!U){return null;}if(S=="wcw"){var V=i(this.cookie.dataStores,"WCW");var R=(V&&V.value)?V.value.split(g):[null,null,null,null];W({id:R[0],name:R[1],isNearest:R[2],nationId:R[3]});}else{if(S=="wid"){var Q=i(this.cookie.dataStores,"WID"),T={id:null,alt:null};if(Q&&Q.value){var P=(Q&&Q.value)?Q.value.split(g):[null,null];T={id:(P[0]?P[0]:null),alt:(P[1]?P[1]:null)};}W(T);}else{throw Error("Data Set not supported");}}},_setDataSet:function(Q,R){if(!this.shouldWriteToCookie()){return;}var P=E(this.cookie.dataStores,Q);P.value=R;C(this.cookie);},_setLegacyCookieVersion:function(P){O=P;},_callbackManagement:{nextId:0}};A.Location=(function(){var P=function(T,Q,S,R){this.id=T;this.name=Q;if(S==1){this.isNearest=true;}else{this.isNearest=false;}this.nationId=R;};P.DELIM=g;P.parse=function(R){var S=R.split(P.DELIM),V=S[0],Q=S[1],U=S[2],T=S[3];return new P(V,Q,U,T);};P.prototype={toString:function(){var Q=[this.id,this.name,(this.isNearest?"1":"0"),this.nationId];return Q.join(P.DELIM);}};return P;})();if(!window.locator){window.locator=A;}})();(function(){var a={create:function(d,g,h,f){var e="";if(h){var c=new Date();c.setTime(c.getTime()+(h*24*60*60*1000));var b="; expires="+c.toGMTString();}else{var b="";}e=d+"="+g+b+"; path=/";if(f){e+="; domain="+f;}document.cookie=e;},read:function(d){var f=d+"=";var b=document.cookie.split(";");for(var e=0;e<b.length;e++){var g=b[e];while(g.charAt(0)==" "){g=g.substring(1,g.length);}if(g.indexOf(f)==0){return g.substring(f.length,g.length);}}return null;},destroy:function(b,c){a.create(b,"",-1,c);}};if(typeof window.locator=="object"&&typeof window.locator.util!="object"){window.locator.util={Cookie:a,bind:function(b,c){return function(){c.apply(b,arguments);};}};}})();(function(){var a;gloader.load(["glow","1","glow.dom","glow.events","glow.widgets.AutoSuggest"],{onLoad:function(b){var d={},c="postcode";a=b;d.AutoSuggest=function(e,f){var f=f||{};this.minimumThreshold=3;this.removeDuplicates=f.removeDuplicates!=undefined?f.removeDuplicates:true;this.formatItem=f.formatItem||this.formatItem;this.searchRegion=f.searchRegion;this.showSearchMessage=f.showSearchMessage!=undefined?f.showSearchMessage:false;this.autoSuggest=new a.widgets.AutoSuggest(e,function(){return[];},a.lang.apply(f,{onInputChange:locator.util.bind(this,this.inputChange),onItemSelect:locator.util.bind(this,this.itemSelect),formatItem:this.formatItem,width:f.width,activeOnShow:this.autoSelectFirstItemInList,className:f.className}));this.locale=a.i18n.getLocaleModule(locator.locales.ui);this.searchingMessage=this.locale.autoSuggest.searching;this.noResultsMessage=this.locale.autoSuggest.noResults;this.inputElement=this.autoSuggest.inputElement;};d.AutoSuggest.prototype={autoSelectFirstItemInList:false,itemElementStart:"<span>",itemElementEnd:"</span>",searchingClass:"searching",searchingMessage:"",noResultsMessage:"",inputElement:null,show:function(){this.autoSuggest.show();},hide:function(){this.autoSuggest.hide();},displaySearchingMessage:function(){this.autoSuggest.inputElement.addClass(this.searchingClass);if(this.showSearchMessage){this.displayMessage(this.searchingMessage);}},displayNoResultsMessage:function(){this.displayMessage('<span class="no-results">'+this.noResultsMessage+"</span>");},displayMessage:function(f){this.autoSuggest.setData([{name:f}]);this.autoSuggest.find(f);var e=this;window.setTimeout(function(){e.autoSuggest.show();},10);},formatItem:function(e){return e.name+(e.context?", "+e.context:"");},inputChange:function(){if(this.autoSuggest.val().length<this.minimumThreshold){return;}this.displaySearchingMessage();locator.searchByPlaceName(this.autoSuggest.val(),locator.util.bind(this,this.updateSearchResults),{searchType:"suggest",region:this.searchRegion});},itemSelect:function(e){var f=e.selectedItem.name;if(f.match(this.searchingMessage)||f.match(this.noResultsMessage)){}else{a.events.fire(locator,locator.EVENTS.autoSuggestSelected,{name:f,item:e.selectedItem});if(!e.defaultPrevented()){}}e.preventDefault();return false;},updateSearchResults:function(o){var k={},p=[],m=o[1],j=o[2],n=o[3],e=o[4],r=o[5],q=0,g,f;for(var h=0,l=m.length;h<l;h++){g=m[h];f=j[h];forecastLoc=n[h];hasForecastPage=e[h]==="1"?true:false;isForecastLoc=r[h]==="true"?true:false;comparison=g+f;if(!k[comparison]){if(this.removeDuplicates){k[comparison]=true;}if(f!=c){p.push({name:g,context:f,forecastLoc:forecastLoc,hasForecastPage:hasForecastPage,isForecastLoc:isForecastLoc});}else{q++;}}}this.autoSuggest.inputElement.removeClass(this.searchingClass);if(p.length==0&&q==0){this.displayNoResultsMessage();}else{if(p.length>0){this.autoSuggest.setData(p);this.autoSuggest.find();}}}};if(!window.locator){window.locator={};}if(!window.locator.ui){window.locator.ui={};}window.locator.ui=d;}});})();(function(){var b,a="postcode";gloader.load(["glow","1","glow.dom","glow.events","glow.widgets.AutoSuggest","glow.i18n"],{onLoad:function(e){b=e;locator.locales.ui="LocatorUI";b.i18n.addLocaleModule(locator.locales.ui,"en",{changeLocationButton:"Change My Location",confirmSave:{confirm:"Confirm",cancel:"Cancel",back:"Back",titleSet:'You have chosen to set My Location to: <span class="locator-loc">{location}</span>',bodySet:'<p>My Location is also shared with the <a href="/weather">BBC Weather</a> site.</p><p>Press <span class="locator-action">Confirm</span> to set your Location, or <span class="locator-action">Cancel</span> to leave it unset.</p>',titleChange:'You have chosen to change My Location from: <span class="locator-loc-old">{locationOld}</span> to: <span class="locator-loc">{location}</span>',bodyChange:'<p>My Location is also shared with the <a href="/weather">BBC Weather</a> site.<p>Press <span class="locator-action">Confirm</span> if you are happy to make this change, or press <span class="locator-action">Cancel</span> to leave My Location as it is.</p>'},confirmClear:{confirm:"Confirm",cancel:"Cancel",title:"You have chosen to clear My Location.",body:'<p>Changing your setting here will also clear your location on the <a href="/weather">BBC Weather</a> site.</p><p>Please press <span class="locator-action">Confirm</span> to clear My Location, or press <span class="locator-action">Cancel</span> to leave it set to:</p><p><span class="locator-loc">{location}</span></p>'},results:{title:"Search Results for '{searchTerm}'"},pagination:{next:"Next",previous:"Prev"},autoSuggest:{searching:"Searching",noResults:"No results found, please try again"}});var c=[];window.locator.ui.Search=function(f,g){this.container=b.dom.get(f);this.searchTerm="";this.searchRegion=g.searchRegion;this.locale=b.i18n.getLocaleModule(locator.locales.ui);};window.locator.ui.Search.prototype={previousContents:[],search:function(g,h){var h=h||{};this.searchTerm=g;this.searchType=h.searchType||null;if(locator.debug){console.log("Search for %o with opts %o",g,h);}this.resetState();var f=this;locator.searchByPlaceName(g,function(j){if(!j){return;}if(j.results.length==0){b.events.fire(f,"noResults");}else{if(j.results.length==1){var i=j.results[0];if(i.has_forecast==0&&(i.type=="County"||i.type=="soundex_County")){if(locator.debug){console.log("COUNTY - only one result, searching again");}f.search(i.site_name,{searchType:"county_state"});}else{var k=k=new locator.Location(i.loc,i.site_name,(i.is_fsssi=="true"?false:true),(i.nation_id?i.nation_id:0));if(i.container){k.container=i.container;}if(locator.debug){console.log("Location object from search: ",k);}f.confirmLocationChange(k,function(l){if(locator.debug){console.log("Success!",l);}locator.setSharedLocationId(l.location.toString(),{_beforeEvent:function(){var m=[];if(i.where_i_live){m.push(i.where_i_live);}if(i.where_i_live_alt){m.push(i.where_i_live_alt);}locator._setDataSet("WID",m.join("~"));}});},function(l){if(locator.debug){console.log("User declined, go back.");}},{disambiguated:false});}}else{f.disambiguate(j);}}},{region:this.searchRegion,type:this.searchType});},showLocationChangeDialogue:function(m,q,i,f){var g=locator.getSharedLocationId()==null?false:true;var h=m.name+(m.container&&m.container!==a?", "+m.container:"");var s=this;var p=g?this.locale.confirmSave.titleChange:this.locale.confirmSave.titleSet;p=b.lang.interpolate(p,{location:h,locationOld:f.locationOld});var l=g?this.locale.confirmSave.bodyChange:this.locale.confirmSave.bodySet;var r=f.disambiguated?this.locale.confirmSave.back:this.locale.confirmSave.cancel;var o=b.lang.apply(this.locale,{title:p,body:l,cancel:r});var k=b.dom.create('<div class="locator-confirm"><p class="locator-panel-header"><strong>{title}</strong></p><div>{body}</div></div>',{interpolate:o});var n=b.dom.create('<button type="submit">{confirmSave.confirm}</button>',{interpolate:o});var j=b.dom.create('<button type="submit">{cancel}</button>',{interpolate:o});k.append(j).append(n);this.previousContents.push(this.container.children());if(locator.debug){console.log("Pushed previous contents onto stack",this.previousContents.length);}b.events.fire(locator,locator.EVENTS.userShownLocationChange,{location:m});if(g){locator.transition(this.container,k.children(),"fadeIn");}else{locator.transition(this.container,k.children(),"slideDown");}b.events.addListener(n,"click",function(t){t.location=m;b.events.fire(locator,locator.EVENTS.userConfirmedLocationChange,t);s.previousContents.pop();q(t);if(!t.defaultPrevented()){s.container.empty();}s.container.removeClass("locator-msg-confirm");});b.events.addListener(j,"click",function(t){t.location=m;b.events.fire(locator,locator.EVENTS.userCancelledLocationChange,t);var u=s.previousContents.pop();i(t);if(!t.defaultPrevented()){locator.transition(s.container,u,"fadeIn");}s.container.removeClass("locator-msg-confirm");if(f.disambiguated){s.container.addClass("locator-msg-disambiguate");}});},confirmLocationChange:function(h,l,g,k){this.container.addClass("locator-msg-confirm");var j=locator.getSharedLocationId()==null?false:true;var i=h.name+(h.container&&h.container!==a?", "+h.container:"");var f=this;if(j){locator.fetchFromDataSet(locator.getSharedLocationId(),function(m){k.locationOld=(m&&m.name)?m.name:"Not Set";f.showLocationChangeDialogue(h,l,g,k);},"wcw");}else{this.showLocationChangeDialogue(h,l,g,k);}},resetState:function(){this.container.empty();this.container.removeClass("locator-msg-disambiguate");this.container.removeClass("locator-msg-confirm");this.previousContents=[];},invokeLocationChangeFromSingleResult:function(f){if(locator.debug){console.log("invokeLocationChangeFromSingleResult: ",f);}var g=new locator.Location(f.loc,(f.area_name?f.area_name:f.name),(f.area_name?true:false),(f.nation_id?f.nation_id:0));if(f.county){g.container=f.county;}this.resetState();this.confirmLocationChange(g,function(h){if(locator.debug){console.log("Success!",h);}locator.setSharedLocationId(h.location.toString(),{_beforeEvent:function(){var i=[];if(f.where_i_live){i.push(f.where_i_live);}if(f.where_i_live_alt){i.push(f.where_i_live_alt);}if(i.length>0){locator._setDataSet("WID",i.join("~"));}}});},function(h){if(locator.debug){console.log("User declined, go back.");}},{disambiguated:false});},disambiguate:function(l){if(l.results&&l.results.length>0){this.container.addClass("locator-msg-disambiguate");var j=b.lang.interpolate(this.locale.results.title,{searchTerm:l.searchTerms});var f=l.results;var i='<div><p class="locator-panel-header"><strong>{resultsTitle}</strong></p><div class="locator-results"></div></div>';var g=b.dom.create(i,{interpolate:{resultsTitle:j}});var h=this.createResultsList(f);g.get(".locator-results").append(h);this.content=g;if(l.itemsPerPage<=l.totalResults){var k=new locator.ui.Paginator(this,this.content,l.itemsPerPage,l.totalResults);}locator.transition(this.container,this.content.children(),"slideDown");this.attachResultEventListeners();}},attachResultEventListeners:function(){var f=this;b.events.addListener(this.container.get(".locator-results a"),"click",function(g){var i=b.dom.get(g.source);if(i.data("type")&&i.data("type")=="county_state"&&i.data("searchTerm")){if(locator.debug){console.log("COUNTY - result click, searching again");}f.search(i.data("searchTerm"),{searchType:"county_state"});}else{f.container.removeClass("locator-msg-disambiguate");var h=i.data("loc");if(locator.debug){console.log("location selected",h);}f.selectLocation(h);}});},fetchResultSetAndUpdateResultsList:function(i,g,f){if(locator.debug){console.log("Fetch new result set for %o start %o, end %o for el %o",this.searchTerm,i,g);}var h=this;locator.searchByPlaceName(this.searchTerm,function(k){if(k.results){var j=h.createResultsList(k.results);j.attr("start",i+1);h.container.get(".locator-results").empty().append(j);h.attachResultEventListeners();f?f():null;}},{startIndex:i,region:this.searchRegion,type:this.searchType});},createResultsList:function(l){var j=b.dom.create("<ol></ol>"),m,n,h;for(var k=0,g=l.length;k<g;k++){h=l[k];m=b.dom.create('<li><a href="javascript:;">'+h.site_name+(h.type!=a&&h.container?", "+h.container:"")+"</a></li>");anchor=m.get("a");n=new locator.Location(h.loc,h.site_name,(h.is_fsssi=="true"?false:true),(h.nation_id?h.nation_id:0));if(h.container){n.container=h.container;}var f=[];if(h.where_i_live){f.push(h.where_i_live);}if(h.where_i_live_alt){f.push(h.where_i_live_alt);}n._wids=f;anchor.data("loc",n);if(h.has_forecast==0&&(h.type=="County"||h.type=="soundex_County")){if(locator.debug){console.log("COUNTY - attach county_state type to anchor.data");}anchor.data("searchTerm",h.site_name);anchor.data("type","county_state");}j.append(m);}return j;},selectLocation:function(f){if(locator.debug){console.log("selectLocation ",f);}this.confirmLocationChange(f,function(g){var h=g.location;if(locator.debug){console.log("Confirm change: ",h.id,h.name);}locator.setSharedLocationId(h.toString(),{_beforeEvent:function(){if(h._wids&&h._wids.length){locator._setDataSet("WID",h._wids.join("~"));}}});},function(g){var h=g.location;if(locator.debug){console.log("Request failed, should go back?");}},{disambiguated:true});},on:function(f,g){b.events.addListener(this,f,g);}};window.locator.transition=function(h,j,g,i){var i=i||{},k=i.duration||0.3,f=i.tween||b.tweens.easeOut();if(locator.debug){console.log("transition: ",h,j,g,k,f);}h.empty();switch(g){case"slideDown":h.css("height","0px").css("overflow","hidden");break;case"slideUp":h.css("overflow","hidden");break;case"fadeIn":h.css("opacity",0);break;case"fadeOut":break;}h.append(j);b.anim[g](h,k,{tween:f});};window.locator.initAutoSuggest=function(q){var q=q||{},h=q.inputSelector||".locator-auto-suggest",g=b.dom.get(h),z=q.submitSelector||".locator-search",t=b.dom.get(z),u=q.formSelector||".locator-form",n=b.dom.get(u),m=q.msgSelector||".locator-msg",r=b.dom.get(m),p=q.parentSelector,l=p?b.dom.get(p):null,k=q.defaultSelectedEvent!=undefined?q.defaultSelectedEvent:true,x,o;function A(i){var B=i.locationId;if(B){if(l&&!l.hasClass("locator-location-set")){l.addClass("locator-location-set");}}else{if(l&&l.hasClass("locator-location-set")){l.removeClass("locator-location-set");}}}locator.on("locationChanged",A);A({locationId:locator.getSharedLocationId()});o=new locator.ui.Search(r,q);var w=0,y=c.length,v=g,s;for(;w<y;w++){s=c[w];if(s.eq(v)){return;}}if(g.length===0||t.length===0||n.length===0){return;}x=new locator.ui.AutoSuggest(g,q);c.push(x.inputElement);var f=b.events.addListener(x.inputElement,"click",function(i){b.dom.get(this).val("");b.events.removeListener(f);});if(k){locator.on("autoSuggestSelected",function(i){x.hide();var B=i.item,D=(B.hasForecastPage&&B.forecastLoc&&B.context!==""),C=B.name;if(D){locator.getInfoFor(B.forecastLoc,B.name,!B.isForecastLoc,function(E){o.invokeLocationChangeFromSingleResult(E);});}else{if(B.context===""){o.search(C);}else{o.search(C,{searchType:"county_state"});}}});}var j=g.val();o.on("noResults",function(i){x.displayNoResultsMessage();});if(k){b.events.addListener(n,"submit",function(i){var B=g.val();i.preventDefault();if(j!==B){o.search(B);}return false;});}return x;};var d;locator.ui.Paginator=function(i,g,h,f){this.parent=i;this.locale=b.i18n.getLocaleModule(locator.locales.ui);this.startIndex=0;this.endIndex=h;this.currentPage=1;this.itemsPerPage=h;this.totalItems=parseInt(f);this.totalPages=Math.ceil(this.totalItems/this.endIndex);this.maxPagesToShow=5;this.maxPagesToShowHigher=10;this.numResultsPageToTriggerHigherPagination=10;this.pageMoreChar="&hellip;";this.pageJoinChar="|";this.container=b.dom.get(g);var j='<div class="locator-controls"><a href="#locator-previous" class="locator-control-prev disabled"><span class="locator-pagination-prev"></span>{pagination.previous}</a><div class="locator-pages"></div><a href="#locator-next" class="locator-control-next disabled">{pagination.next}<span class="locator-pagination-next"></span></a></div>';this.controls=b.dom.create(j,{interpolate:this.locale});this.container.append(this.controls);this.updatePrevNextLinks();this.attachEventListeners();if(locator.debug){console.log("Paging init: perPage %o, total %o, pages %o",this.itemsPerPage,this.totalItems,this.totalItems/this.endIndex);}};locator.ui.Paginator.prototype={createPageListHtml:function(){var j="<li>"+this.pageMoreChar+"</li>",q=this.maxPagesToShow,g,o,m,l,n,p;if(this.totalPages>=this.numResultsPageToTriggerHigherPagination){q=this.maxPagesToShowHigher;}g=Math.ceil(q/2);if(this.currentPage<=g||this.totalPages<=q){o=1;l=q;}else{o=this.currentPage-g+1;l=this.currentPage-g+q;}if(l>this.totalPages){l=this.totalPages;}if(locator.debug){console.log("Generating page list: currentPage: %o, currentPageOffset: %o, totalPages: %o, pageStart: %o, pageEnd: %o",this.currentPage,g,this.totalPages,o,l);}n=(o>1)?true:false;p=(l<this.totalPages)?true:false;var f="<ol>";if(n){f+=j;}for(var h=o,k=l;h<=k;h++){f+="<li"+(h==1?' class="first"':"")+'><a href="#locator-page'+h+'"'+(h==this.currentPage?' class="selected" ':"")+">"+h+"</a></li>";}if(p){f+=j;}f+="</ol>";return f;},attachEventListeners:function(){var f=this;b.events.addListener(this.controls.get(".locator-control-prev"),"click",function(g){if(locator.debug){console.log("click prev");}var h=b.dom.get(this);if(f.startIndex!=0){if(locator.debug){console.log("prev is ok");}f.parent.fetchResultSetAndUpdateResultsList(f.startIndex-f.itemsPerPage,f.endIndex-f.itemsPerPage,function(){f.startIndex-=f.itemsPerPage;f.endIndex-=f.itemsPerPage;f.currentPage--;f.updatePrevNextLinks();});}g.preventDefault();});b.events.addListener(this.controls.get(".locator-control-next"),"click",function(g){if(locator.debug){console.log("click next");}if(f.currentPage<f.totalPages){if(locator.debug){console.log("proceed to next");}f.parent.fetchResultSetAndUpdateResultsList(f.startIndex+f.itemsPerPage,f.endIndex+f.itemsPerPage,function(){f.startIndex+=f.itemsPerPage;f.endIndex+=f.itemsPerPage;f.currentPage++;f.updatePrevNextLinks();});}g.preventDefault();});b.events.addListener(this.controls.get(".locator-pages"),"click",function(h){var i=parseInt(b.dom.get(h.source).text());if(locator.debug){console.log("clicked page %o (type: %o)",i,typeof i);}if(typeof i=="number"&&!window.isNaN(i)&&f.currentPage!=i){var j=f.itemsPerPage*(i-1),g=(f.itemsPerPage*i)+f.itemsPerPage;f.parent.fetchResultSetAndUpdateResultsList(j,g,function(){f.startIndex=j;f.endIndex=g;f.currentPage=i;f.updatePrevNextLinks();});}h.preventDefault();});},updatePrevNextLinks:function(){var f=this.currentPage;if(this.currentPage>1){this.controls.get(".locator-control-prev").removeClass("disabled");}else{this.controls.get(".locator-control-prev").addClass("disabled");}if(this.currentPage<this.totalPages){this.controls.get(".locator-control-next").removeClass("disabled");}else{this.controls.get(".locator-control-next").addClass("disabled");}this.controls.get(".locator-pages").empty().append(this.createPageListHtml());},next:function(){if(locator.debug){console.log("next");}},previous:function(){if(locator.debug){console.log("prev");}}};window.locator.initSavedLocationDisplay=function(f){var f=f||".locator-saved-location",h=b.dom.get(f);if(h.length==0){return;}function g(i){var j=i.locationId;if(j){locDetails=locator.fetchFromDataSet(j,function(l){var k=(l&&l.name)?l.name:"Not Set";h.text(k);},"wcw");}else{h.text("Not set");}}locator.on("locationChanged",g);g({locationId:locator.getSharedLocationId()});};window.locator.clearLocation=function(k){var k=k||".locator-msg",f=b.dom.get(k);if(f.length==0){return;}var i;locator.fetchFromDataSet(locator.getSharedLocationId(),function(o){i=(o&&o.name)?o.name:"Not Set";},"wcw");var m=b.i18n.getLocaleModule(locator.locales.ui);var n=b.lang.interpolate(m.confirmClear.body,{location:i});m=b.lang.apply(m,{templWithLoc:n});var h=b.dom.create('<div class="locator-confirm"><p class="locator-panel-header"><strong>{confirmClear.title}</strong></p><div>{templWithLoc}</div></div>',{interpolate:m});var l=b.dom.create('<button type="submit">{confirmClear.confirm}</button>',{interpolate:m});var g=b.dom.create('<button type="submit">{confirmClear.cancel}</button>',{interpolate:m});h.append(g).append(l);var j=f.children();b.events.fire(locator,locator.EVENTS.userShownClearLocation);locator.transition(f,h.children(),"slideDown");b.events.addListener(l,"click",function(o){if(locator.debug){console.log("Confirm clear location");}b.events.fire(locator,locator.EVENTS.userConfirmedLocationChange,o);locator.clearSharedLocation();if(!o.defaultPrevented()){f.empty();}});b.events.addListener(g,"click",function(o){if(locator.debug){console.log("Cancelled clear location");}b.events.fire(locator,locator.EVENTS.userCancelledClearLocation,o);if(!o.defaultPrevented()){f.empty();f.append(j);}});};}});})();