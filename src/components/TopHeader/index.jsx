import React, { useState } from "react";
import { Layout, Dropdown, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Header } = Layout;
export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false);
  const changeCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const menu = (
    <Menu>
      <Menu.Item>111111</Menu.Item>
      <Menu.Item>222222</Menu.Item>
      <Menu.Item>333333</Menu.Item>
      <Menu.Item danger>退出</Menu.Item>
    </Menu>
  );

  return (
    <Header className="site-layout-background" style={{ padding: "0 16px" }}>
      {collapsed ? (
        <MenuUnfoldOutlined onClick={changeCollapsed} />
      ) : (
        <MenuFoldOutlined onClick={changeCollapsed} />
      )}
      <div style={{ float: "right" }}>
        <span>欢迎admin</span>
        <Dropdown overlay={menu}>
          <UserOutlined />
        </Dropdown>
      </div>
    </Header>
  );
}
