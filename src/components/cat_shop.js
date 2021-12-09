import Faker from "./faker"
import './../App.css';

const Catshop = ({catData, to_buy, setTo_buy} )=> {
    return(
        <div id='display'>
            <h1>Cat Shop</h1>
            {catData.map((cat) => {
                return(
                    <div className="card">
                        <img src={cat.url} alt='no pic'/>
                        <Faker to_buy={to_buy} setTo_buy={setTo_buy}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Catshop