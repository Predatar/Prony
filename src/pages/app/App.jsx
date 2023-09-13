import React, { lazy, Suspense } from 'react';

import AppRouter from '../../routes/AppRouter';
import Spinner from '../spinner/Spinner';

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <AppRouter />
    </Suspense>
  );
};

export default App;
