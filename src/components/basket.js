const Basket = ({to_buy, setTo_buy}) =>{
    
    const removeHandler = (index) => {
        let storedTo_buy = [...to_buy]
        storedTo_buy.splice(index, 1)
        setTo_buy(storedTo_buy)
    }
    return(
        <div> 
            {to_buy.map((tobuy, index) => {
                return(
                    <div>
                        <p>{tobuy}</p>
                        <button onClick={()=>removeHandler(index)}>remove</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Basket