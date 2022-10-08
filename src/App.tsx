import { Suspense } from 'react';
import Router from './router/Router';

function App() {
  return (
    <Suspense>
      <Router />
    </Suspense>
  );
}

export default App;
