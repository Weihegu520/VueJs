<template>
	<div>
		<mu-appbar title="详情" style="text-align: center;">
			<mu-icon-button icon="close" slot="left" @click="get()" />
			<mu-icon-menu icon="" slot="right">
			</mu-icon-menu>
		</mu-appbar>
		<div class="gtnlo">
			<!--回到顶部-->
			<a href="javascript:scroll(0,0)">
				<img src="../../img/top2.png" />
			</a>
		</div>
		<div v-html="content" class="ggen" :scroller="scroller"></div>
		
			<strong>{{contents}}个回复</strong>
			<div v-for="gens in gen">
				<div class="gen-2">
					<img :src="gens.author.avatar_url" class="gen-3"/>
					<span>{{gens.ups.length}}</span>
					<div>
						<div>{{gens.author.loginname}}</div>
						<div>{{gens.create_at|gettime}}</div>
					</div>
				</div>
				<hr />
				<div>
					<div>
						<p v-html="gens.content"></p>
					</div>
				</div>
			</div>
		
		<!--评论-->
		<div class="ggen-2" v-show="!bool">
			<textarea class="ggen-2-1" v-show="!bool" v-model="textValue"></textarea>
		</div>
		<button class="ggen-3" v-show="!bool" @click="nogu()">评论</button>
		<Refresh v-show="bool"></Refresh>
	</div>
</template>

<script>
	import Refresh from "../Refresh/Refresh.vue"
	export default {
		data() {
				return {
					topic: "",
					content: "",
					scroller: null,
					bool: true,
					textValue: "",
					contents: "",//用来获取评论的内容
					gen: ""//用来渲染评论信息的内容
				}
			},
			//自定义时间
			filters: {
				gettime: function(val) {
					return val.substr(0, 10)
				}
			},
			methods: {
				//获取cookie 的方法
				getCookie(name) {
					var cookie = document.cookie.split('; ');
					var res;

					for(var i = 0; i < cookie.length; i++) {
						var arr = cookie[i].split('=');
						if(arr[0] === name) {
							res = arr[1];
							break;
						}
					}
					return res;
				},
				//请求详情的页面的数据
				getDetail() {
					var self = this;
					$.ajax({
						type: "get",
						url: "https://cnodejs.org/api/v1/topic/" + self.$route.params.id,
						async: true,
						success(data) {
							console.log(data)
							self.content = data.data.content;
							self.contents = data.data.replies.length;
							self.gen = data.data.replies;
							self.topic = data.data;
							self.bool = false
							console.log(self.contents)
						}
					});
				},
				//跳转的方法
				get() {
					window.location.href = "#/index/tabs1"
				},
				//评论成功与否的方法
				nogu() {

					var self = this;
					var cookie = self.getCookie("accesstoken");
					console.log("https://cnodejs.org/api/v1/topic/" + self.$route.params.id + "/replies")
					//判断cookie中是否有accesstoken
					if(cookie) {
						$.ajax({
								url: "https://cnodejs.org/api/v1/topic/" + self.$route.params.id + "/replies",
								type: "POST",
								data: {
									accesstoken: cookie,
									content: self.textValue
								},
								//请求成功的回调
								success: function(data) {
									console.log(data);
									alert("评论成功");
									self.bool = true;

									//用定时器定时让页面隐藏
									setTimeout(function() {
										self.bool = false;
									}, 500);

									//清空评论框输入的内容
									self.textValue = "";
									//重新刷新页面的数据让评论显示出来
									self.getDetail();
								}
							})
							//重新判断是否有用户存在才可以评论
					} else {
						alert("请登录后再评论");
						self.bool = true;

						setTimeout(function() {
							self.bool = false;
						}, 500);
					}
				}
			},
			mounted() {
				//获取Url数据传过来的ID
				console.log(this.$route.params.id);
				//可以让他先执行一次
				this.getDetail();

			},
			//注册方法
			components: {
				Refresh
			}
	}
</script>

<style>
	img {
		width: 100%;
		height: 250px;
	}
	
	.gtnlo {
		z-index: 10;
		width: 100px;
		height: 100px;
		position: fixed;
		right: 10px;
		bottom: 30px;
		cursor: hand;
	}
	
	.gtnlo img {
		width: 100px;
		height: 100px;
	}
	
	.ggen {
		height: 100%;
		margin-top: 56px;
	}
	
	.ggen-2 {
		width: 100%;
		height: 70px;
		background: red;
	}
	
	.ggen-2-1 {
		width: 100%;
		height: 70px;
	}
	
	.ggen-3 {
		position: absolute;
		right: 20px;
	}
	
	.mu-appbar {
		position: fixed;
		top: 0;
		left: 0;
	}
	
	.geen {
		width: 100%;
		height: 500px;
		background: red;
	}
	
	.gen-3{
		width: 50px;
		height: 50px;
	}
</style>