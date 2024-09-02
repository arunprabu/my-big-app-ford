import { Button, Container } from "@mui/material";
import { useCounterStore } from "../store/useCounterStore";

const CounterPage = () => {
  const { count, increment, decrement } = useCounterStore();
  console.log(count);

  return (
    <Container>
      <h1>Counter Page</h1>
      <p>Counter: {count}</p>
      <Button variant="contained" color="success" onClick={increment}>
        Increment
      </Button>
      <Button variant="contained" color="error" onClick={decrement}>
        Decrement
      </Button>
      <Button variant="contained" color="warning" >
        RESET
      </Button>
    </Container>
  );
};

export default CounterPage;
