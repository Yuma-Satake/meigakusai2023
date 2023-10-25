import { discloserWrapper } from '@/hooks/recoilWrapper/discloserWrapper';
import { isOpenMenuState } from '@/hooks/state/isOpenMenuState';
import { Button, Drawer, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useRecoilState } from 'recoil';

type MenuItemType = {
  label: string;
  path: string;
};

const menuItem: MenuItemType[] = [
  {
    label: 'ホーム',
    path: '/',
  },
  {
    label: 'マップ',
    path: '/map',
  },
  {
    label: 'イベント',
    path: '/events',
  },
  {
    label: '模擬店一覧',
    path: '/booths',
  },
  {
    label: 'アクセス',
    path: '/access',
  },
];

export const MenuDrawer: FC = () => {
  const router = useRouter();
  const [isOpenMenu, isOpenMenuToggle] = discloserWrapper(useRecoilState(isOpenMenuState));

  return (
    <Drawer open={isOpenMenu} onClose={isOpenMenuToggle} anchor="right">
      <Stack alignItems="flex-start" sx={{ p: 2 }}>
        {menuItem.map((item) => (
          <Button
            key={item.path}
            variant="contained"
            onClick={() => {
              router.push(item.path);
            }}
          >
            <Typography>{item.label}</Typography>
          </Button>
        ))}
      </Stack>
    </Drawer>
  );
};
