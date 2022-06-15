import React from 'react';
import { hot } from 'react-hot-loader/root';
import { App } from 'core/App/App';

const AppProviders: React.FunctionComponent = () => {
  return <App />;
};

export default hot(AppProviders);
