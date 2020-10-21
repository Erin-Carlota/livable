import React from 'react'
import './Item.less'
import {Link} from 'react-router-dom'
export default function Item(props) {
    return (
        <div className='item'>
            {/* 添加Link，实现跳转功能 */}
            <Link to={'/details/'+props.data.id}>
            <div className='pic'>
                <img src={props.data.img} alt=""/>
            </div>
            <div className='content'>
                <div className='row'>
                    <div className='content-qian'>
                        {props.data.title}
                    </div>
                    <div className='content-hou'>
                        {props.data.rtype}
                    </div>
                </div>
                <div className='row'>
                    <div className='content-qian'>
                        {props.data.floor} | {props.data.size} | {props.data.area}
                    </div>
                    <div className='content-hou'>
                        {props.data.price}/月
                    </div>
                </div>
            </div>
            </Link>
        </div>
    )
}
