import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';
import { MobileHeader } from '../common/header/MobileHeader';
import { MenuDrawer } from '@/features/Menu/MenuDrawer';
import { MobileFooter } from '../common/footer/MobileFooter';
import { MapDrawer } from '@/features/map/MapDrawer';

type Props = {
  children: ReactNode;
};

const Header: FC = () => {
  return (
    <>
      <Box
        sx={{
          position: 'sticky',
          zIndex: 10,
          display: {
            xs: 'block',
            sm: 'none',
          },
        }}
      >
        <Box sx={{ height: '65px', bgcolor: 'white' }} />
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
      <MapDrawer />
      {children}
      <MobileFooter />
    </>
  );
};
