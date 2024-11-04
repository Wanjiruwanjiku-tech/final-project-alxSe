import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/styles/styles.css';
import facial from '../../Assets/images/facial.jpg';
import geriatric from '../../Assets/images/geriatric.webp';
import neuro from '../../Assets/images/neuro.jpg';
import obese from '../../Assets/images/obese.png';
import pediatric from '../../Assets/images/pediatric.jpg';
import pregnant from '../../Assets/images/pregnant.jpg';

const AirwaySpecialPopulation = () => {
  // State to handle image visibility for each section
  const [imageVisibility, setImageVisibility] = useState({
    pediatric: false,
    obese: false,
    pregnant: false,
    geriatric: false,
    facialTrauma: false,
    neuromuscular: false,
  });

  const toggleImageVisibility = (section) => {
    setImageVisibility((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
    <button className="loginbuttons"><Link to={'/airway'}>Back to Airway Management Topics</Link></button>
    <button className="loginbuttons"><Link to={'/topics'}>Back to Topics</Link></button>
    <button className="loginbuttons"><Link to={'/pharmacology-related-to-airway-management'}>Next Topic - Airway Pharmacology</Link></button>

    <div className="advanced">
        <div className='advanced-header'>
            <h1>Airway Management in Special Populations</h1>
        </div>

      <section className='each-advanced-lists'>
        <h2 className='each-advanced-list'>Pediatric Patients</h2>
        <p>
          <strong>Anatomical Considerations:</strong> Children have proportionally larger heads and tongues, smaller airways, and a higher larynx, making intubation more challenging.
          <br />
          <strong>Pysiological Differences:</strong> Infants and young children have a higher oxygen consumption rate and lower functional residual capacity, leading to quicker desaturation.
          <br />
          <strong>Management Tips:</strong> Use appropriately sized equipment, including smaller endotracheal tubes (ETT) without a cuff in infants. Preoxygenation and rapid sequence intubation (RSI) are essential, and careful monitoring of oxygenation and ventilation is critical.
        </p>
        <button className='loginbuttons' onClick={() => toggleImageVisibility('pediatric')}>
          {imageVisibility.pediatric ? 'Hide' : 'Show'} Image
        </button>
        {imageVisibility.pediatric && <img className='airway-special-population' src={pediatric} alt="Pediatric Airway" />}
      </section>

      <section className='each-advanced-lists'>
        <h2 className='each-advanced-list'>Obese Patients</h2>
        <p>
        <strong>Anatomical Considerations:</strong> Obesity can lead to difficult airway management due to excessive soft tissue in the neck and airway, reduced neck mobility, and a higher risk of obstructive sleep apnea (OSA).
          <br />
          <strong>Pysiological Differences:</strong> These patients often have decreased functional residual capacity and may desaturate more rapidly.
          <br />
          <strong>Management Tips:</strong> Position the patient in a "ramped" position to align the ear with the sternal notch for optimal intubation. Use larger airway adjuncts and consider video laryngoscopy to improve visualization.
        </p>
        <button className='loginbuttons' onClick={() => toggleImageVisibility('obese')}>
          {imageVisibility.obese ? 'Hide' : 'Show'} Image
        </button>
        {imageVisibility.obese && <img className='airway-special-population' src={obese} alt="Obese Patient Airway" />}
      </section>

      <section className='each-advanced-lists'>
        <h2 className='each-advanced-list'>Pregnant Patients</h2>
        <p>
        <strong>Anatomical Considerations:</strong> Pregnancy causes airway edema and increased vascularity, leading to friability of the tissues and a higher risk of bleeding. The stomach is displaced upward, increasing the risk of aspiration.
          <br />
          <strong>Pysiological Differences:</strong> Pregnant women have increased oxygen consumption and a reduced functional residual capacity, making preoxygenation and rapid sequence intubation crucial.
          <br />
          <strong>Management Tips:</strong> Use smaller ETT sizes due to airway edema. Ensure left lateral tilt to prevent aortocaval compression by the gravid uterus. Prepare for rapid desaturation and have suction readily available due to the increased risk of aspiration.
        </p>
        <button className='loginbuttons' onClick={() => toggleImageVisibility('pregnant')}>
          {imageVisibility.pregnant ? 'Hide' : 'Show'} Image
        </button>
        {imageVisibility.pregnant && <img className='airway-special-population' src={pregnant} alt="Pregnant Patient Airway" />}
      </section>

      <section className='each-advanced-lists'>
        <h2 className='each-advanced-list'>Geriatric Patients</h2>
        <p>
        <strong>Anatomical Considerations:</strong> Aging causes loss of tissue elasticity and muscle tone, which can make airway management more difficult. Additionally, cervical arthritis can limit neck mobility.
          <br />
          <strong>Pysiological Differences:</strong> Reduced lung elasticity and comorbidities like COPD or heart disease complicate airway management.
          <br />
          <strong>Management Tips:</strong> Gentle handling of the airway is crucial to prevent trauma. Consider using advanced airway management tools like video laryngoscopy. Be cautious with drug dosages for sedation and RSI, as older adults are more susceptible to adverse effects.
        </p>
        <button className='loginbuttons' onClick={() => toggleImageVisibility('geriatric')}>
          {imageVisibility.geriatric ? 'Hide' : 'Show'} Image
        </button>
        {imageVisibility.geriatric && <img className='airway-special-population' src={geriatric} alt="Geriatric Patient Airway" />}
      </section>

      <section className='each-advanced-lists'>
        <h2 className='each-advanced-list'>Patients with Facial Trauma</h2>
        <p>
        <strong>Anatomical Considerations:</strong>: Facial trauma can lead to distorted anatomy, bleeding, and swelling, complicating airway visualization and securing the airway.
          <br />
          <strong>Management Tips:</strong> Consider alternative methods such as a surgical airway (cricothyrotomy) if intubation is not feasible. Avoid nasal intubation in cases of suspected skull fractures. Keep the patient immobilized if there is a risk of cervical spine injury.
        </p>
        <button className='loginbuttons' onClick={() => toggleImageVisibility('facialTrauma')}>
          {imageVisibility.facialTrauma ? 'Hide' : 'Show'} Image
        </button>
        {imageVisibility.facialTrauma && <img className='airway-special-population' src={facial} alt="Facial Trauma Airway" />}
      </section>

      <section className='each-advanced-lists'>
        <h2 className='each-advanced-list'>Patients with Neuromuscular Disorders</h2>
        <p>
        <strong>Anatomical Considerations:</strong> Neuromuscular disorders like ALS or muscular dystrophy can lead to weakened respiratory muscles, making airway protection and ventilation challenging.
          <br />
          <strong>Management Tips:</strong> These patients may require non-invasive ventilation support or early intubation to protect the airway. Use caution with muscle relaxants, as they may exacerbate muscle weakness.
        </p>
        <button className='loginbuttons' onClick={() => toggleImageVisibility('neuromuscular')}>
          {imageVisibility.neuromuscular ? 'Hide' : 'Show'} Image
        </button>
        {imageVisibility.neuromuscular && <img className='airway-special-population' src={neuro} alt="Neuromuscular Disorder Airway" />}
      </section>
    </div>
    <button className="loginbuttons"><Link to={'/pharmacology-related-to-airway-management'}>Next Topic - Airway Pharmacology</Link></button>
    </>
  );
};

export default AirwaySpecialPopulation;