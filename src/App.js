import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Home } from "./Pages/Home/Home";
import { TopRated } from "./Pages/TopRated/TopRated";
import { Upcoming } from "./Pages/Upcoming/Upcoming";
import { Info } from "./Pages/Info/Info";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home/:id" element={<Info/>} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </div>
  );
}

export default App;
