import { Grid, Stack, Typography } from '@mui/material';
import { FC } from 'react';

export type WithTextImgType = {
  src: string;
  alt: string;
  headerText: string;
  bodyText: string;
};

type Props = {
  isImgRight: boolean;
  imgItem: WithTextImgType;
};

const TextItem: FC<{
  headerText: string;
  bodyText: string;
}> = ({ headerText, bodyText }) => {
  return (
    <Grid item xs={6}>
      <Stack spacing={1}>
        <Typography
          sx={{
            fontWeight: 'bold',
          }}
        >
          {headerText}
        </Typography>
        <Typography variant="body2">{bodyText}</Typography>
      </Stack>
    </Grid>
  );
};

export const ImgWithText: FC<Props> = ({ isImgRight, imgItem }) => {
  return (
    <Grid container>
      {isImgRight ? <TextItem headerText={imgItem.headerText} bodyText={imgItem.bodyText} /> : null}
      <Grid item xs={6}>
        <img
          src={imgItem.src}
          alt={imgItem.alt}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '5px',
          }}
        />
      </Grid>
      {isImgRight ? null : <TextItem headerText={imgItem.headerText} bodyText={imgItem.bodyText} />}
    </Grid>
  );
};
