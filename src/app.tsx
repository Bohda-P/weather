import React from 'react';
// Providers
import AppProviders from './providers/app-providers';
import StackNavigation from './navigation/stack-navigation';

const App: React.FC = () => {
  return (
    <AppProviders>
      <StackNavigation />
    </AppProviders>
  );
};
export default App;
