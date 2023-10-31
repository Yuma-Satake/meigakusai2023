import { Box, Container } from '@mui/material';
import { FC, ReactNode } from 'react';
import { MenuDrawer } from '@/features/Menu/MenuDrawer';
import { MobileFooter } from '../common/footer/MobileFooter';
import { MapDrawer } from '@/features/map/MapDrawer';
import { ScheduleModal } from '@/features/home/ScheduleModal';
import { Mobile } from './mobile/Mobile';
import { Desktop } from './desktop/Desktop';

type Props = {
  children: ReactNode;
};

const Header: FC = () => {
  return (
    <>
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Mobile />
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Desktop />
      </Box>
    </>
  );
};

/**
 * メインのレイアウト
 */
export const Layout: FC<Props> = ({ children }) => {
  return (
    <Container disableGutters>
      <Container disableGutters maxWidth="sm">
        <Header />
        <Box sx={{ bgcolor: 'white' }}>
          <Box sx={{ height: '65px', bgcolor: 'white' }} />
          {children}
          <MobileFooter />
        </Box>
      </Container>
      <MenuDrawer />
      <MapDrawer />
      <ScheduleModal />
    </Container>
  );
};
