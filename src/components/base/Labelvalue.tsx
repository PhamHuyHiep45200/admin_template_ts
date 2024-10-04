import React from 'react';
import { Input } from 'antd';

interface LabelValueFieldProps {
  label: string;
  value: string;
}

const LabelValueField: React.FC<LabelValueFieldProps> = ({ label, value }) => {
  return (
    <div className="label-value-field">
      <div className="label">{label}</div>
      <Input disabled className="value" value={value} />
    </div>
  );
};

export default LabelValueField;
