window.log=function(){log.history=log.history||[],log.history.push(arguments);if(this.console){var t=arguments,n;t.callee=t.callee.caller,n=[].slice.call(t),typeof console.log=="object"?log.apply.call(console.log,console,n):console.log.apply(console,n)}},function(e){function t(){}for(var n="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),r;!!(r=n.pop());)e[r]=e[r]||t}(function(){try{return console.log(),window.console}catch(e){return window.console={}}}());