import React from 'react';
import { Button } from '@chakra-ui/react';
import { TriangleUpIcon } from '@chakra-ui/icons';

export default function BtnScrollUp() {
  const handlerScrollUp = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Button
      onClick={handlerScrollUp}
      flex="1"
      variant="ghost"
      leftIcon={<TriangleUpIcon />}
    >
      Move to top
    </Button>
  );
}
