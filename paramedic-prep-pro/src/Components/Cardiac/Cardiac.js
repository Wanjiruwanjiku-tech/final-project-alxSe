import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import explainer1 from '../../Assets/images/explainer1.jpg';
import explainer2 from '../../Assets/images/explainer2.jpg';
import explainer3 from '../../Assets/images/explainer3.jpg';
import explainer4 from '../../Assets/images/explainer4.jpg';
import explainer5 from '../../Assets/images/explainer5.jpg';
import explainer6 from '../../Assets/images/explainer6.jpg';
import explainer7 from '../../Assets/images/explainer7.jpg';
import tamponade from '../../Assets/images/tamponade.jpg';
import per from '../../Assets/images/pe.jpg';
import MI from '../../Assets/images/mi.jpg';
import hyper from '../../Assets/images/hypertensive.jpg';
import CHF from '../../Assets/images/chf.jpg';
import cardio from '../../Assets/images/cardiogenic.jpg';
import CA from '../../Assets/images/ca.jpg';
import aortic from '../../Assets/images/aortic.png';
import AF from '../../Assets/images/af.jpg';
import ACS from '../../Assets/images/acs.png';
import '../../Assets/styles/styles.css'

const Cardiac = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/cardiac-next-page');
    }

    const emergencies = [
        {
            title: 'Acute Myocardial Infarction (AMI)',
            description: 'AMI, commonly known as a heart attack, occurs when blood flow to a part of the heart is blocked, often by a blood clot.',
            symptoms: [
                'Chest pain or discomfort, often described as pressure, squeezing, or fullness.',
                'Pain radiating to the arm, back, neck, jaw, or stomach.',
                'Shortness of breath.',
                'Nausea or vomiting.',
                'Cold sweat.',
            ],
            management: [
                'Administer oxygen if hypoxemia is present.',
                'Aspirin 160-325 mg (chewed).',
                'Nitroglycerin sublingually if not contraindicated.',
                'Morphine for pain relief if needed.',
                'Rapid transport to a facility with PCI (Percutaneous Coronary Intervention) capability.',
            ],
            explainer: explainer1,
            cardimage: MI,
        },

        {
            title: 'Cardiac Arrest',
            description: ' Sudden cessation of heart function, leading to a lack of blood flow to vital organs.',
            symptoms: [
                'Unresponsiveness.',
                'No pulse.',
                'Absence of breathing or abnormal breathing (e.g., gasping).',
            ],
            management: [
                'Immediate initiation of CPR (Cardiopulmonary Resuscitation).',
                'Early defibrillation using an AED (Automated External Defibrillator) if a shockable rhythm is present.',
                'Advanced airway management and IV/IO access.',
                'Administer epinephrine 1 mg IV/IO every 3-5 minutes.',
                'Treat reversible causes (e.g., hypoxia, hypovolemia, acidosis, toxins, cardiac tamponade, etc.).',
            ],
            explainer: explainer2,
            cardimage: CA,
        },

        {
            title: ' Congestive Heart Failure (CHF)',
            description: ' A condition where the heart cannot pump blood efficiently, leading to fluid buildup in the lungs and other parts of the body.',
            symptoms: [
                'Shortness of breath, especially on exertion or lying down.',
                'Swelling in the legs, ankles, and feet.',
                'Rapid or irregular heartbeat.',
                'Persistent cough or wheezing with white or pink blood-tinged mucus.',
            ],
            management: [
                'Sit the patient upright to relieve dyspnea.',
                'Administer oxygen as needed.',
                'Nitroglycerin to reduce preload and afterload.',
                'Consider CPAP (Continuous Positive Airway Pressure) if indicated.',
                'Diuretics like furosemide may be administered if within scope and protocol.',
            ],
            explainer: explainer3,
            cardimage: CHF,
        },

        {
            title: 'Atrial Fibrillation with Rapid Ventricular Response (RVR)',
            description: ' A common arrhythmia where the atria beat irregularly and rapidly, leading to a rapid ventricular rate.',
            symptoms: [
                'Palpitations.',
                'Shortness of breath.',
                'Dizziness or lightheadedness.',
                'Chest pain.',
            ],
            management: [
                'Assess and manage the patient’s airway, breathing, and circulation.',
                'Monitor ECG to confirm the rhythm.',
                'Administer rate-controlling drugs such as beta-blockers or calcium channel blockers if indicated.',
                'Consider synchronized cardioversion if the patient is unstable.',
            ],
            explainer: explainer6,
            cardimage: AF,
        },

        {
            title: 'Pulmonary Embolism (PE)',
            description: ' A blockage in one of the pulmonary arteries in the lungs, usually due to blood clots that travel from the legs or other parts of the body (deep vein thrombosis).',
            symptoms: [
                'Sudden shortness of breath.',
                'Sharp chest pain that may worsen with deep breaths.',
                'Rapid heart rate.',
                'Coughing up blood.',
            ],
            management: [
                'Provide high-flow oxygen.',
                'Monitor and support airway and breathing.',
                'Rapid transport to the hospital.',
                'Early notification to the receiving facility to prepare for potential thrombolytic therapy.',
            ],
            explainer: explainer4,
            cardimage: per,
        },

        {
            title: 'Cardiogenic Shock',
            description: "A condition in which the heart suddenly can't pump enough blood to meet the body's needs, often due to severe myocardial infarction.",
            symptoms: [
              'Hypotension (low blood pressure).',  
              'Weak, thready pulse.',  
              'Rapid breathing.',  
              'Cool, clammy skin.',  
              'Altered mental status.',  
            ],
            management: [
                'Administer high-flow oxygen.',
                'IV access for fluid administration, but avoid fluid overload.',
                'Administer vasopressors if within scope and indicated.',
                'Immediate transport to a facility with cardiac care capabilities.',
            ],
            explainer: explainer5,
            cardimage: cardio,
        },

        {
            title: 'Acute Coronary Syndrome (ACS)',
            description: 'Acute Coronary Syndrome refers to a range of conditions associated with sudden, reduced blood flow to the heart. It includes Unstable Angina, Non-ST-Elevation Myocardial Infarction (NSTEMI), and ST-Elevation Myocardial Infarction (STEMI). ACS is typically caused by the rupture of an atherosclerotic plaque and subsequent formation of a blood clot, leading to myocardial ischemia.',
            symptoms: [
                'Chest pain or discomfort, often described as pressure, tightness, or heaviness, that may radiate to the arms, neck, jaw, or back.',
                'Shortness of breath, sweating, nausea, lightheadedness, or fainting.',
                'Symptoms may vary in intensity and may be atypical in elderly patients, women, or those with diabetes.',
            ],
            management: [
                'Initial Treatment: Administer oxygen if the patient is hypoxic, aspirin (160-325 mg), nitroglycerin (unless contraindicated), and morphine for pain relief.',
                'Reperfusion Therapy: For STEMI, perform percutaneous coronary intervention (PCI) if available within 90 minutes, or administer fibrinolytics if PCI is not available.',
                'Medications: Administer antiplatelets (e.g., clopidogrel), anticoagulants (e.g., heparin), beta-blockers, ACE inhibitors, and statins as indicated.',
                'Ongoing Monitoring: Monitor ECG, vital signs, and cardiac biomarkers to assess treatment efficacy and detect complications.',
            ],
            explainer: explainer1,
            cardimage: ACS,
        },

        {
            title: 'Aortic Dissection',
            description: 'Aortic Dissection is a life-threatening condition where a tear in the inner layer of the aorta causes blood to flow between the layers of the vessel wall, leading to separation (dissection) and possibly rupture. It is most common in the ascending aorta and requires immediate medical intervention.',
            symptoms: [
                'Sudden, severe chest or back pain, often described as tearing or ripping, that may radiate to the neck, jaw, or abdomen.',
                'Differential blood pressure in the arms, hypotension, or signs of shock.',
                'Possible neurological symptoms if the dissection affects arteries supplying the brain.',
            ],
            management: [
                'Initial Stabilization: Administer IV antihypertensives (e.g., beta-blockers like esmolol) to lower blood pressure and reduce the force of blood against the aortic wall.',
                'Pain Management: Provide analgesia to control pain and reduce sympathetic response.',
                'Surgical Intervention: Emergent surgery is required for Type A dissections (involving the ascending aorta). Type B dissections (descending aorta) may be managed medically unless complications arise.',
                'Imaging: Confirm diagnosis with imaging studies such as CT angiography, which is the gold standard.',
            ],
            explainer: explainer7,
            cardimage: aortic,
        },

        {
            title: 'Hypertensive Emergency',
            description: 'Hypertensive Emergency occurs when there is a severe elevation in blood pressure (usually >180/120 mmHg) with evidence of impending or progressive end-organ damage (e.g., encephalopathy, heart failure, renal failure). It requires immediate but controlled reduction of blood pressure.',
            symptoms: [
                'Severe headache, confusion, blurred vision, and altered mental status.',
                'Chest pain, shortness of breath, and signs of heart failure.',
                'Nausea, vomiting, and signs of renal dysfunction (e.g., oliguria).',
            ],
            management: [
                'IV Antihypertensives: Administer drugs like labetalol, nitroprusside, or nicardipine to gradually reduce blood pressure, aiming for a 20-25% reduction in the first hour.',
                'Monitoring: Continuously monitor blood pressure, ECG, and signs of end-organ damage.',
                'Targeted Treatment: Address specific organ damage (e.g., manage acute pulmonary edema, ischemic stroke, or myocardial infarction) based on clinical presentation.',
                'Ongoing Care: Transition to oral antihypertensives once blood pressure is stabilized, and address the underlying cause of hypertension.',
            ],
            explainer: explainer3,
            cardimage: hyper,
        },

        {
            title: 'Pericarditis and Cardiac Tamponade',
            description: 'Pericarditis is inflammation of the pericardium, the fibrous sac surrounding the heart. Cardiac Tamponade is a severe complication of pericarditis, where fluid accumulates in the pericardial space, compressing the heart and impairing its ability to pump blood.',
            symptoms: [
                'Pericarditis: Sharp, pleuritic chest pain that worsens with inspiration and lying flat, relieved by sitting up and leaning forward. Pericardial friction rub on auscultation.',
                'Cardiac Tamponade: Beck’s triad (hypotension, muffled heart sounds, jugular venous distension), tachycardia, and pulsus paradoxus (exaggerated drop in blood pressure during inspiration).',
            ],
            management: [
                'Pericarditis: Treat with NSAIDs (e.g., ibuprofen) or colchicine for inflammation. Corticosteroids may be considered in refractory cases.',
                'Cardiac Tamponade: Perform emergency pericardiocentesis to remove fluid from the pericardial sac. Monitor closely for recurrence and consider surgical intervention (pericardial window) if necessary.',
                'Ongoing Monitoring: Monitor ECG for signs of electrical alternans and assess hemodynamic status frequently.',
            ],
            explainer: explainer5,
            cardimage: tamponade,
        },

        // {
        //     title: '',
        //     description: '',
        //     symptoms: [],
        //     management: [],
        // },
    ]
    return (
        <>
        <Link to='/topics'>Back to Topics</Link>

        <div className="cardiac-container">
                    <div className='cardiac-sub-topics'>
                        <h1>Cardiac Emergencies</h1>
                        <p>Let's get started..</p>
                        <div className='cardiac-sub-topic-items'>
                            <div className='each-cardiac-item'>
                                {emergencies.map((item, index) => (
                                    <div key={index} className='each-cardiac-sub-topic'>
                                        <img src={item.cardimage} alt='card-image' className='card-image'/>
                                        <h2>{item.title}</h2>
                                        <img src={item.explainer} alt='explainer' className='explainer'/>
                                        <p><strong>Description:</strong> {item.description}</p>
                                        
                                        <h3>Symptoms</h3>
                                        <ul>
                                            {item.symptoms.map((symptom, i) => (
                                                <li key={i}>{symptom}</li>
                                            ))}
                                        </ul>
                                        <h3>Management</h3>
                                        <ul>
                                            {item.management.map((manage, i) => (
                                                <li key={i}>{manage}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
        </div>
        <div>
                <button className='nav-btn' onClick={handleNext}>
                    <span>Next Page</span>
                    <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
                    </svg>
                </button>
            </div>

        </>
    )
}

export default Cardiac;