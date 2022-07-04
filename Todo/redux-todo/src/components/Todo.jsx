import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Button, Col, Row } from "antd";
import { addTodos } from "../Redux/Todo/actions";

function Todo() {
  const params = useParams();
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todosStore.todos);
  const [todo] = todos.filter((todo) => todo.id === +params.id);
  const navigate = useNavigate();
  const getData = () => {
    axios
      .get("http://localhost:8080/todos")
      .then(({ data }) => {
        let todos = data;
        dispatch(addTodos(todos));
      })
      .catch((error) => console.log(error));
  };

  const handleToggle = (id) => {
    const updatedTodo = { ...todo, complete: !todo.complete };
    axios.patch("http://localhost:8080/todos/"+id, updatedTodo).then(getData);
  };
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8080/todos/" + id)
      .then(() => navigate(-1));

  };

  return (
    <div>
      <Row>
        <h3>{todo.title}</h3>
      </Row>
      <Row>
        <Col>
          <p> Status : {todo.complete ? "Completed" : "Pending"}</p>
        </Col>
        <Col offset={2}>
          <Button size="small" onClick={() => handleToggle(todo.id)}>
            Toggle
          </Button>
        </Col>
      </Row>
      <Row>
        <Button size="small" type="danger" onClick={()=> handleDelete(todo.id)}>
          Delete
        </Button>
      </Row>
    </div>
  );
}

export default Todo;
