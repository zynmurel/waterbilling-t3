import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import SiderMenu from './menu';

const { Header, Sider, Content } = Layout;
interface LayoutProps {
  children: ReactNode;
}

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
};


const App = ({children}:LayoutProps)  => (
  <div className=' min-h-screen'>
    <Layout className=' min-h-screen'>
      <Sider style={siderStyle}>
        <SiderMenu/>
      </Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>{children}</Content>
      </Layout>
    </Layout>
  </div>
);

export default App;