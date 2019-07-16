(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{356:function(t,e,r){},360:function(t,e,r){t.exports=r.p+"img/d987a08.png"},361:function(t,e,r){t.exports=r.p+"img/8db756e.png"},362:function(t,e,r){"use strict";var n=r(356);r.n(n).a},364:function(t,e,r){"use strict";r.r(e);var n=r(36),o=(r(67),{data:function(){return{carrier:{name:"",tel:""},track:"",info:{from:{name:"",time:""},to:{name:"",time:""},state:{id:"",text:""},progresses:[]},progresses:{},fold:!0,isProgressTooShort:!1,isLoading:!0,error:null}},beforeMount:function(){this.fetchData()},watch:{$route:function(){this.fetchData()},fold:function(){this.progresses=this.fold&&!this.isProgressTooShort?this.getProgressesByDate(this.info.progresses.slice(this.info.progresses.length-3)):this.getProgressesByDate(this.info.progresses)}},methods:{beautifyDate:function(t){return t.replace(/\-/g,".")},getTime:function(t){var time="";try{time=new Date(t).toLocaleString("ko-KR",{hour:"numeric",minute:"numeric"})}catch(t){time="알 수 없는 시간"}return time},formatNumber:r(363).a,fetchData:function(){var t,track,e=this;try{var r=/#!?\/(\w+.\w+)\/(\d+)/.exec(this.$route.hash),o=Object(n.a)(r,3);t=o[1],track=o[2]}catch(t){return void this.goGuide()}this.isLoading=!0,this.error=null,this.$axios.get("/carriers/".concat(t,"/tracks/").concat(track)).then(function(t){return e.carrier=t.data.carrier,e.track=track,e.info=t.data,t.data.progresses}).then(function(t){e.isProgressTooShort=t.length<=3,e.progresses=e.getProgressesByDate(e.isProgressTooShort?t:t.slice(t.length-3)),e.isLoading=!1}).catch(function(t){e.error={statusCode:t.response.status,message:t.response.data.message?t.response.data.message:"알 수 없는 에러입니다!"},e.isLoading=!1})},getProgressesByDate:function(p){var t={};return p.slice().sort(function(a,b){return a.time>b.time?-1:a.time<b.time?1:0}).forEach(function(progress){var e=progress.time.substr(0,10);e in t||(t[e]=[]),t[e].push(progress)}),t},goGuide:function(){alert("가이드로 이동합니다."),this.$router.replace("/guide")}}}),c=(r(362),r(25)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tracker"}},[n("b-loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),n("header",{staticClass:"column tracking-header"},[t._m(0),t._v(" "),n("div",{staticClass:"tracking-status"},[null===t.error?n("h1",{staticClass:"has-text-centered"},[t._v("\n        "+t._s(t.info.state.text)+"\n      ")]):n("h1",{staticClass:"has-text-centered"},[t._v("추적실패")])]),t._v(" "),n("div",{staticClass:"tracking-illustration has-text-centered"},[null===t.error?n("img",{attrs:{src:r(360),alt:"No Canvas"}}):n("img",{attrs:{src:r(361),alt:"No Canvas Failed"}})]),t._v(" "),null!==t.error?n("b-message",{attrs:{type:"is-danger"}},[t._v("\n      "+t._s(t.error.message)+"\n    ")]):t._e()],1),t._v(" "),null===t.error?n("div",{staticClass:"tracking-detail"},[n("section",{staticClass:"tracking-progresses"},[n("transition-group",{attrs:{name:"fold"}},t._l(t.progresses,function(e,r){return n("div",{key:r,staticClass:"tracking-progress-entry"},[n("time",[t._v(t._s(t.beautifyDate(r)))]),t._v(" "),n("ul",t._l(e,function(progress){return n("li",{key:progress.id},[n("div",{staticClass:"loc"},[n("p",[t._v(t._s(progress.location.name))]),t._v(" "),n("p",[t._v(t._s(t.getTime(progress.time)))])]),t._v(" "),n("div",{staticClass:"desc"},[n("p",[t._v(t._s(progress.status.text))]),t._v(" "),n("p",[t._v(t._s(progress.description))])])])}),0)])}),0),t._v(" "),n("transition-group",{directives:[{name:"show",rawName:"v-show",value:!t.isProgressTooShort,expression:"!isProgressTooShort"}],attrs:{name:"fold"}},[n("a",{key:"test1",staticClass:"fold-button has-text-centered",on:{click:function(e){t.fold=!t.fold}}},[t.fold?n("div",[t._v("더보기 "),n("i",{staticClass:"fas fa-angle-down"})]):n("div",[t._v("간략히 보기 "),n("i",{staticClass:"fas fa-angle-up"})])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isProgressTooShort,expression:"isProgressTooShort"}],staticClass:"fold-button"})],1),t._v(" "),n("section",{staticClass:"tracking-info"},[t._m(1),t._v(" "),n("ul",[t.info.to.name?n("li",[n("h5",[t._v("받는 사람")]),t._v(" "),n("p",[t._v(t._s(t.info.to.name))])]):t._e(),t._v(" "),n("li",[n("h5",[t._v("택배사")]),t._v(" "),n("p",[t._v(t._s(t.carrier.name)+" ("+t._s(t.formatNumber(t.carrier.tel,"International"))+")")])]),t._v(" "),n("li",[n("h5",[t._v("송장번호")]),t._v(" "),n("p",[t._v(t._s(t.track))])]),t._v(" "),t.info.from.name?n("li",[n("h5",[t._v("보낸 사람")]),t._v(" "),n("p",[t._v(t._s(t.info.from.name))])]):t._e()])])]):t._e(),t._v(" "),t._m(2)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tracking-title"},[e("h1",{staticClass:"has-text-centered"},[this._v("배송조회")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tracking-info-title"},[e("h2",{staticClass:"has-text-centered"},[this._v("기본정보")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"margin-top":"20px",color:"#585858","font-size":"0.8125rem"}},[e("a",{staticClass:"github-button",attrs:{href:"https://github.com/shlee322/delivery-tracker","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star shlee322/delivery-tracker on GitHub"}},[this._v("Star")]),this._v("\n    Copyright (C) "),e("a",{attrs:{href:"https://tracker.delivery"}},[this._v("https://tracker.delivery")]),this._v(" "),e("script",{attrs:{async:"",defer:"",src:"https://buttons.github.io/buttons.js"}})])}],!1,null,"f0da715c",null);e.default=component.exports}}]);