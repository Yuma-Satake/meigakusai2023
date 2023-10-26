import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import footerLogo from '@/assets/images/headfoot/footer-logo.png';
import Image from 'next/image';

export const MobileFooter: FC = () => {
  return (
    <Stack
      spacing={1}
      sx={{
        mt: 1,
      }}
    >
      <Stack alignContent="flex-start" spacing={2} sx={{ px: 2, py: 1 }}>
        <Image
          src={footerLogo}
          alt="名古屋工学院専門学校"
          style={{
            width: '65%',
            height: 'auto',
          }}
        />
        <Box>
          <Typography variant="body2">TEL:052-681-1311/FAX:052-682-3017</Typography>
          <Typography variant="body2">〒456-0031 名古屋市熱田区神宮4-7-21</Typography>
        </Box>
      </Stack>
      <Box
        sx={{
          width: '100vw',
          color: 'white',
          bgcolor: 'gray',
          px: 2,
          py: 1,
        }}
      >
        <Typography variant="caption">
          Copyright © Nagoya Kogakuin College of Technology All Rights Reserved
        </Typography>
      </Box>
    </Stack>
  );
};
