import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactsPage from "./pages/ContactsPage";
import Home from "./pages/Home";
import AddContactPage from "./pages/AddContactPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/add-contact" element={<AddContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
