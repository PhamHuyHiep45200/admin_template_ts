import React from 'react'
import { Button } from 'antd'
import { BaseButtonProps } from 'antd/es/button/button'

function ButtonBase(props: BaseButtonProps) {
  const { children, ...propsButton } = props
  return (
    <Button className='h-12 border-stroke font-medium' {...propsButton}>
      {children}
    </Button>
  )
}

export default ButtonBase