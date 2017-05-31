<template>
	<div class="demo-infinite-container">
		<mu-list>
			<template v-for="item in list">
				<mu-list-item :title="item.title" :href="'#/dimension/'+item.id" />
				<img :src="item.author.avatar_url" class="gun1" />
				<mu-divider/>
			</template>
		</mu-list>
		<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" />
		<div class="gtnlo" @click="toTop()"></div>
		<router-view></router-view>
		<Refresh v-show="bool"></Refresh>
	</div>
</template>

<script>
	import Refresh from "../Refresh/Refresh.vue"
	export default {
		data() {
				var list = []

				return {
					list,
					num: 14,
					loading: false,
					scroller: null,
					topic: "",
					bool: true,
					pagew: 1
				}
			},
			mounted() {
				this.scroller = this.$el

				var self = this;
				//请求页面的数据
				$.ajax({
					type: "get",
					url: "https://cnodejs.org/api/v1/topics",
					async: true,
					data: {
						page: self.pagew,
						tab: "share"
					},
					success(data) {
						self.bool = false
						self.topic = data.data
						console.log(self.topic)
						self.list = self.topic;

					}
				});
			},
			methods: {
				//如果还有数据不断增加在页面上
				loadMore() {
					this.loading = true

					var self = this;
					$.ajax({
						type: "get",
						url: "https://cnodejs.org/api/v1/topics",
						data: {
							page: self.pagew++,
							tab: "share"
						},
						async: true,
						success(data) {
							self.topic = data.data

							self.list = self.list.concat(data.data);
							console.log(self.list)
							self.num += 14
							self.loading = false
						}
					});

				},
				//回到顶部的方法
				toTop: function() {
					$(".demo-infinite-container")[0].scrollTop = 0;
				}
			},
			components: {
				Refresh
			}
	}
</script>

<style lang="css">
	.demo-infinite-container {
		width: 100%;
		height: 600px;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		border: 1px solid #d9d9d9;
	}
	
	.gtnlo {
		z-index: 10;
		width: 100px;
		height: 100px;
		background: url(../../img/top2.png) no-repeat;
		position: fixed;
		right: 10px;
		bottom: 30px;
		cursor: hand;
	}
	
	.gun1 {
		width: 50px;
		height: 40px;
		margin-bottom: -60px;
	}
	
	.mu-item-title {
		max-width: 86%;
		margin-left: 45px;
	}
</style>