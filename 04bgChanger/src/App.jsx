import { useState } from "react"

function App() {
  
  let [color, setColor] = useState('yellow')
  
  return (

    <>
      <div className="bg-slate-300 w-screen h-screen " style={{ backgroundColor: color }}>

        <div className=" fixed inset-x-0 bottom-12 flex justify-center ">
          <div className="bg-white rounded-xl">
            <button className="bg-red-600 p-2 m-2 rounded-xl" onClick={() => setColor("red")}>red</button>
            <button className="bg-green-600 p-2 m-2 rounded-xl" onClick={() => setColor("green")}>green</button>
            <button className="bg-pink-600 p-2 m-2 rounded-xl" onClick={() => setColor("pink")}>pink</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
