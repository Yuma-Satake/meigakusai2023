import { Box, Button, Stack, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { ImgWithText } from './ImgWithText';
import { ImgItemType } from '@/type/ImgItemType';
import { useRouter } from 'next/router';
import { PathEnum } from '@/const/PathEnum';
import { theme } from '@/theme/theme';
import { challengeImgArray } from '@/assets/images/mogiten/challenge/challengeImgArray';

export const EatTab: FC = () => {
  const router = useRouter();

  /**
   * コンテンツ用
   */
  const [content, setContent] = useState<ImgItemType[]>([]);
  // challengeImgArrayの中からランダムに3つを選ぶ
  useEffect(() => {
    const randomArray = challengeImgArray.sort(() => Math.random() - 0.5).slice(0, 3);
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
          名学祭ではチャレンジングロッドに20店舗の飲食店が展開！
        </Typography>
        <Button
          onClick={() => {
            router.push(PathEnum.MAP);
          }}
          variant="outlined"
          color="warning"
          sx={{ bgcolor: 'white' }}
        >
          マップを見る
        </Button>
      </Stack>
      <Stack spacing={2}>
        {content.map((item, index) => {
          const isImgRight = index % 2 === 0;
          return (
            <ImgWithText
              key={item.alt}
              isImgRight={isImgRight}
              imgItem={item}
              text="世界の蘇我ちゃん"
            />
          );
        })}
      </Stack>
    </Box>
  );
};
