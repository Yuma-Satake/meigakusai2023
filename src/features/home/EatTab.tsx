import { Box, Button, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { ImgWithText } from './ImgWithText';
import { ImgItemType } from '@/type/ImgItemType';
import { useRouter } from 'next/router';
import { PathEnum } from '@/const/PathEnum';
import { theme } from '@/theme/theme';

type Props = {
  content: ImgItemType[];
};

export const EatTab: FC<Props> = ({ content }) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        p: 2,
        pb: 5,
        background: `linear-gradient(to bottom right,${theme.palette.warning.light}, ${theme.palette.warning.dark})`,
      }}
    >
      <Stack spacing={2} alignItems="flex-start" sx={{ mt: 2, mb: 3 }}>
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
