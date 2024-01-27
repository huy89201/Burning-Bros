import "./App.css";
import Container from "@mui/material/Container";
import SearchBar from "./components/searchBar";
import Productlist from "./components/productList";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <br />
        <SearchBar />
        <br />
        <Productlist />
      </Container>
    </div>
  );
}

export default App;
