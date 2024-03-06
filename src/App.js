import {BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Getuser from "./axios/Getuser";
import Adduser from "./axios/Adduser";
import Update from "./axios/Update";

function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Getuser />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/update/:id" element={<Update/>} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
