import "./App.css";
import { Layout } from "antd";
import Todos from "./components/Todos";
import { Content, Header } from "antd/lib/layout/layout";
import { Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";
import Login from "./components/Login";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ backgroundColor: "white" }}>
          <h1>Todo App</h1>
        </Header>
        <Content>
          <Routes>
            <Route
              path="/"
              element={
                <Protected>
                  <Todos />
                </Protected>
              }
            />
            <Route path="/todos/:id" element={<Todo />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
