import { goukan10EventImg } from '@/assets/images/event/10goukan/goukan10EventImg';
import { goukan1EventImg } from '@/assets/images/event/1goukan/goukan1EventImg';
import { goukan3EventImg } from '@/assets/images/event/3goukan/goukan3EventImg';
import { goukan6EventImg } from '@/assets/images/event/6goukan/goukan6EventImg';
import { Layout } from '@/components/layout/Layout';
import useImg, { FilterCheckBoxType } from '@/hooks/useImg';
import { ImgItemType } from '@/types/ImgItemType';
import { Box, Checkbox, FormControlLabel, Grid, Stack, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';

const useImgInitial = {
  goukan1: goukan1EventImg,
  goukan3: [],
  goukan6: goukan6EventImg,
  goukan10: goukan10EventImg,
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

const goukanList: {
  key: string;
  label: string;
  imgArray: ImgItemType[];
}[] = [
  {
    key: 'goukan1',
    label: '1号館',
    imgArray: goukan1EventImg,
  },
  {
    key: 'goukan3',
    label: '3号館',
    imgArray: goukan3EventImg,
  },
  {
    key: 'goukan6',
    label: '6号館',
    imgArray: goukan6EventImg,
  },
  {
    key: 'goukan10',
    label: '10号館',
    imgArray: goukan10EventImg,
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

        {goukanList.map((item) => {
          return (
            <Box key={item.key}>
              <Typography
                variant="h6"
                sx={{
                  borderBottom: '0.5px solid black',
                  py: 1,
                }}
              >
                {item.label}
              </Typography>
              <Grid container>
                {item.imgArray.length > 0 ? (
                  item.imgArray.map((item, index) => {
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
                    <Typography>対象のイベントはありません</Typography>
                  </Grid>
                )}
              </Grid>
            </Box>
          );
        })}
      </Stack>
    </Layout>
  );
};

export default EventsContent;
