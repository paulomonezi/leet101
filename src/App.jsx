import "./App.css"

function App() {
  const accounts = [
    [1, 2, 3],
    [3, 2, 5],
    [5, 2, 1],
  ]
  const minimumValue = 0
  var maximumWealth = function (accounts) {
    let wealthestClient = []
    for(let i = 0; i < accounts.lenght; i++){
      let tempArray = accounts[i]
      const arraySum = tempArray.reduce((acc, curr) => acc + curr, 0)
      return arraySum
    }
  }

  return (
    <>
      <div>
        {maximumWealth(accounts)}
        <p>Leet 101</p>
      </div>
    </>
  )
}

export default App
