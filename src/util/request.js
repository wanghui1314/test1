
import axios from 'axios'
import qs from 'qs'

const baseUrl = '/api'

// 响应拦截器
axios.interceptors.response.use(res=>{
    console.log(res);
    return res
})


// 菜单添加
export const reqMunuAdd=(form)=>{
    return  axios({
        url:baseUrl+'/api/menuadd',
        method:'post',
        data:qs.stringify(form)
    })
}
// 菜单列表
export const reqMenuList=(params)=>{
    return  axios({
        url:baseUrl+'/api/menulist',
        method:'get',
        params:params
    })
}

// 菜单删除
export const reqMenuDel=(id)=>{
    return  axios({
        url:baseUrl+'/api/menudelete',
        method:'post',
        data:id
    })
}

// 菜单获取一条数据
export const reqMenuOne=(params)=>{
    return  axios({
        url:baseUrl+'/api/menuinfo',
        method:'get',
        params:params
    })
}



// 菜单修改
export const reqMenuEdit=(form)=>{
    return  axios({
        url:baseUrl+'/api/menuedit',
        method:'post',
        data:form
    })
}