<template>
	<div>
		<top></top>
		<div>
			<el-table :data="tableData3" border style="width: 100%;margin-top: 20px;" max-height="450" class="tableLsit">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column prop="choice" label="选择" width="200">
				</el-table-column>
				<el-table-column prop="series" @click="clicks" label="系列名称" width="200">
				</el-table-column>
				<el-table-column prop="order" label="订单编号" width="200">
				</el-table-column>
				<el-table-column prop="sign" label="签定日期" width="200">
				</el-table-column>
				<el-table-column prop="scheduling" label="排产日期" width="200">
				</el-table-column>
				<el-table-column prop="customer" label="客户名称" width="200">
				</el-table-column>
				<el-table-column prop="username" label="用户名称" width="200">
				</el-table-column>
				<el-table-column prop="deposit" label="定金总金额" width="200">
				</el-table-column>
				<el-table-column prop="netreceipts" label="实收金额" width="200">
				</el-table-column>
				<el-table-column prop="discount" label="优惠金额" width="200">
				</el-table-column>
				<el-table-column prop="explain" label="优惠说明" width="200">
				</el-table-column>
				<el-table-column prop="balance" label="应收余额" width="200">
				</el-table-column>
				<el-table-column prop="color" label="颜色" width="120">
				</el-table-column>
				<el-table-column label="操作" width="120">
					<template slot-scope="scope">
						<el-button @click.native.prevent="deleteRow(scope.$index, tableData3)" type="text" size="small">
							移除
						</el-button>
					</template>
				</el-table-column>
			</el-table>

			<div style="margin-top: 20px; float: right;">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="订单总金额" style="width: 170px !important;">
						<el-input v-model="formInline.user" style="width: 88px;"></el-input>
					</el-form-item>
					</el-form-item>
					<el-form-item label="订金总金额" style="width: 170px !important;">
						<el-input v-model="formInline.user1" style="width: 88px;">订金总金额</el-input>
					</el-form-item>
					</el-form-item>
					<el-form-item label="应收金额" style="width: 170px !important;">
						<el-input v-model="formInline.user2" style="width: 88px;"></el-input>
					</el-form-item>
					</el-form-item>
					<el-form-item label="实收金额 " style="width: 170px !important;">
						<el-input v-model="formInline.user3" style="width: 88px;"></el-input>
					</el-form-item>
					</el-form-item>
				</el-form>
			</div>
			<div>
				<el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
					<el-tab-pane label="订单套件" name="first">
						<el-table :data="tableData4" border style="width: 100%" max-height="450">
							<el-table-column prop="suitename" label="套件名" width="200" :filter-method="filterHandler">
							</el-table-column>
							<el-table-column prop="linear" @click="clicks" label="线型" width="200">
							</el-table-column>
							<el-table-column prop="jacketed" label="套型" width="200">
							</el-table-column>
							<el-table-column prop="color" label="颜色" width="200">
							</el-table-column>
							<el-table-column prop="style" label="款式" width="200">
							</el-table-column>
							<el-table-column prop="wide" label="宽" width="200">
							</el-table-column>
							<el-table-column prop="high" label="高" width="200">
							</el-table-column>
							<el-table-column prop="theamunt" label="门扇厚度" width="200">
							</el-table-column>
							<el-table-column prop="theamunt1" label="墙体厚度" width="200">
							</el-table-column>
							<el-table-column prop="thenumberof" label="数量" width="200">
							</el-table-column>
							<el-table-column prop="unitprice" label="单价" width="200">
							</el-table-column>
							<el-table-column prop="machining" label="加工" width="200">
							</el-table-column>
							<el-table-column prop="remarks" label="备注" width="200">
							</el-table-column>
							<el-table-column prop="material" label="材质" width="120">
							</el-table-column>
						</el-table>

					</el-tab-pane>
					<el-tab-pane label="相关订单" name="second">

					</el-tab-pane>
					<el-tab-pane label="订单记录" name="third">角色管理</el-tab-pane>
					<el-tab-pane label="文件列表">定时任务补偿</el-tab-pane>
					<el-tab-pane label="订单记录">角色管理</el-tab-pane>
					<el-tab-pane label="担保记录">定时任务补偿</el-tab-pane>
					<el-tab-pane label="快速入库">角色管理</el-tab-pane>
					<el-tab-pane label="发货记录">定时任务补偿</el-tab-pane>
					<el-tab-pane label="订单账">角色管理</el-tab-pane>
					<el-tab-pane label="收款分配">定时任务补偿</el-tab-pane>
					<el-tab-pane label="打款记录">角色管理</el-tab-pane>
					<el-tab-pane label="客人记录">定时任务补偿</el-tab-pane>
					<el-tab-pane label="订单打印">角色管理</el-tab-pane>
					<el-tab-pane label="计件工资">定时任务补偿</el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue';
	import 'element-ui/lib/theme-default/index.css';
	import top from '@/components/table/top';
	
	export default {
		name: 'filters',
		data() {
			return {
				formInline: {
					user: '',
					user1:'',
					user2:'',
					user3:'',
					region: ''
				},
				activeName2: 'first',
				tableData3: [{
						choice:"0",
						series:"0",
						order:"0",
						sign:"",
						scheduling:"",
						customer:"0",
						username:"0",
						deposit:"0",
						netreceipts:"0",
						discount:"0",
						explain:"未知",
						balance:"0.01",
						color:"黄"
				}],

				tableData4: [{
						suitename: "木门", //套件名
						linear: "流线型", //线型
						jacketed: "5-44", //套型
						color: "红", //颜色
						style: "dfsv", //款式
						wide: "125", //宽
						high: "3", //高
						thick: "200", //门扇厚度
						thick1:"100",//墙体厚度
						thenumberof: "12", //数量
						unitprice: "元", //单价
						machining: "012", //加工
						remarks: "fasf", //备注
						material: "铁", //材质
					},
					{
						suitename: "木门", //套件名
						linear: "流线型", //线型
						jacketed: "5-44", //套型
						color: "红", //颜色
						style: "dfsv", //款式
						wide: "125", //宽
						high: "3", //高
						thick: "200", //门扇厚度
						thick1:"100",//墙体厚度
						thenumberof: "12", //数量
						unitprice: "元", //单价
						machining: "012", //加工
						remarks: "fasf", //备注
						material: "铁", //材质
					},
					{
						suitename: "木门", //套件名
						linear: "流线型", //线型
						jacketed: "5-44", //套型
						color: "红", //颜色
						style: "dfsv", //款式
						wide: "125", //宽
						high: "3", //高
						thick: "200", //门扇厚度
						thick1:"100",//墙体厚度
						thenumberof: "12", //数量
						unitprice: "元", //单价
						machining: "012", //加工
						remarks: "fasf", //备注
						material: "铁", //材质
					},
					{
						suitename: "木门", //套件名
						linear: "流线型", //线型
						jacketed: "5-44", //套型
						color: "红", //颜色
						style: "dfsv", //款式
						wide: "125", //宽
						high: "3", //高
						thick: "200", //门扇厚度
						thick1:"100",//墙体厚度
						thenumberof: "12", //数量
						unitprice: "元", //单价
						machining: "012", //加工
						remarks: "fasf", //备注
						material: "铁", //材质
					},
					{
						suitename: "木门", //套件名
						linear: "流线型", //线型
						jacketed: "5-44", //套型
						color: "红", //颜色
						style: "dfsv", //款式
						wide: "125", //宽
						high: "3", //高
						thick: "200", //门扇厚度
						thick1:"100",//墙体厚度
						thenumberof: "12", //数量
						unitprice: "元", //单价
						machining: "012", //加工
						remarks: "fasf", //备注
						material: "铁", //材质
					},

				],
			}
		},
		components: {
			"top": top
		},
		mounted() {
			var tableLsit = document.querySelectorAll('el-table-column');
			console.log(tableLsit.length);
			
			
		},
		methods: {
			clicks() {
				alert("1")
			},
			onSubmit() {
				console.log('submit!');
			},

			deleteRow(index, rows) {
				rows.splice(index, 1);
			},
			formatter(row, column) {
				return row.address;
			},
			filterTag(value, row) {
				return row.tag === value;
			},
			filterHandler(value, row, column) {
				const property = column['property'];
				return row[property] === value;
			},

			handleClick(tab, event) {
				console.log(tab, event);
			}

		},

	}

	// 自定义列组件
	Vue.component('table-operation', {
		template: `<span>
        <a href="" @click.stop.prevent="update(rowData,index)">编辑</a>&nbsp;
        <a href="" @click.stop.prevent="deleteRow(rowData,index)">删除</a>
        </span>`,
		props: {
			rowData: {
				type: Object
			},
			field: {
				type: String
			},
			index: {
				type: Number
			}
		},
		methods: {
			toggleSelection(rows) {
				if(rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			update() {
				// 参数根据业务场景随意构造
				let params = {
					type: 'edit',
					index: this.index,
					rowData: this.rowData
				};
				this.$emit('on-custom-comp', params);
			},
			deleteRow() {
				// 参数根据业务场景随意构造
				let params = {
					type: 'delete',
					index: this.index
				};
				this.$emit('on-custom-comp', params);
			},

		}
	})
</script>
<style>
	.back {
		margin-top: 150px;
		background-color: #324057;
	}
	
	.daingdan {
		width: 110px;
		height: 36px;
		background-color: #324057;
		color: #FFFFFF;
		font-size: 14px;
		margin: 0;
	}
	
	.active {
		background-color: #20a0ff;
		color: #FFFFFF;
	}
	.el-button--primary.is-plain:hover {
		background: #fff;
		border-color: #20a0ff;
		color: #20a0ff;
	}
	
	.el-button--primary {
		width: 88px;
	}
	
	.el-form--inline .el-form-item {
		display: inline-block;
		margin-right: 10px;
		vertical-align: top;
		
	}
</style>