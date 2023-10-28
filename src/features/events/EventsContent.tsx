import { goukan1EventImg } from '@/assets/images/event/1goukan/goukan1EventImg';
import { goukan6EventImg } from '@/assets/images/event/6goukan/goukan6EventImg';
import { goukan10ImgArray } from '@/assets/images/mogiten/10goukan/goukan10ImgArray';
import { Layout } from '@/components/layout/Layout';
import useImg, { FilterCheckBoxType } from '@/hooks/useImg';
import { Checkbox, FormControlLabel, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

const useImgInitial = {
  goukan1: goukan1EventImg,
  goukan3: [],
  goukan6: goukan6EventImg,
  goukan10: goukan10ImgArray,
  challenge: [],
};

export const filterCheckBoxList: FilterCheckBoxType[] = [
  {
    key: 'goukan1',
    label: '1号館',
  },
  {
    key: 'goukan6',
    label: '6号館',
  },
  {
    key: 'goukan10',
    label: '10号館',
  },
];

const EventsContent: FC = () => {
  const { imgItemArray, filterProperty, filter } = useImg(useImgInitial);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(true);

  const handleAllChecked = () => {
    setIsAllChecked(!isAllChecked);
    filter({
      goukan1: !isAllChecked,
      goukan3: !isAllChecked,
      goukan6: !isAllChecked,
      goukan10: !isAllChecked,
      challenge: !isAllChecked,
    });
  };

  // 全てのチェックボックスがチェックされているかどうか
  useEffect(() => {
    const isAllChecked = filterCheckBoxList.every((item) => {
      return filterProperty[item.key];
    });
    setIsAllChecked(isAllChecked);
  }, [filterProperty]);

  return (
    <Layout>
      <Stack
        spacing={1}
        sx={{
          p: 3,
        }}
      >
        <Typography variant="h6">イベント一覧</Typography>
        <Stack sx={{ pb: 2 }}>
          {
            <FormControlLabel
              label="全てのイベント"
              control={<Checkbox checked={isAllChecked} onClick={handleAllChecked} />}
            />
          }
          {filterCheckBoxList.map((item) => {
            return (
              <FormControlLabel
                key={item.key}
                label={item.label}
                control={<Checkbox checked={filterProperty[item.key]} />}
                onClick={() => {
                  const changeKey = item.key;
                  filter({
                    [changeKey]: !filterProperty[item.key],
                  });
                }}
              />
            );
          })}
        </Stack>
        <Grid container>
          {imgItemArray.length > 0 ? (
            imgItemArray.map((item, index) => {
              return (
                <Grid item xs={6} key={item.alt + index}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    style={{
                      width: '40vw',
                      height: 'auto',
                    }}
                  />
                </Grid>
              );
            })
          ) : (
            <Grid
              item
              xs={12}
              sx={{
                p: 3,
                border: '0.5px solid black',
                borderRadius: '5px',
                textAlign: 'center',
              }}
            >
              <Typography>対象のイベントはありません</Typography>
            </Grid>
          )}
        </Grid>
      </Stack>
    </Layout>
  );
};

export default EventsContent;
