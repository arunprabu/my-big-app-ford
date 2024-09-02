import { Box, Container } from "@mui/material";
import AddTodo from "../components/todos/AddTodo";
import ListTodos from "../components/todos/ListTodos";

const TodosPage = () => {
  return (
    <Container>
      <h1>Todos</h1>
      <Box
        sx={{
          marginBottom: 2,
          border: 1,
          borderColor: "divider",
          backgroundColor: "lightblue",
        }}
      >
        <h2>Add Todo</h2>
        <AddTodo />
      </Box>

      <Box
        sx={{
          marginBottom: 2,
          border: 1,
          borderColor: "divider",
          backgroundColor: "lightpink",
        }}
      >
        <h2>List Todos</h2>
        <ListTodos />
      </Box>
    </Container>
  );
};

export default TodosPage;
