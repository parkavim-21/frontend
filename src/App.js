
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import { Routes, Route } from "react-router-dom";
import Home from './home';
import GetList from './getlist';
import SingleGet from './singleget';
import Update from './update';
import Post from './post';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Post />} />
            <Route path="/get" element={<GetList />} />
            <Route path="/single-get/:id" element={<SingleGet />} />
            <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;