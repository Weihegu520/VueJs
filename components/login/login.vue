<template>
	<div>
		<mu-icon-menu icon="more_vert" @change="handleChange" :open="open" @open="handleOpen" @close="handleClose" :value="value">
			<mu-menu-item value="1" title="登录" @click="gtu()" />
			<mu-menu-item value="2" title="退出" />
		</mu-icon-menu>
		<!--<mu-raised-button label="toggle" @click="toggle" />-->
	</div>
</template>

<script>
	export default {
		data() {
				return {
					value: '3',
					open: false
				}
			},
			methods: {
				handleChange(val) {
					this.value = val
				},
				toggle() {
					this.open = !this.open
				},
				handleOpen() {
					this.open = true
				},
				handleClose() {
					this.open = false
				},
				gtu() {
					window.location.href = "#/entry"
				},
				// 设置cookie方法
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
			},

	}
</script>

<style>
	.mu-circular-progress {
		position: absolute;
		left: 50%;
		margin-left: -30px;
	}
</style>