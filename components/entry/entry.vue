<template>
	<div>
		<mu-dialog :open="dialog" title="登录" @close="close">
			请在这里登录
			<input type="text" placeholder="请输入你的密钥" v-model="accesstoken" />
			<mu-flat-button slot="actions" @click="close" primary label="返回" />
			<mu-flat-button slot="actions" primary label="确定" @click="toGo()" />
		</mu-dialog>
	</div>
</template>

<script>
	export default {
		data() {
				return {
					dialog: true,
					accesstoken: "",
					name: "",
					head: "",
					cookie: ""
				}
			},
			methods: {
				close() {
					this.dialog = false;
					window.location.href = "#/index/tabs1"
				},
				toGo() {
					var self = this;
					$.ajax({
						url: "https://cnodejs.org/api/v1/accesstoken",
						type: "POST",
						data: {
							accesstoken: self.accesstoken
						},
						//请求成功的回调
						success: function(data) {
							console.log(data);
							if(data) {
								self.name = data.loginname;
								self.head = data.avatar_url;

								//保存在cookie中
								var date = new Date();
								date.setDate(date.getDate() + 7); //设置cookie的保存的时间
								self.setCookie('accesstoken', self.accesstoken, date)

								var cookie = self.getCookie('accesstoken')

								self.cookie = cookie;

								setTimeout(function() {
									alert("登录成功");
									self.dialog = false;
									window.location.href = "#/index/tabs1";
								}, 500)
							}
						},
						//请求失败的回调
						error: function() {
							alert("请输入你的密钥")
						}
					})
				},
				// 设置cookie方法 cookie保存的路径
				setCookie(name, val, expires, path) {
					var cookieStr = name + '=' + val;

					if(expires) {
						cookieStr += ';expires=' + expires;
					}

					if(path) {
						cookieStr += ';path=' + path;
					}

					// 写入cookie
					document.cookie = cookieStr;
				},
				// 获取cookie方法
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
				}
			}
	}
</script>