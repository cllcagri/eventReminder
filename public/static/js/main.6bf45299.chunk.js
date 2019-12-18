(this["webpackJsonpevent-reminder"]=this["webpackJsonpevent-reminder"]||[]).push([[0],{213:function(e,t,a){e.exports=a.p+"static/media/event-logo.252e2bef.png"},217:function(e,t,a){e.exports=a(408)},222:function(e,t,a){},408:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(212),i=a.n(c),l=(a(222),a(8)),o=a(30),s=a(213),u=a.n(s),m=a(6),d=Object(m.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})})).catch((function(t){e({type:"SIGNOUT_ERROR",err:t})}))}))}}}))((function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/createProject"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials)))})),h=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/signUp"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/signIn"},"Log In")))},p=Object(m.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement("li",null,r.a.createElement(d,{profile:a})):r.a.createElement("li",null,r.a.createElement(h,null));return r.a.createElement("nav",{className:"nav-wrapper",style:{background:"#242424"}},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"brand-logo"},r.a.createElement("img",{src:u.a,alt:"Event~Reminder",style:{width:"30px"}})),r.a.createElement("ul",{className:"right"},n)))})),E=a(24),f=a(25),b=a(28),g=a(26),N=a(29),v=a(47),j=a.n(v),O=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user),r.a.createElement("span",null," ",e.content),r.a.createElement("div",{className:"grey-text note-date"},j()(e.time.toDate()).fromNow()))}))))))},y=function(e){var t=e.project;console.log("project sum"),console.log(t);return r.a.createElement("div",{className:"card z-depth-0 project-summary",style:{marginTop:"30px"}},r.a.createElement("div",{className:"card-content grey-text text-darken-3",key:t.id},r.a.createElement("span",{className:" card-title"},t.title),r.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},j()(t.createdAt.toDate()).calendar())))},F=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return r.a.createElement(l.b,{to:/project/+e.id,key:e.id},r.a.createElement(y,{project:e}))})))},C=a(18),S=a(16),w=function(e){function t(){return Object(E.a)(this,t),Object(b.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(F,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(O,{notifications:n})))):r.a.createElement(o.a,{to:"/signIn"})}}]),t}(n.Component),R=Object(S.d)(Object(m.b)((function(e){return console.log(e),{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(C.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(w),I=Object(S.d)(Object(m.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(C.firestoreConnect)([{collection:"projects"}]))((function(e){console.log(e);var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content",key:t.id},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,j()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",null,"Loading project..."):r.a.createElement(o.a,{to:"/signIn"})})),x=a(27),k=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",{className:"container",style:{paddingTop:"30px"}},r.a.createElement("form",{onSubmit:this.handleSubmit,style:{backgroundColor:"#E0FFFF"}},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"Input Field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"Input Field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},this.props.authErr?r.a.createElement("p",null,this.props.authErr):null))))}}]),t}(n.Component),T=Object(m.b)((function(e){return{authErr:e.auth.authErr,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(k),U=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authErr;return t.uid?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",{className:"container",style:{paddingTop:"30px"}},r.a.createElement("form",{onSubmit:this.handleSubmit,style:{backgroundColor:"#E0FFFF"}},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"Input Field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"Input Field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"Input Field"},r.a.createElement("label",{htmlFor:"firstName"},"FirstName"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"Input Field"},r.a.createElement("label",{htmlFor:"lastName"},"LastName"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null," ",a," "):null))))}}]),t}(n.Component),A=Object(m.b)((function(e){return{auth:e.firebase.auth,authErr:e.auth.authErr}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(U),P=a(23),_=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,style:{backgroundColor:"#E0FFFF"}},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create Project"),r.a.createElement("div",{className:"Input Field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"Input Field"},r.a.createElement("label",{htmlFor:"content"},"Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(o.a,{to:"/signIn"})}}]),t}(n.Component),L=Object(m.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return console.log(e),function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(P.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(_),G={backgroundColor:"#E0FFFF",height:"1050px"};var D=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App",style:G},r.a.createElement(p,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:R}),r.a.createElement(o.b,{path:"/project/:id",component:I}),r.a.createElement(o.b,{path:"/signIn",component:T}),r.a.createElement(o.b,{path:"/signUp",component:A}),r.a.createElement(o.b,{path:"/createProject",component:L}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z={authErr:null},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log("login success"),Object(P.a)({},e,{authErr:null});case"LOGIN_ERROR":return Object(P.a)({},e,{authErr:"Login failed."});case"SIGNOUT_SUCCESS":return console.log("signout success"),Object(P.a)({},e,{authErr:null});case"SIGNOUT_ERROR":return Object(P.a)({},e,{authErr:"Signout failed."});case"SIGNUP_SUCCESS":return console.log("signup success"),Object(P.a)({},e,{authErr:null});case"SIGNUP_ERROR":return Object(P.a)({},e,{authErr:t.err.message});default:return e}},B={projects:[{id:"1",title:"The Fellowship of the Ring",content:"A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed."},{id:"2",title:"The Return of the King",content:"The former Fellowship members prepare for the final battle. While Frodo and Sam approach Mount Doom to destroy the One Ring, they follow Gollum unaware of the path he is leading them to."},{id:"3",title:"The Two Towers",content:"Frodo and Sam arrive in Mordor with the help of Gollum. A number of new allies join their former companions to defend Isengard as Saruman launches an assault on it."}]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return e;case"CREATE_PROJECT_ERROR":return console.log("created project error",t.err),e;default:return e}},M=a(60),K=Object(S.c)({auth:J,project:W,firestore:M.firestoreReducer,firebase:C.firebaseReducer}),V=a(216),X=a(92),q=a.n(X);a(403),a(406);q.a.initializeApp({apiKey:"AIzaSyCiSiaOOEAH_JAg37uLD_tXnSeVjqgOmU8",authDomain:"event-reminder-9bf86.firebaseapp.com",databaseURL:"https://event-reminder-9bf86.firebaseio.com",projectId:"event-reminder-9bf86",storageBucket:"event-reminder-9bf86.appspot.com",messagingSenderId:"804069647173",appId:"1:804069647173:web:f1b4e359d2dd914228142c",measurementId:"G-EV1MXN2N8T"}),q.a.firestore().settings({timestampsInSnapshots:!0});var H=q.a,$=Object(S.e)(K,Object(S.d)(Object(S.a)(V.a.withExtraArgument({getFirebase:C.getFirebase,getFirestore:M.getFirestore})),Object(M.reduxFirestore)(H),Object(C.reactReduxFirebase)(H,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));Object(C.authIsReady)($,"firebase").then((function(){i.a.render(r.a.createElement(m.a,{store:$},r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}))}},[[217,1,2]]]);
//# sourceMappingURL=main.6bf45299.chunk.js.map