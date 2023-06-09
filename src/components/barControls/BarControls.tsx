import React from "react";
import "./BarControls.scss";

interface ControlsProps {
  bars: number[];
  limit: number;
  selectedBarIndex: number;
  onSelectBar: (index: number) => void;
  onProgressChange: (amount: number) => void;
}

const BarControls: React.FC<ControlsProps> = ({
  bars,
  limit,
  selectedBarIndex,
  onSelectBar,
  onProgressChange,
}) => {
  const handleBarChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(event.target.value);
    onSelectBar(index);
  };

  const handleProgressChange = (amount: number) => {
    onProgressChange(amount);
  };

  return (
    <div className="bar-controls-container">
      <select value={selectedBarIndex} onChange={handleBarChange}>
        {bars.map((_, index) => (
          <option key={index} value={index}>
            #progress {index + 1}
          </option>
        ))}
      </select>
      <div className="controls-button-container">
        <button onClick={() => handleProgressChange(-25)}>-25</button>
        <button onClick={() => handleProgressChange(-10)}>-10</button>
        <button onClick={() => handleProgressChange(10)}>+10</button>
        <button onClick={() => handleProgressChange(25)}>+25</button>
      </div>
    </div>
  );
};

export default BarControls;
