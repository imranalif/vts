(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{tmcy:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("fXoL");let r=(()=>{class e{constructor(){}dateTime(e="datetime",t){let n=new Date(t),i=("0"+n.getDate()).slice(-2),r=("0"+(n.getMonth()+1)).slice(-2),c=n.getFullYear(),o=("0"+n.getHours()).slice(-2),a=("0"+n.getMinutes()).slice(-2),s=("0"+n.getSeconds()).slice(-2);return"date"==e?c+"-"+r+"-"+i:"datetime"==e?c+"-"+r+"-"+i+" "+o+":"+a+":"+s:"time"==e?o+":"+a:n}dateTimeDiff(e){return((new Date).getTime()-new Date(e).getTime())/1e3}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Vb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);