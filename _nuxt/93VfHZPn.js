import{L as v,_,t as r,v as d,x as e,M as w,A as b,N as y,z as u,O as x,T as I,r as p,P as $,y as c,o as k,Q as C,R as M,S as j,U as h}from"./Bw-Fn_IL.js";const B=v("/assets/component-one/Image-01.jpg"),L=v("/assets/component-one/Image-02.jpg"),U=v("/assets/component-one/Image-03.jpg"),T={},A={class:"w-6 h-6 fill-current",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},E=e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.414 10l5.293-5.293a1 1 0 10-1.414-1.414L12 8.586l-5.293-5.293a1 1 0 00-1.414 1.414L10.586 10l-5.293 5.293a1 1 0 101.414 1.414L12 11.414l5.293 5.293a1 1 0 101.414-1.414L13.414 10z"},null,-1),S=[E];function z(m,a){return r(),d("svg",A,S)}const V=_(T,[["render",z]]),N={key:0,class:"modal-parent fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"},O={class:"modal-container"},F={class:"modal-content"},G={__name:"ImageViewModal",props:{visible:{type:Boolean,required:!0}},emits:["update:visible"],setup(m,{emit:a}){const i=a,o=()=>{i("update:visible",!1)};return(n,l)=>(r(),w(I,{name:"modal"},{default:b(()=>[m.visible?(r(),d("div",N,[e("div",O,[e("div",F,[y(n.$slots,"default",{},void 0,!0)]),e("button",{onClick:o,class:"modal-close-btn"},[u(V)])])])):x("",!0)]),_:3}))}},R=_(G,[["__scopeId","data-v-1bd86b09"]]),q={class:"container mx-auto mt-5"},D={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"},P={class:"w-full cursor-pointer animate__animated animate__fadeInLeft"},Q={class:"w-full md:col-span-1 flex flex-col"},W={class:"flex-1 mb-4 cursor-pointer animate__animated animate__fadeInDown"},Y={class:"flex-1 cursor-pointer animate__animated animate__fadeInUp"},H={class:"w-full lg:col-span-1 md:col-span-2"},J={class:"main-content flex flex-col justify-center animate__animated animate__zoomIn"},K={class:"title font-family-light"},X={class:"content font-family-light"},Z={class:"sub-content flex flex-col justify-center animate__animated animate__zoomIn"},ee={class:"title"},te={class:"content"},se=["src"],oe={__name:"ComponentOne",setup(m){const a=p(!1),i=p(""),o=$({main_content:{title:"Answer Your Body's Needs",content:"The way ingredients are sourced affect the way we nourish our bodies. Author Mark Schatzer believes our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body needs."},sub_content:{title:"Be Mindful",content:"Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating."}}),n=l=>{i.value=l,a.value=!0};return(l,t)=>(r(),d("div",q,[e("div",D,[e("div",P,[e("img",{src:B,alt:"Image 1",class:"w-full h-full object-cover",onClick:t[0]||(t[0]=s=>n("/assets/component-one/Image-01@2x.jpg"))})]),e("div",Q,[e("div",W,[e("img",{src:L,alt:"Image 2",class:"w-full h-full object-cover",onClick:t[1]||(t[1]=s=>n("/assets/component-one/Image-02@2x.jpg"))})]),e("div",Y,[e("img",{src:U,alt:"Image 3",class:"w-full h-full object-cover",onClick:t[2]||(t[2]=s=>n("/assets/component-one/Image-03@2x.jpg"))})])]),e("div",H,[e("div",J,[e("h2",K,c(o.main_content.title.toLocaleUpperCase()),1),e("p",X,c(o.main_content.content),1)]),e("div",Z,[e("h2",ee,c(o.sub_content.title.toLocaleUpperCase()),1),e("p",te,c(o.sub_content.content),1)])])]),u(R,{visible:a.value,"onUpdate:visible":t[3]||(t[3]=s=>a.value=s)},{default:b(()=>[e("img",{src:i.value,alt:"Selected Image",class:"w-full"},null,8,se)]),_:1},8,["visible"])]))}},ne=_(oe,[["__scopeId","data-v-f4a6c865"]]),ae={class:"container mx-auto mt-20 mb-40"},ie={class:"w-full text-center mb-20"},le={class:"title font-family-light"},ce={class:"w-full image-container mb-4 border-b-4 border-red-600 latest-item"},re=["src","alt"],de={class:"item-title mt-4 w-full text-left font-family-regular font-semibold"},me={class:"item-description mt-2 mb-5 w-full text-left font-family-light"},_e=["onClick"],ue="All The Latest From AEG",pe="Read More",fe={__name:"ComponentTwo",setup(m){const a=[{imageUrl:"/assets/component-two/Image-01.jpg",title:"Summer Lunch Menu By Mark Best",description:"AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home."},{imageUrl:"/assets/component-two/Image-02.jpg",title:"A Traditional Christmas Eve, Mark Best Style",description:"One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests."},{imageUrl:"/assets/component-two/Image-03.jpg",title:"Taking Taste Further",description:"This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food."}],i=l=>{console.log(l)},o=p(null),n=p(!1);return k(()=>{const l={root:null,rootMargin:"0px",threshold:.25},t=new IntersectionObserver(f=>{f.forEach(g=>{g.isIntersecting&&(s(),t.unobserve(g.target))})},l);t.observe(o.value);const s=()=>{n.value=!0}}),(l,t)=>(r(),d("div",ae,[e("div",ie,[e("h2",le,c(ue.toLocaleUpperCase()),1)]),e("div",{ref_key:"animatedElement",ref:o,class:j(["grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xs:gap-10 sm:gap-10 gap-5",{animate__animated:h(n),animate__fadeInUp:h(n),hide:!h(n)}])},[(r(),d(C,null,M(a,(s,f)=>e("div",{key:f,class:"flex flex-col items-center"},[e("div",ce,[e("img",{src:s.imageUrl,alt:s.title,class:"card-image w-full h-auto md:h-80 object-cover"},null,8,re)]),e("div",null,[e("h2",de,c(s.title),1),e("p",me,c(s.description),1),e("a",{class:"pb-2 text-white border-b-2 font-semibold border-red-600",onClick:g=>i(s)},c(pe.toLocaleUpperCase()),9,_e)])])),64))],2)]))}},ge=_(fe,[["__scopeId","data-v-80c89f0f"]]),he={},ve={class:"container mx-auto sm:px-10"};function be(m,a){const i=ne,o=ge;return r(),d("div",ve,[u(i,{class:"pt-40"}),u(o,{class:"pt-40"})])}const ye=_(he,[["render",be]]);export{ye as default};