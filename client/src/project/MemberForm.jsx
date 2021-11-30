import { HomeOutlined } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client";
import {
  Breadcrumb,
  Layout,
  Form,
  Input,
  Button,
  Row,
  Col,
  message,
} from "antd";
import React from "react";
import { useHistory } from "react-router";

function MemberForm() {
  const { push } = useHistory();

  const [addData, { loading }] = useMutation(
    gql`
      mutation AddMember($myInput: MemberInput!) {
        addMember(input: $myInput) {
          _id
          firstname
          lastname
          birthdate
        }
      }
    `,
    {
      onError: () => {
        message.error("خطا در انجام عملیات");
      },
    }
  );

  const handleFinish = (values) => {
    addData({
      variables: {
        myInput: values,
      },
      update: (cache) => {
        cache.modify({
          fields: {
            members() {},
          },
        });

        message.success("کاربر با موفقیت درج گردید");
        push("/");
      },
    });
  };

  return (
    <>
      <Breadcrumb style={{ background: "white", padding: "10px" }}>
        <Breadcrumb.Item>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/">کاربران</Breadcrumb.Item>
        <Breadcrumb.Item>جدید</Breadcrumb.Item>
      </Breadcrumb>

      <Layout.Content
        style={{ padding: "50px 50px", background: "white", marginTop: 20 }}
      >
        <Row>
          <Col span={12} offset={6}>
            <Form
              name="basic"
              layout="vertical"
              onFinish={handleFinish}
              autoComplete="off"
            >
              <Form.Item
                label="نام"
                name="firstname"
                rules={[
                  { required: true, message: "نام وارد نشده است" },
                  {
                    max: 50,
                    message: "نام نمی تواند بیشتر از 50 کارکتر باشد",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="نام خانوادگی"
                name="lastname"
                rules={[
                  { required: true, message: "نام خانوادگی وارد نشده است" },
                  {
                    max: 50,
                    message: "نام خانوادگی نمی تواند بیشتر از 50 کارکتر باشد",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="تاریخ تولد"
                name="birthdate"
                rules={[
                  { required: true, message: "تاریخ تولد وارد نشده است" },
                  {
                    pattern: /[0-9]/,
                    message: "فقط عدد قابل قبول می باشد",
                  },
                  { min: 4, message: "تاریخ تولد کمتر از 4 کاراکتر نباشد" },
                  { max: 4, message: "تاریخ تولد بیشتر از 4 کاراکتر نباشد" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item>
                <Button loading={loading} type="primary" htmlType="submit">
                  ثبت
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Layout.Content>
    </>
  );
}

export default MemberForm;
