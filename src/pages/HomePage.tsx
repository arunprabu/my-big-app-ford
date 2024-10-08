import { Box, Typography } from "@mui/material";
import styled from '@emotion/styled'
import { useCounterStore } from "../store/useCounterStore";

// styled component using @emotion [RECOMMENDED]
const StyledBox = styled(Box)`
  padding: 80px;
  color: red;
`;

// Functional component with Arrow Function
const HomePage = () => {
  const { count } = useCounterStore();
  console.log(count);

  // must return JSX
  return (
    <StyledBox>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        laboriosam labore, consectetur eaque veniam at sunt corporis tempore
      </p>
      <Typography variant="h1">Home Page</Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        laboriosam labore, consectetur eaque veniam at sunt corporis tempore
        sint distinctio magni quisquam, repudiandae odio eveniet maiores
        repellendus incidunt, id aut.
      </Typography>
    </StyledBox>
  );
};

export default HomePage;
