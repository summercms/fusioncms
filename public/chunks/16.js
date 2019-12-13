(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{MxYC:function(t,e,n){"use strict";n.r(e);var a=n("ke3Z"),s={head:{title:function(){return{inner:this.entry.name||"Loading..."}}},data:function(){return{collection:{},entry:{},form:new a.a({})}},computed:{sections:function(){var t=[],e=[];return this.collection.fieldset&&(t=_.filter(this.collection.fieldset.sections,(function(t){return"body"==t.placement})),e=_.filter(this.collection.fieldset.sections,(function(t){return"sidebar"==t.placement}))),{body:t,sidebar:e}}},methods:{submit:function(){var t=this;this.form.patch("/api/collections/"+this.collection.slug+"/"+this.entry.id).then((function(e){toast("Entry saved successfully","success"),t.$router.push("/collections/"+t.collection.slug)})).catch((function(t){toast(t.response.data.message,"failed")}))},getEntry:function(t,e,n){var s=this;axios.get("/api/collections/"+t.params.collection+"/"+t.params.id).then((function(t){s.collection=t.data.data.matrix,s.entry=t.data.data.entry;var e={name:s.entry.name,slug:s.entry.slug,status:s.entry.status};s.collection.fieldset&&_.forEach(s.collection.fieldset.sections,(function(t){_.forEach(t.fields,(function(t){s.entry[t.handle+"_raw"]?Vue.set(e,t.handle,s.entry[t.handle+"_raw"]):Vue.set(e,t.handle,s.entry[t.handle])}))})),s.form=new a.a(e,!0),s.$emit("updateHead")})).catch((function(t){s.$router.push("/collections/"+s.$router.currentRoute.params.collection),toast("The requested entry could not be found","warning")}))}},beforeRouteEnter:function(t,e,n){n((function(a){a.getEntry(t,e,n)}))},beforeRouteUpdate:function(t,e,n){this.getEntry(t,e,n),n()}},o=n("KHd+"),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("portal",{attrs:{to:"title"}},[n("app-title",{attrs:{icon:t.collection.icon||"pencil"}},[t._v("Edit "+t._s(t.collection.reference_singular))])],1),t._v(" "),n("portal",{attrs:{to:"subtitle"}},[t._v(t._s(t.collection.description))]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"content-container"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("p-card",[n("div",{staticClass:"row"},[n("div",{staticClass:"col form-sidebar"},[n("div",{staticClass:"xxl:mr-10"})]),t._v(" "),n("div",{staticClass:"col mb-6 form-content"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col w-1/2"},[n("p-input",{attrs:{name:"name",label:"Name",autocomplete:"off",autofocus:"",required:"","has-error":t.form.errors.has("name"),"error-message":t.form.errors.get("name")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("div",{staticClass:"col w-1/2"},[n("p-slug",{attrs:{name:"slug",label:"Slug",monospaced:"",autocomplete:"off",required:"",delimiter:"_",watch:t.form.name,"has-error":t.form.errors.has("slug"),"error-message":t.form.errors.get("slug")},model:{value:t.form.slug,callback:function(e){t.$set(t.form,"slug",e)},expression:"form.slug"}})],1)])])]),t._v(" "),t.sections.body.length>0?n("div",{key:t.collection.slug},t._l(t.sections.body,(function(e,a){return n("div",{key:e.handle},[n("div",{staticClass:"row"},[n("div",{staticClass:"col form-sidebar"},[n("div",{staticClass:"xxl:mr-10"},[n("h3",[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"text-sm"},[t._v(t._s(e.description))])])]),t._v(" "),n("div",{staticClass:"col form-content"},t._l(e.fields,(function(e){return n("div",{key:e.handle,staticClass:"form__group"},[n(e.type.id+"-fieldtype",{tag:"component",attrs:{field:e},model:{value:t.form[e.handle],callback:function(n){t.$set(t.form,e.handle,n)},expression:"form[field.handle]"}})],1)})),0)]),t._v(" "),a!==t.sections.body.length-1?n("hr"):t._e()])})),0):n("div",{staticClass:"text-center"},[n("p",[t._v("You should configure your Matrix Collection with some sections and fields first "),n("fa-icon",{staticClass:"text-emoji",attrs:{icon:["fas","hand-peace"]}})],1),t._v(" "),n("router-link",{staticClass:"button items-center",attrs:{to:"/matrices/manage/"+t.collection.id}},[n("fa-icon",{staticClass:"mr-2 text-sm",attrs:{icon:["fas","atom-alt"]}}),t._v(" Manage your collection")],1)],1)])],1)]),t._v(" "),n("div",{staticClass:"side-container"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("p-card",[n("div",{staticClass:"row"},[n("div",{staticClass:"col w-full"},[n("p-select",{attrs:{name:"status",label:"Status",options:[{label:"Enabled",value:1},{label:"Disabled",value:0}]},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)]),t._v(" "),n("portal",{attrs:{to:"actions"}},[t.collection.slug?n("router-link",{staticClass:"button mr-3",attrs:{to:{name:"entries.index",params:{collection:t.collection.slug}}}},[t._v("Go Back")]):t._e(),t._v(" "),n("button",{staticClass:"button button--primary",class:{"button--disabled":!t.form.hasChanges},attrs:{type:"submit",disabled:!t.form.hasChanges},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("Save")])],1)],1),t._v(" "),t._l(t.sections.sidebar,(function(e){return n("p-card",{key:e.handle,staticClass:"mt-6"},[n("h3",[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"text-sm"},[t._v(t._s(e.description))]),t._v(" "),n("div",{staticClass:"w-full"},t._l(e.fields,(function(e){return n("div",{key:e.handle,staticClass:"form__group"},[n(e.type.id+"-fieldtype",{tag:"component",attrs:{field:e},model:{value:t.form[e.handle],callback:function(n){t.$set(t.form,e.handle,n)},expression:"form[field.handle]"}})],1)})),0)])}))],2)])])],1)}),[],!1,null,null,null);e.default=r.exports},WjD0:function(t,e){t.exports="object"==typeof self?self.FormData:window.FormData},ke3Z:function(t,e,n){"use strict";n("WjD0");function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors={}}var e,n,s;return e=t,(n=[{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"record",value:function(t){this.errors=t.errors}},{key:"clear",value:function(t){t?delete this.errors[t]:this.errors={}}}])&&a(e.prototype,n),s&&a(e,s),t}(),o=n("5fFP");function r(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}n.d(e,"a",(function(){return i}));var i=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors=new s,this.originalData=e,this.hasChanges=!1,this.preventNavigation=n;var a=this;for(var o in this.__data={},e)this[o]=e[o],a.__data[o]=a[o],function(t){Object.defineProperty(a,t,{get:function(){return a.__data[t]},set:function(e){a.__data[t]=e,a.hasChanges||a.onFirstChange()}})}(o)}var e,n,a;return e=t,(n=[{key:"set",value:function(t,e){this.data[t]=e}},{key:"get",value:function(t){return this.data[t]}},{key:"reset",value:function(){for(var t in this.originalData)this[t]=this.originalData[t];this.errors.clear()}},{key:"data",value:function(){var t={};for(var e in this.originalData)t[e]=this[e];return t}},{key:"post",value:function(t){return this.submit("post",t)}},{key:"patch",value:function(t){return this.submit("patch",t)}},{key:"put",value:function(t){return this.submit("put",t)}},{key:"delete",value:function(t){return this.submit("delete",t)}},{key:"submit",value:function(t,e){var n=this;return new Promise((function(a,s){axios[t](e,n.data()).then((function(t){n.onSuccess(t.data),o.a.commit("form/setPreventNavigation",!1),a(t.data)})).catch((function(t){n.onFailure(t.response.data),s(t.response.data)}))}))}},{key:"onSuccess",value:function(t){}},{key:"onFailure",value:function(t){this.errors.record(t)}},{key:"onFirstChange",value:function(t){this.hasChanges=!0,this.preventNavigation&&o.a.commit("form/setPreventNavigation",!0)}},{key:"resetChangeListener",value:function(t){this.hasChanges=!1,this.preventNavigation&&o.a.commit("form/setPreventNavigation",!1)}}])&&r(e.prototype,n),a&&r(e,a),t}()}}]);