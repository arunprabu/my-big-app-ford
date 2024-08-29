/** @jsxImportSource @emotion/react */
import { Alert, Button, Container, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
// npm i react-hook-form

const FormContainer = styled(Container)`
  margin-top: 40px;
  max-width: 600px;
  width: 50%;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled(Typography)`
  margin-bottom: 20px;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const SubmitButton = styled(Button)`
  display: block;
  width: 100%;
`;

interface IFormInputs {
  name: string;
  phone: number;
  email: string;
}

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();
  const [isSaved, setIsSaved] = useState(false); // positive state

  const onSubmit = (formData: IFormInputs) => {
    // form data comes here
    console.log(formData);

    // Let's submit form data to the backend
    // 1. What is the backend api url? https://jsonplaceholder.typicode.com/users
    // 2. What is the HTTP method? POST
    // 3. What is the REST API Client? npm i axios

    axios
      .post("https://jsonplaceholder.typicode.com/users", formData)
      .then((res: any) => {
        // successful response
        console.log(res.data);
        setIsSaved(true); // set isSaved state to true
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("It is over");
      });
  };

  return (
    <FormContainer>
      <Title variant="h4">Create User</Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </FormGroup>

        <FormGroup>
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            {...register("phone", { required: "Phone is required" })}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
        </FormGroup>

        <FormGroup>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </FormGroup>

        <SubmitButton
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Create User
        </SubmitButton>

        {isSaved && (
          <Alert severity="success">User created successfully!</Alert>
        )}
      </form>
    </FormContainer>
  );
};

export default CreateUser;
