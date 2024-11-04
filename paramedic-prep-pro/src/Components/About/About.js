import React from 'react';
import logo from '../../Assets/images/logo.jpg';
import founder from '../../Assets/images/ME.png';
import '../../Assets/styles/styles.css';
import team1 from '../../Assets/images/team1.jpg';
import team2 from '../../Assets/images/team2.jpg';
import team3 from '../../Assets/images/team3.jpg';

const AboutUs = () => {
    return (
        <>
            <div className='about-container'>
                <div className='about-section'>
                    <h2 className='tagline-2'>Our team</h2>
                    <section className="">
                        <div className='images-grid'>
                            <div className='images-items'><img src={team1} width='350px' height='350px' alt='fuzzy' /></div>
                            <div className='images-items'> <img src={team2} width='350px' height='350px' alt='fuzzy' /></div>
                            <div className='images-items'><img src={team3} width='350px' height='350px' alt='fuzzy' /></div>
                        </div>
                        <div className='team'>
                            <div className='tagline'>
                                <p>
                                    At <bold>Paramedic Prep-Pro</bold>, we are a team of passionate medical professionals, educators, and field experts committed to 
                                    empowering the next generation of paramedics. With years of real-world experience in emergency medicine, 
                                    our diverse team brings hands-on knowledge and insightful expertise to every resource we create. 
                                    We're dedicated to delivering top-tier training that reflects the ever-evolving challenges of the paramedic profession. 
                                    Together, we strive to equip you with the tools and confidence to save lives and succeed in the field.
                                </p>
                            </div>
                        </div>
                    </section>
                        <div className='aboutus'>
                        <div className='log'><img src={logo} alt='' /></div>
                            <h1 className='title'>Together we Achieve!</h1>
                        </div>
                        <div className='tagline'>
                            <p>
                                We study our clients interest from all 
                                posible ways so, we can asure 
                                that we get all points to <span className='highlight'>deliver</span> our 
                                service and work. Our Team is experienced 
                                and foccussed to <span className='highlight'>Prep</span> with
                                You.
                            </p>
                        </div>

                        <h1 className='tagline-2'>Meet Our Founder</h1>
                        <div className='web-intro'>
                            
                            <img className='web-intro-grid' src={founder} alt='founder' style={{ width: '350px' }} />
                            <p className='web-intro-grid'>
                            My name is <span className='highlight'>Natalie Wanjiru Wanjiku</span>, and I am the proud founder of Paramedic Prep-Pro. As a dedicated Paramedic and Software Engineer, 
                            I have witnessed firsthand the critical need for comprehensive, accessible, and effective paramedic training.
                            </p>

                            <p className='web-intro-grid'>
                                <h2 className='tagline-2'>Our Mission</h2>
                            Paramedic Prep-Pro was born out of my passion for saving lives and my commitment to <span className='highlight'>leveraging technology to enhance medical education</span>. 
                            Our mission is to empower aspiring paramedics and healthcare professionals with the knowledge and skills they need to excel in their field. 
                            Through innovative learning tools, practical simulations, 
                            and community support, we strive to make quality paramedic training available to <span className='highlight'>everyone, everywhere.</span>
                            </p>

                            <p className='web-intro-grid'>
                                <h2 className='tagline-2'>Our Vision</h2>
                            At Paramedic Prep-Pro, we believe that every life matters and that well-prepared paramedics can make a difference in critical moments. 
                            Join us on this journey to elevate emergency medical education and improve patient care worldwide.
                            </p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;