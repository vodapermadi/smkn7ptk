import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import ContentBlog from "./component/ContentBlog";
import Home from "./component/Home";


function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/smkn7ptk" element={<Home/>} />
            <Route path="/profil" element={<ContentBlog/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
