(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22ca37"],{f3a5:function(t,n,e){"use strict";e.r(n);var c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-main",[e("h1",[t._v("html5无刷新改变url")]),e("div",{staticStyle:{margin:"30px 0"},attrs:{id:"info"}},[t._v(" 页面真实地址: ")]),e("div",[t._v(" 请输入要改变地URL字符串："),e("input",{attrs:{id:"url",type:"text"}}),e("button",{on:{click:function(n){return t.changeURL()}}},[t._v("点击无刷改变url")])]),e("div",{staticStyle:{color:"red","margin-top":"30px"}},[t._v("请使用支持html5的浏览器访问")])])},i=[],o={data:function(){return{welcome:"欢迎进入"}},created:function(){},methods:{changeURL:function(){document.getElementById("url").value;window.history.pushState({},0,"http://localhost:8080/#/sys/role")}}},r=o,a=e("2877"),l=Object(a["a"])(r,c,i,!1,null,"68268b07",null);n["default"]=l.exports}}]);