<template>
	<div class="content">
		<div>
		<p class="addto" @click="addto">添加</p>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column  prop="bank" label="银行" width="180">
			</el-table-column>
			<el-table-column prop="number" label="卡号" width="200">
			</el-table-column>
			
			<el-table-column label="操作" width="100">
				<template slot-scope="scope">
					<el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>
		</div>
		<div class="addto1" v-show="isshow" >
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="银行">
				    <el-select v-model="form.name" placeholder="请选择银行">
				      <el-option label="中国邮政银行" value="中国邮政银行"></el-option>
				      <el-option label="中国工商银行" value="中国工商银行"></el-option>
				      <el-option label="中国农业银行" value="中国农业银行"></el-option>
				      <el-option label="中国建设银行" value="中国建设银行"></el-option>
				   </el-select>
			  	</el-form-item>
			  	<el-form-item label="请输入银行卡号" style="width: 500px">
			    	<el-input v-model="form.bank" style="width: 200px;"></el-input>
			  	</el-form-item>
			  	<el-form-item>
				    <el-button @click="confirm(form)">确认</el-button>
				    <el-button @click="cancel(form)">取消</el-button>
			  	</el-form-item>
			</el-form>
		</div>
	</div>

</template>

<script type="text/ecmascript-6">
	import Vue from 'vue';
	import 'element-ui/lib/theme-default/index.css';
	import { VTable, VPagination } from 'vue-easytable';

	export default {
		data() {
			return {
				isshow:false,
				form: {
		          	name:'',
		          	bank:''
		       },
				tableData: [{
					bank: '中国邮政银行',
					number: '23456789123456789',

				}, {
					bank: '中国工商银行',
					number: '23456789123456789',

				}, {
					bank: '中国农业银行',
					number: '23456789123456789',

				}, {
					bank: '中国建设银行',
					number: '23456789123456789',

				}]

			}
		},
		methods: {
			handleClick(row) {
				console.log(row);
				alert(1)
			},
			
			//添加
			addto(){
				this.isshow = true;
			},
			
			//确认
			confirm(){
				this.isshow = false;
			},
			
			//取消
			cancel(){
				this.isshow = false;
			}
		},
		mounted() {

		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.content {
		position: fixed;
		top: 70px;
		left: 240px;
		width: 100%;
	}
	.addto{
		width: 100px;
		line-height: 40px;
		text-align: center;
		background: #dfe6ec;
		margin-bottom: 10px;
		cursor: pointer;
	}
	.addto1{
		border: solid 1px #dfe6ec;
		position: fixed;
		top: 30%;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 100%;
		z-index: 10;
		width: 500px;
		background: #DFE6EC;
		padding-top: 20px;
	}
</style>