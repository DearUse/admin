import {apiUrl} from '../common/public.config.js';//接口地址
import {$$ajax} from '../common/common.service';  //公共Axios

/*
 *接口地址
 */
const apiUrlObj = {
  //查询客户人员
  queryList : `${apiUrl}/Muapi/Order/user_show`,
  //添加客户人员
  AddPeole : `${apiUrl}/Muapi/Order/user_add`,
};

let Message = {
  queryList : (e,data,successCallback)=>{
    $$ajax(e,apiUrlObj.queryList,data,function (data) {
      successCallback(data);
    });
  },
  AddPeole : (e,data,successCallback)=>{
    $$ajax(e,apiUrlObj.AddPeole,data,function (data) {
      successCallback(data);
    });
  },
}

export {Message}
