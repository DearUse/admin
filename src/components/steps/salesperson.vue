<template>
	<div>
		<!--遮罩-->
		<div class="fir" v-show="isshowss"></div>
		<div>
			<el-button @click="add">添加</el-button>
			<div style="margin-top: 10px;">
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<div>
						<el-table :data="tableData3" height="700" border style="width: 100%" >
							<el-table-column prop="name" label="销售员名称" width="180">
							</el-table-column>
							<el-table-column prop="customercalls" label="销售员账号" width="180">
							</el-table-column>
							<el-table-column prop="specialcustomer" label="手机号码" width="180">
							</el-table-column>
							<el-table-column prop="development" label="备注信息" width="180">
							</el-table-column>
							<el-table-column label="相关操作" width="154">
								<template slot-scope="scope"  v-for="(item,index) in tableData3">
									<el-button type="text" size="small" @click.native.prevent="addsp(scope.$index, tableData3)">编辑</el-button>
									<el-button @click.native.prevent="psdda(scope.$index, tableData3)" type="text" size="small">移除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</div>
				</el-tabs>
			</div>
		</div>

		<!--添加-->
		<div class="add" v-show="isshow" style="width: 961px !important; ">
			<div class="kehu" style="width:850px;line-height:42px;color:#333;background-color: #F8F8F8;font-size: 28px;border-bottom: 1px solid #eee;margin-bottom: 20px;">
				添加销售员
			</div>
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-form-item label="销售员名称" class="labe">
					<el-input v-model="formInline.name" placeholder="销售员名称"></el-input>
				</el-form-item>
				<!--<el-form-item label="用户名称">
					<el-select v-model="formInline.username" style="width:185px;" placeholder="用户名称">
						<el-option label="李某" value="李某"></el-option>
						<el-option label="刘某" value="刘某"></el-option>
					</el-select>
				</el-form-item>-->
				<el-form-item label="销售员账号">
					<el-input v-model="formInline.customercalls" style="width: 175px !important;" placeholder="客户电话"></el-input>
				</el-form-item>
				<el-form-item label="手机号码">
					<el-input v-model="formInline.specialcustomer" style="width: 175px !important;" placeholder="特殊客户"></el-input>
				</el-form-item>
				<el-form-item label="备注信息">
					<el-input v-model="formInline.development" style="width: 175px !important;" placeholder="发展日期"></el-input>
				</el-form-item>
				<div style="float: right;margin-right:100px;margin-top: 20px;">
					<el-button type="primary" style="width: 100px;" @click="adds">取消</el-button>
					<el-button type="primary" style="width: 100px;" @click="haoqia">保存</el-button>
				</div>
			</el-form>
		</div>
		
		<div class="add" v-show="isshows" style="width: 961px !important;">
			<div class="kehu" style="width:850px;line-height:42px;color:#333;background-color: #F8F8F8;font-size: 28px;border-bottom: 1px solid #eee;margin-bottom: 20px;">
				修改销售员信息
			</div>
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-form-item label="销售员名称" class="labe">
					<el-input v-model="formInline.name" placeholder="职员名称"></el-input>
				</el-form-item>
				<el-form-item label="销售员账号">
					<el-input v-model="formInline.customercalls" style="width: 175px !important;" placeholder="客户电话"></el-input>
				</el-form-item>
				<el-form-item label="手机号码">
					<el-input v-model="formInline.specialcustomer" style="width: 175px !important;" placeholder="特殊客户"></el-input>
				</el-form-item>
				<el-form-item label="备注信息">
					<el-input v-model="formInline.development" style="width: 175px !important;" placeholder="发展日期"></el-input>
				</el-form-item>
				<div style="float: right;margin-right:100px;margin-top: 20px;">
					<el-button type="primary" style="width: 100px;" @click="adds">取消</el-button>
					<el-button type="primary" style="width: 100px;" @click="haoqias">确认</el-button>
				</div>
			</el-form>
		</div>
	</div>

</template>

