import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import { useState } from "react";

import axios from "axios";

function AddTodo({ getData }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    if (text === "") return;
    const payload = { title: text, complete: false };
    setText("");
    axios.post("http://localhost:8080/todos", payload).then(getData);
  };

  return (
    <>
      <Col span={20}>
        <Input placeholder="add todo .." onChange={handleChange} value={text} />
      </Col>
      <Col span={2}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="middle"
          style={{ width: "100%" }}
          onClick={handleAdd}
        />
      </Col>
    </>
  );
}

export default AddTodo;
