import { DesktopHeader } from '@/components/common/header/DesktopHeader';
import { Box } from '@mui/material';
import { FC } from 'react';

export const Desktop: FC = () => {
  return (
    <Box>
      {/*
       * PC用の頭の丸
       */}
      {/* <Box
        sx={{
          mt: 5,
          width: '100%',
          height: '30px',
          bgcolor: 'white',
          borderRadius: '10px 10px 0 0',
        }}
      /> */}
      {/*
       * PC用の背景
       */}
      <Box
        sx={{
          zIndex: -20,
          top: 0,
          left: 0,
          position: 'fixed',
          height: '100vh',
          width: '100vw',
          background: `linear-gradient(to bottom right,#80D3F8, #509BE9)`,
        }}
      />
      <DesktopHeader />
    </Box>
  );
};
