import "../styles/GridLayout.css"

export default function GridLayout() {

  const board = []
  for (let i = 1; i < 101; i++) board.push(i)

  return (
    <div className="main">
      <h1 className="title">Find the Secret Color!</h1>
      <div className="table">
        {board.map((num) => (
          <div key={num} className="cell"></div>
        ))}
      </div>
      <p className="click">Clicks: {}</p>
    </div>
  )
}
