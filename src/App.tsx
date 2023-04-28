import { Container } from "@mui/material";
import Homepage from "./pages/Homepage";

function App() {


  return (
    <>
      <Container
        sx={{
          maxWidth: "2100px !important",
          paddingY: "25px !important",
          paddingX: "70px !important",
        }}
      >
      <Homepage/>
      </Container>
    </>
  );
}

export default App;
