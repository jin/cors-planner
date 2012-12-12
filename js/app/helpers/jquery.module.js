define(["require","exports","module"],function(e,t){(function(e){var t="planner_",n="modules",r=e("#tt-grid"),i=function(t,n){this.$elem=e(t),this.init(n)};i.prototype={constructor:i,init:function(e){this.$method=this.$elem.find(".method"),this.$info=this.$elem.find(".info"),this.data=e.data,this.id=this.data.get("code"),this.clash=[],this.updateElem(),this.attachEvents(),this.subscribeEvents(),this.resize()},get:function(e){return this.data.get(e)},resize:function(){var t=e("#metro-pivot").find(".pivotItem");this.$info.width(t.width()-43)},updateElem:function(){this.data.is("visible")||this.showOnTimetable(!1)},showOnTimetable:function(e,t,n){t=t||this.$method.find(".timetable i"),n=n||this.$elem,e?(n.removeClass("inactive"),t.removeClass("icon-eye-close").addClass("icon-eye-open")):(n.addClass("inactive"),t.removeClass("icon-eye-open").addClass("icon-eye-close"))},attachEvents:function(t,n){var i=this;this.$elem.on("mouseenter",function(){r.find(".slot[id^="+i.id+"-]").addClass("hover")}),this.$elem.on("mouseleave",function(){r.find(".slot[id^="+i.id+"-]").removeClass("hover")}),this.$elem.on("dblclick",function(){window._debug=window._debug||{},window._debug.module=i.data,window.console&&window.console.log(i)}),this.$method.on("click",".detail",function(){e.publish("module:detail",i.data),e("#metro-pivot").data("controller").goToItemByName("Detail")}),this.$method.on("click",".timetable",function(){var t=e(this).find("i");t.hasClass("icon-eye-open")?(t.removeClass("icon-eye-open").addClass("icon-eye-close"),i.$elem.addClass("inactive"),i.data.set("visible",!1),r.find(".slot[id^="+i.id+"-]").remove()):(t.removeClass("icon-eye-close").addClass("icon-eye-open"),i.$elem.removeClass("inactive"),i.data.set("visible",!0),e.publish("grid:module:reallocate",i.data))}),this.$method.on("click",".remove",function(){e(this).tooltip("destroy"),i.removeClash(),r.find(".slot[id^="+i.id+"-]").remove(),e.publish("grid:rows:clearEmpty"),i.$elem.fadeOut(500,function(){i.$elem.remove(),e.publish("module:remove",i.id)})})},subscribeEvents:function(){var t=this;e.subscribe("module:clean:all",function(){t.$method.find(".remove").trigger("click")}),this.$elem.on("clash.add",function(n,r){if(e.isArray(r)){if(r.length===0)return;t.clash=t.clash.concat(r)}else t.clash.push(r);t.handleClash()}),this.$elem.on("clash.remove",function(e,n){var r=t.clash.indexOf(n);r>=0&&t.clash.splice(r,1),t.handleClash()})},handleClash:function(){this.clash.length>0&&!this.$elem.hasClass("clashing")?this.$elem.addClass("clashing"):this.clash.length===0&&this.$elem.removeClass("clashing")},removeClash:function(){var t,n=this.clash.length,r;if(n<0)return;r=this.clash.splice(0,1)[0],e("#"+r).trigger("clash.remove",[this.id]).trigger("clash.add",[this.clash]);for(t=1;t<n;t++)e("#"+this.clash[t]).trigger("clash.remove",[this.id]).trigger("clash.add",[r])}},e.fn.module=function(r){return this.each(function(){e.data(this,t+n)||e.data(this,t+n,new i(this,r))})}})(jQuery)});