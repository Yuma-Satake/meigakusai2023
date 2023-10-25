import { Providers } from '@/store/Providers';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }) => {
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
      </Head>
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WTWV5HZ')`,
        }}
      />
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
};

export default App;
