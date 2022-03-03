import React from "react";
import Bikes from "./pages/bikes"
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import { BrowserRouter,Route,Link,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter >
        <Routes>
          <Route path="/" element={<SignIn/>} />  
          <Route path="/bikes" element={<Bikes/> } />
          <Route path="/signup"  element={<SignUp/>} />
        </Routes>
      </BrowserRouter >
        
    </div>
  );
}

export default App;
