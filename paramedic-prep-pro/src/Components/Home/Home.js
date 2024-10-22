import React from 'react';
import '../../Assets/styles/styles.css';
import clock from '../../Assets/images/clock.png';
import hero1 from '../../Assets/images/hero1.jpg';
import hero2 from '../../Assets/images/hero2.jpg';
import hero3 from '../../Assets/images/hero3.jpg';
import team1 from '../../Assets/images/team1.jpg';
import student2 from '../../Assets/images/student2.jpg';
import mentor1 from '../../Assets/images/mentor1.jpg';
import logo from '../../Assets/images/logo4.jpg';
import logo2 from '../../Assets/images/logo.jpg';



const Home = () => {

    return (
        <>
           <div className='hero-section'>
                    <div className='hero-text'>
                        <h1><span className='highlight'>Prep</span> on your Schedule. <img src={clock} alt='clock' width={20} id='clock' /></h1>
                        <button className='get-started-button'>Start Learning</button>
                    </div>
            </div>
                    <div className='web-intro'>
                        <div  className='web-intro-grid'>
        
                            <p>
                                Welcome to Paramedic Prep-Pro, your all-in-one <span className='highlight'>learning platform</span> designed for paramedic students and 
                                professionals. With expertly curated content, practical guides, and interactive tools, 
                                we provide everything you need to <span className='highlight'>Prepare</span> for real-life emergency scenarios. 
                                From foundational knowledge to advanced life support techniques, we’re here to make sure you're always ready to 
                                respond when it matters most.
                            </p>
                        </div>
                        <div className='web-intro-grid'><img src={student2} alt='mentor2'  width={350} /></div>
                    </div>
                    <h2 className='resources-header'>Explore Our resources</h2>
                    <section>
                        <div className='resources-grid'>
                            <img src={team1} width={550} alt='fuzzy' />
                            <div className='resources-items'>
                                <p>
                                    Your journey to becoming an exceptional paramedic starts here! Our Resources Hub offers a wealth of guides, videos, case studies, and expert articles, all designed to give you the in-depth knowledge and practical tools you need in the field. 
                                    Whether you're preparing for exams or honing your emergency response skills, you'll find up-to-date protocols, tips from seasoned paramedics, and content tailored to your learning style. 
                                    Stay ahead with Paramedic Prep-Pro Resources—your go-to destination for comprehensive, real-world paramedic education.
                                </p>
                            </div>
                        </div>
                    </section>
                    
                    <section>
                        <div className='books'>
                            <p className='book-state'>
                                Master the skills, knowledge, and confidence you need to excel in the field of emergency medicine with our expertly crafted 
                                Paramedic Prep-Pro books. Written by seasoned paramedics and educators, our books deliver clear, concise, and comprehensive content 
                                tailored to real-world scenarios. Whether you're prepping for certification or looking to deepen your expertise, 
                                each book is packed with practical insights, step-by-step guides, 
                                and the latest medical standards to ensure you’re always prepared when it matters most.
                            </p>
                            <h4 className='h4-center'>Start your journey to becoming a Paramedic-Pro get your copy <br/>Today!</h4>
                            <div className='books-grid'>
                                <div className='each-book'> <img src={logo} alt='logo' width={250}/><h5>Critical Care Book One</h5>
                                    <button>Get Book</button>
                                </div>
                                <div className='each-book'> <img src={logo2} alt='logo' width={250}/><h5>Critical Care Book One</h5>
                                    <button>Get Book</button>
                                </div>
                            <div className='each-book'> <img src={logo} alt='logo' width={250} /><h5>Critical Care Book One</h5>
                                    <button>Get Book</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className='mentors'>
                        <div className='mentor-avatars'>
                                <img src={hero1} alt='mentor1' />
                                <img src={student2} alt='mentor2' />
                                <img src={mentor1} alt='mentor3' />
                                <img src={hero2} alt='mentor4' />
                                <img src={hero3} alt='mentor5' />
                        </div>
                    </div>
            <div className='tagline-2'><h3>WE HELP ACHIEVE THE <span className='highlight'>BIGGEST</span> GOALS</h3></div>
        </>
    )
};

export default Home;