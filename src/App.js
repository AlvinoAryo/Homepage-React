import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/Homepage";
import NavBar from "./Pages/NavBar";

function App() {
  return (
    <>
      <div className="min-h-screen text-gray-50">
        <div>
          <NavBar title="VinoWeb"/>
        </div>
        <div className="font-bold m-2 p-4">
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default App;
