import { goukan10ImgArray } from '@/assets/images/mogiten/10goukan/goukan10ImgArray';
import { goukan1ImgArray } from '@/assets/images/mogiten/1goukan/goukan1ImgArray';
import { goukan3ImgArray } from '@/assets/images/mogiten/3goukan/goukan3ImgArray';
import { goukan6ImgArray } from '@/assets/images/mogiten/6goukan/goukan6ImgArray';
import { challengeImgArray } from '@/assets/images/mogiten/challenge/challengeImgArray';
import { Layout } from '@/components/layout/Layout';
import { boothSelectState } from '@/hooks/state/boothSelectState';
import useImg, { FilterCheckBoxType } from '@/hooks/useImg';
import { Checkbox, FormControlLabel, Grid, Stack, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

const useImgInitial = {
  goukan1: goukan1ImgArray,
  goukan3: goukan3ImgArray,
  goukan6: goukan6ImgArray,
  goukan10: goukan10ImgArray,
  challenge: challengeImgArray,
};

export const filterCheckBoxList: FilterCheckBoxType[] = [
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

const BoothsContent: FC = () => {
  const { imgItemArray, filterProperty, filter } = useImg(useImgInitial);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(true);
  const boothSelectValue = useRecoilValue(boothSelectState);

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

  useEffect(() => {
    filter(boothSelectValue);
  }, [boothSelectValue]);

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
          <FormControlLabel
            label="全ての模擬店"
            control={<Checkbox checked={isAllChecked} onClick={handleAllChecked} />}
          />
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
                <Grid key={item.alt + index} item xs={6} sx={{ p: 1 }}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '5px',
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
              <Typography>対象の店舗はありません</Typography>
            </Grid>
          )}
        </Grid>
      </Stack>
    </Layout>
  );
};

export default BoothsContent;
