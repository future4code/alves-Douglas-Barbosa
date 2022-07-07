import { useEffect, useState } from "react";
import Home from "./Components/Pages/Home/Home";
import Matches from "./Components/Pages/Matches/Matches";

function App() {
  const [page, setPage] = useState("home")

  // Conditional Rendering and setPages

  const renderPage = () => {
    if (page === "home") {
      return <Home 
      setPageToMatches={setPageToMatches}
      page={page}/>
    } else if (page === "matches") {
      return <Matches
      home={setPageToHome} />
    }
  }

  const setPageToMatches = () => {
    setPage("matches")
  }

  const setPageToHome = () => {
    setPage("home")
  }

  //
  
  return (
    <>
      {renderPage()}
    </>
  );
}

export default App;
