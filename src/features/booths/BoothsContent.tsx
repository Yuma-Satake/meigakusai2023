import { goukan10ImgArray } from '@/assets/images/mogiten/10goukan/goukan10ImgArray';
import { goukan1ImgArray } from '@/assets/images/mogiten/1goukan/goukan1ImgArray';
import { goukan3ImgArray } from '@/assets/images/mogiten/3goukan/goukan3ImgArray';
import { goukan6ImgArray } from '@/assets/images/mogiten/6goukan/goukan6ImgArray';
import { challengeImgArray } from '@/assets/images/mogiten/challenge/challengeImgArray';
import { Layout } from '@/components/layout/Layout';
import useImg, { FilterType } from '@/hooks/useImg';
import { Checkbox, FormControlLabel, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

type FilterCheckBoxType = {
  key: keyof FilterType;
  label: string;
};

const filterCheckBoxList: FilterCheckBoxType[] = [
  {
    key: 'goukan1',
    label: '1号館',
  },
  {
    key: 'goukan3',
    label: '3号館',
  },
  {
    key: 'goukan6',
    label: '6号館',
  },
  {
    key: 'goukan10',
    label: '10号館',
  },
  {
    key: 'challenge',
    label: 'チャレンジングロッド',
  },
];

const useImgInitial = {
  goukan1: goukan1ImgArray,
  goukan3: goukan3ImgArray,
  goukan6: goukan6ImgArray,
  goukan10: goukan10ImgArray,
  challenge: challengeImgArray,
};

const BoothsContent: FC = () => {
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
        <Typography variant="h6">模擬店一覧</Typography>
        <Stack sx={{ pb: 2 }}>
          {
            <FormControlLabel
              label="全ての模擬店"
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
          {imgItemArray.map((item, index) => {
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
          })}
        </Grid>
      </Stack>
    </Layout>
  );
};

export default BoothsContent;
