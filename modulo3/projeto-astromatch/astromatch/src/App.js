import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import { MainContainer } from "./Styled";
import BottomBar from "./Components/BottomBar/BottomBar";

function App() {
  return (
    <MainContainer>
      <Header />
      <Card />
      <BottomBar />
    </MainContainer>
  );
}

export default App;
