define(["require","exports","module","util/helper"],function(e,t){function i(e){return"https://aces01.nus.edu.sg/cors/jsp/report/ModuleDetailedInfo.jsp?acad_y="+e.acadYear+"&sem_c="+e.semester+"&mod_c="+e.modCode.toUpperCase()}function s(e){return"http://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent(e)+"&format=json&callback="}function o(e,t){return function(n){n.url=e,t(n)}}var n=e("util/helper"),r=$.extend({},{modCode:"ACC1002"},n.getSemester());t.request=function(e,t){$.getJSON(s(e),o(e,t))},t.requestModule=function(e,t){typeof e=="string"&&(e={modCode:e});var n=$.extend({},r,e),u=i(n),a="select * from html where url='"+u+"' and xpath='//table'";$.getJSON(s(a),o(u,t))}});