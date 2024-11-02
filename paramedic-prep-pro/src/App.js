import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Assets/styles/styles.css';
import './App.css'
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
import AirWay from './Components/Airway/Airway';
import Introduction from './Components/Airway/Intro';
import BasicAdjuncts from './Components/Airway/Basics';
import Advanced from './Components/Airway/Advanced';
import AirwayPharma from './Components/Airway/APharma';
import AirwaySpecialPopulation from './Components/Airway/SpecialPops';
import AirwayMonitoringTools from './Components/Airway/MonTools';
import AirwayComplications from './Components/Airway/AComps';


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
          <Route path='/airway' element={<AirWay />} />
          <Route path='/introduction-to-airway-management' element={<Introduction />} />
          <Route path='/basic-airway-techniques' element={<BasicAdjuncts />} />
          <Route path='/advanced-airway-techniques' element={<Advanced />} />
          <Route path='/airway-management-in-special-populations' element={<AirwaySpecialPopulation />}/>
          <Route path='/pharmacology-related-to-airway-management' element={<AirwayPharma />} />
          <Route path='/assessment-and-monitoring-tools' element={<AirwayMonitoringTools />} />
          <Route path='/complications-of-airway-management' element={<AirwayComplications />} />
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