import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';
import { MobileHeader } from '../common/header/MobileHeader';
import { MenuDrawer } from '@/features/Menu/MenuDrawer';

type Props = {
  children: ReactNode;
};

const Header: FC = () => {
  return (
    <>
      <Box
        sx={{
          display: {
            xs: 'block',
            sm: 'none',
          },
        }}
      >
        <MobileHeader />
      </Box>
      <Box
        sx={{
          display: {
            xs: 'none',
            sm: 'block',
          },
        }}
      >
        <div>DesktopHeader</div>
      </Box>
    </>
  );
};

/**
 * メインのレイアウト
 */
export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <MenuDrawer />
      {children}
    </>
  );
};
