import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { ImgItemType } from '@/types/ImgItemType';
import { useRouter } from 'next/router';
import { PathEnum } from '@/const/PathEnum';
import { theme } from '@/theme/theme';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { boothSelectState } from '@/hooks/state/boothSelectState';
import { useSetRecoilState } from 'recoil';
import { goukan1ImgArray } from '@/assets/images/mogiten/1goukan/goukan1ImgArray';
import { goukan3ImgArray } from '@/assets/images/mogiten/3goukan/goukan3ImgArray';
import { goukan10ImgArray } from '@/assets/images/mogiten/10goukan/goukan10ImgArray';

const FRAME_COUNT = 4;

export const ActivityTab: FC = () => {
  const router = useRouter();
  const setBoothSelect = useSetRecoilState(boothSelectState);

  /**
   * コンテンツ用
   */
  const [content, setContent] = useState<ImgItemType[]>([]);
  // challengeImgArrayの中からランダムに3つを選ぶ
  useEffect(() => {
    const notEatBooth = [...goukan1ImgArray, ...goukan3ImgArray, ...goukan10ImgArray];
    const randomArray = notEatBooth.sort(() => Math.random() - 0.5).slice(0, FRAME_COUNT);
    setContent(randomArray);
  }, []);

  return (
    <Box
      sx={{
        p: 2,
        pb: 5,
        background: `linear-gradient(to bottom right,${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
      }}
    >
      <Stack spacing={3} sx={{ mt: 2, mb: 5 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          23店舗もの様々な模擬店が展開
          <br />
          射的にゲーム、名学祭を遊び尽くそう！
        </Typography>

        <Button
          onClick={() => {
            setBoothSelect({
              goukan1: true,
              goukan3: true,
              goukan6: false,
              goukan10: true,
              challenge: false,
            });
            router.push(PathEnum.BOOTH);
          }}
          variant="outlined"
          endIcon={<KeyboardDoubleArrowRightIcon />}
          sx={{ bgcolor: 'white' }}
        >
          模擬店一覧を見る
        </Button>
      </Stack>
      <Grid container spacing={2}>
        {content.map((item, index) => {
          return (
            <Grid key={item.alt + index} item xs={6}>
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
        })}
      </Grid>
    </Box>
  );
};
