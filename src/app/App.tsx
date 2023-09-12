import Providers from '@/app/providers/providers.tsx';
import AppRouter from '@/app/AppRouter.tsx';

const App = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};

export default App;
