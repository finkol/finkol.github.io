(()=>{var Et=Object.defineProperty,At=Object.defineProperties;var Lt=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var Fe=(e,t,r)=>t in e?Et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))Ne.call(t,r)&&Fe(e,r,t[r]);if(J)for(var r of J(t))He.call(t,r)&&Fe(e,r,t[r]);return e},L=(e,t)=>At(e,Lt(t));var Ge=(e,t)=>{var r={};for(var n in e)Ne.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&J)for(var n of J(e))t.indexOf(n)<0&&He.call(e,n)&&(r[n]=e[n]);return r};var X,p,Oe,Pt,U,Ue,$e,Be,Q={},qe=[],It=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function P(e,t){for(var r in t)e[r]=t[r];return e}function Ke(e){var t=e.parentNode;t&&t.removeChild(e)}function a(e,t,r){var n,s,o,l={};for(o in t)o=="key"?n=t[o]:o=="ref"?s=t[o]:l[o]=t[o];if(arguments.length>2&&(l.children=arguments.length>3?X.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)l[o]===void 0&&(l[o]=e.defaultProps[o]);return Z(e,l,n,s,null)}function Z(e,t,r,n,s){var o={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++Oe};return s==null&&p.vnode!=null&&p.vnode(o),o}function W(e){return e.children}function I(e,t){this.props=e,this.context=t}function N(e,t){if(t==null)return e.__?N(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?N(e):null}function Ve(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Ve(e)}}function me(e){(!e.__d&&(e.__d=!0)&&U.push(e)&&!ee.__r++||$e!==p.debounceRendering)&&(($e=p.debounceRendering)||Ue)(ee)}function ee(){for(var e;ee.__r=U.length;)e=U.sort(function(t,r){return t.__v.__b-r.__v.__b}),U=[],e.some(function(t){var r,n,s,o,l,c;t.__d&&(l=(o=(r=t).__v).__e,(c=r.__P)&&(n=[],(s=P({},o)).__v=o.__v+1,_e(c,o,s,r.__n,c.ownerSVGElement!==void 0,o.__h!=null?[l]:null,n,l??N(o),o.__h),Ze(n,o),o.__e!=l&&Ve(o)))})}function je(e,t,r,n,s,o,l,c,u,f){var i,_,m,d,g,T,v,y=n&&n.__k||qe,x=y.length;for(r.__k=[],i=0;i<t.length;i++)if((d=r.__k[i]=(d=t[i])==null||typeof d=="boolean"?null:typeof d=="string"||typeof d=="number"||typeof d=="bigint"?Z(null,d,null,null,d):Array.isArray(d)?Z(W,{children:d},null,null,null):d.__b>0?Z(d.type,d.props,d.key,null,d.__v):d)!=null){if(d.__=r,d.__b=r.__b+1,(m=y[i])===null||m&&d.key==m.key&&d.type===m.type)y[i]=void 0;else for(_=0;_<x;_++){if((m=y[_])&&d.key==m.key&&d.type===m.type){y[_]=void 0;break}m=null}_e(e,d,m=m||Q,s,o,l,c,u,f),g=d.__e,(_=d.ref)&&m.ref!=_&&(v||(v=[]),m.ref&&v.push(m.ref,null,d),v.push(_,d.__c||g,d)),g!=null?(T==null&&(T=g),typeof d.type=="function"&&d.__k===m.__k?d.__d=u=ze(d,u,e):u=Ye(e,d,m,y,g,u),typeof r.type=="function"&&(r.__d=u)):u&&m.__e==u&&u.parentNode!=e&&(u=N(m))}for(r.__e=T,i=x;i--;)y[i]!=null&&(typeof r.type=="function"&&y[i].__e!=null&&y[i].__e==r.__d&&(r.__d=N(n,i+1)),tt(y[i],y[i]));if(v)for(i=0;i<v.length;i++)et(v[i],v[++i],v[++i])}function ze(e,t,r){for(var n,s=e.__k,o=0;s&&o<s.length;o++)(n=s[o])&&(n.__=e,t=typeof n.type=="function"?ze(n,t,r):Ye(r,n,n,s,n.__e,t));return t}function Ye(e,t,r,n,s,o){var l,c,u;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(r==null||s!=o||s.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(s),l=null;else{for(c=o,u=0;(c=c.nextSibling)&&u<n.length;u+=2)if(c==s)break e;e.insertBefore(s,o),l=o}return l!==void 0?l:s.nextSibling}function Rt(e,t,r,n,s){var o;for(o in r)o==="children"||o==="key"||o in t||te(e,o,null,r[o],n);for(o in t)s&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||r[o]===t[o]||te(e,o,t[o],r[o],n)}function Je(e,t,r){t[0]==="-"?e.setProperty(t,r):e[t]=r==null?"":typeof r!="number"||It.test(t)?r:r+"px"}function te(e,t,r,n,s){var o;e:if(t==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||Je(e.style,t,"");if(r)for(t in r)n&&r[t]===n[t]||Je(e.style,t,r[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?n||e.addEventListener(t,o?Qe:Xe,o):e.removeEventListener(t,o?Qe:Xe,o);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r!=null&&(r!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,r):e.removeAttribute(t))}}function Xe(e){this.l[e.type+!1](p.event?p.event(e):e)}function Qe(e){this.l[e.type+!0](p.event?p.event(e):e)}function _e(e,t,r,n,s,o,l,c,u){var f,i,_,m,d,g,T,v,y,x,O,C=t.type;if(t.constructor!==void 0)return null;r.__h!=null&&(u=r.__h,c=t.__e=r.__e,t.__h=null,o=[c]),(f=p.__b)&&f(t);try{e:if(typeof C=="function"){if(v=t.props,y=(f=C.contextType)&&n[f.__c],x=f?y?y.props.value:f.__:n,r.__c?T=(i=t.__c=r.__c).__=i.__E:("prototype"in C&&C.prototype.render?t.__c=i=new C(v,x):(t.__c=i=new I(v,x),i.constructor=C,i.render=Ht),y&&y.sub(i),i.props=v,i.state||(i.state={}),i.context=x,i.__n=n,_=i.__d=!0,i.__h=[]),i.__s==null&&(i.__s=i.state),C.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=P({},i.__s)),P(i.__s,C.getDerivedStateFromProps(v,i.__s))),m=i.props,d=i.state,_)C.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(C.getDerivedStateFromProps==null&&v!==m&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(v,x),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(v,i.__s,x)===!1||t.__v===r.__v){i.props=v,i.state=i.__s,t.__v!==r.__v&&(i.__d=!1),i.__v=t,t.__e=r.__e,t.__k=r.__k,t.__k.forEach(function(b){b&&(b.__=t)}),i.__h.length&&l.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(v,i.__s,x),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(m,d,g)})}i.context=x,i.props=v,i.state=i.__s,(f=p.__r)&&f(t),i.__d=!1,i.__v=t,i.__P=e,f=i.render(i.props,i.state,i.context),i.state=i.__s,i.getChildContext!=null&&(n=P(P({},n),i.getChildContext())),_||i.getSnapshotBeforeUpdate==null||(g=i.getSnapshotBeforeUpdate(m,d)),O=f!=null&&f.type===W&&f.key==null?f.props.children:f,je(e,Array.isArray(O)?O:[O],t,r,n,s,o,l,c,u),i.base=t.__e,t.__h=null,i.__h.length&&l.push(i),T&&(i.__E=i.__=null),i.__e=!1}else o==null&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=Nt(r.__e,t,r,n,s,o,l,u);(f=p.diffed)&&f(t)}catch(b){t.__v=null,(u||o!=null)&&(t.__e=c,t.__h=!!u,o[o.indexOf(c)]=null),p.__e(b,t,r)}}function Ze(e,t){p.__c&&p.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(n){n.call(r)})}catch(n){p.__e(n,r.__v)}})}function Nt(e,t,r,n,s,o,l,c){var u,f,i,_=r.props,m=t.props,d=t.type,g=0;if(d==="svg"&&(s=!0),o!=null){for(;g<o.length;g++)if((u=o[g])&&"setAttribute"in u==!!d&&(d?u.localName===d:u.nodeType===3)){e=u,o[g]=null;break}}if(e==null){if(d===null)return document.createTextNode(m);e=s?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,m.is&&m),o=null,c=!1}if(d===null)_===m||c&&e.data===m||(e.data=m);else{if(o=o&&X.call(e.childNodes),f=(_=r.props||Q).dangerouslySetInnerHTML,i=m.dangerouslySetInnerHTML,!c){if(o!=null)for(_={},g=0;g<e.attributes.length;g++)_[e.attributes[g].name]=e.attributes[g].value;(i||f)&&(i&&(f&&i.__html==f.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(Rt(e,m,_,s,c),i)t.__k=[];else if(g=t.props.children,je(e,Array.isArray(g)?g:[g],t,r,n,s&&d!=="foreignObject",o,l,o?o[0]:r.__k&&N(r,0),c),o!=null)for(g=o.length;g--;)o[g]!=null&&Ke(o[g]);c||("value"in m&&(g=m.value)!==void 0&&(g!==_.value||g!==e.value||d==="progress"&&!g)&&te(e,"value",g,_.value,!1),"checked"in m&&(g=m.checked)!==void 0&&g!==e.checked&&te(e,"checked",g,_.checked,!1))}return e}function et(e,t,r){try{typeof e=="function"?e(t):e.current=t}catch(n){p.__e(n,r)}}function tt(e,t,r){var n,s;if(p.unmount&&p.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||et(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){p.__e(o,t)}n.base=n.__P=null}if(n=e.__k)for(s=0;s<n.length;s++)n[s]&&tt(n[s],t,typeof e.type!="function");r||e.__e==null||Ke(e.__e),e.__e=e.__d=void 0}function Ht(e,t,r){return this.constructor(e,r)}function rt(e,t,r){var n,s,o;p.__&&p.__(e,t),s=(n=typeof r=="function")?null:r&&r.__k||t.__k,o=[],_e(t,e=(!n&&r||t).__k=a(W,null,[e]),s||Q,Q,t.ownerSVGElement!==void 0,!n&&r?[r]:s?null:t.firstChild?X.call(t.childNodes):null,o,!n&&r?r:s?s.__e:t.firstChild,n),Ze(o,e)}function nt(e,t){var r={__c:t="__cC"+Be++,__:e,Consumer:function(n,s){return n.children(s)},Provider:function(n){var s,o;return this.getChildContext||(s=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&s.some(me)},this.sub=function(l){s.push(l);var c=l.componentWillUnmount;l.componentWillUnmount=function(){s.splice(s.indexOf(l),1),c&&c.call(l)}}),n.children}};return r.Provider.__=r.Consumer.contextType=r}X=qe.slice,p={__e:function(e,t){for(var r,n,s;t=t.__;)if((r=t.__c)&&!r.__)try{if((n=r.constructor)&&n.getDerivedStateFromError!=null&&(r.setState(n.getDerivedStateFromError(e)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e),s=r.__d),s)return r.__E=r}catch(o){e=o}throw e}},Oe=0,Pt=function(e){return e!=null&&e.constructor===void 0},I.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof e=="function"&&(e=e(P({},r),this.props)),e&&P(r,e),e!=null&&this.__v&&(t&&this.__h.push(t),me(this))},I.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),me(this))},I.prototype.render=W,U=[],Ue=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ee.__r=0,Be=0;var ot=24*60*60*1e3,st=new Date(Date.UTC(2022,0,23)),at=()=>new Date,$=()=>Ft(at()),Ft=e=>{let t=e.getTime()-st.getTime();return Math.floor(t/ot)},it=e=>{let t=st.getTime()+ot*(e+1);return Math.max(0,t-at().getTime())};var B,w,lt,q=0,pe=[],ct=p.__b,ut=p.__r,dt=p.diffed,ft=p.__c,mt=p.unmount;function re(e,t){p.__h&&p.__h(w,e,q||t),q=0;var r=w.__H||(w.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function S(e){return q=1,ge(vt,e)}function ge(e,t,r){var n=re(B++,2);return n.t=e,n.__c||(n.__=[r?r(t):vt(void 0,t),function(s){var o=n.t(n.__[0],s);n.__[0]!==o&&(n.__=[o,n.__[1]],n.__c.setState({}))}],n.__c=w),n.__}function h(e,t){var r=re(B++,3);!p.__s&&gt(r.__H,t)&&(r.__=e,r.__H=t,w.__H.__h.push(r))}function H(e){return q=5,K(function(){return{current:e}},[])}function K(e,t){var r=re(B++,7);return gt(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function V(e,t){return q=8,K(function(){return e},t)}function _t(e){var t=w.context[e.__c],r=re(B++,9);return r.c=e,t?(r.__==null&&(r.__=!0,t.sub(w)),t.props.value):e.__}function Gt(){var e;for(pe.sort(function(t,r){return t.__v.__b-r.__v.__b});e=pe.pop();)if(e.__P)try{e.__H.__h.forEach(ne),e.__H.__h.forEach(ve),e.__H.__h=[]}catch(t){e.__H.__h=[],p.__e(t,e.__v)}}p.__b=function(e){w=null,ct&&ct(e)},p.__r=function(e){ut&&ut(e),B=0;var t=(w=e.__c).__H;t&&(t.__h.forEach(ne),t.__h.forEach(ve),t.__h=[])},p.diffed=function(e){dt&&dt(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(pe.push(t)!==1&&lt===p.requestAnimationFrame||((lt=p.requestAnimationFrame)||function(r){var n,s=function(){clearTimeout(o),pt&&cancelAnimationFrame(n),setTimeout(r)},o=setTimeout(s,100);pt&&(n=requestAnimationFrame(s))})(Gt)),w=null},p.__c=function(e,t){t.some(function(r){try{r.__h.forEach(ne),r.__h=r.__h.filter(function(n){return!n.__||ve(n)})}catch(n){t.some(function(s){s.__h&&(s.__h=[])}),t=[],p.__e(n,r.__v)}}),ft&&ft(e,t)},p.unmount=function(e){mt&&mt(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{ne(n)}catch(s){t=s}}),t&&p.__e(t,r.__v))};var pt=typeof requestAnimationFrame=="function";function ne(e){var t=w,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),w=t}function ve(e){var t=w;e.__c=e.__(),w=t}function gt(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function vt(e,t){return typeof t=="function"?t(e):t}var oe=[],ye="is",Ot=e=>{oe.push(e)},Ut=e=>{oe=oe.filter(t=>t!==e)},$t=e=>{if(e!==ye){ye=e;for(let t of oe)t(e)}},F=()=>{let[e,t]=S(ye);return h(()=>(Ot(t),()=>Ut(t)),[]),[e,$t]};function se({classNames:e}){let[t,r]=F();return a("button",{class:e,onClick:()=>{r(t==="is"?"en":"is")}},t==="is"?"\u{1F1EC}\u{1F1E7}":"\u{1F1EE}\u{1F1F8}")}function j(){let[e,t]=F();return e==="is"?a(W,null,a("p",null,"Giska\xF0u \xE1 nafni\xF0 \xED 6 e\xF0a f\xE6rri tilraunum."),a("p",null,"Hver tilraun ver\xF0ur a\xF0 vera gilt nafn \xE1 \xEDslensku me\xF0 6 b\xF3kst\xF6fum."),a("p",null,"Eftir hverja tilraun breyta b\xF3kstafirnir um lit til a\xF0 s\xFDna hversu n\xE1l\xE6gt \xFE\xFA varst."),a("hr",null),a("p",null,a("b",null,"D\xE6mi"),":"),a("div",{class:"word-grid-row example"},a("div",{class:"word-grid-cell correct"},"l"),a("div",{class:"word-grid-cell entry"},"\xFA"),a("div",{class:"word-grid-cell entry"},"i"),a("div",{class:"word-grid-cell entry"},"n"),a("div",{class:"word-grid-cell entry"},"n")),a("p",null,"B\xF3kstafurinn ",a("b",null,"L")," er \xED or\xF0inu og \xE1 r\xE9ttum sta\xF0."),a("div",{class:"word-grid-row example"},a("div",{class:"word-grid-cell entry"},"t"),a("div",{class:"word-grid-cell partial"},"\xF6"),a("div",{class:"word-grid-cell entry"},"f"),a("div",{class:"word-grid-cell entry"},"l"),a("div",{class:"word-grid-cell entry"},"u")),a("p",null,"B\xF3kstafurinn ",a("b",null,"\xD6")," er \xED or\xF0inu en ekki \xE1 r\xE9ttum sta\xF0."),a("div",{class:"word-grid-row example"},a("div",{class:"word-grid-cell entry"},"\xF3"),a("div",{class:"word-grid-cell entry"},"s"),a("div",{class:"word-grid-cell entry"},"k"),a("div",{class:"word-grid-cell incorrect"},"\xFD"),a("div",{class:"word-grid-cell entry"},"r")),a("p",null,"B\xF3kstafurinn ",a("b",null,"\xDD")," er ekki \xED or\xF0inu \xE1 neinum sta\xF0."),a("hr",null),a("p",null,"Source k\xF3\xF0ann m\xE1 finna \xE1"," ",a("a",{href:"https://github.com/t-veor/ordill",target:"_blank",rel:"noreferrer"},"Github"),".")):a(W,null,a("p",null,"Guess the name in 6 or fewer tries."),a("p",null,"Each attempt must be a valid name in Icelandic with 6 letters."),a("p",null,"After each attempt, the letters change colour to show how close you were."),a("hr",null),a("p",null,a("b",null,"Examples"),":"),a("div",{class:"word-grid-row example"},a("div",{class:"word-grid-cell correct"},"l"),a("div",{class:"word-grid-cell entry"},"\xFA"),a("div",{class:"word-grid-cell entry"},"i"),a("div",{class:"word-grid-cell entry"},"n"),a("div",{class:"word-grid-cell entry"},"n")),a("p",null,"The letter ",a("b",null,"L")," is in the word and in the correct spot."),a("div",{class:"word-grid-row example"},a("div",{class:"word-grid-cell entry"},"t"),a("div",{class:"word-grid-cell partial"},"\xF6"),a("div",{class:"word-grid-cell entry"},"f"),a("div",{class:"word-grid-cell entry"},"l"),a("div",{class:"word-grid-cell entry"},"u")),a("p",null,"The letter ",a("b",null,"\xD6")," is in the word but in the wrong spot."),a("div",{class:"word-grid-row example"},a("div",{class:"word-grid-cell entry"},"\xF3"),a("div",{class:"word-grid-cell entry"},"s"),a("div",{class:"word-grid-cell entry"},"k"),a("div",{class:"word-grid-cell incorrect"},"\xFD"),a("div",{class:"word-grid-cell entry"},"r")),a("p",null,"The letter ",a("b",null,"\xDD")," is not in the word in any spot."),a("hr",null),a("p",null,"The source code can be found on"," ",a("a",{href:"https://github.com/t-veor/ordill",target:"_blank",rel:"noreferrer"},"Github"),"."))}function be({name:e,open:t,headerComponents:r,onClose:n,children:s}){let o="tab";return t||(o+=" closed"),a("div",{class:o},a("div",{class:"tab-contents"},a("div",{class:"tab-header"},a("h2",{class:"tab-title"},e),r,a("button",{class:"tab-button",onClick:n},"X")),a("hr",null),a("div",{class:"tab-body"},s)))}function he(e){let[t,r]=F();return a(be,k({name:t==="is"?"Lei\xF0beiningar":"Instructions",headerComponents:a(se,{classNames:"tab-button"})},e),a(j,null))}var ae=class extends I{constructor(){super(...arguments);this.state={tab:null};this.setTab=t=>this.setState({tab:t});this.openSettings=()=>this.setTab("settings");this.openInstructions=()=>this.setTab("instructions");this.closeTab=()=>this.setTab(null)}render(t,{tab:r}){return a("div",{class:"header"},a("h1",{class:"title"},"Hva\xF0 heitir Finnsd\xF3ttir?"),a("button",{class:"tab-button",onClick:this.openInstructions},"?"),a(he,{open:r==="instructions",onClose:this.closeTab}))}};var Bt=()=>{let e={};try{let t=localStorage.getItem("settings");if(t==null)return e;let r=JSON.parse(t);r.dark!=null&&(e.dark=!!r.dark),r.highContrast!=null&&(e.highContrast=!!r.highContrast),r.symbols!=null&&(e.symbols=!!r.symbols)}catch(t){console.log(t)}return e},qt=()=>{try{let e=localStorage.getItem("darkMode");if(localStorage.removeItem("darkMode"),e!=null)return e==="true"}catch(e){console.log(e)}},Kt=()=>{try{if(window.matchMedia("(prefers-color-scheme: dark)").matches)return!0}catch(e){console.log(e)}},Vt=()=>{let e=Bt();return e.dark==null&&(e.dark=qt()),e.dark==null&&(e.dark=Kt()),e},jt=e=>{try{localStorage.setItem("settings",JSON.stringify(e))}catch(t){console.log(t)}},ie=class{constructor(){this.callbacks=[];this.settings=Vt(),this.onChanged()}static getInstance(){return this.instance||(this.instance=new ie),this.instance}subscribe(t){this.callbacks.includes(t)||this.callbacks.push(t)}unsubscribe(t){this.callbacks=this.callbacks.filter(r=>r!==t)}get(){return this.settings}update(t){this.settings=k(k({},this.settings),t),this.onChanged()}onChanged(){let{dark:t,highContrast:r,symbols:n}=this.settings,s=document.body.classList;s.toggle("dark",!!t),s.toggle("high-contrast",!!r),s.toggle("use-symbols",!!n),jt(this.settings);for(let o of this.callbacks)o(this.settings)}},zt=ie.getInstance(),M=zt;var le=[],Yt=0,Jt=e=>{le.push(e)},Xt=e=>{le=le.filter(t=>t!==e)},z=e=>{for(let t of le){let r=Yt++;t({message:e,id:r})}};function yt(){let[e,t]=S(null);h(()=>(Jt(t),()=>Xt(t)),[]),h(()=>{if(e!=null){let n=setTimeout(()=>t(null),3e3);return()=>clearTimeout(n)}},[e]);let r=e!=null?a("div",{class:"toast",key:e.id},e.message):null;return a("div",{class:"toaster"},r)}var R=6,E=8;var Qt=e=>{let t=e%100===11;return!(e%10===1)||t};function Se({wordle:e,onPlayAgain:t,onCopyResults:r,onShowStats:n}){let{gameState:s,guessedWords:o,secretWord:l,dailyNumber:c}=e,u=s.name,f=o.length,i=c!=null,_;u==="won"?_=`\xDE\xE9r t\xF3kst \xFEa\xF0 \xED ${f}. tilraun! Nafni\xF0 er ${l.toUpperCase()} Finnsd\xF3ttir`:u==="resigned"?_=`\xDE\xFA gafst upp eftir ${f} tilraun${Qt(f)?"ir":""}!`:_=`Or\xF0i\xF0 var ${l.toUpperCase()}.`;let m;return i&&(m=a("button",{class:"end-footer-button show-stats",onClick:n},"S\xFDna T\xF6lfr\xE6\xF0i")),a("div",{class:"end-footer"},a("div",{class:"end-footer-message"},_))}var ke={[0]:"entry",[1]:"incorrect",[2]:"partial",[3]:"correct"},Zt=e=>{var s,o;let t=(s=e==null?void 0:e.letter)!=null?s:"",r=ke[(o=e==null?void 0:e.state)!=null?o:0],n=`word-grid-cell ${r}`;return(e==null?void 0:e.resigning)&&(n="word-grid-cell resigning"),r==="entry"&&t!==""&&(n+=" filled"),a("div",{class:n},t)};function we({words:e,minRows:t}){t=t||0;let r=H(null);h(()=>{var s;return(s=r.current)==null?void 0:s.scrollIntoView({behavior:"smooth",block:"nearest"})},[e]);let n=[];for(let s=0;s<Math.max(e.length,t);s++){let o=[],l=e[s];for(let u=0;u<R;u++)o.push(Zt(l==null?void 0:l[u]));let c=s===e.length-1?r:void 0;n.push(a("div",{class:"word-grid-row",ref:c},o))}return a("div",{class:"word-grid"},a("div",{class:"word-grid-inner"},n))}var er=[["Enter","\xE1","\xE9","\xED","\xF3","\xFA","\xFD","\xF6"],["q","w","e","r","t","y","u","i","o","p","\xF0"],["a","s","d","f","g","h","j","k","l","\xE6"],["z","x","c","v","b","n","m","\xFE","Backspace"]],tr=["c","q","w","z"],ce=class extends I{constructor(){super(...arguments);this.onClick=t=>{var n,s;let r=t.target.dataset.key;r&&((s=(n=this.props).onKeyDown)==null||s.call(n,r))}}render({letterStates:t,wordIsValid:r,isDaily:n}){let s=er.map((o,l)=>{let c=o.map(u=>{var m;let f="keyboard-button",i,_=tr.includes(u);if(u==="Enter")f+=" enter",i="Giska",r?f+=" correct":f+=" entry fake-disable";else if(u==="GiveUp")f+=" give-up",i="Gefast Upp",_=n;else{u==="Backspace"?(f+=" backspace",i="\u232B"):(f+=" letter",i=u);let d=ke[(m=t[u])!=null?m:0];f+=" "+d}return a("button",{key:u,"data-key":u,class:f,onClick:this.onClick,disabled:_},i)});return a("div",{class:"keyboard-row",key:l},c)});return a("div",{class:"keyboard"},s)}};function Y(e){let t=[],r=e.split("."),n=r[0];t.push(n);for(let s=1;s<r.length;s++){let o=r[s],l=n.substring(0,n.length-o.length)+o;t.push(l),n=l}return t}var rr=Y("agatha.neta.lb\xEDna.ex\xEDa.f\xEDfa.madea.l\xEDa.nda.el\xEDa.nal\xEDa.drea.etta.gela.nika.rnd\xEDs.ika.l\xEDn.r\xF3s.\xFAn.\xF3ra.strid.thena.urora.\xF0d\xEDs.l\xEDn.r\xFAn.vant\xED.xelma.\xEDa.baldey.engta.ney.rgey.n\xFD.tha.irgit.tna.jarma.l\xE6d\xEDs.\xF3mey.ogd\xEDs.rgn\xFD.ritta.ynja.\xEDana.ylgja.carmen.dagmar.ey.r\xFAn.ld\xEDs.r\xF3s.eb\xF3ra.immey.\xEDanna.\xFDrley.unn.efem\xEDa.ged\xEDa.gr\xFAn.ind\xEDs.r\xFAn.rd\xEDs.\xEDka.\xF0unn.leina.v\xEDra.\xEDana.r\xF3s.mel\xEDa.il\xEDa.sther.iva.velyn.yleif.veig.\xFE\xF3ra.fanney.inney.reyja.i\xF0ey.n\xFD.\xED\xF0ur.\xF3\xF0n\xFD.\xEDas\xF3l.gefjun.irn\xFD.r\xF0ur.stn\xFD.lor\xEDa.\xF3d\xEDs.r\xE9l\xF6\xF0.\xEDmey.unnur.\xF0d\xEDs.l\xEDn.mey.r\xFAn.\xEDsley.n\xFD.hafd\xEDs.r\xF3s.\xFAn.lley.n\xFD.u\xF0ur.ei\xF0n\xFD.ur.lena.rd\xEDs.tha.v\xF6r.ildur.jalta.\xF6rn\xFD.l\xE9d\xEDs.refna.\xF3\xF0n\xFD.ugd\xEDs.r\xFAn.ld\xEDs.\xFAnd\xEDs.ind\xEDra.gd\xEDs.rid.\xFAn.unn.jasm\xEDn.udith.\xF3anna.nd\xEDs.\xEDda.na.runn.kar\xEDna.tr\xEDn.\xF0l\xEDn.endra.l\xE1d\xEDa.olbr\xE1.d\xEDs.rista.laufey.gey.eikn\xFD.ouisa.sie.v\xEDsa.\xEDfd\xEDs.nd\xEDs.eik.sbet.\xFAv\xEDsa.maggey.nea.s.y.lena.rd\xEDs.ela.git.ot.l\xEDn.s.tha.\xEDam.n.k\xF3.na.sa.ttea.\xEDd\xEDs.ekkin.\xEDn.lr\xF3s.inney.riam.jam.onika.\xF3nika.\xEDka.nicole.oddr\xFAn.v\xF6r.pamela.etrea.\xF3s.\xFAn.om\xF3na.\xE1ld\xEDs.mey.r\xFAn.\xEDna.\xE9tr\xFAn.rafney.gney.eg\xEDna.nata.\xF3sl\xEDn.\xF6skva.\xFAnd\xEDs.sab\xEDna.ld\xEDs.ome.v\xF6r.\xEDna.\xF3me.ndra.r\xEDna.elena.igd\xEDs.r\xFAn.lv\xEDa.norra.\xE6br\xE1.d\xEDs.r\xF3s.\xFAn.off\xEDa.teina.lla.veina.ylgja.v\xEDa.\xE6borg.laug.\xF3lbr\xE1.d\xEDs.r\xFAn.v\xF6r.\xF6lvey.tamara.eitn\xFD.resa.helma.indra.orfey.und\xEDna.nd\xEDs.vald\xEDs.r\xF3s.\xFAn.igd\xEDs.l\xEDs.ld\xEDs.ord\xEDs.\xE9laug.\xE1g\xFAsta.lfd\xEDs.r\xFAn.s\xF3l.rel\xEDa.laug.nd\xEDs.\xEDna.veig.\xFE\xF3ra.sborg.laug.eif.td\xEDs.r\xF3s.\xFAn.\xEDsabel.fold.laug.eif.veig.\xF3laf\xEDa.v\xEDa.\xF6lveig.rbr\xFAn.\xFAlfd\xEDs.r\xFAn.nd\xEDna.ran\xEDa.s\xFAla.\xFEr\xFA\xF0ur.\xF3rd\xEDs.unn.v\xF6r"),bt=rr;var nr=Y("vigd\xEDs"),D=nr;var or=(e,t)=>{let r=0,n=e.length-1;for(;r<=n;){let s=r+(n-r>>>1),o=e[s];if(o<t)r=s+1;else if(o>t)n=s-1;else return s}return~r},ht=(e,t)=>or(e,t)>=0,St=e=>ht(D,e)||ht(bt,e),sr="abcdefghijklmnopqrstuvwyxz\xE1\xE9\xED\xF3\xFA\xFD\xFE\xE6\xF6\xF0",ue=e=>e.length===1&&sr.includes(e);var ar=e=>()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,(t^t>>>14)>>>0},ir=(e,t)=>{for(let r=e.length-1;r>0;r--){let n=t()%(r+1),s=e[r];e[r]=e[n],e[n]=s}},kt={},lr=e=>{let t=kt[e];if(t==null){let r=Array.from({length:D.length},(n,s)=>s);ir(r,ar(2550257288+e)),kt[e]=r,t=r}return t},wt=e=>{e=Math.max(0,e);let t=e%D.length,r=e/D.length|0;return lr(r)[t]},xe=e=>{if(e===666)return"satan";let t=wt(e);return D[t]},xt=()=>{let e=[],t=$();for(let n=0;n<30;n++)e.push(wt(t+n));let r=Math.random()*D.length|0;for(let n=0;n<10&&e.includes(r);n++)r=Math.random()*D.length|0;return D[r]};function ur(e,t){switch(t.type){case"input":return dr(e,t.letter);case"submit":return mr(e);case"backspace":return fr(e);case"resign":return _r(e);case"load":return t.newState;case"setHardMode":return!e.hardMode&&Me(e)?L(k({},e),{toastMessage:{message:"Ekki h\xE6gt a\xF0 kveikja \xE1 erfi\xF0isstillingunni \xED mi\xF0jum leik"}}):e.hardMode!==t.hardMode?L(k({},e),{hardMode:t.hardMode}):e;default:return e}}function dr(e,t){let{gameState:r}=e;if(r.name!=="playing")return e;let{currentWord:n}=r;return n.length>=R||!ue(t)?e:L(k({},e),{gameState:{name:"playing",currentWord:n+t}})}function fr(e){let{gameState:t}=e;if(t.name!=="playing")return e;let{currentWord:r}=t;return L(k({},e),{gameState:{name:"playing",currentWord:r.substring(0,r.length-1)}})}function mr(e){let{gameState:t,secretWord:r}=e;if(t.name!=="playing")return e;let{currentWord:n}=t,s=n===r,o=s;if(!o){let f=We(e,n);f.error&&(e=L(k({},e),{toastMessage:{message:f.error}})),o=!!f.valid}if(!o)return e;let l=vr(n,r),c=[...e.guessedWords,l],u;return s?u={name:"won"}:e.dailyNumber!=null&&c.length>=E?u={name:"lost"}:u={name:"playing",currentWord:""},L(k({},e),{guessedWords:c,gameState:u})}function _r(e){let{gameState:t,dailyNumber:r}=e;return t.name!=="playing"||r!=null?e:L(k({},e),{gameState:{name:"resigned"}})}function Ce(e,t,r){let n=r!=null?xe(r):xt();return{gameState:{name:"playing",currentWord:""},guessedWords:[],dailyNumber:r,hardMode:t,secretWord:n}}var We=(e,t)=>{if(t.length!==R)return{error:"Of f\xE1ir b\xF3kstafir"};let{guessedWords:r,hardMode:n}=e;if(!St(t))return{error:"Or\xF0 ekki gilt"};if(!n)return{valid:!0};let s=r[r.length-1];return gr(t,s)},pr=["","","tv\xF6 ","\xFErj\xFA ","fj\xF6gur ","fimm "],gr=(e,t)=>{if(t==null)return{valid:!0};for(let s=0;s<t.length;s++){let{letter:o,state:l}=t[s];if(e[s]!==o&&l===3)return{error:`${s+1}. stafurinn ver\xF0ur a\xF0 vera ${o.toUpperCase()}`}}let r={};for(let{letter:s,state:o}of t)o>=2&&(r[s]=(r[s]||0)+1);let n={};for(let s=0;s<e.length;s++){let o=e[s];n[o]=(n[o]||0)+1}for(let s of Object.keys(r)){let o=r[s];if((n[s]||0)<o)return{error:`Or\xF0 ver\xF0ur a\xF0 innihalda ${pr[o]}${s.toUpperCase()}`}}return{valid:!0}},vr=(e,t)=>{var s;if(e.length!==t.length)return null;let r=Array(e.length),n={};for(let o=0;o<t.length;o++){let l=t[o];n[l]=((s=n[l])!=null?s:0)+1}for(let o=0;o<e.length;o++)e[o]===t[o]&&(r[o]={letter:e[o],state:3},n[e[o]]-=1);for(let o=0;o<e.length;o++){if(r[o]!=null)continue;let l=e[o];n[l]==null||n[l]<=0?r[o]={letter:l,state:1}:(r[o]={letter:l,state:2},n[l]-=1)}return r},Te=e=>typeof e=="object"&&e!==null,yr=e=>{if(!Te(e))return null;let t=""+e.name;if(t==="playing"){let r=""+e.currentWord;return r=r.split("").filter(ue).join(""),{name:t,currentWord:r}}else if(t==="won"||t==="resigned"||t==="lost")return{name:t};return null},br=e=>{let t=[];if(!Array.isArray(e))return null;for(let r of e){if(!Array.isArray(r))return null;let n=[];for(let s=0;s<Math.min(r.length,R);s++){let o=r[s];if(!Te(o))return null;let l=o.letter;if(typeof l!="string"||!ue(l))return null;let c=o.state;if(c!==1&&c!==2&&c!==3)return null;n.push({letter:l,state:c})}t.push(n)}return t},hr=e=>Number.isInteger(e),Sr=e=>{if(!Te(e))return null;let t=yr(e.gameState);if(t==null)return null;let r=br(e.guessedWords);if(r==null)return null;let n=e.secretWord;if(typeof n!="string"||n.length!==R)return null;let s=!!e.hardMode,o=e.dailyNumber;return!hr(o)&&o!==void 0?null:{gameState:t,guessedWords:r,secretWord:n,hardMode:s,dailyNumber:o}},kr=e=>{let t=e?"dailySave":"freeplaySave";try{let r=null;if(r==null)return null;let n=JSON.parse(r);return Sr(n)}catch(r){console.log(r)}return null},wr=n=>{var s=n,{generation:e,toastMessage:t}=s,r=Ge(s,["generation","toastMessage"]);let o=r.dailyNumber!=null?"dailySave":"freeplaySave";try{localStorage.setItem(o,JSON.stringify(r))}catch(l){console.log(l)}},Me=({guessedWords:e})=>e.length>0,De=(e,t,r)=>{var s,o,l;let n=kr(t!=null);return(n==null||t!=null&&n.dailyNumber!==t||t!=null&&n.secretWord!==xe(t))&&(n=Ce(e,(o=(s=n==null?void 0:n.hardMode)!=null?s:r==null?void 0:r.hardMode)!=null?o:!1,t)),n.generation=((l=r==null?void 0:r.generation)!=null?l:0)+1,n},Ct=e=>{let[t,r]=S(M.get());h(()=>(M.subscribe(r),()=>M.unsubscribe(r)),[]);let[n,s]=ge(ur,void 0,e);return h(()=>wr(n),[n]),h(()=>{n.toastMessage&&z(n.toastMessage.message)},[n.toastMessage]),[n,s]};var Ee=["\u2B1B","\u2B1C","\u{1F7E8}","\u{1F7E9}","\u{1F7E6}","\u{1F7E7}"],xr="https://t-veor.github.io/ordill/",Cr=(e,t,r,n)=>{let{highContrast:s}=M.get(),o=[""];o.push(Ee[1]),o.push(Ee[s?4:2]),o.push(Ee[s?5:3]);let l=n!=null?`${n+1} `:"",c=n!=null?E:"\u221E",u=r?"*":"",f=e?t.length:"X",i=t.map(_=>_.map(({state:m})=>o[m]).join("")).join(`  
`);return`Or\xF0ill ${l}${f}/${c}${u}

${i}
${xr}`};function Ae({wordle:e,dispatchWordle:t,onShowStats:r}){let{gameState:n,guessedWords:s,secretWord:o,dailyNumber:l,generation:c}=e,u=l!=null,{statsDidShow:f,setIsDaily:i}=_t(Le),_=V(b=>{switch(b){case"Enter":return t({type:"submit"});case"Backspace":return t({type:"backspace"});case"GiveUp":return t({type:"resign"});default:return t({type:"input",letter:b.toLowerCase()})}},[]),m=V(b=>{let A=b.target;b.key==="Enter"&&(A.tagName==="BUTTON"||A.tagName==="A")||(b.key==="Backspace"&&b.preventDefault(),_(b.key))},[_]);h(()=>(document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)),[m]);let d=()=>{u&&i?i==null||i(!1):t({type:"load",newState:Ce(M.get(),e.hardMode)})},g=()=>{let b=Cr(e.gameState.name==="won",e.guessedWords,e.hardMode,l);navigator.clipboard.writeText(b).then(()=>z("Afritun t\xF3kst!")).catch(()=>z("Afritun mist\xF3kst!"))},T=K(()=>{let b={};for(let A of s)for(let{letter:Ie,state:Re}of A)(b[Ie]||0)<Re&&(b[Ie]=Re);return b},[s]),v=K(()=>{let b=[...s];return n.name==="playing"?b.push(n.currentWord.split("").map(A=>({letter:A,state:0}))):n.name==="resigned"&&b.push(o.split("").map(A=>({letter:A,state:3,resigning:!0}))),b},[s,n,o]),y=n.name!=="playing",x=y?!1:!!We(e,n.currentWord).valid;return a(W,null,a(we,{words:v,minRows:u?E:void 0,key:c}),y&&(!u||f)?a(Se,{wordle:e,onPlayAgain:d,onCopyResults:g,onShowStats:r}):a(ce,{letterStates:T,onKeyDown:_,wordIsValid:x,isDaily:u}))}function de({name:e,open:t,onClose:r,headerComponents:n,children:s}){let o=H(null),l=u=>{o.current&&!o.current.contains(u.target)&&(r==null||r())},c="modal";return t&&(c+=" open"),a("div",{class:c,onClick:l},a("div",{class:"modal-inner",ref:o},a("div",{class:"modal-header"},a("h3",{class:"modal-title"},e),n,a("button",{class:"modal-header-button",onClick:r},"X")),s))}function fe({name:e,value:t}){return a("div",{class:"stats-modal-row"},a("div",{class:"stats-modal-row-value"},t),a("div",{class:"stats-modal-row-name"},e))}function Wr({stats:e,activeRow:t}){let r=e.distribution.reduce((s,o)=>Math.max(s,o),1),n=e.distribution.map((s,o)=>{let c=`${(s/r*100).toFixed(2)}%`,u="distribution-bar-inner";return t===o&&(u+=" active"),a("div",{class:"distribution-row"},a("div",{class:"distribution-label"},o+1),a("div",{class:"distribution-bar"},a("div",{class:u,style:{width:c}},s)))});return a("div",{class:"distribution"},n)}function Tr({tick:e,dailyNumber:t}){let r=V(()=>it(t),[t]),[n,s]=S(r);h(()=>{if(e){s(r());let f=setInterval(()=>s(r()),1e3);return()=>clearInterval(f)}},[e,r]);let o=Math.floor(n/1e3),l=`0${o%60}`.slice(-2),c=`0${Math.floor(o/60)%60}`.slice(-2),u=`0${Math.floor(o/3600)}`.slice(-2);return a("div",{class:"stats-modal-timer"},a("div",{class:"timer-description"},"N\xE6sta dagleg \xFEraut eftir"),a("div",{class:"timer-clock"},a("div",{class:"timer-digit"},u[0]),a("div",{class:"timer-digit"},u[1]),a("div",{class:"timer-sep"},":"),a("div",{class:"timer-digit"},c[0]),a("div",{class:"timer-digit"},c[1]),a("div",{class:"timer-sep"},":"),a("div",{class:"timer-digit"},l[0]),a("div",{class:"timer-digit"},l[1])),a("div",{class:"timer-description"},'Viltu fleiri \xFErautir n\xFAna? Smelltu \xE1 \u201ESpila Frj\xE1lst" takkann!'))}function Wt({stats:e,open:t,onClose:r,wordle:n}){let s=Math.round(100*e.wins/Math.max(1,e.played)),o,l;return n!=null&&n.dailyNumber!=null&&n.gameState.name!=="playing"&&(n.gameState.name==="won"&&(l=n.guessedWords.length-1),o=a(W,null,a("hr",null),a(Tr,{tick:t,dailyNumber:n.dailyNumber}))),a(de,{name:"T\xF6lfr\xE6\xF0i",open:t,onClose:r},a("div",{class:"stats-modal-rows"},a(fe,{name:"Spila\xF0",value:e.played}),a(fe,{name:"% unnin",value:s}),a(fe,{name:"\xCD r\xF6\xF0",value:e.currStreak}),a(fe,{name:"Oftast \xED r\xF6\xF0",value:e.maxStreak})),a("hr",null),a("div",{class:"stats-modal-subtitle"},a("h3",null,"Dreifing \xE1giskana")),a(Wr,{stats:e,activeRow:l}),o)}var Tt={played:0,wins:0,currStreak:0,maxStreak:0,lastCompletedDay:-1,lastPlayedDay:-1,distribution:new Array(E).fill(0)},Mr=e=>typeof e=="object"&&e!==null,G=e=>Number.isInteger(e),Dr=e=>{if(!Array.isArray(e)||e.length!==E)return null;for(let t of e)if(!Number.isInteger(t))return null;return e},Er=e=>{if(!Mr(e))return null;let t=e.played;if(!G(t))return null;let r=e.wins;if(!G(r))return null;let n=e.currStreak;if(!G(n))return null;let s=e.maxStreak;if(!G(s))return null;let o=e.lastCompletedDay;if(!G(o))return null;let l=e.lastPlayedDay;if(!G(l))return null;let c=Dr(e.distribution);return c==null?null:{played:t,wins:r,currStreak:n,maxStreak:s,lastCompletedDay:o,lastPlayedDay:l,distribution:c}},Ar=()=>{try{let e=localStorage.getItem("stats");if(e==null)return Tt;let t=JSON.parse(e),r=Er(t);if(r!=null)return r}catch(e){console.log(e)}return Tt},Lr=e=>{try{localStorage.setItem("stats",JSON.stringify(e))}catch(t){console.log(t)}},Pr=(e,t)=>{let{gameState:r,guessedWords:n,dailyNumber:s}=t,o=n.length;if(r.name==="playing"||s==null||o>E||s<=e.lastPlayedDay)return e;let l=r.name==="won",c=k({},e);return c.played+=1,l?(c.wins+=1,e.currStreak<0||s>e.lastCompletedDay+1?c.currStreak=1:c.currStreak=e.currStreak+1,c.lastCompletedDay=s,c.distribution[o-1]+=1):c.currStreak=0,c.maxStreak=Math.max(c.currStreak,e.maxStreak),c.lastPlayedDay=s,c},Mt=()=>{let[e,t]=S(Ar);return h(()=>Lr(e),[e]),[e,n=>{t(Pr(e,n))}]};var Ir=()=>{let e=!1;try{e=localStorage.getItem("instructionsShown")==="true",e||localStorage.setItem("instructionsShown","true")}catch(t){console.log(t)}return!e};function Dt(){let[e,t]=S(Ir),r=()=>t(!1),[n,s]=F();return a(de,{name:n==="is"?"Lei\xF0beiningar":"Instructions",open:e,onClose:r,headerComponents:a(se,{classNames:"modal-header-button"})},a("hr",null),a(j,null))}var Le=nt({isDaily:!1,statsDidShow:!1,hardMode:!1,gameInProgress:!1});function Pe(){let[e,t]=Ct(()=>De(M.get(),$())),[r,n]=S(null);h(()=>{e.dailyNumber!=null&&n(e)},[e]);let[s,o]=Mt();h(()=>o(e),[e]);let l=v=>{let y=e.dailyNumber!=null;v!==y&&t({type:"load",newState:De(M.get(),v?$():void 0,e)})},[c,u]=S(!1),[f,i]=S(!1),_=H(null),m=()=>u(!1),d=()=>{_.current!=null&&clearTimeout(_.current),i(!0),u(!0)};h(()=>{let v=e.gameState.name!=="playing";if(e.dailyNumber!=null&&v)return _.current=setTimeout(()=>{i(!0),u(!1)},2e3),()=>{_.current!=null&&clearTimeout(_.current)};i(!1),u(!1)},[e.gameState,e.dailyNumber]);let g=v=>{t({type:"setHardMode",hardMode:v})},T={isDaily:e.dailyNumber!=null,setIsDaily:l,openStats:d,statsDidShow:f,hardMode:e.hardMode,gameInProgress:Me(e),setHardMode:g};return a(Le.Provider,{value:T},a("div",{class:"main-container"},a(ae,null),a("hr",null),a(Ae,{wordle:e,dispatchWordle:t,onShowStats:d}),a(yt,null)),a(Wt,{stats:s,open:c,onClose:m,wordle:r}),a(Dt,null))}rt(a(Pe,null),document.body);})();
/* @license Preact
The MIT License (MIT)

Copyright (c) 2015-present Jason Miller

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
