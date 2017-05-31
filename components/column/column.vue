<template>
	<div>
		<mu-raised-button label="全部" @click="toggle(true)" />

		<mu-drawer :open="open" :docked="docked" @close="toggle()">
			<mu-appbar title="Cnodjs">
				<mu-icon-button icon="close" slot="left" @click="togink()" />

			</mu-appbar>
			<mu-list @itemClick="docked ? '' : toggle()">
				<mu-list-item title="Cnodjs 官方" @click="cnode()" class="gkk" />
				<mu-list-item title="关于作者" @click="hegu()" />
				<mu-list-item title="当前版本1.0" />
				<mu-list-item v-if="docked" @click.native="open = false" title="Close" />
			</mu-list>

			<p class="A1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cnode</p>
			<img src="../../img/cnode.jpg" class="A2" />
		</mu-drawer>
	</div>
</template>

<script>
	export default {
		data() {
				return {
					open: false,
					docked: true,
					book: true
				}
			},
			methods: {
				toggle(flag) {
					this.open = !this.open
					this.docked = !flag
				},
				//左侧栏的跳转
				cnode() {
					window.location.href = "https://cnodejs.org/?tab=all"
				},
				hegu() {
					window.location.href = "https://github.com/Weihegu520"
				},
				togink() {
					window.location.href = "#/index/tabs2"
					this.open = false
				}
			}
	}
</script>

<style>
	.A2 {
		position: absolute;
		top: 290px;
		left: 20%;
		margin-left: -30px;
		margin-top: 25px;
	}
	
	.A1 {
		width: 200px;
		height: 200px;
		font-size: 25px;
		text-align: center;
		font-weight: bold;
	}
	
	.mu-appbar-title {
		/*text-align: center;*/
	}
	
	.mu-appbar {
		height: 48px;
	}
	
	.gkk {
		margin-top: 5px;
	}
</style>