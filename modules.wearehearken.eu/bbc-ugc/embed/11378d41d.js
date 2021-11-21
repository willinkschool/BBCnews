(function (g) {
  var id = 11378
  , au = "https://assets.wearehearken.eu/production/assets/embed/embed-init-6db7855c97f7e0cb99ec07bd99733b4bcd81d64f7384e8d1d2eb5380d309236b.js"
  , edata = {"id":11378,"embed_type":"prompt_embed","display_name":"Austria full lockdown 19/11/2021","custom_font_family":null,"social_title":"BBC-UGC","social_description":"","header_type":"header_none","ga_qsp":"animate_prompt=false\u0026anonymous_checkbox_text=Please+don%27t+publish+my+name\u0026character_limit=500\u0026collect_email=required\u0026display_name=Austria+full+lockdown+19%2F11%2F2021\u0026embed_type=prompt_embed\u0026form_email_label=Email+address\u0026form_name_label=Name\u0026input_label_placement=labels_inside\u0026no_character_limit=false\u0026opt_in_checkbox_enabled=false\u0026opt_in_checkbox_name=Sign+me+up+for+BBC+News+Daily\u0026opt_in_default=false\u0026prompt=Do+you+live+in+Europe%3F+What+are+your+experiences+with+coronavirus+and+vaccination%3F\u0026show_anonymous_checkbox=false\u0026submit_button_text=Submit","appearance":{"link_text_color":"#3B94FF","background_color":"#efefef","submit_button_color":"#007f7f","submit_button_text_color":"#FFFFFF","accent_color":"#3B94FF","font_family":"Arial","font_size":14,"question_background_color":"#ffffff","header_text_color":"#ffffff","primary_text_color":"#425568","secondary_text_color":"#79899A","input_text_color":"#425568","header_image":null,"header_image_alt_text":"","footer_image":null,"footer_image_alt_text":"","footer_image_link":null,"footer_image_orientation":"below","voting_highlight_color":"#3B94FF","bar_graph_background_color":"#C9C9C9","header_font_size":14,"button_width":"full_width","input_group_orientation":"horizontal"},"translations":{"age_over_16_confirmed":"I am over 16 years old","terms_of_service_accepted":"I accept the \u003ca href=\"%{terms_of_service_link}\" target=_blank\u003eTerms of Service\u003c/a\u003e","terms_of_service":"Terms of Service","privacy_policy":"Privacy Policy","urls":{"footer_terms_of_service_link":"https://wearehearken.eu/terms-of-services/","embed_terms_of_service_link":"https://wearehearken.eu/terms-of-services/","privacy_policy_link":"https://wearehearken.eu/privacy-policies/"}},"content":{"header_text":"","footer_text":"In some cases a selection of your comments and questions will be published, displaying your name and location as you provide it unless you state otherwise. Your contact details will never be published. \n\nAt no time should you endanger yourself or others, take any unnecessary risks or infringe any laws.\n\nThe BBC retains the right to select from these contributions based on editorial requirements and subject to \u003ca href=\"http://www.bbc.co.uk/terms/\" target=\"_new\"\u003eonline terms and conditions\u003c/a\u003e and \u003ca href=\"http://www.bbc.co.uk/editorialguidelines/\" target=\"_new\"\u003e BBC editorial guidelines\u003c/a\u003e. For more information about how the BBC handles your personal data, \u003ca href=\"http://www.bbc.co.uk/news/help-42166998\" target=\"_new\"\u003e see here\u003c/a\u003e.","badge_text":"Made with Hearken","badge_link":null,"form_name_label":"Name","form_email_label":"Email address","optional_label":"optional","prompt":"Do you live in Europe? What are your experiences with coronavirus and vaccination?","anonymous_checkbox_text":"Please don't publish my name","show_anonymous_checkbox":false,"submit_button_text":"Submit","contact_info_section_header":"Your contact info","contact_info_section_subheader":"","submission_thank_you_text":"Hey %{name}, thanks for getting in touch.\n\nIf we're able to investigate your story or question further, we'll email you at %{email}.\n\nFeel free to encourage your friends to get in touch too!","collect_email":"required","show_social_buttons":true,"share_text":"","share_link":"","no_character_limit":false,"character_limit":500,"opt_in_checkbox":{"name":"Sign me up for BBC News Daily","enabled":false},"opt_in_checkbox_enabled":false,"opt_in_checkbox_name":"Sign me up for BBC News Daily","opt_in_default":false,"lists_to_auto_assign_to":[14072],"opt_in_lists_to_auto_assign_to":[89],"animate_prompt":false,"input_label_placement":"labels_inside","custom_field_definitions":[{"name":"Contact number","required":false,"configuration":null,"default":"","type":"text"},{"name":"Location ","required":false,"configuration":null,"default":"","type":"text"},{"name":"Age","required":false,"configuration":null,"default":"","type":"text"}],"age_confirmation_enabled":false}}
  , gapid = ""
  , egapid = ""
  , acctSlug = "bbc"
  , orgSlug = "bbc-ugc"
  , apiUrls = {"questionSubmit":"https://modules.wearehearken.eu/bbc-ugc/api/questions.js","createVote":"https://modules.wearehearken.eu/bbc-ugc/api/votes","votingRoundResults":"https://modules.wearehearken.eu/bbc-ugc/api/voting_rounds/:voting_round_id/results","datasetUriTemplate":"https://modules.wearehearken.eu/bbc-ugc/api/embed_datasets/:embed_dataset_id/results/:key"}
  , gaSr = 100;
  !function(e,n,t,o,a,r,i,c,d,u){var s=e.Hearken=e.Hearken||{configurations:{},gaProperties:{},elmEmbedded:!1,Elm:null},l,g="data-hkn-embed-initialized",m="data-hkn-embed-id",f="script:not(["+g+"]):not(["+"data-hkn-plchldr"+"])",p="["+m+"]",h=function(){return Math.floor(65536*(1+Math.random())).toString(16)},w="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;s.configurations[""+n]=s.configurations[""+n]||{id:n,data:o,gaPropertyId:a,modernEmbedGAPropertyId:r,containerId:"hearken-embed-module-"+n+"-"+h(),accountSlug:i,orgSlug:c,currentTime:(new Date).getTime(),randomSeed:2147483648*Math.random(),apiUrls:d,locationHref:window.document.location.href,documentReferrer:window.document.referrer,isTouchInterface:w};var v=encodeURIComponent,b=function(e){return e&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+v(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},k=function(e,n){return document.cookie=v(e)+"="+v(n)+"; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/",!0},E=function(e){return/^[0-9]+$/.test(e)?+e:0},S=function(e){var n,t,o=e.votingRoundId+":"+e.questionId,a=b("hkn_votes_list");return k("hkn_votes_list",a?a+";"+o:o)},I=function(){for(var e=(""+b("hkn_votes_list")||"").split(";"),n=[],t=0;t<e.length;t++){var o=e[t].split(":");n[t]=[E(o[0]),E(o[1])]}return n},y=function(){var e,n,t,o,a,r,i;return window.ga||(e=window,n=document,t="script",o="//www.google-analytics.com/analytics.js",a="ga",e.GoogleAnalyticsObject=a,e[a]=e[a]||function(){(e[a].q=e[a].q||[]).push(arguments)},e[a].l=1*new Date,r=n.createElement(t),i=n.getElementsByTagName(t)[0],r.async=1,r.src=o,i.parentNode.insertBefore(r,i)),!0},H=function(e){return"hkn_embed_"+e},T=function(e,n,t){if(y(),!s.gaProperties[e]){var o=H(e);window.ga("create",r,"auto",{name:o}),window.ga(o+".set","dimension1",n),window.ga(o+".set","dimension2",""+e),window.ga(o+".set","dimension3",""+t),s.gaProperties[e]=!0}},P=function(t,o,a){var i;if(!a.getAttribute(g)){var d=e.Hearken.configurations[o];if(d){a.setAttribute(g,"true");var u=e.document.createElement("div");u.id=d.containerId,d.existingVotes=I(),a.parentNode.replaceChild(u,a),u.addEventListener("click",function(e){e.stopPropagation()});var s,l=!a.hasAttribute("nocookies"),m=l,f=n,p=c,h=d.data&&d.data.gaQsp||"",w=function(e){f=e.embedId,p=e.organizationSlug,appContextAccountSlug=e.accountSlug,h=e.gaQsp},v=function(e){if(m&&r&&e){T(f,p,appContextAccountSlug);var n=H(f),t=h?e+"?"+h:e;window.ga(n+".send","pageview",t)}},b=function(e){var n=e.category,t=e.action,o=e.label,a=e.value;if(m&&r&&n&&t&&o&&a){T(f,p,appContextAccountSlug);var i=H(f);window.ga(i+".send","event",n,t,o,a)}},k=t.EmbedMain.init({node:u,flags:d}),E=function(e){if(window.hearkenUserInfo){var n={name:window.hearkenUserInfo.name||"",email:window.hearkenUserInfo.email||""};k.ports.updateUserInfo.send(n)}else setTimeout(E,e,1.1*e)};E(100),e.Hearken.captchaSend=function(e){grecaptcha.ready(function(){grecaptcha.execute(e.clientKey,{action:"vote"}).then(function(n){k.ports.captchaCallback.send({votingRoundId:e.votingRoundId,questionId:e.questionId,token:n})})["catch"](function(e){console.error(e)})})},e.Hearken.subscribeToPort(k,"startContainerSizeNotification",e.Hearken.startContainerSizeNotifications(k)),e.Hearken.subscribeToPort(k,"changeAppContext",w),l&&(e.Hearken.subscribeToPort(k,"addVotingResult",S),m&&(e.Hearken.subscribeToPort(k,"sendGoogleAnalyticsEvent",e.Hearken.sendGoogleAnalyticsEvent),e.Hearken.subscribeToPort(k,"sendVirtualPageView",v),e.Hearken.subscribeToPort(k,"sendAnalyticsEvent",b)),e.Hearken.subscribeToPort(k,"initializeShareButtons",e.Hearken.initializeShareButtons),e.Hearken.subscribeToPort(k,"captchaSend",e.Hearken.captchaSend))}else setTimeout(function(){P(t,o,a)},100)}},A=function(n,t){for(var o=e.document.querySelectorAll(f),a,r=0;r<o.length;r++)(a=o[r]).src.indexOf("/embed/"+String(t)+".js")>-1&&P(n,t,a)},x=function(n,t){for(var o=e.document.querySelectorAll(p),a=0;a<o.length;a++)tag=o[a],t=tag.getAttribute(m),P(n,t,tag)},C=function(e,n){x(e,n),A(e,n)},R=function(n){if(n)for(moduleId in e.Hearken.configurations)C(n,moduleId)},U=function(e){if(s.elmEmbedded)return!0;for(var n=document.getElementsByTagName("script"),t=0;t<n.length;t++){var o;if(n[t].src===e)return!0}var a=document.createElement("script");return a.type="text/javascript",a.async=!0,a.src=e,a.onload=function(){R(window.Elm),s.Elm=s.Elm||window.Elm},document.body.appendChild(a),!0};s.elmEmbedded?R(s.Elm):s.elmEmbedded=U(t)}(g,id,au,edata,gapid,egapid,acctSlug,orgSlug,apiUrls,gaSr);
}(window));
