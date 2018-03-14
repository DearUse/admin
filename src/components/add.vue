<template>
	<div class="oder">
		
			<hello>
		</hello>
		<div class="commen">
			<div style="width: 100%;padding-left: 20px;margin-bottom: 20px; overflow: auto;" class="cnm">
				<button class="shang" @click="add">打印</button>
				<button class="shang">填充</button>
				<button class="shang">上移</button>
				<button class="shang">下移</button>
				<button class="shang">添加行</button>
				<button class="shang">移除行</button>
				<button class="shang">复制行</button>
				<button class="shang">粘贴行</button>
				<button class="shang">删除订单</button>
				<button class="shang">保存订单</button>
				<button class="shang">打印订单</button>
				<button class="shang">关闭并新建</button>
				<button class="shang" @click="guanbi">关闭</button>
			</div>
			<div style="width: 100%; margin-top: 40px;">
				<ul style="width: 100%;">
					<li class="yiyiyi">
						<el-form :label-position="labelPosition" label-width="30%" :model="formLabelAlign">
							<el-form-item label="订单编号" style="height: 36px !important;">
								<el-input type="text" v-model="formLabelAlign.name"></el-input>
							</el-form-item>
							<el-form-item label="客户名称" style="height: 36px !important;">
								<el-input v-model="formLabelAlign.region"></el-input>
							</el-form-item>
							<el-form-item label="电话号码" style="height: 36px !important;">
								<el-input type="number" v-model="formLabelAlign.type"></el-input>
							</el-form-item>
							<el-form-item label="客户地址" style="height: 36px !important;">
								<el-input type="text" v-model="formLabelAlign.nuber"></el-input>
							</el-form-item>
						</el-form>
					</li>
					<li class="yiyiyi">
						<div style="width: 100%; height: 36px;margin-bottom: 22px;">
							<div style="display: inline-block;padding-right: 12px;padding-top: 8px; width: 30%;height: 36px;float:left;display: table-cell;vertical-align: middle;text-align: right;">
								<span class="demonstration" style="width: 100%;font-size: 14px;">签订日期</span>
							</div>
							<el-date-picker style="display: inline-block !important; width: 70%;float:left;" v-model="value2" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
							</el-date-picker>
						</div>
						<div style="width: 100%; height: 36px;margin-bottom: 22px;">
							<div style="display: inline-block;padding-right: 12px;padding-top: 8px; width: 30%;height: 36px;float:left;display: table-cell;vertical-align: middle;text-align: right;">
							<span class="demonstration" style="width: 100%;font-size: 14px;">排产日期</span>
							</div>
							<el-date-picker style="display: inline-block !important; width: 70%;float: left;" v-model="value1" type="date" class="time" placeholder="选择日期">
							</el-date-picker>
						</div>
						<div style="width: 100%; height: 36px;margin-bottom: 22px;">
							<div style="display: inline-block;padding-right: 12px;padding-top: 8px; width: 30%;height: 36px;float:left;display: table-cell;vertical-align: middle;text-align: right;">
							<span class="demonstration" style="width: 100%;font-size: 14px;">交货日期</span>
							</div>
							<el-date-picker style="display: inline-block !important; width: 70%;float: left;" v-model="value3" type="date" class="time" placeholder="选择日期">
							</el-date-picker>
						</div>
						<div style="width: 100%; height: 36px;margin-bottom: 22px;">
							<el-col :span="12" style="width: 100%;">
								<div style="display: inline-block;padding-right: 12px;padding-top: 8px; width: 30%;height: 36px;float:left;display: table-cell;vertical-align: middle;text-align: right;">
								<i class="demonstration" style="width: 100%;font-size: 14px;">订单状态</i>
								</div>
								<el-autocomplete style="display: inline-block !important; width: 70%;float: left;" class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
							</el-col>
						</div>
					</li>
					<li class="yiyiyi">
						<el-form :label-position="labelPosition" label-width="30%" :model="formLabelAlign">
							<el-form-item label="物流名称" style="height: 36px !important;">
								<el-input v-model="formLabelAlign.freight"></el-input>
							</el-form-item>
							<el-form-item label="包装方式" style="height: 36px !important;">
								<el-input v-model="formLabelAlign.packaging"></el-input>
							</el-form-item>
							<el-form-item label="用户名称" style="height: 36px !important;">
								<el-input v-model="formLabelAlign.username"></el-input>
							</el-form-item>
							<el-form-item label="销售员" style="height: 36px !important;">
								<el-input v-model="formLabelAlign.salesperson"></el-input>
							</el-form-item>
						</el-form>
					</li>
					<li class="yiyiyi">
						<el-form :label-position="labelPosition" label-width="30%" :model="formLabelAlign">
							<el-form-item label="订单金额" style="height: 36px !important;">
								<el-input style="width: 100%" type="number" v-model="formLabelAlign.sales"></el-input>
							</el-form-item>
							<el-form-item label="优惠金额" style="height: 36px !important;">
								<el-input style="width: 100%" type="number" v-model="formLabelAlign.amount"></el-input>
							</el-form-item>
							<el-form-item label="实收金额" style="height: 36px !important;">
								<el-input style="width: 100%" type="number" v-model="formLabelAlign.settlement"></el-input>
							</el-form-item>
		
							<el-form style="width: 100%;text-align: right;">
								<el-button style="width: 30%; text-align: center !important; padding-left: 0; margin-left: 0 !important;">计算</el-button>
								<el-button style="width: 30%; text-align: center !important; padding-left: 0; margin-left: 0 !important;">审核</el-button>
								<el-button style="width: 30%; text-align: center !important; padding-left: 0; margin-left: 0 !important;">保存</el-button>
							</el-form>
		
						</el-form>
					</li>
					<li class="yiyiyi">
						<el-form :label-position="labelPosition" label-width="30%" :model="formLabelAlign">
							<el-form-item label="客户备注">
								<el-input type="textarea" :rows="4.5" placeholder="请输入内容" v-model="textarea">
								</el-input>
							</el-form-item>
							<el-form-item label="备注">
								<el-input type="textarea" :rows="4.5" placeholder="请输入内容" v-model="textarea1">
								</el-input>
							</el-form-item>
						</el-form>
					</li>
				</ul>
			</div>
			
			<div class="top" style="padding-right: 20px;">
				<table border="0" cellspacing="0" cellpadding="0" frame="border" rules="all" style="text-align: center;" contenteditable="true">
					<tr height="38px" style="background: #eef1f6;">
						<th width="100px">系列</th>
						<th width="100px">产品名称</th>
						<th width="100px">型号</th>
						<th width="100px">开向</th>
						<th width="100px">颜色</th>
						<th width="100px">工艺</th>
						<th width="100px">单双丁</th>
						<th width="100px">尺寸</th>
						<th width="100px">高</th>
						<th width="100px">宽</th>
						<th width="100px">门扇厚度</th>
						<th width="100px">墙体厚度</th>
						<th width="100px">数量</th>
						<th width="100px">线条</th>
						<th width="100px">备注</th>
						<th width="100px">加工说明</th>
						<th width="100px">单价</th>
						<th width="100px">金额</th>
						<th width="100px">安装位置</th>
						<th width="100px">计算结果</th>
					</tr>
					<tr height="38px" class="tops" v-for="item in nishigou">
						<td class="bbdq">
							<input class="bbqd" type="text" name="" id="" v-on:blur="changeCount" v-model="name"/>
						</td>
						<td class="bbdq">
							<input class="bbqd" type="text" name="" id="" v-model="tel" />
						</td>
						<td class="bbdq">
							<input class="bbqd" type="text" name="" id="" v-model="hobby" />
						</td>
						<td class="bbdq">
							<input class="bbqd" type="text" name="" id="" v-model="phone" />
						</td>
						<td class="bbdq">
							<input class="bbqd" type="text" name="" id="" v-model="development" />
						</td>
						<td class="bbdq">
							<input class="bbqd" type="text" name="" id="" v-model="cnumber" />
						</td>
						<td class="bbdq">
							<input class="bbqd" type="text" name="" id="" v-model="salesman" />
						</td>
						<td class="bbdq">
							<input class="bbqd" type="text" name="" id="" v-model="Mnemonic" />
						</td>
						<td class="bbdq">
							<input class="bbqd" type="text" name="" id="" v-model="brand" />
						</td>
						<td class="bbdq">
							<input class="bbqd" type="text" name="" id="" v-model="address" />
						</td>
						<td class="bbdq">
							<input class="bbqd" type="text" name="" id="" v-model="thick" />
						</td>
						<td class="bbdq">
							<input class="bbqd" type="text" name="" id="" v-model="thick1" />
						</td>
						<td class="bbdq">
							<input class="bbqd" type="text" name="" id="" v-model="group" />
						</td>
						<td class="bbdq">
							<input class="bbqd" type="text" name="" id="" v-model="packaging" />
						</td>
						<td class="bbdq">
							<input class="bbqd" type="text" name="" id="" v-model="company" />
						</td>
						<td class="bbdq">
							<input class="bbqd" type="text" name="" id="" v-model="price" />
						</td>
						<td class="bbdq">
							<input class="bbqd" type="text" name="" id="" v-model="highr" />
						</td>
						<td class="bbdq">
							<input class="bbqd" type="text" name="" id="" v-model="widthr" />
						</td>
						<td class="bbdq">
							<input class="bbqd" type="text" name="" id="" v-model="speciali" />
						</td>
						<td class="bbdq">
							<input class="bbqd" type="text" name="" id="" v-model="instructionsf" />
						</td>
					</tr>
				</table>
			</div>
			<div style="margin-top: 10px;">
				<el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
					<el-tab-pane label="产品配置" name="first">
						<div style="float: left;">
							<el-table :data="tableData" border style="">
								<el-table-column prop="suitename" label="部件名称" width="120">
								</el-table-column>
								<el-table-column prop="linear" label="型号">
								</el-table-column>
								<el-table-column prop="thenumberof" label="数量">
								</el-table-column>
								<el-table-column prop="high" label="高">
								</el-table-column>
								<el-table-column prop="wide" label="宽">
								</el-table-column>
								<el-table-column prop="model" label="成品">
								</el-table-column>
								<el-table-column prop="color" label="不配">
								</el-table-column>
								<el-table-column prop="style" label="工资">
								</el-table-column>
							</el-table>
						</div>
						<div style="float: right;">
							<table border="0" cellspacing="0" cellpadding="0" frame="box" rules="all" width="300" height="80" style="font-size: 14px;text-align: center; border-color: #dfe6ec;">
								<tr style="background: #eef1f6;">
									<th>参数名称</th>
									<th>参数值</th>
									<th>自动</th>
								</tr>
								<tr class="nssb">
									<td>小小</td>
									<td>大大</td>
									<td><input type="checkbox" name="" id="" value="" /></td>
								</tr>
							</table>
						</div>
						
					</el-tab-pane>
					<el-tab-pane label="加工说明" name="second">

					</el-tab-pane>
					<el-tab-pane label="价格计算" name="third">角色管理</el-tab-pane>
					<el-tab-pane label="文件列表">定时任务补偿</el-tab-pane>
					<el-tab-pane label="订单线条">角色管理</el-tab-pane>
					<el-tab-pane label="套件备注">定时任务补偿</el-tab-pane>
					<el-tab-pane label="拍照功能">角色管理</el-tab-pane>
					<el-tab-pane label="加价记录">定时任务补偿</el-tab-pane>
					<el-tab-pane label="基础价格">角色管理</el-tab-pane>
					<el-tab-pane label="收款分配">定时任务补偿</el-tab-pane>
					<el-tab-pane label="门型图片">角色管理</el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</div>

