import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Table, Layout } from "antd";

function Home() {
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
  ];

  return (
    <>
      <h1>Home Page</h1>

      <Layout.Content style={{ padding: "50px 50px", background: "white" }}>
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