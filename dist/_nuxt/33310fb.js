(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{391:function(e,t,r){var content=r(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(32).default)("77cea664",content,!0,{sourceMap:!1})},426:function(e,t,r){"use strict";r(391)},427:function(e,t,r){var l=r(31)(!1);l.push([e.i,".card[data-v-22331ac0]{top:150px;margin-bottom:228px;padding:50px;background-color:#50858b}.title[data-v-22331ac0]{margin-bottom:20px}",""]),e.exports=l},450:function(e,t,r){"use strict";r.r(t);var l={name:"IndexPage",data:function(){return{form:{firstname:""}}},methods:{updateForm:function(){this.$store.dispatch("mainForm/setForm",this.form),this.$router.push("/card")}}},o=(r(426),r(82)),n=r(112),c=r.n(n),m=r(366),d=r(373),f=r(369),v=r(445),_=r(446),x=r(447),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[r("div",{staticClass:"behind"}),e._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("v-card",{staticClass:"card",attrs:{elevation:"5"}},[r("v-card-title",{staticClass:"title",attrs:{justify:"center"}},[r("h1",[e._v("Fill Out Your Card")])]),e._v(" "),r("v-card-text",{attrs:{justify:"center"}},[r("label",[e._v(" First Name ")]),e._v(" "),r("v-text-field",{attrs:{label:"firstname",required:""},model:{value:e.form.firstname,callback:function(t){e.$set(e.form,"firstname",t)},expression:"form.firstname"}}),e._v(" "),r("label",[e._v(" Last Name ")]),e._v(" "),r("v-text-field",{attrs:{label:"lastname",required:""},model:{value:e.form.lastname,callback:function(t){e.$set(e.form,"lastname",t)},expression:"form.lastname"}}),e._v(" "),r("label",[e._v(" Email ")]),e._v(" "),r("v-text-field",{attrs:{label:"email@foo.com",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),r("label",[e._v(" Phone ")]),e._v(" "),r("v-text-field",{attrs:{label:"(123)456-7890",required:""},model:{value:e.form.phonenumber,callback:function(t){e.$set(e.form,"phonenumber",t)},expression:"form.phonenumber"}}),e._v(" "),r("label",[e._v(" Website ")]),e._v(" "),r("v-text-field",{attrs:{label:"www.example.com",required:""},model:{value:e.form.website,callback:function(t){e.$set(e.form,"website",t)},expression:"form.website"}}),e._v(" "),r("label",[e._v(" Address ")]),e._v(" "),r("v-text-field",{attrs:{label:"123 Peach St",required:""},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}}),e._v(" "),r("v-btn",{staticClass:"button",on:{click:function(t){return e.updateForm()}}},[e._v("Submit")])],1)],1)],1)],1)],1)}),[],!1,null,"22331ac0",null);t.default=component.exports;c()(component,{VBtn:m.a,VCard:d.a,VCardText:f.a,VCardTitle:f.b,VCol:v.a,VRow:_.a,VTextField:x.a})}}]);