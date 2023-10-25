import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
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
      <Component {...pageProps} />
    </>
  );
};

export default App;
