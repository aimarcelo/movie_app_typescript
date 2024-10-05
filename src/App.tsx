import Navbar from "./components/Navbar/Index";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Details from "./pages/Details";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movies"
            element={
              <h1>
                <Movies />
              </h1>
            }
          />
          <Route
            path="/moviedetails/:id"
            element={
              <h1>
                <Details />
              </h1>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
