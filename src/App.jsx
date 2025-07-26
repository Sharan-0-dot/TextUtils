import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About"
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode == 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm heading={"Enter you text to Modify"} mode={mode}/>} ></Route>
        <Route exact path="/about" element={<About mode={mode} />}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;