import { theme } from '@/theme/theme';
import { ThemeProvider } from '@mui/material';
import { FC, ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RecoilRoot>{children}</RecoilRoot>
      </ThemeProvider>
    </>
  );
};
