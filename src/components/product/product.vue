<template>
	<div>
		<div style="width: 100%; background: #eef1f6; height: 42px;">
			<ul>
				<li class="a" @click="aa" :class="{on:as}">系列</li>
				<li class="a" @click="bb" :class="{on:bs}">型号</li>
				<li class="a" @click="cc" :class="{on:cs}">颜色</li>
				<li class="a" @click="dd" :class="{on:ds}">工艺</li>
				<li class="a" @click="ee" :class="{on:es}">线条</li>
				<li class="a" @click="ff" :class="{on:fs}">品牌</li>
			</ul>
		</div>

		<!--系列-->
		<div class="b" v-show="as">
			<div>
				<el-button @click="add">添加</el-button>
				<div style="margin-top: 10px;">
					<div>
						<el-table :data="tableData3" height="700" border style="width: 100%">
							<el-table-column prop="serial" label="系列" width="180">
							</el-table-column>
							<el-table-column label="相关操作" width="154">
								<template slot-scope="scope" v-for="(item,index) in tableData3">
									<!--scope是作用域 scope.row 是当前行{{scope.row}}-->
									<el-button type="text" size="small" prop="id" @click.native.prevent="addsp(scope.$index, tableData3)" v-model="item.id">编辑</el-button>
									<el-button @click.native.prevent="psdda(scope.$index, tableData3)" type="text" size="small">移除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</div>
				</div>
			</div>

			<!--添加-->
			<div class="add" v-show="isshow" style="width: 961px !important; ">
				<div class="kehu" style="width:850px;line-height:42px;color:#333;background-color: #F8F8F8;font-size: 28px;border-bottom: 1px solid #eee;margin-bottom: 20px;">
					添加
				</div>
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="系列" class="labe">
						<el-input v-model="formInline.serial" placeholder="系列"></el-input>
					</el-form-item>
					<div style="float: right;margin-right:100px;margin-top: 20px;">
						<el-button type="primary" style="width: 100px;" @click="adds">取消</el-button>
						<el-button type="primary" style="width: 100px;" @click="haoqia">保存</el-button>
					</div>
				</el-form>
			</div>

			<div class="add" v-show="isshows" style="width: 961px !important;">
				<div class="kehu" style="width:850px;line-height:42px;color:#333;background-color: #F8F8F8;font-size: 28px;border-bottom: 1px solid #eee;margin-bottom: 20px;">
					修改
				</div>
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="系列" class="labe">
						<el-input v-model="formInline.serial" placeholder="系列"></el-input>
					</el-form-item>
					<div style="float: right;margin-right:100px;margin-top: 20px;">
						<el-button type="primary" style="width: 100px;" @click="adds">取消</el-button>
						<el-button type="primary" style="width: 100px;" @click="haoqias">确认</el-button>
					</div>
				</el-form>
			</div>
		</div>

		<!--型号-->
		<div class="b" v-show="bs">
			<div>
				<el-button @click="add1">添加</el-button>
				<div style="margin-top: 10px;">
					<div>
						<el-table :data="tableData4" height="700" border style="width: 100%">
							<el-table-column prop="styles" label="型号" width="180">
							</el-table-column>
							<el-table-column label="相关操作" width="154">
								<template slot-scope="scope" v-for="(item,index) in tableData4">
									<el-button type="text" size="small" @click.native.prevent="addsp1(scope.$index, tableData4)" v-model="item.id">编辑</el-button>
									<el-button @click.native.prevent="psdda1(scope.$index, tableData4)" type="text" size="small">移除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</div>
				</div>
			</div>

			<!--添加-->
			<div class="add" v-show="isshow" style="width: 961px !important; ">
				<div class="kehu" style="width:850px;line-height:42px;color:#333;background-color: #F8F8F8;font-size: 28px;border-bottom: 1px solid #eee;margin-bottom: 20px;">
					添加
				</div>
				<el-form :inline="true" :model="formInline1" class="demo-form-inline">
					<el-form-item label="型号" class="labe">
						<el-input v-model="formInline1.styles" placeholder="型号"></el-input>
					</el-form-item>
					<div style="float: right;margin-right:100px;margin-top: 20px;">
						<el-button type="primary" style="width: 100px;" @click="adds">取消</el-button>
						<el-button type="primary" style="width: 100px;" @click="haoqia1">保存</el-button>
					</div>
				</el-form>
			</div>

			<div class="add" v-show="isshows" style="width: 961px !important;">
				<div class="kehu" style="width:850px;line-height:42px;color:#333;background-color: #F8F8F8;font-size: 28px;border-bottom: 1px solid #eee;margin-bottom: 20px;">
					修改
				</div>
				<el-form :inline="true" :model="formInline1" class="demo-form-inline">
					<el-form-item label="型号" class="labe">
						<el-input v-model="formInline1.styles" placeholder="型号"></el-input>
					</el-form-item>
					<div style="float: right;margin-right:100px;margin-top: 20px;">
						<el-button type="primary" style="width: 100px;" @click="adds">取消</el-button>
						<el-button type="primary" style="width: 100px;" @click="haoqias1">确认</el-button>
					</div>
				</el-form>
			</div>
		</div>

		<!--颜色-->
		<div class="b" v-show="cs">
			<div>
				<el-button @click="add2">添加</el-button>
				<div style="margin-top: 10px;">
					<div>
						<el-table :data="tableData5" height="700" border style="width: 100%">
							<el-table-column prop="colors" label="颜色" width="180">
							</el-table-column>
							<el-table-column label="相关操作" width="154">
								<template slot-scope="scope" v-for="(item,index) in tableData5">
									<el-button type="text" size="small" @click.native.prevent="addsp2(scope.$index, tableData5)" v-model="item.id">编辑</el-button>
									<el-button @click.native.prevent="psdda2(scope.$index, tableData5)" type="text" size="small">移除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</div>
				</div>
			</div>

			<!--添加-->
			<div class="add" v-show="isshow" style="width: 961px !important; ">
				<div class="kehu" style="width:850px;line-height:42px;color:#333;background-color: #F8F8F8;font-size: 28px;border-bottom: 1px solid #eee;margin-bottom: 20px;">
					添加
				</div>
				<el-form :inline="true" :model="formInline2" class="demo-form-inline">
					<el-form-item label="颜色" class="labe">
						<el-input v-model="formInline2.colors" placeholder="颜色"></el-input>
					</el-form-item>
					<div style="float: right;margin-right:100px;margin-top: 20px;">
						<el-button type="primary" style="width: 100px;" @click="adds">取消</el-button>
						<el-button type="primary" style="width: 100px;" @click="haoqia2">保存</el-button>
					</div>
				</el-form>
			</div>

			<div class="add" v-show="isshows" style="width: 961px !important;">
				<div class="kehu" style="width:850px;line-height:42px;color:#333;background-color: #F8F8F8;font-size: 28px;border-bottom: 1px solid #eee;margin-bottom: 20px;">
					修改
				</div>
				<el-form :inline="true" :model="formInline2" class="demo-form-inline">
					<el-form-item label="颜色" class="labe">
						<el-input v-model="formInline2.colors" placeholder="颜色"></el-input>
					</el-form-item>
					<div style="float: right;margin-right:100px;margin-top: 20px;">
						<el-button type="primary" style="width: 100px;" @click="adds">取消</el-button>
						<el-button type="primary" style="width: 100px;" @click="haoqias2">确认</el-button>
					</div>
				</el-form>
			</div>
		</div>

		<!--工艺-->
		<div class="b" v-show="ds">
			<div>
				<el-button @click="add3">添加</el-button>
				<div style="margin-top: 10px;">
					<div>
						<el-table :data="tableData6" height="700" border style="width: 100%">
							<el-table-column prop="arts" label="工艺" width="180">
							</el-table-column>
							<el-table-column label="相关操作" width="154">
								<template slot-scope="scope" v-for="(item,index) in tableData6">
									<el-button type="text" size="small" @click.native.prevent="addsp3(scope.$index, tableData6)" v-model="item.id">编辑</el-button>
									<el-button @click.native.prevent="psdda3(scope.$index, tableData6)" type="text" size="small">移除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</div>
				</div>
			</div>

			<!--添加-->
			<div class="add" v-show="isshow" style="width: 961px !important; ">
				<div class="kehu" style="width:850px;line-height:42px;color:#333;background-color: #F8F8F8;font-size: 28px;border-bottom: 1px solid #eee;margin-bottom: 20px;">
					添加
				</div>
				<el-form :inline="true" :model="formInline3" class="demo-form-inline">
					<el-form-item label="工艺" class="labe">
						<el-input v-model="formInline3.arts" placeholder="工艺"></el-input>
					</el-form-item>
					<div style="float: right;margin-right:100px;margin-top: 20px;">
						<el-button type="primary" style="width: 100px;" @click="adds">取消</el-button>
						<el-button type="primary" style="width: 100px;" @click="haoqia3">保存</el-button>
					</div>
				</el-form>
			</div>

			<div class="add" v-show="isshows" style="width: 961px !important;">
				<div class="kehu" style="width:850px;line-height:42px;color:#333;background-color: #F8F8F8;font-size: 28px;border-bottom: 1px solid #eee;margin-bottom: 20px;">
					修改
				</div>
				<el-form :inline="true" :model="formInline3" class="demo-form-inline">
					<el-form-item label="工艺" class="labe">
						<el-input v-model="formInline3.arts" placeholder="工艺"></el-input>
					</el-form-item>
					<div style="float: right;margin-right:100px;margin-top: 20px;">
						<el-button type="primary" style="width: 100px;" @click="adds">取消</el-button>
						<el-button type="primary" style="width: 100px;" @click="haoqias3">确认</el-button>
					</div>
				</el-form>
			</div>
		</div>

		<!--线条-->
		<div class="b" v-show="es">
			<div>
				<el-button @click="add4">添加</el-button>
				<div style="margin-top: 10px;">
					<div>
						<el-table :data="tableData7" height="700" border style="width: 100%">
							<el-table-column prop="linear" label="线条" width="180">
							</el-table-column>
							<el-table-column label="相关操作" width="154">
								<template slot-scope="scope" v-for="(item,index) in tableData7">
									<el-button type="text" size="small" @click.native.prevent="addsp4(scope.$index, tableData7)" v-model="item.id">编辑</el-button>
									<el-button @click.native.prevent="psdda4(scope.$index, tableData7)" type="text" size="small">移除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</div>
				</div>
			</div>

			<!--添加-->
			<div class="add" v-show="isshow" style="width: 961px !important; ">
				<div class="kehu" style="width:850px;line-height:42px;color:#333;background-color: #F8F8F8;font-size: 28px;border-bottom: 1px solid #eee;margin-bottom: 20px;">
					添加
				</div>
				<el-form :inline="true" :model="formInline4" class="demo-form-inline">
					<el-form-item label="线条" class="labe">
						<el-input v-model="formInline4.linear" placeholder="线条"></el-input>
					</el-form-item>
					<div style="float: right;margin-right:100px;margin-top: 20px;">
						<el-button type="primary" style="width: 100px;" @click="adds">取消</el-button>
						<el-button type="primary" style="width: 100px;" @click="haoqia4">保存</el-button>
					</div>
				</el-form>
			</div>

			<div class="add" v-show="isshows" style="width: 961px !important;">
				<div class="kehu" style="width:850px;line-height:42px;color:#333;background-color: #F8F8F8;font-size: 28px;border-bottom: 1px solid #eee;margin-bottom: 20px;">
					修改
				</div>
				<el-form :inline="true" :model="formInline4" class="demo-form-inline">
					<el-form-item label="线条" class="labe">
						<el-input v-model="formInline4.linear" placeholder="线条"></el-input>
					</el-form-item>
					<div style="float: right;margin-right:100px;margin-top: 20px;">
						<el-button type="primary" style="width: 100px;" @click="adds">取消</el-button>
						<el-button type="primary" style="width: 100px;" @click="haoqias4">确认</el-button>
					</div>
				</el-form>
			</div>
		</div>

		<!--品牌-->
		<div class="b" v-show="fs">
			<div>
				<el-button @click="add5">添加</el-button>
				<div style="margin-top: 10px;">
					<div>
						<el-table :data="tableData8" height="700" border style="width: 100%">
							<el-table-column prop="brand" label="品牌" width="180">
							</el-table-column>
							<el-table-column prop="bei" label="备注" width="180">
							</el-table-column>
							<el-table-column label="相关操作" width="154">
								<template slot-scope="scope" v-for="(item,index) in tableData8">
									<el-button type="text" size="small" @click.native.prevent="addsp5(scope.$index, tableData8)" v-model="item.id">编辑</el-button>
									<el-button @click.native.prevent="psdda5(scope.$index, tableData8)" type="text" size="small">移除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</div>
				</div>
			</div>

			<!--添加-->
			<div class="add" v-show="isshow" style="width: 961px !important; ">
				<div class="kehu" style="width:850px;line-height:42px;color:#333;background-color: #F8F8F8;font-size: 28px;border-bottom: 1px solid #eee;margin-bottom: 20px;">
					添加
				</div>
				<el-form :inline="true" :model="formInline5" class="demo-form-inline">
					<el-form-item label="品牌" class="labe">
						<el-input v-model="formInline5.brand" placeholder="品牌"></el-input>
					</el-form-item>
					<el-form-item label="备注" class="labe">
						<el-input v-model="formInline5.bei" placeholder="备注"></el-input>
					</el-form-item>
					<div style="float: right;margin-right:100px;margin-top: 20px;">
						<el-button type="primary" style="width: 100px;" @click="adds">取消</el-button>
						<el-button type="primary" style="width: 100px;" @click="haoqia5">保存</el-button>
					</div>
				</el-form>
			</div>

			<div class="add" v-show="isshows" style="width: 961px !important;">
				<div class="kehu" style="width:850px;line-height:42px;color:#333;background-color: #F8F8F8;font-size: 28px;border-bottom: 1px solid #eee;margin-bottom: 20px;">
					修改
				</div>
				<el-form :inline="true" :model="formInline5" class="demo-form-inline">
					<el-form-item label="品牌" class="labe">
						<el-input v-model="formInline5.brand" placeholder="品牌"></el-input>
					</el-form-item>
					<el-form-item label="备注" class="labe">
						<el-input v-model="formInline5.bei" placeholder="备注"></el-input>
					</el-form-item>
					<div style="float: right;margin-right:100px;margin-top: 20px;">
						<el-button type="primary" style="width: 100px;" @click="adds">取消</el-button>
						<el-button type="primary" style="width: 100px;" @click="haoqias5">确认</el-button>
					</div>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Vue from 'vue';
	import 'element-ui/lib/theme-default/index.css';
	import { VTable, VPagination } from 'vue-easytable';
	import { Message } from '../../common/js/services/Message.services';
	import axios from 'axios';
	export default {
		data() {
			return {
				as: true,
				bs: false,
				cs: false,
				ds: false,
				es: false,
				fs: false,
				isshow: false,
				isshows: false,
				saffd: [],
				dingyi:"",
				ind:"",
				names:[],
				beizhu:"",
				formInline: {
					serial:""
				},
				formInline1: {
					styles:""
				},
				formInline2: {
					colors:""
				},
				formInline3: {
					arts:""
				},
				formInline4: {
					linear:""
				},
				formInline5: {
					brand:"",
					bei:""
				},
				
				tableData3: [{
					
				}],

				
				tableData4: [{
					
				}],

				
				tableData5: [{
					
				}],
				tableData6: [{
					

				}],
				tableData7: [{
					

				}],
				tableData8: [{
					
				}]
			}
		},
		mounted: function() {
			this.queryProMegs();
			this.queryProMegs1();
			this.queryProMegs2();
			this.queryProMegs3();
			this.queryProMegs4();
			this.queryProMegs5();
		},
		methods: {
			queryProMegs() {
				var that = this;
				var params = new URLSearchParams();
				params.append("to", 1);
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/serial_show", params).then(function(ret) {
							console.log(ret.data)
							if(ret.data.data) {
								for(var i = 0; i < ret.data.data.length; i++) {
									console.log(ret.data.data[i].serial)
									that.tableData3 = ret.data.data;
								}
							}else{
								alert(ret.data);
							}
							},function(err) {
								alert("失败");

							})
			},
			queryProMegs1() {
				var that = this;
				var params = new URLSearchParams();
				params.append("to", 1);
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/styles_show", params).then(function(ret) {
							console.log(ret.data)
							if(ret.data.data) {
								for(var i = 0; i < ret.data.data.length; i++) {
									console.log(ret.data.data[i].styles)
									that.tableData4 = ret.data.data;
								}
							}else{
								alert(ret.data);
							}
							},function(err) {
								alert("失败");

							})
			},
			queryProMegs2() {
				var that = this;
				var params = new URLSearchParams();
				params.append("to", 1);
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/colors_show", params).then(function(ret) {
							console.log(ret.data)
							if(ret.data.data) {
								for(var i = 0; i < ret.data.data.length; i++) {
									console.log(ret.data.data[i].colors)
									that.tableData5 = ret.data.data;
								}
							}else{
								alert(ret.data);
							}
							},function(err) {
								alert("失败");

							})
			},
			queryProMegs3() {
				var that = this;
				var params = new URLSearchParams();
				params.append("to", 1);
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/arts_show", params).then(function(ret) {
							console.log(ret.data)
							if(ret.data.data) {
								for(var i = 0; i < ret.data.data.length; i++) {
									console.log(ret.data.data[i].arts)
									that.tableData6 = ret.data.data;
								}
							}else{
								alert(ret.data);
							}
							},function(err) {
								alert("失败");

							})
			},
			queryProMegs4() {
				var that = this;
				var params = new URLSearchParams();
				params.append("to", 1);
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/linear_show", params).then(function(ret) {
							console.log(ret.data)
							if(ret.data.data) {
								for(var i = 0; i < ret.data.data.length; i++) {
									console.log(ret.data.data[i].linear)
									that.tableData7 = ret.data.data;
								}
							}else{
								alert(ret.data);
							}
							},function(err) {
								alert("失败");

							})
			},
			queryProMegs5() {
				var that = this;
				var params = new URLSearchParams();
				params.append("to", 1);
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/brand_show", params).then(function(ret) {
							console.log(ret.data)
							if(ret.data.data) {
								for(var i = 0; i < ret.data.data.length; i++) {
									console.log(ret.data.data[i].brand)
									that.tableData8 = ret.data.data;
								}
							}else{
								alert(ret.data);
							}
							},function(err) {
								alert("失败");

							})
			},
			aa: function() {
				this.as = !this.as,
					this.bs = false,
					this.cs = false,
					this.ds = false,
					this.es = false,
					this.fs = false
			},
			bb: function() {
				this.bs = !this.bs,
					this.as = false,
					this.cs = false,
					this.ds = false,
					this.es = false,
					this.fs = false
			},
			cc: function() {
				this.cs = !this.cs,
					this.as = false,
					this.bs = false,
					this.ds = false,
					this.es = false,
					this.fs = false
			},
			dd: function() {
				this.ds = !this.ds,
					this.as = false,
					this.cs = false,
					this.bs = false,
					this.es = false,
					this.fs = false
			},
			ee: function() {
				this.es = !this.es,
					this.as = false,
					this.cs = false,
					this.ds = false,
					this.bs = false,
					this.fs = false
			},
			ff: function() {
				this.fs = !this.fs,
					this.as = false,
					this.cs = false,
					this.ds = false,
					this.bs = false,
					this.es = false
			},

			//保存
			haoqia: function() {
				var that = this;
				var params = new URLSearchParams();
				params.append("to", 1);
				params.append("serial", this.formInline.serial);
				
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/serial_add", params).then(function(ret){
					console.log(ret)
					if(ret.data.code == 200){
							alert(123);
					}else{
						alert(ret.data);
						
					}
				},function(err){
					alert("失败");
					
				})				

				this.isshow = false;
				this.isshows = false;
				var b = [];
				b = this.tableData3;
				b = b.concat(this.formInline);
				console.log(b);

				this.tableData3 = b;

				
				this.formInline = {
					serial: "",
				};
				//关闭窗口 

			},
			haoqia1: function() {
				var that = this;
				var params = new URLSearchParams();
				params.append("to", 1);
				params.append("styles", this.formInline1.styles);
				
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/styles_add", params).then(function(ret){
					console.log(ret)
					if(ret.data.code == 200){
							alert(123);
					}else{
						alert(ret.data);
						
					}
				},function(err){
					alert("失败");
					
				})				

				this.isshow = false;
				this.isshows = false;
				var b = [];
				b = this.tableData4;
				b = b.concat(this.formInline1);
				console.log(b);

				this.tableData4 = b;

				
				this.formInline1 = {
					styles: "",
				};
			},
			haoqia2: function() {
				var that = this;
				var params = new URLSearchParams();
				params.append("to", 1);
				params.append("colors", this.formInline2.colors);
				
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/colors_add", params).then(function(ret){
					console.log(ret)
					if(ret.data.code == 200){
							alert(123);
					}else{
						alert(ret.data);
						
					}
				},function(err){
					alert("失败");
					
				})				

				this.isshow = false;
				this.isshows = false;
				var b = [];
				b = this.tableData5;
				b = b.concat(this.formInline2);
				console.log(b);

				this.tableData5 = b;

				
				this.formInline2 = {
					colors: "",
				};
			},
			haoqia3: function() {
				var that = this;
				var params = new URLSearchParams();
				params.append("to", 1);
				params.append("arts", this.formInline3.arts);
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/arts_add", params).then(function(ret){
					console.log(ret)
					if(ret.data.code == 200){
							alert(123);
					}else{
						alert(ret.data);
					}
				},function(err){
					alert("失败");
					
				})				

				this.isshow = false;
				this.isshows = false;
				var b = [];
				b = this.tableData6;
				b = b.concat(this.formInline3);
				console.log(b);

				this.tableData6 = b;

				
				this.formInline3 = {
					arts: "",
				};
			},
			haoqia4: function() {
				var that = this;
				var params = new URLSearchParams();
				params.append("to", 1);
				params.append("linear", this.formInline4.linear);
				
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/linear_add", params).then(function(ret){
					console.log(ret)
					if(ret.data.code == 200){
							alert(123);
					}else{
						alert(ret.data);
						
					}
				},function(err){
					alert("失败");
					
				})				

				this.isshow = false;
				this.isshows = false;
				var b = [];
				b = this.tableData7;
				b = b.concat(this.formInline4);
				console.log(b);

				this.tableData7 = b;

				
				this.formInline4 = {
					linear: "",
				};
			},
			haoqia5: function() {
				var myDate = new Date();
				console.log(myDate);
				var that = this;
				var params = new URLSearchParams();
				params.append("to", 1);
				params.append("brand", this.formInline5.brand);
				params.append("bei", this.formInline5.bei);
				params.append("time", this.myDate);
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/brand_add", params).then(function(ret){
					console.log(ret)
					if(ret.data.code == 200){
							alert(123);
					}else{
						alert(ret.data);
						
					}
				},function(err){
					alert("失败");
					
				})				

				this.isshow = false;
				this.isshows = false;
				var b = [];
				b = this.tableData8;
				b = b.concat(this.formInline5);
				console.log(b);

				this.tableData8 = b;

				
				this.formInline5 = {
					brand: "",
				};
			},
			
			//取消
			adds: function() {
				this.isshow = false;
				this.isshows = false;
			},

			//添加
			add() {
				this.isshow = !this.isshow;
				//清空
				this.formInline.serial = "";
			},
			add1() {
				this.isshow = !this.isshow;
				this.formInline1.styles = "";
			},
			add2() {
				this.isshow = !this.isshow;
				this.formInline2.colors = "";
			},
			add3() {
				this.isshow = !this.isshow;
				this.formInline.arts = "";
			},
			add4() {
				this.isshow = !this.isshow;
				this.formInline4.linear = "";
			},
			add5() {
				this.isshow = !this.isshow;
				this.formInline5.brand = "";
				this.formInline5.bei = "";
			},
			
			
			//编辑
			addsp: function(index, rows) {
				this.isshow = false;
				this.isshows = true;
//				console.log(this.tableData3[index].id);
				console.log(this.tableData3[index].serial)
				this.ind = this.tableData3[index].id;
				this.names = index;
				console.log(this.names)
				
				this.saffd = this.tableData3[index].serial;
				this.formInline.serial = this.saffd
			},
			
			
			
			addsp1: function(index) {
				this.isshow = false;
				this.isshows = true;
//				console.log(this.tableData3[index].id);
				console.log(this.tableData4[index].styles)
				this.ind = this.tableData4[index].id;
				this.names = index;
				console.log(this.names)
				
				this.saffd = this.tableData4[index].styles;
				this.formInline1.styles = this.saffd
			},
			addsp2: function(index) {
				this.isshow = false;
				this.isshows = true;
//				console.log(this.tableData3[index].id);
				console.log(this.tableData5[index].colors)
				this.ind = this.tableData5[index].id;
				this.names = index;
				console.log(this.names)
				
				this.saffd = this.tableData5[index].colors;
				this.formInline2.colors = this.saffd
			},
			addsp3: function(index) {
				this.isshow = false;
				this.isshows = true;
//				console.log(this.tableData3[index].id);
				console.log(this.tableData6[index].arts)
				this.ind = this.tableData6[index].id;
				this.names = index;
				console.log(this.names)
				
				this.saffd = this.tableData6[index].arts;
				this.formInline3.arts = this.saffd
			},
			addsp4: function(index) {
				this.isshow = false;
				this.isshows = true;
//				console.log(this.tableData3[index].id);
				console.log(this.tableData7[index].linear)
				this.ind = this.tableData7[index].id;
				this.names = index;
				console.log(this.names)
				
				this.saffd = this.tableData7[index].linear;
				this.formInline4.linear = this.saffd
			},
			addsp5: function(index) {
				this.isshow = false;
				this.isshows = true;
//				console.log(this.tableData3[index].id);
				console.log(this.tableData8[index].brand)
				this.ind = this.tableData8[index].id;
				this.names = index;
				console.log(this.names)
				
				this.saffd = this.tableData8[index].brand;
				this.formInline5.brand = this.saffd;
				this.beizhu = this.tableData8[index].bei;
				this.formInline5.bei = this.beizhu;
			},

			//修改
			haoqias: function(index, rows) {
				var that = this;
				console.log(this.ind)
				var params = new URLSearchParams();
				params.append("to", 1);
				params.append("id", this.ind);
				params.append("serial",this.formInline.serial);
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/serial_edit", params).then(function(ret){
					console.log(ret)
					if(ret.data.code == 200){
							alert(123);
							that.tableData3[that.names].serial = that.formInline.serial;
					}else{
						alert(ret.data);
						
					}
				},function(err){
					alert("失败");
					
				});
				
				this.tableData3[this.names].serial = this.formInline.serial;
				console.log(this.names);
				
				this.isshows = false;
				
			},
			haoqias1: function(index, rows) {
				var that = this;
				console.log(this.ind)
				var params = new URLSearchParams();
				params.append("to", 1);
				params.append("id", this.ind);
				params.append("styles",this.formInline1.styles);
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/styles_edit", params).then(function(ret){
					console.log(ret)
					if(ret.data.code == 200){
							alert(123);
							that.tableData4[that.names].styles = that.formInline1.styles;
					}else{
						alert(ret.data);
						
					}
				},function(err){
					alert("失败");
					
				});
				
				this.tableData4[this.names].styles = this.formInline1.styles;
				console.log(this.names);
				
				this.isshows = false;
			},
			haoqias2: function(index, rows) {
				var that = this;
				console.log(this.ind)
				var params = new URLSearchParams();
				params.append("to", 1);
				params.append("id", this.ind);
				params.append("colors",this.formInline2.colors);
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/colors_edit", params).then(function(ret){
					console.log(ret)
					if(ret.data.code == 200){
							alert(123);
							that.tableData5[that.names].colors = that.formInline2.colors;
					}else{
						alert(ret.data);
						
					}
				},function(err){
					alert("失败");
					
				});
				
				this.tableData5[this.names].colors = this.formInline2.colors;
				console.log(this.names);
				
				this.isshows = false;
			},
			haoqias3: function(index, rows) {
				var that = this;
				console.log(this.ind)
				var params = new URLSearchParams();
				params.append("to", 1);
				params.append("id", this.ind);
				params.append("arts",this.formInline3.arts);
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/arts_edit", params).then(function(ret){
					console.log(ret)
					if(ret.data.code == 200){
							alert(123);
							that.tableData6[that.names].arts = that.formInline3.arts;
					}else{
						alert(ret.data);
						
					}
				},function(err){
					alert("失败");
					
				});
				
				this.tableData6[this.names].arts = this.formInline3.arts;
				console.log(this.names);
				
				this.isshows = false;
			},
			haoqias4: function(index, rows) {
				var that = this;
				console.log(this.ind)
				var params = new URLSearchParams();
				params.append("to", 1);
				params.append("id", this.ind);
				params.append("linear",this.formInline4.linear);
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/linear_edit", params).then(function(ret){
					console.log(ret)
					if(ret.data.code == 200){
							alert(123);
							that.tableData7[that.names].linear = that.formInline4.linear;
					}else{
						alert(ret.data);
						
					}
				},function(err){
					alert("失败");
					
				});
				
				this.tableData7[this.names].linear = this.formInline4.linear;
				console.log(this.names);
				
				this.isshows = false;
			},
			haoqias5: function(index, rows) {
				var myDate = new Date();
				console.log(myDate);
				var that = this;
				console.log(this.ind)
				var params = new URLSearchParams();
				params.append("to", 1);
				params.append("id", this.ind);
				params.append("brand",this.formInline5.brand);
				params.append("bei",this.formInline5.bei);
				params.append("time",this.myDate);
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/brand_edit", params).then(function(ret){
					console.log(ret)
					if(ret.data.code == 200){
							alert(123);
							that.tableData8[that.names].brand = that.formInline5.brand;
							that.tableData8[that.names].bei = that.formInline5.bei;
					}else{
						alert(ret.data);
						
					}
				},function(err){
					alert("失败");
					
				});
				
				this.tableData8[this.names].brand = this.formInline5.brand;
				this.tableData8[this.names].bei = this.formInline5.bei;
				console.log(this.names);
				
				this.isshows = false;
			},

			psdda: function(index, rows) {
				var that = this;
				console.log(this.tableData3[index].id)
				var params = new URLSearchParams();
				params.append("to", 1);
				params.append("id", this.tableData3[index].id);
				
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/serial_del", params).then(function(ret){
					console.log(ret)
					if(ret.data.code == 200){
							alert(123);
							that.tableData3.splice(index,1)
							
					}else{
						alert(ret.data);
						
					}
				},function(err){
					alert("失败");
					
				})
			},
			psdda1: function(index, rows) {
				var that = this;
				console.log(this.tableData4[index].id)
				var params = new URLSearchParams();
				params.append("to", 1);
				params.append("id", this.tableData4[index].id);
				
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/styles_del", params).then(function(ret){
					console.log(ret)
					if(ret.data.code == 200){
							alert(123);
							that.tableData4.splice(index,1)
							
					}else{
						alert(ret.data);
						
					}
				},function(err){
					alert("失败");
					
				})
			},
			psdda2: function(index, rows) {
				var that = this;
				console.log(this.tableData5[index].id)
				var params = new URLSearchParams();
				params.append("to", 1);
				params.append("id", this.tableData5[index].id);
				
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/colors_del", params).then(function(ret){
					console.log(ret)
					if(ret.data.code == 200){
							alert(123);
							that.tableData5.splice(index,1)
							
					}else{
						alert(ret.data);
						
					}
				},function(err){
					alert("失败");
					
				})
			},
			psdda3: function(index, rows) {
				var that = this;
				console.log(this.tableData6[index].id)
				var params = new URLSearchParams();
				params.append("to", 1);
				params.append("id", this.tableData6[index].id);
				
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/arts_del", params).then(function(ret){
					console.log(ret)
					if(ret.data.code == 200){
							alert(123);
							that.tableData6.splice(index,1)
							
					}else{
						alert(ret.data);
						
					}
				},function(err){
					alert("失败");
					
				})
			},
			psdda4: function(index, rows) {
				var that = this;
				console.log(this.tableData7[index].id)
				var params = new URLSearchParams();
				params.append("to", 1);
				params.append("id", this.tableData7[index].id);
				
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/linear_del", params).then(function(ret){
					console.log(ret)
					if(ret.data.code == 200){
							alert(123);
							that.tableData7.splice(index,1)
							
					}else{
						alert(ret.data);
						
					}
				},function(err){
					alert("失败");
					
				})
			},
			psdda5: function(index, rows) {
				var that = this;
				console.log(this.tableData8[index].id)
				var params = new URLSearchParams();
				params.append("to", 1);
				params.append("id", this.tableData8[index].id);
				
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/brand_del", params).then(function(ret){
					console.log(ret)
					if(ret.data.code == 200){
							alert(123);
							that.tableData8.splice(index,1)
							
					}else{
						alert(ret.data);
						
					}
				},function(err){
					alert("失败");
					
				})
			},
		},

	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.a {
		display: inline-block;
		width: 90px;
		text-align: center;
		line-height: 42px;
		color: #8391a5;
		font-size: 14px;
		cursor: pointer;
	}
	
	.b {
		margin-top: 25px;
		clear: both;
	}
	
	.bbdq {
		position: relative;
	}
	
	.bbqd {
		width: 100%;
		height: 100%;
		text-align: center;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.tops:hover {
		background: #eef1f6;
	}
	
	.on {
		color: #20a0ff;
		background: #FFFFFF;
	}
</style>