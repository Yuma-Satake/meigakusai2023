import { AppBar, Button, IconButton, Stack } from '@mui/material';
import { FC, ReactNode } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Logo from '@/assets/images/headfoot/header-logo.png';
import MapIcon from '@mui/icons-material/Map';
import { useRecoilState } from 'recoil';
import { isOpenMenuState } from '@/hooks/state/isOpenMenuState';
import { discloserWrapper } from '@/hooks/recoilWrapper/discloserWrapper';
import { useRouter } from 'next/router';
import { PathEnum } from '@/const/PathEnum';

const MenuIconComponents: FC<{
  isDisable?: boolean;
  onClick?: () => void;
  icon: ReactNode;
}> = ({ isDisable, onClick, icon }) => {
  return (
    <IconButton onClick={onClick} disabled={isDisable} sx={{ opacity: isDisable ? 0 : 1 }}>
      {icon}
    </IconButton>
  );
};

export const MobileHeader: FC = () => {
  const router = useRouter();
  const [_, isOpenMenuToggle] = discloserWrapper(useRecoilState(isOpenMenuState));

  const handlePush = (path: string) => {
    router.push(path);
  };

  return (
    <AppBar sx={{ height: '65px', p: 0.5, px: 1, bgcolor: 'white' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <MenuIconComponents
          onClick={() => {
            handlePush(PathEnum.MAP);
          }}
          icon={<MapIcon fontSize="large" />}
        />
        <Button
          onClick={() => {
            handlePush(PathEnum.HOME);
          }}
        >
          <Image
            src={Logo}
            alt="名学祭2023"
            style={{ height: '45px', marginBottom: 1, width: 'auto' }}
          />
        </Button>
        <MenuIconComponents onClick={isOpenMenuToggle} icon={<MenuIcon fontSize="large" />} />
      </Stack>
    </AppBar>
  );
};
