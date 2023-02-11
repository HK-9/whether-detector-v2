import './App.css';
import { BrowserRouter,Route,Routes,Outlet,Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';

function App() {
  return (
    <div className="app">
       <BrowserRouter>  
       <Routes>
          <Route path ='/' element={<ProtectedOutlet/>}>
            <Route path="" element={<Home/>}/>
            </Route>
          <Route path ='/register' element={<Register/>}/>
          <Route path ='/login' element={<Login/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export function ProtectedOutlet(props){
  const user = localStorage.getItem('user');
  return user ? <Outlet/> :  <Navigate to = '/login'/> 
}
export default App;
