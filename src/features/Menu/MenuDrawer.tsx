import { PathEnum } from '@/const/PathEnum';
import { discloserWrapper } from '@/hooks/recoilWrapper/discloserWrapper';
import { isOpenMenuState } from '@/hooks/state/isOpenMenuState';
import { Box, Button, Drawer, IconButton, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import CloseIcon from '@mui/icons-material/Close';

type MenuItemType = {
  label: string;
  path: string;
};

const menuItem: MenuItemType[] = [
  {
    label: 'ホーム',
    path: PathEnum.HOME,
  },
  {
    label: 'イベント',
    path: PathEnum.EVENTS,
  },
  {
    label: '模擬店一覧',
    path: PathEnum.BOOTH,
  },
  {
    label: 'アクセス',
    path: PathEnum.ACCESS,
  },
];

export const MenuDrawer: FC = () => {
  const router = useRouter();
  const [isOpenMenu, isOpenMenuToggle] = discloserWrapper(useRecoilState(isOpenMenuState));

  return (
    <Drawer open={isOpenMenu} onClose={isOpenMenuToggle} anchor="right" transitionDuration={400}>
      <Box sx={{ width: '40vw', height: '100vh' }}>
        <Stack alignItems="flex-end">
          <IconButton onClick={isOpenMenuToggle}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Stack>
        <Stack alignItems="flex-start" spacing={3} sx={{ p: 2 }}>
          {menuItem.map((item) => (
            <Button
              key={item.path}
              variant="outlined"
              onClick={() => {
                router.push(item.path);
              }}
            >
              <Typography>{item.label}</Typography>
            </Button>
          ))}
        </Stack>
      </Box>
    </Drawer>
  );
};
