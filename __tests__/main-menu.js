import 'react-native';
import React from 'react';
import MainMenu from '../js/components/main-menu.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import store from './../js/config/store';
import { Provider } from 'react-redux';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MainMenu/>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

