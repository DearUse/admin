<template>
	<div>
		<hello class="asd"></hello>
		<div class="tops">
			<v-table is-horizontal-resize style="width:100%" :columns="columns" :table-data="tableData" row-hover-color="#eee" row-click-color="#edf7ff" :cell-edit-done="cellEditDone"></v-table>
		</div>

	</div>
</template>

<style>
	.cell-edit-color {
		color: #2db7f5;
		font-weight: bold;
	}
	
	.tops {
		margin-top: 95px;
		margin-left: 258px;
		padding-right: 36px;
	}
</style>

<script>
	import Vue from 'vue';
	import 'element-ui/lib/theme-default/index.css';
	//	import cart from '@/components/table/cart';
	import Hello from '@/components/Hello';
	const ERR_OK = 0;
	export default {
		data() {
			return {
				activeName2: 'first',
				tableData3: [
					{
						suitename: "木门", //套件名
						linear: "水", //线型
						model: "544", //套型
						color: "红", //颜色
						style: "dfsv", //款式
						wide: "125", //宽
						high: "李四", //高
						thick: "张三", //厚
						thenumberof: "12元", //数量
						unitprice: "元", //单价
						theamount: "152", //金额
						processing: "ver", //加工
						note: "fasf", //备注
						material: "铁", //材质
						valuation: "gfvbs" //计价
					}],
				tableData: [{
						"name": "赵伟", //客户名称
						"tel": "156*****1987", //客户电话
						"phone": "", //客户手机
						"development": "", //发展日期
						"cnumber": "", //客户编号
						"salesman": "", //销售员
						"Mnemonic": "", //助记码
						"brand": "", //品牌
						"address": "", //地址
						"special": "", //特殊客户
						"group": "", //组别
						"packaging": "", //包装
						"company": "", //物流公司
						"price": "", //协议价
						"highr": "", //高减
						"widthr": "", //宽减
						"speciali": "", //特殊说明
						"instructionsf": "" //长期说明

					}

				],
				columns: [{
						field: 'name',
						title: '客户名称',
						width: 100,
						titleAlign: 'center',
						columnAlign: 'center',
						isEdit: true,
						formatter: function(rowData, rowIndex, pagingIndex, field) {

							return `<span class='cell-edit-color'>${rowData[field]}</span>`;
						},
						isResize: true
					},
					{
						field: 'tel',
						title: '客户名称',
						width: 150,
						titleAlign: 'center',
						columnAlign: 'center',
						isEdit: true,
						isResize: true
					},
					{
						field: 'hobby',
						title: '客户电话',
						width: 150,
						titleAlign: 'center',
						columnAlign: 'center',
						isEdit: true,
						isResize: true
					},
					{
						field: 'phone',
						title: '客户手机',
						width: 280,
						titleAlign: 'center',
						columnAlign: 'left',
						isEdit: true,
						isResize: true
					},
					{
						field: 'development',
						title: '发展日期',
						width: 280,
						titleAlign: 'center',
						columnAlign: 'left',
						isEdit: true,
						isResize: true
					},

					{
						field: 'cnumber',
						title: '客户编号',
						width: 150,
						titleAlign: 'center',
						columnAlign: 'center',
						isEdit: true,
						isResize: true
					},
					{
						field: 'salesman',
						title: '销售员',
						width: 150,
						titleAlign: 'center',
						columnAlign: 'center',
						isEdit: true,
						isResize: true
					},
					{
						field: 'Mnemonic',
						title: '助记码',
						width: 280,
						titleAlign: 'center',
						columnAlign: 'left',
						isEdit: true,
						isResize: true
					},
					{
						field: 'brand',
						title: '品牌',
						width: 280,
						titleAlign: 'center',
						columnAlign: 'left',
						isEdit: true,
						isResize: true
					},
					{
						field: 'address',
						title: '地址',
						width: 150,
						titleAlign: 'center',
						columnAlign: 'center',
						isEdit: true,
						isResize: true
					},
					{
						field: 'special',
						title: '特殊客户',
						width: 150,
						titleAlign: 'center',
						columnAlign: 'center',
						isEdit: true,
						isResize: true
					},
					{
						field: 'group',
						title: '组别',
						width: 280,
						titleAlign: 'center',
						columnAlign: 'left',
						isEdit: true,
						isResize: true
					},
					{
						field: 'packaging',
						title: '包装',
						width: 280,
						titleAlign: 'center',
						columnAlign: 'left',
						isEdit: true,
						isResize: true
					},
					{
						field: 'company',
						title: '物流公司',
						width: 280,
						titleAlign: 'center',
						columnAlign: 'left',
						isEdit: true,
						isResize: true
					},
					{
						field: 'price',
						title: '协议价',
						width: 280,
						titleAlign: 'center',
						columnAlign: 'left',
						isEdit: true,
						isResize: true
					},
					{
						field: 'highr',
						title: '高减',
						width: 150,
						titleAlign: 'center',
						columnAlign: 'center',
						isEdit: true,
						isResize: true
					},
					{
						field: 'widthr',
						title: '宽减',
						width: 150,
						titleAlign: 'center',
						columnAlign: 'center',
						isEdit: true,
						isResize: true
					},
					{
						field: 'speciali',
						title: '特殊说明',
						width: 280,
						titleAlign: 'center',
						columnAlign: 'left',
						isEdit: true,
						isResize: true
					},
					{
						field: 'instructionsf',
						title: '长期说明',
						width: 280,
						titleAlign: 'center',
						columnAlign: 'left',
						isEdit: true,
						isResize: true
					}
				],

			}
		},
		components: {
			"hello": Hello
		},
		methods: {

			// 单元格编辑回调
			cellEditDone(newValue, oldValue, rowIndex, rowData, field) {

				this.tableData[rowIndex][field] = newValue;

				// 接下来处理你的业务逻辑，数据持久化等...
			},
			
			handleClick(tab, event) {
				console.log(tab, event);
			}
		}
	}
</script>