import { Button } from "antd";
import MyButton from "../Components/MyButton";
import React, { useEffect, useState } from "react";

function SampleApi() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setData(json);
      });
  }, []);

  if (loading) return <>loading ...</>;

  return (
    <>
      <div>
        <Button type="primary" loading shape="round">
          Primary Button
        </Button>
        <MyButton disabled>Click me</MyButton>
      </div>
      <div>
        <ul>
          {data.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SampleApi;
