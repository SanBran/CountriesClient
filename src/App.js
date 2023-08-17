import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./views/LandingPage/LandingPage";
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Form from "./views/Form/Form";
import Detail from "./views/Detail/Details";

function App() {
  const { pathname } = useLocation(1);

  const [currentPage, setCurrentPage] = useState(1);
  const [active, setActive] = useState(1);

  return (
    <div className="App">
      {pathname !== "/" && (
        <NavBar setCurrentPage={setCurrentPage} setActive={setActive} />
      )}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <Home
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              active={active}
              setActive={setActive}
            />
          }
        />
        <Route path="/form" element={<Form />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
