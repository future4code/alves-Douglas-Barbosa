import { useState } from "react";
import React from "react";
import Home from "./Components/Pages/Home/Home";
import Matches from "./Components/Pages/Matches/Matches";

function App() {
  const [page, setPage] = useState("home")

  // Conditional Rendering and setPages

  const renderPage = () => {
    if (page === "home") {
      return <Home
        page={page}
        setPageTo={setPageTo} />
    } else if (page === "matches") {
      return <Matches
        setPageTo={setPageTo} />
    }
  }

  const setPageTo = (choice) => {
    setPage(choice)
  }
  
  //

  return (
    <>
      {renderPage()}
    </>
  );
}

export default App;
