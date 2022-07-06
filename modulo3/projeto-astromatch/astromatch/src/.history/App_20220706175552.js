import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import { MainContainer } from "./Styled";
import BottomBar from "./Components/BottomBar/BottomBar";
import HomeBottomHr from "./Components/HomeBottomHr/HomeBottomHr";

function App() {
  // const [person, setPerson] = useState([])

  // useEffect(() => {
  //   axios
  //     .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglas/person')
  //     .then((res) => setPerson(res.data.profile))
  //     .catch((err) => alert(err.response))
  // }, []);

  // const getNewPerson = () => {
  //   axios
  //     .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglas/person')
  //     .then((res) => setPerson(res.data.profile))
  //     .catch((err) => alert(err.response))
  // }

  return (
    <MainContainer>
      <Header />
      <Card
        id={person.id}
        name={person.name}
        age={person.age}
        bio={person.bio}
        photo={person.photo} />
      <BottomBar 
      id={person.id}
      getNewPerson={getNewPerson}/>
      <HomeBottomHr />
    </MainContainer>
  );
}

export default App;
