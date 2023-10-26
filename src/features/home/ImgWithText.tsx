import { ImgItemType } from '@/type/ImgItemType';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

type Props = {
  isImgRight: boolean;
  imgItem: ImgItemType;
  text: string;
};

export const ImgWithText: FC<Props> = ({ isImgRight, imgItem, text }) => {
  return (
    <Grid container>
      {isImgRight ? (
        <Grid item xs={6}>
          <Typography>{text}</Typography>
        </Grid>
      ) : null}
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
      {!isImgRight ? (
        <Grid item xs={6}>
          <Typography>{text}</Typography>
        </Grid>
      ) : null}
    </Grid>
  );
};
