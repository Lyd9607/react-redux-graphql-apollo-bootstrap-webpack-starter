(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{682:function(e,t,n){"use strict";n.r(t);var r,o=n(71),i=n(33),u=n(177),a=n.n(u),s=n(94),c=n(90),f=n.n(c),l=n(72),p=n(1),d=(n(22),n(93)),b=n(18),h=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var i=e&&e.defaultProps,u=arguments.length-3;if(t||0===u||(t={}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===u)t.children=o;else if(u>1){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var y,m,w=h("div",{},"homeView",h(d.a,{},void 0,h("h1",{},void 0,"Full ES2015 ReactJS + Redux + graphQL + Apollo + Bootstrap"),h("h2",{},void 0,"with Hot Reload!!!"),h("h2",{},void 0,"with React Router (Server Side rendered SPA)"),h("h1",{},void 0,"Starter"),h("p",{},void 0,h(b.a,{className:"btn btn-success btn-lg",to:"/about"},void 0,h("i",{className:"fa fa-info"}),"  go to about")))),g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,p["PureComponent"]),v(t,[{key:"componentDidMount",value:function(){(0,this.props.enterHome)()}},{key:"componentWillUnmount",value:function(){(0,this.props.leaveHome)()}},{key:"render",value:function(){return w}}]),t}(),O=n(89),j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A=(y=["\n  query GetUser($user: ID!) {\n    getUser(id: $user) {\n      id\n      username\n      createdAt\n      modifiedAt\n      lastLogin\n    }\n    getRole(id: $user) {\n      id\n      name\n      createdAt\n    }\n  }\n"],m=["\n  query GetUser($user: ID!) {\n    getUser(id: $user) {\n      id\n      username\n      createdAt\n      modifiedAt\n      lastLogin\n    }\n    getRole(id: $user) {\n      id\n      name\n      createdAt\n    }\n  }\n"],Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(m)}})));var P=a()(A),S={options:function(e){var t=e.userAuth;return{variables:{user:t.id?t.id:""}}},skip:function(e){return!e.isAuthenticated},name:"getCurrentUser",props:function(e){e.ownProps;var t=e.getCurrentUser,n=t.loading,r=t.getUser,o=t.getRole,i=t.refetch;return{userLoading:n,user:j({},o,r),refetchUser:i}}};t.default=f()(Object(O.a)(),Object(o.b)(function(e){return{currentView:e.views.currentView,userAuth:e.userAuth}},function(e){return Object(i.bindActionCreators)(j({},l),e)}),Object(s.graphql)(P,S))(g)}}]);