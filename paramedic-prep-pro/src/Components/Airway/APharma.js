import React from 'react';
import { Link } from 'react-router-dom';

const AirwayPharma = () => {
    return (
        <>
        
        <button className="loginbuttons"><Link to={'/airway'}>Back to Airway Management Topics</Link></button>
             
        <button className="loginbuttons"><Link to={'/topics'}>Back to Topics</Link></button>
        <button className="loginbuttons"><Link to={'/assessment-and-monitoring-tools'}>Next Topic - Airway Monitoring Tools</Link></button>

        <div className='pharma'>
            <div className='pharma-header'>
                <h1>Pharmacology Related to Airway Management</h1>
            </div>
            <div className='pharma-body'>
                <p>Pharmacology is critical in airway management, especially in emergency and anesthetic settings.</p>
                <p>In the paramedic's scope of practice, airway management is a critical skill, and understanding the pharmacology involved is essential for effective patient care.</p>
                <p>Here’s a breakdown of the key pharmacological agents and practices relevant to paramedics:</p>
            </div>
            <div className='pharma-list'>
                <ul>
                    <li>Airway Management Considerations</li>
                    <li>Sedatives and Induction Agents</li>
                    <li>Neuromuscular Blocking Agents (NMBAs)</li>
                    <li>Analgesics</li>
                    <li>Adjunctive Medications</li>
                </ul>
            </div>
            <div className='each-pharma-list'>
                <h2>Airway Management Considerations</h2>
                <p>When managing the airway, Paramedics must consider the following:</p>
                <ol>
                    <li><strong>Pre-Oxygenation:</strong>  Before administering any sedative or paralytic, paramedics are trained to pre-oxygenate the patient to increase the time available for successful intubation without desaturation.</li>
                    <li><strong>Patient Positioning:</strong> Proper positioning is crucial, especially in obese or trauma patients. Pharmacology is often combined with techniques like the ramped position to optimize airway visualization.</li>
                    <li><strong>Post-Intubation Care:</strong> After intubation, paramedics must ensure continued sedation and analgesia to keep the patient comfortable and prevent complications from awareness during paralysis.</li>
                    <li><strong>Adequate Ventilation and Proper use of Adjuncts:</strong> Ensure Proper ventilatory skill are used as well as the proper equipment and their respective appropriate sizes.</li>
                    <li>Monitoring and management of complications</li>
                </ol>
                <br/>

                <h2>Sedatives and Induction Agents</h2>
                <p>Common sedatives and induction agents used in airway management include:</p>
                <ul>
                    <li><strong>Propofol:</strong> A rapid-acting sedative often used for induction in the emergency setting.</li>
                    <li><strong>Etomidate:</strong> A short-acting sedative with minimal cardiovascular effects, commonly used in hemodynamically unstable patients.</li>
                    <li><strong>Ketamine:</strong> A dissociative agent with sedative and analgesic properties, often used in trauma patients.</li>
                    <li><strong>Midazolam:</strong> A benzodiazepine with sedative and amnestic properties, commonly used for procedural sedation.</li>
                </ul>
                <br/>

                <h2>Neuromuscular Blocking Agents (NMBAs)</h2>
                <p>Neuromuscular blocking agents are used to facilitate intubation by inducing paralysis. Common NMBAs include:</p>
                <ul>
                    <li><strong>Rocuronium:</strong> A non-depolarizing NMBA with a rapid onset and intermediate duration of action.</li>
                    <li><strong>Succinylcholine:</strong> A depolarizing NMBA with a rapid onset and short duration of action, often used for rapid sequence intubation.</li>
                    <li><strong>Cisatracurium:</strong> A non-depolarizing NMBA with a longer duration of action, often used for prolonged paralysis.</li>
                </ul>
                <br/>

                <h2>Analgesics</h2>
                <p>Analgesics are used to provide pain relief during airway management. Common analgesics include:</p>
                <ul>
                    <li><strong>Fentanyl:</strong> A potent opioid analgesic with a rapid onset and short duration of action, commonly used for pain management.</li>
                    <li><strong>Morphine:</strong> An opioid analgesic with a slower onset and longer duration of action, often used for pain management in non-emergent settings.</li>
                    <li><strong>Ketamine:</strong> In addition to its sedative properties, ketamine also has analgesic effects, making it a versatile agent for pain management.</li>
                </ul>
                <br/>

                <h2>Adjunctive Medications</h2>
                <p>Adjunctive medications are used to optimize intubation conditions and manage complications. Common adjuncts include:</p>
                <ul>
                    <li><strong>Atropine:</strong> An anticholinergic agent used to prevent bradycardia during intubation.</li>
                    <li><strong>Lidocaine:</strong> A local anesthetic agent used to prevent coughing and reduce airway reactivity during intubation.</li>
                    <li><strong>Epinephrine:</strong> A sympathomimetic agent used to treat hypotension and bronchospasm during intubation.</li>
                </ul>
                <br/>

            </div>
            <div className='pharma-fin'><h4>Paramedics must follow local protocols and guidelines when administering these medications. These protocols are designed to maximize patient safety and ensure effective airway management.</h4></div>
            <div className='pharma-table'>
                <h2>Common Medication Table</h2>
                <AirwayPharmaTable />
            </div>
        </div>
        </>
    )
}

