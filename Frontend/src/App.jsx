import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import QuoteForm from "./QuoteForm";

function App() {
  const [quotes, setQuotes] = useState([])

  const handleNewQuote = (quote) => {
      // console.log("Adding new quote:", quote);
      setQuotes(prevQuotes => [...prevQuotes, quote]);
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home quotes={quotes} />} />
          <Route path="/input" element={<QuoteForm onNewQuote={handleNewQuote} />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
