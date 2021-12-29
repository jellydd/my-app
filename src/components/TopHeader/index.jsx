import React from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
const { Header } = Layout;
function index() {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(
        this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: "trigger",
          onClick: this.toggle,
        }
      )}
    </Header>
  );
}

export default index;
