import "./App.css";
import { useState } from "react";
import Container from "@mui/material/Container";
import SearchBar from "./components/searchBar";
import Productlist from "./components/productList";

function App() {
  const [queryString, setQueryString] = useState<string>("");

  return (
    <div className="App">
      <Container maxWidth="lg">
        <br />
        <SearchBar setQueryString={setQueryString} />
        <br />
        <Productlist queryString={queryString} />
      </Container>
    </div>
  );
}

export default App;
