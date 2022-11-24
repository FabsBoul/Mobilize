class T{constructor(e){this.properties=e!=null?e:[]}get(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.value);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const r=this.get(e);if(r!==void 0){if(t!=="json"&&typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(t!=="json"&&typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}getType(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.type);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}}const x="https://unpkg.com/@workadventure/scripting-api-extra@1.4.4/dist";class J{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new T(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function O(n){const e=n?"#"+n.join():"";WA.nav.openCoWebSite(x+"/configuration.html"+e)}async function Q(n,e){const t=await WA.room.getTiledMap(),r=new Map;return $(t.layers,r,n,e),r}function $(n,e,t,r){for(const o of n)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(!!t&&o.name!==t||!!r&&!r.includes(s.name))continue;e.set(s.name,new J(s))}}else o.type==="group"&&$(o.layers,e,t,r)}let k;async function B(){return k===void 0&&(k=F()),k}async function F(){return ee(await WA.room.getTiledMap())}function ee(n){const e=new Map;return H(n.layers,"",e),e}function H(n,e,t){for(const r of n)r.type==="group"?H(r.layers,e+r.name+"/",t):(r.name=e+r.name,t.set(r.name,r))}function te(n){let e=1/0,t=1/0,r=0,o=0;const s=n.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<n.height;i++)for(let a=0;a<n.width;a++)s[a+i*n.width]!==0&&(e=Math.min(e,a),o=Math.max(o,a),t=Math.min(t,i),r=Math.max(r,i));return{top:t,left:e,right:o+1,bottom:r+1}}function Z(n){let e=1/0,t=1/0,r=0,o=0;for(const s of n){const i=te(s);i.left<e&&(e=i.left),i.top<t&&(t=i.top),i.right>o&&(o=i.right),i.bottom>r&&(r=i.bottom)}return{top:t,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var ne=Object.prototype.toString,W=Array.isArray||function(e){return ne.call(e)==="[object Array]"};function V(n){return typeof n=="function"}function re(n){return W(n)?"array":typeof n}function G(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function D(n,e){return n!=null&&typeof n=="object"&&e in n}function oe(n,e){return n!=null&&typeof n!="object"&&n.hasOwnProperty&&n.hasOwnProperty(e)}var se=RegExp.prototype.test;function ie(n,e){return se.call(n,e)}var ae=/\S/;function ue(n){return!ie(ae,n)}var ce={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function le(n){return String(n).replace(/[&<>"'`=\/]/g,function(t){return ce[t]})}var fe=/\s*/,pe=/\s+/,_=/\s*=/,ge=/\s*\}/,he=/#|\^|\/|>|\{|&|=|!/;function de(n,e){if(!n)return[];var t=!1,r=[],o=[],s=[],i=!1,a=!1,u="",l=0;function f(){if(i&&!a)for(;s.length;)delete o[s.pop()];else s=[];i=!1,a=!1}var d,m,M;function S(b){if(typeof b=="string"&&(b=b.split(pe,2)),!W(b)||b.length!==2)throw new Error("Invalid tags: "+b);d=new RegExp(G(b[0])+"\\s*"),m=new RegExp("\\s*"+G(b[1])),M=new RegExp("\\s*"+G("}"+b[1]))}S(e||h.tags);for(var c=new L(n),v,g,y,C,R,A;!c.eos();){if(v=c.pos,y=c.scanUntil(d),y)for(var P=0,z=y.length;P<z;++P)C=y.charAt(P),ue(C)?(s.push(o.length),u+=C):(a=!0,t=!0,u+=" "),o.push(["text",C,v,v+1]),v+=1,C===`
`&&(f(),u="",l=0,t=!1);if(!c.scan(d))break;if(i=!0,g=c.scan(he)||"name",c.scan(fe),g==="="?(y=c.scanUntil(_),c.scan(_),c.scanUntil(m)):g==="{"?(y=c.scanUntil(M),c.scan(ge),c.scanUntil(m),g="&"):y=c.scanUntil(m),!c.scan(m))throw new Error("Unclosed tag at "+c.pos);if(g==">"?R=[g,y,v,c.pos,u,l,t]:R=[g,y,v,c.pos],l++,o.push(R),g==="#"||g==="^")r.push(R);else if(g==="/"){if(A=r.pop(),!A)throw new Error('Unopened section "'+y+'" at '+v);if(A[1]!==y)throw new Error('Unclosed section "'+A[1]+'" at '+v)}else g==="name"||g==="{"||g==="&"?a=!0:g==="="&&S(y)}if(f(),A=r.pop(),A)throw new Error('Unclosed section "'+A[1]+'" at '+c.pos);return me(ye(o))}function ye(n){for(var e=[],t,r,o=0,s=n.length;o<s;++o)t=n[o],t&&(t[0]==="text"&&r&&r[0]==="text"?(r[1]+=t[1],r[3]=t[3]):(e.push(t),r=t));return e}function me(n){for(var e=[],t=e,r=[],o,s,i=0,a=n.length;i<a;++i)switch(o=n[i],o[0]){case"#":case"^":t.push(o),r.push(o),t=o[4]=[];break;case"/":s=r.pop(),s[5]=o[2],t=r.length>0?r[r.length-1][4]:e;break;default:t.push(o)}return e}function L(n){this.string=n,this.tail=n,this.pos=0}L.prototype.eos=function(){return this.tail===""};L.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};L.prototype.scanUntil=function(e){var t=this.tail.search(e),r;switch(t){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=r.length,r};function w(n,e){this.view=n,this.cache={".":this.view},this.parent=e}w.prototype.push=function(e){return new w(e,this)};w.prototype.lookup=function(e){var t=this.cache,r;if(t.hasOwnProperty(e))r=t[e];else{for(var o=this,s,i,a,u=!1;o;){if(e.indexOf(".")>0)for(s=o.view,i=e.split("."),a=0;s!=null&&a<i.length;)a===i.length-1&&(u=D(s,i[a])||oe(s,i[a])),s=s[i[a++]];else s=o.view[e],u=D(o.view,e);if(u){r=s;break}o=o.parent}t[e]=r}return V(r)&&(r=r.call(this.view)),r};function p(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}p.prototype.clearCache=function(){typeof this.templateCache!="undefined"&&this.templateCache.clear()};p.prototype.parse=function(e,t){var r=this.templateCache,o=e+":"+(t||h.tags).join(":"),s=typeof r!="undefined",i=s?r.get(o):void 0;return i==null&&(i=de(e,t),s&&r.set(o,i)),i};p.prototype.render=function(e,t,r,o){var s=this.getConfigTags(o),i=this.parse(e,s),a=t instanceof w?t:new w(t,void 0);return this.renderTokens(i,a,r,e,o)};p.prototype.renderTokens=function(e,t,r,o,s){for(var i="",a,u,l,f=0,d=e.length;f<d;++f)l=void 0,a=e[f],u=a[0],u==="#"?l=this.renderSection(a,t,r,o,s):u==="^"?l=this.renderInverted(a,t,r,o,s):u===">"?l=this.renderPartial(a,t,r,s):u==="&"?l=this.unescapedValue(a,t):u==="name"?l=this.escapedValue(a,t,s):u==="text"&&(l=this.rawValue(a)),l!==void 0&&(i+=l);return i};p.prototype.renderSection=function(e,t,r,o,s){var i=this,a="",u=t.lookup(e[1]);function l(m){return i.render(m,t,r,s)}if(!!u){if(W(u))for(var f=0,d=u.length;f<d;++f)a+=this.renderTokens(e[4],t.push(u[f]),r,o,s);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")a+=this.renderTokens(e[4],t.push(u),r,o,s);else if(V(u)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(t.view,o.slice(e[3],e[5]),l),u!=null&&(a+=u)}else a+=this.renderTokens(e[4],t,r,o,s);return a}};p.prototype.renderInverted=function(e,t,r,o,s){var i=t.lookup(e[1]);if(!i||W(i)&&i.length===0)return this.renderTokens(e[4],t,r,o,s)};p.prototype.indentPartial=function(e,t,r){for(var o=t.replace(/[^ \t]/g,""),s=e.split(`
`),i=0;i<s.length;i++)s[i].length&&(i>0||!r)&&(s[i]=o+s[i]);return s.join(`
`)};p.prototype.renderPartial=function(e,t,r,o){if(!!r){var s=this.getConfigTags(o),i=V(r)?r(e[1]):r[e[1]];if(i!=null){var a=e[6],u=e[5],l=e[4],f=i;u==0&&l&&(f=this.indentPartial(i,l,a));var d=this.parse(f,s);return this.renderTokens(d,t,r,f,o)}}};p.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(r!=null)return r};p.prototype.escapedValue=function(e,t,r){var o=this.getConfigEscape(r)||h.escape,s=t.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===h.escape?String(s):o(s)};p.prototype.rawValue=function(e){return e[1]};p.prototype.getConfigTags=function(e){return W(e)?e:e&&typeof e=="object"?e.tags:void 0};p.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!W(e))return e.escape};var h={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(n){E.templateCache=n},get templateCache(){return E.templateCache}},E=new p;h.clearCache=function(){return E.clearCache()};h.parse=function(e,t){return E.parse(e,t)};h.render=function(e,t,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+re(e)+'" was given as the first argument for mustache#render(template, view, partials)');return E.render(e,t,r,o)};h.escape=le;h.Scanner=L;h.Context=w;h.Writer=p;class ve{constructor(e,t){this.template=e,this.state=t,this.ast=h.parse(e)}getValue(){return this.value===void 0&&(this.value=h.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const r of this.getUsedVariables().values())t.push(this.state.onVariableChange(r).subscribe(()=>{const o=h.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of t)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const r of e){const o=r[0],s=r[1],i=r[4];["name","&","#","^"].includes(o)&&t.add(s),i!==void 0&&typeof i!="string"&&this.recursiveGetUsedVariables(i,t)}}}async function be(){var n;const e=await B();for(const[t,r]of e.entries()){const o=(n=r.properties)!==null&&n!==void 0?n:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const i=new ve(s.value,WA.state);if(i.isPureString())continue;const a=i.getValue();q(t,s.name,a),i.onChange(u=>{q(t,s.name,u)})}}}function q(n,e,t){WA.room.setProperty(n,e,t),e==="visible"&&(t?WA.room.showLayer(n):WA.room.hideLayer(n))}let j,I=0,U=0;function N(n){if(WA.state[n.name]){let e=n.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.showLayer(t);e=n.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.hideLayer(t)}else{let e=n.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.hideLayer(t);e=n.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.showLayer(t)}}function Ae(n){const e=n.properties.getString("openSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=Y(n.properties.mustGetString("openLayer").split(`
`));if(o>t)return;r=1-o/t}e&&WA.sound.loadSound(e).play({volume:r})}function we(n){const e=n.properties.getString("closeSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=Y(n.properties.mustGetString("closeLayer").split(`
`));if(o>t)return;r=1-o/t}e&&WA.sound.loadSound(e).play({volume:r})}function X(n){return n.map(e=>j.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function Y(n){const e=X(n),t=Z(e),r=((t.right-t.left)/2+t.left)*32,o=((t.bottom-t.top)/2+t.top)*32;return Math.sqrt(Math.pow(I-r,2)+Math.pow(U-o,2))}function We(n){WA.state.onVariableChange(n.name).subscribe(()=>{WA.state[n.name]?Ae(n):we(n),N(n)}),N(n)}function Se(n,e,t,r){const o=n.name;let s,i,a=!1;const u=t.getString("tag");let l=!0;u&&!WA.player.tags.includes(u)&&(l=!1);const f=!!u;function d(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=t.getString("closeTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,m()}})}function m(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=t.getString("openTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,d()}})}function M(c){const v=Z(X(e.properties.mustGetString("closeLayer").split(`
`)));i=WA.room.website.create({name:"doorKeypad"+c,url:r+"/keypad.html#"+encodeURIComponent(c),position:{x:v.right*32,y:v.top*32,width:32*3,height:32*4},allowApi:!0})}function S(){i&&(WA.room.website.delete(i.name),i=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(a=!0,t.getBoolean("autoOpen")&&l){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(f&&!l||!f)&&(t.getString("code")||t.getString("codeVariable"))){M(o);return}!l||(WA.state[e.name]?d():m())}),WA.room.onLeaveLayer(o).subscribe(()=>{a=!1,t.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),S()}),WA.state.onVariableChange(e.name).subscribe(()=>{a&&(!t.getBoolean("autoClose")&&WA.state[e.name]===!0&&d(),i&&WA.state[e.name]===!0&&S(),!t.getBoolean("autoOpen")&&WA.state[e.name]===!1&&m())})}function Ce(n){const e=n.properties.mustGetString("bellSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=Math.sqrt(Math.pow(n.x-I,2)+Math.pow(n.y-U,2));if(o>t)return;r=1-o/t}WA.sound.loadSound(e).play({volume:r})}function Te(n){WA.state[n.name]===void 0&&(WA.state[n.name]=0),WA.state.onVariableChange(n.name).subscribe(()=>{WA.state[n.name]&&Ce(n)})}function Ee(n,e,t){let r;const o=e.getString("bellPopup");WA.room.onEnterLayer(t).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[n]=WA.state[n]+1}}]):WA.state[n]=WA.state[n]+1}),WA.room.onLeaveLayer(t).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Le(n){n=n!=null?n:x;const e=await Q();j=await B();for(const t of e.values())t.properties.get("door")&&We(t),t.properties.get("bell")&&Te(t);for(const t of j.values()){const r=new T(t.properties),o=r.getString("doorVariable");if(o&&t.type==="tilelayer"){const i=e.get(o);if(i===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+t.name+'"');Se(t,i,r,n)}const s=r.getString("bellVariable");s&&Ee(s,r,t.name)}WA.player.onPlayerMove(t=>{I=t.x,U=t.y})}function Me(n,e){const t=n.getString("bindVariable");if(t){const r=n.get("enterValue"),o=n.get("leaveValue"),s=n.getString("triggerMessage"),i=n.getString("tag");Re(t,e,r,o,s,i)}}function Re(n,e,t,r,o,s){s&&!WA.player.tags.includes(s)||(t!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[n]=t)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[n]=r}))}async function Be(){const n=await B();for(const e of n.values()){const t=new T(e.properties);Me(t,e.name)}}let K;async function Pe(n){const e=await WA.room.getTiledMap();n=n!=null?n:x,K=await B();const t=e.layers.find(r=>r.name==="configuration");if(t){const o=new T(t.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(n+"/configuration.html",!0)});for(const s of K.values()){const i=new T(s.properties),a=i.getString("openConfig");a&&s.type==="tilelayer"&&ke(a.split(","),s.name,i)}}}function ke(n,e,t){let r;const o=t.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function i(){var u;r&&r.remove(),r=WA.ui.displayActionMessage({message:(u=t.getString("openConfigTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE or touch here to configure",callback:()=>O(n)})}function a(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const u=t.getString("openConfigTrigger");s&&(u&&u==="onaction"?i():O(n))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),a()})}function Ge(){return WA.onInit().then(()=>{Le().catch(n=>console.error(n)),Be().catch(n=>console.error(n)),Pe().catch(n=>console.error(n)),be().catch(n=>console.error(n))}).catch(n=>console.error(n))}console.log("Script started successfully");WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.onEnterLayer("BackHomeZone").subscribe(()=>{WA.nav.goToRoom("map.json")}),WA.room.onEnterLayer("CalcToRoom18").subscribe(()=>{WA.nav.goToRoom("map18.json")}),WA.room.onEnterLayer("CalcToRoom35").subscribe(()=>{WA.nav.goToRoom("35/map35.json")}),WA.room.onEnterLayer("CalcToRoomB2C").subscribe(()=>{WA.nav.goToRoom("B2C/mapB2C.json")}),WA.room.onEnterLayer("CalcToRoomB2G").subscribe(()=>{WA.nav.goToRoom("B2G/mapB2G.json")}),WA.room.onEnterLayer("CalcToRoomB2E").subscribe(()=>{WA.nav.goToRoom("B2E/mapB2E.json")}),WA.room.onEnterLayer("CalcToRoomCorp").subscribe(()=>{WA.nav.goToRoom("Corp/mapCorp.json")}),Ge().then(()=>{console.log("Scripting API Extra ready")}).catch(n=>console.error(n))}).catch(n=>console.error(n));
