import React from "react";
import "./Bar.scss";

interface BarProps {
  progress: number;
  limit: number;
  selected: boolean;
  testId: string;
}

const Bar: React.FC<BarProps> = ({ progress, limit, selected, testId }) => {
  const barWidth = Math.min((progress / limit) * 100, 100);
  const barColor = progress > limit ? "over-usage" : "normal-usage";
  const barClassName = selected
    ? `bar ${barColor} selected-bar`
    : `bar ${barColor}`;

  return (
    <div className="bar-container">
      <div
        className={barClassName}
        style={{ width: `${barWidth}%`, transition: "width 0.3s ease-in-out" }}
        data-testid={testId}
      >
        <span className="bar-usage-amount">{progress.toFixed(0)}%</span>
      </div>
    </div>
  );
};

export default Bar;
