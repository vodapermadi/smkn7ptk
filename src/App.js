import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import ContentBlog from "./component/ContentBlog";
import Home from "./component/Home";
import Rpl from "./component/jurusan/Rpl";
import Tkj from "./component/jurusan/Tkj";
import Mm from "./component/jurusan/Mm";
import Ak from "./component/jurusan/Ak";
import Tlas from "./component/jurusan/Tlas";
import Tbsm from "./component/jurusan/Tbsm";


function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/smkn7ptk" element={<Home/>} />
            <Route path="/profil/smkn7ptk" element={<ContentBlog/>} />
            <Route path="/jurusan/rpl" element={<Rpl/>}/>
            <Route path="/jurusan/tkj" element={<Tkj/>}/>
            <Route path="/jurusan/mm" element={<Mm/>}/>
            <Route path="/jurusan/ak" element={<Ak/>}/>
            <Route path="/jurusan/tlas" element={<Tlas/>}/>
            <Route path="/jurusan/tbsm" element={<Tbsm/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
