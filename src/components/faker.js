const Faker = ()=>{
    const faker = require('faker')
    const catty = {
        name: faker.name.firstName(),
        price: faker.commerce.price()
    }

    let txt = ""

    for (let x in catty) {
        txt += catty[x] + " ";
    }
    return(
        <div id='para'>
            <p>{txt}</p>
        </div>
    ) 
}
export default Faker