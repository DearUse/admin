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
								<template slot-scope="scope">
									<!--scope是作用域 scope.row 是当前行{{scope.row}}-->
									<el-button type="text" size="small" @click.native.prevent="addsp(scope.row.id, tableData3)">编辑</el-button>
									<el-button @click.native.prevent="psdda(scope.row.id, tableData3)" type="text" size="small">移除</el-button>
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
							<el-table-column prop="name" label="型号" width="180">
							</el-table-column>
							<el-table-column label="相关操作" width="154">
								<template slot-scope="scope" v-for="(item,index) in tableData4">
									<el-button type="text" size="small" @click.native.prevent="addsp1(scope.$index, tableData4)">编辑</el-button>
									<el-button @click.native.prevent="psdda(scope.$index, tableData4)" type="text" size="small">移除</el-button>
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
						<el-input v-model="formInline1.name" placeholder="型号"></el-input>
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
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="型号" class="labe">
						<el-input v-model="formInline1.name" placeholder="型号"></el-input>
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
							<el-table-column prop="name" label="颜色" width="180">
							</el-table-column>
							<el-table-column label="相关操作" width="154">
								<template slot-scope="scope" v-for="(item,index) in tableData5">
									<el-button type="text" size="small" @click.native.prevent="addsp2(scope.$index, tableData5)">编辑</el-button>
									<el-button @click.native.prevent="psdda(scope.$index, tableData5)" type="text" size="small">移除</el-button>
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
						<el-input v-model="formInline2.name" placeholder="颜色"></el-input>
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
						<el-input v-model="formInline2.name" placeholder="颜色"></el-input>
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
							<el-table-column prop="name" label="工艺" width="180">
							</el-table-column>
							<el-table-column label="相关操作" width="154">
								<template slot-scope="scope" v-for="(item,index) in tableData6">
									<el-button type="text" size="small" @click.native.prevent="addsp3(scope.$index, tableData6)">编辑</el-button>
									<el-button @click.native.prevent="psdda(scope.$index, tableData6)" type="text" size="small">移除</el-button>
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
						<el-input v-model="formInline3.name" placeholder="工艺"></el-input>
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
						<el-input v-model="formInline3.name" placeholder="工艺"></el-input>
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
							<el-table-column prop="name" label="线条" width="180">
							</el-table-column>
							<el-table-column label="相关操作" width="154">
								<template slot-scope="scope" v-for="(item,index) in tableData7">
									<el-button type="text" size="small" @click.native.prevent="addsp4(scope.$index, tableData7)">编辑</el-button>
									<el-button @click.native.prevent="psdda(scope.$index, tableData7)" type="text" size="small">移除</el-button>
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
						<el-input v-model="formInline4.name" placeholder="线条"></el-input>
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
						<el-input v-model="formInline4.name" placeholder="线条"></el-input>
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
							<el-table-column prop="name" label="线条" width="180">
							</el-table-column>
							<el-table-column label="相关操作" width="154">
								<template slot-scope="scope" v-for="(item,index) in tableData8">
									<el-button type="text" size="small" @click.native.prevent="addsp5(scope.$index, tableData8)">编辑</el-button>
									<el-button @click.native.prevent="psdda(scope.$index, tableData8)" type="text" size="small">移除</el-button>
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
					<el-form-item label="线条" class="labe">
						<el-input v-model="formInline5.name" placeholder="线条"></el-input>
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
					<el-form-item label="线条" class="labe">
						<el-input v-model="formInline5.name" placeholder="线条"></el-input>
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
				isshowss: false,
				saffd: "",
				formInline: {
					serial: ''
				},
				formInline1: {
					name: ''
				},
				formInline2: {
					name: ''
				},
				formInline3: {
					name: ''
				},
				formInline4: {
					name: ''
				},
				formInline5: {
					name: ''
				},
				//				系列
				tableData3: [{
					
				}],

				//				款式
				tableData4: [{
					name: 'py101 '
				}, {
					name: 'py102'
				}, {
					name: 'py103 '
				}, {
					name: 'py104'
				}, {
					name: 'py105 '
				}, {
					name: 'py106'
				}, {
					name: 'py107 '
				}, {
					name: 'py108'
				}, {
					name: 'py1039'
				}],

				//				颜色
				tableData5: [{
					name: "黑胡桃浅色"
				}, {
					name: "黑胡桃深色"
				}, {
					name: "红木浅色"
				}, {
					name: "红木深色"
				}, {
					name: "红樱桃浅色"
				}, {
					name: "红樱桃深色"
				}, {
					name: "花梨浅色"
				}, {
					name: "花梨深色"
				}, {
					name: "进口纯白色"
				}, {
					name: "进口红樱桃色"
				}, {
					name: "进口花梨色"
				}, {
					name: "进口沙比利色"
				}, {
					name: "柚木深色"
				}, {
					name: "柚木浅色"
				}],
				tableData6: [{
					name: '張三',

				}],
				tableData7: [{
					name: '張三',

				}],
				tableData8: [{
					name: '66',

				}]
			}
		},
		mounted: function() {
			this.queryProMegs();
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
									that.tableData3 = ret.data.data
								}
							}else{
								alert(ret.data);
							}
							},function(err) {
								alert("失败");

							})
					//				console.log('21321huigfhsan')
					//				let data = {
					//					to: '1',
					//				}
					//				Message.show(this, data, (e) => {
					//					console.log(e)
					//
					//				})
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
				this.isshowss = false;
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
				var b = [];
				b = this.tableData4;
				b = b.concat(this.formInline1);
				console.log(b);

				this.tableData4 = b;
				this.formInline1 = {
					name: "",
				};

				//关闭窗口 
				this.isshow = false;
				this.isshowss = false;
			},
			haoqia2: function() {
				var b = [];
				b = this.tableData5;
				b = b.concat(this.formInline2);
				console.log(b);

				this.tableData5 = b;
				this.formInline2 = {
					name: "",
				};

				//关闭窗口 
				this.isshow = false;
				this.isshowss = false;
			},
			haoqia3: function() {
				var b = [];
				b = this.tableData6;
				b = b.concat(this.formInline3);
				console.log(b);

				this.tableData6 = b;
				this.formInline3 = {
					name: "",
				};

				//关闭窗口 
				this.isshow = false;
				this.isshowss = false;
			},
			haoqia4: function() {
				var b = [];
				b = this.tableData7;
				b = b.concat(this.formInline4);
				console.log(b);

				this.tableData7 = b;
				this.formInline4 = {
					name: "",
				};

				//关闭窗口 
				this.isshow = false;
				this.isshowss = false;
			},
			haoqia5: function() {
				var b = [];
				b = this.tableData8;
				b = b.concat(this.formInline5);
				console.log(b);

				this.tableData8 = b;
				this.formInline5 = {
					name: "",
				};

				//关闭窗口 
				this.isshow = false;
				this.isshowss = false;
			},
			//取消
			adds: function() {
				this.isshow = false;
				this.isshows = false;
				this.isshowss = false;
			},

			//添加
			add() {
				this.isshow = !this.isshow;
				this.isshowss = !this.isshowss;
				//清空
				this.formInline.name = "";
			},
			add1() {
				this.isshow = !this.isshow;
				this.isshowss = !this.isshowss;
				this.formInline1.name = "";
			},
			add2() {
				this.isshow = !this.isshow;
				this.isshowss = !this.isshowss;
				this.formInline2.name = "";
			},
			add3() {
				this.isshow = !this.isshow;
				this.isshowss = !this.isshowss;
				this.formInline.name = "";
			},
			add4() {
				this.isshow = !this.isshow;
				this.isshowss = !this.isshowss;
				this.formInline4.name = "";
			},
			add5() {
				this.isshow = !this.isshow;
				this.isshowss = !this.isshowss;
				this.formInline5.name = "";
			},
			//编辑
			addsp: function(index) {
				this.isshows = true;
				this.isshowss = !this.isshowss;
				console.log(this.tableData3[index].name);
				console.log(index);
				this.saffd = index;
				console.log(this.saffd)

				this.formInline.name = this.tableData3[this.saffd].name;
			},
			addsp1: function(index) {
				this.isshows = true;
				this.isshowss = !this.isshowss;
				console.log(this.tableData4[index].name);
				console.log(index);
				this.saffd = index;
				console.log(this.saffd)

				this.formInline1.name = this.tableData4[this.saffd].name;
			},
			addsp2: function(index) {
				this.isshows = true;
				this.isshowss = !this.isshowss;
				console.log(this.tableData5[index].name);
				console.log(index);
				this.saffd = index;
				console.log(this.saffd)

				this.formInline2.name = this.tableData5[this.saffd].name;
			},
			addsp3: function(index) {
				this.isshows = true;
				this.isshowss = !this.isshowss;
				console.log(this.tableData6[index].name);
				console.log(index);
				this.saffd = index;
				console.log(this.saffd)

				this.formInline3.name = this.tableData6[this.saffd].name;
			},
			addsp4: function(index) {
				this.isshows = true;
				this.isshowss = !this.isshowss;
				console.log(this.tableData7[index].name);
				console.log(index);
				this.saffd = index;
				console.log(this.saffd)

				this.formInline4.name = this.tableData7[this.saffd].name;
			},
			addsp5: function(index) {
				this.isshows = true;
				this.isshowss = !this.isshowss;
				console.log(this.tableData8[index].name);
				console.log(index);
				this.saffd = index;
				console.log(this.saffd)

				this.formInline5.name = this.tableData8[this.saffd].name;
			},

			//修改
			haoqias: function() {
				let index = this.saffd; //然后在这里取出  这就是你要哪的id
				console.log(this.saffd)
				let data = {
					to: '1',
					id: this.index,
					serial: this.formInline1
				}

				Message.edit(this, data, (e) => {
					alert(13)
					e.data.serial = this.formInline1
					console.log(e.id);
				})

				this.tableData3[this.saffd].name = this.formInline.name;
				this.isshows = false;
				this.isshowss = !this.isshowss;
			},
			haoqias1: function() {
				this.tableData4[this.saffd].name = this.formInline1.name;
				this.isshows = false;
				this.isshowss = !this.isshowss;
			},
			haoqias2: function() {
				this.tableData5[this.saffd].name = this.formInline2.name;
				this.isshows = false;
				this.isshowss = !this.isshowss;
			},
			haoqias3: function() {
				this.tableData6[this.saffd].name = this.formInline3.name;
				this.isshows = false;
				this.isshowss = !this.isshowss;
			},
			haoqias4: function() {
				this.tableData7[this.saffd].name = this.formInline4.name;
				this.isshows = false;
				this.isshowss = !this.isshowss;
			},
			haoqias5: function() {
				this.tableData8[this.saffd].name = this.formInline5.name;
				this.isshows = false;
				this.isshowss = !this.isshowss;
			},

			psdda: function(index, rows) {
				var that = this;
				console.log(this.tableData3[index])
				var params = new URLSearchParams();
				params.append("to", 1);
				params.append("id", this.tableData3[index].id);
				
				axios.post("http://mumen.myhjq.com/index.php/Muapi/Basicall/serial_del", params).then(function(ret){
					console.log(ret)
					if(ret.data.code == 200){
							alert(123);
							for(var i=0; i<that.tableData3.length; i++){
								
								that.tableData3.splice(0,1)
							}
					}else{
						alert(ret.data);
						
					}
				},function(err){
					alert("失败");
					
				})
			console.log(this.tableData3[index].id);

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