import "./App.css";
import HomePage from "./Components/Homepage";
import NavBar from "./Components/NavBar";
import Information from "./Components/Information";
import ERR from "./Components/ERR";
import Cuyuniversity from "./Components/Cuyuniversity";
import ChangeLog from "./Components/ChangeLog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Admin from "./Components/Admin";

AOS.init();

function App() {
  return (
    <Router>
      <div className="min-h-screen text-gray-50">
        <div>
          <NavBar />
        </div>
        {/* <div className="font-bold m-2 p-4">
          <HomePage />
        </div> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <HomePage />
              </>
            }
          />
          <Route
            path="/Information"
            element={
              <>
                <Information />
              </>
            }
          />
          <Route
            path="/Changelog"
            element={
              <>
                <ChangeLog />
              </>
            }
          />
          <Route
            exact
            path="/Admin"
            element={
              <>
                <Admin />
              </>
            }
          />
          <Route
            exact
            path="/CuyUniversity/"
            element={
              <>
                <Cuyuniversity />
              </>
            }
          />
          <Route path="*" element={<ERR />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
