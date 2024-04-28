import Header from "./components/Header"
import Main from "./views/Main"

import {Box, Container} from "@mui/material"

function App() {

  return (
    <Box className="App" sx={sxApp}>
      <Header />
      <main>
        <Container>
          <Main />
        </Container>
      </main>
    </Box>
  );
}

const sxApp = (theme) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
})

export default App
