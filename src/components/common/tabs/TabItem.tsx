import { Button, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { TabItemType } from './MenuTabs';

type Props = {
  tabItem: TabItemType;
  isSelect: boolean;
  onClick: () => void;
};

export const TabItem: FC<Props> = ({ isSelect, onClick, tabItem }) => {
  const { label, icon, color } = tabItem;

  const selectColor = isSelect ? 'white' : 'black';
  const bgColor = isSelect ? color : 'white';
  const iconColor = isSelect ? 'white' : color;

  return (
    <Button onClick={onClick} sx={{ pb: 0 }}>
      <Stack
        alignItems="center"
        spacing={1}
        sx={{
          borderRadius: ' 10px 10px 0 0',
          bgcolor: bgColor,
          pt: 1.5,
          pb: 1,
          px: 1,
          width: '100%',
        }}
      >
        {icon(iconColor)}
        <Typography sx={{ width: '5em', color: selectColor, fontWeight: 'light' }}>
          {label}
        </Typography>
      </Stack>
    </Button>
  );
};
