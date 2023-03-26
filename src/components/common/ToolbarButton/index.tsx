import React, { useRef } from 'react';
import { Button } from '@chakra-ui/react';

interface ButtonProps {
  quillClass?: string
  size: 'xs' | 'sm' | 'md' | 'lg';
}

const width = {
  xs: 24,
  sm: 40,
  md: 48,
  lg: 56,
};

const ToolbarButton: React.FC<ButtonProps> = ({size, quillClass}) => {
  return (
    <Button
      colorScheme='teal'
      size={size}
      width={width[size] + 'px'}
      className={quillClass}
    >
    </Button>
  );
};

export default ToolbarButton;

