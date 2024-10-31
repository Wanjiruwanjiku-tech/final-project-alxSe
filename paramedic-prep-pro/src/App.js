import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Assets/styles/styles.css';
import logo3 from './Assets/images/logo3.jpg'
import NavBar from './Components/NavigationBar/NavBar'; 
import Home from './Components/Home/Home';
import Topics from './Components/TopicList/Topics';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Cardiac from './Components/Cardiac/Cardiac';
import CardiacNextPage from './Components/Cardiac/CardiacSub';
import Login from './Components/Login/Login';
import Quiz from './Components/Quiz/QuizList';
import CardiacQuiz from './Components/Quiz/CardiacQuiz';
import BurnQuiz from './Components/Quiz/BurnQuiz';
import DiabetesQuiz from './Components/Quiz/DiabetesQuiz';
import PharmaQuiz from './Components/Quiz/PharmaQuiz';
import PtQuiz from './Components/Quiz/PtAssQuiz';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';


const App = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/topics" element={<Topics />} />
          <Route path='/cardiac' element={<Cardiac />}/>
          <Route path='/quiz' element={<Quiz />}/>
          <Route path='/cardiac-quiz' element={<CardiacQuiz />}/>
          <Route path='/cardiac-next-page' element={<CardiacNextPage />}/>
          <Route path='/burns-quiz' element={<BurnQuiz />}/>
          <Route path='/diabetes-quiz' element={<DiabetesQuiz />}/>
          <Route path='/genpharma-quiz' element={<PharmaQuiz />}/>
          <Route path='/patient-quiz' element={<PtQuiz />}/>
          <Route path="*" element={<><h2>PAGE NOT FOUND</h2><h2>CAUSE...</h2><h1>I'm Slim Shady, yes I'm the real Shady, All you other slim Shadys are just immitating, SO won't the real Slim Shady please stand up!!</h1></>} />
        </Routes>
        <div>
          <hr/>
        <div className='logo'><img src={logo3} alt='' /></div>
        <div className='tagline-2'><h3>WE HELP ACHIEVE THE <span className='highlight'>BIGGEST</span> GOALS</h3></div>
        </div>
      <Footer />
    </>
  );
};
export default App;