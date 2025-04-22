import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Getdesign from './components/Getdesign';
import Adddesign from './components/Adddesign';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Notfound from './components/Notfound';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Makepayments from './components/Makepayments';
import TrendJournal from './components/Trendjournal';


function App() {
  return (
    <Router>
      <div className="App">
      {/* <header className="App-header">
        <h1>VORTEX</h1>
      </header> */}
      <Navbar/>
      {/* Routes */}
      <Routes>
        <Route path='/' element={<Getdesign/>}/>
        <Route path='/adddesign' element={<Adddesign/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/makepayment' element={<Makepayments/>}/>
        <Route path='trendjournal' element={<TrendJournal/>}/>
       <Route path='/*' element={<Notfound/>}/>
        </Routes>

       
    </div>
    </Router>
  );
}

export default App;
