import React,{useEffect,useState} from 'react'
import {getHotCity} from '../../../api/apiFn'
import './HotCity.less'

export default function HotCity(props) {
    const [list,setList] = useState([]);
    useEffect(()=>{
        getHotCity().then(data=>{setList(data.list)})
    },[])
    let clickme=(e)=>{
        console.log(e.currentTarget.innerHTML)
        // 把选中的城市存储到redux中
        props.setcity(e.currentTarget.innerHTML)
        // 返回上一层路径
        props.history.goBack();
    }
    return (
        <div className='hotcity'>
            <p>热门城市</p>
            <ul>
                {list.map((ele,index)=>{
                    return <li 
                        key={index} 
                        className='item'
                        onClick={clickme}
                    >{ele}</li>
                })}
            </ul>
        </div>
    )
}
