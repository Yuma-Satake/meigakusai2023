import { Layout } from '@/components/layout/Layout';
import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import C1 from '@/assets/images/top/C1.jpg';
import C2 from '@/assets/images/top/C2.jpg';
import C3 from '@/assets/images/top/C3.jpg';
import { MenuTabs } from '@/components/common/tabs/MenuTabs';
import { TabNameEnum } from '@/const/TabNameEnum';
import { ImgItemType } from '@/type/ImgItemType';
import { challengeImgArray } from '@/assets/images/mogiten/challenge/challengeImgArray';
import { EatTab } from './EatTab';
import { ActivityTab } from './ActivityTab';
import { EventTab } from './EventTab';

const imgList = [C1, C2, C3];

const HomeContent: FC = () => {
  /**
   * カルーセル用
   */
  const [imgListPointer, setImgListPointer] = useState<number>(0);
  const [imgOpacity, setImgOpacity] = useState<number>(1);
  /**
   * 5秒ごとに1枚後ろの画像に切り替える
   * - 画像が切り替わる前後で透明度を変更する
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setImgOpacity(0);
      setTimeout(() => {
        const nextImgPointer = imgListPointer === imgList.length - 1 ? 0 : imgListPointer + 1;
        setImgListPointer(nextImgPointer);
        setImgOpacity(1);
      }, 500);
    }, 4000);
    return () => clearInterval(timer);
  });

  /**
   * タブ用
   */
  const [selectTab, setSelectTab] = useState<number>(0);
  const handleChangeTab = (newSelectTab: TabNameEnum) => {
    setSelectTab(newSelectTab);
  };

  /**
   * コンテンツ用
   */
  const [content, setContent] = useState<ImgItemType[]>([]);
  // challengeImgArrayの中からランダムに3つを選ぶ
  useEffect(() => {
    const randomArray = challengeImgArray.sort(() => Math.random() - 0.5).slice(0, 3);
    setContent(randomArray);
  }, []);

  return (
    <Layout>
      <Image
        src={imgList[imgListPointer]}
        alt="名学祭イメージ画像"
        style={{
          opacity: imgOpacity,
          transitionProperty: 'opacity',
          transitionDuration: '1s',
          width: '100vw',
          height: 'auto',
          objectFit: 'contain',
        }}
      />
      <Stack alignItems="stretch">
        <Box
          sx={{
            mt: 3,
            mx: 3,
          }}
        >
          <MenuTabs selectTab={selectTab} changeTab={handleChangeTab} />
        </Box>
        <Box
          sx={{
            color: 'white',
          }}
        >
          {selectTab === TabNameEnum.EAT ? <EatTab content={content} /> : null}
          {selectTab === TabNameEnum.ACTIVITY ? <ActivityTab content={content} /> : null}
          {selectTab === TabNameEnum.EVENT ? <EventTab content={content} /> : null}
        </Box>
      </Stack>
    </Layout>
  );
};

export default HomeContent;
