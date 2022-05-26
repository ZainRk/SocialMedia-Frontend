import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <BrowserRouter>
          <Routes>
            <Route path="home" element={<Home/>}></Route>
            <Route path="profile/:id" element={<Profile/>}></Route>
            <Route path="profile" element={<Profile/>}></Route>
            <Route path="auth" element={<Auth/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
