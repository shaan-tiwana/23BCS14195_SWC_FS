  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from './assets/vite.svg'
  import heroImg from './assets/hero.png'
  import './App.css'

  function App() {
    const [count, setCount] = useState(1)
    const [clicks, setClicks] = useState(0)

    const handleClick = () => {
      const nextClicks = clicks + 1

      setClicks(nextClicks)

      if (nextClicks % 3 === 0) {
        setCount(prev => prev * 2)
      }
    }
    const[arr,setArr] = useState([])
    const[arrEle,setArrEle] = useState(arr[arr.length-1])
    const[temp,setTemp] = useState(arr.length-1)
    const handleClickUndo = () => {
      if(temp-1 >= 0){
        let flat=temp-1
        setTemp(flat)
        setArrEle(arr[flat])
      }
    }
    const handleClickRedo = () => {
      if(temp+1 < arr.length){
        let flat=temp+1
        setTemp(flat)
        setArrEle(arr[flat])
      }
    }
    const[input,setInput] = useState("")
    return (
      <>
        <section id="center">
          <div className="hero">
            <img src={heroImg} className="base" width="170" height="179" alt="" />
            <img src={reactLogo} className="framework" alt="React logo" />
            <img src={viteLogo} className="vite" alt="Vite logo" />
          </div>
          <div>
            <h1>Get started</h1>
          </div>

          <div> 
            <p><b>Value of x is {count}</b></p>
          </div>
          <button
            type="button"
            className="counter"
            onClick={handleClick}
          >
            Button for first task
          </button>
          <p> The value of x doubles on every third button click</p>
        </section>

        <br />
        <br />
        <div id="undo-redo-implementtation" >
          <h1>Undo-Redo Implementation</h1>
          <input type="text" value={input} onChange={(e)=>{
            setInput(e.target.value)
            setArr([...arr,e.target.value])
            setArrEle(e.target.value)
          }} />
          <p><b>Current Value: {arrEle}</b></p>
          <button onClick={handleClickUndo}>Undo</button>
          <button onClick={handleClickRedo}>Redo</button>
        </div>

        

        <div className="ticks"></div>
        <section id="spacer"></section>
      </>
    )
  }

  export default App
