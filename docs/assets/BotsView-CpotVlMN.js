const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FormBot-Z4YS2PEd.js","assets/index-DGPhTeuY.js","assets/index-C-K2x_Dv.css","assets/checkbox-D2Lc53Zo.js","assets/floatlabel-DhLjSzMQ.js","assets/drawer-C6eH49AO.js","assets/textarea-BwyG0Xpt.js","assets/api-CRg06xbw.js","assets/stores-DXPrAjfg.js"])))=>i.map(i=>d[i]);
import{t as e}from"./api-CRg06xbw.js";import{a as t}from"./floatlabel-DhLjSzMQ.js";import{n,t as r}from"./LoadingArea-BMqeoo54.js";import{t as i}from"./checkbox-D2Lc53Zo.js";import{A as a,At as o,B as s,Dt as c,J as l,K as u,Nt as d,Q as f,R as p,U as m,X as h,Y as g,Z as _,a as v,bt as y,dt as b,et as x,ft as S,h as C,ht as w,kt as T,lt as E,m as D,nt as O,p as k,pt as A,q as j,st as M,t as N,tt as P,u as F,vt as I,wt as L,xt as R}from"./index-DGPhTeuY.js";import{t as z}from"./stores-DXPrAjfg.js";var B=k.extend({name:`togglebutton`,style:`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-togglebutton p-component`,{"p-togglebutton-checked":t.active,"p-invalid":t.$invalid,"p-togglebutton-fluid":n.fluid,"p-togglebutton-sm p-inputfield-sm":n.size===`small`,"p-togglebutton-lg p-inputfield-lg":n.size===`large`}]},content:`p-togglebutton-content`,icon:`p-togglebutton-icon`,label:`p-togglebutton-label`}}),V={name:`BaseToggleButton`,extends:t,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:`Yes`},offLabel:{type:String,default:`No`},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:B,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}};function H(e){"@babel/helpers - typeof";return H=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},H(e)}function U(e,t,n){return(t=W(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W(e){var t=G(e,`string`);return H(t)==`symbol`?t:t+``}function G(e,t){if(H(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(H(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var K={name:`ToggleButton`,extends:V,inheritAttrs:!1,emits:[`change`],methods:{getPTOptions:function(e){return(e===`root`?this.ptmi:this.ptm)(e,{context:{active:this.active,disabled:this.disabled}})},onChange:function(e){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,e),this.$emit(`change`,e))},onBlur:function(e){var t,n;(t=(n=this.formField).onBlur)==null||t.call(n,e)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return p(this.onLabel)&&p(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:`\xA0`},dataP:function(){return a(U({checked:this.active,invalid:this.$invalid},this.size,this.size))}},directives:{ripple:F}},q=[`tabindex`,`disabled`,`aria-pressed`,`aria-label`,`aria-labelledby`,`data-p-checked`,`data-p-disabled`,`data-p`],J=[`data-p`];function Y(e,t,n,r,i,a){var s=w(`ripple`);return R((b(),_(`button`,M({type:`button`,class:e.cx(`root`),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.d_value,onClick:t[0]||=function(){return a.onChange&&a.onChange.apply(a,arguments)},onBlur:t[1]||=function(){return a.onBlur&&a.onBlur.apply(a,arguments)}},a.getPTOptions(`root`),{"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"data-p-checked":a.active,"data-p-disabled":e.disabled,"data-p":a.dataP}),[l(`span`,M({class:e.cx(`content`)},a.getPTOptions(`content`),{"data-p":a.dataP}),[A(e.$slots,`default`,{},function(){return[A(e.$slots,`icon`,{value:e.d_value,class:o(e.cx(`icon`))},function(){return[e.onIcon||e.offIcon?(b(),_(`span`,M({key:0,class:[e.cx(`icon`),e.d_value?e.onIcon:e.offIcon]},a.getPTOptions(`icon`)),null,16)):h(``,!0)]}),l(`span`,M({class:e.cx(`label`)},a.getPTOptions(`label`)),d(a.label),17)]})],16,J)],16,q)),[[s]])}K.render=Y;var X=O({__name:`IconBot`,props:{useFor:{default:`active`}},setup(e){let{useFor:t}=c(e);return(e,n)=>(b(),_(`svg`,{viewBox:`0 0 678 678`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,class:o([`mx-auto w-full cursor-pointer`,T(t)===`active`?`text-note group`:`text-error`])},[l(`g`,{class:o([`animate origin-center opacity-40`,T(t)===`active`?`group-hover:text-main group-hover:animate-spin`:`animate-[telescopic_1s_ease-in-out_infinite]`])},[...n[0]||=[f(`<rect x="208.645" y="296.014" width="35.3211" height="35.3211" rx="10" transform="rotate(-45 208.645 296.014)" fill="currentColor"></rect><rect x="175.344" y="262.714" width="35.3211" height="35.3211" rx="10" transform="rotate(-45 175.344 262.714)" fill="currentColor"></rect><rect x="142.044" y="229.413" width="35.3211" height="35.3211" rx="10" transform="rotate(-45 142.044 229.413)" fill="currentColor"></rect><rect x="271.321" y="233.339" width="35.3211" height="35.3211" rx="10" transform="rotate(-45 271.321 233.339)" fill="currentColor"></rect><rect x="238.02" y="200.038" width="35.3211" height="35.3211" rx="10" transform="rotate(-45 238.02 200.038)" fill="currentColor"></rect><rect x="204.72" y="166.737" width="35.3211" height="35.3211" rx="10" transform="rotate(-45 204.72 166.737)" fill="currentColor"></rect><rect x="223.755" y="248.448" width="35.3211" height="35.3211" rx="10" transform="rotate(-45 223.755 248.448)" fill="currentColor"></rect><rect x="190.454" y="215.147" width="35.3211" height="35.3211" rx="10" transform="rotate(-45 190.454 215.147)" fill="currentColor"></rect><rect x="157.153" y="181.847" width="35.3211" height="35.3211" rx="10" transform="rotate(-45 157.153 181.847)" fill="currentColor"></rect><rect x="469.93" y="381.408" width="35.3211" height="35.3211" rx="10" transform="rotate(135 469.93 381.408)" fill="currentColor"></rect><rect x="503.23" y="414.709" width="35.3211" height="35.3211" rx="10" transform="rotate(135 503.23 414.709)" fill="currentColor"></rect><rect x="536.533" y="448.011" width="35.3211" height="35.3211" rx="10" transform="rotate(135 536.533 448.011)" fill="currentColor"></rect><rect x="407.254" y="444.084" width="35.3211" height="35.3211" rx="10" transform="rotate(135 407.254 444.084)" fill="currentColor"></rect><rect x="440.555" y="477.385" width="35.3211" height="35.3211" rx="10" transform="rotate(135 440.555 477.385)" fill="currentColor"></rect><rect x="473.857" y="510.687" width="35.3211" height="35.3211" rx="10" transform="rotate(135 473.857 510.687)" fill="currentColor"></rect><rect x="454.82" y="428.975" width="35.3211" height="35.3211" rx="10" transform="rotate(135 454.82 428.975)" fill="currentColor"></rect><rect x="488.122" y="462.275" width="35.3211" height="35.3211" rx="10" transform="rotate(135 488.122 462.275)" fill="currentColor"></rect><rect x="521.423" y="495.577" width="35.3211" height="35.3211" rx="10" transform="rotate(135 521.423 495.577)" fill="currentColor"></rect><rect x="381.825" y="208.485" width="35.3211" height="35.3211" rx="10" transform="rotate(45 381.825 208.485)" fill="currentColor"></rect><rect x="415.126" y="175.184" width="35.3211" height="35.3211" rx="10" transform="rotate(45 415.126 175.184)" fill="currentColor"></rect><rect x="448.426" y="141.884" width="35.3211" height="35.3211" rx="10" transform="rotate(45 448.426 141.884)" fill="currentColor"></rect><rect x="444.501" y="271.161" width="35.3211" height="35.3211" rx="10" transform="rotate(45 444.501 271.161)" fill="currentColor"></rect><rect x="477.802" y="237.86" width="35.3211" height="35.3211" rx="10" transform="rotate(45 477.802 237.86)" fill="currentColor"></rect><rect x="511.102" y="204.56" width="35.3211" height="35.3211" rx="10" transform="rotate(45 511.102 204.56)" fill="currentColor"></rect><rect x="429.391" y="223.595" width="35.3211" height="35.3211" rx="10" transform="rotate(45 429.391 223.595)" fill="currentColor"></rect><rect x="462.692" y="190.294" width="35.3211" height="35.3211" rx="10" transform="rotate(45 462.692 190.294)" fill="currentColor"></rect><rect x="495.993" y="156.993" width="35.3211" height="35.3211" rx="10" transform="rotate(45 495.993 156.993)" fill="currentColor"></rect><rect x="296.432" y="469.771" width="35.3211" height="35.3211" rx="10" transform="rotate(-135 296.432 469.771)" fill="currentColor"></rect><rect x="263.131" y="503.071" width="35.3211" height="35.3211" rx="10" transform="rotate(-135 263.131 503.071)" fill="currentColor"></rect><rect x="229.829" y="536.373" width="35.3211" height="35.3211" rx="10" transform="rotate(-135 229.829 536.373)" fill="currentColor"></rect><rect x="233.755" y="407.095" width="35.3211" height="35.3211" rx="10" transform="rotate(-135 233.755 407.095)" fill="currentColor"></rect><rect x="200.455" y="440.395" width="35.3211" height="35.3211" rx="10" transform="rotate(-135 200.455 440.395)" fill="currentColor"></rect><rect x="167.153" y="473.697" width="35.3211" height="35.3211" rx="10" transform="rotate(-135 167.153 473.697)" fill="currentColor"></rect><rect x="248.865" y="454.661" width="35.3211" height="35.3211" rx="10" transform="rotate(-135 248.865 454.661)" fill="currentColor"></rect><rect x="215.564" y="487.961" width="35.3211" height="35.3211" rx="10" transform="rotate(-135 215.564 487.961)" fill="currentColor"></rect><rect x="182.263" y="521.263" width="35.3211" height="35.3211" rx="10" transform="rotate(-135 182.263 521.263)" fill="currentColor"></rect>`,36)]],2),l(`g`,{class:o([`animate origin-center`,T(t)===`active`?`group-hover:text-main group-hover:animate-[zoom_1s_ease-in-out]`:`animate-[shake_0.5s_ease-in-out_infinite]`])},[...n[1]||=[l(`path`,{d:`M493 339C493 424.604 423.828 494 338.5 494C253.172 494 184 424.604 184 339C184 253.396 253.172 184 338.5 184C423.828 184 493 253.396 493 339Z`,fill:`white`},null,-1),l(`path`,{d:`M477 339C477 415.768 414.991 478 338.5 478C262.009 478 200 415.768 200 339C200 262.232 262.009 200 338.5 200C414.991 200 477 262.232 477 339Z`,fill:`currentColor`},null,-1),l(`path`,{d:`M304 339C304 355.016 291.016 368 275 368C258.984 368 246 355.016 246 339C246 322.984 258.984 310 275 310C291.016 310 304 322.984 304 339Z`,fill:`white`},null,-1),l(`path`,{d:`M432 339C432 355.016 419.016 368 403 368C386.984 368 374 355.016 374 339C374 322.984 386.984 310 403 310C419.016 310 432 322.984 432 339Z`,fill:`white`},null,-1)]],2)],2))}}),Z={class:`panel sticky top-17 flex h-fit w-fit flex-col`},Q={class:`wrap radius max-h-fit w-full bg-white pt-2!`},$={class:`mb-4 flex flex-wrap items-center gap-x-4 gap-y-2`},ee={key:0},te={key:1,class:`grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8`},ne=[`onClick`],re=[`textContent`],ie=O({__name:`BotsView`,setup(t){let a=P({loader:()=>N(()=>import(`./FormBot-Z4YS2PEd.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8])),loadingComponent:r}),c=z(),f=j(()=>c.userInfo.id),p=D(),O=C(),k=s(),A=L([]),M=async(t=!1)=>{try{let n=await e.BOT.GET_BOT_LIST(f.value,{cache:{override:t}});n.data&&(A.value=n.data.data.bots)}catch(e){let{response:t}=e;p.add({severity:`error`,summary:`資料取得異常`,detail:t.data.message,life:3e3})}},F=L(!1),B=L([]),V=async()=>{try{O.require({message:`你是否確定要刪除你選取 ${B.value.length} 個機器人？`,header:`刪除機器人`,rejectProps:{size:`small`,label:`取消`,severity:`secondary`,outlined:!0},acceptProps:{size:`small`,label:`刪除`,severity:`danger`},accept:async()=>{(await e.BOT.POST_BOT_DELETE({userId:f.value,botId:B.value})).status===200&&(p.add({severity:`success`,summary:`刪除機器人`,detail:`刪除成功`,life:3e3}),M(!0),B.value=[])}})}catch(e){let{response:t}=e;p.add({severity:`error`,summary:`刪除異常`,detail:t.data.message,life:3e3})}},H=L(!1);return I(H,e=>{e&&M(!0)}),E(()=>{M()}),(e,t)=>{let r=w(`tooltip`);return b(),g(n,{"root-class":`flex gap-4`},{default:y(()=>[l(`div`,Z,[x(T(a),{"use-for":`add`,endEdit:H.value,"onUpdate:endEdit":t[0]||=e=>H.value=e},null,8,[`endEdit`])]),l(`section`,Q,[l(`div`,$,[x(T(K),{onLabel:`解除刪除模式`,offLabel:`開啟刪除模式`,onIcon:`bi bi-lock`,offIcon:`bi bi-unlock`,size:`small`,class:`max-h-8.5! whitespace-nowrap`,pt:{root:({context:e})=>({class:e.active?`bg-error! border-0!`:`bg-secondaryLight/30!`}),content:({context:e})=>({class:[`px-2!`,e.active?`text-error!`:``]}),icon:({context:e})=>({class:e.active?`text-error!`:``})},modelValue:F.value,"onUpdate:modelValue":t[1]||=e=>F.value=e},null,8,[`pt`,`modelValue`]),F.value?(b(),g(T(v),{key:0,icon:`bi bi-trash`,label:`刪除機器人`,severity:`danger`,size:`small`,disabled:B.value.length<1,onClick:V},null,8,[`disabled`])):h(``,!0)]),A.value.length<1?(b(),_(`p`,ee,`目前無已設定好的機器人`)):(b(),_(`div`,te,[(b(!0),_(u,null,S(A.value,({bot_id:e,name:n})=>(b(),_(`div`,{key:e,class:`radius relative flex flex-col items-center justify-center border border-(--p-form-field-border-color)/25 p-2`},[l(`div`,{class:o([`absolute top-2`,F.value?`right-4`:`right-2`])},[F.value?(b(),g(T(i),{key:0,pt:{box:({context:e})=>({class:{"bg-error! border-error!":e.checked,"bg-transparent! border-error!":!e.checked}})},value:e,modelValue:B.value,"onUpdate:modelValue":t[2]||=e=>B.value=e},null,8,[`pt`,`value`,`modelValue`])):(b(),g(T(a),{key:1,"use-for":`edit`,"bot-name":n,"edit-target-id":e,endEdit:H.value,"onUpdate:endEdit":t[3]||=e=>H.value=e},null,8,[`bot-name`,`edit-target-id`,`endEdit`]))],2),x(m,{name:`slideDown`,mode:`out-in`},{default:y(()=>[F.value?(b(),g(X,{key:0,"use-for":`delete`})):R((b(),_(`button`,{key:1,type:`button`,onClick:t=>T(k).push({name:`ChatBotChat`,query:{botId:e,name:n}})},[x(X,{"use-for":`active`})],8,ne)),[[r,`啟動 ${n}`,void 0,{top:!0}]])]),_:2},1024),l(`p`,{class:`truncate text-center text-sm font-medium whitespace-nowrap`,textContent:d(n)},null,8,re)]))),128))]))])]),_:1})}}});export{ie as default};