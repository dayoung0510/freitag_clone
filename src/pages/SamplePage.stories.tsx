import SamplePage from './SamplePage';

export default {
  title: 'pages/ProductPage',
  component: SamplePage,
};

export const Sample = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <SamplePage />
    </div>
  );
};
