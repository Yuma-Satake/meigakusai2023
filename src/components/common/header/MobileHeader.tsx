import { AppBar, Button, IconButton, Stack } from '@mui/material';
import { FC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Logo from '@/assets/images/headfoot/header-logo.png';
import { useRecoilState } from 'recoil';
import { isOpenMenuState } from '@/hooks/state/isOpenMenuState';
import { discloserWrapper } from '@/hooks/recoilWrapper/discloserWrapper';
import { useRouter } from 'next/router';
import { PathEnum } from '@/const/PathEnum';

const MenuIconComponents: FC<{
  isDisable?: boolean;
  onClick?: () => void;
}> = ({ isDisable, onClick }) => {
  return (
    <IconButton onClick={onClick} disabled={isDisable} sx={{ opacity: isDisable ? 0 : 1 }}>
      <MenuIcon fontSize="large" />
    </IconButton>
  );
};

export const MobileHeader: FC = () => {
  const router = useRouter();
  const [_, isOpenMenuToggle] = discloserWrapper(useRecoilState(isOpenMenuState));

  return (
    <AppBar position="sticky" sx={{ p: 1, bgcolor: 'white', position: 'sticky' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <MenuIconComponents isDisable />
        <Button
          onClick={() => {
            router.push(PathEnum.HOME);
          }}
        >
          <Image src={Logo} alt="名学祭2023" style={{ height: '45px', width: 'auto' }} />
        </Button>
        <MenuIconComponents onClick={isOpenMenuToggle} />
      </Stack>
    </AppBar>
  );
};
