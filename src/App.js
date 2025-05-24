import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { FlashScreen } from './components/FlashScreen';
import { SignUp } from './components/Auth/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FlashScreen />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<SignUp />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
