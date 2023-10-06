import React from "react";
import { InputLabel, TextField } from "@mui/material";
import { NumericFormat } from "react-number-format";

interface MonetaryTextFieldProps {
  value: number;
  onChange: (value: number) => void;
}

const MonetaryTextField: React.FC<MonetaryTextFieldProps> = ({ value, onChange }) => {
  const handleValueChange = (values: any) => {
    const floatValue = parseFloat(values.value);
    onChange(floatValue);
  };

  return (
    <NumericFormat
      label="Preço"
      value={value}
      customInput={TextField}
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$ "
      onValueChange={handleValueChange}
    />
  );
};

export default MonetaryTextField;
