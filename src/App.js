import TopBar from './comp/topbar/TopBar';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Romance from './pages/romance/Romance';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Comedy from './pages/comedy/Comedy';
import Ani from './pages/animation/Ani';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const user = false;
  return (
         <BrowserRouter>
           <TopBar />
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path='/animation/*' element={<Ani />} />
               <Route path="/detail/*" element={<Detail />} />
               <Route path='/comedy/*' element={<Comedy />} />     
               <Route path="/romance/*" element={<Romance />} />
               <Route path="/settings" element={user ? <Home /> : <Settings />} />     
               <Route path="/login" element={user ? <Home /> : <Login /> } />     
           </Routes>
         </BrowserRouter>
  );
}

export default App;