</template>
<script type="text/ecmascript-6">
	import Vue from 'vue';
	import 'element-ui/lib/theme-default/index.css';
	//	import cart from '@/components/table/cart';
	import Hello from '@/components/Hello';
	import axios from 'axios';
	const ERR_OK = 0;
	export default {
		data() {
			return {
				nishigou: 1,
				name: "0", //类目
				tel: "", //套件名称
				hobby: "", //款式
				phone: " ", //开向
				development: " ", //颜色
				cnumber: " ", //工艺
				salesman: " ", //单双丁
				Mnemonic: " ", //尺寸
				brand: "0", //高
				address: "0", //宽
				thick: "0", //门扇厚度
				thick1:"0",//墙体厚度
				group: "0", //数量
				packaging: " ", //线性
				company: " ", //备注
				price: " ", //加工说明
				highr: " ", //单价
				widthr: " ", //金额
				speciali: " ", //安装位置
				instructionsf: " ", //计算结果
				
				
				tableData5: [{
					suitename: "",
					linear: "",
					thenumberof: true
				}],
				activeName2: 'first',
				tabPosition: 'top',
				labelPosition: 'right',
				formLabelAlign: {
					name: 'rewttr', //订单编号
					region: '', //客户名称
					type: '', //电话
					nuber: '', //地址
					theord: "", //订单类别
					sales: "", //销售员
					amount: "", //订单金额
					settlement: "", //结算金额
					freight: "", //货运公司
					phone: "", //电话号码
					packaging: "", //包装方式
					username:"",//用户名称
					salesperson:"" //销售员
				},
				state2: '',
				value1: [new Date()],
				value2:[new Date()],
				value3: [new Date()],
				textarea: "",
				textarea1:"",
				pickerOptions1: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}]
				},

				tableData: [{
					suitename: "木门", //部件名称
					linear: "水", //型号
					thenumberof: "12元", //数量
					high: "李四", //高
					wide: "125", //宽
					thick: "张三", //厚
					model: "544", //成品
					color: "红", //不配
					style: "dfsv", //工资

				}],
			}

		},
		components: {
			//		"cart":cart;
			//		"hello":Hello
		},
		methods: {
	
			// 单元格编辑回调
			cellEditDone(newValue, oldValue, rowIndex, rowData, field) {

				this.tableData[rowIndex][field] = newValue;

				// 接下来处理你的业务逻辑，数据持久化等...
			},
			handleClick() {
				alert('nishigou');
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
			//输入后判断的
			loadAll() {
				return [{
					"value": "三全鲜食（北新泾店）",
					"address": "长宁区新渔路144号"
				}];
			},
			handleSelect(item) {
				console.log(item);
			},
			changeCount:function(){
//				alert(123)
				if(this.name !=0){
//					var b = [];
//					b = this.name;
//					b = b.concat(this.name);
//					console.log(b);
					this.nishigou = this.nishigou + 1;
					console.log(this.nishigou)
					
				}
			},
			add(){
				alert(258)
				{
				  window.print()
				}
				
			},
			guanbi:function(){
				alert(123)
				this.$router.push({
					path: '/cart'
				});
			}
		},
		mounted() {
			this.restaurants = this.loadAll();
			
			
//			var params = new URLSearchParams();
//			params.append("", );
//			params.append("",);
//			axios.post("", params).then(function(ret){
//				console.log(ret)
//				if(ret.data.code==200){
//						
//						
//				}else{
//					alert(ret.data);
//					
//				}
//			},function(err){
//				alert("失败");
//				
//			})

//		var tk=[];
//		var op=[];
//		for(var i=0;i<array.length;i++){
//			tk[i]=[];
//			var t1 = array[i];
//			for(var key in t1){
//				if(key == 'height')
//				{
//					if(t1[key] == 0 || t1[key] == null){
//						tk[i][0] = '高：'+height;
//					}else{
//						tk[i][0] = '高：'+eval( height + t1[key] );
//					}
//				}
//				if(key == 'width')
//				{
//					if(t1[key] == 0 || t1[key] == null){
//						tk[i][1] = '宽：'+width;
//					}else{
//						tk[i][1] = '宽：'+eval( width + t1[key] );
//					}
//				}
//				if(key == 'num')
//				{
//					if(t1[key] == 0 || t1[key] == null){
//						tk[i][2] = '数量：'+num;
//					}else{
//						tk[i][2] = '数量：'+eval(num +'*'+ t1[key] );
//					}
//				}
//				if(key == 'plys')
//				{
//					if(t1[key] == 0 || t1[key] == null){
//						tk[i][3] = '厚度：'+plys;
//					}else{
//						tk[i][3] = '厚度：'+eval( num + t1[key] );
//					}	
//				}
//				if(key == 'name')
//				{
//					op.push(t1[key]);
//				}
//			}
//		}
//		console.log(tk);
//		var html='';
//		for(var i=0;i<op.length;i++){
//			html += op[i]+tk[i][0]+' '+tk[i][1]+' '+tk[i][2]+' '+tk[i][3]+'<br>';
//		}

		}
	}
