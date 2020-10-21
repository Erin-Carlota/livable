import React,{useState} from 'react'
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils'
import './Swiper.less'
import Pagination from './Pagination'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Swiper(props) {
    // index决定轮播图展示哪一张
    const [index,setIndex] = useState(0);
    // changeIndex可以修改index的值
    let changeIndex = (curIndex)=>{
        setIndex(curIndex)
    }
    return (
        <div className='swiper-wrapper'>
            <AutoPlaySwipeableViews
                index={index}
                onChangeIndex={changeIndex}
            >
                {props.banners.map((ele,index)=>(<div className='swiper-item' key={index}>
                    <img src={ele} alt=""/>
                </div>))}
            </AutoPlaySwipeableViews>
            {/* 分页器 */}
            <Pagination changeIndex={changeIndex} index={index} len={props.banners.length} />
        </div>  
    )
}
