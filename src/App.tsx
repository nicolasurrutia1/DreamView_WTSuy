import "./App.css";

import NavBar from "./components/UI/navbar";
import Carousel from "./components/Carousel";
import Cartelera from "./components/Cartelera";

function App() {

  return (
    <>
      <NavBar />
      {/* className="container" */}
      <main >
          <Carousel  />
          <Cartelera  />
      </main>
    </>
  );
}

export default App;
