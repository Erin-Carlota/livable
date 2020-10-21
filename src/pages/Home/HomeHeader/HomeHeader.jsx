import React from 'react'
import {Link} from 'react-router-dom'
import './HomeHeader.less'
import Search from '../../../components/Search/Search'

export default function HomeHeader(props) {
    return (
        <div className='home-header'>
            <div className='city'>
                <Link to='/city'>
                    <span>{props.city}</span>
                    <i className='iconfont icon-xialajiantou'></i>
                </Link>
            </div>
            <div className='search'>
                {/* type='
                    round  border-radius:4px 
                    cricle border-radius:19px */}
                <Search type='round' />
            </div>
            <div className='car'>
                <Link to='/shopCar'>
                    <i className='iconfont icon-gouwucheman'></i>
                </Link>
            </div>
        </div>
    )
}
