<template>
	<div class="con">
		<el-button class="but" @click="add">添加订单</el-button>
		<el-button class="but" @click="active">编辑订单</el-button>
		<el-button class="but">删除订单</el-button>
		<el-button class="dddc" @click="jjsmd">
			打印
			<div class="cccd" v-show="fcc">
				<ul>
					<li class="lis" @click="jjsmd1">条形码</li>
					<li class="lis" @click="jjsmd2">二维码</li>
					<li class="lis" @click="jjsmd3">三维码</li>
					<li class="lis" @click="jjsmd4">四维码</li>
				</ul>
			</div>
		</el-button>
		<el-button class="but">筛选</el-button>
		<el-button class="but">按套查询</el-button>
		<el-button class="but">其他操作</el-button>
		<div style="float: left;margin-top: 9px; margin-left: 20px;">
			<el-col :span="20">
				<el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
			</el-col>
		</div>
		<div class="block">
			<el-date-picker class="blocks" v-model="value4" type="datetimerange" placeholder="请选择时间" :picker-options="pickerOptions2" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" align="right">
			</el-date-picker>
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
				value4: '',
				fcc:false
			};
		},
		methods: {
			jjsmd1:function(){
				 {
				  window.print()
				  }
			},
			jjsmd2:function(){
				alert("2")
			},
			jjsmd3:function(){
				alert("3")
			},
			jjsmd4:function(){
				alert("4")
			},
			jjsmd:function(){
				this.fcc = !this.fcc
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

			pickerOptions2: {
				shortcuts: [{
					text: '最近一周',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
						picker.$emit('pick', [start, end]);
					}
				}, {
					text: '最近一个月',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
						picker.$emit('pick', [start, end]);
					}
				}, {
					text: '最近三个月',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
						picker.$emit('pick', [start, end]);
					}
				}]
			},
			loadAll() {
				return [{
						"value": "三全鲜食（北新泾店）",
						"address": "长宁区新渔路144号"
					},
					{
						"value": "Hot honey 首尔炸鸡（仙霞路）",
						"address": "上海市长宁区淞虹路661号"
					},
					{
						"value": "新旺角茶餐厅",
						"address": "上海市普陀区真北路988号创邑金沙谷6号楼113"
					},
					{
						"value": "泷千家(天山西路店)",
						"address": "天山西路438号"
					},
					{
						"value": "胖仙女纸杯蛋糕（上海凌空店）",
						"address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
					},
					{
						"value": "贡茶",
						"address": "上海市长宁区金钟路633号"
					},
					{
						"value": "豪大大香鸡排超级奶爸",
						"address": "上海市嘉定区曹安公路曹安路1685号"
					},
					{
						"value": "茶芝兰（奶茶，手抓饼）",
						"address": "上海市普陀区同普路1435号"
					},
					{
						"value": "十二泷町",
						"address": "上海市北翟路1444弄81号B幢-107"
					},
					{
						"value": "星移浓缩咖啡",
						"address": "上海市嘉定区新郁路817号"
					},
					{
						"value": "阿姨奶茶/豪大大",
						"address": "嘉定区曹安路1611号"
					},
					{
						"value": "新麦甜四季甜品炸鸡",
						"address": "嘉定区曹安公路2383弄55号"
					},
					{
						"value": "Monica摩托主题咖啡店",
						"address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
					},
					{
						"value": "浮生若茶（凌空soho店）",
						"address": "上海长宁区金钟路968号9号楼地下一层"
					},
					{
						"value": "NONO JUICE  鲜榨果汁",
						"address": "上海市长宁区天山西路119号"
					},
					{
						"value": "CoCo都可(北新泾店）",
						"address": "上海市长宁区仙霞西路"
					},
					{
						"value": "快乐柠檬（神州智慧店）",
						"address": "上海市长宁区天山西路567号1层R117号店铺"
					},
					{
						"value": "Merci Paul cafe",
						"address": "上海市普陀区光复西路丹巴路28弄6号楼819"
					},
					{
						"value": "猫山王（西郊百联店）",
						"address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
					},
					{
						"value": "枪会山",
						"address": "上海市普陀区棕榈路"
					},
					{
						"value": "纵食",
						"address": "元丰天山花园(东门) 双流路267号"
					},
					{
						"value": "钱记",
						"address": "上海市长宁区天山西路"
					},
					{
						"value": "壹杯加",
						"address": "上海市长宁区通协路"
					},
					{
						"value": "唦哇嘀咖",
						"address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
					},
					{
						"value": "爱茜茜里(西郊百联)",
						"address": "长宁区仙霞西路88号1305室"
					},
					{
						"value": "爱茜茜里(近铁广场)",
						"address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
					},
					{
						"value": "鲜果榨汁（金沙江路和美广店）",
						"address": "普陀区金沙江路2239号金沙和美广场B1-10-6"
					},
					{
						"value": "开心丽果（缤谷店）",
						"address": "上海市长宁区威宁路天山路341号"
					},
					{
						"value": "超级鸡车（丰庄路店）",
						"address": "上海市嘉定区丰庄路240号"
					},
					{
						"value": "妙生活果园（北新泾店）",
						"address": "长宁区新渔路144号"
					},
					{
						"value": "香宜度麻辣香锅",
						"address": "长宁区淞虹路148号"
					},
					{
						"value": "凡仔汉堡（老真北路店）",
						"address": "上海市普陀区老真北路160号"
					},
					{
						"value": "港式小铺",
						"address": "上海市长宁区金钟路968号15楼15-105室"
					},
					{
						"value": "蜀香源麻辣香锅（剑河路店）",
						"address": "剑河路443-1"
					},
					{
						"value": "北京饺子馆",
						"address": "长宁区北新泾街道天山西路490-1号"
					},
					{
						"value": "饭典*新简餐（凌空SOHO店）",
						"address": "上海市长宁区金钟路968号9号楼地下一层9-83室"
					},
					{
						"value": "焦耳·川式快餐（金钟路店）",
						"address": "上海市金钟路633号地下一层甲部"
					},
					{
						"value": "动力鸡车",
						"address": "长宁区仙霞西路299弄3号101B"
					},
					{
						"value": "浏阳蒸菜",
						"address": "天山西路430号"
					},
					{
						"value": "四海游龙（天山西路店）",
						"address": "上海市长宁区天山西路"
					},
					{
						"value": "樱花食堂（凌空店）",
						"address": "上海市长宁区金钟路968号15楼15-105室"
					},
					{
						"value": "壹分米客家传统调制米粉(天山店)",
						"address": "天山西路428号"
					},
					{
						"value": "福荣祥烧腊（平溪路店）",
						"address": "上海市长宁区协和路福泉路255弄57-73号"
					},
					{
						"value": "速记黄焖鸡米饭",
						"address": "上海市长宁区北新泾街道金钟路180号1层01号摊位"
					},
					{
						"value": "红辣椒麻辣烫",
						"address": "上海市长宁区天山西路492号"
					},
					{
						"value": "(小杨生煎)西郊百联餐厅",
						"address": "长宁区仙霞西路88号百联2楼"
					},
					{
						"value": "阳阳麻辣烫",
						"address": "天山西路389号"
					},
					{
						"value": "南拳妈妈龙虾盖浇饭",
						"address": "普陀区金沙江路1699号鑫乐惠美食广场A13"
					}
				];
			},
			handleSelect(item) {
				console.log(item);
			},
			add() {
				//				this.isshow ==!this.isshow
				this.$router.push({
					path: '/add'
				});
				alert(1)
			},
			active(){
				this.$router.push({
					path: '/add'
				});
			},
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},

		},
		mounted() {
			this.restaurants = this.loadAll();
		}
	}
</script>
	<style lang="less" scoped>
	.el-date-editor--datetimerange.el-input {
		width: 337px;
		margin-top: 10px;
		margin-left: 8px;
	}
	
	.con {
		display: inline-block;
		width: 77%;
		height: 100%;
	}
	
	.blocks {
		width: 200px;
		float: left;
	}
	
	.but {
		width: 88px;
		height: 35px;
		float: left;
		font-size: 14px;
		margin-left: 8px;
		margin-top: 10px;
		text-align: center;
		overflow: hidden;
	}
	.dddc{
		width: 88px;
		height: 35px;
		float: left;
		font-size: 14px;
		margin-left: 8px;
		margin-top: 10px;
		text-align: center;
		position: relative;
	}
	.cccd{
		position: absolute;
		top:32px;
		left: 0;
		width: 100%;
		border:solid 1px darkgrey;
		background: #FFFFFF;
		color: #000000;
		z-index: 100;
	}
	.lis{
		line-height: 30px;
		font-size: 16px;
		border-bottom: solid 1px darkgrey;
		z-index: 100;
	}
	
</style>