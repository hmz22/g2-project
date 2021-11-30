import React from "react";
import { useQuery, gql } from "@apollo/client";
import {
  Table,
  Layout,
  Button,
  Space,
  Divider,
  Tooltip,
  Breadcrumb,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router";

function Home() {
  const { push } = useHistory();

  const { loading, data, error } = useQuery(gql`
    query GetAllMember {
      members {
        _id
        firstname
        lastname
        birthdate
      }
    }
  `);

  console.log("loading: ", loading, "data: ", data, "error: ", error);

  if (error) {
    return (
      <>
        <h1>Home Page</h1>
        <h1>خطا در دریافت اطلاعات</h1>
      </>
    );
  }

  const columns = [
    {
      title: "نام",
      dataIndex: "firstname",
    },
    {
      title: "نام خانوادگی",
      dataIndex: "lastname",
    },
    {
      title: "تاریخ تولد",
      dataIndex: "birthdate",
    },
    {
      key: "action",
      render: (text, record) => (
        <Space size="middle" split={<Divider type="vertical" />}>
          <Tooltip title="ویرایش">
            <EditOutlined
              style={{ fontSize: 18, color: "#52c41a", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="حذف">
            <DeleteOutlined
              style={{ fontSize: 18, color: "#f5222d", cursor: "pointer" }}
            />
          </Tooltip>
        </Space>
      ),
      width: "10%",
    },
  ];

  return (
    <>
      <Breadcrumb style={{ background: "white", padding: "10px" }}>
        <Breadcrumb.Item>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>کاربران</Breadcrumb.Item>
      </Breadcrumb>

      <Layout.Content
        style={{ padding: "50px 50px", background: "white", marginTop: 20 }}
      >
        <div style={{ display: "flex", marginBottom: 15 }}>
          <Button
            onClick={() => push("/new")}
            type="primary"
            icon={<PlusOutlined />}
          >
            جدید
          </Button>
        </div>

        <Table
          loading={loading}
          size="small"
          rowKey="_id"
          columns={columns}
          dataSource={data && data.members}
        />
      </Layout.Content>
    </>
  );
}

export default Home;
