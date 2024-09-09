import React, { useRef, useState } from "react";
import { Box, Button, TextField, Snackbar, Alert } from "@mui/material";
import { useTodosStore } from "../../store/useTodoStore";

const AddTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodo, isLoading, isError, isSuccess } = useTodosStore();

  // Snackbar state
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const handleAddTodo = async () => {
    if (inputRef.current) {
      const todoValue = inputRef.current.value;

      try {
        // Prepare the formData
        const formData = {
          title: todoValue,
          completed: false, // Assuming you want to add an incomplete todo
        };

        // Call the addTodos method from the store
        await addTodo(formData);

        if (isSuccess) {
          setSnackbarMessage("Todo added successfully!");
          setSnackbarSeverity("success");
        } else if (isError) {
          setSnackbarMessage("Error adding todo.");
          setSnackbarSeverity("error");
        }

        setOpenSnackbar(true);
      } catch (error) {
        console.error("Error adding todo:", error);
        setSnackbarMessage("Error adding todo.");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      }

      // Clear the input field after adding
      inputRef.current.value = "";
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box>
      <TextField placeholder="Add Todo" inputRef={inputRef} fullWidth />
      <Button
        variant="contained"
        onClick={handleAddTodo}
        disabled={isLoading} // Disable the button while loading
      >
        {isLoading ? "Adding..." : "Add Todo"}
      </Button>

      {/* Snackbar for displaying notifications */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddTodo;
