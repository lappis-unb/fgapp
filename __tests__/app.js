import 'react-native';
import React from 'react';
import App from '../js/components/app.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import store from './../js/config/store';
import { Provider } from 'react-redux';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <App/>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
