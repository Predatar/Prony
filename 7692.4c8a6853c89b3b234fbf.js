"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[7692],{5658:function(e,t,l){l.d(t,{Z:function(){return n}});var a=l(7294),r={btn:"okzW0Oy8lwqbkV4nAPPf",btn_primary:"ZQwd8AuUN4gKz3w89CiF",btn_secondary:"tvGQ5EmlrTPlG0h9hYXr",btn_warning:"ypA9nAPaORN8xJDFUlPz"},n=e=>{let{text:t,width:l,onClick:n,theme:c}=e;return a.createElement("button",{className:"okzW0Oy8lwqbkV4nAPPf "+r[c],style:{"--width":`${l}px`},onClick:n},t)}},3450:function(e,t,l){l.d(t,{Z:function(){return c}});var a=l(7294),r=l(3727),n={link:"yfRcCdWWwFN62hSQmN8H",link_primary:"diZdYFWja07hhOS3UDqR",link_secondary:"g0cjpYl7GRr46M7MwfJg",link_warning:"n6Th7WkJXr9Cg7mMGpe7"},c=e=>{let{text:t,width:l,to:c,theme:m}=e;return a.createElement(r.rU,{to:c,className:"yfRcCdWWwFN62hSQmN8H "+n[m],style:{"--width":`${l}px`}},t)}},8182:function(e,t,l){var a=l(7294),r=l(5434);t.Z=e=>{let{title:t,width:l,children:n,count:c,widthPopup:m,position:s,borderTop:i,id:o,onClick:d}=e;return a.createElement("div",{id:o,style:{width:l},className:"select"},a.createElement("div",{onClick:d,className:"select__body"},a.createElement("div",{className:"select__left"},a.createElement("div",{className:"select__title"},t),!0===c&&a.createElement("div",{className:"select__count"},"1")),a.createElement(r.gwH,{style:{width:24,height:24,color:"var(--textColor)"}})),a.createElement("div",{style:{width:m,position:s,borderTop:i},className:"select__window select-window"},a.createElement("div",{className:"select-window__body"},n)))}},7692:function(e,t,l){l.r(t);var a=l(7294),r=l(4593),n=l(3727);l(3450);var c=l(2685),m=l(1855);t.default=()=>a.createElement(a.Fragment,null,a.createElement("div",{className:"dashboard__path"},a.createElement(r.q,null,a.createElement("title",null,"Dashboard Changelog - PRONY")),a.createElement(n.rU,{to:c.Z.DASHBOARD_HOME},"Dashboard"),"/",a.createElement(n.rU,{to:c.Z.DASHBOARD_CHANGELOG},"Changelog"),"/",a.createElement(n.rU,{to:c.Z.DASHBOARD_CHANGELOG_EDIT},"Add record")),a.createElement("div",{className:"dashboard__main"},a.createElement("div",{className:"dashboard__title"},"Add record")),a.createElement("div",{className:"changlog-edit"},a.createElement("div",{className:"changlog-edit__body"},a.createElement(m.Z,null))))},1855:function(e,t,l){var a=l(7294),r=l(5658),n=l(8182),c=l(6361),m=l(7424),s=l(1419),i=l(2685),o=l(3450);t.Z=()=>{let e=[{name:"Board",id:"boardForm",width:647,widthPopup:647,filter:{title:""},content:[a.createElement(s.Z,{feedback:!0}),a.createElement(s.Z,{admin:!0}),a.createElement(s.Z,{changelog:!0})]}],[t,l]=(0,a.useState)(null),[d,E]=(0,a.useState)(""),_=e=>{t===e?l(null):l(e)},p=(e,t)=>{E(e),l(null)};return a.createElement("form",{className:"post-form"},a.createElement("div",{className:"post-form__body"},a.createElement("div",{className:"post-form__inputs"},a.createElement("div",{className:"post-form__wrapper"},a.createElement("div",{className:"post-form__input-name"},"Title"),a.createElement("input",{type:"text",placeholder:"Enter post title"})),a.createElement("div",{className:"post-form__wrapper"},a.createElement("div",{className:"post-form__input-name"},"Detailes"),a.createElement("textarea",{placeholder:"Enter post title"})),a.createElement(m.Z,null),a.createElement("div",{className:"post-form__wrapper"},a.createElement("input",{type:"date"})),a.createElement("div",{className:"post-form__wrapper"},a.createElement("div",{className:"post-form__input-name"},"Labels"),e.map(e=>{let{name:l,id:r,width:m,widthPopup:s,content:i}=e;return a.createElement(n.Z,{id:r,onClick:()=>_(l),width:m,widthPopup:s,title:d||i[0]},t&&a.createElement(c.Z,null,a.createElement("ul",{className:"post-form__select-list"},i.map(e=>a.createElement("li",{className:"post-form__select-item",key:e},a.createElement("button",{onClick:()=>p(e,r)},e))))))}))),a.createElement("div",{className:"post-form__buttons"},a.createElement(o.Z,{to:i.Z.DASHBOARD_CHANGELOG,text:"Cancel",theme:"link_secondary",width:150}),a.createElement(r.Z,{text:"Submit",theme:"btn_primary",width:147}))))}},1419:function(e,t,l){var a=l(7294);t.Z=e=>{let{changelog:t,feedback:l,admin:r}=e;return a.createElement("div",{className:"changelog-item__labels"},t&&a.createElement("span",{style:{background:"#546E7A",color:"#fff"}},"Changelog"),r&&a.createElement("span",{style:{background:"#BFBECD"}},"Admin"),l&&a.createElement("span",{style:{background:"#03B8FD",color:"#fff"}},"Feedback"))}},7424:function(e,t,l){var a=l(7294),r=l(8193),n=l(5434);t.Z=e=>{let{width:t,title:l}=e,[c,m]=(0,a.useState)(null),s=(0,a.useRef)(null);return a.createElement("div",{className:"post-form__wrapper"},a.createElement("div",{className:"post-form__input-name"},l),a.createElement("input",{onChange:e=>{let t=e.target.files[0];m(t)},ref:s,type:"file",className:"post-form__input-file"}),a.createElement("div",{className:"post-form__file"},a.createElement("div",{style:{width:t},onClick:()=>{s.current.click()},className:"post-form__input-custom"},a.createElement(r.SD$,{style:{width:16,height:16,color:"var(--textColor)"}}),a.createElement("span",null,"Add file\xa0")," or drop files here"),a.createElement("div",{className:"post-form__show-file"},c?a.createElement(a.Fragment,null,a.createElement("img",{src:URL.createObjectURL(c),alt:""}),a.createElement("button",{onClick:()=>m(null),className:"post-form__cancel"},a.createElement(n.B4e,{style:{width:20,height:20,color:"#E0E0E0"}}))):null)))}},6361:function(e,t,l){l.d(t,{Z:function(){return s}});var a=l(7294),r=l(5658),n=e=>{let{title:t}=e;return a.createElement("h2",{className:"select-title"},t)},c=l(3450),m=l(2685),s=e=>{let{title:t,children:l}=e;return a.createElement("div",{className:"filter"},a.createElement("div",{style:{display:t?"flex":"block"},className:"filter__body"},a.createElement("div",{className:"filter__title"},t&&a.createElement(n,{title:t})),a.createElement("div",{className:"filter__form filter-form"},a.createElement("div",{className:"filter-form__top"},l),a.createElement("div",{className:"filter-form__buttons"},a.createElement(c.Z,{to:m.Z.DASHBOARD_POSTS,text:"Cancel",theme:"link_secondary",width:150}),a.createElement(r.Z,{text:"Cancel",width:109,theme:"btn_secondary"})))))}}}]);