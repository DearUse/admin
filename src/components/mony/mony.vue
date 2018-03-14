<template>
	<div>
		<div class="app">
			<hello></hello>
		</div>
		<cart class="app1"></cart>
	</div>
</template>

<script type="text/ecmascript-6">
	import Vue from 'vue';
	import 'element-ui/lib/theme-default/index.css';
	import cart from '@/components/table/cart';
	import Hello from '@/components/Hello';
	export default {
		data() {
			return {

			}
		},
		components: {
			"hello": Hello
		},
	}
</script>

<style lang="less" scoped>
	.app1{
		margin-left: 152px;
	}
</style>