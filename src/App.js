import "./App.css";
import HomePage from "./Pages/Homepage";
import NavBar from "./Pages/NavBar";
import Information from "./Pages/Information";
import ERR from "./Pages/ERR";
import ChangeLog from "./Pages/ChangeLog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="min-h-screen text-gray-50">
        {/* <div>
          <NavBar title="Home" path="/" />
        </div> */}
        {/* <div className="font-bold m-2 p-4">
          <HomePage />
        </div> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <NavBar path="/" />
                <HomePage />
              </>
            }
          />
          <Route
            path="/Information"
            element={
              <>
                <NavBar path="Home" center="Information"/>
                <Information />
              </>
            }
          />
          <Route
            path="/Changelog"
            element={
              <>
                <NavBar path="Home" center="Changelog"/>
                <ChangeLog />
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
