define(["require","exports","module","api/yql","api/parser","model/module"],function(e,t){function o(e,t){this.name=e,this.list=[],this.options=$.extend({},{mute:!1,prefix:this.name+":"},t)}function u(e,t,o){if(s[e])return;s[e]=!0,o=o||0;if(o===3)return $.publish("message:error","Fetching data for Module "+e+" failed, Please try again later.");n.requestModule(e,function(n){var a=r.parse(n);a!==null?(a.isAvailable?t(new i(a)):$.publish("message:error","Module "+e+" is not available."),delete s[e]):(delete s[e],u(e,t,o+1))})}var n=e("api/yql"),r=e("api/parser"),i=e("model/module"),s={};return o.fn=o.prototype,o.fn.find=function(e){var t=0,n=this.list.length;for(;t<n;t++)if(this.list[t].isSame(e))return t;return-1},o.fn.get=function(e){return typeof e=="number"&&e>=0&&e<this.list.length?this.list[e]:typeof e=="string"||typeof e=="object"?this.get(this.find(e)):null},o.fn.add=function(e,t){t=$.extend({},this.options,t),this.find(e)===-1?typeof e=="object"?this._add(e,t):typeof e=="string"&&u(e,$.proxy(function(e){this._add(e,t)},this)):t.mute||$.publish(t.prefix+"addOne:duplicated",this.get(e))},o.fn.populate=function(e,t){var n,r=e.length;for(n=0;n<r;n++)this._add(new i(e[n].data,e[n].status),t)},o.fn._add=function(e,t){var n=this.duplicated("examDate",e.get("examDate"));t=$.extend({},this.options,t),e.set("list",this.name),this.list.push(e),$.publish("module:save"),t.mute||($.publish(t.prefix+"addOne",[e]),n>=0&&e.get("examDate").indexOf("No Exam")<0&&$.publish(t.prefix+"duplicatedExamDate",[this.get(n),e]))},o.fn.remove=function(e,t){var n;return t=$.extend({},this.options,t),typeof e=="number"&&e>=0&&e<this.list.length?(n=this.list.splice(e,1)[0],$.publish("module:save"),t.mute||$.publish(t.prefix+"removeOne",[n]),n):typeof e=="string"||typeof e=="object"?this.remove(this.find(e),t):null},o.fn.clean=function(e){e=$.extend({},this.options,e),this.list=[],$.publish("module:save"),e.mute||$.publish(e.prefix+"clean")},o.fn.length=function(){return this.list.length},o.fn.duplicated=function(e,t){var n,r=this.list.length;for(n=0;n<r;n++)if(this.list[n].get(e)===t)return n;return-1},o.fn.toJSON=function(){var e=[],t,n=this.list.length;for(t=0;t<n;t++)e.push(this.list[t].toJSON());return e},o});