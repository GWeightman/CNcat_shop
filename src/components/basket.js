const Basket = ({to_buy, setTo_buy}) =>{
    
    const removeHandler = (index) => {
        let storedTo_buy = [...to_buy]
        storedTo_buy.splice(index, 1)
        setTo_buy(storedTo_buy)
    }
        
    return(
        <div className="display"> 
            {to_buy.map((tobuy, index) => {
                return(
                    <div className="card">
                        <img src={tobuy.pic} alt='no pic'/>
                        <div className='para'>
                            <p>{tobuy.name}</p>
                            <p>£{tobuy.price}</p>
                        </div>
                        <button onClick={()=>removeHandler(index)}>remove</button>
                    </div>
                )
                
            })}
        </div>
        
    )
}

export default Basket