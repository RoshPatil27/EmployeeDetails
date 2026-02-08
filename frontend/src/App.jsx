import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./Components/AddStudent";
import UpdateStudent from "./Components/UpdateStudent";
import StudentsTable from "./Components/StudentsTable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentsTable />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/update" element={<UpdateStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
