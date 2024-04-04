import "./App.css";

import NavBar from "./components/UI/navbar";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        {/* <h1>Hello</h1> */}
        <Carousel />
      </main>
    </>
  );
}

export default App;
