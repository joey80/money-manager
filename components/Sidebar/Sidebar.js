import { useState } from 'react';
import { Layout, Menu } from 'antd';
import IconBuilder from './IconBuilder';
import { Data } from './Sidebar.data';

export const Sidebar = () => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const { menu } = Data;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
      <div className='logo' />
      <Menu theme='dark' mode='inline'>
        {menu.map((elm, index) => {
          if (elm.children) {
            return (
              <SubMenu key={index} icon={IconBuilder(elm.icon)} title={elm.title}>
                {elm.children.map((innerElm, innerIndex) => {
                  return (
                    <Menu.Item key={innerIndex} icon={IconBuilder(innerElm.icon)}>
                      {innerElm.title}
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          }
        })}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
