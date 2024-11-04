// Main AirWay Page
// contains all the topics related to AirWay

// AirWay.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import airway from '../../Assets/images/airway.jpg';
import '../../Assets/styles/styles.css';

const ModuleOutcomes = () => {
    const outcomes = [
      'Understand the anatomy and physiology of the airway.',
      'Recognize the indications and contraindications for various airway management techniques.',
      'Demonstrate proficiency in performing basic and advanced airway management procedures.',
      'Identify complications associated with airway management and their solutions.',
      'Develop the ability to make critical decisions during airway emergencies.',
      'Understand the role of monitoring tools in ensuring airway patency and patient safety.',
      'Apply airway management strategies in special populations such as pediatric and geriatric patients.',
    ];
  
    return (
      <div className="module-outcomes">
        <h1>Learning Outcomes: Airway Management</h1>
        <ul className="outcomes-list">
          {outcomes.map((outcome, index) => (
            <li key={index} className="outcome-item">{outcome}</li>
          ))}
        </ul>
      </div>
    );
  };

const AirWay = () => {
    const navigate = useNavigate();

    const subTopics = [
        {
            title: 'Introduction to Airway Management',
            src: airway
        },
        {
            title: 'Basic Airway Techniques and Adjuncts',
            src: airway
        },
        {
            title: 'Advanced Airway Techniques and Adjuncts',
            src: airway
        },
        {
            title: 'Airway Management in Special Populations',
            src: airway
        },
        {
            title: 'Pharmacology Related to Airway Management',
            src: airway
        },
        {
            title: 'Complications of Airway Management',
            src: airway
        },
        {
            title: 'Assessment and Monitoring Tools',
            src: airway
        },   
    ];

    const handleDiveIn = (title) => {
        switch (title) {
            case 'Introduction to Airway Management':
                navigate('/introduction-to-airway-management');
                break;
            case 'Basic Airway Techniques and Adjuncts':
                navigate('/basic-airway-techniques');
                break;
            case 'Advanced Airway Techniques and Adjuncts':
                navigate('/advanced-airway-techniques');
                break;
            case 'Airway Management in Special Populations':
                navigate('/airway-management-in-special-populations');  
                break;
            case 'Pharmacology Related to Airway Management':
                navigate('/pharmacology-related-to-airway-management');
                break;
            case 'Complications of Airway Management':
                navigate('/complications-of-airway-management');
                break;
            case 'Assessment and Monitoring Tools':
                navigate('/assessment-and-monitoring-tools');
                break;
            default:
                break;
        }
    }

    return (
        <>
            <button className='loginbuttons'><Link to={'/topics'}>Back to Topics</Link></button>
                <ModuleOutcomes />
                <div className="airway-container">
                    <div className='sub-topics'>
                        <h1>Airway Management Sub-topics</h1>
                        <p>Let's get started..</p>
                        <div className='sub-topic-items'>
                            <div className='each-item'>
                                {subTopics.map((item, index) => (
                                    <div key={index} className='each-sub-topic'>
                                        <img src={item.src} alt='' className='air-icon'/>
                                        <h3>{item.title}</h3>
                                        <button className='loginbuttons'onClick={() => handleDiveIn(item.title)}>Dive In</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default AirWay;