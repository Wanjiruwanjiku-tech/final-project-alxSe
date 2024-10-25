import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Assets/styles/styles.css';
import explainer1 from '../../Assets/images/explainera.jpg';
import explainer2 from '../../Assets/images/explainerb.jpg';
import explainer3 from '../../Assets/images/explainerc.jpg';
import explainer4 from '../../Assets/images/explainerd.jpg';
import explainer5 from '../../Assets/images/explainere.jpg';
import explainer6 from '../../Assets/images/explainerf.jpg';
import explainer7 from '../../Assets/images/explainerg.jpg';
import explainer8 from '../../Assets/images/explainerh.jpg';


const Quiz = () => {
    const navigate = useNavigate();

    const handleStartQuiz = (title) => {
        switch (title) {
            case 'Patient Assessment':
                navigate('/patient-quiz');
                break;
            case 'Airway Management':
                navigate('/airway-quiz');
                break;
            case 'Cardiac Emergencies':
                navigate('/cardiac-quiz');
                break;
            case 'Fractures':
                navigate('/fractures-quiz');
                break;
            case 'Burn Emergencies':
                navigate('/burns-quiz');
                break;
            case 'Bleeding and Shock':
                navigate('/bleeding-quiz');
                break;
            case 'Diabetic Emergencies':
                navigate('/diabetes-quiz');
                break;
            case 'Poisoning':
                navigate('/poison-quiz');
                break;
            case 'General Pharmacology':
                navigate('/genpharma-quiz');
                break;
            case 'Obstetrics and Gynecology':
                navigate('/obs-quiz');
                break;
            default:
                break;
        }
    }
    const quiztopics = [
        {
            'title': "Patient Assessment",
            'explainer': explainer3,
        },

        {
            'title': "Airway Management",
            'explainer': explainer4,
        }, 
        
        {
            'title': "Cardiac Emergencies",
            'explainer': explainer5,
        },

        {
            'title': "Fractures",
            'explainer': explainer3,
        },

        {
            'title': "Burn Emergencies",
            'explainer': explainer6,
        },
        
        {
            'title': "Bleeding and Shock",
            'explainer': explainer8,
        },
        
        {
            'title': "Diabetic Emergencies",
            'explainer': explainer2,
        },
        {
            'title': "Poisoning",
            'explainer': explainer7,
        },

        {
            'title': "General Pharmacology",
            'explainer': explainer1,
        },

        {
            'title': "Obstetrics and Gynecology",
            'explainer': explainer8,
        },
        
    ];
    return (
        <>
        <div className='quiz-container'>
            <h1>Test your Limit..</h1>
            <p>Select a topic</p>
        </div>
        <div className='quiz-items'>
            <div className='each-quiz-items'>
                {quiztopics.map((topic, index) => (
                    <div key={index} className='each-quiz-item'>
                        <h3>{topic.title}</h3>
                        <img src={topic.explainer} alt={topic.title} className='explainer'/>
                        <button className='loginbuttons' onClick={() => handleStartQuiz(topic.title)}>
                            <span>Start {topic.title} Quiz </span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Quiz;