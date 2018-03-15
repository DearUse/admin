// ajax公用部分
let $$ajax = (obj, url, data, callback, resType) => {
    // 如果是登录接口就添加 content-type

    let isToken = false;
    var params = new URLSearchParams();
    for (var i in data) {
        params.append(i, data[i])
        if (i == "token") {
            isToken = true
        }
    }
    obj.$ajax({
        method: resType ? `${resType}` : 'post',
        url: url,
        data: params
    }).then(res => {
      callback(res);
    }).then(req => {
      callback(req);
    }).catch(error => {
      callback(error);
    })
};

export {$$ajax}
