(function(t){function s(s){for(var i,o,r=s[0],c=s[1],l=s[2],u=0,p=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(s);while(p.length)p.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],i=!0,r=1;r<e.length;r++){var c=e[r];0!==a[c]&&(i=!1)}i&&(n.splice(s--,1),t=o(o.s=e[0]))}return t}var i={},a={app:0},n=[];function o(s){if(i[s])return i[s].exports;var e=i[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=i,o.d=function(t,s,e){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)o.d(e,i,function(s){return t[s]}.bind(null,i));return e},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/vue-sell-cube/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=s,r=r.slice();for(var l=0;l<r.length;l++)s(r[l]);var d=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"0a6f":function(t,s,e){},"0b08":function(t,s,e){"use strict";var i=e("7f84"),a=e.n(i);a.a},"16c6":function(t,s,e){},"1a6c":function(t,s,e){"use strict";var i=e("83cd"),a=e.n(i);a.a},"1e7f":function(t,s,e){},"2a49":function(t,s,e){},"2bb9":function(t,s,e){},"2d24":function(t,s,e){},3570:function(t,s,e){},4392:function(t,s,e){"use strict";var i=e("ec5e"),a=e.n(i);a.a},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),e("div",{staticClass:"tab-wrapper"},[e("tab",{attrs:{tabs:t.tabs}})],1)],1)},n=[],o=(e("ac1f"),e("841c"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header",on:{click:t.showDetail}},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"64",height:"64",src:t.seller.avatar}})]),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),e("div",{staticClass:"description"},[t._v(" "+t._s(t.seller.description)+t._s(t.seller.deliveryTime)+"分钟送达 ")]),t.seller.supports?e("div",{staticClass:"support"},[e("support-ico",{attrs:{size:1,type:t.seller.supports[0].type}}),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])],1):t._e()]),t.seller.supports?e("div",{staticClass:"support-count"},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),e("div",{staticClass:"bulletin-wrapper"},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),e("i",{staticClass:"icon-keyboard_arrow_right"})]),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})])])}),r=[],c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"support-ico",class:t.iconCls})},l=[],d=(e("99af"),e("a9e3"),{name:"support-ico",props:{size:{type:Number},type:{type:Number}},computed:{iconCls:function(){var t=["decrease","discount","special","invoice","guarantee"];return"icon-".concat(this.size," ").concat(t[this.type])}}}),u=d,p=(e("9a55"),e("2877")),f=Object(p["a"])(u,c,l,!1,null,"732202aa",null),h=f.exports,v={name:"v-header",props:{seller:{type:Object,default:function(){return{}}}},methods:{showDetail:function(){this.headerDetailComp=this.headerDetailComp||this.$createHeaderDetail({$props:{seller:"seller"}}),this.headerDetailComp.show()}},components:{SupportIco:h}},m=v,C=(e("dd00"),Object(p["a"])(m,o,r,!1,null,"311c4734",null)),_=C.exports,b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.itemClasses,(function(t,s){return e("span",{key:s,staticClass:"star-item",class:t})})),0)},y=[],g=5,w="on",x="half",k="off",S={name:"star",props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!==0,i=Math.floor(s),a=0;a<i;a++)t.push(w);e&&t.push(x);while(t.length<g)t.push(k);return t}}},$=S,O=(e("4392"),Object(p["a"])($,b,y,!1,null,"dd354b54",null)),P=O.exports,T=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tab"},[e("cube-tab-bar",{ref:"tabBar",staticClass:"border-bottom-1px",attrs:{useTransition:!1,"show-slider":!0,data:t.tabs},model:{value:t.selectedLabel,callback:function(s){t.selectedLabel=s},expression:"selectedLabel"}}),e("div",{staticClass:"slide-wrapper"},[e("cube-slide",{ref:"slide",attrs:{"initial-index":t.index,loop:!1,"auto-play":!1,"show-dots":!1,options:t.slideOptions},on:{change:t.onChange,scroll:t.onScroll}},t._l(t.tabs,(function(t,s){return e("cube-slide-item",{key:s},[e(t.component,{ref:"component",refInFor:!0,tag:"component",attrs:{data:t.data}})],1)})),1)],1)],1)},j=[],F=(e("c740"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{staticClass:"scroll-nav-wrapper"},[t.goods.length?e("cube-scroll-nav",{attrs:{options:t.scrollOptions,side:!0,data:t.goods},scopedSlots:t._u([{key:"bar",fn:function(s){return[e("cube-scroll-nav-bar",{attrs:{direction:"vertical",labels:s.labels,txts:t.barTxts,current:s.current},scopedSlots:t._u([{key:"default",fn:function(s){return[e("div",{staticClass:"text"},[s.txt.type>=1?e("support-ico",{attrs:{size:3,type:s.txt.type}}):t._e(),e("span",[t._v(t._s(s.txt.name))]),s.txt.count?e("span",{staticClass:"num"},[e("bubble",{attrs:{num:s.txt.count}})],1):t._e()],1)]}}],null,!0)})]}}],null,!1,4100582270)},t._l(t.goods,(function(s){return e("cube-scroll-nav-panel",{key:s.name,attrs:{label:s.name,title:s.name}},[e("ul",t._l(s.foods,(function(s){return e("li",{key:s.name,staticClass:"food-item",on:{click:function(e){return t.selectFood(s)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon}})]),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),e("div",{staticClass:"cart-control-wrapper"},[e("cart-control",{attrs:{food:s},on:{add:t.onAdd}})],1)])])})),0)])})),1):t._e()],1),e("div",{staticClass:"shop-cart-wrapper"},[e("shop-cart",{ref:"shopCart",attrs:{deliveryPrice:t.seller.deliveryPrice,"min-price":t.seller.minPrice,"select-foods":t.selectFoods}})],1)])}),N=[],E=(e("4160"),e("159b"),e("bc3a")),L=e.n(E),D=0;function R(t){return function(s){return L.a.get(t,{params:s}).then((function(t){var s=t.data,e=s.errno,i=s.data;if(e===D)return i})).catch((function(){}))}}var B="production",z=R("production"!==B?"api/seller":"data/seller.json"),M=R("production"!==B?"api/goods":"data/goods.json"),A=R("production"!==B?"api/ratings":"data/ratings.json"),I=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount > 0"}],staticClass:"num"},[e("bubble",{attrs:{num:t.totalCount}})],1)]),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice))]),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice))])]),e("div",{staticClass:"content-right"},[e("div",{staticClass:"pay",class:t.payClass,on:{click:t.pay}},[t._v(t._s(t.payDesc))])])]),e("div",{staticClass:"ball-container"},t._l(t.balls,(function(s,i){return e("div",{key:i},[e("transition",{on:{"before-enter":t.beforeDrop,enter:t.dropping,"after-enter":t.afterDrop}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])],1)})),0)])])},Y=[],H=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"bubble"},[t._v(t._s(t.num))])},J=[],U={name:"bubble",props:{num:{type:Number}}},W=U,G=(e("8142"),Object(p["a"])(W,H,J,!1,null,"b89cfec8",null)),V=G.exports,X=10,q="inner-hook";function K(){for(var t=[],s=0;s<X;s++)t.push({show:!1});return t}var Q={name:"ShopCart",components:{Bubble:V},props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0},fold:{type:Boolean,default:!0},sticky:{type:Boolean,default:!1}},data:function(){return{balls:K(),listFold:this.fold}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach((function(s){t+=s.price*s.count})),t},totalCount:function(){var t=0;return this.selectFoods.forEach((function(s){t+=s.count})),t},payDesc:function(){if(0===this.totalPrice)return"￥".concat(this.minPrice,"元起送");if(this.totalPrice<this.minPrice){var t=this.minPrice-this.totalPrice;return"还差￥".concat(t,"元起送")}return"去结算"},payClass:function(){return!this.totalPrice||this.totalPrice<this.minPrice?"not-enough":"enough"}},watch:{fold:function(t){this.listFold=t},totalCount:function(t){this.listFold||t||this._hideShopCartList()}},created:function(){this.dropBalls=[]},methods:{drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},beforeDrop:function(t){var s=this.dropBalls[this.dropBalls.length-1],e=s.el.getBoundingClientRect(),i=e.left-32,a=-(window.innerHeight-e.top-22);t.style.display="",t.style.transform=t.style.webkitTransform="translate3d(0, ".concat(a,"px, 0)");var n=t.getElementsByClassName(q)[0];n.style.transform=n.style.webkitTransform="translate3d(".concat(i,"px, 0, 0)")},dropping:function(t,s){this._reflow=document.body.offsetHeight,t.style.transform=t.style.webkitTransform="translate3d(0, 0, 0)";var e=t.getElementsByClassName(q)[0];e.style.transform=e.style.webkitTransform="translate3d(0, 0, 0)",t.addEventListener("transitionend",s)},afterDrop:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")},toggleList:function(){if(this.listFold){if(!this.totalCount)return;this.listFold=!1,this._showShopCartList(),this._showShopCartSticky()}else this.listFold=!0,this._hideShopCartList()},pay:function(t){this.totalPrice<this.minPrice||(this.$createDialog({title:"支付",content:"您需支付：".concat(this.totalPrice,"元")}).show(),t.stopPropagation())},_showShopCartList:function(){var t=this;this.shopCartListComp=this.shopCartListComp||this.$createShopCartList({$props:{selectFoods:"selectFoods"},$events:{hide:function(){t.listFold=!0},leave:function(){t._hideShopCartSticky()},add:function(s){t.shopCartStickyComp.drop(s)}}}),this.shopCartListComp.show()},_showShopCartSticky:function(){this.shopCartStickyComp=this.shopCartStickyComp||this.$createShopCartSticky({$props:{selectFoods:"selectFoods",deliveryPrice:"deliveryPrice",minPrice:"minPrice",fold:"listFold",list:this.shopCartListComp}}),this.shopCartStickyComp.show()},_hideShopCartList:function(){var t=this.sticky?this.$parent.list:this.shopCartListComp;t&&t.hide&&t.hide()},_hideShopCartSticky:function(){this.shopCartStickyComp.hide()}}},Z=Q,tt=(e("0b08"),Object(p["a"])(Z,I,Y,!1,null,"0783ec6e",null)),st=tt.exports,et=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-decrease",on:{click:function(s){return s.stopPropagation(),t.decrease(s)}}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),e("div",{staticClass:"cart-add icon-add_circle",on:{click:function(s){return s.stopPropagation(),t.add(s)}}})],1)},it=[],at="add",nt={name:"cart-control",props:{food:{type:Object}},methods:{decrease:function(){this.food.count&&this.food.count--},add:function(t){this.food.count?this.food.count++:this.$set(this.food,"count",1),this.$emit(at,t.target)}}},ot=nt,rt=(e("a2d3"),Object(p["a"])(ot,et,it,!1,null,"9139bc4c",null)),ct=rt.exports,lt={name:"goods",components:{ShopCart:st,CartControl:ct,SupportIco:h,Bubble:V},props:{data:{type:Object,default:function(){}}},data:function(){return{goods:[],scrollOptions:{click:!1,directionLockThreshold:0},selectedFood:{}}},computed:{seller:function(){return this.data.seller},selectFoods:function(){var t=[];return this.goods.forEach((function(s){s.foods.forEach((function(s){s.count&&t.push(s)}))})),t},barTxts:function(){var t=[];return this.goods.forEach((function(s){var e=s.type,i=s.name,a=s.foods,n=0;a.forEach((function(t){n+=t.count||0})),t.push({type:e,name:i,count:n})})),t}},methods:{fetch:function(){var t=this;this.fetched||(this.fetched=!0,M({id:this.seller.id}).then((function(s){t.goods=s})))},onAdd:function(t){this.$refs.shopCart.drop(t)},selectFood:function(t){this.selectedFood=t,this._showFood(),this._showShopCartSticky()},_showFood:function(){var t=this;this.foodComp=this.foodComp||this.$createFood({$props:{food:"selectedFood"},$events:{leave:function(){t._hideShopCartList()},add:function(s){t.shopCartStickyComp.drop(s)}}}),this.foodComp.show()},_showShopCartSticky:function(){this.shopCartStickyComp=this.shopCartStickyComp||this.$createShopCartSticky({$props:{selectFoods:"selectFoods",deliveryPrice:this.seller.deliveryPrice,minPrice:this.seller.minPrice,fold:!0}}),this.shopCartStickyComp.show()},_hideShopCartList:function(){this.shopCartStickyComp.hide()}}},dt=lt,ut=(e("75c2"),Object(p["a"])(dt,F,N,!1,null,"49c8511b",null)),pt=ut.exports,ft=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("cube-scroll",{ref:"scroll",staticClass:"ratings",attrs:{options:t.scrollOptions,data:t.computedRatings}},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),e("div",{staticClass:"title"},[t._v("综合评分")]),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("商品评分")]),e("star",{attrs:{size:36,score:t.seller.foodScore}}),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),e("split"),t.ratings.length?e("rating-select",{attrs:{ratings:t.ratings,onlyContent:t.onlyContent,selectType:t.selectType},on:{select:t.onSelect,toggle:t.onToggle}}):t._e(),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.computedRatings.length,expression:"computedRatings.length"}],staticClass:"rating-wrapper"},[e("ul",t._l(t.computedRatings,(function(s,i){return e("li",{key:i,staticClass:"rating-item border-bottom-1px"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"28",height:"28"}})]),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),e("span",{staticClass:"delivery"},[t._v(t._s(s.deliveryTime))])],1),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend&&s.recommend.length,expression:"rating.recommend && rating.recommend.length"}],staticClass:"recommend"},[e("span",{staticClass:"icon-thumb_up"}),t._l(s.recommend,(function(s,i){return e("span",{key:i,staticClass:"item"},[t._v(t._s(s))])}))],2),e("div",{staticClass:"time"},[t._v(t._s(t.format(s.rateTime)))])])])})),0)])],1)])},ht=[],vt=e("c1df"),mt=e.n(vt),Ct=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"split"})},_t=[],bt={name:"split"},yt=bt,gt=(e("1a6c"),Object(p["a"])(yt,Ct,_t,!1,null,"13a4d760",null)),wt=gt.exports,xt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"rating-select"},[e("div",{staticClass:"rating-type border-bottom-1px"},[e("span",{staticClass:"block positive",class:{active:2===t.selectType},on:{click:function(s){return t.select(2)}}},[t._v(" "+t._s(t.desc.all)+" "),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),e("span",{staticClass:"block positive",class:{active:0===t.selectType},on:{click:function(s){return t.select(0)}}},[t._v(" "+t._s(t.desc.positive)+" "),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),e("span",{staticClass:"block negative",class:{active:1===t.selectType},on:{click:function(s){return t.select(1)}}},[t._v(" "+t._s(t.desc.negative)+" "),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),e("div",{staticClass:"switch",class:{on:t.onlyContent},on:{click:t.toggle}},[e("span",{staticClass:"icon-check_circle"}),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},kt=[],St=(e("4de4"),0),$t=1,Ot=2,Pt="toggle",Tt="select",jt={props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:Ot},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},computed:{positives:function(){return this.ratings.filter((function(t){return t.rateType===St}))},negatives:function(){return this.ratings.filter((function(t){return t.rateType===$t}))}},methods:{select:function(t){this.$emit(Tt,t)},toggle:function(){this.$emit(Pt)}}},Ft=jt,Nt=(e("72e0"),Object(p["a"])(Ft,xt,kt,!1,null,"5604675c",null)),Et=Nt.exports,Lt=2,Dt={data:function(){return{onlyContent:!1,selectType:Lt}},computed:{computedRatings:function(){var t=this,s=[];return this.ratings.forEach((function(e){t.onlyContent&&!e.text||t.selectType!==Lt&&e.rateType!==t.selectType||s.push(e)})),s}},methods:{onSelect:function(t){this.selectType=t},onToggle:function(){this.onlyContent=!this.onlyContent}}},Rt={mixins:[Dt],name:"ratings",props:{data:{type:Object}},data:function(){return{ratings:[],scrollOptions:{click:!1,directionLockThreshold:0}}},computed:{seller:function(){return this.data.seller||{}}},components:{Split:wt,Star:P,RatingSelect:Et},methods:{format:function(t){return mt()(t).format("YYYY-MM-DD hh:mm")},fetch:function(){var t=this;this.fetched||(this.fetched=!0,A({id:this.seller.id}).then((function(s){t.ratings=s})))}}},Bt=Rt,zt=(e("a9a9"),Object(p["a"])(Bt,ft,ht,!1,null,"8eb916c8",null)),Mt=zt.exports,At=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("cube-scroll",{staticClass:"seller",attrs:{options:t.sellerScrollOptions}},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),e("div",{staticClass:"desc border-bottom-1px"},[e("star",{attrs:{size:36,score:t.seller.score}}),e("span",{staticClass:"text"},[t._v("("+t._s(t.seller.ratingCount)+")")]),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元 ")])]),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元 ")])]),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟 ")])])]),e("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[e("span",{staticClass:"icon-favorite",class:{active:t.favorite}}),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),e("split"),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),e("div",{staticClass:"content-wrapper border-bottom-1px"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,(function(s,i){return e("li",{key:i,staticClass:"support-item border-bottom-1px"},[e("support-ico",{attrs:{size:4,type:t.seller.supports[i].type}}),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])],1)})),0):t._e()]),e("split"),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),e("cube-scroll",{staticClass:"pic-wrapper",attrs:{options:t.picScrollOptions}},[e("ul",{staticClass:"pic-list"},t._l(t.seller.pics,(function(t,s){return e("li",{key:s,staticClass:"pic-item"},[e("img",{attrs:{src:t,width:"120",height:"90"}})])})),0)])],1),e("split"),e("div",{staticClass:"info"},[e("h1",{staticClass:"title border-bottom-1px"},[t._v("商家信息")]),e("ul",t._l(t.seller.infos,(function(s,i){return e("li",{key:i,staticClass:"info-item border-bottom-1px"},[t._v(t._s(s))])})),0)])],1)])},It=[],Yt=e("335a"),Ht="__seller__";function Jt(t,s,e){var i=Yt["a"].get(Ht,{});i[t]||(i[t]={}),i[t][s]=e,Yt["a"].set(Ht,i)}function Ut(t,s,e){var i=Yt["a"].get(Ht,{});return i[t]&&i[t][s]||e}var Wt="favorite",Gt={name:"seller",props:{data:{type:Object,default:function(){}}},created:function(){this.favorite=Ut(this.seller.id,Wt,!1)},methods:{toggleFavorite:function(){this.favorite=!this.favorite,Jt(this.seller.id,Wt,this.favorite)}},data:function(){return{favorite:!1,sellerScrollOptions:{directionLockThreshold:0,click:!1},picScrollOptions:{scrollX:!0,stopPropagation:!0,directionLockThreshold:0}}},computed:{seller:function(){return this.data.seller||{}},favoriteText:function(){return this.favorite?"已收藏":"收藏"}},components:{Split:wt,Star:P,SupportIco:h}},Vt=Gt,Xt=(e("c1e5"),Object(p["a"])(Vt,At,It,!1,null,"0095e06c",null)),qt=Xt.exports,Kt={name:"tab",components:{Goods:pt,Ratings:Mt,Seller:qt},props:{tabs:{type:Array,default:function(){return[]}},initialIndex:{type:Number,default:0}},data:function(){return{index:this.initialIndex,slideOptions:{listenScroll:!0,probeType:3,directionLockThreshold:0}}},computed:{selectedLabel:{get:function(){return this.tabs[this.index].label},set:function(t){this.index=this.tabs.findIndex((function(s){return s.label===t}))}}},mounted:function(){this.onChange(this.index)},methods:{onChange:function(t){this.index=t;var s=this.$refs.component[t];s.fetch&&s.fetch()},onScroll:function(t){var s=this.$refs.tabBar.$el.clientWidth,e=this.$refs.slide.slide.scrollerWidth,i=-t.x/e*s;this.$refs.tabBar.setSliderTransform(i)}}},Qt=Kt,Zt=(e("bd49"),Object(p["a"])(Qt,T,j,!1,null,"5666e8a1",null)),ts=Zt.exports,ss=e("72bf"),es=e.n(ss),is={name:"App",components:{VHeader:_,Star:P,Tab:ts},computed:{tabs:function(){return[{label:"商品",component:pt,data:{seller:this.seller}},{label:"评价",component:Mt,data:{seller:this.seller}},{label:"商家",component:qt,data:{seller:this.seller}}]}},data:function(){return{seller:{id:es.a.parse(location.search).id}}},created:function(){this._getSeller()},methods:{_getSeller:function(){var t=this;z({id:this.seller.id}).then((function(s){t.seller=s}))}}},as=is,ns=(e("7faf"),Object(p["a"])(as,a,n,!1,null,null,null)),os=ns.exports,rs=(e("df49"),e("2696")),cs=e("031d"),ls=e("1cc1"),ds=e("0679"),us=e("2799"),ps=(e("bdd9"),e("a2d2"),e("ba90"),e("36b6")),fs=e("0f85");i["a"].use(rs["a"]),i["a"].use(cs["a"]),i["a"].use(ls["a"]),i["a"].use(ds["a"]),i["a"].use(us["a"]),i["a"].use(ps["a"]),i["a"].use(fs["a"]);var hs=e("df9a"),vs=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"header-detail",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault()}}},[e("div",{staticClass:"detail-wrapper clear-fix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),e("div",{staticClass:"text"},[t._v("优惠信息")]),e("div",{staticClass:"line"})]),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,(function(s,i){return e("li",{key:i,staticClass:"support-item"},[e("support-ico",{attrs:{size:2,type:s.type}}),e("span",{staticClass:"text"},[t._v(t._s(s.description))])],1)})),0):t._e(),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),e("div",{staticClass:"text"},[t._v("商家公告")]),e("div",{staticClass:"line"})]),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),e("div",{staticClass:"detail-close",on:{click:t.hide}},[e("i",{staticClass:"icon-close"})])])])},ms=[],Cs="show",_s="hide",bs={data:function(){return{visible:!1}},methods:{show:function(){this.visible=!0,this.$emit(Cs)},hide:function(){this.visible=!1,this.$emit(_s)}}},ys={name:"header-detail",mixins:[bs],components:{SupportIco:h,Star:P},props:{seller:{type:Object,default:function(){return{}}}},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1}}},gs=ys,ws=(e("69ff"),Object(p["a"])(gs,vs,ms,!1,null,"3ae15c96",null)),xs=ws.exports,ks=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade"}},[e("cube-popup",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],attrs:{"mask-closable":!0,"z-index":90,position:"bottom",type:"shop-cart-list"},on:{"mask-click":t.maskClick}},[e("transition",{attrs:{name:"move"},on:{"after-leave":t.onLeave}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}]},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),e("cube-scroll",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,(function(s){return e("li",{key:s.name,staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),e("div",{staticClass:"cart-control-wrapper"},[e("cart-control",{attrs:{food:s},on:{add:t.onAdd}})],1)])})),0)])],1)])],1)],1)},Ss=[],$s="leave",Os="add",Ps="show",Ts={name:"shop-cart-list",mixins:[bs],props:{selectFoods:{type:Array,default:function(){return[]}}},created:function(){var t=this;this.$on(Ps,(function(){t.$nextTick((function(){t.$refs.listContent.refresh()}))}))},methods:{maskClick:function(){this.hide()},onLeave:function(){this.$emit($s)},onAdd:function(t){this.$emit(Os,t)},empty:function(){var t=this;this.$createDialog({type:"confirm",content:"清空购物车吗？",$events:{confirm:function(){t.selectFoods.forEach((function(t){t.count=0})),t.hide()}}}).show()}},components:{CartControl:ct}},js=Ts,Fs=(e("d895"),Object(p["a"])(js,ks,Ss,!1,null,"9d7cbc22",null)),Ns=Fs.exports,Es=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"shop-cart-sticky"},[e("shop-cart",{ref:"shopCart",attrs:{selectFoods:t.selectFoods,deliveryPrice:t.deliveryPrice,minPrice:t.minPrice,fold:t.fold,sticky:!0}})],1)},Ls=[],Ds={name:"shop-cart-sticky",mixins:[bs],props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0},fold:{type:Boolean,default:!0},list:{type:Object,default:function(){}}},methods:{drop:function(t){this.$refs.shopCart.drop(t)}},components:{ShopCart:st}},Rs=Ds,Bs=(e("9bddd"),Object(p["a"])(Rs,Es,Ls,!1,null,"1d8943e4",null)),zs=Bs.exports,Ms=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"},on:{"after-leave":t.afterLeave}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"food"},[e("cube-scroll",{ref:"scroll",attrs:{data:t.computedRatings}},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image}}),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),e("div",{staticClass:"cart-control-wrapper"},[e("cart-control",{attrs:{food:t.food},on:{add:t.addFood}})],1),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count,expression:"!food.count"}],staticClass:"buy",on:{click:t.addFirst}},[t._v("加入购物车")])])],1),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品信息")]),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),e("split"),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),e("rating-select",{attrs:{ratings:t.ratings,onlyContent:t.onlyContent,selectType:t.selectType,desc:t.desc},on:{select:t.onSelect,toggle:t.onToggle}}),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.computedRatings&&t.computedRatings.length,expression:"computedRatings && computedRatings.length"}]},t._l(t.computedRatings,(function(s,i){return e("li",{key:i,staticClass:"rating-item border-bottom-1px"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),e("img",{staticClass:"avatar",attrs:{src:s.avatar,width:"12",height:"12"}})]),e("div",{staticClass:"time"},[t._v(t._s(t.format(s.rateTime)))]),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v(" "+t._s(s.text)+" ")])])})),0),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.computedRatings||!t.computedRatings.length,expression:"!computedRatings || !computedRatings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])],1)])},As=[],Is="show",Ys="leave",Hs="add",Js={mixins:[bs,Dt],name:"food",props:{food:{type:Object}},data:function(){return{desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},computed:{ratings:function(){return this.food.ratings}},created:function(){var t=this;this.$on(Is,(function(){t.$nextTick((function(){t.$refs.scroll.refresh()}))}))},methods:{afterLeave:function(){this.$emit(Ys)},addFirst:function(t){this.$set(this.food,"count",1),this.$emit(Hs,t.target)},addFood:function(t){this.$emit(Hs,t)},format:function(t){return mt()(t).format("YYYY-MM-DD hh:mm")}},components:{Split:wt,CartControl:ct,RatingSelect:Et}},Us=Js,Ws=(e("a1e4"),Object(p["a"])(Us,Ms,As,!1,null,"27f7ddda",null)),Gs=Ws.exports;Object(hs["a"])(i["a"],xs),Object(hs["a"])(i["a"],Ns),Object(hs["a"])(i["a"],zs),Object(hs["a"])(i["a"],Gs);e("f867");i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(os)}}).$mount("#app")},"5d9c":function(t,s,e){var i={"./zh-cn":"5c3a","./zh-cn.js":"5c3a"};function a(t){var s=n(t);return e(s)}function n(t){if(!e.o(i,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id="5d9c"},"69ff":function(t,s,e){"use strict";var i=e("2bb9"),a=e.n(i);a.a},"6c07":function(t,s,e){},"72e0":function(t,s,e){"use strict";var i=e("cfa8"),a=e.n(i);a.a},"75c2":function(t,s,e){"use strict";var i=e("3570"),a=e.n(i);a.a},"7f84":function(t,s,e){},"7faf":function(t,s,e){"use strict";var i=e("b8ff"),a=e.n(i);a.a},8142:function(t,s,e){"use strict";var i=e("eb0a"),a=e.n(i);a.a},"83cd":function(t,s,e){},9446:function(t,s,e){},"9a55":function(t,s,e){"use strict";var i=e("ff8d"),a=e.n(i);a.a},"9bddd":function(t,s,e){"use strict";var i=e("c879"),a=e.n(i);a.a},a1e4:function(t,s,e){"use strict";var i=e("2d24"),a=e.n(i);a.a},a2d3:function(t,s,e){"use strict";var i=e("0a6f"),a=e.n(i);a.a},a9a9:function(t,s,e){"use strict";var i=e("1e7f"),a=e.n(i);a.a},b8ff:function(t,s,e){},bd49:function(t,s,e){"use strict";var i=e("9446"),a=e.n(i);a.a},c1e5:function(t,s,e){"use strict";var i=e("2a49"),a=e.n(i);a.a},c879:function(t,s,e){},cfa8:function(t,s,e){},d895:function(t,s,e){"use strict";var i=e("16c6"),a=e.n(i);a.a},dd00:function(t,s,e){"use strict";var i=e("6c07"),a=e.n(i);a.a},eb0a:function(t,s,e){},ec5e:function(t,s,e){},f867:function(t,s,e){},ff8d:function(t,s,e){}});
//# sourceMappingURL=app.f52d44af.js.map