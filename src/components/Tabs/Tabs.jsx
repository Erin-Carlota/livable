import React,{useState} from 'react'
import './Tabs.less'

export default function Tabs(props) {
    const [cur,setCur] = useState(1);
    function selTab(index){
        // console.log(e.currentTarget.getAttribute('idx'))
        // console.log(index)
        setCur(index)
    }
    return (
        <div className='mytabs'>
            <div className='tab-title'>
                {/* 渲染tab项 */}
                {props.children.map((ele,index)=>{
                    // console.log(ele)
                    return <div 
                        key={index}
                        idx={index}
                        onClick={selTab.bind(null,index)}
                        className={ cur===index ?'active base':'base'}
                    >{ele.props.tab}</div>
                })}
            </div>
            <div className='tab-content'>
                {props.children.map((ele,index)=>{
                    return <div 
                        className={cur === index ? 'show':'hide'}
                    key={index}>{ele.props.children}</div>
                })}
            </div>
        </div>
    )
}
