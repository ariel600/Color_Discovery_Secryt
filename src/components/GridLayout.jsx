import { useEffect, useRef, useState } from "react"
import "../styles/GridLayout.css"

export default function GridLayout() {

  const [counter, setCounter] = useState(0)
  const [textStatus, setTextStatus] = useState("")
  const [status, setStatus] = useState("status-false")
  const cecret = useRef(Math.floor(Math.random() * 100) + 1)
  // const color = useRef(randomColor())

  const board = []
  for (let i = 1; i < 101; i++) {
    board.push(i)
  }

  // function randomColor() {
  //   const r = Math.floor(Math.random() * 256)
  //   const g = Math.floor(Math.random() * 256)
  //   const b = Math.floor(Math.random() * 256)
  //   return `rgb(${r}, ${g}, ${b})`
  // }

  function onClick(event, key) {
    if (event.target.className === "x") return
    if (key != cecret.current) {
      setCounter(counter + 1)
      event.target.className = 'x'
      setStatus("status-false")
      setTextStatus("Keep Searching!")
      event.target.textContent = 'X'
      setTimeout(() => setTextStatus(""), [1000])
    } else {
      // event.target.style.backgroundColor = randomColor()
      setStatus("status-true")
      setTextStatus("You have a victory! 🤩")
      event.target.className = 'cell v'
    }
  }

  return (
    <div className="main">
      <h1 className="title">Find the secret color! <div className="divColor" style={{ backgroundColor: "greenyellow" }}></div></h1>
      <div className="table">
        {board.map((num) => (
          <div key={num} className={num === cecret ? "secret" : "cell"} onClick={e => {
            if (status === "status-true") return;
            onClick(e, num)
          }}></div>
        ))}
      </div>
      <p className="click" >Clicks: {counter}</p>
      <p className={status}>{textStatus}</p>
      <button type="submit" className={`${status}-button`} >New Game</button>
    </div>
  )
}