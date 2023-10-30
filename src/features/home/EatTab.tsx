import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { ImgItemType } from '@/type/ImgItemType';
import { useRouter } from 'next/router';
import { PathEnum } from '@/const/PathEnum';
import { theme } from '@/theme/theme';
import { challengeImgArray } from '@/assets/images/mogiten/challenge/challengeImgArray';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import { boothSelectState } from '@/hooks/state/boothSelectState';

const FRAME_COUNT = 4;

export const EatTab: FC = () => {
  const router = useRouter();
  const setBoothSelect = useSetRecoilState(boothSelectState);

  /**
   * コンテンツ用
   */
  const [content, setContent] = useState<ImgItemType[]>([]);
  // challengeImgArrayの中からランダムに3つを選ぶ
  useEffect(() => {
    const randomArray = challengeImgArray.sort(() => Math.random() - 0.5).slice(0, FRAME_COUNT);
    setContent(randomArray);
  }, []);

  return (
    <Box
      sx={{
        p: 2,
        pb: 5,
        background: `linear-gradient(to bottom right,${theme.palette.warning.light}, ${theme.palette.warning.dark})`,
      }}
    >
      <Stack spacing={3} sx={{ mt: 2, mb: 5 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          名学祭ではチャレンジングロッドに
          <br />
          20店舗の飲食店が展開！
        </Typography>

        <Button
          onClick={() => {
            setBoothSelect({
              goukan1: false,
              goukan3: false,
              goukan6: false,
              goukan10: false,
              challenge: true,
            });
            router.push(PathEnum.BOOTH);
          }}
          variant="outlined"
          color="warning"
          endIcon={<KeyboardDoubleArrowRightIcon />}
          sx={{ bgcolor: 'white' }}
        >
          一覧を見る
        </Button>
      </Stack>
      <Grid container spacing={2}>
        {content.map((item, index) => {
          return (
            <Grid key={item.alt + index} item xs={6}>
              <Image
                src={item.src}
                alt={item.alt}
                style={{
                  width: '40vw',
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
