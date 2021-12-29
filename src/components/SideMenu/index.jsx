import React from "react";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
function index() {
  return (
    <Sider trigger={null} collapsible>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default index;
