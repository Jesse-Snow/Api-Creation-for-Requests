// This "Ids" must be the Keys and the values are the Product Objects

const sequenceOfIDs = { 
    _id:1,
    get id(){ return this._id++}
}

const allProducts = {}

function saveProduct(product){
    if(!product.id) 
    { 
        product.id = sequenceOfIDs.id
    }
    allProducts[product.id] = product // Add products 
    return product // Whith this id atribute
}

function getProduct(id){
    return allProducts[id] || {}
}

function getAllProducts(){
    return Object.values(allProducts)
}

module.exports = { saveProduct,getProduct,getAllProducts }