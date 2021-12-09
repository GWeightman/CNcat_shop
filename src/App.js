import { useEffect, useState } from 'react';
import './App.css';
import Cat_shop from './components/cat_shop';

function App() {
  

  const [catData, setCatData] = useState([""])

  const getpic = async () => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
    const data = await response.json()
    setCatData(data)
  }

  useEffect(()=> {
    getpic()
  }, [])

  if(!catData){
    return null
  }
  return (
    <div>
      <Cat_shop catData={catData}/>
    </div>
  )
}
  

export default App;
