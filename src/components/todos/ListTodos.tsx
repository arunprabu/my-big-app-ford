import { Box, List, ListItem, ListItemText } from "@mui/material";
import { useTodosStore } from "../../store/useTodoStore";
import { useEffect } from "react";

const ListTodos = () => {
  const { getTodos, todoList, isLoading, isError } = useTodosStore();
  console.log(todoList);

  useEffect(() => {
    getTodos();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading todos.</p>;
  }

  return (
    <Box>
      <List dense={true}>
        { todoList.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText primary={todo.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListTodos;
