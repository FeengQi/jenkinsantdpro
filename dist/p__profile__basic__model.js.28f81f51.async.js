(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"9z0z":function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("p0pE")),u=r(a("d6i3")),s=a("nea5"),c={namespace:"profileAndbasic",state:{basicGoods:[]},effects:{fetchBasic:u.default.mark(function e(t,a){var r,n,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.call,n=a.put,e.next=3,r(s.queryBasicProfile);case 3:return c=e.sent,e.next=6,n({type:"show",payload:c});case 6:case"end":return e.stop()}},e)})},reducers:{show:function(e,t){var a=t.payload;return(0,n.default)({},e,a)}}},i=c;t.default=i},nea5:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.queryBasicProfile=c;var n=r(a("d6i3")),u=r(a("1l/V")),s=r(a("t3Un"));function c(){return i.apply(this,arguments)}function i(){return i=(0,u.default)(n.default.mark(function e(){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("/api/profile/basic"));case 1:case"end":return e.stop()}},e)})),i.apply(this,arguments)}}}]);