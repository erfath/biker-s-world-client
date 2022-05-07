import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import ManageItem from './Pages/ManageItem/ManageItem';
import AddItem from './Pages/AddItem/AddItem';
import ItemDetails from './Pages/ItemDetails/ItemDetails';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register'
import ItemInventory from './Pages/ItemInventory/ItemInventory/ItemInventory';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='item/:itemId' element={
          <RequireAuth>
            <ItemDetails></ItemDetails>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={<ManageItem></ManageItem>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <ItemInventory></ItemInventory>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
