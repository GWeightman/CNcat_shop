import { useState } from 'react';
import './App.css';

function App() {
  const getpic = () => {
    const response = fetch(`https://api.thecatapi.com/v1/images/search&api_key=7069bf1c-23bc-4ed2-925d-3c546afb9260`)
    const data = response.json()
    setProfile({pic: data[0].url})
  }
  
  const [profile, setProfile] = useState([
    {name: "Jordan", age: 6, price: "£200" , pic:{getpic}},
    {name: "Wayne", age: 8, price: "£125", pic:{getpic}}, 
    {name: "Gordon", age: 1, price: "£170", pic:{getpic}}, 
    {name: "Jeff", age: 3, price: "£105", pic:{getpic}}, 
    {name: "Simon", age: 9, price: "£180", pic:{getpic}},
  ])
  
  return (
    <div id='display'>
      <h1>Cat Shop</h1>
      {profile.map((profile) => {
        return(
          <div className="card">
            <img src={profile.pic} alt='no pic'/>
            <p>{profile.name}</p>
            <p>{profile.age}</p>
            <p>{profile.price}</p>
            <button>+</button>
          </div>
        )
      })}
    </div>
  )
}
  

export default App;
