import React,{useEffect,useState} from 'react'
import Header from '../../components/Header/Header'
import {connect } from 'react-redux'
import {getComment} from '../../api/apiFn'
import Item from './Item/Item';

function ShopCar(props) {
    let [list,setList] = useState([]);
    let [page,setPage] = useState(0)
    function getlist(page){
        getComment({
            userid:props.user,
            page
        })
        .then(data=>{
            console.log(data)
            setList([...list,...data.list]);
            setPage(page + 1)
        })
    }
    useEffect(()=>{
        // 初始化
        list = [];
        page = 0;
        // 请求第一次数据
        getlist(page)
    },[])

    function changeCommentState(index,count){
        // console.log(index,count)
        list[index].commentState = count;
        // 触发组件更新
        setList([...list])
    }
    return (
        <div>
            {/* 头部 */}
            <Header title='购物车' />
            <div>
                <p>用户名：{props.user}</p>
                <p>城市：{props.city}</p>
            </div>
            <div>
                {list.map((ele,index)=>{
                    return <Item 
                        changeCommentState={changeCommentState}  
                        key={index} 
                        ele={ele} 
                        index={index}  //数据在数组中的下标
                    />
                })}
            </div>
        </div>
    )
}

export default connect((state)=>({
    user:state.user,
    city:state.city
}))(ShopCar)
