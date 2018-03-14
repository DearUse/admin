<template>
	<div>
		<div class="content">
			<el-input placeholder="输入关键字进行过滤" v-model="filterText">
			</el-input>
			<el-tree class="filter-tree" @node-click="handleNodeClick" :data="data" accordion :props="defaultProps" :filter-node-method="filterNode" ref="tree2" style="padding-right: 10px;">
			</el-tree>

		</div>
		<div style="margin-top: 20px;margin-left: 200px;" class="content-right" v-show="isshow">
			<el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
				
				<!--变化量-->
				<el-tab-pane label="变化量" name="first" style="100%">
					<div style="width: 1000px;border: solid 1px #dfe6ec;">
						<p style="width: 100%;line-height: 30px;margin-left: 10px;">立杆背框位</p>
						<el-table :data="change" style="width: 100%; overflow: auto;" border>
							<el-table-column prop="condition" label="条件" >
							</el-table-column>
							<el-table-column prop="valued" label="值" >
							</el-table-column>
						</el-table>
						<p style="width: 100%;line-height: 30px;margin-left: 10px;">0</p>
					</div>
				</el-tab-pane>
				
				<!--部件名称-->
				<el-tab-pane label="部件名称" name="second">
					<div>
						<el-table :data="parts" border style="width: 100%">
							<el-table-column prop="name" label="名称" width="100">
							</el-table-column>
							<el-table-column prop="high" label="高" width="100">
							</el-table-column>
							<el-table-column prop="wide" label="宽" width="100">
							</el-table-column>
							<el-table-column prop="thick" label="门扇厚度" width="100">
							</el-table-column>
							<el-table-column prop="thick1" label="墙体厚度" width="100">
							</el-table-column>
							<el-table-column prop="number" label="数量" width="100">
							</el-table-column>
							<el-table-column prop="types" label="料型" width="100">
							</el-table-column>
							<el-table-column prop="effective" label="有效条件" width="100">
							</el-table-column>
							<el-table-column prop="result" label="测试结果" width="100">
							</el-table-column>
							<el-table-column fixed="right" label="操作" width="100">
								<template slot-scope="scope">
									<el-button @click="see(scope.row)" type="text" size="small">查看</el-button>
									<el-button type="text" size="small">编辑</el-button>
								</template>
							</el-table-column>
						</el-table>
					</div>
				</el-tab-pane>
				<el-tab-pane label="成本计算" name="third"></el-tab-pane>
				<el-tab-pane label="报价方案" name="fourth"></el-tab-pane>
				<el-tab-pane label="标签" name="fiveth"></el-tab-pane>
				<el-tab-pane label="订单审核" name="sixth"></el-tab-pane>
				<el-tab-pane label="流程设置" name="seventh">
					<div>
						<el-table :data="setup" border style="width: 100%">
							<el-table-column prop="name" label="名称" width="150">
							</el-table-column>
							<el-table-column prop="username" label="默认加工人员" width="150">
							</el-table-column>
							<el-table-column prop="price" label="计件单价" width="150">
							</el-table-column>
							<el-table-column prop="number" label="计件数量" width="150">
							</el-table-column>
							<el-table-column prop="effective" label="有效条件" width="150">
							</el-table-column>
							<el-table-column prop="result" label="测试结果" width="150">
							</el-table-column>
							<el-table-column fixed="right" label="操作" width="100">
								<template slot-scope="scope">
									<el-button @click="see(scope.row)" type="text" size="small">查看</el-button>
									<el-button type="text" size="small">编辑</el-button>
								</template>
							</el-table-column>
						</el-table>
					</div>
				</el-tab-pane>
			</el-tabs>
			
		</div>
	</div>

</template>

