import React,{useEffect,useState} from 'react'
import {getCommit} from '../../../api/apiFn'
import {formatTel} from '../../../utils/formatTel'
import LoadMore from '../../../components/LoadMore/LoadMore'
import "./Item.less"

export default function Item(props) {
    // const [commit,setCommit] = useState({})
    const [commit,setCommit] = useState([]);
    function getListFn(){
        getCommit({id:props.id})
        .then(data=>{
            // console.log(data)
            setCommit([...commit,...data.list])
        })
    }
    useEffect(()=>{
        getListFn()
    },[])
    return (
        <div>
            {commit.length>0 ? <>
                {commit.map((el,idx)=>{
                    return <div className='pl-item' key={idx}>
                        <div>
                            <i className='iconfont icon-wode'></i>
                            <span>{formatTel(el.tel)}</span>
                        </div>
                        <div>
                            {[1,1,1,1,1].map((ele,index)=>(
                                // 判断哪个星星应该变红 index<commit.star
                                <i key={index} style={{color: index<el.star? '#ff5555' :'#000000'}} className='iconfont icon-xingxing'></i>
                            ))}
                        </div>
                        <div>
                            {el.content}
                        </div>
                    </div>
                })}
           </>:<div>数据正在请求中...</div>}

           <LoadMore getListFn={getListFn} />
        </div>
    )
}
