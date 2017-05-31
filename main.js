import $ from "jquery";
window.$ = $;

import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex"
Vue.use(VueRouter);
Vue.use(Vuex);

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

//头部的组件
var index = require("./components/index.vue")

//详情页面的组件
var dimension = require("./components/dimension/dimension.vue")

//左边栏的菜单
//var column = require("./components/column/column.vue")

//登录的菜单
var entry = require("./components/entry/entry.vue")

//加载的新闻
var load = require("./components/tabs1/load.vue")
var load2 = require("./components/tabs2/load2.vue")
var load3 = require("./components/tabs3/load3.vue")
var load4 = require("./components/tabs4/load4.vue")

//配置的路由
var router = new VueRouter({
	routes: [{
		path: "/index",
		component: index,
		children: [{
			path: "tabs1",
			component: load
		}, {
			path: "tabs2",
			component: load2
		}, {
			path: "tabs3",
			component: load3
		}, {
			path: "tabs4",
			component: load4
		}]
	}, {
		path: "/dimension/:id",
		component: dimension,
	},{
		path : "/entry",
		component : entry
	},{
		path : "/",
		redirect : "index/tabs1"
	}]
})

//实例化Vue 
new Vue({
	el: "#demo",
	template: `
	   <router-view></router-view>
	`,
	router,
	data: {},
	mouted: function() {
		
	}
})