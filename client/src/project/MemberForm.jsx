import { HomeOutlined } from "@ant-design/icons";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import {
  Breadcrumb,
  Layout,
  Form,
  Input,
  Button,
  Row,
  Col,
  message,
  Spin,
} from "antd";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { ADD_MEMBER, UPDATE_MEMBER } from "../graphql/mutation/member.mutation";
import { GET_MEMBER } from "../graphql/query/member.query";

function MemberForm() {
  const { push } = useHistory();
  const [form] = Form.useForm();
  const { memberId } = useParams();

  const [loadMember, { loading: loadLoading }] = useLazyQuery(GET_MEMBER, {
    onCompleted: (data) => form.setFieldsValue(data.member),
  });

  useEffect(() => {
    if (memberId) {
      loadMember({
        variables: {
          id: memberId,
        },
      });
    }
  }, [loadMember, memberId]);

  const [addData, { loading }] = useMutation(ADD_MEMBER, {
    onError: () => {
      message.error("خطا در انجام عملیات");
    },
  });
  const [updateData, { loading: updateLoading }] = useMutation(UPDATE_MEMBER, {
    onError: () => {
      message.error("خطا در انجام عملیات");
    },
  });

  const handleFinish = (values) => {
    if (!memberId) {
      return addData({
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
    }

    return updateData({
      variables: {
        id: memberId,
        input: values,
      },
      update: (cache) => {
        cache.modify({
          fields: {
            members() {},
          },
        });

        message.success("کاربر با موفقیت ویرایش گردید");
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
        <Breadcrumb.Item>{memberId ? "ویرایش" : "جدید"}</Breadcrumb.Item>
      </Breadcrumb>

      <Layout.Content
        style={{ padding: "50px 50px", background: "white", marginTop: 20 }}
      >
        <Row>
          <Col span={12} offset={6}>
            <Spin spinning={loadLoading}>
              <Form
                form={form}
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
                  <Button
                    loading={loading || updateLoading}
                    type="primary"
                    htmlType="submit"
                  >
                    ثبت
                  </Button>
                </Form.Item>
              </Form>
            </Spin>
          </Col>
        </Row>
      </Layout.Content>
    </>
  );
}

export default MemberForm;
