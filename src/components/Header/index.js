import {Box, Container, Typography} from "@mui/material";

function Header() {

  return (
    <header className="App-header">
      <Container>
        <Box p={2}>
          <Typography color={"gray"}>header</Typography>
        </Box>
      </Container>
    </header>
  )
}

export default Header