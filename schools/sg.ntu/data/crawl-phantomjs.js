function visitPage(e,t,n){if(completed>=llength){fs.write(output,"]});","a"),e.close(),update&&updateFile(global);var r=new Date-timeStart;console.log("Spent "+(r/1e3).toFixed(2)+"s using "+thread+" pages"),phantom.exit();return}if(t===n||t>=llength){e.close();return}console.log("Visit page: "+url(list[t])),e.open(encodeURI(url(list[t])),function(r){if(r!=="success")console.log("===! Unable to access network\n");else{var i=e.evaluate(function(){var e,t,n,r,i=[];n=document.getElementsByTagName("tbody");for(e=0,t=n.length;e<t;e++)r=n[e].firstChild.getElementsByTagName("font"),r.length===3&&i.push(r[0].textContent.trim()+" "+r[1].textContent.trim());return console.log("===> Found "+i.length+" Modules"),i}),s=JSON.stringify(i);fs.write(output,s.substring(1,s.length-1)+(completed>=llength?"":","),"a"),completed++,console.log("==> completed "+t+" with "+completed+" total completed"),visitPage(e,t+1,n)}})}function updateFile(e){console.log("===> Update global Info ["+e+"]");var t=fs.open(e,"rw"),n=t.read();n=n.replace(/lastUpdate\s*:\s*(\".*\")/,'lastUpdate: "'+new Date+'"'),t.write(n),t.flush(),t.close(),console.log("===> Update Completed")}var webpage=require("webpage"),fs=require("fs"),sys=require("system"),list=require("./degrees").degrees;console.log("\n************* CORS PLANNER **************"),console.log("*** Crawl NTU Module Code and Titles ***"),console.log("*****************************************\n");var sem=function(e){var t=e.getFullYear(),n=e.getMonth();return n<=6?t-1+";2":n>=11?t+";2":t+";1"}(new Date),url=function(e){return"https://wish.wis.ntu.edu.sg/webexe/owa/AUS_SCHEDULE.main_display1?staff_access=false&r_course_yr="+e+"&boption=CLoad&ACADSEM="+sem},school="sg.ntu",thread=45,output="list.js",update=!0,global="../info.js";if(sys.args.length>1)for(var i=1;i<sys.args.length;i++)sys.args[i]==="-o"?output=sys.args[i+1]+".js":sys.args[i]==="-n"?update=!1:sys.args[i]==="-t"&&(thread=parseInt(sys.args[i+1],10));var llength=list.length,completed=0;console.log("list length = "+llength),fs.write(output,"define(function(){return[","w");var i,max=(llength/thread|0)+1;console.log("thread = "+thread+", max = "+max);var timeStart=new Date;for(i=0;i<thread;i++){var aPage=webpage.create();aPage.onConsoleMessage=function(e){console.log(e)},visitPage(aPage,max*i,max*(i+1))};