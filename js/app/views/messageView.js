define(["require","exports","module","util/toastr"],function(e,t){var n=e("util/toastr");t.init=function(){},$.subscribe("message:error",function(e,t){n.error(t)}),$.subscribe("message:info",function(e,t){n.info(t)}),$.subscribe("message:warning",function(e,t){n.warning(t)}),$.subscribe("message:success",function(e,t){n.success(t)}),$.subscribe(planner.list.modules+":duplicatedExamDate",function(e,t,r){n.warning("Exam Date ("+t.get("examDate")+") clashes between "+r.get("code")+" "+r.get("title")+" and "+t.get("code")+" "+t.get("title")+".")}),$.subscribe(planner.list.modules+":addOne:duplicated",function(e,t){n.error("Module "+t.get("code")+" "+t.get("title")+" is in your module list.")})});