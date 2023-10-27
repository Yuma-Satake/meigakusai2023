import { ImgItemType } from '@/type/ImgItemType';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

type Props = {
  isImgRight: boolean;
  imgItem: ImgItemType;
  text: string;
};

const TextItem: FC<string> = (text) => {
  return (
    <Grid item xs={6}>
      <Typography
        sx={{
          fontWeight: 'bold',
        }}
      >
        {text}
      </Typography>
    </Grid>
  );
};

export const ImgWithText: FC<Props> = ({ isImgRight, imgItem, text }) => {
  return (
    <Grid container>
      {isImgRight ? TextItem(text) : null}
      <Grid item xs={6}>
        <Image
          src={imgItem.src}
          alt={imgItem.alt}
          style={{
            width: '80%',
            height: 'auto',
            borderRadius: '5px',
          }}
        />
      </Grid>
      {!isImgRight ? TextItem(text) : null}
    </Grid>
  );
};
