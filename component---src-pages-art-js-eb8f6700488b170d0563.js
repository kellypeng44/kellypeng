/*! For license information please see component---src-pages-art-js-eb8f6700488b170d0563.js.LICENSE.txt */
"use strict";(self.webpackChunkfirst_gatsby=self.webpackChunkfirst_gatsby||[]).push([[600],{687:function(t,e,o){o.d(e,{Z:function(){return g}});var i=o(3366),n=o(7462),a=o(9408),r=o(5505),c=o(7294),s=o(8348),l=o(2058),u=o(8416);function m(t){return(0,u.Z)("MuiImageList",t)}(0,o(2194).Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);var p=o(655),d=o(5893),f=["children","className","cols","component","rowHeight","gap","style","variant"],v=(0,s.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:function(t,e){var o=t.ownerState;return[e.root,e[o.variant]]}})((function(t){var e=t.ownerState;return(0,n.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===e.variant&&{display:"block"})})),g=c.forwardRef((function(t,e){var o=(0,l.Z)({props:t,name:"MuiImageList"}),s=o.children,u=o.className,g=o.cols,h=void 0===g?2:g,Z=o.component,w=void 0===Z?"ul":Z,y=o.rowHeight,I=void 0===y?"auto":y,b=o.gap,x=void 0===b?4:b,S=o.style,P=o.variant,L=void 0===P?"standard":P,R=(0,i.Z)(o,f),j=c.useMemo((function(){return{rowHeight:I,gap:x,variant:L}}),[I,x,L]);c.useEffect((function(){0}),[]);var M="masonry"===L?(0,n.Z)({columnCount:h,columnGap:x},S):(0,n.Z)({gridTemplateColumns:"repeat(".concat(h,", 1fr)"),gap:x},S),W=(0,n.Z)({},o,{component:w,gap:x,rowHeight:I,variant:L}),k=function(t){var e=t.classes,o={root:["root",t.variant]};return(0,a.Z)(o,m,e)}(W);return(0,d.jsx)(v,(0,n.Z)({as:w,className:(0,r.Z)(k.root,k[L],u),ref:e,style:M,ownerState:W},R,{children:(0,d.jsx)(p.Z.Provider,{value:j,children:s})}))}))},655:function(t,e,o){var i=o(7294).createContext({});e.Z=i},6904:function(t,e,o){o.d(e,{Z:function(){return w}});var i=o(4942),n=o(3366),a=o(7462),r=o(9408),c=o(5505),s=o(7294),l=(o(4162),o(655)),u=o(8348),m=o(2058),p=o(3128),d=o(8416);function f(t){return(0,d.Z)("MuiImageListItem",t)}var v=(0,o(2194).Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),g=o(5893),h=["children","className","cols","component","rows","style"],Z=(0,u.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:function(t,e){var o=t.ownerState;return[(0,i.Z)({},"& .".concat(v.img),e.img),e.root,e[o.variant]]}})((function(t){var e=t.ownerState;return(0,a.Z)({display:"inline-block",position:"relative",lineHeight:0},"standard"===e.variant&&{display:"flex",flexDirection:"column"},"woven"===e.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},(0,i.Z)({},"& .".concat(v.img),(0,a.Z)({objectFit:"cover",width:"100%",height:"100%"},"standard"===e.variant&&{height:"auto",flexGrow:1})))})),w=s.forwardRef((function(t,e){var o=(0,m.Z)({props:t,name:"MuiImageListItem"}),i=o.children,u=o.className,d=o.cols,v=void 0===d?1:d,w=o.component,y=void 0===w?"li":w,I=o.rows,b=void 0===I?1:I,x=o.style,S=(0,n.Z)(o,h),P=s.useContext(l.Z),L=P.rowHeight,R=void 0===L?"auto":L,j=P.gap,M=P.variant,W="auto";"woven"===M?W=void 0:"auto"!==R&&(W=R*b+j*(b-1));var k=(0,a.Z)({},o,{cols:v,component:y,gap:j,rowHeight:R,rows:b,variant:M}),N=function(t){var e=t.classes,o={root:["root",t.variant],img:["img"]};return(0,r.Z)(o,f,e)}(k);return(0,g.jsx)(Z,(0,a.Z)({as:y,className:(0,c.Z)(N.root,N[M],u),ref:e,style:(0,a.Z)({height:W,gridColumnEnd:"masonry"!==M?"span ".concat(v):void 0,gridRowEnd:"masonry"!==M?"span ".concat(b):void 0,marginBottom:"masonry"===M?j:void 0},x),ownerState:k},S,{children:s.Children.map(i,(function(t){return s.isValidElement(t)?"img"===t.type||(0,p.Z)(t,["Image"])?s.cloneElement(t,{className:(0,c.Z)(N.img,t.props.className)}):t:null}))}))}))},2539:function(t,e,o){o.d(e,{Z:function(){return y}});var i=o(3366),n=o(7462),a=o(9408),r=o(5505),c=o(7294),s=o(8348),l=o(2058),u=o(9240),m=o(8416);function p(t){return(0,m.Z)("MuiImageListItemBar",t)}(0,o(2194).Z)("MuiImageListItemBar",["root","positionBottom","positionTop","positionBelow","titleWrap","titleWrapBottom","titleWrapTop","titleWrapBelow","titleWrapActionPosLeft","titleWrapActionPosRight","title","subtitle","actionIcon","actionIconActionPosLeft","actionIconActionPosRight"]);var d=o(5893),f=["actionIcon","actionPosition","className","subtitle","title","position"],v=(0,s.ZP)("div",{name:"MuiImageListItemBar",slot:"Root",overridesResolver:function(t,e){var o=t.ownerState;return[e.root,e["position".concat((0,u.Z)(o.position))]]}})((function(t){var e=t.theme,o=t.ownerState;return(0,n.Z)({position:"absolute",left:0,right:0,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:e.typography.fontFamily},"bottom"===o.position&&{bottom:0},"top"===o.position&&{top:0},"below"===o.position&&{position:"relative",background:"transparent",alignItems:"normal"})})),g=(0,s.ZP)("div",{name:"MuiImageListItemBar",slot:"TitleWrap",overridesResolver:function(t,e){var o=t.ownerState;return[e.titleWrap,e["titleWrap".concat((0,u.Z)(o.position))],o.actionIcon&&e["titleWrapActionPos".concat((0,u.Z)(o.actionPosition))]]}})((function(t){var e=t.theme,o=t.ownerState;return(0,n.Z)({flexGrow:1,padding:"12px 16px",color:e.palette.common.white,overflow:"hidden"},"below"===o.position&&{padding:"6px 0 12px",color:"inherit"},o.actionIcon&&"left"===o.actionPosition&&{paddingLeft:0},o.actionIcon&&"right"===o.actionPosition&&{paddingRight:0})})),h=(0,s.ZP)("div",{name:"MuiImageListItemBar",slot:"Title",overridesResolver:function(t,e){return e.title}})((function(t){return{fontSize:t.theme.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}})),Z=(0,s.ZP)("div",{name:"MuiImageListItemBar",slot:"Subtitle",overridesResolver:function(t,e){return e.subtitle}})((function(t){return{fontSize:t.theme.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}})),w=(0,s.ZP)("div",{name:"MuiImageListItemBar",slot:"ActionIcon",overridesResolver:function(t,e){var o=t.ownerState;return[e.actionIcon,e["actionIconActionPos".concat((0,u.Z)(o.actionPosition))]]}})((function(t){var e=t.ownerState;return(0,n.Z)({},"left"===e.actionPosition&&{order:-1})})),y=c.forwardRef((function(t,e){var o=(0,l.Z)({props:t,name:"MuiImageListItemBar"}),c=o.actionIcon,s=o.actionPosition,m=void 0===s?"right":s,y=o.className,I=o.subtitle,b=o.title,x=o.position,S=void 0===x?"bottom":x,P=(0,i.Z)(o,f),L=(0,n.Z)({},o,{position:S,actionPosition:m}),R=function(t){var e=t.classes,o=t.position,i=t.actionIcon,n=t.actionPosition,r={root:["root","position".concat((0,u.Z)(o))],titleWrap:["titleWrap","titleWrap".concat((0,u.Z)(o)),i&&"titleWrapActionPos".concat((0,u.Z)(n))],title:["title"],subtitle:["subtitle"],actionIcon:["actionIcon","actionIconActionPos".concat((0,u.Z)(n))]};return(0,a.Z)(r,p,e)}(L);return(0,d.jsxs)(v,(0,n.Z)({ownerState:L,className:(0,r.Z)(R.root,y),ref:e},P,{children:[(0,d.jsxs)(g,{ownerState:L,className:R.titleWrap,children:[(0,d.jsx)(h,{className:R.title,children:b}),I?(0,d.jsx)(Z,{className:R.subtitle,children:I}):null]}),c?(0,d.jsx)(w,{ownerState:L,className:R.actionIcon,children:c}):null]}))}))},4817:function(t,e){var o=60103,i=60106,n=60107,a=60108,r=60114,c=60109,s=60110,l=60112,u=60113,m=60120,p=60115,d=60116,f=60121,v=60122,g=60117,h=60129,Z=60131;if("function"==typeof Symbol&&Symbol.for){var w=Symbol.for;o=w("react.element"),i=w("react.portal"),n=w("react.fragment"),a=w("react.strict_mode"),r=w("react.profiler"),c=w("react.provider"),s=w("react.context"),l=w("react.forward_ref"),u=w("react.suspense"),m=w("react.suspense_list"),p=w("react.memo"),d=w("react.lazy"),f=w("react.block"),v=w("react.server.block"),g=w("react.fundamental"),h=w("react.debug_trace_mode"),Z=w("react.legacy_hidden")}function y(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case n:case r:case a:case u:case m:return t;default:switch(t=t&&t.$$typeof){case s:case l:case d:case p:case c:return t;default:return e}}case i:return e}}}},4162:function(t,e,o){o(4817)},8765:function(t,e,o){o.r(e);var i=o(7294),n=o(4320),a=o(687),r=o(6904),c=o(2539),s=o(9308),l=o(6810),u=[{title:"2017 | Oil on canvas 66cmx41cm",img:"https://res.cloudinary.com/dshjjlnbk/image/upload/v1643772512/portfolio/2017_oilpainting_jhvyzv.jpg"},{title:"2020 | Photoshop",img:"https://res.cloudinary.com/dshjjlnbk/image/upload/v1643772196/portfolio/2020_photoshop_x20s86.jpg"}];e.default=function(){return i.createElement(l.Z,{pageTitle:"Artwork"},i.createElement(n.ZP,{container:!0,justifyContent:"center",sx:{paddingLeft:"20px",paddingRight:"20px"}},i.createElement(a.Z,{sx:{width:800},cols:2,rowHeight:"auto",gap:20},u.map((function(t){return i.createElement(r.Z,{key:t.img},i.createElement("img",{src:t.img+"?w=164&h=164&fit=crop&auto=format",srcSet:t.img+"?w=164&h=164&fit=crop&auto=format&dpr=2 2x",alt:t.title,loading:"lazy"}),i.createElement(c.Z,{title:i.createElement(s.Z,{sx:{fontFamily:"Karla",fontSize:"20px"}},t.title),position:"below"}))})))))}}}]);
//# sourceMappingURL=component---src-pages-art-js-eb8f6700488b170d0563.js.map