import { Layout } from '@/components/layout/Layout';
import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

const AccessContent: FC = () => {
  return (
    <Layout>
      <Stack
        spacing={0.5}
        sx={{
          my: 2,
          mx: 1,
        }}
      >
        <Typography variant="h6">アクセス</Typography>
        <Typography>電話番号：:052-681-1311</Typography>
        <Typography>住所：〒456-0031 名古屋市熱田区神宮4-7-21</Typography>
        <Typography>最寄り駅：地下鉄名城線 熱田神宮伝馬町駅</Typography>
      </Stack>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.4613320405256!2d136.90722228987013!3d35.12015939040077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037a22d6078c19%3A0xa75d12dbca112444!2z5ZCN5Y-k5bGL5bel5a2m6Zmi5bCC6ZaA5a2m5qCh!5e0!3m2!1sja!2sjp!4v1698338255389!5m2!1sja!2sjp"
        loading="lazy"
        style={{
          width: '100vw',
          height: '40vh',
          padding: '10px',
          border: 'none',
        }}
      />
    </Layout>
  );
};

export default AccessContent;
