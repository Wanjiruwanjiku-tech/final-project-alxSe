import React from 'react';
import logo from '../../Assets/images/logo.jpg';
// import logo3 from '../../Assets/images/logo3.jpg';
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
                </div>
            </div>
        </>
    )
}

export default AboutUs;