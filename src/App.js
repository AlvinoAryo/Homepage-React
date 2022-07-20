import "./App.css";
import HomePage from "./Pages/Homepage";
import NavBar from "./Pages/NavBar";
import Information from "./Pages/Information";
import ERR from "./Pages/ERR";
import { BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen text-gray-50">
        <div>
          <NavBar title="VinoWeb" />
        </div>
        {/* <div className="font-bold m-2 p-4">
          <HomePage />
        </div> */}
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path="/Information " element={<Information />} />
          <Route path="*" element={<ERR />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
