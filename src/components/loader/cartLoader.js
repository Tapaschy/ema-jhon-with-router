import { getShoppingCart } from "../../utilities/fakedb";

const cartContentLoader= async()=>{
    const loadedData=await fetch('products.json');
    const data =await loadedData.json();

    const storedCart=getShoppingCart();
    const savedCart=[]
    for(const id in storedCart){
        const addedProduct=data.find(product => product.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
        }
    }

    return savedCart;
}
export default cartContentLoader;