const AirwayPharmaTable = () => {
    return (
        <>
            <table style={{ border: '2px solid black', width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                <tr>
                    <th style={{ border: '2px solid black', padding: '8px' }}>Drug</th>
                    <th style={{ border: '2px solid black', padding: '8px' }}>Indications</th>
                    <th style={{ border: '2px solid black', padding: '8px' }}>Dosage</th>
                    <th style={{ border: '2px solid black', padding: '8px' }}>Onset</th>
                    <th style={{ border: '2px solid black', padding: '8px' }}>Duration</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}><strong>Etomidate</strong></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Sedation for rapid sequence intubation (RSI)
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    0.3 mg/kg IV push
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    30-60 seconds
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    3-5 minutes
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}><strong>Ketamine</strong></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Sedation for RSI, pain management, or agitation control
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    For RSI: 1-2 mg/kg IV push, For pain management or agitation: 0.2-0.3 mg/kg IV or 0.5-1 mg/kg IM
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    30-60 seconds (IV), 3-4 minutes (IM)
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    5-10 minutes (IV), 12-25 minutes (IM)
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}><strong>Midazolam (Versed)</strong></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Sedation, seizures, anxiety control
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Sedation: 0.1-0.3 mg/kg IV (usual dose 2-5 mg), Seizures: 0.2 mg/kg IM or IN (usual dose 5-10 mg)
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    1-3 minutes (IV), 15 minutes (IM)
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    1-2 hours
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}><strong>Succinylcholine</strong></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Paralysis for RSI
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    1-2 mg/kg IV push (commonly 1.5 mg/kg)
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    30-60 seconds
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    4-6 minutes
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}><strong>Rocuronium</strong></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Paralysis for RSI, especially as an alternative to succinylcholine
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    1 mg/kg IV push (some protocols may use up to 1.2 mg/kg)
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    60-90 seconds
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    30-60 minutes
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}><strong>Fentanyl</strong></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Pain management, adjunct for sedation
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    1-2 mcg/kg IV push (usual dose 25-100 mcg)
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    1-2 minutes
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    30-60 minutes
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}><strong>Morphine</strong></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Pain management
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    0.1 mg/kg IV (usual dose 2-10 mg)
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    5-10 minutes
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    3-4 hours
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}><strong>Atropine</strong></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Bradycardia, premedication in pediatric intubation
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Bradycardia: 0.5 mg IV (adults) repeated every 3-5 minutes up to 3 mg, Pediatric premedication: 0.02 mg/kg IV (minimum dose 0.1 mg, maximum dose 0.5 mg)
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                        1-2 minutes
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    1-2 hours
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}><strong>Epinephrine</strong></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Cardiac arrest, anaphylaxis, hypotension (when vasopressors are indicated)
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Cardiac arrest: 1 mg IV/IO (1:10,000) every 3-5 minutes, 
                    Anaphylaxis: 0.3-0.5 mg IM (1:1,000) for adults, 0.01 mg/kg IM for pediatrics, 
                    Hypotension: Infusion at 0.1-0.5 mcg/kg/min IV
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    -
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    3-5 minutes
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}><strong>Dexmedetomidine (Precedex)</strong></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Sedation without respiratory depression (used less frequently in prehospital settings but may be encountered)
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    0.5-1 mcg/kg IV loading dose over 10 minutes, followed by 0.2-0.7 mcg/kg/hr infusion
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    5-10 minutes
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    1-2 hours
                    </td>
                </tr>
                </tbody>
            </table>
      </>
    );
  };

export default AirwayPharma;