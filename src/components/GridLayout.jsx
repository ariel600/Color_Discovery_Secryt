import { useRef, useState } from "react"
import "../styles/GridLayout.css"

export default function GridLayout() {

  const [counter, setCounter] = useState(0)
  const [textStatus, setTextStatus] = useState("")
  const [status, setStatus] = useState("")
  const cecret = useRef(Math.floor(Math.random() * 100) + 1)
  console.log(cecret);


  const board = []
  for (let i = 1; i < 101; i++) {
    board.push(i)
  }

  function onClick(event, key) {
    if (event.target.className === "x") return
    if (key != cecret.current) {
      setCounter(counter + 1)
      event.target.className = 'cell err'
      setStatus("status-false")
      setTextStatus("Keep Searching!")
      setTimeout(() => {
        event.target.className = 'x'
        setTextStatus("")
      }, [600])
    } else {
      setStatus("status-true")
      setTextStatus("You have a victory! 🤩")
      event.target.className = 'cell v'
    }
  }

  return (
    <div className="main">
      <h1 className="title">Find the secret color!</h1>
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
    </div>
  )
}