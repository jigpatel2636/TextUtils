import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=> {
        setAlert(null)
      },1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#05245ab8'
      showAlert("Dark mode is enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is enabled", "success")
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About US" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route  exact path="/"  element={<TextForm heading="Enter Your Text" mode={mode} showAlert={showAlert} />}>
          </Route>
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
