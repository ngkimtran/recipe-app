(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],[,,,function(e,t,a){e.exports={recipe:"recipe_recipe__W_Jj5",image:"recipe_image__3TAXv"}},,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),o=(a(12),a(2)),s=a.n(o),l=a(6),u=a(1),p=a(3),m=a.n(p),f=function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients;return c.a.createElement("div",{className:m.a.recipe},c.a.createElement("h1",null,t),c.a.createElement("p",null,a),c.a.createElement("ul",null,r.map((function(e){return c.a.createElement("li",null,e.text)}))),c.a.createElement("img",{className:m.a.image,src:n,alt:""}))},h=(a(14),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),p=o[0],m=o[1],h=Object(n.useState)("chicken"),b=Object(u.a)(h,2),d=b[0],v=b[1];Object(n.useEffect)((function(){g()}),[d]);var g=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("ff3f1db3","&app_key=").concat("8b7083a5b9911f4e1264e279e25ca001")).then((function(e){return e.json()})).then((function(e){return r(e.hits)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(p),m("")},className:"search-form"},c.a.createElement("input",{className:"search-bar",type:"text",value:p,onChange:function(e){m(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search")),c.a.createElement("div",{className:"recipes"},a.map((function(e){return c.a.createElement(f,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.6e7f71bf.chunk.js.map