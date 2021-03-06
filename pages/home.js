import { Layout, Menu, Breadcrumb } from 'antd';
import Sidebar from '../components/Sidebar';

export const Home = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className='site-layout-background' style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2020 JoeyUI.com</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
