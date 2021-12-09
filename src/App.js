import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const faker = require('faker')
  

  const [catpic, setCatpic] = useState([""])
  const [catName, SetCatname] = useState([""])
  const [catprice, SetCatprice] = useState([""])

  const getpic = async () => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
    const data = await response.json()
    setCatpic(data)
    for(let i=0; i<catpic.length; i++){
      const name = faker.name.firstName()
      let storedName = [...catName]
      storedName.push(name)
      SetCatname(storedName)
    }
    for(let i=0; i<catpic.length; i++){
      const price = faker.commerce.price()
      let storedPrice = [...catprice]
      storedPrice.push(price)
      SetCatprice(storedPrice)
    }
  }

  
  useEffect(()=> {
    getpic()
  }, [])

  if(!catpic){
    return null
  }
  return (
    <div id='display'>
      <h1>Cat Shop</h1>
      {catpic.map((cat) => {
        return(
          <div className="card">
            <img src={cat.url} alt='no pic'/>
            <p>{catName}</p>
            <p>£{catprice}</p>
            <button>+</button>
          </div>
        )
      })}
    </div>
  )
}
  

export default App;
