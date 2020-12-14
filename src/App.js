import './App.css'
import Varr from './component/varr'
import Kkkkk from './component/kkkkk'
import One from './component/one'
import Two from './component/two'
import Shop from './component/shop'
function App() {

  // let str = '12345,上山打老虎'
  // let price = 34.453
  // let img = 'https://www.baidu.com/img/fddong_e2dd633ee46695630e60156c91cda80a.gif'

  let akm = 'm4a1'

  let arr = [
    {
      id: 1,
      name: '李四',
      age: 23
    },
    {
      id: 2,
      name: '王五',
      age: 33
    }
  ]

  let liList = [
    <div key='1'>a</div>,
    <div key='2'>b</div>,
    <div key='3'>c</div>,
    <div key='4'>d</div>,
  ]
  return (
    <div className="App">
      {/* 12345
      <div>{str}</div>
      <div>价格是：{price.toFixed(2)}</div>
      <div><img src={img}/></div> */}
      {/* {liList}
      <ol>
        {
            arr.map((item,index) => {
            return <li key={index}>{item.name}</li>
            })
        }
      </ol>

      <div className='cont' style={{color:'#fff'}}>好好学习</div> */}

      <Varr></Varr>
      <Kkkkk></Kkkkk>
      <One akm={akm}></One>
      <Two akm={akm}></Two>
      <Shop></Shop>
    </div>
  );
}

export default App;
