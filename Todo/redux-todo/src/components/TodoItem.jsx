import { Col } from "antd";
import { Link } from "react-router-dom";

function TodoItem({ todo }) {
  const link = `/todos/${todo.id}`
  return (
    <Col span={20}>
      <Link to={link} style={{ textDecoration: "none" }}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <p>{todo.title}</p>
          <p>{todo.complete ? "Completed" : "Pending"}</p>
        </div>
      </Link>
    </Col>
  );
}

export default TodoItem;
