import React from "react";
import { Layout, Menu } from "antd";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import NotFoundPage from "./NotFoundPage";

function App() {
  return (
    <Layout>
      <Layout.Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/profile">Profile</Link>
          </Menu.Item>
        </Menu>
      </Layout.Header>

      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/404" component={NotFoundPage} />
        <Route exact path="/" component={Home} />
        <Redirect to="/404" />
      </Switch>
    </Layout>
  );
}

export default App;