<script type="text/ecmascript-6">
	import Vue from 'vue';
	import 'element-ui/lib/theme-default/index.css';
	export default {
		data() {
			return {
				activeName: 'first',
				isshow: false,
				isshows: false,
				isshowss: false,
				currentName: [],
				saffd:"",
				formInline: {
					name: '', //客户名称
					customercalls: "", //客户电话
					specialcustomer: "", //特殊客户
					development: "", //发展日期
				},
				tableData4: [{
					theserial: '2025854', //序号
					logisticename: '', //物流名称
					logisticphone: '', //物流电话
					logisnuber: "", //物流传值
					logisaddrds: "", //物流地址
				}],
				tableData3: [
					
					{
						name: '張三', //客户名称
						customercalls: "15828074136", //客户电话
						specialcustomer: "王麻子", //特殊客户
						development: "2015年7月", //发展日期
						
					}
				],
				options: [{
					value: 'zhinan',
					label: '指南',
					children: [{
						value: 'shejiyuanze',
						label: '设计原则',
						children: [{
							value: 'yizhi',
							label: '一致'
						}, {
							value: 'fankui',
							label: '反馈'
						}, {
							value: 'xiaolv',
							label: '效率'
						}, {
							value: 'kekong',
							label: '可控'
						}]
					}, {
						value: 'daohang',
						label: '导航',
						children: [{
							value: 'cexiangdaohang',
							label: '侧向导航'
						}, {
							value: 'dingbudaohang',
							label: '顶部导航'
						}]
					}]
				}, {
					value: 'zujian',
					label: '省',
					children: [{
						value: 'basic',
						label: '市',
						children: [{
							value: 'layout',
							label: '县'
						}, {
							value: 'color',
							label: 'Color 色彩'
						}, {
							value: 'typography',
							label: 'Typography 字体'
						}, {
							value: 'icon',
							label: 'Icon 图标'
						}, {
							value: 'button',
							label: 'Button 按钮'
						}]
					}, {
						value: 'form',
						label: 'Form',
						children: [{
							value: 'radio',
							label: 'Radio 单选框'
						}, {
							value: 'checkbox',
							label: 'Checkbox 多选框'
						}, {
							value: 'input',
							label: 'Input 输入框'
						}, {
							value: 'input-number',
							label: 'InputNumber 计数器'
						}, {
							value: 'select',
							label: 'Select 选择器'
						}, {
							value: 'cascader',
							label: 'Cascader 级联选择器'
						}, {
							value: 'switch',
							label: 'Switch 开关'
						}, {
							value: 'slider',
							label: 'Slider 滑块'
						}, {
							value: 'time-picker',
							label: 'TimePicker 时间选择器'
						}, {
							value: 'date-picker',
							label: 'DatePicker 日期选择器'
						}, {
							value: 'datetime-picker',
							label: 'DateTimePicker 日期时间选择器'
						}, {
							value: 'upload',
							label: 'Upload 上传'
						}, {
							value: 'rate',
							label: 'Rate 评分'
						}, {
							value: 'form',
							label: 'Form 表单'
						}]
					}, {
						value: 'data',
						label: 'Data',
						children: [{
							value: 'table',
							label: 'Table 表格'
						}, {
							value: 'tag',
							label: 'Tag 标签'
						}, {
							value: 'progress',
							label: 'Progress 进度条'
						}, {
							value: 'tree',
							label: 'Tree 树形控件'
						}, {
							value: 'pagination',
							label: 'Pagination 分页'
						}, {
							value: 'badge',
							label: 'Badge 标记'
						}]
					}, {
						value: 'notice',
						label: 'Notice',
						children: [{
							value: 'alert',
							label: 'Alert 警告'
						}, {
							value: 'loading',
							label: 'Loading 加载'
						}, {
							value: 'message',
							label: 'Message 消息提示'
						}, {
							value: 'message-box',
							label: 'MessageBox 弹框'
						}, {
							value: 'notification',
							label: 'Notification 通知'
						}]
					}, {
						value: 'navigation',
						label: 'Navigation',
						children: [{
							value: 'menu',
							label: 'NavMenu 导航菜单'
						}, {
							value: 'tabs',
							label: 'Tabs 标签页'
						}, {
							value: 'breadcrumb',
							label: 'Breadcrumb 面包屑'
						}, {
							value: 'dropdown',
							label: 'Dropdown 下拉菜单'
						}, {
							value: 'steps',
							label: 'Steps 步骤条'
						}]
					}, {
						value: 'others',
						label: 'Others',
						children: [{
							value: 'dialog',
							label: 'Dialog 对话框'
						}, {
							value: 'tooltip',
							label: 'Tooltip 文字提示'
						}, {
							value: 'popover',
							label: 'Popover 弹出框'
						}, {
							value: 'card',
							label: 'Card 卡片'
						}, {
							value: 'carousel',
							label: 'Carousel 走马灯'
						}, {
							value: 'collapse',
							label: 'Collapse 折叠面板'
						}]
					}]
				}, {
					value: 'ziyuan',
					label: '资源',
					children: [{
						value: 'axure',
						label: 'Axure Components'
					}, {
						value: 'sketch',
						label: 'Sketch Templates'
					}, {
						value: 'jiaohu',
						label: '组件交互文档'
					}]
				}]

			}
		},
		methods: {
			//保存
			haoqia: function() {
				var b = [];
				b = this.tableData3;
				b = b.concat(this.formInline);
				console.log(b);

				this.tableData3 = b;
				this.formInline = {
					name: "",
					customercalls: "",
					specialcustomer: "",
					development: "",
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
			
			onSubmit() {
				console.log('submit!');
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			handleClick(tab, event) {
				console.log(tab, event);
			},
			cellEditDone(newValue, oldValue, rowIndex, rowData, field) {

				this.tableData[rowIndex][field] = newValue;

				// 接下来处理你的业务逻辑，数据持久化等...
			},
			//添加
			add() {
				this.isshow = !this.isshow;
				this.isshowss = !this.isshowss;
				//清空
				this.formInline.name ="";
				this.formInline.customercalls ="";
				this.formInline.specialcustomer ="";
				this.formInline.development ="";
			},
			//编辑
			addsp:function(index){
				this.isshows = true;
				this.isshowss = !this.isshowss;
				console.log(this.tableData3[index].name);
				console.log(index);
				this.saffd = index;
				console.log(this.saffd)
				
				this.formInline.name = this.tableData3[this.saffd].name;
				this.formInline.customercalls = this.tableData3[this.saffd].customercalls;
				this.formInline.specialcustomer = this.tableData3[this.saffd].specialcustomer;
				this.formInline.development = this.tableData3[this.saffd].development;
			},
			//修改
			haoqias:function(){
				this.tableData3[this.saffd].name = this.formInline.name;
				this.tableData3[this.saffd].customercalls = this.formInline.customercalls;
				this.tableData3[this.saffd].specialcustomer = this.formInline.specialcustomer;
				this.tableData3[this.saffd].development = this.formInline.development;
				this.isshows = false;
				this.isshowss =!this.isshowss;
			},
			psdda:function(index, rows){
				rows.splice(index, 1);
			},
			addtable() {

			}
		},
		mounted:function(){
			
			
	  
			}

	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.el-dropdown {
		vertical-align: top;
	}
	
	.el-dropdown+.el-dropdown {
		margin-left: 15px;
	}
	
	.kiy {
		font-size: 24px;
	}
	
	.el-icon-arrow-down {
		font-size: 12px;
	}
	
	.pane {
		width: 25%;
		background: #FFFFFF;
		height: 400px;
		margin: 10px;
		position: absolute;
		top: 27px;
		left: 30px;
	}
	
	.phone {
		width: 20%;
		height: 140px;
		float: left;
		margin-top: 30px;
		margin-left: 30px;
	}
	
	.demo-table-expand {
		font-size: 0;
	}
	
	.demo-table-expand label {
		width: 90px;
		color: #99a9bf;
	}
	
	.demo-table-expand .el-form-item {
		margin-right: 0;
		margin-bottom: 0;
		width: 50%;
	}
	
	.phones {
		width: 100%;
		height: 100px;
		display: block;
		line-height: 100px;
		color: #FFFFFF;
		text-align: center;
		background-color: #ff6c60;
	}
	
	.times {
		color: red;
		display: block;
		text-align: center;
		font-size: 18px;
	}
	
	.text {
		font-size: 14px;
	}
	
	.item {
		margin-bottom: 18px;
	}
	
	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}
	
	.clearfix:after {
		clear: both
	}
	
	.box-card {
		width: 480px;
	}
	
	.timest {
		float: right;
		width: 280px;
		height: 350px;
		margin-top: 30px;
	}
	
	.timestt {
		font-size: 24px;
		display: block;
		color: #333;
		margin-bottom: 20px;
	}
	
	.cell-edit-color {
		color: #2db7f5;
		font-weight: bold;
	}
	
	.comm {
		width: 100%;
		height: 800px;
		background-color: #EBEBEB;
	}
	
	
	
	.fir {
		width: 100%;
		height: 1085px;
		background-color: #999999;
		opacity: 0.3;
		position: absolute;
		top: 20px;
		z-index: 25;
	}
	.add {
		/*height: auto;
		background-color: #FFFFFF;
		border: 6px solid #8D8D8D;
		position: relative;
		top: 10% !important;
		left: 0 !important;
		right: 0 !important;
		margin: 0 auto !important;
		padding: 25px;
		z-index: 30;*/
	}
	.el-form--inline .el-form-item {
		display: inline-block;
		margin-right: 10px;
		vertical-align: top;
		width: 277px !important;
	}
</style>