(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),i=a(8),l=a.n(i),s=(a(15),a(1)),n=a(2),u=a(4),o=a(3),p=a(5),b=a(6),d=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props.value.toString().match(/[-123456789\.].{0,13}/);return console.log(e),e?e.input.length>13&&(e="".concat(e,"*")):e=0,r.a.createElement("div",{className:"display",id:"display"},e)}}]),t}(r.a.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"button ".concat(this.props.type),style:{gridArea:this.props.id},onClick:this.props.click,type:this.props.type,value:this.props.value,tabIndex:"0",id:this.props.id},this.props.value)}}]),t}(r.a.Component),m=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"keypad"},r.a.createElement(k,{click:this.props.click,type:"number",id:"one",value:"1"}),r.a.createElement(k,{click:this.props.click,type:"number",id:"two",value:"2"}),r.a.createElement(k,{click:this.props.click,type:"number",id:"three",value:"3"}),r.a.createElement(k,{click:this.props.click,type:"number",id:"four",value:"4"}),r.a.createElement(k,{click:this.props.click,type:"number",id:"five",value:"5"}),r.a.createElement(k,{click:this.props.click,type:"number",id:"six",value:"6"}),r.a.createElement(k,{click:this.props.click,type:"number",id:"seven",value:"7"}),r.a.createElement(k,{click:this.props.click,type:"number",id:"eight",value:"8"}),r.a.createElement(k,{click:this.props.click,type:"number",id:"nine",value:"9"}),r.a.createElement(k,{click:this.props.click,type:"number",id:"zero",value:"0"}),r.a.createElement(k,{click:this.props.click,type:"decimal",id:"decimal",value:"."}),r.a.createElement(k,{click:this.props.click,type:"operator",id:"add",value:"+"}),r.a.createElement(k,{click:this.props.click,type:"operator",id:"subtract",value:"-"}),r.a.createElement(k,{click:this.props.click,type:"operator",id:"multiply",value:"*"}),r.a.createElement(k,{click:this.props.click,type:"operator",id:"divide",value:"/"}),r.a.createElement(k,{click:this.props.click,type:"clear",id:"clear",value:"A/C"}),r.a.createElement(k,{click:this.props.click,type:"operator",id:"equals",value:"="}))}}]),t}(r.a.Component),h=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={subtotal:0,number:0,operator:"+",value:0,isNewValue:!0},a.handleClick=a.handleClick.bind(Object(b.a)(Object(b.a)(a))),a.updateState=a.updateState.bind(Object(b.a)(Object(b.a)(a))),a}return Object(p.a)(t,e),Object(n.a)(t,[{key:"handleClick",value:function(e){this.updateState(e.target.getAttribute("type"),e.target.getAttribute("value")),e.target.blur()}},{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keypress",function(t){switch(!0){case/[1234567890]/.test(t.key):e.updateState("number",t.key);break;case/[.]/.test(t.key):e.updateState("decimal",t.key);break;case/[+\-*\/]/.test(t.key):e.updateState("operator",t.key);break;case/enter||=/i.test(t.key):e.updateState("operator","=")}var a;(a="Enter"!=t.key?document.querySelector("[value='".concat(t.key,"']")):document.querySelector("[value='=']"))&&(a.focus(),setTimeout(function(){return a.blur()},100))})}},{key:"updateState",value:function(e,t){var a=this;switch(e){case"operator":this.state.isNewValue?this.setState({subtotal:this.state.value,operator:t},function(){return console.log(a.state)}):this.setState({number:+this.state.value},function(){var e=0;switch(a.state.operator){case"+":e=a.state.subtotal+a.state.number;break;case"-":e=a.state.subtotal-a.state.number;break;case"*":e=a.state.subtotal*a.state.number;break;case"/":e=a.state.subtotal/a.state.number;break;case"=":e=a.setState.subtotal;default:e=0}"="==t?a.setState({subtotal:0,value:e,operator:"+",isNewValue:!0}):a.setState({subtotal:e,value:e,operator:t,isNewValue:!0})});break;case"number":this.state.isNewValue?this.setState({value:t,isNewValue:!1}):this.setState({value:"".concat(this.state.value).concat(t),isNewValue:!1});break;case"decimal":var c=this.state.value.toString();this.state.isNewValue?this.setState({value:"0.",isNewValue:!1}):c.match(/\./)||this.setState({value:"".concat(this.state.value,"."),isNewValue:!1});break;case"clear":this.setState({subtotal:0,value:0,operator:"+",isNewValue:!0});break;default:console.log("Error!")}}},{key:"render",value:function(){return r.a.createElement("div",{className:"calculator"},r.a.createElement(d,{value:this.state.value}),r.a.createElement(m,{click:this.handleClick}))}}]),t}(r.a.Component);var v=document.getElementById("root");l.a.render(r.a.createElement(function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"wrapper-label"},"Calculator"),r.a.createElement(h,null)))},null),v)},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.ec97fa4c.chunk.js.map