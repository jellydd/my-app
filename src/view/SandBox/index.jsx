import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SideMenu from "../../components/SideMenu";
import TopHeader from "../../components/TopHeader";
import NoPermision from "../../components/NoPermision";
import Home from "./Home";
import UserManage from "./User-manage";
import RightList from "./Right-manage";
import RoleList from "./Role-manage";
import { Layout } from "antd";

const LifeService = () => {
  return (
    <Layout>
      <SideMenu />
      <Layout>
        <TopHeader />

        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/user-manage/list" component={UserManage}></Route>
          <Route path="/right-manage/right/list" component={RightList}></Route>
          <Route path="/right-manage/role/list" component={RoleList}></Route>
          <Redirect path="/" to="/home" exact />
          <Route path="*" component={NoPermision}></Route>
        </Switch>
      </Layout>
    </Layout>
  );
};
export default LifeService;
