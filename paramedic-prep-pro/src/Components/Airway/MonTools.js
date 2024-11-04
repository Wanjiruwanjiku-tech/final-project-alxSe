import React from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/styles/styles.css';
import capnography from '../../Assets/images/capnography.jpg';
import EDD from '../../Assets/images/EDD.avif';
import oximeter from '../../Assets/images/oximeter.jpg';
import stethoscope from '../../Assets/images/stethoscope.jpg';
import ultra from '../../Assets/images/ultrasound.jpg';
import xray from '../../Assets/images/Xray.jpg';

const tools = [
  {
    name: 'Capnography',
    image: capnography,
    description: 'Capnography is used to monitor the concentration of carbon dioxide (CO2) in exhaled air, providing information on ventilation and metabolism. It is essential for confirming endotracheal tube placement and detecting hypoventilation or apnea.',
  },
  {
    name: 'Pulse Oximetry',
    image: oximeter,
    description: 'Pulse oximetry measures the oxygen saturation of arterial blood (SpO2). It is a non-invasive tool crucial for monitoring oxygenation in patients undergoing airway management.',
  },
  {
    name: 'Esophageal Detector Device (EDD)',
    image: EDD,
    description: 'The Esophageal Detector Device helps confirm endotracheal tube placement by assessing the presence of negative pressure in the esophagus. If the tube is in the trachea, there is no suction effect, indicating correct placement.',
  },
  {
    name: 'Stethoscope',
    image: stethoscope,
    description: 'The stethoscope is a basic but vital tool for auscultation of breath sounds. It helps confirm bilateral lung ventilation and detect any airway obstructions or complications.',
  },
  {
    name: 'Chest X-ray',
    image: xray,
    description: 'Chest X-rays are used post-intubation to confirm the correct position of the endotracheal tube, especially in cases where clinical assessment is inconclusive.',
  },
  {
    name: 'Ultrasound',
    image: ultra,
    description: 'Ultrasound is increasingly used in airway management to confirm tube placement, guide needle cricothyrotomy, and assess for potential complications like pneumothorax.',
  },
];

const AirwayMonitoringTools = () => {
  return (
    <>
    <button className="loginbuttons"><Link to={'/airway'}>Back to Airway Management Topics</Link></button>
             
    <button className="loginbuttons"><Link to={'/topics'}>Back to Topics</Link></button>
    <div className="airway-monitoring-tools">
      <h1>Airway Monitoring Tools</h1>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card">
            <img src={tool.image} alt={tool.name} className="tool-image" />
            <h2 className="tool-name">{tool.name}</h2>
            <p className="tool-description">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default AirwayMonitoringTools;