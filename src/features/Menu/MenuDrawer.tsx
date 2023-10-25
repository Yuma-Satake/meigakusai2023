import { PathEnum } from '@/const/PathEnum';
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
    path: PathEnum.HOME,
  },
  {
    label: 'マップ',
    path: PathEnum.MAP,
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
    <Drawer open={isOpenMenu} onClose={isOpenMenuToggle} anchor="right">
      <Stack alignItems="flex-start" spacing={2} sx={{ p: 2 }}>
        {menuItem.map((item) => (
          <Button
            key={item.path}
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
