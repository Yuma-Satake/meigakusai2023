import { Layout } from '@/components/layout/Layout';
import { Box, Stack } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { MenuTabs } from '@/components/common/tabs/MenuTabs';
import { TabNameEnum } from '@/const/TabNameEnum';
import { EatTab } from './EatTab';
import { ActivityTab } from './ActivityTab';
import { EventTab } from './EventTab';
import { Carousel } from './Carousel';
import { TopDayContent } from './TopDayContent';

const HomeContent: FC = () => {
  /**
   * タブ用
   */
  const [selectTab, setSelectTab] = useState<number>(0);
  const handleChangeTab = (newSelectTab: TabNameEnum) => {
    setSelectTab(newSelectTab);
  };

  return (
    <Layout>
      <Carousel />
      <Stack>
        <Stack alignItems="center" sx={{ mt: '-50px' }}>
          <TopDayContent />
        </Stack>
        <Box sx={{ mt: 4, mx: 3 }}>
          <MenuTabs selectTab={selectTab} changeTab={handleChangeTab} />
        </Box>
        <Box sx={{ color: 'white' }}>
          {selectTab === TabNameEnum.EAT ? <EatTab /> : null}
          {selectTab === TabNameEnum.ACTIVITY ? <ActivityTab /> : null}
          {selectTab === TabNameEnum.EVENT ? <EventTab /> : null}
        </Box>
      </Stack>
    </Layout>
  );
};

export default HomeContent;
