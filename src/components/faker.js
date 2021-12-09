const Faker = ({to_buy, setTo_buy})=>{
   
    const faker = require('faker')
    const catty = {
        name: faker.name.firstName(),
        price: faker.commerce.price()
    }

    const addHandler = () => {
        let storedTo_buy = [...to_buy]
        storedTo_buy.push(txt)
        setTo_buy(storedTo_buy)
    }

    let txt = ""

    for (let x in catty) {
        txt += catty[x] + " ";
    }
    return(
        <div id='para'>
            <p>{txt}</p>
            <button onClick={addHandler}>+</button>
        </div>
    ) 
}
export default Faker