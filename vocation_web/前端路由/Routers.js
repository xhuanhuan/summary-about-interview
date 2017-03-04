//way1
// function Router(){
//   this.routes={};
// }
//
// Router.prototype.route=function(path,callback){
//   this.routes[path]=callback || function(){};
// }
//
// Router.prototype.refresh=function(){
//   Router.routes[location.hash.slice(1) || '/']();
// }
//
// Router.prototype.init=function(){
//   window.addEventListener('load',this.refresh.bind(this));
//   window.addEventListener('hashchange',this.refresh.bind(this));
// }

//way2
// window.Router=(function(){
//   var routes={};
//   var route=function(path,callback){
//     routes[path]=callback || function(){};
//   };
//   var refresh=function(){
//     routes[location.hash.slice(1) || '/']();
//   };
//   var init=function(){
//     window.addEventListener('load',refresh);
//     window.addEventListener('hashchange',refresh);
//   };
//   return {
//     //routes:routes
//     route:route,
//     refresh:refresh,
//     init:init
//   };
// })();
//
//
// // window.Router=new Router();
// window.Router.init();
//


//way3
(function(win){
  win.Router= function(){
  this.currentUrl='';
  this.routes={};
  }
  Router.prototype.route = function(path,callback){
    this.routes[path] = callback || function(){}
  }
  Router.prototype.refresh = function(){
    this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl]();
  }
  Router.prototype.init = function(){
    window.addEventListener('load',this.refresh.bind(this),false);
    window.addEventListener('hashchange',this.refresh.bind(this),false);
  }
})(window);
var route=new Router();
route.init();
