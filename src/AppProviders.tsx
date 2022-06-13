import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProviderComponent } from 'core/theme';
import { App } from 'core/App/App';

const AppProviders: React.FunctionComponent = () => {
  return (
    <ThemeProviderComponent>
      <App />
    </ThemeProviderComponent>
  );
};

export default hot(AppProviders);
