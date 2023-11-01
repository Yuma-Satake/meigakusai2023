import { NowEventDayEnum } from '@/const/NowEventDayEnum';
import { EVENT_DAY_INFO } from '@/const/eventDayInfo';
import { Typography, Stack } from '@mui/material';
import dayjs from 'dayjs';
import { FC } from 'react';

export const NowEventDayItem: FC<NowEventDayEnum> = (nowEventDay) => {
  return (
    <>
      <Typography variant="h6">ー 本日の開催時間 ー</Typography>
      <Stack direction="row" spacing={1}>
        <Typography variant="h5">
          {dayjs(EVENT_DAY_INFO[nowEventDay].startTime).format('HH:mm')}
        </Typography>
        <Typography variant="h5">〜</Typography>
        <Typography variant="h5">
          {dayjs(EVENT_DAY_INFO[nowEventDay].endTime).format('HH:mm')}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="baseline">
        <Typography variant="caption">名学祭</Typography>
        <Typography variant="h6">Day{nowEventDay + 1}</Typography>
        <Typography variant="caption">開催中</Typography>
      </Stack>
    </>
  );
};
