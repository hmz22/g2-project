import { Layout, Menu } from "antd";
import React from "react";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function CustomLayout({ children }) {
  return (
    <Layout>
      <Layout.Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          right: 0,
        }}
      >
        <div
          className="logo"
          style={{ height: 50, background: "white", margin: 20 }}
        />
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<TeamOutlined />}>
            <Link to="/">کاربران</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/profile">پروفایل</Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout className="site-layout" style={{ marginRight: 200 }}>
        <Layout.Header
          className="site-layout-background"
          style={{ padding: 0 }}
        />
        <Layout.Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            {children}
          </div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Layout.Footer>
      </Layout>
    </Layout>
  );
}

export default CustomLayout;
