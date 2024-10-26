import React from "react";
import { useState, useEffect } from "react";
import explaoiner5 from '../../Assets/images/explainere.jpg';
import explaoiner6 from '../../Assets/images/explainerf.jpg';
import explaoiner7 from '../../Assets/images/explainerg.jpg';
import explaoiner8 from '../../Assets/images/explainerh.jpg';
import explaoiner1 from '../../Assets/images/explainera.jpg';
import explaoiner2 from '../../Assets/images/explainerb.jpg';
import explaoiner3 from '../../Assets/images/explainerc.jpg';
import explaoiner4 from '../../Assets/images/explainerd.jpg';

const BurnQuiz = () => {

    const ptQuestions = [
        {
            'question': "You are called to the scene of a 35-year-old male with burns to his arms and chest after a kitchen fire. What is the first step in burn management?",
            'options': [
                'Apply dry sterile dressings',
                'Flush the burn with cold water',
                'Administer oxygen',
                'Assess for airway compromise'
            ],
            'answer': 'Assess for airway compromise',
            'explainer': explaoiner1
        },

        {
            'question': "A 45-year-old female was involved in a house fire. She has singed nasal hairs and soot around her mouth. What is your main concern?",
            'options': [
                'Fluid loss',
                'Inhalation injury',
                'Infection',
                'Pain control'
            ],
            'answer': 'Inhalation injury',
            'explainer': explaoiner2
        },

        {
            'question': "A 30-year-old male has partial-thickness burns on his chest, back, and arms following an explosion. Using the Rule of Nines, what percentage of his body surface area (BSA) is burned?",
            'options': [
                '18%',
                '36%',
                '45%',
                '27%'
            ],
            'answer': '36%',
            'explainer': explaoiner3
        },

        {
            'question': "You are treating a 60-year-old woman who sustained full-thickness burns to both legs. Which of the following best describes a full-thickness burn?",
            'options': [
                'Red, blistered skin with pain',
                'Dry, leathery skin with no pain',
                'Swollen, white skin with intact sensation',
                'Moist, pink skin with severe pain'
            ],
            'answer': 'Dry, leathery skin with no pain',
            'explainer': explaoiner4
        },

        {
            'question': "A 50-year-old male has burns to 40% of his body. What is your main priority in managing this patient during transport?",
            'options': [
                'Pain management',
                'Fluid resuscitation',
                'Wound debridement',
                'Cooling the burn'
            ],
            'answer': 'Fluid resuscitation',
            'explainer': explaoiner5
        },

        {
            'question': "A 25-year-old female is experiencing intense pain from partial-thickness burns to her hands after spilling boiling water. What pain management option is most appropriate in the prehospital setting??",
            'options': [
                'Nitrous oxide',
                'Ice packs',
                'Morphine or fentanyl',
                'Acetaminophen'
            ],
            'answer': 'Morphine or fentanyl',
            'explainer': explaoiner6
        },

        {
            'question': "A 70-year-old man was found unconscious in a smoke-filled room. He has no visible burns, but his SpO₂ is 99% on room air. What is your immediate concern?",
            'options': [
                'Carbon monoxide poisoning',
                'Hypoxia',
                'Hypothermia',
                'Dehydration'
            ],
            'answer': 'Carbon monoxide poisoning',
            'explainer': explaoiner7
        },

        {
            'question': " A 12-year-old child suffered electrical burns after touching an exposed wire. He has an entry wound on his hand and an exit wound on his foot. What should you assess for immediately?",
            'options': [
                'Airway compromise',
                'Cardiac arrhythmias',
                'Inhalation injury',
                'Hypovolemia'
            ],
            'answer': 'Cardiac arrhythmias',
            'explainer': explaoiner8
        },

        {
            'question': "You are called to a factory where a 50-year-old worker has sustained chemical burns to his arms and face from a spill. What is your first priority?",
            'options': [
                'Apply dry sterile dressings',
                'Remove contaminated clothing',
                'Administer pain relief',
                'Irrigate with water'
            ],
            'answer': 'Remove contaminated clothing',
            'explainer': explaoiner1
        },

        {
            'question': "You respond to a scene where a patient has partial-thickness burns on his chest and neck. He is struggling to breathe. What is your immediate action?",
            'options': [
                'Place the patient on high-flow oxygen',
                'Cover the burns with a wet dressing',
                'Elevate the patient’s legs',
                'Apply cold compresses to the chest'
            ],
            'answer': 'Place the patient on high-flow oxygen',
            'explainer': explaoiner2
        },

        {
            'question': "A 28-year-old male presents with burns after exposure to an electrical current. He complains of chest pain and his ECG shows ventricular fibrillation. What is your next step?",
            'options': [
                'Administer epinephrine',
                'Defibrillate immediately',
                'Administer oxygen',
                'Administer IV fluids'
            ],
            'answer': 'Defibrillate immediately',
            'explainer': explaoiner3
        },

        {
            'question': 'You are treating a patient with thermal burns covering 30% of his body surface area. During transport, he becomes confused and hypotensive. What condition should you suspect? You respond to a call for a 72-year-old female with chest pain and difficulty breathing. Her ECG shows a wide complex tachycardia. What is your next step?',
            'options': [
                'Hypothermia',
                'Burn shock', 
                'Septic shock',
                ' Anaphylaxis'
            ],
            'answer': 'Burn shock',
            'explainer': explaoiner4
        },

        {
            'question': "A 40-year-old male sustained burns from a house fire. His burns are dry, white, and painless. What type of burns are these?",
            'options': [
                'First-degree burns',
                'Second-degree burns',
                'Third-degree burns',
                'Superficial burns'
            ],
            'answer': 'Third-degree burns',
            'explainer': explaoiner5
        },

        {
            'question': "A 15-year-old girl was burned in a fire and has partial-thickness burns to her face. What is your primary concern regarding her airway?",
            'options': [
                'Carbon monoxide inhalation',
                'Laryngospasm',
                'Upper airway edema',
                'Smoke inhalation'
            ],
            'answer': 'Upper airway edema',
            'explainer': explaoiner6
        },

        {
            'question': "A patient has sustained chemical burns to his right arm from a strong acid. After ensuring safety, what is the next step in management?",
            'options': [
                'Apply sterile dressings',
                'Brush off the chemical',
                'Irrigate the area with copious water',
                'Apply a neutralizing agent'
            ],
            'answer': 'Irrigate the area with copious water',
            'explainer': explaoiner7
        },

        {
            'question': "You are called to treat a 30-year-old man with burns to his legs. His pain is severe, and he has blisters on both legs. What is the best description of these burns?",
            'options': [
                'Superficial burns',
                'Full-thickness burns',
                'First-degree burns',
                'Partial-thickness burns'
            ],
            'answer': 'Partial-thickness burns',
            'explainer': explaoiner8
        },

        {
            'question': " A patient sustained burns while working in a garage fire. Upon arrival, he is breathing rapidly and his voice is hoarse. What is your immediate concern?",
            'options': [
                'Hypoxia',
                'Fluid loss',
                'Airway obstruction from edema',
                'Infection'
            ],
            'answer': ' Airway obstruction from edema',
            'explainer': explaoiner1
        },

        {
            'question': "You are assessing a 35-year-old female with severe burns following a car fire. Her clothing is melted onto her skin. What is your next step?",
            'options': [
                'Leave the clothing in place and cover with sterile dressings',
                'Attempt to peel the clothing off',
                'Apply a cold compress over the clothing',
                'Irrigate the area with cool water'
            ],
            'answer': ' Leave the clothing in place and cover with sterile dressings',
            'explainer': explaoiner2
        },

        {
            'question': "You arrive at the scene of a child with hot liquid burns over his back and shoulders. What is your first priority?",
            'options': [
                'Assess airway, breathing, and circulation (ABC)',
                'Cool the burn with cold water',
                'Apply a topical antibiotic',
                ' Elevate the burned area'
            ],
            'answer': 'Assess airway, breathing, and circulation (ABC)',
            'explainer': explaoiner3
        },

        {
            'question': "You are treating a 65-year-old male with burns from a house fire. His skin is pale, cool, and he is becoming increasingly lethargic. What is the best explanation for his symptoms?",
            'options': [
                'Carbon monoxide poisoning',
                'Hypothermia due to burn injuries',
                'Burn shock with hypovolemia',
                'Severe pain response'
            ],
            'answer': 'Burn shock with hypovolemia',
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
                    <h1>Burn Quiz</h1>
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

export default BurnQuiz;