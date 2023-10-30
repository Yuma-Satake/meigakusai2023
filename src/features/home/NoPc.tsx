import { FC } from 'react';
import headerLogo from '@/assets/images/headfoot/header-logo.png';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import devqr from '@/assets/qr/devqr.png';
import productqr from '@/assets/qr/productqr.png';
import { isDevMode } from '@/const/env';

export const NoPc: FC = () => {
  const qrSrc = isDevMode ? devqr : productqr;

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
      <Image
        src={headerLogo}
        alt="名学祭2023"
        style={{
          width: '20vw',
          height: 'auto',
        }}
      />
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        名学祭WebサイトはPC画面に非対応です
        <br />
        下記のQRコードをスマホで読み取ってご覧下さい
      </Typography>
      <Image
        src={qrSrc}
        alt="スマホでサイトを読み込むためのQRコード"
        style={{
          width: '30vh',
          height: '30vh',
        }}
      />
    </Stack>
  );
};
