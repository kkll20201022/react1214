import React, { Component } from 'react'

export default class shop extends Component {
    constructor(){
        super()
        this.state = {
            num:1,
            arr: [
                {
                    id: 1,
                    name: '苹果',
                    price: 2,
                    num: 1
                },
                {
                    id: 2,
                    name: '香蕉',
                    price: 3,
                    num: 1
                },
                {
                    id: 3,
                    name: '橘子',
                    price: 4,
                    num: 1
                }
            ]
        
        }
    }

 // 增加
 add(index){
    // 取值 对象解构
    let {arr} = this.state
    //修改值
    arr[index].num++;

    this.setState({
        arr
    })
}
// 减少
cut(index){
    let {arr} = this.state
    if(arr[index].num<=0){
        arr[index].num=0
    }else{
        arr[index].num--
    }
   
    this.setState({
        arr:arr
    })
}

    render() {
        return (
            <div>
                  <table border='1' width='500'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>名称</th>
                        <th>价格</th>
                        <th>操作</th>
                        <th>总价</th>
                    </tr>
                    </thead>
                    {/* <tr>
                        <td>1</td>
                        <td>苹果</td>
                        <td>100</td>
                        <td><button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </td>
                        <td>
                            100
                        </td>
                    </tr> */}
                    <tbody>
                    {
                        this.state.arr.map((item,index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td><button onClick={()=>this.cut(index)}>-</button>
                                        <span>{item.num}</span>
                                        <button onClick={()=>this.add(index)}>+</button>
                                    </td>
                                    <td>
                                       {item.num*item.price}
                                     </td>
                                </tr>
                            )
                        })
                    }
                     </tbody>
                </table>
            </div>
        )
    }
}
