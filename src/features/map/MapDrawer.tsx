import { discloserWrapper } from '@/hooks/recoilWrapper/discloserWrapper';
import { Box, Drawer, IconButton, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import CloseIcon from '@mui/icons-material/Close';
import { isOpenMapState } from '@/hooks/state/isOpenMapState';
import Image, { StaticImageData } from 'next/image';
import challenging from '@/assets/images/map/challenging.jpg';
import map from '@/assets/images/index/map.jpg';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

const mapArray: { label: string; src: StaticImageData; alt: string }[] = [
  {
    label: '全体マップ',
    src: map,
    alt: '名学祭の全体マップ',
  },
  {
    label: 'チャレンジングロット',
    src: challenging,
    alt: 'チャレンジングロットのマップ 1から20までの飲食店が出店している',
  },
];

export const MapDrawer: FC = () => {
  const [isOpenMap, isOpenMapToggle] = discloserWrapper(useRecoilState(isOpenMapState));

  return (
    <Drawer open={isOpenMap} onClose={isOpenMapToggle} anchor="left" transitionDuration={400}>
      <Box sx={{ width: '100vw', mb: 5 }}>
        <Stack alignItems="flex-end">
          <IconButton onClick={isOpenMapToggle}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Stack>
        <Stack alignItems="center" spacing={4}>
          {mapArray.map((item) => {
            return (
              <Stack key={item.label} spacing={1}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6">{item.label}</Typography>
                  <IconButton
                    onClick={() => {
                      window.open(item.src.src);
                    }}
                  >
                    <ImageSearchIcon />
                  </IconButton>
                </Stack>
                <Image
                  src={item.src}
                  alt={item.alt}
                  style={{
                    width: '90vw',
                    height: 'auto',
                  }}
                />
              </Stack>
            );
          })}
        </Stack>
        <Stack>
          <Typography variant="h6"></Typography>
        </Stack>
      </Box>
    </Drawer>
  );
};
