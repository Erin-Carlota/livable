import React from 'react'
import './Pagination.less'

export default function Pagination(props) {
    let changeIndex2 = (index)=>{
        // 调用父级传来的函数
        props.changeIndex(index)
    }
    return (
        <div className='pagination'>
            {/* 把数字3 转成 [1,1,1] */}
            {new Array(props.len).fill(1).map((ele,index)=>(<div 
            className={props.index === index ? 'cricle active' : 'cricle'} 
            key={index}
            onClick={()=>changeIndex2(index)}
            ></div> ))}
        </div>
    )
}
