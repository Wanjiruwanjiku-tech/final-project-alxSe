import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import explaoiner5 from '../../Assets/images/explainere.jpg';
import explaoiner6 from '../../Assets/images/explainerf.jpg';
import explaoiner7 from '../../Assets/images/explainerg.jpg';
import explaoiner8 from '../../Assets/images/explainerh.jpg';
import explaoiner1 from '../../Assets/images/explainera.jpg';
import explaoiner2 from '../../Assets/images/explainerb.jpg';
import explaoiner3 from '../../Assets/images/explainerc.jpg';
import explaoiner4 from '../../Assets/images/explainerd.jpg';

const CardiacQuiz = () => {

    const ptQuestions = [
        {
            'question': "A 56-year-old male collapses at a shopping mall. Upon arrival, he is unresponsive, pulseless, and not breathing. What is your first action?",
            'options': [
                'Administer epinephrine',
                'Attach the AED and analyze',
                'Begin chest compressions',
                'Open the airway and provide rescue breaths'
            ],
            'answer': ' Begin chest compressions',
            'explainer': explaoiner1
        },

        {
            'question': "You are dispatched to a 45-year-old woman with chest pain. She describes it as pressure radiating to her left arm. What is your immediate intervention?",
            'options': [
                'Administer aspirin',
                'Administer oxygen via nasal cannula',
                'Apply a cold compress to her chest',
                'Prepare to defibrillate'
            ],
            'answer': ' Administer aspirin',
            'explainer': explaoiner2
        },

        {
            'question': "A 60-year-old man is experiencing chest discomfort and shortness of breath. His ECG shows ST-elevation in leads II, III, and aVF. What is your most likely diagnosis?",
            'options': [
                'Anterior myocardial infarction',
                'Pulmonary embolism',
                'Inferior myocardial infarction',
                'Pericarditis'
            ],
            'answer': 'Inferior myocardial infarction',
            'explainer': explaoiner3
        },

        {
            'question': "You are called to the scene of a patient with a rapid, irregular heart rate of 180 beats per minute. The patient is also experiencing dizziness and shortness of breath. What is your treatment plan?",
            'options': [
                'Synchronized cardioversion',
                'Vagal maneuvers and adenosine',
                'Defibrillation',
                'Chest compressions'
            ],
            'answer': 'Synchronized cardioversion',
            'explainer': explaoiner4
        },

        {
            'question': "  A 70-year-old male complains of chest pain that started while he was gardening. Upon your assessment, he is diaphoretic and his pulse is weak and irregular. What should you suspect?",
            'options': [
                'Gastroesophageal reflux disease',
                'Myocardial infarction',
                'Panic attack',
                'Aortic aneurysm rupture'
            ],
            'answer': 'Myocardial infarction',
            'explainer': explaoiner5
        },

        {
            'question': "You are treating a 50-year-old female with crushing chest pain, radiating to her jaw. Her blood pressure is 90/60, heart rate 110, and she is pale and diaphoretic. What is your next step?",
            'options': [
                'Start CPR',
                'Administer nitroglycerin',
                'Administer high-flow oxygen',
                'Administer morphine'
            ],
            'answer': 'Administer high-flow oxygen',
            'explainer': explaoiner6
        },

        {
            'question': " A 60-year-old male presents with sudden-onset chest pain. His ECG shows new-onset left bundle branch block (LBBB). What should you suspect?",
            'options': [
                'Right ventricular failure',
                'Myocardial infarction',
                'Angina',
                'Aortic dissection'
            ],
            'answer': 'Myocardial infarction',
            'explainer': explaoiner7
        },

        {
            'question': "A patient with a history of hypertension and diabetes presents with nausea, diaphoresis, and discomfort in the epigastric region. What condition should you consider?",
            'options': [
                'Pulmonary embolism',
                'Myocardial infarction',
                'Gastroenteritis',
                'Stroke'
            ],
            'answer': 'Myocardial infarction',
            'explainer': explaoiner8
        },

        {
            'question': "You arrive at the scene to find a 58-year-old male in cardiac arrest. After initiating CPR and attaching the AED, it advises no shock. What is your next step?",
            'options': [
                'Re-analyze the rhythm immediately',
                'Start CPR and administer epinephrine',
                'Transport immediately',
                'Perform a precordial thump'
            ],
            'answer': 'Start CPR and administer epinephrine',
            'explainer': explaoiner1
        },

        {
            'question': "A 65-year-old male is presenting with chest pain and shortness of breath. His blood pressure is 80/50, and his ECG shows bradycardia. What is your next intervention?",
            'options': [
                'Administer nitroglycerin',
                'Administer atropine',
                'Synchronized cardioversion',
                'Defibrillation'
            ],
            'answer': 'Administer atropine',
            'explainer': explaoiner2
        },

        {
            'question': "You respond to a call for a 72-year-old female with chest pain and difficulty breathing. Her ECG shows a wide complex tachycardia. What is your next step?",
            'options': [
                'Pain is relieved by rest',
                'Pain has been constant for weeks',
                'Pain is not relieved by nitroglycerin',
                'Pain occurs only with exertion'
            ],
            'answer': 'Pain is not relieved by nitroglycerin',
            'explainer': explaoiner3
        },

        {
            'question': " You respond to a call for a 72-year-old female with chest pain and difficulty breathing. Her ECG shows a wide complex tachycardia. What is your next step?",
            'options': [
                'Defibrillation',
                'Synchronized cardioversion', 
                'Amiodarone infusion',
                'Lidocaine administration'
            ],
            'answer': 'Synchronized cardioversion',
            'explainer': explaoiner4
        },

        {
            'question': " A patient with severe chest pain collapses. You check for a pulse, and the rhythm on the monitor shows ventricular fibrillation. What should you do next?",
            'options': [
                'Administer epinephrine',
                'Begin CPR',
                'Administer amiodarone',
                'Defibrillate immediately'
            ],
            'answer': 'Defibrillate immediately',
            'explainer': explaoiner5
        },

        {
            'question': "You are treating a 40-year-old male with chest pain, pale skin, and diaphoresis. He suddenly becomes unresponsive and pulseless. What is the first drug you should administer after starting CPR?",
            'options': [
                'Amiodarone',
                'Epinephrine',
                'Lidocaine',
                'Atropine'
            ],
            'answer': 'Epinephrine',
            'explainer': explaoiner6
        },

        {
            'question': "A 50-year-old male presents with chest pain that is worse on inspiration and relieved when leaning forward. His ECG shows diffuse ST elevation. What is the most likely diagnosis?",
            'options': [
                'Acute coronary syndrome',
                'Aortic dissection',
                'Pericarditis',
                'Pulmonary embolism'
            ],
            'answer': 'Pericarditis',
            'explainer': explaoiner7
        },

        {
            'question': "A 65-year-old patient has been resuscitated from a cardiac arrest. During transport, he becomes hypotensive and bradycardic. What drug should you administer first?",
            'options': [
                'Epinephrine',
                'Atropine',
                'Dopamine',
                'Lidocainee'
            ],
            'answer': 'Atropine',
            'explainer': explaoiner8
        },

        {
            'question': "You are treating a 55-year-old female with chest pain. Her ECG reveals ST-elevation in the anterior leads. What is the most likely affected coronary artery?",
            'options': [
                'Right coronary artery',
                'Circumflex artery',
                'Left anterior descending artery',
                'Left main artery'
            ],
            'answer': 'Left anterior descending artery',
            'explainer': explaoiner1
        },

        {
            'question': " You arrive at the scene of a 62-year-old male with a history of congestive heart failure. He is sitting upright, gasping for air, and has pink, frothy sputum. What is your initial management?",
            'options': [
                'Defibrillation',
                'Administer oxygen and prepare for CPAP',
                'Start nitroglycerin',
                'Administer furosemide'
            ],
            'answer': 'Administer oxygen and prepare for CPAP',
            'explainer': explaoiner2
        },

        {
            'question': "A 50-year-old male experiences sudden-onset chest pain while climbing stairs. His symptoms resolve after sitting down for 10 minutes. What is the most likely diagnosis?",
            'options': [
                'Unstable angina',
                'Stable angina',
                'Myocardial infarction',
                'Pulmonary embolism'
            ],
            'answer': 'Stable angina',
            'explainer': explaoiner3
        },

        {
            'question': "You are called to treat a 70-year-old male who is unconscious with a heart rate of 30 bpm. His blood pressure is 60/40. What is your next intervention?",
            'options': [
                'Administer nitroglycerin',
                'Perform defibrillation',
                'Administer atropine',
                'Administer aspirin'
            ],
            'answer': 'Administer atropine',
            'explainer': explaoiner5
        },

    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizComplete, setQuizComplete] = useState(false);

    const handleAnswer = (optionIndex) => {
        if (optionIndex === ptQuestions[currentQuestion].answer) {
          setScore(score + 1);
        }
        if (currentQuestion < ptQuestions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setQuizComplete(true);
        }
      };

      useEffect(() => {
        if (quizComplete) {
            const timer = setTimeout(() => {
                window.location.reload(); // Refresh the page
            }, 5000); // 5 seconds delay

            return () => clearTimeout(timer); // Cleanup on component unmount
        }
    }, [quizComplete]);

      if (quizComplete) {
        return (
                <div className="each-pt-quizs">
                    <h1>Quiz Complete!</h1>
                    <img src={explaoiner5} alt="Quiz complete" />
                    <h2>Your score is: {score} out of {ptQuestions.length}</h2>
                    <p>The page will refresh automatically in 5 seconds.</p>
                </div>
                );
            };

            return (
                <>
                    <div className="quiz-pt-container">
                        <div className="each-pt-quizs">
                            <h2>Question {currentQuestion + 1}</h2>
                            <img src={ptQuestions[currentQuestion].explainer} alt="Quiz complete" className="explainer" />
                            <h1>{ptQuestions[currentQuestion].question}</h1>
                            <div className="each-pt-quiz">
                            {ptQuestions[currentQuestion].options.map((option, index) => (
                                <button className='loginbuttons' onClick={() => handleAnswer(option)}>
                                <span>{option} </span>
                                </button>
                            ))}
                            </div>
                        </div>

                    </div>
             </>
      );
}

export default CardiacQuiz;