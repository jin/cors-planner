define(["require","exports","module"],function(e,t){var n=["midnightblue","forestgreen","orangered","royalblue","orange","darkslateblue","saddlebrown","olive","dodgerblue","seagreen","steelblue","darkorange","green","teal","indigo","navy"],r=0,i=n.length;t.get=function(e){return r=(r+1)%i,e?e:n[r]},t.length=function(){return i},t.used=function(){return r}});