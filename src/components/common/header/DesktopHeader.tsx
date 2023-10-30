import { AppBar, Box, Button, IconButton, Stack } from '@mui/material';
import { FC, ReactNode } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '@/assets/images/headfoot/header-logo.png';
import MapIcon from '@mui/icons-material/Map';
import { useRecoilState } from 'recoil';
import { isOpenMenuState } from '@/hooks/state/isOpenMenuState';
import { discloserWrapper } from '@/hooks/recoilWrapper/discloserWrapper';
import { useRouter } from 'next/router';
import { PathEnum } from '@/const/PathEnum';
import { isOpenMapState } from '@/hooks/state/isOpenMapState';

const MenuIconComponents: FC<{
  isDisable?: boolean;
  onClick?: () => void;
  icon: ReactNode;
  ariaLabel: string;
}> = ({ isDisable, onClick, icon, ariaLabel }) => {
  return (
    <IconButton
      onClick={onClick}
      disabled={isDisable}
      aria-label={ariaLabel}
      sx={{ opacity: isDisable ? 0 : 1 }}
    >
      {icon}
    </IconButton>
  );
};

export const DesktopHeader: FC = () => {
  const router = useRouter();
  const [_, isOpenMenuToggle] = discloserWrapper(useRecoilState(isOpenMenuState));
  const [__, isOpenMapToggle] = discloserWrapper(useRecoilState(isOpenMapState));

  const handlePush = (path: string) => {
    router.push(path);
  };

  return (
    <Box
      sx={{
        top: 0,
        left: 0,
        position: 'fixed',
        p: 2,
      }}
    >
      <AppBar sx={{ height: '65px', p: 0.5, px: 1, bgcolor: 'white', opacity: 0.85 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Button
            onClick={() => {
              handlePush(PathEnum.HOME);
            }}
          >
            <img
              src="./header-logo.png"
              alt="名学祭2023"
              width={100}
              style={{ height: '45px', marginBottom: 1, width: 'auto' }}
            />
          </Button>
          <Box>
            <MenuIconComponents
              onClick={isOpenMapToggle}
              icon={<MapIcon fontSize="large" />}
              ariaLabel="マップを開く"
            />
            <MenuIconComponents
              onClick={isOpenMenuToggle}
              icon={<MenuIcon fontSize="large" />}
              ariaLabel="メニューを開く"
            />
          </Box>
        </Stack>
      </AppBar>
    </Box>
  );
};
