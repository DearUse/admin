  import login from '../components/login';
  import echarts from '../components/echarts/echarts';
  import table from '../components/food/table';
  import good from '../components/food/good';
  import cart from '../components/table/cart';
  import order from '../components/table/order';
  import production from '../components/table/production';
  import noproduction from '../components/table/noproduction';
  import notput from '../components/table/notput';
  import hasbeen from '../components/table/hasbeen';
  import forcollection from '../components/table/forcollection';
 	import order5  from '../components/table/order5';
	import order6 from '../components/table/order6';
	import order7 from '../components/table/order7';
	import top from '../components/table/top';
	import yue from '../components/table/yue';
  import seller from '../components/table/seller';
  import home from '../components/home';
  import Hello from '../components/Hello';
	import add from '../components/add';
	import index from '../components/index';
  import opinion from '../components/echarts/opinion';
  import product from '../components/product/product';
  import baseform from '../components/baseform/baseform';
  import bank from '../components/bank/bank';
  import steps from '../components/steps/steps';
  import steps1 from '../components/steps/steps1';
  import steps2 from '../components/steps/steps2';
  import salesperson from '../components/steps/salesperson';
  import upload from '../components/upload/upload'
  import mony from '../components/mony/mony'
  const routes = [
    {
      path: '/',
      redirect: '/login',
      name: '',
      hidden: true
    }
 , {
      path: '/index',
      component: index,
      name: '',
      hidden: true
    },
    {
      path: '/add',
      component: add,
      name: '',
      hidden: true
    },
    {
      path: '/login',
      component: login,
      name: '',
      hidden: true
    },
    {
      path: '/home',
      component: home,
      name: '',
      hidden: true
    },
    {
      path: '/Hello',
      component: Hello,
      name: '',
      hidden: true
    },
     {
      path: '/mony',
      component: mony,
      name: '',
      hidden: true
    },
    {
        path: '/',
        component: Hello,
        name: '首页',
        iconCls: 'el-icon-star-on',
        children: [
            { path: '/echarts', name: '柱状图', component: echarts },
            { path: '/opinion', name: '子父组件通信', component: opinion }
        ]
    },
    {
      path: '/',
      component: Hello,
      name: '订单管理',
      iconCls: 'el-icon-warning',
      children: [
          { path: '/cart', component: cart, name: '今日订单' },
          { path: '/seller', component: seller, name: '所有订单'},
          { path: '/order', component: order, name: '每月订单' },
          { path: '/noproduction', component: noproduction, name: '未排产' },
          { path: '/production', component: production, name: '已排产' },
          { path: '/notput.', component: notput, name: '未入库' },
          { path: '/hasbeen', component: hasbeen, name: '已入库' },
          { path: '/forcollection', component: forcollection, name: '未收款' },
          { path: '/order5', component: order5, name: '已收款' },
		      { path: '/order6', component: order6, name: '未发货' },
		      { path: '/order7', component: order7, name: '已发货' },
      ]
    },
    {
      path: '/',
      component: Hello,
      name: '客户管理',
      iconCls: 'el-icon-message',
      children: [
          { path: '/table', component: table, name: '客户列表' },
          { path: '/good', component: good, name: '数据' }
      ]
    },
		
    {
      path: '/',
      component: Hello,
      name: '基础资料',
      iconCls: 'el-icon-document',
      children: [
          { path: '/product', component: product, name: '产品资料' },
          { path: '/baseform', component: baseform, name: '计算公式' },
          { path: '/bank', component: bank, name: '银行账户' }
      ]
    },
		
	 {
      path: '/',
      component: Hello,
      name: '系统设置',
      iconCls: 'el-icon-edit',
      children: [
          { path: 'steps', component: steps, name: '权限设置' },
          { path: 'steps1', component: steps1, name: '职员管理' },
          { path: 'salesperson', component: salesperson, name: '销售员'}
      ]
    },

  ];
  export default routes;