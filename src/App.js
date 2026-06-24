import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import Login from './components/Login';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <HeaderBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;