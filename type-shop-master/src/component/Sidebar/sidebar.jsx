import React from 'react'
import { Layout, Menu } from 'antd';
import './sidebar.css'
import { useLocation, useNavigate } from 'react-router-dom';
import Product from '../Product/Product';
import User from '../User/User';
const { Sider } = Layout;
const getItem = (label, key, type) => {
    return {
        key,
        label,
        type
    }
}
const items = [
    getItem('PRODUCT', '/product', <Product />),
    getItem('USER', '/user', <User />),
    getItem('LOGOUT')
]
function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="logo">Type-shop</div>
            <Menu
                onClick={({ key }) => {
                    navigate(key);
                }}
                items={items}
                selectedKeys={[location.pathname]}
            />
        </Sider>
    )
}

export default Sidebar