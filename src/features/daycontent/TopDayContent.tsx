import { NowEventDayEnum } from '@/const/NowEventDayEnum';
import { EVENT_DAY_INFO } from '@/const/eventDayInfo';
import { Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { FC, useEffect, useState } from 'react';
import { boxStyle } from '@/styles/boxStyle';
import { NowEventDayItem } from './NowEventDayItem';
import { DiffTypography } from './DIffTypograhy';

export const TopDayContent: FC = () => {
  const [nowTime, setNowTime] = useState<dayjs.Dayjs>(undefined as any);
  const [nowEventDay, setNowEventDay] = useState<NowEventDayEnum>(NowEventDayEnum.IS_YET);

  const changeTime = () => {
    const newDay = dayjs();
    setNowTime(newDay);

    /**
     * 今日が
     * - 開催前：IS_YET
     * - 開催日かつ、開催時間ではない：IS_TODAY
     * - 開催中：IS_NOW
     * - 終了後：IS_END
     */
    // 開催日より前
    if (newDay.isBefore(EVENT_DAY_INFO[0].day)) {
      setNowEventDay(NowEventDayEnum.IS_YET);
      return;
    }
    // 開催日かつ、開催時間ではない
    if (
      newDay.isSame(dayjs(EVENT_DAY_INFO[0].day), 'day') &&
      newDay.isBefore(EVENT_DAY_INFO[0].startTime)
    ) {
      setNowEventDay(NowEventDayEnum.IS_FIRST_DAY);
      return;
    }
    // 開催中
    if (
      newDay.isAfter(EVENT_DAY_INFO[0].day) &&
      newDay.isBefore(dayjs(EVENT_DAY_INFO[EVENT_DAY_INFO.length - 1].day).add(1, 'day'))
    ) {
      setNowEventDay(NowEventDayEnum.IS_EVENT_DAYS);
      return;
    }
    // 終了後
    return setNowEventDay(NowEventDayEnum.IS_END);
  };

  useEffect(() => {
    changeTime();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      changeTime();
    }, 1000);
    return () => clearInterval(timer);
  });

  const startTimeObj = dayjs(EVENT_DAY_INFO[0].startTime);

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
        {(() => {
          switch (nowEventDay) {
            case NowEventDayEnum.IS_YET:
              return (
                <>
                  <Typography variant="h6">ー 名学祭開催まで ー</Typography>
                  <DiffTypography nowTime={nowTime} startTimeObj={startTimeObj} />
                  <Stack direction="row" spacing={1}>
                    <Typography>{dayjs(EVENT_DAY_INFO[0].day).format('MM/DD')}</Typography>
                    <Typography>〜</Typography>
                    <Typography>{dayjs(EVENT_DAY_INFO[2].day).format('MM/DD')}</Typography>
                  </Stack>
                </>
              );
            case NowEventDayEnum.IS_FIRST_DAY:
              return (
                <>
                  <Typography variant="h6">ー 名学祭開催まで ー</Typography>
                  <DiffTypography nowTime={nowTime} startTimeObj={startTimeObj} />
                  <Stack direction="row">
                    <Typography>本日の開催時間：</Typography>
                    <Typography>
                      {dayjs(EVENT_DAY_INFO[0].startTime).format('HH:mm')}〜
                      {dayjs(EVENT_DAY_INFO[0].endTime).format('HH:mm')}
                    </Typography>
                  </Stack>
                </>
              );
            case NowEventDayEnum.IS_EVENT_DAYS:
              const dayNum = nowTime.diff(EVENT_DAY_INFO[0].day, 'day');
              return NowEventDayItem(dayNum);
            case NowEventDayEnum.IS_END:
              return (
                <Stack spacing={1}>
                  <Typography variant="h6">名学祭2023は終了しました</Typography>
                  <Typography>来年もぜひお越し下さい</Typography>
                </Stack>
              );
            default:
              return <></>;
          }
        })()}
      </Stack>
    </Stack>
  );
};
