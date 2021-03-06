import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppContainer from '../AppContainer';

export default function Router() {
  return (
    <BrowserRouter basename="/code-test-redux">
      <AppContainer />
    </BrowserRouter>
  );
}
