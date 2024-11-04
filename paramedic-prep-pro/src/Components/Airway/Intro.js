import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../../Assets/styles/styles.css';
import upper from '../../Assets/images/upper.jpg';
import lower from '../../Assets/images/lower.webp';

const Introduction = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };


    return (
        <>
             <button className="loginbuttons"><Link to={'/airway'}>Back to Airway Management Topics</Link></button>
             
             <button className="loginbuttons"><Link to={'/topics'}>Back to Topics</Link></button>
             <button className="loginbuttons"><Link to={'/basic-airway-techniques'}>Next Topic - Basic Airway Techniques and Adjuncts</Link></button>

            <div className="intro-container">
                <div className="intro-header">
                    <h1>Introduction to Airway Management.</h1>
                </div>
                <div className="intro-body">
                    <p>
                        <strong>Airway Management</strong> is a critical skill in 
                        emergency medical care, especially for Paramedics. It Involves ensuring that a patient 
                        can breathe adequately and receive enough oxygen to maintain their vital functions.
                    </p>
                    <p>
                    Proper airway management can be the difference between life and death 
                    in emergency situations. 
                    </p>
                    <p>
                    Understanding the anatomy of the airway is foundational to mastering these techniques
                    </p> 
                </div>
                <div className="anatomy-section">
                    <h3>Aiway Anatomy </h3>
                    <p>
                    The airway is divided into two main sections: 
                    the <span className="highlight">Upper airway</span> and the <span className="highlight">Lower airway</span>.   
                    </p>
                    <div className="upper-airway">
                        <h4>Upper Airway</h4>
                        <div className="intro-image">
                        <button onClick={toggleVisibility} className="loginbuttons">
                            {isVisible ? 'Hide Image' : 'Show Upper Airway'}
                        </button>
                        {isVisible && <img src={upper} alt="Intro" />}
                    </div>
                        <p>
                            The primary function of the upper airway is to warm, filter, and humidify the air 
                            as it enters the lungs. 
                        </p>
                        <ol>
                            <li>Nose</li>
                            <p>The primary entry point for air, the nasal cavity warms, humidifies, and filters inhaled air.</p>
                            <li>Mouth</li>
                            <p>Serves as an alternative entry for air, especially during heavy breathing or when the nasal passage is blocked.</p>
                            <li>Pharynx</li>
                            <p> A muscular tube that connects the mouth and nasal cavity to the larynx and esophagus. It's divided into three parts:</p>
                            <ul>
                                <li>Nasopharynx - Located behind the Nasal Cavity.</li>
                                <li>Oropharynx -  Located behind the Oral Cavity.</li>
                                <li>Laryngopharynx - The area where the pharynx divides into the larynx (airway) and the esophagus (digestive tract).</li>
                            </ul>
                            <li>Epiglottis</li>
                            <p>A flap of tissue that prevents food and liquids from entering the trachea during swallowing.</p>
                            <></>
                        </ol>
                    </div>
                    <div className="lower-airway">
                        <h4>Lower Airway</h4>
                        <div className="intro-image">
                        <button onClick={toggleVisibility} className="loginbuttons">
                            {isVisible ? 'Hide Image' : 'Show Lower Airway'}
                        </button>
                        {isVisible && <img src={lower} alt="Intro" />}
                    </div>
                        <p>
                            This is the pathway through which air travels from the upper airway to the lungs.
                        </p>
                        <ol>
                            <li>Larynx</li>
                            <p>Also known as the voice box, the larynx is the entry point to the trachea.</p>
                            <li>Trachea/Windpipe</li>
                            <p>A tube that carries air from the larynx to the lungs.</p>
                            <li>Bronchi</li>
                            <p>Two tubes that branch off from the trachea and carry air to the left and right lungs.</p>
                            <li>Bronchioles</li>
                            <p>Smaller tubes that branch off from the bronchi and carry air to the alveoli.</p>
                            <li>Lungs and Alveoli</li>
                            <p>Small air sacs in the lungs where gas exchange occurs.</p>
                            <></>
                        </ol>
                    </div>
                            <div className="final">
                                <p>
                                "Understanding these structures is essential for recognizing and managing airway obstructions, providing effective ventilation, 
                                and ensuring the delivery of oxygen to the body’s vital organs.<br/> As a paramedic, 
                                mastering airway management is a cornerstone of your practice, 
                                and this knowledge will guide you in making informed, 
                                life-saving decisions in the field."
                                </p>
                            </div>
                </div>            
            </div>
            <button className="loginbuttons"><Link to={'/basic-airway-techniques'}>Next Topic - Basic Airway Techniques and Adjuncts</Link></button>
        </>

    );
}

export default Introduction;