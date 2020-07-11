import { useState } from 'react';
import { Layout, Menu } from 'antd';
import IconBuilder from './IconBuilder';
import Logo from '../Logo/Logo';
import { Data } from './Sidebar.data';

export const Sidebar = () => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const { menu } = Data;
  const [collapsed, setCollapsed] = useState(false);

  const RenderSubMenu = ({ children, icon, title, ...other }) => (
    <SubMenu icon={<IconBuilder name={icon} />} title={title} {...other}>
      {children.map((elm, index) => (
        <RenderMenu key={index} icon={elm.icon} title={elm.title} href={elm.href} />
      ))}
    </SubMenu>
  );

  const RenderMenu = ({ href, icon, title, ...other }) => (
    <Menu.Item icon={<IconBuilder name={icon} />} {...other}>
      <a href={href}>{title}</a>
    </Menu.Item>
  );

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
      <Logo />
      <Menu theme='dark' mode='inline'>
        {menu.map(({ children, href, icon, title }, index) =>
          children ? (
            <RenderSubMenu key={index} children={children} icon={icon} title={title} />
          ) : (
            <RenderMenu key={index} href={href} icon={icon} title={title} />
          )
        )}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
