import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import explainer1 from '../../Assets/images/explainer1.jpg';
import explainer2 from '../../Assets/images/explainer2.jpg';
import explainer3 from '../../Assets/images/explainer3.jpg';
import explainer5 from '../../Assets/images/explainer5.jpg';
import explainer6 from '../../Assets/images/explainer6.jpg';
import explainer7 from '../../Assets/images/explainer7.jpg';
import MI from '../../Assets/images/mi.jpg';
import acls from '../../Assets/images/acls.jpg';

const CardiacNextPage = () => {
    const navigate = useNavigate();

    const [VisibleImages, setVisibleImages] = useState({
        acls: false,
    });

    const toggleVisibility = (imageKey) => {
        setVisibleImages((prevVisibleImages) => ({
            ...prevVisibleImages,
            [imageKey]: !prevVisibleImages[imageKey]
        }));
    };


    const handlePrev = () => {
        navigate('/cardiac-emergencies');
    }

    const emergencies = [
        {
            title: 'ACLS Overview Section',
            description: 'ACLS (Advanced Cardiovascular Life Support) is a set of critical interventions for managing life-threatening cardiovascular emergencies, including cardiac arrest, stroke, and acute coronary syndromes (ACS). ACLS extends beyond Basic Life Support (BLS) by incorporating advanced strategies such as medication administration, airway management, and recognition of advanced arrhythmias.',
            explainer: explainer1,
            cardimage: MI,
        },
        {
            title: 'Cardiac Arrest Algorithm',
            description: 'This algorithm guides the management of patients in cardiac arrest. Key steps include high-quality CPR, defibrillation for shockable rhythms, and medication administration.',
            management: [
                'Start CPR immediately and ensure high-quality chest compressions.',
                'For VF/VT, administer one shock and resume CPR for 2 minutes.',
                'Administer epinephrine 1 mg IV/IO every 3-5 minutes.',
                'Consider amiodarone after the third shock.',
            ],
            explainer: explainer2,
            cardimage: MI,
        },

        {
            title: 'Shockable Rhythm (VF/VT)',
            description: "Ventricular Fibrillation (VF) and Pulseless Ventricular Tachycardia (VT) are life-threatening cardiac rhythms where the heart's electrical activity becomes erratic. In VF, the ventricles quiver instead of contracting properly, resulting in no effective blood flow. VT is a rapid heart rhythm originating from the ventricles, which can lead to the heart being unable to pump blood efficiently. Both conditions are considered shockable rhythms because they can potentially be corrected with defibrillation, a process where an electric shock is delivered to the heart to restore a normal rhythm. Immediate recognition and prompt defibrillation are crucial in improving the chances of survival for patients experiencing VF or VT.",
            management: [
                'Initiate CPR Immediately: Begin high-quality chest compressions with a rate of 100-120 per minute and a depth of 2-2.4 inches (5-6 cm), Minimize interruptions in chest compressions.',
                'Defibrillation: As soon as a defibrillator is available, deliver one shock using the recommended energy setting (typically 200J for biphasic defibrillators), Immediately resume CPR after the shock, starting with chest compressions..',
                'Epinephrine Administration: Administer epinephrine 1 mg IV/IO every 3-5 minutes during CPR. Continue CPR for 2 minutes between doses of epinephrine and after shocks.',
                'Consider amiodarone after the third shock. Initial dose: 300 mg IV/IO bolus. If VF/VT continues, a second dose of 150 mg can be given.',
            ],
            explainer: explainer5,
            cardimage: MI,
        },

        {
            title: 'Non-Shockable Rhythm (Asystole/PEA)',
            description: "Non-shockable rhythms include Asystole and Pulseless Electrical Activity (PEA). Asystole, also known as flatline, is the absence of any electrical activity in the heart, resulting in no heartbeat and no circulation of blood. PEA occurs when there is electrical activity on the ECG, but the heart is not pumping effectively, leading to no palpable pulse. These rhythms are not amenable to defibrillation, and survival depends on prompt recognition and treatment of the underlying causes.",
            management: [
                'Initiate CPR Immediately: Begin high-quality chest compressions with a rate of 100-120 per minute and a depth of 2-2.4 inches (5-6 cm), Minimize interruptions in chest compressions.',
                'Epinephrine Administration: Administer epinephrine 1 mg IV/IO every 3-5 minutes during CPR. Continue CPR for 2 minutes between doses of epinephrine.',
                'Continue Cycles of CPR: Perform continuous cycles of CPR without defibrillation, as these rhythms do not respond to shocks.',
                'Consider amiodarone after the third shock. Initial dose: 300 mg IV/IO bolus. If VF/VT continues, a second dose of 150 mg can be given.',
                'Reassess the rhythm every 2 minutes, but continue CPR if a non-shockable rhythm persists.',
            ],
            explainer: explainer6,
            cardimage: MI,
        },

        {
            title: 'Reversible Cause "Hs and Ts"',
            description: 'The "Hs and Ts" are a mnemonic used in Advanced Cardiovascular Life Support (ACLS) to help remember and identify reversible causes of cardiac arrest. These factors should be addressed during resuscitation efforts to improve the chances of successful outcomes.',
            management: [
                'Hs  (Reversible Causes Related to the Body’s Internal Environment):',
                '1. Hypoxia -  Insufficient oxygen in the blood, leading to inadequate oxygenation of tissues. Management: Ensure the airway is open, provide supplemental oxygen, and ventilate the patient as needed.',
                '2. Hypovolemia - Severe blood or fluid loss, leading to inadequate circulation and reduced cardiac output. Management: Administer IV fluids or blood products to restore intravascular volume.',
                '3. Hydrogen Ion (Acidosis) -  An excess of acid in the blood (acidosis), which can affect heart function. Management: Provide adequate ventilation to reduce CO2 levels; in some cases, administer sodium bicarbonate.',
                '4. Hyper/Hypokalemia - High or Low potassium level, May lead to peaked T waves, widened QRS, and eventually asystole or May cause flattened T waves, U waves, and arrhythmias respectively. Management: For hyperkalemia: Administer calcium chloride or calcium gluconate, insulin with glucose, and possibly sodium bicarbonate and For hypokalemia: Administer potassium cautiously.',
                '5. Hypothermia - Abnormally low body temperature, which can depress cardiac function and response to medications. Management: Gradually rewarm the patient using external and internal warming techniques.',
                'Ts (Reversible Causes Related to External Factors or Trauma):',
                '1. Tension Pneumothorax -  Air trapped in the pleural space causes the lung to collapse and puts pressure on the heart, leading to obstructive shock. Management: Perform needle decompression or chest tube insertion to relieve pressure.',
                '2. Tamponade (Cardiac) - Fluid accumulation in the pericardium (the sac around the heart) compresses the heart, impairing its ability to pump. Management: Perform pericardiocentesis to remove the fluid and relieve pressure.',
                '3. Toxins - Drug overdoses or poisoning can lead to cardiac arrest. Management: Administer specific antidotes if available (e.g., naloxone for opioid overdose, sodium bicarbonate for tricyclic antidepressant overdose), and provide supportive care.',
                '4. Thrombosis (Coronary) - Blockage of a coronary artery by a blood clot, leading to a myocardial infarction (heart attack). Management: Consider reperfusion therapy (e.g., thrombolysis or percutaneous coronary intervention).',
                '5. Thrombosis (Pulmonary) - Pulmonary embolism caused by a blood clot in the lungs, obstructing blood flow and leading to cardiac arrest. Consider thrombolysis, surgical embolectomy, or supportive measures.',
            ],
            explainer: explainer7,
            cardimage: MI,
        },

        {
            title: 'Bradycardia with Pulse Algorithm',
            description: 'This algorithm is used for the management of symptomatic bradycardia. It includes the administration of atropine and, if necessary, pacing or the use of dopamine or epinephrine drips.',
            management: [
                'Administer atropine 1 mg IV/IO every 3-5 minutes, up to a total of 3 mg.',
                'Consider transcutaneous pacing if atropine is ineffective.',
                'Monitor ECG and vital signs continuously.',
            ],
            explainer: explainer3,
            cardimage: MI,
        },
        // Add more sections as needed
    ];

    return (
        <>
            <Link to='/topics'>Back to Topics</Link>
            <div className="cardiac-container">
                <div className='cardiac-sub-topics'>
                    <h1>Cardiac Emergencies</h1>
                    <h3>ACLS ALGORITHM.</h3>
                    <p>Let's get started..</p>
                    <div>
                        <button onClick={() => toggleVisibility('acls')} className='nav-btn'>
                            <span>{VisibleImages.acls ? 'Hide Image' : 'Show ACLS Algorithm'}</span>
                            <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
                            <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
                            </svg>
                        </button>
                        {VisibleImages.acls && (
                            <img src={acls} alt='Endotracheal Intubation' className='advanced-image' />
                        )}
                    </div>
                    <div className='cardiac-sub-topic-items'>
                        <div className='each-cardiac-item'>
                            {emergencies.map((item, index) => (
                                <div key={index} className='each-cardiac-sub-topic'>
                                    <img src={item.cardimage} alt='card-image' className='card-image'/>
                                    <h2>{item.title}</h2>
                                    <img src={item.explainer} alt='explainer' className='explainer'/>
                                    <p><strong>Description:</strong> {item.description}</p>
                                    
                                    {item.symptoms && (
                                        <>
                                            <h3>Symptoms</h3>
                                            <ul>
                                                {item.symptoms.map((symptom, i) => (
                                                    <li key={i}>{symptom}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}

                                    {item.management && (
                                        <>
                                            <h3>Management</h3>
                                            <ul>
                                                {item.management.map((manage, i) => (
                                                    <li key={i}>{manage}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <button className='nav-btn' onClick={handlePrev}>
                    <span>Previous</span>
                    <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
                    </svg>
                </button>
            </div>
        </>
    )
}

export default CardiacNextPage;