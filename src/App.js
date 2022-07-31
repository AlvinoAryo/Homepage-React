import "./App.css";
import HomePage from "./Components/Homepage";
import NavBar from "./Components/NavBar";
import Information from "./Components/Information";
import ERR from "./Components/ERR";
import ChangeLog from "./Components/ChangeLog";
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
                <NavBar path="Home" changeLogHidden />
                <Information />
              </>
            }
          />
          <Route
            path="/Changelog"
            element={
              <>
                <NavBar path="Home" infoHidden />
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
