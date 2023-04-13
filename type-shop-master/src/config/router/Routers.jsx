import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../../component/Product/Product'
import User from '../../component/User/User'

function Routers() {
  return (
    <Routes>
        <Route path="product" element = {<Product />} />
        <Route path="user" element = {<User />} />      
    </Routes>
 )
}

export default Routers