import { Box, Container } from '@mui/material';
import { FC, ReactNode } from 'react';
import { MobileHeader } from '../common/header/MobileHeader';
import { MenuDrawer } from '@/features/Menu/MenuDrawer';
import { MobileFooter } from '../common/footer/MobileFooter';
import { MapDrawer } from '@/features/map/MapDrawer';
import { ScheduleModal } from '@/features/home/ScheduleModal';

type Props = {
  children: ReactNode;
};

const Header: FC = () => {
  return (
    <>
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Box sx={{ height: '40px', bgcolor: 'white' }} />
        <MobileHeader />
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        {/*
         * PC用の頭の丸
         */}
        <Box
          sx={{
            width: '100%',
            height: '30px',
            bgcolor: 'white',
            borderRadius: '10px 10px 0 0',
          }}
        />
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
            bgcolor: 'red',
          }}
        />
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
      <Container
        disableGutters
        maxWidth="xs"
        sx={{
          mt: 3,
          bgcolor: 'white',
        }}
      >
        <Header />
        {children}
        <MobileFooter />
      </Container>
      <MenuDrawer />
      <MapDrawer />
      <ScheduleModal />
    </Container>
  );
};
