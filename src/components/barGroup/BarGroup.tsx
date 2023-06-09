import React, { useState } from "react";
import Bar from "../bar/Bar";
import BarControls from "../barControls/BarControls";
import "./BarGroup.scss";

const BarGroup: React.FC = () => {
  const [progressValues, setProgressValues] = useState([25, 50, 75]);
  const [selectedBarIndex, setSelectedBarIndex] = useState(0);
  const limit = 100;

  const handleProgressChange = (amount: number) => {
    const updatedValues = [...progressValues];
    updatedValues[selectedBarIndex] += amount;
    updatedValues[selectedBarIndex] = Math.max(
      updatedValues[selectedBarIndex],
      0
    );
    setProgressValues(updatedValues);
  };

  const handleSelectBar = (index: number) => {
    setSelectedBarIndex(index);
  };

  return (
    <div className="bar-group-container">
      {progressValues.map((progress, index) => (
        <Bar
          key={index}
          progress={progress}
          limit={limit}
          selected={index === selectedBarIndex}
          testId={`progress-bar-${index}`}
        />
      ))}
      <BarControls
        bars={progressValues}
        limit={limit}
        selectedBarIndex={selectedBarIndex}
        onSelectBar={handleSelectBar}
        onProgressChange={handleProgressChange}
      />
    </div>
  );
};

export default BarGroup;
