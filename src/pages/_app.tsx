import { isDevMode } from '@/const/env';
import { Providers } from '@/store/Providers';
import '@/styles/globals.css';
import { Box, Stack, Typography } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import { FC } from 'react';
import devqr from '@/assets/qr/devqr.png';
import productqr from '@/assets/qr/productqr.png';
import headerLogo from '@/assets/images/headfoot/header-logo.png';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const qrSrc = isDevMode ? devqr : productqr;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>名学祭 名古屋工学院専門学校学園祭 | NKC名古屋工学院専門学校</title>
        <meta
          name="description"
          content="名古屋工学院専門学校はコンピューター・IT、ゲーム・CG、映像・音響、電気、情報通信、機械・ロボット・CADの6分野23学科愛知県認可の総合専門学校。"
        />
        <meta
          name="keywords"
          content="名古屋,専門学校,電気工事士,情報処理技術者,電験3種,電気主任技術者,施工管理技士,資格取得,コンピューター,IT,ゲーム,CG,映像,音響,電気,電子,通信,機械,制御,CAD"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WTWV5HZ')`,
        }}
      />
      <Providers>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
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
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Component {...pageProps} />
        </Box>
      </Providers>
    </>
  );
};

export default App;
