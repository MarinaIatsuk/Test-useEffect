import React, {useState, useEffect} from 'react'

export default function App() {
  //const [data,setData]=useState([]) //создали пустое состояние с пустым массивом. Тогда сначала отрисовывается пустой массив, потом компонент перерисовывается с data

  const [data,setData]=useState(false) //ставим false, чтобы оповестить о том, что загрузка идет или не не идет


  useEffect (()=>{
    addData()
  },[]) // без этого не отрисовывается массив, так как функция addData идет после отрисовки map, так как ассинхронные ф-ции идут последними

  async function addData(){
    const resp= await fetch('https://jsonplaceholder.typicode.com/todos')
    const datServ = await resp.json();
    setData(datServ) // добавили в пустое состояние обработанную базк данных с сервера
  }

//addData() //для проверки, что без useEffect массив не отрисуется

if (!data) {
  return <h1>Loading...</h1>
} //отработка загрузки, если данные еще загружены,соответсвенно пустая верстка не отрисовывается. useEffect отрабатывает после Loading

  return (
    <div>
      {console.log (data)}
      {data.map((item, index)=>(
        <div key={item.id}>
          <h2>{item.title}</h2>
        </div>
      ))}
      <button onClick={addData}>можно запустить ф-цию по кнопке</button>
    </div>
  )
}


