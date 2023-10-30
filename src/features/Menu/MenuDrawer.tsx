import { PathEnum } from '@/const/PathEnum';
import { discloserWrapper } from '@/hooks/recoilWrapper/discloserWrapper';
import { isOpenMenuState } from '@/hooks/state/isOpenMenuState';
import { Box, Button, Drawer, IconButton, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';
import { useRecoilState } from 'recoil';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import FestivalIcon from '@mui/icons-material/Festival';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CommuteIcon from '@mui/icons-material/Commute';

type MenuItemType = {
  label: string;
  path: string;
  icon: ReactNode;
};

const menuItem: MenuItemType[] = [
  {
    label: 'ホーム',
    path: PathEnum.HOME,
    icon: <HomeIcon />,
  },
  {
    label: '模擬店',
    path: PathEnum.BOOTH,
    icon: <StorefrontIcon />,
  },
  {
    label: 'イベント',
    path: PathEnum.EVENTS,
    icon: <FestivalIcon />,
  },
  {
    label: 'アクセス',
    path: PathEnum.ACCESS,
    icon: <CommuteIcon />,
  },
];

export const MenuDrawer: FC = () => {
  const router = useRouter();
  const [isOpenMenu, isOpenMenuToggle] = discloserWrapper(useRecoilState(isOpenMenuState));

  const handleMenuClick = (path: string) => {
    router.push(path);
    isOpenMenuToggle();
  };

  return (
    <Drawer open={isOpenMenu} onClose={isOpenMenuToggle} anchor="right" transitionDuration={400}>
      <Box sx={{ width: '50vw' }}>
        <Stack alignItems="flex-end" sx={{ mt: 0.5, mr: 1 }}>
          <IconButton onClick={isOpenMenuToggle}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Stack>
        <Stack sx={{ p: 1, pt: 2 }}>
          {menuItem.map((item, index) => {
            const border = '0.5px solid';
            return (
              <Box
                key={item.label}
                sx={{
                  p: 1,
                  borderTop: border,
                  borderBottom: index === menuItem.length - 1 ? border : 'none',
                }}
              >
                <Button
                  size="large"
                  startIcon={item.icon}
                  onClick={() => {
                    handleMenuClick(item.path);
                  }}
                >
                  <Typography variant="h6" sx={{ width: '4em', textAlign: 'left' }}>
                    {item.label}
                  </Typography>
                </Button>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Drawer>
  );
};
