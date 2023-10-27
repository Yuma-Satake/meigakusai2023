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
    label: 'イベント',
    path: PathEnum.EVENTS,
    icon: <FestivalIcon />,
  },
  {
    label: '模擬店',
    path: PathEnum.BOOTH,
    icon: <StorefrontIcon />,
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

  return (
    <Drawer open={isOpenMenu} onClose={isOpenMenuToggle} anchor="right" transitionDuration={400}>
      <Box sx={{ width: '70vw' }}>
        <Stack alignItems="flex-end">
          <IconButton onClick={isOpenMenuToggle}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Stack>
        <Stack spacing={2} sx={{ p: 2 }}>
          {menuItem.map((item) => {
            return (
              <Button
                key={item.label}
                variant="contained"
                size="large"
                startIcon={item.icon}
                onClick={() => {
                  router.push(item.path);
                }}
              >
                <Typography sx={{ width: '4em', textAlign: 'left' }}>{item.label}</Typography>
              </Button>
            );
          })}
        </Stack>
      </Box>
    </Drawer>
  );
};
