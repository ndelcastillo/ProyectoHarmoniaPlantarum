import React, { createContext, useState } from 'react'

export const CarritoContext = createContext()

const { Provider } = CarritoContext

const CarritoContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const isInCarrito = (id) => {
        return carrito.some(item => item.id === id)
    }
    const addProduct = (productos, qty) => {
        const newItem = { ...productos, qty }
        if (isInCarrito(newItem.id)) {
            const findProduct = carrito.find(item => item.id === newItem.id)
            const productIndex = carrito.indexOf(findProduct)
            const auxArray = [...carrito];
            auxArray[productIndex].qty += qty;
            setCarrito(auxArray)
        } else {
            setCarrito([...carrito, newItem])
        }
    }
    const emptyCarrito = () => {
        return setCarrito([])
    }
    const deleteProduct = (id) => {
        return setCarrito(carrito.filter((item) => item.id !== id))
    }
    const getProductQty = () => {
        return carrito.reduce((acc, item) => (acc += item.qty), 0)
    }

    const getProductPrice = () => {
        return carrito.reduce((acc, item) => (acc += item.qty * item.price), 0)
    }

    /*
    const getTotalPriceInCart = () => {
        let total = 0
        carrito.forEach((item) => total += item.qty * item.price)
        return total
    }
    */

    return <Provider value={{
        carrito,
        isInCarrito,
        addProduct,
        emptyCarrito,
        deleteProduct,
        getProductQty,
        getProductPrice,
    }}>
        {children}
    </Provider>
}
export default CarritoContextProvider