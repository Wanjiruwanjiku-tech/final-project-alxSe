import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import explaoiner5 from '../../Assets/images/explainerh.jpg';
import explaoiner6 from '../../Assets/images/explainerg.jpg';
import explaoiner7 from '../../Assets/images/explainerf.jpg';
import explaoiner8 from '../../Assets/images/explainere.jpg';
import explaoiner1 from '../../Assets/images/explainera.jpg';
import explaoiner2 from '../../Assets/images/explainerb.jpg';
import explaoiner3 from '../../Assets/images/explainerc.jpg';
import explaoiner4 from '../../Assets/images/explainerd.jpg';

const PharmaQuiz = () => {
    const navigate = useNavigate();
    const handleBackToTopics = () => {
        navigate('/topics');
    };

    const ptQuestions = [
        {
            'question': "What is the term used to describe the effect of a drug on the body?",
            'options': [
                'Pharmacokinetics',
                'Pharmacodynamics',
                'Bioavailability',
                'First-pass effect'
            ],
            'answer': 'Pharmacodynamics',
            'explainer': explaoiner3
        },

        {
            'question': 'Which term describes the movement of a drug through the body, including absorption, distribution, metabolism, and excretion?',
            'options': [
                'Pharmacodynamics',
                'Therapeutic index', 
                'Pharmacokinetics',
                'Half-life'
            ],
            'answer': 'Pharmacokinetics',
            'explainer': explaoiner4
        },

        {
            'question': "You are administering an IV drug with a narrow therapeutic index. What does this imply?",
            'options': [
                'The drug is safe at high doses',
                'The drug requires close monitoring of blood levels',
                'The drug takes a long time to be metabolized',
                'The drug has few side effects'
            ],
            'answer': 'The drug requires close monitoring of blood levels',
            'explainer': explaoiner5
        },

        {
            'question': "A 50-year-old patient is receiving a drug via the sublingual route. What is the main advantage of this route of administration?",
            'options': [
                'Avoids first-pass metabolism',
                'Ensures slow, prolonged absorption',
                'Is easier for patients to take',
                'Reduces the risk of overdose'
            ],
            'answer': 'Avoids first-pass metabolism',
            'explainer': explaoiner6
        },

        {
            'question': "What term refers to the time it takes for the concentration of a drug to decrease by half in the body?",
            'options': [
                'Peak effect',
                'Onset of action',
                'Half-life',
                'Duration of action'
            ],
            'answer': 'Half-life',
            'explainer': explaoiner7
        },

        {
            'question': "Which class of medications is commonly used by paramedics to manage bronchospasm in asthmatic patients?",
            'options': [
                'Anticholinergics',
                'Beta-2 agonists',
                'Calcium channel blockers',
                'ACE inhibitors'
            ],
            'answer': 'Beta-2 agonists',
            'explainer': explaoiner8
        },

        {
            'question': "What is the term used to describe the process of drug elimination from the body, primarily via the liver or kidneys?",
            'options': [
                'Metabolism',
                'Distribution',
                'Absorption',
                'Excretion'
            ],
            'answer': 'Excretion',
            'explainer': explaoiner1
        },

        {
            'question': " You administer a medication with a high first-pass effect. What does this imply about its metabolism?",
            'options': [
                'It will require a lower dose to be effective',
                'It will be extensively metabolized in the liver before reaching systemic circulation',
                'It will bypass the liver entirely',
                'It has a longer half-life'
            ],
            'answer': 'It will be extensively metabolized in the liver before reaching systemic circulation',
            'explainer': explaoiner2
        },

        {
            'question': "A paramedic is administering a medication with a rapid onset of action but short duration. What term best describes the time it takes for the drug to begin working?",
            'options': [
                'Half-life',
                'Onset of action',
                'Peak effect',
                'Bioavailability'
            ],
            'answer': 'Onset of action',
            'explainer': explaoiner3
        },

        {
            'question': "Which of the following medications is an example of a Schedule II controlled substance, requiring strict regulation in paramedic practice?",
            'options': [
                'Morphine',
                'Lorazepam',
                'Aspirin',
                'Ibuprofen'
            ],
            'answer': 'Morphine',
            'explainer': explaoiner5
        },

    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizComplete, setQuizComplete] = useState(false);
    const [viewAnswers, setViewAnswers] = useState(false);

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

      const handleViewAnswers = () => {
        setViewAnswers(true);
    };

    if (quizComplete && viewAnswers) {
        return (
            <>
            <h1>Quiz Complete! Here are the answers:</h1>
            <button className="loginbuttons" onClick={handleBackToTopics}>Back to Topics</button>
            <div className="each-quiz-items">
                    {ptQuestions.map((question, index) => (
                        <div key={index} className="each-quiz-item">
                            <h1>Question {index + 1}</h1>
                            <h2>{question.question}</h2>
                            <h3><strong>Answer: </strong>{question.answer}</h3>
                            <img src={question.explainer} alt={`Explanation for ${index + 1}`} className="explainer" />
                        </div>
                    ))}
            </div>
            </>
        );
    }

      if (quizComplete) {
        return (
                <div className="each-pt-quizs">
                    <h1>Quiz Complete!</h1>
                    <img src={explaoiner5} alt="Quiz complete" />
                    <h2>Your score is: {score} out of {ptQuestions.length}</h2>
                    <button className="loginbuttons" onClick={handleViewAnswers}>View Answers</button>
                    <p>Refresh Page and Give it Another try :)</p>
                </div>
                );
            };

            return (
                <>
                    <h1>Pharmacology Quiz</h1>
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

export default PharmaQuiz;