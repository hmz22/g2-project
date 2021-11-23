import { Card, Carousel, Space } from "antd";
import React from "react";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function Home() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img
            width="100%"
            style={{ height: "calc(100vh - 64px)" }}
            src="https://picsum.photos/seed/picsum/1920/1080"
          />
        </div>

        <div>
          <img
            width="100%"
            style={{ height: "calc(100vh - 64px)" }}
            src="https://picsum.photos/1920/1080"
          />
        </div>
      </Carousel>
      <Space size={[15, 15]} wrap>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Card.Meta
            title="Europe Street beat"
            description="www.instagram.com"
          />
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Card.Meta
            title="Europe Street beat"
            description="www.instagram.com"
          />
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Card.Meta
            title="Europe Street beat"
            description="www.instagram.com"
          />
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Card.Meta
            title="Europe Street beat"
            description="www.instagram.com"
          />
        </Card>
      </Space>
    </div>
  );
}

export default Home;
