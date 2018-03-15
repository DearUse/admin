import {apiUrl} from '../common/public.config.js';//接口地址
import {$$ajax} from '../common/common.service';  //公共Axios

/*
 *接口地址
 */
const apiUrlObj = {
  Login : `${apiUrl}Muapi/Login/index `,
};

let Message = {
  Login : (e,data,successCallback)=>{
    $$ajax(e,apiUrlObj.Login,data,function (data) {
      successCallback(data);
    });
  },
}

export {Message}
