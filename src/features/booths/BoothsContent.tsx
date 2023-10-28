import { Layout } from '@/components/layout/Layout';
import useMogitenImg, { MogitenFilterType } from '@/hooks/useMogitenImg';
import { Checkbox, FormControlLabel, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

type FilterCheckBoxType = {
  key: keyof MogitenFilterType;
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

const BoothsContent: FC = () => {
  const { imgItemArray, filterProperty, filter } = useMogitenImg();
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
