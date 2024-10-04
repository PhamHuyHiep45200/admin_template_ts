import { Input, InputProps } from 'antd';
import { ReactNode } from 'react';
interface InputBaseProps extends InputProps {
  icon?: ReactNode;
}
const InputBase = ({ icon, ...props }: InputBaseProps) => {
  return (
    <Input
      type="text"
      className="h-[50px] px-4 text-base border-stroke"
      prefix={icon}
      {...props}
    />
  );
};

export default InputBase;
