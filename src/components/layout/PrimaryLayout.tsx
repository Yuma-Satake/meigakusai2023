import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

/**
 * メインのレイアウト
 */
export const PrimaryLayout: FC<Props> = ({ children }) => {
  return (
    <Box sx={{ width: '100dvh' }}>
      <main className="bg-gray-100 min-h-screen">{children}</main>
    </Box>
  );
};
