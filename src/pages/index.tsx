import { Layout } from '@/components/layout/Layout';

const Home = () => {
  return (
    <Layout>
      {[...Array(100)].map((_, index) => (
        <div key={index}>aaaa</div>
      ))}
    </Layout>
  );
};

export default Home;
