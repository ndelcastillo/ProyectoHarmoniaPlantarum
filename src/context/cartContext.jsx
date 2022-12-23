/*
import React, { createContext, useState } from 'react'

const cartContext = createContext()

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(item, count) {
    if (isInCart(item.id)) {

      let newCart = cart.map((itemMapeo) => {
        if (itemMapeo.id === item.id) {
          itemMapeo.count += count
          return itemMapeo
        } else
          return itemMapeo
      })
      setCart(newCart)
    } else {
      let newCart = cart.map(item => item)
      newCart.push({ ...item, count: count })
      setCart(newCart)
    }
  }

  function getTotalItemsInCart() {
    let total = 0
    cart.forEach(item => 0)
    return total
  }



  function isInCart(id) {
    let found = cart.some(item => item.id === id)
    return found
  }

  function removeItem(itemid) {
  }

  function clear() {
  }


  return (
    <cartContext.Provider value={{
      cart,
      addItem,
      getTotalItemsInCart,
      isInCart
    }}>
      {children}
    </cartContext.Provider>
  )
}

export { cartContext }
*/
