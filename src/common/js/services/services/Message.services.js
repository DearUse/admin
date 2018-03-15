import {apiUrl} from '../common/public.config.js';//接口地址
import {$$ajax} from '../common/common.service';  //公共Axios

/* 
*接口地址
*/
const apiUrlObj = {
//ContentArticleView : `${apiUrl}Mudoor/Muapi/Basicall/serial_add`,
//show: `${apiUrl}Mudoor/Muapi/Basicall/serial_show`,
//edit: `${apiUrl}Mudoor/Muapi/Basicall/serial_edit`,
//del: `${apiUrl}Mudoor/Muapi/Basicall/serial_del`,
ContentArticleView : `${apiUrl}Muapi/Basicall/serial_add`,
show: `${apiUrl}Muapi/Basicall/serial_show`,
//show:`http://mumen.myhjq.com/index.php/Muapi/Basicall/serial_show`,
  edit: `${apiUrl}Muapi/Basicall/serial_edit`,
  del: `${apiUrl}Muapi/Basicall/serial_del`,
};

let Message = {
    ContentArticleView : (e,data,successCallback)=>{
    $$ajax(e,apiUrlObj.ContentArticleView,data,function (data) {
      successCallback(data);
    });
  },
  show : (e,data,successCallback)=>{
    $$ajax(e,apiUrlObj.show,data,function (data) {
      successCallback(data);
    });
  }, 
   edit : (e,data,successCallback)=>{
    $$ajax(e,apiUrlObj.edit,data,function (data) {
      successCallback(data);
    });
  },
  del : (e,data,successCallback)=>{
    $$ajax(e,apiUrlObj.del,data,function (data) {
      successCallback(data);
    });
  },
}

export {Message}