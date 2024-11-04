import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../Assets/styles/styles.css';
import htcl from '../../Assets/images/head-tilt-chin-lift.jpg';
import jwt from '../../Assets/images/jaw-thrust.png';
import suction from '../../Assets/images/suctioning.jpg';
import opa from '../../Assets/images/OPA.jpeg';
import npa from '../../Assets/images/NPA.jpg';
import bvm from '../../Assets/images/bvm.jpg';
import sellick from '../../Assets/images/sellick.jpg';

const BasicAdjuncts = () => {
    const [visibleImages, setVisibleImages] = useState({
        headTilt: false,
        jawThrust: false,
        suction: false,
        opa: false,
        npa: false,
        bvm: false,
        sellick: false
    });

    const toggleVisibility = (imageKey) => {
        setVisibleImages((prevVisibleImages) => ({
            ...prevVisibleImages,
            [imageKey]: !prevVisibleImages[imageKey],
        }));
    };

    return (
        <>
            <button className="loginbuttons"><Link to={'/airway'}>Back to Airway Management Topics</Link></button>
             
             <button className="loginbuttons"><Link to={'/topics'}>Back to Topics</Link></button>

             <button className="loginbuttons"><Link to={'/advanced-airway-techniques'}>Next Topic - Advanced Airway Techniques and Adjuncts</Link></button>

            <div className="basics-container">
                <div className="basics-header">
                    <h1>Basic Airway Techniques and Adjuncts</h1>
                </div>
                <div className="basics-body">
                    <p>In emergency situations, maintaining an open airway is vital.</p>
                    <p>There are several basic techniques and adjuncts that paramedics use to ensure the airway remains clear and functional.</p>
                    <p>These methods are often the first line of intervention before more advanced procedures are considered.</p>
                </div>
                <div className="basics-subs">
                    <h3>Head-Tilt/Chin-Lift Maneuver.</h3>
                    <p><strong>Purpose:</strong> This technique is used to open the airway in unconscious patients <span>(whom spinal injuries are not suspected)</span> by moving the tongue away from the back of the throat.</p>
                    <h4>Procedure</h4>
                    <ol>
                        <li>Place one hand on the patient's forehead.</li>
                        <li>Gently tilt the head back.</li>
                        <li>Use your other hand to lift the chin upwards.</li>
                        <li>Be careful not to hyperextend the neck.</li>
                    </ol>
                    <div className='basics-image'>
                        <button onClick={() => toggleVisibility('headTilt')} className="loginbuttons">
                            {visibleImages.headTilt ? 'Hide' : 'Check it out'}
                        </button>
                        {visibleImages.headTilt && <img src={htcl} alt="Head Tilt/Chin Lift" className='basics-img' />}
                    </div>
                    <br/>
                    <h3>Jaw-Thrust Maneuver</h3>
                    <p><strong>Purpose:</strong> This technique is used to open the airway in unconscious patients <span>(whom spinal injuries are suspected)</span>. It opens the airway without moving the neck.</p>
                    <h4>Procedure</h4>
                    <ol>
                        <li>Kneel at the top of the patient's head.</li>
                        <li>Place your fingers behind the angle of the lower jaw.</li>
                        <li>Use your thumbs to open the mouth.</li>
                        <li>Move the jaw forward.</li>
                        <li>Keep the patient's neck in a neutral position.</li>
                    </ol>
                    <div className='basics-image'>
                        <button onClick={() => toggleVisibility('jawThrust')} className="loginbuttons">
                            {visibleImages.jawThrust ? 'Hide' : 'Check it out'}
                        </button>
                        {visibleImages.jawThrust && <img src={jwt} alt="Jaw Thrust" className='basics-img' />}
                    </div>
                    <br/>
                    <h3>Suctioning</h3>
                    <p><strong>Purpose:</strong> This technique is used to remove secretions, blood, vomit, and foreign objects from the airway that could cause obstruction or aspiration.</p>
                    <h4>Procedure</h4>
                    <ol>
                        <li>Select appropriate size by measuring the catheter from the corner of the mouth to the earlobe.</li>
                        <li>Attach the suction catheter to the suction unit.</li>
                        <li>Turn on the suction unit.</li>
                        <li>Insert the catheter into the patient's mouth or nose without suction.</li>
                        <li>Apply suction while withdrawing the catheter and moving the catheter in a circular motion.</li>
                        <li>Repeat as necessary.</li>
                    </ol>
                    <div className='basics-image'>
                        <button onClick={() => toggleVisibility('suction')} className="loginbuttons">
                            {visibleImages.suction ? 'Hide' : 'Check it out'}
                        </button>
                        {visibleImages.suction && <img src={suction} alt="Suctioning" className='basics-img' />}
                    </div>
                    <br/>
                    <h2>Basic Airway Adjuncts.</h2>
                    <h3>Oropharyngeal Airway (OPA)</h3>
                    <p><strong>Purpose:</strong> This adjunct is used to maintain an open airway in unconscious patients who are breathing spontaneously.</p>
                    <p>It keeps the tongue from blocking the airway.</p>
                    <h4>Procedure</h4>
                    <ol>
                        <li>Select the appropriate size by measuring the airway from the corner of the mouth to the angle of the jaw.</li>
                        <li>Open the patient's mouth.</li>
                        <li>Insert the airway with the tip pointing up towards the roof of the mouth.</li>
                        <li>Rotate the airway 180 degrees as you insert it.</li>
                        <li>Advance the airway until the flange rests on the patient's lips.</li>
                    </ol>
                    <div className='basics-image'>
                        <button onClick={() => toggleVisibility('opa')} className="loginbuttons">
                            {visibleImages.opa ? 'Hide' : 'Check it out'}
                        </button>
                        {visibleImages.opa && <img src={opa} alt="OPA" className='basics-img' />}
                    </div>
                    <br/>
                    <h3>Nasopharyngeal Airway (NPA)</h3>
                    <p><strong>Purpose:</strong> This adjunct is used to maintain an open airway in conscious or semi-conscious patients where an OPA might cause a gag reflex.</p>
                    <h4>Procedure</h4>
                    <ol>
                        <li>Select the appropriate size by measuring the airway from the tip of the nose to the earlobe.</li>
                        <li>Lubricate the airway with a water-based lubricant.</li>
                        <li>Insert the airway into the nostril with the bevel facing the septum.</li>
                        <li>Gently advance the airway until the flange rests on the nostril.</li> 
                    </ol>
                    <div className='basics-image'>
                        <button onClick={() => toggleVisibility('npa')} className="loginbuttons">
                            {visibleImages.npa ? 'Hide' : 'Check it out'}
                        </button>
                        {visibleImages.npa && <img src={npa} alt="NPA" className='basics-img' />}
                    </div>
                    <br/>
                    <h3>Bag-Valve-Mask (BVM) Ventilation</h3>
                    <p><strong>Purpose:</strong> This adjunct is used to provide positive pressure ventilation to patients who are not breathing adequately.</p>
                    <h4>Procedure</h4>
                    <ol>
                        <li>Place the mask over the patient's nose and mouth.</li>
                        <li>Ensure a tight seal by using the 'E-C' clamp technique.</li>
                        <li>Attach the BVM to the oxygen source.</li>
                        <li>Squeeze the bag to deliver a breath.</li>
                        <li>Allow the chest to rise and fall between breaths. (One breath every 5-6 secs for adults)</li>
                    </ol>
                    <div className='basics-image'>
                        <button onClick={() => toggleVisibility('bvm')} className="loginbuttons">
                            {visibleImages.bvm ? 'Hide' : 'Check it out'}
                        </button>
                        {visibleImages.bvm && <img src={bvm} alt="BVM Ventilation" className='basics-img' />}
                    </div>
                    <br/>
                    <h3>Sellick Maneuver (Cricoid Pressure)</h3>
                    <p><strong>Purpose:</strong> This technique is used to prevent regurgitation and aspiration during positive pressure ventilation and intubation.</p>
                    <h4>Procedure</h4>
                    <ol>
                        <li>Place the thumb and forefinger on the cricoid cartilage.</li>
                        <li>Apply gentle pressure downward on the cricoid cartilage.</li>
                        <li>Continue to apply pressure until the endotracheal tube is in place.</li>
                    </ol>
                    <div className='basics-image'>
                        <button onClick={() => toggleVisibility('sellick')} className="loginbuttons">
                            {visibleImages.sellick ? 'Hide' : 'Check it out'}
                        </button>
                        {visibleImages.sellick && <img src={sellick} alt="Sellick Maneuver" className='basics-img' />}
                    </div>
                    <br/>
                </div>
                <div className="basics-fin">
                    <p>These basic airway techniques and adjuncts are crucial for maintaining patient airway patency in the pre-hospital setting.</p>
                    <p>Proper use of these methods can stabilize a patient’s condition and provide the necessary time to proceed with advanced airway management if needed.</p>
                </div>
            </div>
            <button className="loginbuttons"><Link to={'/advanced-airway-techniques'}>Next Topic - Advanced Airway Techniques and Adjuncts</Link></button>
        </>
    );
}

export default BasicAdjuncts;