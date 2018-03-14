<template>
	<div class="coment">
		<div style="width: 100%;display:inline-block;">
			<p>权限设置</p>
		</div>
		<div style="margin-top: 20px;">
			<el-table :data="tableData3" height="250" border width="100%">
				<el-table-column prop="date" label="职员名称" width="280">
				</el-table-column>
				<el-table-column prop="name" label="职员账号" width="280">
				</el-table-column>
				<el-table-column prop="address" label="手机号码" width="280">
				</el-table-column>
				<el-table-column label="相关操作" width="280">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="aiyo">编辑</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<!--添加-->
		<div class="add" style="width: 800px !important" v-show="isshow">
			<table border="1" cellspacing="0" cellpadding="0" rules="all" style="text-align: center; margin: 0 auto;">
				<thead>
					<tr height="80px">
						<th width="120px">功能名称</th>
						<th width="120px">新增</th>
						<th width="120px">删除</th>
						<th width="120px">修改</th>
						<th width="120px">报表</th>
						<th width="150px">审核</th>
					</tr>
				</thead>
				<tbody>
					<tr height="80px">
						<td>购货单</td>
						<td><input class="chec" type="checkbox"></td>
						<td><input class="chec" type="checkbox"></td>
						<td><input class="chec" type="checkbox"></td>
						<td><input class="chec" type="checkbox"></td>
						<td><input class="chec" type="checkbox"></td>
					</tr>

					<tr height="80px">
						<td>采购订单</td>
						<td><input class="chec" type="checkbox"></td>
						<td><input class="chec" type="checkbox"></td>
						<td><input class="chec" type="checkbox"></td>
						<td><input class="chec" type="checkbox"></td>
						<td><input class="chec" type="checkbox"></td>
					</tr>
					<tr height="80px">
						<td>采购入库单</td>
						<td><input class="chec" type="checkbox"></td>
						<td><input class="chec" type="checkbox"></td>
						<td><input class="chec" type="checkbox"></td>
						<td><input class="chec" type="checkbox"></td>
						<td><input class="chec" type="checkbox"></td>
					</tr>
					<tr height="80px">
						<td>购货退货单</td>
						<td><input class="chec" type="checkbox"></td>
						<td><input class="chec" type="checkbox"></td>
						<td><input class="chec" type="checkbox"></td>
						<td><input class="chec" type="checkbox"></td>
						<td><input class="chec" type="checkbox"></td>
					</tr>
					<tr height="80px">
						<td>销售单</td>
						<td><input class="chec" type="checkbox"></td>
						<td><input class="chec" type="checkbox"></td>
						<td><input class="chec" type="checkbox"></td>
						<td><input class="chec" type="checkbox"></td>
						<td><input class="chec" type="checkbox"></td>
					</tr>
				</tbody>
			</table>
			</el-form>
			<div class="bbq">
				<span class="qqb" @click="enheng">保存</span>
				<span class="qqb" @click="aha">取消</span>	
			</div>
			
		</div>

	</div>

</template>

<script type="text/ecmascript-6">
	import Vue from 'vue';
	import 'element-ui/lib/theme-default/index.css';
	export default {
		data() {
			return {
				restaurants: [],
				state1: '',
				state2: '',
				isshow: false,

				tableData3: [{
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}]
			};
		},
		methods: {
			enheng:function(){
				this.isshow = false;
			},
			aha:function(){
				this.isshow = false;
			},
			aiyo:function(){
				this.isshow = true;
			},
			handleClick(row) {
				console.log(row);
			},
			querySearch(queryString, cb) {
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
				// 调用 callback 返回建议列表的数据
				cb(results);
			},
			createFilter(queryString) {
				return(restaurant) => {
					return(restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			},
			loadAll() {
				return [{
					"value": "三全鲜食（北新泾店）",
					"address": "长宁区新渔路144号"
				}];
			},
			handleSelect(item) {
				console.log(item);
			}
		},
		mounted() {
			this.restaurants = this.loadAll();
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	.coments {
		float: left;
	}
	
	.comentst {
		float: left;
		margin-left: 80px;
	}
	
	.chec {
		width: 64px;
		margin: 0 auto;
		display: block;
		height: 29px;
	}
	.bbq{
		float: right;
	}
	.qqb{
		display: inline-block;
		width: 50px;
		text-align: center;
		margin-top: 10px;
		line-height: 30px;
		border-radius: 15px;
		border: solid 1px #1e9fff;
		color: #000000;
		font: 16px;
		cursor: pointer;
	}
	.qqb:hover{
		background: #1e9fff;
		color: #FFFFFF;
		
	}
	.my-autocomplete {
		li {
			line-height: normal;
			padding: 7px;
			.name {
				text-overflow: ellipsis;
				overflow: hidden;
			}
			.addr {
				font-size: 12px;
				color: #b4b4b4;
			}
			.highlighted .addr {
				color: #ddd;
			}
		}
	}
	
	.right {
		width: 577px;
		float: right;
		margin-left: 5px;
	}
	
	.add {
		height: auto;
		position: absolute;
		background-color: #FFFFFF;
		border: 6px solid #8D8D8D;
		top: 200px;
		left: 787px;
		padding: 25px;
		z-index: 30;
	}
</style>