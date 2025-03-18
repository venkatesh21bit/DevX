import React from 'react';

interface EraSelectorProps {
  selectedEra: string;
  onEraChange: (era: string) => void;
}

const EraSelector: React.FC<EraSelectorProps> = ({ selectedEra, onEraChange }) => {
  return (
    <div className="era-selector">
      <label htmlFor="era">Select Era: </label>
      <select id="era" value={selectedEra} onChange={(e) => onEraChange(e.target.value)}>
        <option value="modern">Modern</option>
        <option value="classic">Classic</option>
      </select>
    </div>
  );
};

export default EraSelector;