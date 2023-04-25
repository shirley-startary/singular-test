import React from "react";

interface NumberDisplayProps {
  number: number | null;
}

export const NumberDisplay: React.FC<NumberDisplayProps> = ({ number }) => {
  return (
    <div>
      <label>
        <p>{number !== null ? `Resultado: ${number}` : "No number entered yet"}</p>
      </label>
    </div>
  );
};
