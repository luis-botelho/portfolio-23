import Header from "./components/Banner/Header";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Banner>
        <Header />
      </Banner>
    </Container>
  );
}

export default App;
const Container = styled.div``;
const Banner = styled.div`background: linear-gradient(159deg,rgb(45,45,58)0%,rgb(43,43,53)100%);`;
  
