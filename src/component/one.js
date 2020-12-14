import React from 'react'

// 函数定义 1.没有state  2.没有生命周期
// 接收父组件传递过来的值用props接收
export default function one(props) {
    return (
        <div>
            <div> kk{props.akm}</div>
        </div>
    )
}
