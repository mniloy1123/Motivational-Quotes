import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import QuoteForm from "./QuoteForm";

function App() {
  const initialQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
  const [quotes, setQuotes] = useState(initialQuotes);

  const handleNewQuote = (quote) => {
    const updatedQuotes = [...quotes, quote];
    setQuotes(updatedQuotes);
    localStorage.setItem("quotes", JSON.stringify(updatedQuotes));
  };

  useEffect(() => {
    const savedQuotes = JSON.parse(localStorage.getItem("quotes"));
    if (savedQuotes) {
      setQuotes(savedQuotes);
    }
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home quotes={quotes} />} />
          <Route
            path="/input"
            element={<QuoteForm onNewQuote={handleNewQuote} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
