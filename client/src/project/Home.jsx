import React from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import {
  Table,
  Layout,
  Button,
  Space,
  Divider,
  Tooltip,
  Breadcrumb,
  message,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router";
import { GET_MEMBERS } from "../graphql/query/member.query";
import { DELETE_MEMBER } from "../graphql/mutation/member.mutation";

function Home() {
  const { push } = useHistory();

  const { loading, data, error } = useQuery(GET_MEMBERS);

  const [deleteItem] = useMutation(DELETE_MEMBER, {
    onError: () => message.error("خطا در انجام حذف"),
  });

  const handleDelete = (record) => {
    deleteItem({
      variables: {
        id: record._id,
      },
      update: (cache) => {
        cache.modify({
          fields: {
            members() {},
          },
        });

        message.success("عملیات حذف با موفقیت انجام شد");
      },
    });
  };

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
              onClick={() => push(`/edit/${record._id}`)}
              style={{ fontSize: 18, color: "#52c41a", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="حذف">
            <DeleteOutlined
              onClick={() => handleDelete(record)}
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
