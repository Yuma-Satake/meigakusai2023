import { Box, Button, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { useRouter } from 'next/router';
import { theme } from '@/theme/theme';
import { PathEnum } from '@/const/PathEnum';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import exhibition from '@/assets/images/event/1goukan/exhibition.jpg';
import segway from '@/assets/images/event/6goukan/segway.jpg';
import { ImgWithText, WithTextImgType } from './ImgWithText';

const withTextImgArray: WithTextImgType[] = [
  {
    src: exhibition,
    alt: 'ゲーム・CG学科 学生作品展示',
    headerText: '学生作品展示',
    bodyText: 'ゲーム作品の試遊やCG作品を鑑賞することができます！',
  },
  {
    src: segway,
    alt: 'セグウェイ試乗体験',
    headerText: 'セグウェイ試乗体験',
    bodyText: '特設コースを走り回るセグウェイの試乗体験ができます！',
  },
];

export const EventTab: FC = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        p: 2,
        pb: 5,
        background: `linear-gradient(to bottom left, ${theme.palette.success.light}, ${theme.palette.success.main})`,
      }}
    >
      <Stack spacing={3} sx={{ mt: 2, mb: 5 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          協賛企業の出展ブース
          <br />
          ゲーム・CG学科の作品展示など
          <br />
          見どころが盛りだくさん！
        </Typography>
        <Button
          onClick={() => {
            router.push(PathEnum.EVENTS);
          }}
          variant="outlined"
          color="success"
          endIcon={<KeyboardDoubleArrowRightIcon />}
          sx={{ bgcolor: 'white' }}
        >
          一覧を見る
        </Button>
      </Stack>
      <Stack spacing={2}>
        {withTextImgArray.map((item, index) => {
          const isImgRight = index % 2 === 0;
          return <ImgWithText key={item.headerText} isImgRight={isImgRight} imgItem={item} />;
        })}
      </Stack>
    </Box>
  );
};
