import React,{useEffect,useState} from 'react'
import Search from '../../components/Search/Search'
import './List.less'
import {getList} from '../../api/apiFn'
import {connect} from 'react-redux'
import Item from './Item/Item'
import LoadMore from '../../components/LoadMore/LoadMore'

function List(props) {
    // console.log(props.match.params.keyword)
    let [page,setPage] = useState(0);
    let [list,setList] = useState([]);
    let goBack = ()=>{
        props.history.goBack();
    }

    let getListFn =()=>{
        // console.log(page)
        getList(page,props.city,props.match.params.keyword)
        .then(data=>{
            // console.log(data)
            // 把数据存储到list变量时需要把老数据和新数据拼起来
            setList([...list,...data.list])
            // 把页码值+1
            setPage(page => page + 1);
        })
    }

    useEffect(()=>{
        // 让page恢复到0
        page = 0;
        // 把list设置为空
        list =[];
        // 需要3个参数：page,city,keyword
        getListFn()
        // 当搜索关键字发生改变时，需要请求新数据
    },[props.match.params.keyword])
    return (
        <div>
            <button onClick={()=>{console.log(page)}}>获取当前页码</button>
            {/* 头部 */}
            <div className='list-header'>
                <i 
                    className='iconfont icon-fanhui fh'
                    onClick={goBack}
                ></i>
                <div className='list-search-box'>
                    <Search type='cricle' />
                </div>
            </div>
            <div className='list-body'>
                {/* 显示列表内容 */}
                {list.map(ele=>{
                    return <Item data={ele} key={ele.id} />
                })}
            </div>
            {/* 放一个元素，当看到这个元素时，说明页面到底最底部 */}
            {/* 让用户决定，LoadMore触发时要干什么事 */}
            <LoadMore getListFn={getListFn} />
        </div>
    )
}

export default connect((state)=>({
    city:state.city
}))(List)