class tableListItem {
    // constructor(props) {
    //     this.props = ''
    // }

    // 改成了传入
    // id = '';
    // name = '';
    // status = '';
    // description = '';
    // createUser = '';
    // createTime = '';
    // updateUser = '';
    // updateTime = '';

    //格式化时间
    formateDate(timestamp) {
        let date;
        if (timestamp == undefined) {
            return 'undefined'
        } else if (timestamp.length == 13) {
            date = new Date(parseInt(timestamp))
        } else if (timestamp.length == 10) {
            date = new Date(timestamp * 1000)
        } else {
            return false
        }
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
    }
}

const gettableList = function (resfield = [], resList = []) { //传入显示字段和数据
    let list = []; //处理完后返回的值
    for (let item of resList) {
        let responseItem = new tableListItem();
        for(let i in resfield) {
            let str = resfield[i].label
            responseItem[str] = ''
        }
        for (let key in responseItem) {
            responseItem[key] = item[key] || responseItem[key];
            if(typeof(responseItem[key]) == 'object') { //判断二级调用name
            responseItem[key] = responseItem[key].name
            }
            if (key === 'createTime' || key === 'updateTime') {
                responseItem[key] = responseItem.formateDate(responseItem[key].toString())
            }
        }
        list.push(responseItem)
    }
    return list;
}

export {
    gettableList
}


