import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ETT from '../../Assets/images/ETT.jpg';
import CRIC from '../../Assets/images/cricothyrotomy.png';
import RSI from '../../Assets/images/RSI.jpg';
import SGA from '../../Assets/images/SGA.jpg';
import TRACH from '../../Assets/images/Tracheostomy.jpg';
import VIDLARG from '../../Assets/images/videolaryngoscope.jpg';

const AirwayComparisonTable = () => {
    return (
        <>
            <table style={{ border: '1px solid black', width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                <tr>
                    <th style={{ border: '1px solid black', padding: '8px', background: 'linear-gradient(45deg, #ffffff 30%, #f5ce06 90%)' }}>Feature</th>
                    <th style={{ border: '1px solid black', padding: '8px', background: 'linear-gradient(45deg, #ffffff 30%, #f5ce06 90%)' }}>Cricothyrotomy</th>
                    <th style={{ border: '1px solid black', padding: '8px', background: 'linear-gradient(45deg, #ffffff 30%, #f5ce06 90%)' }}>Tracheostomy</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}><strong>Location</strong></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Performed through the cricothyroid membrane, between the thyroid and cricoid cartilage.
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Performed on the trachea, usually between the second and fourth tracheal rings.
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}><strong>Purpose</strong></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Emergency procedure to establish a temporary airway when other methods fail.
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Can be elective or emergency procedure for long-term airway management.
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}><strong>Indications</strong></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Severe upper airway obstruction, facial trauma, or when rapid airway access is needed.
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Chronic respiratory failure, prolonged ventilation, or bypassing upper airway obstruction.
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}><strong>Duration</strong></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Typically temporary, used until a more definitive airway is established.
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Can be temporary or permanent, depending on the patient’s condition.
                    </td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}><strong>Procedure Complexity</strong></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    Quicker and easier to perform in an emergency.
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                    More complex, requires surgical precision, usually performed in a controlled environment.
                    </td>
                </tr>
                </tbody>
            </table>
      </>
    );
  };

