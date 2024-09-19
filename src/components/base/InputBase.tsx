import React from 'react'
import { Input, InputProps } from 'antd'


function InputBase(props: InputProps) {
  return (
    <Input
      type="text"
      className="h-[50px] px-4 text-base border-stroke"
      {...props}
    />
  )
}

export default InputBase