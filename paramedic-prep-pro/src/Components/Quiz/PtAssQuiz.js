import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../Assets/styles/styles.css';
import explaoiner5 from '../../Assets/images/explainere.jpg';
import explaoiner6 from '../../Assets/images/explainerf.jpg';
import explaoiner7 from '../../Assets/images/explainerg.jpg';
import explaoiner8 from '../../Assets/images/explainerh.jpg';
import explaoiner1 from '../../Assets/images/explainera.jpg';
import explaoiner2 from '../../Assets/images/explainerb.jpg';
import explaoiner3 from '../../Assets/images/explainerc.jpg';
import explaoiner4 from '../../Assets/images/explainerd.jpg';

const PtQuiz = () => {
    const navigate = useNavigate();
    const handleBackToTopics = () => {
        navigate('/topics');
    };

    const ptQuestions = [
        {
            'question': "What is the first step in the primary assessment of a patient?",
            'options': [
                'Obtain a medical history',
                ' Check vital signs',
                ' Assess airway, breathing, and circulation (ABCs)',
                'Perform a physical exam'
            ],
            'answer': ' Assess airway, breathing, and circulation (ABCs)',
            'explainer': explaoiner1
        },

        {
            'question': "What does the 'V' in the AVPU scale stand for?",
            'options': [
                'Verbal response',
                'Visual acuity',
                'Vital signs',
                'Ventilation rate'
            ],
            'answer': ' Verbal response',
            'explainer': explaoiner2
        },

        {
            'question': "What is considered a normal adult resting heart rate?",
            'options': [
                '40-60 bpm',
                '60-100 bpm',
                '100-120 bpm',
                '120-150 bpm'
            ],
            'answer': '60-100 bpm',
            'explainer': explaoiner3
        },

        {
            'question': "What is the normal range for adult blood pressure?",
            'options': [
                ' 80/40 to 100/60 mmHg',
                '90/60 to 120/80 mmHg',
                '120/80 to 140/90 mmHg',
                '140/90 to 160/100 mmHg'
            ],
            'answer': '120/80 to 140/90 mmHg',
            'explainer': explaoiner4
        },

        {
            'question': " You arrive at the scene and find a 67-year-old male patient who is gasping for breath. He has a history of COPD. His skin is pale and clammy, and he appears anxious. What should be your immediate intervention?",
            'options': [
                'Administer oral glucose',
                'Start CPR',
                'Position the patient upright',
                'Apply supplemental oxygen'
            ],
            'answer': 'Apply supplemental oxygen',
            'explainer': explaoiner5
        },

        {
            'question': " A 45-year-old female is found unresponsive on the floor. You check her ABCs and find she is not breathing adequately. What should you do next?",
            'options': [
                'Give her food and water',
                'Begin rescue breathing',
                'Call for backup and start CPR',
                'Check her blood sugar level'
            ],
            'answer': 'Call for backup and start CPR',
            'explainer': explaoiner6
        },

        {
            'question': "In the SAMPLE history acronym, what does the 'M' stand for?",
            'options': [
                'Medications',
                'Mechanism of injury',
                'Mental status',
                'Medical history'
            ],
            'answer': ' Medications',
            'explainer': explaoiner7
        },

        {
            'question': " You are called to a home where a 62-year-old male has collapsed. Bystanders state he was complaining of chest pain earlier. What is your first action upon arrival?",
            'options': [
                'Check his blood pressure',
                'Start chest compressions immediately',
                'Check for a pulse and breathing',
                'Administer aspirin'
            ],
            'answer': 'Check for a pulse and breathing',
            'explainer': explaoiner8
        },

        {
            'question': "Which assessment technique is most appropriate for identifying a suspected pneumothorax?",
            'options': [
                'Checking capillary refill',
                'Auscultation of lung sounds',
                'Measurement of blood glucose',
                'Palpation of the abdomen'
            ],
            'answer': 'Auscultation of lung sounds',
            'explainer': explaoiner1
        },

        {
            'question': "A patient presents with a GCS score of 9. Which of the following statements is accurate regarding this patient's level of consciousness?",
            'options': [
                'The patient is fully alert and oriented.',
                'The patient is in a coma.',
                'The patient exhibits mild confusion.',
                ' The patient is responsive only to verbal stimuli.'
            ],
            'answer': ' The patient is responsive only to verbal stimuli.',
            'explainer': explaoiner2
        },

        {
            'question': "You respond to a call for a patient experiencing severe allergic reactions after eating shellfish. The patient is wheezing and has swelling of the face and lips.",
            'options': [
                'Administer a bronchodilator',
                'Provide supplemental oxygen',
                ' Administer epinephrine',
                'Transport the patient to the hospital'
            ],
            'answer': ' Administer epinephrine',
            'explainer': explaoiner3
        },

        {
            'question': " You arrive at a home where a 70-year-old woman is exhibiting facial drooping, difficulty speaking, and weakness on one side. Which assessment tool should you use to evaluate her condition?",
            'options': [
                'APGAR score',
                'Glasgow Coma Scale',
                'Cincinnati Prehospital Stroke Scale',
                'Rapid Trauma Assessment'
            ],
            'answer': 'Cincinnati Prehospital Stroke Scale',
            'explainer': explaoiner4
        },

        {
            'question': " You are assessing a 30-year-old male who fell from a height. He is conscious but complaining of severe neck pain and is not moving his arms or legs. What is your immediate priority?",
            'options': [
                'Conduct a detailed physical exam',
                'Apply a cervical collar and immobilize the spine',
                'Obtain vital signs',
                'Start IV fluids'
            ],
            'answer': 'Apply a cervical collar and immobilize the spine',
            'explainer': explaoiner5
        },

        {
            'question': "What is the most effective way to assess a patient’s pain?",
            'options': [
                'Asking the patient to describe their pain using the 0-10 scale',
                'Observing facial expressions and body language',
                'Relying on vital signs alone',
                'Assuming all patients experience pain the same way'
            ],
            'answer': ' Asking the patient to describe their pain using the 0-10 scale',
            'explainer': explaoiner6
        },

        {
            'question': "In trauma patients, which pain management technique is most appropriate before further assessment?",
            'options': [
                'Administering nitrous oxide',
                'Administering opioids',
                'Using ice packs on the injury',
                'No pain management until transport'
            ],
            'answer': 'Administering opioids',
            'explainer': explaoiner7
        },

        {
            'question': "A 35-year-old female is involved in a high-speed car crash. She complains of severe abdominal pain, and her abdomen is rigid on palpation. What condition should you suspect?",
            'options': [
                'Appendicitis',
                'Abdominal aortic aneurysm',
                'Peritonitis',
                'Splenic rupture'
            ],
            'answer': 'Splenic rupture',
            'explainer': explaoiner8
        },

        {
            'question': "During your assessment of a trauma patient, which finding would most likely indicate significant blood loss?",
            'options': [
                'Warm, dry skin',
                'Bounding pulses',
                'Weak, rapid pulse',
                'Elevated blood pressure'
            ],
            'answer': 'Weak, rapid pulse',
            'explainer': explaoiner1
        },

        {
            'question': " You are assessing a 25-year-old male who fell from a height and landed on his feet. He is conscious but complains of severe back pain and has numbness in his legs. What is your immediate course of action?",
            'options': [
                'Obtain a detailed history and physical exam',
                'Assess sensation and motor function in the lower extremities',
                'Apply a cervical collar and immobilize the spine',
                ' Transport immediately without assessment'
            ],
            'answer': 'Apply a cervical collar and immobilize the spine',
            'explainer': explaoiner2
        },

        {
            'question': "You find a 40-year-old male who was involved in a serious car accident. He is experiencing severe chest pain and has difficulty breathing. You notice subcutaneous emphysema. What should you suspect?",
            'options': [
                'Pulmonary contusion',
                'Tension pneumothorax',
                'Flail chest',
                'Simple pneumothorax'
            ],
            'answer': 'Tension pneumothorax',
            'explainer': explaoiner3
        },

        {
            'question': "What GCS score indicates a severe brain injury in a trauma patient?",
            'options': [
                '15-13',
                '12',
                '8 or Lower',
                '8-12'
            ],
            'answer': '8 or Lower',
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
                    <h1>Paramedic Patient Assessment Quiz</h1>
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

export default PtQuiz;