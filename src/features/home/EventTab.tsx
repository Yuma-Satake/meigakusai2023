import { Box } from '@mui/material';
import { FC } from 'react';
import { useRouter } from 'next/router';
import { theme } from '@/theme/theme';

export const EventTab: FC = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        p: 2,
        pb: 5,
        background: `linear-gradient(to bottom right,${theme.palette.success.light}, ${theme.palette.success.main})`,
      }}
    >
      EventTab
    </Box>
  );
};
