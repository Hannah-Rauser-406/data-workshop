import React from 'react';
import DATA from './DATA';

const getUserByID = (id) => {
  let user
    for (let i=0;  i<DATA.users.length; i++){
        if (DATA.users[i].id === id) {
          user = DATA.users[i]
    }
  }
  return user
}
//FOR LOOP METHOD
// const getProductByID = (id) => {
//   let product
//     for (let i=0; i<DATA.products.length; i++){
//       if(DATA.products[i].id === id){
//         product = DATA.products[i]
//       }
//     }
//     return product
// }
//FOR EACH METHOD
// const getProductByID = (id) => {
//   let product
//     DATA.products.forEach((p) => {
//       if (p.id === id){
//         product = p
//       }
//     })
//     return product
// }
//FIND METHOD
const getProductByID = (id) => {
    return DATA.products.find((product) => {
      return product.id === id
    })
}
//ISSUES>>>
//loop over the orders-- then print the user's name & the product's name
//****************
//
// const getUserProductName = (id) => {
//   let orders
//   let userName
//   let productName
//     DATA.orders.forEach((o) => {
//       userName = getUserByID(o.userId)
//       productName = getProductByID((DATA.orders.productId[o]))
//     })
//     return userName, productName
// }
//
//**********************
//returns undefined=====>
//
// const getActiveUsers = () => {
//   return DATA.users.find((a) => {
//     return a.accountActive === true
//   })
// }
//*********************

const getActiveUsers = () => {
  let activeUsers = []

  DATA.users.forEach((user) => {
    if (user.accountActive === true) {
      activeUsers.push(user)
    }
  })

  return activeUsers
}

const getMostExpProduct = () => {
  let mostExpProd // = undefined

  for (let i = 0; i < DATA.products.length; i++) {
    if (mostExpProd === undefined || DATA.products[i].price > mostExpProd.price) {
      mostExpProd = DATA.products[i]
    }
  }

  return mostExpProd
}

const getOrderInfo = () => {
  let orderInfoArr = []
  // let userName
  // let price
 const orderInfo = {
   orderId: orderId,
   userName: userName,
   price: price,
 }
  DATA.orders.forEach((order) => {
    if (order.id && order.userId && order.productId > 0) {
      let orderId =  order.id
      let userName = getUserByID(order.userId).name
      let price = getProductByID(order.productId).price
    }
    orderInfoArr.push(orderInfo)
  })

  return orderInfoArr
}
//return userName , price

const App = () => {
  console.log("get user by id:", getUserByID(1) , "get product by id:" , getProductByID(3) , "getUserProductName , ", "get Active Users:" , getActiveUsers() ,"getMostExpProduct:" , getMostExpProduct() , "getOrderInfo" , getOrderInfo())

    return (
      <div>
        Hello World
      </div>
    );
  }

export default App;
