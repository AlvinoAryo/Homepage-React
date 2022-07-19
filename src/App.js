import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/Homepage";
import NavBar from "./Pages/NavBar";
import Footer from "./Pages/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen text-gray-50">
        <div>
          <NavBar title="VinoWeb" />
        </div>
        <div className="font-bold m-2 p-4">
          <HomePage />
        </div>
        <div className="sticky top-[100vh]">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
