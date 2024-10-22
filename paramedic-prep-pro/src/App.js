import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavigationBar/NavBar'; 
import Home from './Components/Home/Home';
// import About from './Components/About/About';
// import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <>
        <NavBar />
        < Home/>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<><h2>PAGE NOT FOUND</h2><h2>CAUSE...</h2><h1>I'm Slim Shady, yes I'm the real Shady, All you other slim Shadys are just immitating, SO won't the real Slim Shady please stand up!!</h1></>} />
        </Routes>
      </Router> */}
    </>
  );
};
export default App;