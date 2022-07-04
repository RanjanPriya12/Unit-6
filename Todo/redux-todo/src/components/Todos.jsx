import { Row } from "antd";
import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { nanoid } from "nanoid";
import axios from "axios";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { useEffect } from "react";
import { addTodos } from "../Redux/Todo/actions";
const TodosWrapper = styled.div`
  .row-todo {
    margin-top: 5px;
    a {
      height: 30px;
      padding: 4px;
      display: block;
      text-align: center;
      color: black;
      border-radius: 7px;
    }
  }
  .row-todo > div:hover {
    background-color: #c6e7c5;
    border-radius: 7px;
  }
`;
function Todos() {
  const todos = useSelector((store) => store.todosStore.todos);
  const dispatch = useDispatch();

  const getData = () => {
    axios.get("http://localhost:8080/todos")
    .then(({data}) => {
      let todos = data;
      // console.log(todos);
      dispatch(addTodos(todos));
    })
    .catch(error => console.log(error));
  }

  useEffect(() =>{
    getData();
  },[])
  return (
    <TodosWrapper>
      <Row justify="center" className="rows">
        <AddTodo getData={getData} />
      </Row>
      {todos.map((todo) => (
        <Row justify="center" className="row-todo" key={nanoid(3)}>
          <TodoItem todo={todo} />
        </Row>
      ))}
    </TodosWrapper>
  );
}

export default Todos;
