import { EVENT_DAY_INFO } from '@/const/eventDayInfo';
import { Box, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { FC, useEffect, useState } from 'react';

const boxStyle = {
  borderRadius: '5px',
  p: 0.8,
  bgcolor: 'white',
};

export const TopDayContent: FC = () => {
  const [nowTime, setNowTime] = useState<dayjs.Dayjs>(undefined as any);

  useEffect(() => {
    setNowTime(dayjs());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setNowTime(dayjs());
    }, 1000);
    return () => clearInterval(timer);
  });

  const startTimeObj = dayjs(EVENT_DAY_INFO[0].startTime);
  const diffTypograhy = (() => {
    if (!nowTime) return null;
    return (
      <Stack direction="row" alignItems="flex-end" spacing={0.5}>
        <Typography variant="h4">{Math.abs(nowTime.diff(startTimeObj, 'day'))}</Typography>
        <Typography sx={{ fontSize: '20px' }}>日</Typography>
        <Typography variant="h4">{Math.abs(nowTime.diff(startTimeObj, 'hour') % 24)}</Typography>
        <Typography sx={{ fontSize: '20px' }}>時</Typography>
        <Typography variant="h4">{Math.abs(nowTime.diff(startTimeObj, 'minute') % 60)}</Typography>
        <Typography sx={{ fontSize: '20px' }}>分</Typography>
        <Typography variant="h4">{Math.abs(nowTime.diff(startTimeObj, 'second') % 60)}</Typography>
        <Typography sx={{ fontSize: '20px' }}>秒</Typography>
      </Stack>
    );
  })();

  return (
    <Stack
      justifyContent="stretch"
      spacing={1}
      sx={{
        ...boxStyle,
        width: '85%',
        border: 'solid 1px',
        borderColor: 'primary.light',
        opacity: 0.9,
      }}
    >
      <Stack alignItems="center" spacing={1.3} sx={{ ...boxStyle, textAlign: 'center', py: 2.5 }}>
        <Typography variant="h6">ー 名学祭開催まで ー</Typography>
        {diffTypograhy}
        <Stack direction="row" spacing={1}>
          <Typography>{dayjs(EVENT_DAY_INFO[0].day).format('MM/DD')}</Typography>
          <Typography>〜</Typography>
          <Typography>{dayjs(EVENT_DAY_INFO[2].day).format('MM/DD')}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
