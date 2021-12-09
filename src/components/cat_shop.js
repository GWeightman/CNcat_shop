import Faker from "./faker"
import './../App.css';

const Cat_shop = ({catData})=> {
    return(
        <div id='display'>
            <h1>Cat Shop</h1>
            {catData.map((cat) => {
                return(
                    <div className="card">
                        <img src={cat.url} alt='no pic'/>
                        <Faker/>
                        <button>+</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Cat_shop