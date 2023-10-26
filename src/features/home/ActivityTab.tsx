import { Box } from '@mui/material';
import { FC } from 'react';
import { ImgItemType } from '@/type/ImgItemType';
import { useRouter } from 'next/router';
import { theme } from '@/theme/theme';

export const ActivityTab: FC = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        p: 2,
        pb: 5,
        background: `linear-gradient(to bottom right,${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
      }}
    >
      EventTab
    </Box>
  );
};
