import React from "react";
import "./App.css";
import { AppRouting } from "./app.routing";
import { ToastContainer } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <AppRouting></AppRouting>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
