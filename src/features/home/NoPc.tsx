import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { IS_DEV_MODE } from '@/const/env';

export const NoPc: FC = () => {
  const qrSrc = IS_DEV_MODE ? './devqr.png' : './productqr.png';

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={4}
      sx={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <img
        src="./header-logo.png"
        alt="名学祭2023"
        style={{
          width: '30vw',
          height: 'auto',
        }}
      />
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        名学祭WebサイトはPC画面に非対応です
        <br />
        下記のQRコードをスマホで読み取ってご覧下さい
      </Typography>
      <img
        src={qrSrc}
        alt="スマホでサイトを読み込むためのQRコード"
        style={{
          width: '30vw',
          height: 'auto',
        }}
      />
    </Stack>
  );
};
