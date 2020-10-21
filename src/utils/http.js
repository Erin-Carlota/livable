import qs from 'querystring'
export default function fetchPost(url,data){
    if(data){
        if(typeof data === 'object'){
            data = qs.stringify(data)
        }
    }

    return fetch(url,{
        method:'POST',
        body:data,
        headers:{
            "Content-Type":'application/x-www-form-urlencoded'
        }
    })
    .then(data=>data.json())
}