import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import QuoteForm from "./QuoteForm";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<QuoteForm />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
