import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  UploadOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "./index.css";
import { withRouter } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

const menuLsit = [
  {
    key: "/home",
    title: "首页",
    icon: <UserOutlined />,
  },
  {
    key: "/user-manage",
    title: "用户管理",
    icon: <UploadOutlined />,
    children: [
      {
        key: "/user-manage/list",
        title: "用户列表",
        icon: <UploadOutlined />,
      },
    ],
  },
  {
    key: "/right-manage",
    title: "权限管理",
    icon: <MailOutlined />,
    children: [
      {
        key: "/right-manage/rolre/list",
        title: "角色列表",
        icon: <MailOutlined />,
      },
      {
        key: "/right-manage/right/list",
        title: "权限列表",
        icon: <MailOutlined />,
      },
    ],
  },
];
function SideMenu(props) {
  const renderMenu = (menuLsit) => {
    return menuLsit.map((item) => {
      if (item.children) {
        return (
          <SubMenu key={item.key} title={item.title} icon={item.icon}>
            {renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item
          key={item.key}
          icon={item.icon}
          onClick={() => {
            props.history.push(item.key);
          }}
        >
          {item.title}
        </Menu.Item>
      );
    });
  };
  return (
    <Sider trigger={null} collapsible>
      <div className="logo">React系统</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        {renderMenu(menuLsit)}
      </Menu>
    </Sider>
  );
}
export default withRouter(SideMenu);
