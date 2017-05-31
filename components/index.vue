<template>
	<div>
		<div>

			<div class="gen">

				<mu-tabs :value="activeTab" @change="handleTabChange">
					<mu-tab value="tab1" title="招聘" href="#/index/tabs1" />
					<mu-tab value="tab2" title="问答" href="#/index/tabs2" />
					<mu-tab value="tab3" href="#/index/tabs3" title="分享" />
					<mu-tab value="tab4" title="精华" href="#/index/tabs4" />
				</mu-tabs>
			</div>
			<div class="gen3">
				<column v-show="bool"></column>
			</div>
			<div class="gen5">
				<login></login>
			</div>
		</div>
		<div class="gensss">
			<router-view></router-view>
		</div>

	</div>

</template>

<script>
	import column from "./column/column.vue"
	import login from "./login/login.vue"
	export default {
		data() {
				return {
					activeTab: 'tab1',
					bool: true
				}
			},
			methods: {
				handleTabChange(val) {
					this.activeTab = val
				},
				handleActive() {},
				getu() {

				}
				
			},
			components: {
				column,
				login
			}
	}
</script>

<style>
	.gen {
		width: 60%;
		position: absolute;
		left: 85px;
		top: 0;
		z-index: 10;
	}
	
	.gensss {
		width: 100%;
		position: absolute;
		top: 48px;
		left: 0;
	}
	
	.gen3 {
		width: 20%;
		height: 48px;
		position: absolute;
		top: 0;
	}
	
	.mu-raised-button-wrapper {
		height: 48px;
		line-height: 48px;
		position: absolute;
		left: 0;
		top: 0;
		background-color: #7e57c2;
	}
	
	.mu-raised-button-label {
		height: 48px;
		line-height: 48px;
		color: white;
	}
	
	.mu-raised-button {
		height: 48px;
	}
	
	.gen5 {
		width: 35%;
		height: 48px;
		text-align: center;
		margin-left: 15px;
		position: absolute;
		background-color: #7e57c2;
		right: 0;
		top: 0;
	}
	
	.mu-icon-menu {
		margin-left: 20px;
	}
</style>