</script>
<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none !important;
		margin: 0;
	}
	
	.oder {
		width: 100%;
	}
	
	.commen {
		width: 100%;
		padding-left: 230px;
		padding-top: 80px;
	}
	
	.top {
		margin-top: 25px;
		clear: both;
	}
	.tops:hover{
		background: #000000;
	}
	.time {
		
	}
	
	.el-dropdown {
		vertical-align: top;
	}
	
	.el-dropdown+.el-dropdown {
		margin-left: 15px;
	}
	
	.el-icon-arrow-down {
		font-size: 12px;
	}
	
	.el-button--primary {
		color: #bfcbd9;
		margin-left: 70px;
		margin-top: 20px;
		width: 195px;
		border: 1px solid #bfcbd9;
		background-color: #FFFFFF;
	}
	
	.left {
		width: 19%;
		display: inline-block;
		float: left;
		margin-top: 50px;
	}
	
	.zhon {
		width: 19%;
		display: inline-block;
		float: left;
		margin-top: 50px;
	}
	
	.rights {
		width: 19%;
		display: inline-block;
		float: left;
		margin-top: 50px;
	}
	
	.ring {
		width: 19%;
		display: inline-block;
		float: left;
		margin-top: 50px;
	}
	
	.tiv {
		width: 19%;
		display: inline-block;
		float: left;
		margin-top: 50px;
	}
	
	.demonstration {
		
	}
	
	.nssb:hover {
		background: #eef1f6;
	}
	.shang {
		display: inline-block;
		line-height: 36px;
		font-size: 14px;
		padding: 0 10px;
		border: solid 1px #bfcbd9;
		background: #FFFFFF;
		border-radius: 7px;
		cursor: pointer;
	}
	.shang:hover{
		border: solid 1px #20a0ff;
	}
	.bbdq{
		position: relative;
	}
	.bbqd{
		width: 100%;
		height: 100%;
		text-align: center;
		position: absolute;
		top: 0;
		left: 0;
	}
	.tops:hover{
		background: #eef1f6;
	}
	.cnm{
		position: fixed;
		top: 70px;
		left: 230px;
		background: #FFFFFF;
		z-index: 300;
	}
	.yiyiyi{
		float: left;
		display: inline-block;
		width: 19%;
		
	}
</style>