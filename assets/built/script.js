$(function(n){var i=1,o=window.location.pathname,r=n(document),a=n(".post-feed"),d=300,s=!1,c=!1,l=window.scrollY,m=window.innerHeight,h=r.height();function u(){l=window.scrollY,e()}function p(){m=window.innerHeight,h=r.height(),e()}function e(){s||requestAnimationFrame(t),s=!0}function t(){var e,t;t=/(?:page\/)(\d)(?:\/)$/i,(e=(e=o).replace(/#(.*)$/g,"").replace("////g","/")).match(t)&&(i=parseInt(e.match(t)[1]),e=e.replace(t,"")),o=e,c||(l+m<=h-d?s=!1:i>=maxPages?(window.removeEventListener("scroll",u,{passive:!0}),window.removeEventListener("resize",p)):(c=!0,t=o+"page/"+(i+=1)+"/",n.get(t,function(e){e=document.createRange().createContextualFragment(e).querySelectorAll(".post");e.length&&[].forEach.call(e,function(e){a[0].appendChild(e)})}).fail(function(e){404===e.status&&(window.removeEventListener("scroll",u,{passive:!0}),window.removeEventListener("resize",p))}).always(function(){h=r.height(),s=c=!1})))}window.addEventListener("scroll",u,{passive:!0}),window.addEventListener("resize",p),t()}),function(r){"use strict";r.fn.fitVids=function(e){var t,n,o={customSelector:null,ignore:null};return document.getElementById("fit-vids-style")||(t=document.head||document.getElementsByTagName("head")[0],(n=document.createElement("div")).innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',t.appendChild(n.childNodes[1])),e&&r.extend(o,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"],i=(o.customSelector&&e.push(o.customSelector),".fitvidsignore"),e=(o.ignore&&(i=i+", "+o.ignore),r(this).find(e.join(",")));(e=(e=e.not("object object")).not(i)).each(function(){var e,t,n=r(this);0<n.parents(i).length||"embed"===this.tagName.toLowerCase()&&n.parent("object").length||n.parent(".fluid-width-video-wrapper").length||(n.css("height")||n.css("width")||!isNaN(n.attr("height"))&&!isNaN(n.attr("width"))||(n.attr("height",9),n.attr("width",16)),e=("object"===this.tagName.toLowerCase()||n.attr("height")&&!isNaN(parseInt(n.attr("height"),10))?parseInt(n.attr("height"),10):n.height())/(isNaN(parseInt(n.attr("width"),10))?n.width():parseInt(n.attr("width"),10)),n.attr("name")||(t="fitvid"+r.fn.fitVids._count,n.attr("name",t),r.fn.fitVids._count++),n.wrap('<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),n.removeAttr("height").removeAttr("width"))})})},r.fn.fitVids._count=0}(window.jQuery||window.Zepto);const tempArray=document.getElementsByClassName("post-card card-grey"),content1=(tempArray[0].classList.replace("card-grey","selected-card"),document.getElementById("0-post-content").innerText.substring(0,600).trim()+"..."),url1=document.getElementById("0-post-url").innerText;function doThis(e,t){const n=document.getElementsByClassName("post-card selected-card")[0],i=(n.classList.replace("selected-card","card-grey"),document.getElementById("home-postcard-"+e)),o=(i.classList.replace("card-grey","selected-card"),document.getElementById("home-post-content")),r=document.getElementById("home-post-more");o.classList.remove("animate__animated","animate__fadeInLeft");e=document.getElementById(e+"-post-content").innerText.substring(0,600).trim()+"...";o.classList.add("animate__animated","animate__fadeInLeft"),o.innerText=e,r.href=t}function scrollToLeft(){const e=document.getElementById("startups-cards");var t=e.scrollLeft,n=window.screen.width;e.scroll({left:t-.66*n})}function scrollToRight(){const e=document.getElementById("startups-cards");var t=e.scrollLeft,n=window.screen.width;e.scroll({left:t+.66*n})}setTimeout(()=>{document.getElementById("home-post-content").innerText=content1,document.getElementById("home-post-more").href=url1},500);