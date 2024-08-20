import {Routes,Route} from "react-router-dom";
import Loyout from "./Loyout/Loyout";
import Home from "./pages/Home/Home";
import "./styles/style.scss"
import About from "./pages/About/About";
import Future from "./pages/Future/Future";
import Shop from "./pages/Shop/Shop";
import All from "./pages/All/All";
import Skin from "./pages/Skin/Skin";
import Sets from "./pages/Sets/Sets";
import Lip from "./pages/Lip/Lip";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Cart from "./pages/Cart/Cart";
import Search from "./pages/Search/Search";
import More from "./pages/More/More";
import OneLip from "./pages/OneLip/OneLip";
import OneSkin from "./pages/OneSkin/OneSkin";
import OneSets from "./pages/OneSets/OneSets";

function App() {
  return (
    <Routes>
        <Route path={"/"} element={<Loyout/>}>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/future"} element={<Future/>}/>
            <Route path={"/shop"} element={<Shop/>}/>
            <Route path={"/all"} element={<All/>}/>
            <Route path={"/skin"} element={<Skin/>}/>
            <Route path={"/sets"} element={<Sets/>}/>
            <Route path={"/lip"} element={<Lip/>}/>
            <Route path={"/cart"} element={<Cart/>}/>
            <Route path={"/search"} element={<Search/>}/>
            <Route path={"/more/:id"} element={<More/>}/>
            <Route path={"/OneLip/:id"} element={<OneLip/>}/>
            <Route path={"/OneSkin/:id"} element={<OneSkin/>}/>
            <Route path={"/OneSets/:id"} element={<OneSets/>}/>
        </Route>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/register"} element={<Register/>}/>
    </Routes>
  );
}

export default App;
