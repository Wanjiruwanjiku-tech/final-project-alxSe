import React from 'react';
import { useNavigate } from 'react-router-dom';
import patientAssessment from '../../Assets/images/patientasessment.jpg';
import airwayManagement from '../../Assets/images/airwaymnx.jpg';
import cardiacArrest from '../../Assets/images/cpr.jpg';
import fracture from '../../Assets/images/fractures.jpg';
import burn from '../../Assets/images/burns.jpg';
import bleeding from '../../Assets/images/bleeding.jpg';
import allergy from '../../Assets/images/allergy.jpg';
import pharma from '../../Assets/images/pharma.jpg';
import '../../Assets/styles/styles.css'


const Topics = () => {

    const emergencyitems = [
        {
            title: 'Patient Assessment',
            description: 'Patient assessment involves systematically collecting and analyzing information about a patient’s health status.',
            icon: patientAssessment,
        },
        {
            title: 'Airway Management',
            description: 'Airway management refers to the techniques and procedures used to ensure that a patient has an open and clear airway to breathe.',
            icon: airwayManagement,
        },
        {
            title: 'Cardiac Emergencies',
            description: 'Cardiac Emergencies involve is a sudden loss of heart function, leading to a cessation of blood flow to the brain and other vital organs.',
            icon: cardiacArrest,
        },
        {
            title: 'Fractures',
            description: 'A fracture is a break or crack in a bone. It can result from trauma, such as a fall or accident, or from conditions that weaken the bones.',
            icon: fracture,
        },
        {
            title: 'Burns',
            description: 'Burns are injuries to the skin and underlying tissues caused by heat, chemicals, electricity, or radiation.',
            icon: burn,
        },
        {
            title: 'Bleeding and Shock',
            description: 'Bleeding, or hemorrhage, is the loss of blood from the circulatory system.',
            icon: bleeding,
        },
        {
            title: 'Diabetic Emergencies',
            description: 'Diabetic emergencies occur when blood sugar levels become dangerously high or low, leading to severe health complications.',
            icon: burn,
        },
        {
            title: 'Allergic Reactions',
            description: 'An allergy is an immune system reaction to a foreign substance (allergen) that is typically harmless to most people.',
            icon: allergy,
        },
        {
            title: 'General Pharmacology',
            description: 'Pharmacology is the study of drugs and their effects on the body.',
            icon: pharma,
        },
    ];

    // Handle Navigation to the topics
    const navigate = useNavigate();

    const handleStartLearning = (title) => {
        switch (title) {
            case 'Patient Assessment':
                navigate('/patient-assessment');
                break;
            case 'Airway Management':
                navigate('/airway');
                break;
            case 'Cardiac Emergencies':
                navigate('/cardiac');
                break;
            case 'Fractures':
                navigate('/fractures');
                break;
            case 'Burns':
                navigate('/burns');
                break;
            case 'Bleeding and Shock':
                navigate('/bleeding-and-shock');
                break;
            case 'Diabetic Emergencies':
                navigate('/diabetic-emergencies');
                break;
            case 'Allergic Reactions':
                navigate('/allergic-reactions');
                break;
            case 'General Pharmacology':
                navigate('/general-pharmacology');
                break;
            default:
                break;
        };
        
    };

    return (
        <>
           <div className="emergency-header">
                <h1>TOPICS.</h1>
                <p>Start your Learning Journey Today... </p>
            </div>
            <StartQuiz />
            <div className="emergency-list">
                
                <div className="emergency-grid">
                    {emergencyitems.map((item, index) => (
                        <div key={index} className="emergency-item">
                            <div className="emergency-icon">
                             <img src={item.icon} alt={item.title} />
                            </div> 
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <button className="loginbuttons" onClick={() => handleStartLearning(item.title)}>Start Learning</button>
                        </div>
                     ))}
                </div>
            </div>
        </>
    );
};
const StartQuiz = () => {
    const navigate = useNavigate();
    const handleStartQuiz = () => {
        navigate('/quiz');
    }

    return (
        <>
            <div className="">
                <button className='loginbuttons' onClick={handleStartQuiz}>
                    <span>Take a Quiz</span>
                </button>
            </div>
        </>
    )
}
export default Topics;