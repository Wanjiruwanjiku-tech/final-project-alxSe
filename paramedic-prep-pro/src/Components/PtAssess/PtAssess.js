import React from 'react';
import { Link } from 'react-router-dom';

const PatientAssessment = () => {

    return (
       <>
         <section>
         <button className="loginbuttons"><Link to={'/topics'}>Back to Topics</Link></button>
            <div className='pt-container'>
                <h1>Patient Assessment</h1>
                <p>
                    Patient assessment is a critical skill for paramedics. 
                    It is the process of evaluating a patient's condition and 
                    determining the appropriate course of action.
                </p>
                <p>
                    The primary goal of patient assessment is to identify 
                    life-threatening conditions and provide appropriate 
                    treatment as quickly as possible.
                </p>
                <div className='pt-intro'>
                    <h1>Patient Assessment Procedure.</h1>
                    <p>
                        The patient assessment procedure consists of several 
                        steps, including:
                    </p>
                    <ol>
                        <li>Scene size-up</li>
                        <li>Primary assessment</li>
                        <li>History taking</li>
                        <li>Secondary assessment</li>
                        <li>Vital signs</li>
                        <li>Reassessment</li>
                    </ol>
                </div>
                <div className='pt-grid'>
                    <div className='each-pt'>
                        <h1>Scene Size-up</h1>
                        <p>
                            In any emergency, the inital assessment of the
                            scene is crucial. It facilitates effective response. 
                            This process is called Scene size-up.
                        </p>
                        <p>
                            The main objective of Scene size-up is to analyze potential dangers, 
                            define the problem and its extent and esimate the resources required.
                        </p>

                        <h2>Components of Scene Size-up</h2>
                        <ul>
                            <li>Scene safety - The procedure begins by surveying the area for potential Hazards that could impact the safety of those involved</li>
                            <li>Number of patients - Next, determine the number of individuals who require assistance, and evaluate the sevierity of their injuries.</li>
                            <li>Mechanism of injury- Determine the Mechanism of injury, this includes the events leading to the injury or ilness. Was it a car accident?, Did the patient choke of something?</li>
                            <li>Need for additional resources - Afterwards determine if you would require more resources including police officers, fire fighters, hazmat specialist or even other medical units.</li>
                        </ul>
                    </div>


                    <div className='each-pt'>
                        <h1>Primary Assessment/Initial Survey</h1>
                        <p>
                            This process is designed to help detect immediate life threats.
                        </p>
                        <h2>Primary Assessment Process</h2>
                        <ul>
                            <li>General Impression - Begin by assessing the patient's general appearance. This includes their level of consciousness, breathing, and skin color.</li>
                            <li>Determine the parients Level of Conciousness - Utilize the AVPU Scale </li>
                            <li>Determine the chief complaint - This involves determining the apparent life threat</li>
                            <li>Assess ABC - This includes Airway, Breathing and Circulation</li>
                            <li>Make Transport Decision. - Determine wheather to Load and Go or wheather to Stay and Play</li>
                        </ul>
                    </div>

                    <div className='each-pt'>
                        <h1>History Taking and Secondary Assessment</h1>
                        <p>
                            After the primary assessment, the paramedic will take a 
                            detailed history of the patient's condition.
                        </p>
                        <ol>
                            <li>History of present illness using OPQRST which stands for, Onset, Provocation, Quality, Radiation, Servierity, Time.</li>
                            <li>Past Medical History using SAMPLE, which stands for Signs and Symptoms, Allergies, Medications in use, Past pertinent history, Last oral intake, Events leading to the emergency</li>
                            <li>Perform a secondary assessment ana assess all body systems. Use Inspection, Palpation, Percussion and Auscultation to gather more details</li>
                            <li>Take Vital signs including Blood pressure, Heart rate, O2 Saturation, Respirattory rate</li>
                        </ol>
                    </div>

                    <div className='each-pt'>
                        <h1>Reassessment/Ongoing Assessment</h1>
                        <p>This Include Reassessment of the primary survey. Should be done every 5min for critical patients and every 15 minutes for stable patients.</p>
                    </div>
                </div>

                <h2>ABCs</h2>
                <h3>A - Airway</h3>
                    <p>
                        Assess the patient's airway. This involves checking for 
                        any obstructions that may be preventing the patient from 
                        breathing.
                    </p>
                    <p>
                        Use the appropriate maneuvers to manipulate the airway. This Includes, Head tilt - chin lift maneuver 
                        for cases where spinal injury is not suspected and Jaw thrust maneuver for cases where spinal injury is suspected.
                    </p>

                    <h3>B - Breathing</h3>
                    <p>
                        Check the patient's breathing. 
                        This involves observing the chest rise and fall, 
                        listening for breath sounds, and feeling for airflow.
                    </p>

                        <h3>C - Circulation</h3>
                        <p>
                            Check the patient's circulation. 
                            This involves checking the patient's pulse, assess for skin color, temperature and condition. 
                            Manage major bleeding if present.
                        </p>
                <h2>Setting up a sfetey zone</h2>
            </div>
         </section>
       </>
    );

}
export default PatientAssessment;