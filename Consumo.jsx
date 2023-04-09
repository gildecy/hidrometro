import React, { useState } from 'react';
import "./App1.css";



function WaterUsageCalculator() {
  const [currentReading, setCurrentReading] = useState('');
  const [previousReading, setPreviousReading] = useState('');
  const [period, setPeriod] = useState('');
  const [waterUsage, setWaterUsage] = useState(0);

  function handleCurrentReadingChange(event) {
    setCurrentReading(event.target.value);
  }

  function handlePreviousReadingChange(event) {
    setPreviousReading(event.target.value);
  }

  

  function calculateWaterUsage() {
    const usage = (currentReading - previousReading) ;
    setWaterUsage(usage);
  }

  return (
   
    <div>
      <h1 className='titulo1'> Meu Hidrometro.  </h1>
      <form>
        <label>
          VALOR ATUAL:
          <input className="camp1" type="number" value={currentReading} onChange={handleCurrentReadingChange} />
        </label>
        <br />
        <label>
          VALOR ANTERIOR:
          <input className='camp2' type="number" value={previousReading} onChange={handlePreviousReadingChange} />
        </label>
        <br />
        
        <br />
        <button className='bt' type="button" onClick={calculateWaterUsage}>Calcular</button>
      </form>
      <p className='totalagua'>TOTAL DE ÁGUA USADO: {waterUsage} m³ passado</p>
    </div>
  );
}

export default WaterUsageCalculator;
