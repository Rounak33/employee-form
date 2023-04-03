import './App.css';
import Navbar from './components/Navbar';
import {Router, Route, Routes} from 'react-router-dom'
import SignUp from './components/SignUp';
import Profile from './components/Profile';
function App() {
  return (
    <div className="bg-gray-600 h-screen w-screen  text-slate-90">
      <Navbar />
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;