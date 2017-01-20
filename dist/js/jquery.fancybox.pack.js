!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var o=t||window.event,a=[].slice.call(arguments,1),r=0,s=0,l=0,c=0,c=0;t=e.event.fix(o),t.type="mousewheel",o.wheelDelta&&(r=o.wheelDelta),o.detail&&(r=-1*o.detail),o.deltaY&&(r=l=-1*o.deltaY),o.deltaX&&(s=o.deltaX,r=-1*s),void 0!==o.wheelDeltaY&&(l=o.wheelDeltaY),void 0!==o.wheelDeltaX&&(s=-1*o.wheelDeltaX),c=Math.abs(r),(!i||c<i)&&(i=c),c=Math.max(Math.abs(l),Math.abs(s)),(!n||c<n)&&(n=c),o=0<r?"floor":"ceil",r=Math[o](r/i),s=Math[o](s/n),l=Math[o](l/n);try{t.originalEvent.hasOwnProperty("wheelDelta")}catch(d){l=r}return a.unshift(t,r,s,l),(e.event.dispatch||e.event.handle).apply(this,a)}var i,n,o=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],a="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"];if(e.event.fixHooks)for(var r=o.length;r;)e.event.fixHooks[o[--r]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=a.length;e;)this.addEventListener(a[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=a.length;e;)this.removeEventListener(a[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}),function(e,t,i,n){"use strict";var o=i("html"),a=i(e),r=i(t),s=i.fancybox=function(){s.open.apply(this,arguments)},l=navigator.userAgent.match(/msie/i),c=null,d=t.createTouch!==n,h=function(e){return e&&e.hasOwnProperty&&e instanceof i},p=function(e){return e&&"string"===i.type(e)},u=function(e){return p(e)&&e.indexOf("%")>0},f=function(e){return e&&!(e.style.overflow&&"hidden"===e.style.overflow)&&(e.clientWidth&&e.scrollWidth>e.clientWidth||e.clientHeight&&e.scrollHeight>e.clientHeight)},g=function(e,t){var i=parseInt(e,10)||0;return t&&u(e)&&(i=s.getViewport()[t]/100*i),Math.ceil(i)},m=function(e,t){return g(e,t)+"px"};i.extend(s,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!d,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(l?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeChange:i.noop,beforeClose:i.noop,afterClose:i.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){if(e&&(i.isPlainObject(t)||(t={}),!1!==s.close(!0)))return i.isArray(e)||(e=h(e)?i(e).get():[e]),i.each(e,function(o,a){var r,l,c,d,u,f,g,m={};"object"===i.type(a)&&(a.nodeType&&(a=i(a)),h(a)?(m={href:a.data("fancybox-href")||a.attr("href"),title:a.data("fancybox-title")||a.attr("title"),isDom:!0,element:a},i.metadata&&i.extend(!0,m,a.metadata())):m=a),r=t.href||m.href||(p(a)?a:null),l=t.title!==n?t.title:m.title||"",c=t.content||m.content,d=c?"html":t.type||m.type,!d&&m.isDom&&(d=a.data("fancybox-type"),d||(u=a.prop("class").match(/fancybox\.(\w+)/),d=u?u[1]:null)),p(r)&&(d||(s.isImage(r)?d="image":s.isSWF(r)?d="swf":"#"===r.charAt(0)?d="inline":p(a)&&(d="html",c=a)),"ajax"===d&&(f=r.split(/\s+/,2),r=f.shift(),g=f.shift())),c||("inline"===d?r?c=i(p(r)?r.replace(/.*(?=#[^\s]+$)/,""):r):m.isDom&&(c=a):"html"===d?c=r:d||r||!m.isDom||(d="inline",c=a)),i.extend(m,{href:r,type:d,content:c,title:l,selector:g}),e[o]=m}),s.opts=i.extend(!0,{},s.defaults,t),t.keys!==n&&(s.opts.keys=!!t.keys&&i.extend({},s.defaults.keys,t.keys)),s.group=e,s._start(s.opts.index)},cancel:function(){var e=s.coming;e&&!1!==s.trigger("onCancel")&&(s.hideLoading(),s.ajaxLoad&&s.ajaxLoad.abort(),s.ajaxLoad=null,s.imgPreload&&(s.imgPreload.onload=s.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0,!0).trigger("onReset").remove(),s.coming=null,s.current||s._afterZoomOut(e))},close:function(e){s.cancel(),!1!==s.trigger("beforeClose")&&(s.unbindEvents(),s.isActive&&(s.isOpen&&e!==!0?(s.isOpen=s.isOpened=!1,s.isClosing=!0,i(".fancybox-item, .fancybox-nav").remove(),s.wrap.stop(!0,!0).removeClass("fancybox-opened"),s.transitions[s.current.closeMethod]()):(i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),s._afterZoomOut())))},play:function(e){var t=function(){clearTimeout(s.player.timer)},i=function(){t(),s.current&&s.player.isActive&&(s.player.timer=setTimeout(s.next,s.current.playSpeed))},n=function(){t(),r.unbind(".player"),s.player.isActive=!1,s.trigger("onPlayEnd")},o=function(){s.current&&(s.current.loop||s.current.index<s.group.length-1)&&(s.player.isActive=!0,r.bind({"onCancel.player beforeClose.player":n,"onUpdate.player":i,"beforeLoad.player":t}),i(),s.trigger("onPlayStart"))};e===!0||!s.player.isActive&&e!==!1?o():n()},next:function(e){var t=s.current;t&&(p(e)||(e=t.direction.next),s.jumpto(t.index+1,e,"next"))},prev:function(e){var t=s.current;t&&(p(e)||(e=t.direction.prev),s.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,i){var o=s.current;o&&(e=g(e),s.direction=t||o.direction[e>=o.index?"next":"prev"],s.router=i||"jumpto",o.loop&&(e<0&&(e=o.group.length+e%o.group.length),e%=o.group.length),o.group[e]!==n&&(s.cancel(),s._start(e)))},reposition:function(e,t){var n,o=s.current,a=o?o.wrap:null;a&&(n=s._getPosition(t),e&&"scroll"===e.type?(delete n.position,a.stop(!0,!0).animate(n,200)):(a.css(n),o.pos=i.extend({},o.dim,n)))},update:function(e){var t=e&&e.type,i=!t||"orientationchange"===t;i&&(clearTimeout(c),c=null),s.isOpen&&!c&&(c=setTimeout(function(){var n=s.current;n&&!s.isClosing&&(s.wrap.removeClass("fancybox-tmp"),(i||"load"===t||"resize"===t&&n.autoResize)&&s._setDimension(),"scroll"===t&&n.canShrink||s.reposition(e),s.trigger("onUpdate"),c=null)},i&&!d?0:300))},toggle:function(e){s.isOpen&&(s.current.fitToView="boolean"===i.type(e)?e:!s.current.fitToView,d&&(s.wrap.removeAttr("style").addClass("fancybox-tmp"),s.trigger("onUpdate")),s.update())},hideLoading:function(){r.unbind(".loading"),i("#fancybox-loading").remove()},showLoading:function(){var e,t;s.hideLoading(),e=i('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"),r.bind("keydown.loading",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),s.cancel())}),s.defaults.fixed||(t=s.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))},getViewport:function(){var t=s.current&&s.current.locked||!1,i={x:a.scrollLeft(),y:a.scrollTop()};return t?(i.w=t[0].clientWidth,i.h=t[0].clientHeight):(i.w=d&&e.innerWidth?e.innerWidth:a.width(),i.h=d&&e.innerHeight?e.innerHeight:a.height()),i},unbindEvents:function(){s.wrap&&h(s.wrap)&&s.wrap.unbind(".fb"),r.unbind(".fb"),a.unbind(".fb")},bindEvents:function(){var e,t=s.current;t&&(a.bind("orientationchange.fb"+(d?"":" resize.fb")+(t.autoCenter&&!t.locked?" scroll.fb":""),s.update),e=t.keys,e&&r.bind("keydown.fb",function(o){var a=o.which||o.keyCode,r=o.target||o.srcElement;return(27!==a||!s.coming)&&void(o.ctrlKey||o.altKey||o.shiftKey||o.metaKey||r&&(r.type||i(r).is("[contenteditable]"))||i.each(e,function(e,r){return t.group.length>1&&r[a]!==n?(s[e](r[a]),o.preventDefault(),!1):i.inArray(a,r)>-1?(s[e](),o.preventDefault(),!1):void 0}))}),i.fn.mousewheel&&t.mouseWheel&&s.wrap.bind("mousewheel.fb",function(e,n,o,a){for(var r=e.target||null,l=i(r),c=!1;l.length&&!(c||l.is(".fancybox-skin")||l.is(".fancybox-wrap"));)c=f(l[0]),l=i(l).parent();0===n||c||s.group.length>1&&!t.canShrink&&(a>0||o>0?s.prev(a>0?"down":"left"):(a<0||o<0)&&s.next(a<0?"up":"right"),e.preventDefault())}))},trigger:function(e,t){var n,o=t||s.coming||s.current;if(o){if(i.isFunction(o[e])&&(n=o[e].apply(o,Array.prototype.slice.call(arguments,1))),n===!1)return!1;o.helpers&&i.each(o.helpers,function(t,n){n&&s.helpers[t]&&i.isFunction(s.helpers[t][e])&&s.helpers[t][e](i.extend(!0,{},s.helpers[t].defaults,n),o)}),r.trigger(e)}},isImage:function(e){return p(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(e){return p(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,n,o,a,r,l={};if(e=g(e),t=s.group[e]||null,!t)return!1;if(l=i.extend(!0,{},s.opts,t),a=l.margin,r=l.padding,"number"===i.type(a)&&(l.margin=[a,a,a,a]),"number"===i.type(r)&&(l.padding=[r,r,r,r]),l.modal&&i.extend(!0,l,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),l.autoSize&&(l.autoWidth=l.autoHeight=!0),"auto"===l.width&&(l.autoWidth=!0),"auto"===l.height&&(l.autoHeight=!0),l.group=s.group,l.index=e,s.coming=l,!1===s.trigger("beforeLoad"))return void(s.coming=null);if(o=l.type,n=l.href,!o)return s.coming=null,!(!s.current||!s.router||"jumpto"===s.router)&&(s.current.index=e,s[s.router](s.direction));if(s.isActive=!0,"image"!==o&&"swf"!==o||(l.autoHeight=l.autoWidth=!1,l.scrolling="visible"),"image"===o&&(l.aspectRatio=!0),"iframe"===o&&d&&(l.scrolling="scroll"),l.wrap=i(l.tpl.wrap).addClass("fancybox-"+(d?"mobile":"desktop")+" fancybox-type-"+o+" fancybox-tmp "+l.wrapCSS).appendTo(l.parent||"body"),i.extend(l,{skin:i(".fancybox-skin",l.wrap),outer:i(".fancybox-outer",l.wrap),inner:i(".fancybox-inner",l.wrap)}),i.each(["Top","Right","Bottom","Left"],function(e,t){l.skin.css("padding"+t,m(l.padding[e]))}),s.trigger("onReady"),"inline"===o||"html"===o){if(!l.content||!l.content.length)return s._error("content")}else if(!n)return s._error("href");"image"===o?s._loadImage():"ajax"===o?s._loadAjax():"iframe"===o?s._loadIframe():s._afterLoad()},_error:function(e){i.extend(s.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:s.coming.tpl.error}),s._afterLoad()},_loadImage:function(){var e=s.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,s.coming.width=this.width/s.opts.pixelRatio,s.coming.height=this.height/s.opts.pixelRatio,s._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,s._error("image")},e.src=s.coming.href,e.complete!==!0&&s.showLoading()},_loadAjax:function(){var e=s.coming;s.showLoading(),s.ajaxLoad=i.ajax(i.extend({},e.ajax,{url:e.href,error:function(e,t){s.coming&&"abort"!==t?s._error("ajax",e):s.hideLoading()},success:function(t,i){"success"===i&&(e.content=t,s._afterLoad())}}))},_loadIframe:function(){var e=s.coming,t=i(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",d?"auto":e.iframe.scrolling).attr("src",e.href);i(e.wrap).bind("onReset",function(){try{i(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(s.showLoading(),t.one("load",function(){i(this).data("ready",1),d||i(this).bind("load.fb",s.update),i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),s._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||s._afterLoad()},_preloadImages:function(){var e,t,i=s.group,n=s.current,o=i.length,a=n.preload?Math.min(n.preload,o-1):0;for(t=1;t<=a;t+=1)e=i[(n.index+t)%o],"image"===e.type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var e,t,n,o,a,r,l=s.coming,c=s.current,d="fancybox-placeholder";if(s.hideLoading(),l&&s.isActive!==!1){if(!1===s.trigger("afterLoad",l,c))return l.wrap.stop(!0).trigger("onReset").remove(),void(s.coming=null);switch(c&&(s.trigger("beforeChange",c),c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),s.unbindEvents(),e=l,t=l.content,n=l.type,o=l.scrolling,i.extend(s,{wrap:e.wrap,skin:e.skin,outer:e.outer,inner:e.inner,current:e,previous:c}),a=e.href,n){case"inline":case"ajax":case"html":e.selector?t=i("<div>").html(t).find(e.selector):h(t)&&(t.data(d)||t.data(d,i('<div class="'+d+'"></div>').insertAfter(t).hide()),t=t.show().detach(),e.wrap.bind("onReset",function(){i(this).find(t).length&&t.hide().replaceAll(t.data(d)).data(d,!1)}));break;case"image":t=e.tpl.image.replace("{href}",a);break;case"swf":t='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+a+'"></param>',r="",i.each(e.swf,function(e,i){t+='<param name="'+e+'" value="'+i+'"></param>',r+=" "+e+'="'+i+'"'}),t+='<embed src="'+a+'" type="application/x-shockwave-flash" width="100%" height="100%"'+r+"></embed></object>"}h(t)&&t.parent().is(e.inner)||e.inner.append(t),s.trigger("beforeShow"),e.inner.css("overflow","yes"===o?"scroll":"no"===o?"hidden":o),s._setDimension(),s.reposition(),s.isOpen=!1,s.coming=null,s.bindEvents(),s.isOpened?c.prevMethod&&s.transitions[c.prevMethod]():i(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(),s.transitions[s.isOpened?e.nextMethod:e.openMethod](),s._preloadImages()}},_setDimension:function(){var e,t,n,o,a,r,l,c,d,h,p,f,y,w,v,b=s.getViewport(),x=0,k=!1,C=!1,M=s.wrap,S=s.skin,O=s.inner,j=s.current,P=j.width,T=j.height,_=j.minWidth,L=j.minHeight,W=j.maxWidth,E=j.maxHeight,D=j.scrolling,H=j.scrollOutside?j.scrollbarWidth:0,R=j.margin,A=g(R[1]+R[3]),I=g(R[0]+R[2]);if(M.add(S).add(O).width("auto").height("auto").removeClass("fancybox-tmp"),e=g(S.outerWidth(!0)-S.width()),t=g(S.outerHeight(!0)-S.height()),n=A+e,o=I+t,a=u(P)?(b.w-n)*g(P)/100:P,r=u(T)?(b.h-o)*g(T)/100:T,"iframe"===j.type){if(w=j.content,j.autoHeight&&1===w.data("ready"))try{w[0].contentWindow.document.location&&(O.width(a).height(9999),v=w.contents().find("body"),H&&v.css("overflow-x","hidden"),r=v.outerHeight(!0))}catch(z){}}else(j.autoWidth||j.autoHeight)&&(O.addClass("fancybox-tmp"),j.autoWidth||O.width(a),j.autoHeight||O.height(r),j.autoWidth&&(a=O[0].scrollWidth),j.autoHeight&&(r=O[0].scrollHeight),O.removeClass("fancybox-tmp"));if(P=g(a),T=g(r),d=a/r,_=g(u(_)?g(_,"w")-n:_),W=g(u(W)?g(W,"w")-n:W),L=g(u(L)?g(L,"h")-o:L),E=g(u(E)?g(E,"h")-o:E),l=W,c=E,j.fitToView&&(W=Math.min(b.w-n,W),E=Math.min(b.h-o,E)),f=b.w-A,y=b.h-I,j.aspectRatio?(P>W&&(P=W,T=g(P/d)),T>E&&(T=E,P=g(T*d)),P<_&&(P=_,T=g(P/d)),T<L&&(T=L,P=g(T*d))):(P=Math.max(_,Math.min(P,W)),j.autoHeight&&"iframe"!==j.type&&(O.width(P),T=O[0].scrollHeight),T=Math.max(L,Math.min(T,E))),j.fitToView)if(O.width(P).height(T),M.width(P+e),h=M.width(),p=M.height(),j.aspectRatio)for(;(h>f||p>y)&&P>_&&T>L&&!(x++>19);)T=Math.max(L,Math.min(E,T-10)),P=g(T*d),P<_&&(P=_,T=g(P/d)),P>W&&(P=W,T=g(P/d)),O.width(P).height(T),M.width(P+e),h=M.width(),p=M.height();else P=Math.max(_,Math.min(P,P-(h-f))),T=Math.max(L,Math.min(T,T-(p-y)));H&&"auto"===D&&T<r&&P+e+H<f&&(P+=H),O.width(P).height(T),M.width(P+e),h=M.width(),p=M.height(),k=(h>f||p>y)&&P>_&&T>L,C=j.aspectRatio?P<l&&T<c&&P<a&&T<r:(P<l||T<c)&&(P<a||T<r),i.extend(j,{dim:{width:m(h),height:m(p)},origWidth:a,origHeight:r,canShrink:k,canExpand:C,wPadding:e,hPadding:t,wrapSpace:p-S.outerHeight(!0),skinSpace:S.height()-T}),!w&&j.autoHeight&&T>L&&T<E&&!C&&O.height("auto")},_getPosition:function(e){var t=s.current,i=s.getViewport(),n=t.margin,o=s.wrap.width()+n[1]+n[3],a=(s.wrap[0].offsetHeight>50?s.wrap[0].offsetHeight:475)+n[0]+n[2],r={position:"absolute",top:n[0],left:n[3]};return t.autoCenter&&t.fixed&&!e&&a<=i.h&&o<=i.w?r.position="fixed":t.locked||(r.top+=i.y,r.left+=i.x),r.top=m(Math.max(r.top,r.top+(i.h-a)*t.topRatio)),r.left=m(Math.max(r.left,r.left+(i.w-o)*t.leftRatio)),r},_afterZoomIn:function(){var e=s.current;e&&(s.isOpen=s.isOpened=!0,s.wrap.css("overflow","visible").addClass("fancybox-opened"),s.update(),(e.closeClick||e.nextClick&&s.group.length>1)&&s.inner.css("cursor","pointer").bind("click.fb",function(t){i(t.target).is("a")||i(t.target).parent().is("a")||(t.preventDefault(),s[e.closeClick?"close":"next"]())}),e.closeBtn&&i(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb",function(e){e.preventDefault(),s.close()}),e.arrows&&s.group.length>1&&((e.loop||e.index>0)&&i(e.tpl.prev).appendTo(s.outer).bind("click.fb",s.prev),(e.loop||e.index<s.group.length-1)&&i(e.tpl.next).appendTo(s.outer).bind("click.fb",s.next)),s.trigger("afterShow"),e.loop||e.index!==e.group.length-1?s.opts.autoPlay&&!s.player.isActive&&(s.opts.autoPlay=!1,s.play()):s.play(!1))},_afterZoomOut:function(e){e=e||s.current,i(".fancybox-wrap").trigger("onReset").remove(),i.extend(s,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),s.trigger("afterClose",e)}}),s.transitions={getOrigPosition:function(){var e=s.current,t=e.element,i=e.orig,n={},o=50,a=50,r=e.hPadding,l=e.wPadding,c=s.getViewport();return!i&&e.isDom&&t.is(":visible")&&(i=t.find("img:first"),i.length||(i=t)),h(i)?(n=i.offset(),i.is("img")&&(o=i.outerWidth(),a=i.outerHeight())):(n.top=c.y+(c.h-a)*e.topRatio,n.left=c.x+(c.w-o)*e.leftRatio),("fixed"===s.wrap.css("position")||e.locked)&&(n.top-=c.y,n.left-=c.x),n={top:m(n.top-r*e.topRatio),left:m(n.left-l*e.leftRatio),width:m(o+l),height:m(a+r)}},step:function(e,t){var i,n,o,a=t.prop,r=s.current,l=r.wrapSpace,c=r.skinSpace;"width"!==a&&"height"!==a||(i=t.end===t.start?1:(e-t.start)/(t.end-t.start),s.isClosing&&(i=1-i),n="width"===a?r.wPadding:r.hPadding,o=e-n,s.skin[a](g("width"===a?o:o-l*i)),s.inner[a](g("width"===a?o:o-l*i-c*i)))},zoomIn:function(){var e=s.current,t=e.pos,n=e.openEffect,o="elastic"===n,a=i.extend({opacity:1},t);delete a.position,o?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===n&&(t.opacity=.1),s.wrap.css(t).animate(a,{duration:"none"===n?0:e.openSpeed,easing:e.openEasing,step:o?this.step:null,complete:s._afterZoomIn})},zoomOut:function(){var e=s.current,t=e.closeEffect,i="elastic"===t,n={opacity:.1};i&&(n=this.getOrigPosition(),e.closeOpacity&&(n.opacity=.1)),s.wrap.animate(n,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:i?this.step:null,complete:s._afterZoomOut})},changeIn:function(){var e,t=s.current,i=t.nextEffect,n=t.pos,o={opacity:1},a=s.direction,r=200;n.opacity=.1,"elastic"===i&&(e="down"===a||"up"===a?"top":"left","down"===a||"right"===a?(n[e]=m(g(n[e])-r),o[e]="+="+r+"px"):(n[e]=m(g(n[e])+r),o[e]="-="+r+"px")),"none"===i?s._afterZoomIn():s.wrap.css(n).animate(o,{duration:t.nextSpeed,easing:t.nextEasing,complete:s._afterZoomIn})},changeOut:function(){var e=s.previous,t=e.prevEffect,n={opacity:.1},o=s.direction,a=200;"elastic"===t&&(n["down"===o||"up"===o?"top":"left"]=("up"===o||"left"===o?"-":"+")+"="+a+"px"),e.wrap.animate(n,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){i(this).trigger("onReset").remove()}})}},s.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!d,fixed:!0},overlay:null,fixed:!1,el:i("html"),create:function(e){e=i.extend({},this.defaults,e),this.overlay&&this.close(),this.overlay=i('<div class="fancybox-overlay"></div>').appendTo(s.coming?s.coming.parent:e.parent),this.fixed=!1,e.fixed&&s.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(e){var t=this;e=i.extend({},this.defaults,e),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(e),this.fixed||(a.bind("resize.overlay",i.proxy(this.update,this)),this.update()),e.closeClick&&this.overlay.bind("click.overlay",function(e){if(i(e.target).hasClass("fancybox-overlay"))return s.isActive?s.close():t.close(),!1}),this.overlay.css(e.css).show()},close:function(){var e,t;a.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(i(".fancybox-margin").removeClass("fancybox-margin"),e=a.scrollTop(),t=a.scrollLeft(),this.el.removeClass("fancybox-lock"),a.scrollTop(e).scrollLeft(t)),i(".fancybox-overlay").remove().hide(),i.extend(this,{overlay:null,fixed:!1})},update:function(){var e,i="100%";this.overlay.width(i).height("100%"),l?(e=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),r.width()>e&&(i=r.width())):r.width()>a.width()&&(i=r.width()),this.overlay.width(i).height(r.height())},onReady:function(e,t){var n=this.overlay;i(".fancybox-overlay").stop(!0,!0),n||this.create(e),e.locked&&this.fixed&&t.fixed&&(n||(this.margin=r.height()>a.height()&&i("html").css("margin-right").replace("px","")),t.locked=this.overlay.append(t.wrap),t.fixed=!1),e.showEarly===!0&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){var n,o;t.locked&&(this.margin!==!1&&(i("*").filter(function(){return"fixed"===i(this).css("position")&&!i(this).hasClass("fancybox-overlay")&&!i(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),n=a.scrollTop(),o=a.scrollLeft(),this.el.addClass("fancybox-lock"),a.scrollTop(n).scrollLeft(o)),this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(e){this.overlay&&!s.coming&&this.overlay.fadeOut(e.speedOut,i.proxy(this.close,this))}},s.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t,n,o=s.current,a=o.title,r=e.type;if(i.isFunction(a)&&(a=a.call(o.element,o)),p(a)&&""!==i.trim(a)){switch(t=i('<div class="fancybox-title fancybox-title-'+r+'-wrap">'+a+"</div>"),r){case"inside":n=s.skin;break;case"outside":n=s.wrap;break;case"over":n=s.inner;break;default:n=s.skin,t.appendTo("body"),l&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),s.current.margin[2]+=Math.abs(g(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](n)}}},i.fn.fancybox=function(e){var t,n=i(this),o=this.selector||"",a=function(a){var r,l,c=i(this).blur(),d=t;a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||c.is(".fancybox-wrap")||(r=e.groupAttr||"data-fancybox-group",l=c.attr(r),l||(r="rel",l=c.get(0)[r]),l&&""!==l&&"nofollow"!==l&&(c=o.length?i(o):n,c=c.filter("["+r+'="'+l+'"]'),d=c.index(this)),e.index=d,s.open(c,e)!==!1&&a.preventDefault())};return e=e||{},t=e.index||0,o&&e.live!==!1?r.undelegate(o,"click.fb-start").delegate(o+":not('.fancybox-item, .fancybox-nav')","click.fb-start",a):n.unbind("click.fb-start").bind("click.fb-start",a),this.filter("[data-fancybox-start=1]").trigger("click"),this},r.ready(function(){var t,a;i.scrollbarWidth===n&&(i.scrollbarWidth=function(){var e=i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),n=t.innerWidth()-t.height(99).innerWidth();return e.remove(),n}),i.support.fixedPosition===n&&(i.support.fixedPosition=function(){var e=i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),t=20===e[0].offsetTop||15===e[0].offsetTop;return e.remove(),t}()),i.extend(s.defaults,{scrollbarWidth:i.scrollbarWidth(),fixed:i.support.fixedPosition,parent:i("body")}),t=i(e).width(),o.addClass("fancybox-lock-test"),a=i(e).width(),o.removeClass("fancybox-lock-test")})}(window,document,jQuery),function(e){var t=e.fancybox;t.helpers.buttons={defaults:{skipSingle:!1,position:"top",tpl:'<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>'},list:null,buttons:null,beforeLoad:function(e,t){return e.skipSingle&&t.group.length<2?(t.helpers.buttons=!1,void(t.closeBtn=!0)):void(t.margin["bottom"===e.position?2:0]+=30)},onPlayStart:function(){this.buttons&&this.buttons.play.attr("title","Pause slideshow").addClass("btnPlayOn")},onPlayEnd:function(){this.buttons&&this.buttons.play.attr("title","Start slideshow").removeClass("btnPlayOn")},afterShow:function(i,n){var o=this.buttons;o||(this.list=e(i.tpl).addClass(i.position).appendTo("body"),o={prev:this.list.find(".btnPrev").click(t.prev),next:this.list.find(".btnNext").click(t.next),play:this.list.find(".btnPlay").click(t.play),toggle:this.list.find(".btnToggle").click(t.toggle),close:this.list.find(".btnClose").click(t.close)}),n.index>0||n.loop?o.prev.removeClass("btnDisabled"):o.prev.addClass("btnDisabled"),n.loop||n.index<n.group.length-1?(o.next.removeClass("btnDisabled"),o.play.removeClass("btnDisabled")):(o.next.addClass("btnDisabled"),o.play.addClass("btnDisabled")),this.buttons=o,this.onUpdate(i,n)},onUpdate:function(e,t){var i;this.buttons&&(i=this.buttons.toggle.removeClass("btnDisabled btnToggleOn"),t.canShrink?i.addClass("btnToggleOn"):t.canExpand||i.addClass("btnDisabled"))},beforeClose:function(){this.list&&this.list.remove(),this.list=null,this.buttons=null}}}(jQuery),function(e){var t=e.fancybox;t.helpers.thumbs={defaults:{width:50,height:50,position:"bottom",source:function(t){var i;return t.element&&(i=e(t.element).find("img").attr("src")),!i&&"image"===t.type&&t.href&&(i=t.href),i}},wrap:null,list:null,width:0,init:function(t,i){var n,o=this,a=t.width,r=t.height,s=t.source;n="";for(var l=0;l<i.group.length;l++)n+='<li><a style="width:'+a+"px;height:"+r+'px;" href="javascript:jQuery.fancybox.jumpto('+l+');"></a></li>';this.wrap=e('<div id="fancybox-thumbs"></div>').addClass(t.position).appendTo("body"),this.list=e("<ul>"+n+"</ul>").appendTo(this.wrap),e.each(i.group,function(t){var n=i.group[t],l=s(n);l&&e("<img />").on("load",function(){var i,n,s,l=this.width,c=this.height;o.list&&l&&c&&(i=l/a,n=c/r,s=o.list.children().eq(t).find("a"),i>=1&&n>=1&&(i>n?(l=Math.floor(l/n),c=r):(l=a,c=Math.floor(c/i))),e(this).css({width:l,height:c,top:Math.floor(r/2-c/2),left:Math.floor(a/2-l/2)}),s.width(a).height(r),e(this).hide().appendTo(s).fadeIn(300))}).attr("src",l).attr("title",n.title)}),this.width=this.list.children().eq(0).outerWidth(!0),this.list.width(this.width*(i.group.length+1)).css("left",Math.floor(.5*e(window).width()-(i.index*this.width+.5*this.width)))},beforeLoad:function(e,t){return t.group.length<2?void(t.helpers.thumbs=!1):void(t.margin["top"===e.position?0:2]+=e.height+15)},afterShow:function(e,t){this.list?this.onUpdate(e,t):this.init(e,t),this.list.children().removeClass("active").eq(t.index).addClass("active")},onUpdate:function(t,i){this.list&&this.list.stop(!0).animate({left:Math.floor(.5*e(window).width()-(i.index*this.width+.5*this.width))},150)},beforeClose:function(){this.wrap&&this.wrap.remove(),this.wrap=null,this.list=null,this.width=0}}}(jQuery),function(e){"use strict";var t=e.fancybox,i=function(t,i,n){return n=n||"","object"===e.type(n)&&(n=e.param(n,!0)),e.each(i,function(e,i){t=t.replace("$"+e,i||"")}),n.length&&(t+=(t.indexOf("?")>0?"&":"?")+n),t};t.helpers.media={defaults:{youtube:{matcher:/(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"opaque",enablejsapi:1,ps:"docs",controls:1},type:"iframe",url:"//www.youtube.com/embed/$3"},vimeo:{matcher:/(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},type:"iframe",url:"//player.vimeo.com/video/$1"},metacafe:{matcher:/metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,params:{autoPlay:"yes"},type:"swf",url:function(t,i,n){return n.swf.flashVars="playerVars="+e.param(i,!0),"//www.metacafe.com/fplayer/"+t[1]+"/.swf"}},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"swf",url:"//www.dailymotion.com/swf/video/$1"},twitvid:{matcher:/twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,params:{autoplay:0},type:"iframe",url:"//www.twitvid.com/embed.php?guid=$1"},twitpic:{matcher:/twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,type:"image",url:"//twitpic.com/show/full/$1/"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,type:"iframe",url:function(e){return"//maps.google."+e[1]+"/"+e[3]+e[4]+"&output="+(e[4].indexOf("layer=c")>0?"svembed":"embed")}}},beforeLoad:function(t,n){var o,a,r,s,l=n.href||"",c=!1;for(o in t)if(t.hasOwnProperty(o)&&(a=t[o],r=l.match(a.matcher))){c=a.type,s=e.extend(!0,{},a.params,n[o]||(e.isPlainObject(t[o])?t[o].params:null)),l="function"===e.type(a.url)?a.url.call(this,r,s,n):i(a.url,r,s);break}c&&(n.href=l,n.type=c,n.autoHeight=!1)}}}(jQuery);