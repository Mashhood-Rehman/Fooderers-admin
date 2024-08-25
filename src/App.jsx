import React from 'react';
import Sidebar from './components/Sidebar';
import Orders from './components/Orders';
import Products from './components/Products';
import Users from './components/Users';
import { Route , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddItem from './components/AddItem';

const App = () => {
  const PagePath =  window.location.href
console.log(PagePath)
  return (
    <>
    {PagePath == "http://localhost:5173/AddItems" ? <Routes>
      <Route path='/AddItems' element= {<AddItem/>} />

    </Routes> :
    
    <div>

    <Navbar/>
    <div className="flex lg:-mt-[4%]">
        <Sidebar />
        <div className="flex-1">
        <Routes>
            <Route path="/" element={<Users/>} />
            <Route path="/items" element={<Products/>} />
            <Route path="/Orders" element={<Orders/>} />
    </Routes>
    </div>
        </div>
      </div>
    } 
    </>
  );
};

export default App;
