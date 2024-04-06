import "./App.css";

import NavBar from "./components/UI/navbar";
import Carousel from "./components/Carousel";
import Cartelera from "./components/Cartelera";
import MovieReview from "./components/MovieReview";

function App() {

  return (
    <>
      <NavBar />
      <main >
          <Carousel  />
          <Cartelera  />
          <MovieReview  />
      </main>
    </>
  );
}

export default App;
