import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';

export const MobileFooter: FC = () => {
  return (
    <Stack
      spacing={1}
      sx={{
        mt: 1,
      }}
    >
      <Stack
        alignContent="flex-start"
        spacing={2}
        sx={{
          px: 2,
          py: 1,
        }}
      >
        <img
          src="./footer-logo.png"
          alt="名古屋工学院専門学校"
          style={{
            width: '65%',
            height: 'auto',
          }}
        />
        <Box>
          <Typography variant="body2">
            TEL:052-681-1311/FAX:052-682-3017
            <br />
            〒456-0031 名古屋市熱田区神宮4-7-21
          </Typography>
        </Box>
      </Stack>
      <Box
        sx={{
          width: '100%',
          color: 'white',
          bgcolor: '#333333',
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
