import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SideMenu from "../../components/SideMenu";
import TopHeader from "../../components/TopHeader";
import NoPermision from "../../components/NoPermision";
import Home from "./Home";
import UserManage from "./User-manage";
import RightList from "./Right-manage";
import RoleList from "./Role-manage";
import './index.css'
import { Layout } from "antd";
const { Content } = Layout;
const LifeService = () => {
  return (
    <Layout>
      <SideMenu />
      <Layout className="site-layout">
        <TopHeader />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 480,
          }}
        >
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/user-manage/list" component={UserManage}></Route>
            <Route
              path="/right-manage/right/list"
              component={RightList}
            ></Route>
            <Route path="/right-manage/role/list" component={RoleList}></Route>
            <Redirect path="/" to="/home" exact />
            <Route path="*" component={NoPermision}></Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};
export default LifeService;
