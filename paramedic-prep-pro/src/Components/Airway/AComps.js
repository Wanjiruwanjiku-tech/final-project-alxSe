import React from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/styles/styles.css';

const AirwayComplications = () => {
  return (
    <>
    <button className="loginbuttons"><Link to={'/airway'}>Back to Airway Management Topics</Link></button>
    <button className="loginbuttons"><Link to={'/topics'}>Back to Topics</Link></button>

    <h1>Airway Management Complications</h1>
    <div className="airway-container sub-topics sub-topic-items each-item">

      <section className='each-sub-topic'>
        <h2>1. Airway Trauma</h2>
        <p>
          Causes: Airway trauma can result from difficult or repeated intubation attempts, improper use of laryngoscopes, or the use of oversized endotracheal tubes (ETTs).
          <br />
          Complications: These include laryngeal edema, vocal cord injury, tracheal lacerations, and in severe cases, tracheal rupture.
          <br />
          Prevention: Use appropriate-sized equipment, minimize force during intubation, and avoid multiple attempts. Video laryngoscopy may reduce trauma in difficult airways.
        </p>
      </section>

      <section className='each-sub-topic'>
        <h2>2. Aspiration</h2>
        <p>
          Causes: Aspiration occurs when gastric contents enter the airway, which can happen during induction of anesthesia, particularly in patients with full stomachs or delayed gastric emptying.
          <br />
          Complications: Aspiration can lead to pneumonitis, acute respiratory distress syndrome (ARDS), and even death.
          <br />
          Prevention: Use rapid sequence intubation (RSI) in high-risk patients, ensure proper patient positioning, and consider preoperative fasting protocols.
        </p>
      </section>

      <section className='each-sub-topic'>
        <h2>3. Hypoxemia</h2>
        <p>
          Causes: Hypoxemia can occur due to prolonged attempts at securing the airway, inadequate preoxygenation, or unrecognized esophageal intubation.
          <br />
          Complications: It can result in brain damage, cardiac arrest, or death.
          <br />
          Prevention: Ensure adequate preoxygenation, limit intubation attempts to 30 seconds, and confirm endotracheal tube placement with capnography.
        </p>
      </section>

      <section className='each-sub-topic'>
        <h2>4. Esophageal Intubation</h2>
        <p>
          Causes: Misplacement of the endotracheal tube into the esophagus instead of the trachea.
          <br />
          Complications: This leads to hypoxia and may result in severe neurological damage or death if not quickly recognized and corrected.
          <br />
          Prevention: Immediate verification of tube placement with capnography and bilateral chest auscultation.
        </p>
      </section>

      <section className='each-sub-topic'>
        <h2>5. Dental Injury</h2>
        <p>
          Causes: Dental injury is often caused by direct trauma during laryngoscopy, especially in patients with poor dentition or limited mouth opening.
          <br />
          Complications: This can result in broken teeth, soft tissue injury, or even avulsed teeth.
          <br />
          Prevention: Use gentle technique, consider using a video laryngoscope, and protect teeth with bite blocks if necessary.
        </p>
      </section>

      <section className='each-sub-topic'>
        <h2>6. Bronchospasm</h2>
        <p>
          Causes: Bronchospasm may be triggered by airway manipulation, particularly in patients with reactive airway disease (e.g., asthma).
          <br />
          Complications: This can result in difficulty ventilating the patient, hypoxemia, and hypercapnia.
          <br />
          Prevention: Pre-treat patients with bronchodilators and use gentle handling during airway management.
        </p>
      </section>

      <section className='each-sub-topic'>
        <h2>7. Equipment Failure</h2>
        <p>
          Causes: Equipment failure can occur due to malfunctioning laryngoscopes, broken ETT cuffs, or clogged suction devices.
          <br />
          Complications: Inability to secure or maintain the airway, leading to hypoxia or other complications.
          <br />
          Prevention: Regular equipment checks, having backup devices ready, and using equipment that is familiar and well-maintained.
        </p>
      </section>
    </div>
    <section className="basics-fin">
        <h2>Summary</h2>
        <p>
          Airway management is a critical skill that requires careful attention to detail to avoid potentially life-threatening complications. By understanding and anticipating these complications—such as airway trauma, aspiration, hypoxemia, esophageal intubation, dental injury, bronchospasm, and equipment failure—healthcare providers can take steps to prevent them. Proper preparation, the use of appropriate equipment, and adherence to best practices are essential for minimizing risks during airway management.
        </p>
      </section>
    </>
  );
};

export default AirwayComplications;