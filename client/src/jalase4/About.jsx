import { gql } from "@apollo/client";
import { List, Avatar, Layout } from "antd";
import React, { useState } from "react";
import { client } from "../index";

function About() {
  const [data, setData] = useState([]);

  client
    .query({
      query: gql`
        query GetAllMember {
          members {
            _id
            firstname
            lastname
            birthdate
          }
        }
      `,
    })
    .then((result) => setData(result.data.members))
    .catch((err) => console.log(err));

  return (
    <Layout.Content style={{ padding: "50px 50px", background: "white" }}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={
                <a href="https://ant.design">{`${item.firstname} ${item.lastname}`}</a>
              }
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </Layout.Content>
  );
}

export default About;
