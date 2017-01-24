import 'react-native';
import React from 'react';
import FGApp from '../index.android.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { store } from './../js/config';
import { Provider } from 'react-redux';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <FGApp/>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
