import React from 'react'
import { NavLink } from 'react-router-dom'
import './MyNav.less'

export default function MyNav() {
    return (
        <div className='nav-box'>
            <div className="item">
                <NavLink to='/' exact={true}>
                    <i className="iconfont icon-index"></i>
                    <span>首页</span>
                </NavLink>
            </div>
            <div className="item">
                <NavLink to='/market'>
                    <i className="iconfont icon-shangcheng"></i>
                    <span>商城</span>
                </NavLink>
            </div>
            <div className="item">
                <NavLink to='/lifeSevice'>
                    <i className="iconfont icon-jiangbei"></i>
                    <span>生活服务</span>
                </NavLink>
            </div>
            <div className="item">
                <NavLink to='/mine'>
                    <i className="iconfont icon-wode1"></i>
                    <span>我的</span>
                </NavLink>
            </div>
        </div>
    )
}
