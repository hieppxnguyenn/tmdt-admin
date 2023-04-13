import React from 'react';
import Sidebar from '../Sidebar/sidebar';
import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import './dashboard.css';
import { getActiveElement } from '@testing-library/user-event/dist/utils';
import Product from '../Product/Product';
import User from '../User/User';
import Routers from '../../config/router/Routers';

function Dashboard() {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <Routers />
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Dashboard