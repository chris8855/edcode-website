(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Z6Z7:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),r=n("YwZP"),c=n("Bl7J"),l=n("e01U"),u=n("Wbzz"),m=function(e){var t=e.roomID,n=Object(l.a)(),r=n.state,c=n.startVideo,m=n.videoRef,i=n.leaveRoom;return Object(a.useEffect)((function(){return r.token||Object(u.navigate)("/chat",{state:{roomName:t}}),r.room||c(),window.addEventListener("beforeunload",i),function(){window.removeEventListener("beforeunload",i)}}),[r,t,c,i]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"chat",ref:m}),o.a.createElement("h1",null,"room: ",t),r.room&&o.a.createElement("button",{className:"leave-room",onClick:i},"Leave Room"))},i=function(){return Object(a.useEffect)((function(){Object(u.navigate)("/chat",{replace:!0})}),[]),null};t.default=function(){return o.a.createElement(c.a,null,o.a.createElement(r.Router,null,o.a.createElement(m,{path:"room/:roomID"}),o.a.createElement(i,{default:!0})))}}}]);
//# sourceMappingURL=component---src-pages-room-js-fca5f3941bcc279ca8cf.js.map