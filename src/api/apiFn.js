import {base,newproduct,hotlist,hotcity,list,detail,commit,comment} from './index'
import qs from 'querystring'

// 请求新品数据的
export function getNewProduct(params){
    return fetch(base+newproduct + '?' + qs.stringify(params))
    .then(data=>data.json())
}

export function getHotProduct(params){
    return fetch(base+hotlist + '?' + qs.stringify(params))
    .then(data=>data.json())
}

export function getHotCity(){
    return fetch(base+hotcity)
    .then(data=>data.json())
}

// 列表页数据
export function getList(page,city,keyword){
    return fetch(base+list+'/'+page+'/'+city+'/'+keyword)
    .then(data=>data.json())
}

// 详情页数据
export function getDetail(params){
    return fetch(base+detail+'?'+qs.stringify(params))
    .then(data=>data.json())
}


// 评论接口
export function getCommit(params){
    return fetch(base + commit+'?'+qs.stringify(params))
    .then(data=>data.json())
}


// 购物车
export function getComment(params){
    return fetch(base+comment + '?' + qs.stringify(params))
    .then(data=>data.json())
}