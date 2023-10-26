import { TabNameEnum } from '@/const/TabNameEnum';
import { Stack } from '@mui/material';
import { FC, ReactNode } from 'react';
import { TabItem } from './TabItem';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import FestivalIcon from '@mui/icons-material/Festival';

type Props = {
  selectTab: TabNameEnum;
  changeTab: (newSelectTab: TabNameEnum) => void;
};

export type IconWrapperFnType = (iconColor: string) => ReactNode;

export type TabItemType = {
  tab: TabNameEnum;
  label: string;
  color: string;
  icon: IconWrapperFnType;
};

const tabItem: TabItemType[] = [
  {
    tab: TabNameEnum.EAT,
    label: '食べる',
    color: 'warning.light',
    icon: (iconColor) => <LunchDiningIcon fontSize="large" sx={{ color: iconColor }} />,
  },
  {
    tab: TabNameEnum.ACTIVITY,
    label: '体験する',
    color: 'primary.main',
    icon: (iconColor) => <SportsHandballIcon fontSize="large" sx={{ color: iconColor }} />,
  },
  {
    tab: TabNameEnum.EVENT,
    label: 'イベント',
    color: 'success.light',
    icon: (iconColor) => <FestivalIcon fontSize="large" sx={{ color: iconColor }} />,
  },
];

export const MenuTabs: FC<Props> = ({ selectTab, changeTab }) => {
  return (
    <Stack direction="row" justifyContent="center" spacing={2}>
      {tabItem.map((item) => {
        const isSelect = selectTab === item.tab;
        return (
          <TabItem
            key={item.tab}
            isSelect={isSelect}
            tabItem={item}
            onClick={() => changeTab(item.tab)}
          />
        );
      })}
    </Stack>
  );
};
