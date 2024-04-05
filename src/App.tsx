import "./App.css";

import NavBar from "./components/UI/navbar";
import Carousel from "./components/Carousel";

function App() {

  return (
    <>
      <NavBar />
      {/* className="container" */}
      <main >
          <Carousel  />
      </main>
    </>
  );
}

export default App;
