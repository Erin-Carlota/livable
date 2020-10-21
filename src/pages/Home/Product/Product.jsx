import React from 'react';
import './Product.less'

export default function Product(props) {
    return (
        <div className='product'>
            <h2>{props.title}</h2>
            <div className='product-list'>
                <ul>
                    {props.list.map((ele,index)=>{
                        return <li key={index}>
                            <img src={ele.img} alt=""/>
                            <p>{ele.title}</p>
                        </li>
                    })}
                </ul>    
            </div>
        </div>
    )
}
