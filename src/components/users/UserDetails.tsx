import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
  Container,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import styled from "@emotion/styled";

const StyledContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const fetchUserDetails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const UserDetails = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["fetchUserDetails"],
    queryFn: fetchUserDetails
  });

  if (isLoading) {
    return (
      <StyledContainer>
        <CircularProgress />
      </StyledContainer>
    );
  }

  if (isError) {
    return (
      <StyledContainer>
        <Alert severity="error">
          An error has occurred: {(error as Error).message}
        </Alert>
      </StyledContainer>
    );
  }

  return (
    <Container>
      <div style={{ width: "100%" }}>
        <Typography variant="h1">User Details</Typography>
        <Card variant="outlined">
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              User Id: {data.id}
            </Typography>
            <Typography variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body2">Phone: {data.phone}</Typography>
            <Typography variant="body2">Email: {data.email}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained">
              Edit
            </Button>
            <Button size="small" variant="outlined" color="error">
              Delete
            </Button>
          </CardActions>
        </Card>
      </div>
    </Container>
  );
};

export default UserDetails;