const Advanced = () => {
    // handle state and image visibility
    const [VisibleImages, setVisibleImages] = useState({
        ETT: false,
        SGA: false,
        Tracheostomy: false,
        Cricothyrotomy: false,
        RSI: false,
        VideoLaryngoscopy: false
    });

    const toggleVisibility = (imageKey) => {
        setVisibleImages((prevVisibleImages) => ({
            ...prevVisibleImages,
            [imageKey]: !prevVisibleImages[imageKey]
        }));
    };

    return (
        <>
            <button className="loginbuttons"><Link to={'/airway'}>Back to Airway Management Topics</Link></button>
             
             <button className="loginbuttons"><Link to={'/topics'}>Back to Topics</Link></button>

             <button className="loginbuttons"><Link to={'/airway-management-in-special-populations'}>Next Topic - Airway Management in Special Populations</Link></button>

            <div className="advanced">
                <div className='advanced-header'>
                <h1>Advanced Airway Management</h1>
                </div>
                <div className='advanced-body'>
                    <p>Advanced airway management techniques are critical in situations where basic airway interventions are insufficient to maintain a patent airway.</p>
                    <p>These techniques require more specialized skills and are often used in more severe cases where the patient's airway is compromised, or when providing long-term ventilation support.</p>
                    <p>Below are the key advanced airway management techniques and tools:</p>
                </div>
                <div className='advanced-list'>
                    <ul>
                        <li>Endotracheal Intubation</li>
                        <li>Supraglottic Airway Devices</li>
                        <li>Tracheostomy</li>
                        <li>Emergency Cricothyrotomy</li>
                        <li>Rapid Sequence Intubation</li>
                        <li>Video Laryngoscopy</li>
                    </ul>
                </div>
                <div className="each-advanced-lists">
                    <h2 className='each-advanced-list'>Endotracheal Intubation</h2>
                    <p><strong>Purpose:</strong> Endotracheal intubation is used to secure the airway by inserting a tube into the trachea, ensuring that the airway remains open and allowing for continuous mechanical ventilation.</p>
                    <p><strong>Indications:</strong> Endotracheal intubation is indicated in patients who are unable to maintain their airway, have severe respiratory distress, or require long-term ventilation support.</p>
                    <h3>Procedure</h3>
                    <ol>
                        <li>Prepare the equipment: endotracheal tube, laryngoscope, stylet, lubricant, bag-valve mask, and suction.</li>
                        <li>Position the patient: Place the patient in the sniffing position with the head extended and the neck flexed.</li>
                        <li>Preoxygenate the patient: Administer high-flow oxygen to the patient to ensure adequate oxygenation before intubation.</li>
                        <li>Insert the laryngoscope: Insert the laryngoscope into the mouth and visualize the vocal cords.</li>
                        <li>Insert the endotracheal tube: Advance the endotracheal tube through the vocal cords into the trachea.</li>
                        <li>Confirm placement: Confirm the placement of the endotracheal tube by auscultating breath sounds and observing chest rise.</li>
                        <li>Secure the tube: Secure the endotracheal tube in place and connect it to a ventilator or bag-valve mask.</li>
                    </ol>
                    <button onClick={() => toggleVisibility('ETT')} className='loginbuttons'>
                        {VisibleImages.ETT ? 'Hide Image' : 'Show Image'}
                    </button>
                    {VisibleImages.ETT && (
                        <img src={ETT} alt='Endotracheal Intubation' className='advanced-image' />
                    )}
                    <br/>

                    <h2 className='each-advanced-list'>Supraglottic Airway Devices (SGAs)</h2>
                    <p><strong>Purpose:</strong> Supraglottic airway devices (like the Laryngeal Mask Airway (LMA) or King LT) are used to maintain a patent airway by inserting a tube into the pharynx, above the glottis, allowing for ventilation and oxygenation.</p>
                    <p><strong>Indications:</strong> SGAs are indicated in patients who are unable to maintain their airway, have mild to moderate respiratory distress, or require short-term ventilation support.</p>
                    <h3>Procedure</h3>
                    <ol>
                        <li>Prepare the equipment: SGA device, lubricant, bag-valve mask, and suction.</li>
                        <li>Insert the SGA: Insert the SGA device into the mouth and advance it into the pharynx above the glottis.</li>
                        <li>Confirm placement: Confirm the placement of the SGA device by auscultating breath sounds and observing chest rise.</li>
                        <li>Secure the device: Secure the SGA device in place and connect it to a ventilator or bag-valve mask.</li>
                    </ol>
                    <button onClick={() => toggleVisibility('SGA')} className='loginbuttons'>
                        {VisibleImages.SGA ? 'Hide Image' : 'Show Image'}
                    </button>
                    {VisibleImages.SGA && (
                        <img src={SGA} alt='Supraglottic Airway Devices' className='advanced-image' />
                    )}
                    <br/>

                    <h2 className='each-advanced-list'>Tracheostomy</h2>
                    <p><strong>Purpose:</strong> A tracheostomy is a surgical procedure that creates an opening in the trachea, allowing for direct access to the airway for ventilation and oxygenation.</p>
                    <p><strong>Indications:</strong> Tracheostomy is indicated in patients who require long-term ventilation support, have upper airway obstruction, or are unable to maintain their airway.</p>
                    <h3>Procedure</h3>
                    <ol>
                        <li>Prepare the equipment: tracheostomy tube, tracheostomy kit, suction, and bag-valve mask.</li>
                        <li>Position the patient: Place the patient in a supine position with the neck extended.</li>
                        <li>Perform the tracheostomy: Make an incision in the neck and create an opening in the trachea to insert the tracheostomy tube.</li>
                        <li>Secure the tube: Secure the tracheostomy tube in place and connect it to a ventilator or bag-valve mask.</li>
                    </ol>
                    <button onClick={() => toggleVisibility('Tracheostomy')} className='loginbuttons'>
                        {VisibleImages.Tracheostomy ? 'Hide Image' : 'Show Image'}
                    </button>
                    {VisibleImages.Tracheostomy && (
                        <img src={TRACH} alt='Tracheostomy' className='advanced-image' />
                    )}
                    <br/>

                    <h2 className='each-advanced-list'>Emergency Cricothyrotomy</h2>
                    <p><strong>Purpose:</strong> Emergency cricothyrotomy is a surgical procedure that creates an opening in the cricothyroid membrane, allowing for direct access to the trachea for ventilation and oxygenation.</p>
                    <p><strong>Indications:</strong> Emergency cricothyrotomy is indicated in patients who have a complete upper airway obstruction and are unable to maintain their airway.</p>
                    <h3>Procedure</h3>
                    <ol>
                        <li>Prepare the equipment: cricothyrotomy kit, scalpel, tracheostomy tube, and bag-valve mask.</li>
                        <li>Position the patient: Place the patient in a supine position with the neck extended.</li>
                        <li>Perform the cricothyrotomy: Make an incision in the cricothyroid membrane and insert the tracheostomy tube into the trachea.</li>
                        <li>Secure the tube: Secure the tracheostomy tube in place and connect it to a ventilator or bag-valve mask.</li>
                    </ol>
                    <button onClick={() => toggleVisibility('Cricothyrotomy')} className='loginbuttons'>
                        {VisibleImages.Cricothyrotomy ? 'Hide Image' : 'Show Image'}
                    </button>
                    {VisibleImages.Cricothyrotomy && (
                        <img src={CRIC} alt='Emergency Cricothyrotomy' className='advanced-image' />
                    )}
                    <br/>

                    <h4 className='each-advanced-list'>Cricothyrotomy and Tracheostomy Differences.</h4>
                    <AirwayComparisonTable />

                    <h2>Rapid Sequence Intubation (RSI)</h2>
                    <p><strong>Purpose:</strong> Rapid sequence intubation is a technique used to secure the airway quickly and safely by administering sedatives and paralytics to facilitate endotracheal intubation.</p>
                    <p><strong>Indications:</strong> RSI is indicated in patients who require immediate airway management and are at risk of aspiration or respiratory failure.</p>
                    <h3>Procedure</h3>
                    <ol>
                        <li>Prepare the equipment: sedatives, paralytics, endotracheal tube, laryngoscope, and bag-valve mask.</li>
                        <li>Preoxygenate the patient: Administer high-flow oxygen to the patient to ensure adequate oxygenation before intubation.</li>
                        <li>Administer sedatives and paralytics: Administer sedatives and paralytics to facilitate endotracheal intubation.</li>
                        <li>Insert the laryngoscope: Insert the laryngoscope into the mouth and visualize the vocal cords.</li>
                        <li>Insert the endotracheal tube: Advance the endotracheal tube through the vocal cords into the trachea.</li>
                        <li>Confirm placement: Confirm the placement of the endotracheal tube by auscultating breath sounds and observing chest rise.</li>
                        <li>Secure the tube: Secure the endotracheal tube in place and connect it to a ventilator or bag-valve mask.</li>
                    </ol>
                    <button onClick={() => toggleVisibility('RSI')} className='loginbuttons'>
                        {VisibleImages.RSI ? 'Hide Image' : 'Show Image'}
                    </button>
                    {VisibleImages.RSI && (
                        <img src={RSI} alt='Rapid Sequence Intubation' className='basics-image' />
                    )}
                    <br/>

                    <h2 className='each-advanced-list'>Video Laryngoscopy</h2>
                    <p><strong>Purpose:</strong> Video laryngoscopy is a technique used to visualize the airway and facilitate endotracheal intubation using a video laryngoscope.</p>
                    <p><strong>Indications:</strong> Video laryngoscopy is indicated in patients who have difficult airways or require visualization of the airway for intubation.</p>
                    <h3>Procedure</h3>
                    <ol>
                        <li>Prepare the equipment: video laryngoscope, endotracheal tube, and bag-valve mask.</li>
                        <li>Insert the video laryngoscope: Insert the video laryngoscope into the mouth and visualize the airway on the screen.</li>
                        <li>Insert the endotracheal tube: Advance the endotracheal tube through the vocal cords into the trachea.</li>
                        <li>Confirm placement: Confirm the placement of the endotracheal tube by auscultating breath sounds and observing chest rise.</li>
                        <li>Secure the tube: Secure the endotracheal tube in place and connect it to a ventilator or bag-valve mask.</li>
                    </ol>
                    <button onClick={() => toggleVisibility('VideoLaryngoscopy')} className='loginbuttons'>
                        {VisibleImages.VideoLaryngoscopy ? 'Hide Image' : 'Show Image'}
                    </button>
                    {VisibleImages.VideoLaryngoscopy && (
                        <img src={VIDLARG} alt='Video Laryngoscopy' className='basics-image' />
                    )}

                </div>

                <div className='key-points'>
                    <h2>Key Points to Remember</h2>
                    <ul>
                        <li>Advanced airway management techniques are used when basic airway interventions are insufficient.</li>
                        <li>Endotracheal intubation is used to secure the airway and provide mechanical ventilation.</li>
                        <li>Supraglottic airway devices are used to maintain a patent airway and provide short-term ventilation support.</li>
                        <li>Tracheostomy and cricothyrotomy are surgical procedures that create direct access to the airway for ventilation.</li>
                        <li>Rapid sequence intubation is used to secure the airway quickly and safely in emergency situations.</li>
                        <li>Video laryngoscopy is used to visualize the airway and facilitate endotracheal intubation.</li>
                        <li>Effective communication and teamwork are essential, especially during complex procedures .</li>
                    </ul>
                </div>
            </div>
            <button className="loginbuttons"><Link to={'/airway-management-in-special-populations'}>Next Topic - Airway Management in Special Populations</Link></button>
        </>
    )
}

export default Advanced;