<script type="text/ecmascript-6">
	import Vue from 'vue';
	import 'element-ui/lib/theme-default/index.css';

	import { VTable, VPagination } from 'vue-easytable';
	let id = 1000;
	export default {
		data() {
			return {
				isshow: false,
				filterText: '',
				data: [{
					id: 1,
					label: '一级 1',
					children: [{
						id: 4,
						label: '二级 1-1',
						children: [{
							id: 9,
							label: '三级 1-1-1'
						}, {
							id: 10,
							label: '三级 1-1-2'
						}]
					}]
				}, {
					id: 2,
					label: '一级 2',
					children: [{
						id: 5,
						label: '二级 2-1',
						children: [{
							id: 9,
							label: '三级 2-1-1'
						}, {
							id: 10,
							label: '三级 2-1-2'
						}]
					}, {
						id: 6,
						label: '二级 2-2',
						children: [{
							id: 9,
							label: '三级 2-2-1'
						}, {
							id: 10,
							label: '三级 2-2-2'
						}]
					}]
				}, {
					id: 3,
					label: '一级 3',
					children: [{
						id: 7,
						label: '二级 3-1',
						children: [{
							id: 9,
							label: '三级 3-1-1'
						}, {
							id: 10,
							label: '三级 3-1-2'
						}]
					}, {
						id: 8,
						label: '二级 3-2',
						children: [{
							id: 9,
							label: '三级 3-2-1'
						}, {
							id: 10,
							label: '三级 3-2-2'
						}]
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				},
				activeName2: 'first',
				parts: [{
					name: '', //名称
					high: '', //高
					wide: '', //宽
					thick: '', //门扇厚度
					thick1: '', //墙体厚度
					number: "", //数量
					types: '', //料型
					effective: '', //有效条件
					result: " " //测试结果
				}],
				parts1: [{
					name: '飞飞', //名称
					high: '100', //高
					wide: '80', //宽
					thick: '10', //门扇厚度
					thick1: '20', //墙体厚度
					number: "2*数量", //数量
					types: '框料', //料型
					effective: '们扇厚度=5分扇', //有效条件
					result: " " //测试结果
				}],
				parts2: [{
					name: '花花', //名称
					high: '110', //高
					wide: '70', //宽
					thick: '5', //门扇厚度
					thick1: '8', //墙体厚度
					number: "1*数量", //数量
					types: '扇料', //料型
					effective: '们扇厚度=10分扇', //有效条件
					result: " " //测试结果
				}],
				change: [{
		            condition: '门扇厚度=5分扇，框型=60子母小边双开门，款式=子母小边双开门外边内开',
		            valued: '20'
		        }, {
		            condition: '门扇厚度=5分扇，框型=60子母小边双开门，款式=子母小边双开门外边内开	45',
		            valued: '30'
		        }, {
		            condition: '门扇厚度=5分扇，框型=70子母小边双开门，款式=子母小边双开门外边外开	70',
		            valued: '40'
		        }, {
		            condition: '门扇厚度=8分扇，框型=70子母小边双开门，款式=子母小边双开门内边内开	70',
		            valued: '50'
		        }],
		        setup: [{
					name: '剪板', //名称
					username: '', //默认加工人员
					price: '', //计件单价
					number: '', //计件数量
					effective: '', //有效条件
					result: "", //测试结果
				},{
					name: '拼框', //名称
					username: '', //默认加工人员
					price: '', //计件单价
					number: '', //计件数量
					effective: '', //有效条件
					result: "", //测试结果
				},{
					name: '拼扇', //名称
					username: '', //默认加工人员
					price: '', //计件单价
					number: '', //计件数量
					effective: '', //有效条件
					result: "", //测试结果
				},{
					name: '合门', //名称
					username: '', //默认加工人员
					price: '', //计件单价
					number: '', //计件数量
					effective: '', //有效条件
					result: "", //测试结果
				},
		        ],
			}
		},
		methods: {
			see(row) {
				console.log(row);
			},
			handleClick(tab, event) {
//				console.log(tab.index);
				console.log(tab, event);
			},
			handleNodeClick(data) {
				console.log(data.id);
				if(data.id == 9) {
					this.isshow = true;
					this.parts = this.parts1
				} else if(data.id == 10) {
					this.isshow = true;
					this.parts = this.parts2
				} else {
					this.isshow = false;
				}

			},
			filterNode(value, data) {
				if(!value) return true;
				return data.label.indexOf(value) !== -1;
			}

		},
		mounted() {

		},
		watch: {
			filterText(val) {
				this.$refs.tree2.filter(val);
			}
		},
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.content {
		position: fixed;
		top: 70px;
		left: 240px;
	}
	
	.content-right {
		position: fixed;
		top: 70px;
		left: 240px;
	}
	
	.filter-tree {
		height: 1200px;
	}
	
	.custom-tree-node {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 14px;
		padding-right: 8px;
	}
</style>