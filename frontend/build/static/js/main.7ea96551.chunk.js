(this["webpackJsonp@vidalii/admin-template"]=this["webpackJsonp@vidalii/admin-template"]||[]).push([[0],{158:function(e,t,n){var a={"./core/routes/Default.route.tsx":159,"./core/session/myAccount.route.tsx":160,"./core/session/user.edit.route.tsx":178,"./core/session/users.route.tsx":187,"./crm/contacts.edit.route.tsx":180};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=158},159:function(e,t,n){"use strict";n.r(t);var a=n(40),r=n.n(a),i=n(2),c={name:"/",parent:null,sidebar:!1,Icon:r.a,Component:function(){return Object(i.jsx)("div",{children:"My Default Page"})}};t.default=c},160:function(e,t,n){"use strict";n.r(t);n(0);var a=n(116),r=n.n(a),i=n(65),c=n(2),o=n(166),s=o.keys().map((function(e){return o(e).default})),l={name:"MyAccount",parent:"System",sidebar:!0,Icon:r.a,Component:function(){return Object(c.jsx)(i.a,{breadcrum:l,tabs:s})}};t.default=l},166:function(e,t,n){var a={"./core/session/myAccount.route.tab.main.tsx":167};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=166},167:function(e,t,n){"use strict";n.r(t);n(0);var a=n(23),r=n(66),i=n(33),c=n(64),o=n.n(c),s=n(2),l=Symbol();var u={title:"_Main",Component:function(e){var t,n=e.mutation,c=Object(i.b)(),u=c.control,d=c.getValues;n.set(l,(function(){var e=o.a.inspect(d()).replaceAll("'",'"');return"#graphql\n      userUpdateMyAccount(user:".concat(e,"){\n        _id\n      }\n      ")}));var j=Object(a.d)("#graphql\nquery GetMyUser{\n  myUser:userGetMyUser{\n    name\n    lastname\n    email\n    phone    \n    groups\n    password\n  }\n}\n"),b=j.loading,p=j.error,m=j.data;return b?"Loading...":p?"Error:"+JSON.stringify(p):(null===m||void 0===m||null===(t=m.myUser)||void 0===t?void 0:t.name)?Object(s.jsx)(r.a,{data:m.myUser,config:{name:{type:"string"},lastname:{type:"string"},email:{alias:"email(username)",type:"email"},phone:{type:"number"}},control:u}):"Its required to close your session first."}};t.default=u},178:function(e,t,n){"use strict";n.r(t);n(0);var a=n(40),r=n.n(a),i=n(65),c=n(2),o={name:"User",parent:"System",paramaters:"/:_id",sidebar:!1,Icon:r.a,Component:function(){return Object(c.jsx)(i.a,{breadcrum:o,tabs:l})}};t.default=o;var s=n(179),l=s.keys().map((function(e){return s(e).default}))},179:function(e,t,n){var a={"./core/session/user.edit.route.tab.main.tsx":188};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=179},180:function(e,t,n){"use strict";n.r(t);n(0);var a=n(40),r=n.n(a),i=n(65),c=n(2),o={name:"ContactEdit",parent:"CRM",sidebar:!1,Icon:r.a,Component:function(){return Object(c.jsx)(i.a,{breadcrum:o,tabs:l})}};t.default=o;var s=n(181),l=s.keys().map((function(e){return s(e).default}))},181:function(e,t,n){var a={"./crm/contacts.edit.route.tab.main.tsx":182};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=181},182:function(e,t,n){"use strict";n.r(t);n(0);var a=n(33),r=n(64),i=n.n(r),c=n(23),o=n(15),s=n(66),l=n(2),u=Symbol();var d={title:"_Main",Component:function(e){var t=e.mutation,n=Object(a.b)(),r=n.control,d=n.getValues,j=Object(o.h)(),b=Object(c.d)('#graphql\n {\n    user:userFind(operators:"'.concat(j._id,'") {\n    _id\n    _id_company\n\n  }\n}\n  ')),p=b.loading,m=b.error,h=b.data;return t.set(u,(function(){var e=i.a.inspect(d()).replaceAll("'",'"');return"#graphql\n      userUpdate(\n        user: ".concat(e,',\n        _id:"').concat(j._id,'"){\n        _id\n      }\n      ')})),p?"loading...":m?"Error:"+JSON.stringify(m):Object(l.jsx)(s.a,{data:h.user[0],config:{name:{alias:"Name",type:"string"},lastname:{alias:"LastName",type:"string"},email:{type:"email"}},control:r})}};t.default=d},183:function(e,t,n){var a={"./core/session/Admin.TopBar.Menu.session.context.tsx":184};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=183},184:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n(0),i=n.n(r),c=n(40),o=n.n(c),s=n(69),l=n(126),u=n(194),d=n(87),j=n(99),b=n(85),p=n(2);function m(){var e=i.a.useContext(b.a).closeSession,t=i.a.useState(null),n=Object(a.a)(t,2),r=n[0],c=n[1],s=function(){c(null)};return Object(p.jsxs)("div",{children:[Object(p.jsx)(l.a,{"aria-label":"My Account",onClick:function(e){c(e.currentTarget)},color:"inherit",children:Object(p.jsx)(o.a,{})}),Object(p.jsxs)(j.a,{id:"myaccount-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:s,children:[Object(p.jsx)(d.a,{onClick:s,children:"My account"}),Object(p.jsx)(d.a,{onClick:function(){e()},children:"Logout"})]})]})}t.default=Object(s.b)({desktopShown:Object(p.jsx)(m,{}),desktopHidden:function(e){return Object(p.jsx)(d.a,{onClick:e,children:"Title User"})},mobil:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(l.a,{"aria-label":"My Account",color:"inherit",children:Object(p.jsx)(u.a,{badgeContent:4,color:"secondary",children:Object(p.jsx)(o.a,{})})}),Object(p.jsx)("p",{children:"My Account"})]})})},186:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(11),c=n.n(i),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,286)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},s=n(248),l=n(273),u=n(44),d=n(123),j=Object(d.a)({}),b=n(85),p=n(23),m=n(2),h=new p.b({url:"/graphql"});c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(u.a,{basename:"/app",children:Object(m.jsx)(p.a.Provider,{value:h,children:Object(m.jsxs)(l.a,{theme:j,children:[Object(m.jsx)(s.a,{}),Object(m.jsx)(b.b,{})]})})})}),document.getElementById("root")),o()},187:function(e,t,n){"use strict";n.r(t);var a=n(59),r=n(0),i=n.n(r),c=n(40),o=n.n(c),s=n(23),l=n(14),u=n(257),d=n(278),j=n(245),b=n(70),p=n(246),m=n(280),h=n(262),O=n(266),f=n(265),x=n(261),g=n(263),v=n(264),y=n(118),k=n.n(y),w=n(86),C=n(279),N=n(44),S=n(275),M=n(256),_=n(33),L=n(2),U=Object(p.a)({table:{}});function I(e){var t=U(),n=Object.entries(e.config),a=Object(_.b)(),r=(a.control,a.getValues,function(e){"Enter"===e.key&&console.log("enter pressed")});return Object(L.jsxs)(u.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",spacing:3,children:[Object(L.jsx)(u.a,{item:!0,children:Object(L.jsx)(S.a,{id:"filled-basic",label:"Query"})}),Object(L.jsx)(u.a,{item:!0,children:Object(L.jsx)(M.a,{variant:"contained",color:"primary",children:"Search"})}),Object(L.jsx)(x.a,{children:Object(L.jsxs)(h.a,{className:t.table,size:"small","aria-label":"dense table",children:[Object(L.jsx)(g.a,{children:Object(L.jsxs)(v.a,{children:[Object(L.jsx)(f.a,{align:"left"},0),n.map((function(e,t){var n=Object(l.a)(e,2),a=n[0],i=n[1];return Object(L.jsx)(f.a,{align:"left",children:!0===(null===i||void 0===i?void 0:i.search)?Object(L.jsx)(S.a,{label:(null===i||void 0===i?void 0:i.alias)?i.alias:a,onKeyDown:r}):(null===i||void 0===i?void 0:i.alias)?i.alias:a},t+1)}))]})}),Object(L.jsx)(O.a,{children:e.data.map((function(t,a){return Object(L.jsxs)(v.a,{children:[Object(L.jsx)(f.a,{align:"left",children:Object(L.jsx)(C.a,{title:"Open",children:Object(L.jsx)(N.b,{to:e.open.url+"/".concat(e.open.parameters.map((function(e){return t[e]})).join("/")),children:Object(L.jsx)(k.a,{style:{color:w.a[300]}})})})},a),n.map((function(e,n){var a=Object(l.a)(e,2),r=a[0];a[1];return Object(L.jsx)(f.a,{align:"left",children:t[r]},n)}))]},a)}))})]})}),Object(L.jsx)(u.a,{item:!0,children:"Prev"}),Object(L.jsx)(u.a,{item:!0,children:"Next"})]})}var E=n(125),F=Object(p.a)((function(e){return Object(m.a)({paper:{padding:e.spacing(1),textAlign:"left",color:e.palette.text.secondary},link:{display:"flex"},icon:{marginRight:e.spacing(.5),width:20,height:20}})}));function D(e){var t=i.a.useState(),n=Object(l.a)(t,2),a=(n[0],n[1],F());return Object(L.jsx)(E.a,{className:a.paper,children:Object(L.jsxs)(u.a,{container:!0,children:[Object(L.jsx)(u.a,{item:!0,xs:12,children:Object(L.jsxs)(d.a,{"aria-label":"breadcrumb",children:[null!==(null===e||void 0===e?void 0:e.parent)?Object(L.jsx)(j.a,{color:"inherit",href:"#",className:a.link,children:e.parent}):Object(L.jsx)(j.a,{color:"inherit",href:"#",className:a.link,children:"/"}),Object(L.jsxs)(b.a,{color:"textPrimary",className:a.link,children:[Object(L.jsx)(e.Icon,{className:a.icon}),e.name]})]})}),Object(L.jsx)(u.a,{item:!0,xs:12,children:Object(L.jsx)(I,{config:e.table.config,data:e.table.data,open:e.table.open})})]})})}var q={name:"Users",parent:"System",sidebar:!0,Icon:o.a,Component:function(){var e=Object(s.d)("#graphql\nquery Users{\n    users:userFind {\n      _id\n      name\n      lastname\n      email\n      phone\n      groups      \n    }\n  }"),t=e.loading,n=e.error,r=e.data;if(t)return"Loading...";if(n)return"Error:"+JSON.stringify(n);var i={Icon:q.Icon,name:q.name,parent:q.parent,table:{config:{_id:{type:"string",search:!0},name:{type:"string",search:!0},lastname:{type:"string",search:!0},email:{type:"email",search:!0},phone:{type:"number",search:!0},groups:{type:"number"}},data:r.users,open:{url:"/System.User",parameters:["_id"]}}};return Object(L.jsx)(D,Object(a.a)({},i))}};t.default=q},188:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n.n(a),i=n(17),c=(n(0),n(33)),o=n(23),s=n(15),l=n(66),u=n(64),d=n.n(u);var j=n(2),b=Symbol();var p={title:"_Main",Component:function(e){var t=e.mutation,n=Object(c.b)(),a=n.control,u=n.getValues,p=Object(s.h)(),m=Object(o.d)('#graphql\n {\n    user:userFind(operators:"'.concat(p._id,'") {\n    _id\n    name\n    lastname\n    email\n    phone\n    groups(selectFormat:true)\n  }\n  groups:groupList(selectFormat:true)\n}\n  ')),h=m.loading,O=m.error,f=m.data;if(t.set(b,(function(){var e=u();e.groups=e.groups.map((function(e){return e.value}));var t,n=(t=u(),d.a.inspect(t).replaceAll("'",'"'));return"#graphql\n      userUpdate(\n        user: ".concat(n,',\n        _id:"').concat(p._id,'"){\n        _id\n      }\n      ')})),h)return"loading...";if(O)return JSON.stringify(O);if(!(null===f||void 0===f?void 0:f.user[0]))return"User not found";var x={name:{alias:"Name",type:"string"},lastname:{alias:"LastName",type:"string"},email:{type:"email"},groups:{type:"autocomplete",autoComplete:{isMulti:!0,loadOptions:function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.groups.filter((function(e){return e.label.toLowerCase().includes(t.toLowerCase())})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}};return Object(j.jsx)(l.a,{data:f.user[0],config:x,control:a})}};t.default=p},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var a=n(0),r=n.n(a),i=n(13),c=n.n(i),o=n(17),s=n(246),l=n(280),u=n(274),d=n(278),j=n(245),b=n(70),p=n(256),m=n(23),h=n(15),O=n(2),f=Object(s.a)((function(e){return Object(l.a)({root:{flexGrow:1},paper:{padding:e.spacing(1),textAlign:"left",color:e.palette.text.secondary},link:{display:"flex"},icon:{marginRight:e.spacing(.5),width:20,height:20},button:{marginRight:e.spacing(.5)}})}));function x(e){var t=e.breadcrum,n=e.gql,a=f(),i=r.a.useContext(m.a),s=Object(h.g)().pathname.split("/"),l=(s[0]+"_"+s[1]).replace(".","_"),x=function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Array.from(n.mutation.values()).map((function(e){return e()})).join(" "),t="mutation ".concat(l,"{ ").concat(t," }"),console.log({query:t}),e.next=5,i.request({query:t});case 5:e.sent;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(u.a,{m:1,children:Object(O.jsxs)(d.a,{"aria-label":"breadcrumb",children:[null!==(null===t||void 0===t?void 0:t.parent)?Object(O.jsx)(j.a,{color:"inherit",href:"#",className:a.link,children:t.parent}):Object(O.jsx)(j.a,{color:"inherit",href:"#",className:a.link,children:"/"}),Object(O.jsxs)(b.a,{color:"textPrimary",className:a.link,children:[Object(O.jsx)(t.Icon,{className:a.icon}),t.name]})]})}),Object(O.jsxs)(u.a,{m:1,children:[Object(O.jsx)(p.a,{onClick:x,variant:"outlined",color:"primary",className:a.button,children:"Save"}),Object(O.jsx)(p.a,{color:"secondary",className:a.button,children:"Discard"})]})]})}var g=n(14),v=n(59),y=n(124),k=n(260),w=n(276),C=n(259);function N(e){var t=e.children,n=e.value,a=e.index,r=Object(y.a)(e,["children","value","index"]);return Object(O.jsx)("div",Object(v.a)(Object(v.a)({role:"tabpanel",hidden:n!==a,id:"scrollable-auto-tabpanel-".concat(a),"aria-labelledby":"scrollable-auto-tab-".concat(a)},r),{},{children:n===a&&Object(O.jsx)(u.a,{p:3,children:Object(O.jsx)(b.a,{children:t})})}))}var S=Object(s.a)((function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}}));function M(e){var t=S(),n=r.a.useState(0),i=Object(g.a)(n,2),c=i[0],o=i[1],s=e.tabs.sort((function(e,t){return e.title>t.title?1:e.title===t.title?0:-1})).map((function(e,t){return Object(a.createElement)(C.a,Object(v.a)(Object(v.a)({label:e.title},function(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}(t)),{},{key:t}))})),l=e.tabs.map((function(t,n){return Object(O.jsx)(N,{value:c,index:n,children:Object(O.jsx)(t.Component,{mutation:e.mutation},n)},n)}));return Object(O.jsxs)("div",{className:t.root,children:[Object(O.jsx)(k.a,{position:"static",color:"default",children:Object(O.jsx)(w.a,{value:c,onChange:function(e,t){o(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example",children:s})}),l]})}var _=n(125),L=n(257),U=Object(s.a)((function(e){return Object(l.a)({root:{flexGrow:1},paper:{padding:e.spacing(1),textAlign:"left",color:e.palette.text.secondary},link:{display:"flex"},icon:{marginRight:e.spacing(.5),width:20,height:20},button:{marginRight:e.spacing(.5)}})}));function I(e){var t=U(),n=new Map;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:t.root,children:Object(O.jsx)(L.a,{container:!0,children:Object(O.jsx)(L.a,{item:!0,xs:12,children:Object(O.jsx)(_.a,{className:t.paper,children:Object(O.jsxs)(L.a,{container:!0,children:[Object(O.jsx)(L.a,{item:!0,xs:2,children:Object(O.jsx)(x,{breadcrum:e.breadcrum,gql:{mutation:n}})}),Object(O.jsx)(L.a,{item:!0,xs:10,children:"TODO, require.context other actions like email"})]})})})})}),Object(O.jsx)(M,{tabs:e.tabs,mutation:n})]})}},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(14),r=n(250),i=n(254),c=n(249),o=n(284),s=n(246),l=n(280),u=n(33),d=(n(0),n(122)),j=n(2),b={};function p(e){return Object(j.jsx)(d.a,{styles:b,defaultValue:e.defaultValue,onChange:e.onChange,placeholder:e.placeholder,name:e.name,isMulti:e.isMulti,cacheOptions:!0,loadOptions:e.loadOptions})}var m=Object(s.a)((function(e){return Object(l.a)({root:{"& .MuiFormControl-root":{margin:e.spacing(1),width:"25ch"}}})})),h=0;function O(e){var t=m(),n=Object.entries(e.config).map((function(t){var n=Object(a.a)(t,2),s=n[0],l=n[1],d="form_vidalii_"+h++;return Object(j.jsx)(u.a,{name:s,control:e.control,defaultValue:e.data[s],rules:(null===l||void 0===l?void 0:l.rules)?l.rules:{},render:function(e){var t=e.onChange,n=e.value;return"autocomplete"===l.type?Object(j.jsx)(r.a,{fullWidth:!!(null===l||void 0===l?void 0:l.fullWidth),children:Object(j.jsx)(p,{isMulti:l.autoComplete.isMulti,loadOptions:l.autoComplete.loadOptions,name:d,onChange:t,placeholder:(null===l||void 0===l?void 0:l.alias)?l.alias:s,defaultValue:n})}):Object(j.jsxs)(r.a,{fullWidth:!!(null===l||void 0===l?void 0:l.fullWidth),children:[Object(j.jsx)(o.a,{htmlFor:d,children:(null===l||void 0===l?void 0:l.alias)?l.alias:s}),Object(j.jsx)(c.a,{type:l.type,id:d,value:n,onChange:t,name:s}),(null===l||void 0===l?void 0:l.helperText)&&Object(j.jsx)(i.a,{children:l.helperText})]})}},s)}));return Object(j.jsx)("form",{className:t.root,noValidate:!0,autoComplete:"off",children:n})}},69:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var a=n(183),r=a.keys().map((function(e){return a(e).default}));function i(e){return function(t){var n=t.display,a=t.screen,r=t.closeMenu;return"desktop"===a&&"shown"===n?e.desktopShown:"desktop"===a&&"hidden"===n?e.desktopHidden(r):"mobil"===a?e.mobil:void 0}}},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return fe})),n.d(t,"b",(function(){return ge}));var a=n(13),r=n.n(a),i=n(17),c=n(14),o=n(0),s=n.n(o),l=n(281),u=n(256),d=n(248),j=n(275),b=n(255),p=n(277),m=n(245),h=n(257),O=n(274),f=n(115),x=n.n(f),g=n(70),v=n(246),y=n(247),k=n(33),w=n(2);function C(){return Object(w.jsxs)(g.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(w.jsx)(m.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var N=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function S(e){var t=e.checkSession,n=Object(k.b)(),a=n.handleSubmit,c=n.register,o=a(function(){var e=Object(i.a)(r.a.mark((function e(n){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.username,i=n.password,e.next=3,t(a,i);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),s=N();return Object(w.jsxs)(y.a,{component:"main",maxWidth:"xs",children:[Object(w.jsx)(d.a,{}),Object(w.jsxs)("div",{className:s.paper,children:[Object(w.jsx)(l.a,{className:s.avatar,children:Object(w.jsx)(x.a,{})}),Object(w.jsx)(g.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(w.jsxs)("form",{className:s.form,onSubmit:o,children:[Object(w.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"username",name:"username",autoComplete:"username",autoFocus:!0,inputRef:c}),Object(w.jsx)(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:c}),Object(w.jsx)(b.a,{control:Object(w.jsx)(p.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(w.jsx)(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:s.submit,children:"Sign In"}),Object(w.jsxs)(h.a,{container:!0,children:[Object(w.jsx)(h.a,{item:!0,xs:!0,children:Object(w.jsx)(m.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(w.jsx)(h.a,{item:!0,children:Object(w.jsx)(m.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),Object(w.jsx)(O.a,{mt:8,children:Object(w.jsx)(C,{})})]})}var M=n(280),_=n(18),L=n(12),U=n(260),I=n(270),E=n(126),F=n(196),D=n(121),q=n.n(D),R=n(98),T=n.n(R),A=n(99),P=n(285),B=n(253),V=n(269),W=n(192),z=n(267),G=n(268),J=n(120),H=n.n(J),$=n(158),Y=$.keys().map((function(e){return $(e).default})),K=n(278),Q=n(119),X=n.n(Q),Z=n(15),ee=Object(v.a)((function(e){return Object(M.a)({list:{width:300},fullList:{width:"auto"},menuButton:{marginRight:e.spacing(2)},breadcrumbs:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},titleSidebar:{textAlign:"center"},nested:{paddingLeft:e.spacing(4)}})})),te=function(e,t,n,a){var r=((null===e||void 0===e?void 0:e.parent)||"")+"."+e.name;return Object(w.jsxs)(W.a,{button:!0,onClick:function(){a(!1),n.push("/"+r)},children:[Object(w.jsx)(z.a,{children:Object(w.jsx)(e.Icon,{})}),Object(w.jsx)(G.a,{primary:e.name})]},t)},ne=function(e,t,n){return Y.filter((function(e){return!0===e.sidebar})).filter((function(t){return t.parent===e})).map((function(e,a){return te(e,a,t,n)}))},ae=function(e,t,n,a){var r=[];return e.filter((function(e){return!0===e.sidebar})).sort((function(e,t){return e.name>t.name?1:e.name===t.name?0:-1})).map((function(e,i){return null===e.parent?te(e,i,n,a):r.find((function(t){return t===e.parent}))?null:(r.push(e.parent),Object(w.jsxs)(W.a,{button:!0,onClick:function(){t()({breadcrum:"".concat(e.parent),items:ne(e.parent,n,a)})},children:[Object(w.jsx)(z.a,{children:Object(w.jsx)(X.a,{})}),Object(w.jsx)(G.a,{primary:e.parent})]},i))})).filter((function(e){return e}))};function re(){var e=Object(Z.f)(),t=ee(),n=s.a.useState(!1),a=Object(c.a)(n,2),r=a[0],i=a[1],o=s.a.useState({breadcrum:"",items:ae(Y,(function(){return d}),e,i)}),l=Object(c.a)(o,2),u=l[0],d=l[1];return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(E.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(e){!1===r?i(!0):"MuiBackdrop-root"===e.target.className&&i(!r)},children:[Object(w.jsx)(P.a,{anchor:"left",open:r,children:Object(w.jsxs)("div",{role:"presentation",children:[Object(w.jsx)("h1",{className:t.titleSidebar,children:"Vidalii ERP"}),Object(w.jsxs)(K.a,{"aria-label":"breadcrumb",className:t.breadcrumbs,children:[Object(w.jsx)(m.a,{color:"inherit",href:"#",onClick:function(){d({breadcrum:"",items:ae(Y,(function(){return d}),e,i)})},children:"/ Main"}),""!==u.breadcrum&&Object(w.jsx)(m.a,{color:"inherit",href:"#",children:Object(w.jsx)(g.a,{color:"textPrimary",children:u.breadcrum})})]}),Object(w.jsx)(V.a,{}),Object(w.jsx)(B.a,{className:t.list,children:u.items})]})}),Object(w.jsx)(H.a,{})]})})}var ie=n(69),ce=Object(v.a)((function(e){return Object(M.a)({grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(_.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(_.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(L.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(L.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(_.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(_.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(_.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})})}));function oe(){var e=ce(),t=s.a.useState(null),n=Object(c.a)(t,2),a=n[0],r=n[1],i=s.a.useState(null),o=Object(c.a)(i,2),l=o[0],u=o[1],d=Boolean(l),j=Boolean(a),b="primary-search-account-menu",p="primary-search-account-menu-mobile",m=function(){u(null)},h=function(){r(null),m()},O=ie.a.slice(0,3).map((function(e,t){return Object(w.jsx)(e,{display:"shown",screen:"desktop",closeMenu:h},t)})),f=Object(w.jsx)(A.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},id:b,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:j,onClose:h,children:ie.a.slice(3).map((function(e,t){return Object(w.jsx)(e,{display:"hidden",screen:"desktop",closeMenu:h},t)}))}),x=Object(w.jsx)(A.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:p,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:m,children:ie.a.map((function(e,t){return Object(w.jsx)(e,{display:"hidden",screen:"mobil",closeMenu:m},t)}))});return Object(w.jsxs)("div",{className:e.grow,children:[Object(w.jsx)(U.a,{position:"static",children:Object(w.jsxs)(I.a,{variant:"dense",children:[Object(w.jsx)(re,{}),Object(w.jsx)(g.a,{className:e.title,variant:"h6",noWrap:!0,children:"Vidalii ERP"}),Object(w.jsxs)("div",{className:e.search,children:[Object(w.jsx)("div",{className:e.searchIcon,children:Object(w.jsx)(q.a,{})}),Object(w.jsx)(F.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]}),Object(w.jsx)("div",{className:e.grow}),Object(w.jsxs)("div",{className:e.sectionDesktop,children:[O,Object(w.jsx)(E.a,{"aria-label":"show more","aria-controls":b,"aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},color:"inherit",children:Object(w.jsx)(T.a,{})})]}),Object(w.jsx)("div",{className:e.sectionMobile,children:Object(w.jsx)(E.a,{"aria-label":"show more","aria-controls":p,"aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit",children:Object(w.jsx)(T.a,{})})})]})}),f,x]})}function se(){var e=function(e,t,n){var a=null===t?"/"+e:"/"+t+"."+e;return n&&(a+=n),a};return Object(w.jsx)(Z.c,{children:Y.map((function(t,n){var a=t.Component,r=t.name,i=t.parent,c=t.paramaters;return Object(w.jsx)(Z.a,{path:e(r,i,c),component:a},n)}))})}var le=Object(v.a)((function(e){return Object(M.a)({grow:{flexGrow:1}})}));function ue(){var e=le();return Object(w.jsxs)("div",{className:e.grow,children:[Object(w.jsx)(oe,{}),Object(w.jsx)(se,{})]})}var de=n(271),je=n(272),be=n(282),pe=n(86),me=Object(v.a)({avatar:{backgroundColor:pe.a[100],color:pe.a[600]}});function he(e){me();var t=e.open,n=e.msg,a=e.close;return Object(w.jsx)(de.a,{open:t,onBackdropClick:function(){a()},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:Object(w.jsx)(je.a,{children:Object(w.jsx)(be.a,{id:"alert-dialog-description",children:n})})})}var Oe=n(23),fe=s.a.createContext({session:null,closeSession:function(){}}),xe="authorization";function ge(){var e=s.a.useState(localStorage.getItem(xe)),t=Object(c.a)(e,2),n=t[0],a=t[1],o=s.a.useContext(Oe.a),l=Object(Oe.c)("#graphql\n          mutation LoginUser($username:String!, $password:String!){\n              sessionLogin(\n                username:$username,\n                password:$password\n              )\n        }\n      "),u=Object(c.a)(l,1)[0],d=s.a.useState({msg:"",open:!1}),j=Object(c.a)(d,2),b=j[0],p=j[1],m=function(){var e=Object(i.a)(r.a.mark((function e(t,n){var i,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({variables:{username:t,password:n}});case 2:i=e.sent,c=i.data,(s=i.error)?p({msg:String(s),open:!0}):(o.setHeader(xe,c.sessionLogin),localStorage.setItem(xe,c.sessionLogin),a(c.sessionLogin));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return n?(o.setHeader("authorization",n),Object(w.jsx)(fe.Provider,{value:{session:n,closeSession:function(){localStorage.removeItem(xe),a(null)}},children:Object(w.jsx)(ue,{})})):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(he,{msg:b.msg,open:b.open,close:function(){p({msg:"",open:!1})}}),Object(w.jsx)(S,{checkSession:m})]})}}},[[186,1,2]]]);
//# sourceMappingURL=main.7ea96551.chunk.js.map