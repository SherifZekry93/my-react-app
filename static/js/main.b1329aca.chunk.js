(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},42:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var a=n(2),i=n.n(a),s=n(17),o=n.n(s),c=(n(22),n(3)),r=n(4),u=n(6),l=n(5),h=(n(23),n(8)),d=n.n(h),p=(n(42),n(0)),b=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"loaderContainer",children:[Object(p.jsx)("div",{className:"loader"}),Object(p.jsx)("div",{children:"Loading Data"})]})}}]),n}(a.Component),f=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).loadApiData=function(e){t.setState({showLoading:!0}),d.a.get("/mi/api1.php").then((function(t){return t.data})).then((function(e){return t.mapLettersIntoNumbers(e)})).catch((function(e){console.log("here is the error",e),t.setState({display:"error getting data",showLoading:!1})}))},t.state={showLoading:!0,number1:"",number2:"",operation:"!"},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.loadApiData()}},{key:"setOperation",value:function(t){var e="".concat(this.state.number1," ").concat(this.getAllOperationSigns()[t]," ").concat(this.state.number2);this.setState({operation:t,display:e})}},{key:"getOperationResult",value:function(){var t=this;this.setState({showLoading:!0});var e={num1:this.state.number1,num2:this.state.number2,operation:this.state.operation};d.a.post("/mi/api2.php",e,{headers:{"Content-Type":"application/json"}}).then((function(t){return t.data})).then((function(e){t.setResult(e)})).catch((function(e){t.setState({display:"error getting data",showLoading:!1})}))}},{key:"setResult",value:function(t){var e="".concat(this.state.number1," ").concat(this.getAllOperationSigns()[this.state.operation]," ").concat(this.state.number2," = ").concat(Math.round(100*(t+Number.EPSILON))/100);this.setState({showLoading:!1,display:e})}},{key:"getAllOperationSigns",value:function(){return{minus:"-","divided by":"/",times:"*",plus:"+"}}},{key:"mapLettersIntoNumbers",value:function(t){var e={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19,twenty:20,thirty:30,forty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90,hundred:100},n=Object.values(t),a={};n.map((function(t,n){if(t.includes("-")){var i=t.split("-");a[n]=i.map((function(t){return e[t]})).reduce((function(t,e){return t+e}))}else a[n]||(a[n]=e[t]);return!0})),this.setState({number1:a[0],number2:a[1],display:"".concat(a[0]+" ! "+a[1]),showLoading:!1})}},{key:"getData",value:function(){}},{key:"render",value:function(){var t=this,e=this.state,n=e.showLoading,a=e.display;return Object(p.jsxs)("div",{className:"container",children:[n&&Object(p.jsx)(b,{}),Object(p.jsx)("div",{className:"display",children:a}),Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{className:"btn-operator",onClick:function(){t.setOperation("plus")},children:"+"}),Object(p.jsx)("button",{className:"btn-operator",onClick:function(){t.setOperation("minus")},children:"-"}),Object(p.jsx)("button",{className:"btn-operator",onClick:function(){t.setOperation("times")},children:"X"}),Object(p.jsx)("button",{className:"btn-clear",onClick:function(){t.loadApiData()},children:"C"}),Object(p.jsx)("button",{className:"btn-equals",onClick:function(){t.getOperationResult()},children:"="}),Object(p.jsx)("button",{className:"btn-operator",onClick:function(){t.setOperation("divided by")},children:"/"})]})]})}}]),n}(a.Component),m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),s(t),o(t)}))};o.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root")),m()}},[[44,1,2]]]);
//# sourceMappingURL=main.b1329aca.chunk.js.map