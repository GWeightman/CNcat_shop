import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import Catshop from './components/cat_shop';
import Basket from './components/basket';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link 
} from "react-router-dom"


function App() {
  

  const [catData, setCatData] = useState([""])
  const [to_buy, setTo_buy] = useState([])

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
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/basket">Basket</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>  
        <Routes>
          <Route path="/basket" element={<Basket to_buy={to_buy} setTo_buy={setTo_buy}/>}/>
          <Route path="/" element={<Catshop catData={catData} to_buy={to_buy} setTo_buy={setTo_buy}/>}/>
        </Routes>
      </div>
    </Router>
   
  )
}
  

export default App;
