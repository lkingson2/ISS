(this.webpackJsonpkaplanlabs=this.webpackJsonpkaplanlabs||[]).push([[0],{28:function(e,t,n){e.exports=n(43)},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},39:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(24),r=n.n(c);n(33),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(34);var o=n(16),i=n(17),s=n(19),u=n(18),m=(n(35),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).getAstronauts=function(){fetch("http://api.open-notify.org/astros.json").then((function(e){return e.json()})).then((function(e){a.setState({astronauts:e.people})})).catch((function(e){return console.log(e)}))},a.state={astronauts:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.getAstronauts()}},{key:"render",value:function(){return l.a.createElement("div",{className:"space-people"},l.a.createElement("div",{className:"list"},l.a.createElement("h2",null,"Astronauts at ISS"),l.a.createElement("ul",null,this.state.astronauts.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/".concat(e.name),target:"_blank",rel:"noopener noreferrer"},e.name+"        "+e.craft))})))))}}]),n}(l.a.Component)),p=n(11);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("path",{d:"M499.271,12.7C488.621,2.054,473.212-2.307,458.563,1.18l-64.683,15.396c-7.74,1.896-14.817,5.864-20.471,11.479 L334.94,66.525c-1.455-4.353-3.889-8.314-7.115-11.579c-12.035-11.317-30.798-11.317-42.833,0L140.63,199.313 c-17.435,2.139-33.051,3.106-43.383,3.517c-14.221,0.429-27.754,6.221-37.883,16.213l-13.775,13.779 c-8.726,9.299-9.589,23.495-2.054,33.783l11.923,17.877L5.038,334.901c-6.717,6.735-6.717,17.636,0,24.371l18.454,18.454 c6.734,6.726,17.643,6.728,24.379,0.004l41.859-41.859l5.115,7.67l-15.974,15.972c-6.721,6.734-6.721,17.638,0,24.371l0.121,0.121 l-12.421,12.42c-3.235,3.231-5.053,7.615-5.054,12.187s1.816,8.957,5.05,12.188l24.608,24.608 c3.231,3.235,7.615,5.053,12.187,5.054s8.957-1.816,12.188-5.05l12.425-12.425l0.121,0.121c6.733,6.722,17.638,6.722,24.371,0 l15.972-15.974l7.67,5.115l-41.859,41.859c-6.722,6.735-6.722,17.64,0,24.375l18.458,18.458c6.735,6.717,17.636,6.717,24.371,0 l50.419-50.419l17.877,11.923c4.79,3.26,10.439,5.027,16.233,5.079c6.567,0.065,12.887-2.504,17.546-7.133l13.782-13.779 c9.992-10.126,15.783-23.656,16.213-37.875c0.411-10.335,1.378-25.952,3.517-43.388l144.366-144.362 c7.431-7.35,10.522-18.026,8.165-28.209c-2.357-10.183-9.824-18.416-19.729-21.753l38.46-38.459 c5.63-5.675,9.603-12.779,11.492-20.546l15.383-64.617C514.286,38.755,509.92,23.347,499.271,12.7z M297.059,67.013 c5.247-4.961,13.456-4.959,18.7,0.004c5.159,5.159,5.161,13.522,0.006,18.684l-27.694,27.695l-63.946,63.946 c-17.405,8.3-35.864,14.178-54.864,17.471L297.059,67.013z M97.917,219.88c34.517-1.371,94.308-6.858,134.165-27.416 c0.181-0.07,0.335-0.195,0.512-0.278c4.665-2.384,9.156-5.093,13.44-8.107c17.061-13.146,37.097-21.89,58.338-25.458 l-133.41,133.414c-2.006-0.339-4.032-0.537-6.066-0.593c-8.55-0.023-16.914,2.502-24.023,7.252l-68.42-68.421 C79.419,223.867,88.457,220.179,97.917,219.88z M349.717,187.113L213.453,323.377c-1.628-2.497-3.509-4.821-5.611-6.935 l-12.304-12.304c-2.114-2.102-4.438-3.983-6.935-5.611l136.264-136.264L349.717,187.113z M336.934,150.197l12.424-12.425 c1.544-1.545,3.268-2.901,5.133-4.037l33.921-20.025c2.711-0.378,5.441,0.547,7.362,2.496c0.319,0.32,0.613,0.663,0.88,1.027 c1.364,1.811,1.945,4.093,1.612,6.335l-19.988,33.867c-1.145,1.886-2.511,3.627-4.071,5.188l-12.425,12.425L336.934,150.197z  M35.563,365.663l-18.459-18.696l48.008-48.008l14.952,22.419L35.563,365.663z M57.734,257.138 c-2.874-3.566-2.906-8.643-0.079-12.246l2.641-2.642l67.921,67.921l-21.066,21.064L57.734,257.138z M103.246,433.347 l-24.613-24.613v-0.237l12.425-12.425l24.808,24.813L103.246,433.347z M140.163,421.043l-6.154-6.154l-36.917-36.917l-6.154-6.154 l55.379-55.612c4.927-4.928,11.609-7.696,18.577-7.696c6.968,0,13.65,2.768,18.577,7.696l12.304,12.304 c4.927,4.927,7.696,11.609,7.696,18.577c0,6.968-2.768,13.65-7.696,18.577L140.163,421.043z M164.775,494.876l-18.458-18.7 l44.27-44.27l22.415,14.95L164.775,494.876z M267.084,454.326c-3.603,2.823-8.676,2.79-12.242-0.079l-74.097-49.418l21.063-21.066 l67.92,67.919L267.084,454.326z M292.1,414.067c-0.299,9.458-3.988,18.494-10.395,25.459l-68.419-68.419 c4.751-7.109,7.275-15.473,7.252-24.023c-0.056-2.033-0.254-4.06-0.593-6.066l133.443-133.443 c-3.584,21.25-12.335,41.293-25.483,58.367c-3.012,4.281-5.72,8.769-8.102,13.431c-0.086,0.184-0.215,0.343-0.287,0.531 C298.957,319.763,293.47,379.549,292.1,414.067z M444.967,214.922l-127.8,127.797c3.293-18.999,9.171-37.458,17.47-54.862 l63.947-63.947l27.691-27.69c5.233-4.989,13.461-4.988,18.693,0.003C450.121,201.389,450.121,209.754,444.967,214.922z  M494.2,49.467l-15.362,64.525c-1.147,4.727-3.56,9.053-6.979,12.513l-57.647,57.644l-0.007,0.006l-49.918,49.918 c5.473-13.95,7.697-28.963,6.504-43.9l15.485-15.485c2.559-2.562,4.799-5.424,6.671-8.525l20.738-35.133 c0.408-0.694,0.716-1.441,0.917-2.221c2.263-8.84-0.306-18.218-6.758-24.671c-6.453-6.453-15.831-9.022-24.671-6.758 c-0.779,0.2-1.527,0.509-2.221,0.917l-35.188,20.771c-3.081,1.863-5.925,4.092-8.471,6.638l-15.542,15.542 c-14.908-1.235-29.9,0.964-43.825,6.429l49.9-49.9l0.006-0.008l57.64-57.642c3.439-3.405,7.738-5.812,12.438-6.967L462.5,17.784 c8.889-2.12,18.241,0.523,24.704,6.983C493.667,31.227,496.316,40.578,494.2,49.467z"}))),E=l.a.createElement("g",null),v=l.a.createElement("g",null),d=l.a.createElement("g",null),S=l.a.createElement("g",null),k=l.a.createElement("g",null),b=l.a.createElement("g",null),y=l.a.createElement("g",null),j=l.a.createElement("g",null),w=l.a.createElement("g",null),C=l.a.createElement("g",null),I=l.a.createElement("g",null),O=l.a.createElement("g",null),M=l.a.createElement("g",null),L=l.a.createElement("g",null),z=l.a.createElement("g",null),x=function(e){var t=e.svgRef,n=e.title,a=h(e,["svgRef","title"]);return l.a.createElement("svg",f({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 10000 10000",style:{enableBackground:"new 0 0 511.981 511.981",fill:"black"},xmlSpace:"preserve",ref:t},a),n?l.a.createElement("title",null,n):null,g,E,v,d,S,k,b,y,j,w,C,I,O,M,L,z)},N=l.a.forwardRef((function(e,t){return l.a.createElement(x,f({svgRef:t},e))})),D=(n.p,n(39),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).TrackISS=function(){fetch("http://api.open-notify.org/iss-now.json").then((function(e){return e.json()})).then((function(e){a.state.pastISSLocation.push(a.ISSLocation);var t=parseFloat(e.iss_position.latitude,10),n=parseFloat(e.iss_position.longitude,10);n>=-125&&(n-=55),a.setState({ISSlocation:[n,t]}),console.log(a.state.ISSlocation)})).catch((function(e){return console.log(e)}))},a.handleClick=function(e){e.preventDefault(),console.log(e.clientX+" "+e.clientY)},a.state={ISSlocation:[0,0],pastISSLocation:[],mapDimensions:[],mapCenter:[],futureISSLocation:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.TrackISS(),this.intervalID=setInterval((function(){return e.TrackISS()}),1e4);var t=document.getElementsByClassName("rsm-sphere")[0].getBoundingClientRect(),n=[(t.bottom-t.top)/2,(t.right-t.left)/2];this.setState({mapDimensions:[t.width,t.height]}),this.setState({mapCenter:n})}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"map"},l.a.createElement(p.ComposableMap,{projectionConfig:{scale:147,rotate:[0,0,0]}},l.a.createElement(p.Sphere,{stroke:"#E4E5E6",strokeWidth:1,fill:"#2da1db",onClick:this.handleClick}),l.a.createElement(p.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"},(function(t){return t.geographies.map((function(t){return l.a.createElement(p.Geography,{key:t.rsmKey,geography:t,fill:"#5cd97d",stroke:"#fff6ec",onClick:e.handleClick})}))})),l.a.createElement(p.Marker,{key:"ISS",coordinates:this.state.ISSlocation},l.a.createElement(N,{className:"space-ship"}))))}}]),n}(l.a.Component));var B=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",{className:"title"}," International Space Station Over Earth"),l.a.createElement("div",{className:"container"},l.a.createElement(D,null),l.a.createElement(m,null)))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.81f92541.chunk.js.map