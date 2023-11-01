import { Stack, Typography } from '@mui/material';
import { Dayjs } from 'dayjs';
import { FC } from 'react';

type Props = {
  nowTime: Dayjs;
  startTimeObj: Dayjs;
};

export const DiffTypography: FC<Props> = ({ nowTime, startTimeObj }) => {
  if (!nowTime) return null;
  const dayLabel = Math.abs(nowTime.diff(startTimeObj, 'day'));

  return (
    <Stack direction="row" alignItems="flex-end" spacing={0.5}>
      {dayLabel > 0 ? (
        <>
          <Typography variant="h4">{dayLabel}</Typography>
          <Typography sx={{ fontSize: '20px' }}>日</Typography>
        </>
      ) : null}
      <Typography variant="h4">{Math.abs(nowTime.diff(startTimeObj, 'hour') % 24)}</Typography>
      <Typography sx={{ fontSize: '20px' }}>時間</Typography>
      <Typography variant="h4">{Math.abs(nowTime.diff(startTimeObj, 'minute') % 60)}</Typography>
      <Typography sx={{ fontSize: '20px' }}>分</Typography>
      <Typography variant="h4">{Math.abs(nowTime.diff(startTimeObj, 'second') % 60)}</Typography>
      <Typography sx={{ fontSize: '20px' }}>秒</Typography>
    </Stack>
  );
};
