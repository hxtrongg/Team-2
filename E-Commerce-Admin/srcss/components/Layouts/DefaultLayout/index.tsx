import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserSwitchOutlined ,
  UserOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  TableOutlined,
  BarChartOutlined,
  PieChartOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Space, Avatar } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const { Header, Sider, Content } = Layout;

// Create a client
const queryClient = new QueryClient()

const DefaultLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const {isAuthenticated, logout, user} = useAuth();
  /* Check xem trang thai dang nhap */
  React.useEffect(()=>{
    if(!isAuthenticated){
      navigate('/login');
    }
  },[isAuthenticated,navigate])


  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    {
      key: '',
      icon: <UserOutlined />,
      label: 'Dashboard',
    },
    {
      key: 'Categories',
      icon: <TableOutlined />,
      label: 'Categories ',
    },
    {
      key: 'products',
      icon: <ShopOutlined />,
      label: 'Products ',
    },
    {
      key: 'customers',
      icon: <UsergroupAddOutlined />,
      label: 'Customers ',
    },
    {
      key: 'suppliers',
      icon: <PieChartOutlined />,
      label: 'Suppliers ',
    },
    {
      key: 'employees',
      icon: <UserSwitchOutlined />,
      label: 'Employees ',
    },
    {
      key: 'orders',
      icon: <BarChartOutlined />,
      label: 'Orders ',
    },
  ];
  return (
    <QueryClientProvider client={queryClient}>
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}
      
      >
        <div className="demo-logo-vertical" style={{
          color: 'white',
          whiteSpace: 'nowrap',
          fontSize: '20px',
          fontWeight: 'bold',
          padding: '10px 20px',
        }} >Admin</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menuItems}
          onClick={({ key }) => {
            navigate('/' + key.split('-').join('/'));
            console.log(key);
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Space>
          <Avatar src={<img src={user?.photo} alt="avatar" />} />
            <strong>{user?.firstName}{user?.lastName}</strong>
          <Button type='primary' onClick={()=>{
            logout();
          }}>
            Logout
          </Button>

          </Space>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 580,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
    </QueryClientProvider>
  );
};

export default DefaultLayout;