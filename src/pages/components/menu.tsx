import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Typography } from 'antd';
import Link from 'next/link';

const { Text } = Typography

interface MenuItem {
    key: string,
    icon: React.ReactNode,
    label:string,
    type?:string
}
const items: MenuItem[] = [
    {
        key:"/",
        icon:<AppstoreOutlined/>,
        label:"Dashboard",
    },
    {
        key:"/consumers",
        icon:<MailOutlined/>,
        label:"Consumers",
    }
];

const App: React.FC = () => {
  const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('/');


  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    console.log(e.key);
  };

  return (
    <>
      <Menu
        theme={theme}
        onClick={onClick}
        defaultOpenKeys={['/']}
        selectedKeys={[current]}
        mode="inline"
        style={{ height: "100%" }}
      >
        {
            items.map((item)=>(<Menu.Item key={item.key} icon={item.icon}>
            <Link href={item.key}><Text className="text-white">{item.label}</Text></Link>
        </Menu.Item>))
        }
      </Menu>
    </>
  );
};

export default App;
