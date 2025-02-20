import { createContext, useState } from "react";

// selle kaudu saan teda importides globaalseid muutujaid kätte. 
export const CartSumContext = createContext();

// provider määrab globaalsust mis tasemel need muutujad kättesaadavad on
export const CartSumContextProvider = ({children}) => {
    const [cartSum, setCartSum] = useState(calculateTotal());

    function calculateTotal() {
        const products = JSON.parse(localStorage.getItem("cart")) || [] 
        let sum= 0;
        products.forEach(product=> sum = sum + product.specifiedProduct.price * product.specifiedQuantity)
        return sum;
      }

    const decrease = (value) => {
        setCartSum(cartSum - value)
    }

    const increase = (value) => {
        setCartSum(cartSum + value)
    }

    const empty = () => {
        setCartSum(0)
    }

    return (
        <CartSumContext.Provider value={{cartSum, decrease, increase, empty}}>
            {children}
        </CartSumContext.Provider>
    )
}