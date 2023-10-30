import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { ImgWithText } from './ImgWithText';
import { ImgItemType } from '@/type/ImgItemType';
import { useRouter } from 'next/router';
import { PathEnum } from '@/const/PathEnum';
import { theme } from '@/theme/theme';
import { challengeImgArray } from '@/assets/images/mogiten/challenge/challengeImgArray';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Image from 'next/image';

const FRAME_COUNT = 4;

export const EatTab: FC = () => {
  const router = useRouter();

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
        {content.map((item) => {
          return (
            <Grid key={item.src.toString()} item xs={6}>
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
