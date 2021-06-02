import React, { Fragment } from 'react';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        Store
      </Fragment>
    </Provider>
  );
}

export default App;
